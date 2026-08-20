import express from 'express';
import { pool } from '../server.js';
import { curriculumData } from '../scripts/parsePdf.js';

const router = express.Router();

// Comprehensive seed endpoint that includes themes, topics, and test data
router.post('/seed-test-data', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // 1. Create test students
    await client.query(`
      INSERT INTO students (email, password_hash, full_name, grade) VALUES
      ('alice@test.com', 'hash1', 'Alice Johnson', 'Primary 4'),
      ('bob@test.com', 'hash2', 'Bob Smith', 'Primary 4'),
      ('charlie@test.com', 'hash3', 'Charlie Brown', 'Primary 5'),
      ('diana@test.com', 'hash4', 'Diana Prince', 'Primary 5'),
      ('eve@test.com', 'hash5', 'Eve Davis', 'Primary 6'),
      ('test@example.com', 'test-hash', 'Test User', '10')
      ON CONFLICT (email) DO NOTHING
    `);

    // 2. Get student IDs
    const students = await client.query(`
      SELECT id, email FROM students WHERE email IN
      ('alice@test.com', 'bob@test.com', 'charlie@test.com', 'diana@test.com', 'eve@test.com', 'test@example.com')
    `);

    const studentMap = {};
    students.rows.forEach(row => {
      studentMap[row.email] = row.id;
    });

    // 3. Seed curriculum (themes and topics)
    let topicOrder = 1;
    const themeStats = [];

    for (const theme of curriculumData.themes) {
      const themeResult = await client.query(
        'INSERT INTO themes (name, subject, grade, description) VALUES ($1, $2, $3, $4) RETURNING id',
        [theme.name, curriculumData.subject, curriculumData.grade, `Learn about ${theme.name}`]
      );
      const themeId = themeResult.rows[0].id;
      let topicCount = 0;

      for (const topic of theme.topics) {
        const topicResult = await client.query(
          'INSERT INTO topics (theme_id, name, learning_outcome, focal_competency, sequence_order) VALUES ($1, $2, $3, $4, $5) RETURNING id',
          [themeId, topic.name, topic.learningOutcome, topic.focalCompetency, topicOrder++]
        );
        const topicId = topicResult.rows[0].id;
        topicCount++;

        // Insert content sections
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

        // Insert learning activities
        if (topic.learningActivities && topic.learningActivities.length > 0) {
          for (const activity of topic.learningActivities) {
            await client.query(
              'INSERT INTO learning_activities (topic_id, activity_description, resources) VALUES ($1, $2, $3)',
              [topicId, activity, topic.resources?.join(', ') || 'N/A']
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

        // Create progress records for test students
        for (const email of ['alice@test.com', 'bob@test.com', 'test@example.com']) {
          if (studentMap[email]) {
            await client.query(`
              INSERT INTO student_progress (student_id, topic_id, status, understanding_level, attempts)
              VALUES ($1, $2, 'not_started', 0, 0)
              ON CONFLICT DO NOTHING
            `, [studentMap[email], topicId]);
          }
        }
      }

      themeStats.push({ theme: theme.name, topicCount });
    }

    // 4. Insert gamification stats
    const stats = [
      { email: 'alice@test.com', points: 1500, level: 5, streak: 14, longest: 30 },
      { email: 'bob@test.com', points: 1200, level: 4, streak: 7, longest: 21 },
      { email: 'charlie@test.com', points: 950, level: 3, streak: 3, longest: 15 },
      { email: 'diana@test.com', points: 800, level: 3, streak: 5, longest: 12 },
      { email: 'eve@test.com', points: 650, level: 2, streak: 2, longest: 8 },
      { email: 'test@example.com', points: 0, level: 1, streak: 0, longest: 0 }
    ];

    for (const stat of stats) {
      await client.query(`
        INSERT INTO gamification_stats (student_id, total_points, level, current_streak, longest_streak, last_activity_date)
        VALUES ($1, $2, $3, $4, $5, CURRENT_DATE)
        ON CONFLICT (student_id) DO UPDATE
        SET total_points = $2, level = $3, current_streak = $4, longest_streak = $5
      `, [studentMap[stat.email], stat.points, stat.level, stat.streak, stat.longest]);
    }

    // 5. Add badges
    const badges = [
      { email: 'alice@test.com', type: 'FAST_SOLVER', name: 'Speed Demon', desc: 'Solved 10 problems under 30 seconds' },
      { email: 'alice@test.com', type: 'STREAK_7', name: '7-Day Streak', desc: 'Completed 7 days in a row' },
      { email: 'bob@test.com', type: 'STREAK_7', name: '7-Day Streak', desc: 'Completed 7 days in a row' },
      { email: 'charlie@test.com', type: 'FIRST_LESSON', name: 'Getting Started', desc: 'Completed first lesson' }
    ];

    for (const badge of badges) {
      await client.query(`
        INSERT INTO student_badges (student_id, badge_type, badge_name, badge_description)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT DO NOTHING
      `, [studentMap[badge.email], badge.type, badge.name, badge.desc]);
    }

    await client.query('COMMIT');
    client.release();

    res.json({
      success: true,
      message: 'Complete test data seeded successfully',
      students: students.rows.length,
      themes: themeStats.length,
      topicsPerTheme: themeStats,
      badges: badges.length,
      gamificationStats: stats.length
    });
  } catch (error) {
    await client.query('ROLLBACK');
    client.release();
    console.error('Error seeding data:', error);
    res.status(500).json({ error: error.message, details: error.toString() });
  }
});

export default router;
