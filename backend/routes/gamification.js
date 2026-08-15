import express from 'express';
import { pool } from '../server.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Sync gamification stats from mobile
router.post('/stats', verifyToken, async (req, res) => {
  try {
    const { totalPoints, level, currentStreak, longestStreak } = req.body;
    const studentId = req.studentId;

    // Check if stats exist
    const existingResult = await pool.query(
      'SELECT id FROM gamification_stats WHERE student_id = $1',
      [studentId]
    );

    let result;
    if (existingResult.rows.length > 0) {
      // Update existing
      result = await pool.query(
        `UPDATE gamification_stats
        SET total_points = $1,
            level = $2,
            current_streak = $3,
            longest_streak = GREATEST(longest_streak, $4),
            updated_at = CURRENT_TIMESTAMP
        WHERE student_id = $5
        RETURNING total_points, level, current_streak, longest_streak`,
        [totalPoints, level, currentStreak, longestStreak || currentStreak, studentId]
      );
    } else {
      // Create new
      result = await pool.query(
        `INSERT INTO gamification_stats (student_id, total_points, level, current_streak, longest_streak, last_activity_date)
        VALUES ($1, $2, $3, $4, $5, CURRENT_DATE)
        RETURNING total_points, level, current_streak, longest_streak`,
        [studentId, totalPoints, level, currentStreak, longestStreak || currentStreak]
      );
    }

    const stats = result.rows[0];
    res.json({
      totalPoints: stats.total_points,
      level: stats.level,
      currentStreak: stats.current_streak,
      longestStreak: stats.longest_streak
    });
  } catch (error) {
    console.error('Error syncing gamification stats:', error);
    res.status(500).json({ error: 'Error syncing stats' });
  }
});

// Sync badge from mobile
router.post('/badges', verifyToken, async (req, res) => {
  try {
    const { badgeType, badgeName, badgeDescription, metadata } = req.body;
    const studentId = req.studentId;

    // Check if badge already exists
    const existingResult = await pool.query(
      'SELECT id FROM student_badges WHERE student_id = $1 AND badge_type = $2',
      [studentId, badgeType]
    );

    if (existingResult.rows.length > 0) {
      // Badge already earned, skip
      return res.json({ message: 'Badge already earned' });
    }

    // Create new badge
    const result = await pool.query(
      `INSERT INTO student_badges (student_id, badge_type, badge_name, badge_description, metadata)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, badge_type, badge_name, earned_at`,
      [studentId, badgeType, badgeName, badgeDescription, metadata || null]
    );

    const badge = result.rows[0];
    res.json({
      id: badge.id,
      type: badge.badge_type,
      name: badge.badge_name,
      earnedAt: badge.earned_at
    });
  } catch (error) {
    console.error('Error syncing badge:', error);
    res.status(500).json({ error: 'Error syncing badge' });
  }
});

// Get student's gamification stats
router.get('/stats', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
        total_points, level, current_streak, longest_streak
      FROM gamification_stats
      WHERE student_id = $1`,
      [req.studentId]
    );

    if (result.rows.length === 0) {
      return res.json({
        totalPoints: 0,
        level: 1,
        currentStreak: 0,
        longestStreak: 0
      });
    }

    const stats = result.rows[0];
    res.json({
      totalPoints: stats.total_points,
      level: stats.level,
      currentStreak: stats.current_streak,
      longestStreak: stats.longest_streak
    });
  } catch (error) {
    console.error('Error fetching gamification stats:', error);
    res.status(500).json({ error: 'Error fetching stats' });
  }
});

export default router;
