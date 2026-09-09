#!/usr/bin/env node
/**
 * Primary 1-3 Curriculum Importer
 * Handles the unique week-based structure of Primary curriculum files
 */

import pg from 'pg';
import { pathToFileURL } from 'url';
import path from 'path';

const files = [
  'primary_1_curriculum_data',
  'primary_1_social_studies_cca_phe',
  'primary_2_curriculum_data',
  'primary_3_curriculum_data'
];

if (!process.env.DATABASE_URL) {
  console.error('ERROR: DATABASE_URL not set');
  process.exit(1);
}

console.log('╔════════════════════════════════════════════════════════╗');
console.log('║     PRIMARY 1-3 CURRICULUM IMPORT                      ║');
console.log('╚════════════════════════════════════════════════════════╝');
console.log('');

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

async function importPrimarySubject(fileName) {
  try {
    const filePath = path.resolve(process.cwd(), `scripts/curriculum-data/${fileName}.js`);
    const module = await import(pathToFileURL(filePath).href);

    // Get all exported subjects from the module
    const subjects = Object.entries(module)
      .filter(([key, value]) => {
        return value && typeof value === 'object' &&
               (value.grade_level || value.subject_name);
      })
      .map(([key, value]) => value);

    if (subjects.length === 0) {
      console.log(`⚠️  No subjects found in ${fileName}`);
      return false;
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      for (const subject of subjects) {
        const { grade_level, subject_name, terms, curriculum_version = 'legacy' } = subject;

        console.log(`📚 Importing ${subject_name} (${grade_level})`);

        // Create theme
        const themeName = `${grade_level} ${subject_name}`;
        const themeResult = await client.query(
          `INSERT INTO themes (name, grade, curriculum_version, description)
           VALUES ($1, $2, $3, $4)
           RETURNING id`,
          [themeName, grade_level, curriculum_version, `${subject_name} - All Terms`]
        );

        const themeId = themeResult.rows[0].id;

        // Process all terms
        for (const [termKey, termData] of Object.entries(terms || {})) {
          const topicsList = termData.topics || [];

          for (const topicData of topicsList) {
            const topicName = `${topicData.topic}`;
            const learningOutcome = (topicData.learning_outcomes || []).join('; ') ||
                                   topicData.topic;

            // Create topic
            const topicResult = await client.query(
              `INSERT INTO topics (theme_id, name, learning_outcome, focal_competency)
               VALUES ($1, $2, $3, $4)
               RETURNING id`,
              [themeId, topicName, learningOutcome, null]
            );

            const topicId = topicResult.rows[0].id;

            // Insert learning outcomes as content
            if (topicData.learning_outcomes && Array.isArray(topicData.learning_outcomes)) {
              for (const outcome of topicData.learning_outcomes) {
                await client.query(
                  `INSERT INTO content (topic_id, section_type, content_text)
                   VALUES ($1, $2, $3)`,
                  [topicId, 'learning_outcome', outcome]
                );
              }
            }
          }
        }

        console.log(`   ✅ ${subject_name} (${grade_level}) imported`);
      }

      await client.query('COMMIT');
      return true;

    } catch (error) {
      await client.query('ROLLBACK');
      console.error(`   ❌ Error:`, error.message);
      return false;
    } finally {
      client.release();
    }

  } catch (error) {
    console.error(`   ❌ Failed to load ${fileName}:`, error.message);
    return false;
  }
}

async function main() {
  let imported = 0;

  for (const file of files) {
    const success = await importPrimarySubject(file);
    if (success) imported++;
  }

  console.log('');
  console.log('══════════════════════════════════════════════════════');
  console.log(`✅ Imported: ${imported}/${files.length} files`);

  if (imported === files.length) {
    console.log('');
    console.log('🎉 PRIMARY 1-3 CURRICULUM IMPORTED SUCCESSFULLY!');
  }

  await pool.end();
  process.exit(imported === files.length ? 0 : 1);
}

main().catch(error => {
  console.error('FATAL ERROR:', error);
  process.exit(1);
});
