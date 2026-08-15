import express from 'express';
import { pool } from '../server.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get global leaderboard (top students by points)
router.get('/global', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;

    const result = await pool.query(
      `SELECT
        s.id,
        s.full_name,
        s.grade,
        gs.total_points,
        gs.level,
        gs.current_streak,
        gs.longest_streak,
        COUNT(sb.id) as badge_count,
        ROW_NUMBER() OVER (ORDER BY gs.total_points DESC, gs.level DESC) as rank
      FROM students s
      LEFT JOIN gamification_stats gs ON s.id = gs.student_id
      LEFT JOIN student_badges sb ON s.id = sb.student_id
      GROUP BY s.id, s.full_name, s.grade, gs.total_points, gs.level, gs.current_streak, gs.longest_streak
      ORDER BY gs.total_points DESC, gs.level DESC
      LIMIT $1`,
      [limit]
    );

    const leaderboard = result.rows.map(row => ({
      rank: row.rank,
      studentId: row.id,
      name: row.full_name,
      grade: row.grade,
      points: row.total_points || 0,
      level: row.level || 1,
      currentStreak: row.current_streak || 0,
      longestStreak: row.longest_streak || 0,
      badgeCount: parseInt(row.badge_count) || 0
    }));

    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching global leaderboard:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ error: 'Error fetching leaderboard', details: error.message });
  }
});

// Get leaderboard by grade
router.get('/grade/:grade', async (req, res) => {
  try {
    const { grade } = req.params;
    const limit = parseInt(req.query.limit) || 20;

    const result = await pool.query(
      `SELECT
        s.id,
        s.full_name,
        s.grade,
        gs.total_points,
        gs.level,
        gs.current_streak,
        gs.longest_streak,
        COUNT(sb.id) as badge_count,
        ROW_NUMBER() OVER (ORDER BY gs.total_points DESC, gs.level DESC) as rank
      FROM students s
      LEFT JOIN gamification_stats gs ON s.id = gs.student_id
      LEFT JOIN student_badges sb ON s.id = sb.student_id
      WHERE s.grade = $1
      GROUP BY s.id, s.full_name, s.grade, gs.total_points, gs.level, gs.current_streak, gs.longest_streak
      ORDER BY gs.total_points DESC, gs.level DESC
      LIMIT $2`,
      [grade, limit]
    );

    const leaderboard = result.rows.map(row => ({
      rank: row.rank,
      studentId: row.id,
      name: row.full_name,
      grade: row.grade,
      points: row.total_points || 0,
      level: row.level || 1,
      currentStreak: row.current_streak || 0,
      longestStreak: row.longest_streak || 0,
      badgeCount: parseInt(row.badge_count) || 0
    }));

    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching grade leaderboard:', error);
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
});

// Get weekly leaderboard (streak leaders)
router.get('/weekly', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;

    const result = await pool.query(
      `SELECT
        s.id,
        s.full_name,
        s.grade,
        gs.total_points,
        gs.level,
        gs.current_streak,
        gs.longest_streak,
        COUNT(sb.id) as badge_count,
        ROW_NUMBER() OVER (ORDER BY gs.current_streak DESC, gs.total_points DESC) as rank
      FROM students s
      LEFT JOIN gamification_stats gs ON s.id = gs.student_id
      LEFT JOIN student_badges sb ON s.id = sb.student_id
      WHERE gs.current_streak > 0
      GROUP BY s.id, s.full_name, s.grade, gs.total_points, gs.level, gs.current_streak, gs.longest_streak
      ORDER BY gs.current_streak DESC, gs.total_points DESC
      LIMIT $1`,
      [limit]
    );

    const leaderboard = result.rows.map(row => ({
      rank: row.rank,
      studentId: row.id,
      name: row.full_name,
      grade: row.grade,
      points: row.total_points || 0,
      level: row.level || 1,
      currentStreak: row.current_streak || 0,
      longestStreak: row.longest_streak || 0,
      badgeCount: parseInt(row.badge_count) || 0
    }));

    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching weekly leaderboard:', error);
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
});

// Get student's rank and surrounding players
router.get('/rank', verifyToken, async (req, res) => {
  try {
    const limit = 5; // 2 above, self, 2 below

    // Get all ranks
    const rankResult = await pool.query(
      `SELECT
        s.id,
        s.full_name,
        s.grade,
        gs.total_points,
        gs.level,
        gs.current_streak,
        gs.longest_streak,
        COUNT(sb.id) as badge_count,
        ROW_NUMBER() OVER (ORDER BY gs.total_points DESC, gs.level DESC) as rank
      FROM students s
      LEFT JOIN gamification_stats gs ON s.id = gs.student_id
      LEFT JOIN student_badges sb ON s.id = sb.student_id
      GROUP BY s.id, s.full_name, s.grade, gs.total_points, gs.level, gs.current_streak, gs.longest_streak
      ORDER BY gs.total_points DESC, gs.level DESC`
    );

    // Find student's rank
    const studentRankRow = rankResult.rows.find(r => r.id === req.studentId);

    if (!studentRankRow) {
      return res.json({
        studentRank: null,
        surrounding: []
      });
    }

    const studentRank = studentRankRow.rank;
    const startRank = Math.max(1, studentRank - 2);
    const surrounding = rankResult.rows
      .filter(r => r.rank >= startRank && r.rank <= studentRank + 2)
      .map(row => ({
        rank: row.rank,
        studentId: row.id,
        name: row.full_name,
        grade: row.grade,
        points: row.total_points || 0,
        level: row.level || 1,
        currentStreak: row.current_streak || 0,
        longestStreak: row.longest_streak || 0,
        badgeCount: parseInt(row.badge_count) || 0,
        isCurrentUser: row.id === req.studentId
      }));

    res.json({
      studentRank: studentRank,
      surrounding: surrounding
    });
  } catch (error) {
    console.error('Error fetching student rank:', error);
    res.status(500).json({ error: 'Error fetching rank' });
  }
});

// Get student's badges and achievements
router.get('/badges/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;

    const result = await pool.query(
      `SELECT
        badge_type,
        badge_name,
        badge_description,
        metadata,
        earned_at
      FROM student_badges
      WHERE student_id = $1
      ORDER BY earned_at DESC`,
      [studentId]
    );

    const badges = result.rows.map(row => ({
      type: row.badge_type,
      name: row.badge_name,
      description: row.badge_description,
      metadata: row.metadata,
      earnedAt: row.earned_at
    }));

    res.json(badges);
  } catch (error) {
    console.error('Error fetching badges:', error);
    res.status(500).json({ error: 'Error fetching badges' });
  }
});

export default router;
