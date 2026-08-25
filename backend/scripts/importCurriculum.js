#!/usr/bin/env node
/**
 * Reusable NERDC curriculum importer — additive version.
 *
 * Matches the field structure already used by parsePdf.js / seedDb.js
 * (knowledge, skills, competencies, values, learningActivities, evaluationGuide),
 * but unlike seedDb.js this script:
 *   - Does NOT delete any existing data.
 *   - Only adds ONE new subject/grade at a time.
 *   - Runs as a single transaction — fails clean, nothing partial.
 *   - Checks for an existing theme with the same name/subject/grade first,
 *     and refuses to run if one already exists (use --force to override).
 *
 * Usage:
 *   DATABASE_URL="postgresql://..." node importCurriculum.js path/to/subject-data.js
 *
 * The input file is a JS module (like parsePdf.js) exporting `curriculumData`:
 *
 *   export const curriculumData = {
 *     subject: 'Physics',
 *     grade: 'SS3',
 *     curriculumVersion: 'legacy',   // optional, defaults to 'legacy'. Use 'nesri_2025' for the post-reform curriculum.
 *     themes: [
 *       {
 *         name: 'Theme name',
 *         topics: [
 *           {
 *             name: 'Topic name',
 *             learningOutcome: '...',        // required
 *             focalCompetency: '...',        // optional
 *             knowledge: ['...', '...'],     // optional, array -> content(section_type='knowledge')
 *             skills: ['...', '...'],        // optional, array -> content(section_type='skills')
 *             competencies: '...',           // optional, string -> content(section_type='competencies')
 *             values: '...',                 // optional, string -> content(section_type='values')
 *             learningActivities: ['...'],   // optional, array -> learning_activities (one row per item)
 *             resources: ['...'],            // optional, array -> joined into learning_activities.resources
 *             evaluationGuide: ['...']       // optional, array -> evaluation_guides
 *           }
 *         ]
 *       }
 *     ]
 *   };
 *
 * Optional flags:
 *   --force     Insert even if a theme with the same name/subject/grade already exists
 *   --dry-run   Validate and print a summary, but don't write anything
 */

import pg from 'pg';
import { pathToFileURL } from 'url';
import path from 'path';

const args = process.argv.slice(2);
const inputPath = args.find(a => !a.startsWith('--'));
const force = args.includes('--force');
const dryRun = args.includes('--dry-run');

if (!inputPath) {
  console.error('Usage: node importCurriculum.js path/to/subject-data.js [--force] [--dry-run]');
  process.exit(1);
}

if (!dryRun && !process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set.');
  console.error('Example: DATABASE_URL="postgresql://..." node importCurriculum.js data.js');
  process.exit(1);
}

const absolutePath = path.resolve(process.cwd(), inputPath);
const { curriculumData } = await import(pathToFileURL(absolutePath).href);

if (!curriculumData) {
  console.error(`Error: ${inputPath} does not export "curriculumData"`);
  process.exit(1);
}

const { subject, grade, themes, curriculumVersion = 'legacy' } = curriculumData;

if (!subject || !grade || !Array.isArray(themes) || themes.length === 0) {
  console.error('Error: curriculumData must have "subject", "grade", and a non-empty "themes" array');
  process.exit(1);
}

for (const [ti, theme] of themes.entries()) {
  if (!theme.name) {
    console.error(`Error: theme at index ${ti} is missing "name"`);
    process.exit(1);
  }
  if (!Array.isArray(theme.topics) || theme.topics.length === 0) {
    console.error(`Error: theme "${theme.name}" has no topics`);
    process.exit(1);
  }
  for (const [pi, topic] of theme.topics.entries()) {
    if (!topic.name || !topic.learningOutcome) {
      console.error(`Error: topic at index ${pi} in theme "${theme.name}" is missing "name" or "learningOutcome" (both required)`);
      process.exit(1);
    }
  }
}

const totalTopics = themes.reduce((sum, t) => sum + t.topics.length, 0);
console.log(`Parsed: ${subject} / ${grade} (${curriculumVersion}) — ${themes.length} theme(s), ${totalTopics} topic(s) total.`);

if (dryRun) {
  for (const theme of themes) {
    console.log(`  Theme: "${theme.name}" (${theme.topics.length} topics)`);
    for (const topic of theme.topics) {
      console.log(`    - ${topic.name}`);
    }
  }
  console.log('\nDry run only — nothing written.');
  process.exit(0);
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  const client = await pool.connect();
  try {
    if (!force) {
      const existing = await client.query(
        `SELECT name FROM themes WHERE subject = $1 AND grade = $2 AND curriculum_version = $3`,
        [subject, grade, curriculumVersion]
      );
      if (existing.rows.length > 0) {
        console.error(`Error: ${existing.rows.length} theme(s) already exist for ${subject}/${grade} (${curriculumVersion}):`);
        existing.rows.forEach(r => console.error(`  - ${r.name}`));
        console.error('Re-run with --force to insert anyway (this will NOT delete the existing rows, just add more).');
        process.exit(1);
      }
    }

    await client.query('BEGIN');

    let topicOrder = 1;

    for (const theme of themes) {
      const themeResult = await client.query(
        'INSERT INTO themes (name, subject, grade, curriculum_version) VALUES ($1, $2, $3, $4) RETURNING id',
        [theme.name, subject, grade, curriculumVersion]
      );
      const themeId = themeResult.rows[0].id;
      console.log(`✓ Theme: ${theme.name} (id ${themeId})`);

      for (const topic of theme.topics) {
        const topicResult = await client.query(
          'INSERT INTO topics (theme_id, name, learning_outcome, focal_competency, sequence_order) VALUES ($1, $2, $3, $4, $5) RETURNING id',
          [themeId, topic.name, topic.learningOutcome, topic.focalCompetency || null, topicOrder++]
        );
        const topicId = topicResult.rows[0].id;
        console.log(`  ✓ Topic: ${topic.name} (id ${topicId})`);

        if (topic.knowledge && topic.knowledge.length > 0) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'knowledge', topic.knowledge.join('\n')]
          );
        }

        if (topic.skills && topic.skills.length > 0) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'skills', topic.skills.join('\n')]
          );
        }

        if (topic.competencies) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'competencies', topic.competencies]
          );
        }

        if (topic.values) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'values', topic.values]
          );
        }

        if (topic.learningActivities && topic.learningActivities.length > 0) {
          const resourcesJoined = topic.resources && topic.resources.length > 0
            ? topic.resources.join(', ')
            : null;
          for (const activity of topic.learningActivities) {
            await client.query(
              'INSERT INTO learning_activities (topic_id, activity_description, resources) VALUES ($1, $2, $3)',
              [topicId, activity, resourcesJoined]
            );
          }
        }

        if (topic.evaluationGuide && topic.evaluationGuide.length > 0) {
          await client.query(
            'INSERT INTO evaluation_guides (topic_id, evaluation_criteria) VALUES ($1, $2)',
            [topicId, topic.evaluationGuide.join('\n')]
          );
        }
      }
    }

    await client.query('COMMIT');
    console.log(`\n✓ Done. Inserted ${themes.length} theme(s), ${totalTopics} topic(s) for ${subject}/${grade}.`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('\nImport failed, rolled back. Error:', err.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

run();
