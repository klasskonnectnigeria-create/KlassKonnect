import express from 'express';
import { pool } from '../server.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get student's overall progress
router.get('/', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
        COUNT(*) as total_topics,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_topics,
        ROUND(AVG(understanding_level)::numeric, 2) as avg_understanding_level
      FROM student_progress
      WHERE student_id = $1`,
      [req.studentId]
    );

    const stats = result.rows[0];
    res.json({
      totalTopics: parseInt(stats.total_topics) || 0,
      completedTopics: parseInt(stats.completed_topics) || 0,
      avgUnderstanding: parseFloat(stats.avg_understanding_level) || 0
    });
  } catch (error) {
    console.error('Error fetching progress stats:', error);
    res.status(500).json({ error: 'Error fetching progress' });
  }
});

// Update progress for a topic
router.post('/topics/:topicId', verifyToken, async (req, res) => {
  const { topicId } = req.params;
  const { status, understandingLevel } = req.body;

  try {
    // Check if progress record exists
    const existingResult = await pool.query(
      'SELECT id FROM student_progress WHERE student_id = $1 AND topic_id = $2',
      [req.studentId, topicId]
    );

    let result;
    if (existingResult.rows.length > 0) {
      // Update existing
      result = await pool.query(
        `UPDATE student_progress
        SET status = $1,
            understanding_level = COALESCE($2, understanding_level),
            attempts = attempts + 1,
            last_accessed = CURRENT_TIMESTAMP,
            completed_at = CASE WHEN $1 = 'completed' THEN CURRENT_TIMESTAMP ELSE completed_at END
        WHERE student_id = $3 AND topic_id = $4
        RETURNING id, status, understanding_level, attempts`,
        [status, understandingLevel, req.studentId, topicId]
      );
    } else {
      // Create new
      result = await pool.query(
        `INSERT INTO student_progress (student_id, topic_id, status, understanding_level, attempts, last_accessed)
        VALUES ($1, $2, $3, $4, 1, CURRENT_TIMESTAMP)
        RETURNING id, status, understanding_level, attempts`,
        [req.studentId, topicId, status, understandingLevel || 0]
      );
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ error: 'Error updating progress' });
  }
});

// Get topic-specific progress
router.get('/topics/:topicId', verifyToken, async (req, res) => {
  const { topicId } = req.params;

  try {
    const result = await pool.query(
      `SELECT
        id, status, understanding_level, attempts, last_accessed, completed_at
      FROM student_progress
      WHERE student_id = $1 AND topic_id = $2`,
      [req.studentId, topicId]
    );

    if (result.rows.length === 0) {
      return res.json({
        status: 'not_started',
        understandingLevel: 0,
        attempts: 0
      });
    }

    const progress = result.rows[0];
    res.json({
      status: progress.status,
      understandingLevel: progress.understanding_level,
      attempts: progress.attempts,
      lastAccessed: progress.last_accessed,
      completedAt: progress.completed_at
    });
  } catch (error) {
    console.error('Error fetching topic progress:', error);
    res.status(500).json({ error: 'Error fetching topic progress' });
  }
});

export default router;
