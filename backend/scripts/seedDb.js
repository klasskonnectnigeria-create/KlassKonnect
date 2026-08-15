import pg from 'pg';
import { curriculumData } from './parsePdf.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/nerdc_ai_tutor'
});

async function seedDatabase() {
  try {
    await client.connect();
    console.log('Connected to database');

    // Clear existing data
    await client.query('DELETE FROM evaluation_guides');
    await client.query('DELETE FROM learning_activities');
    await client.query('DELETE FROM content');
    await client.query('DELETE FROM topics');
    await client.query('DELETE FROM themes');

    let themeOrder = 1;
    let topicOrder = 1;

    for (const theme of curriculumData.themes) {
      // Insert theme
      const themeResult = await client.query(
        'INSERT INTO themes (name, subject, grade) VALUES ($1, $2, $3) RETURNING id',
        [theme.name, curriculumData.subject, curriculumData.grade]
      );
      const themeId = themeResult.rows[0].id;
      console.log(`✓ Inserted theme: ${theme.name}`);

      // Insert topics for this theme
      for (const topic of theme.topics) {
        const topicResult = await client.query(
          'INSERT INTO topics (theme_id, name, learning_outcome, focal_competency, sequence_order) VALUES ($1, $2, $3, $4, $5) RETURNING id',
          [themeId, topic.name, topic.learningOutcome, topic.focalCompetency, topicOrder++]
        );
        const topicId = topicResult.rows[0].id;
        console.log(`  ✓ Inserted topic: ${topic.name}`);

        // Insert knowledge content
        if (topic.knowledge && topic.knowledge.length > 0) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'knowledge', topic.knowledge.join('\n')]
          );
        }

        // Insert skills content
        if (topic.skills && topic.skills.length > 0) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'skills', topic.skills.join('\n')]
          );
        }

        // Insert competencies
        if (topic.competencies) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'competencies', topic.competencies]
          );
        }

        // Insert values
        if (topic.values) {
          await client.query(
            'INSERT INTO content (topic_id, section_type, content_text) VALUES ($1, $2, $3)',
            [topicId, 'values', topic.values]
          );
        }

        // Insert learning activities
        if (topic.learningActivities && topic.learningActivities.length > 0) {
          for (const activity of topic.learningActivities) {
            await client.query(
              'INSERT INTO learning_activities (topic_id, activity_description, resources) VALUES ($1, $2, $3)',
              [topicId, activity, topic.resources.join(', ')]
            );
          }
        }

        // Insert evaluation guides
        if (topic.evaluationGuide && topic.evaluationGuide.length > 0) {
          await client.query(
            'INSERT INTO evaluation_guides (topic_id, evaluation_criteria) VALUES ($1, $2)',
            [topicId, topic.evaluationGuide.join('\n')]
          );
        }
      }
    }

    console.log('\n✓ Database seeded successfully!');
    await client.end();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
