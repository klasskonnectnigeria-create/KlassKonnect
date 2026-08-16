import express from 'express';
import { pool } from '../server.js';

const router = express.Router();

router.post('/seed-test-data', async (req, res) => {
  try {
    const client = await pool.connect();

    // Create test students
    await client.query(`
      INSERT INTO students (email, password_hash, full_name, grade) VALUES
      ('alice@test.com', 'hash1', 'Alice Johnson', 'Primary 4'),
      ('bob@test.com', 'hash2', 'Bob Smith', 'Primary 4'),
      ('charlie@test.com', 'hash3', 'Charlie Brown', 'Primary 5'),
      ('diana@test.com', 'hash4', 'Diana Prince', 'Primary 5'),
      ('eve@test.com', 'hash5', 'Eve Davis', 'Primary 6')
      ON CONFLICT (email) DO NOTHING
    `);

    // Get student IDs
    const students = await client.query(`
      SELECT id, email FROM students WHERE email IN
      ('alice@test.com', 'bob@test.com', 'charlie@test.com', 'diana@test.com', 'eve@test.com')
    `);

    const studentMap = {};
    students.rows.forEach(row => {
      studentMap[row.email] = row.id;
    });

    // Insert gamification stats
    const stats = [
      { email: 'alice@test.com', points: 1500, level: 5, streak: 14, longest: 30 },
      { email: 'bob@test.com', points: 1200, level: 4, streak: 7, longest: 21 },
      { email: 'charlie@test.com', points: 950, level: 3, streak: 3, longest: 15 },
      { email: 'diana@test.com', points: 800, level: 3, streak: 5, longest: 12 },
      { email: 'eve@test.com', points: 650, level: 2, streak: 2, longest: 8 }
    ];

    for (const stat of stats) {
      await client.query(`
        INSERT INTO gamification_stats (student_id, total_points, level, current_streak, longest_streak, last_activity_date)
        VALUES ($1, $2, $3, $4, $5, CURRENT_DATE)
        ON CONFLICT (student_id) DO UPDATE
        SET total_points = $2, level = $3, current_streak = $4, longest_streak = $5
      `, [studentMap[stat.email], stat.points, stat.level, stat.streak, stat.longest]);
    }

    // Add badges
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

    client.release();

    res.json({
      success: true,
      message: 'Test data seeded successfully',
      students: students.rows.length,
      badges: badges.length
    });
  } catch (error) {
    console.error('Error seeding data:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
