import express from 'express';
import { pool } from '../server.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get themes for the logged-in student's grade
router.get('/themes', verifyToken, async (req, res) => {
  try {
    const studentResult = await pool.query(
      'SELECT grade FROM students WHERE id = $1',
      [req.studentId]
    );

    if (studentResult.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const { grade } = studentResult.rows[0];

    const result = await pool.query(
      'SELECT id, name, description FROM themes WHERE grade = $1 ORDER BY id ASC',
      [grade]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching themes:', error);
    res.status(500).json({ error: 'Error fetching themes' });
  }
});

// Get topics for a theme (scoped to the requesting student's grade)
router.get('/themes/:themeId/topics', verifyToken, async (req, res) => {
  const { themeId } = req.params;

  try {
    const studentResult = await pool.query(
      'SELECT grade FROM students WHERE id = $1',
      [req.studentId]
    );

    if (studentResult.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const { grade } = studentResult.rows[0];

    const themeResult = await pool.query(
      'SELECT id FROM themes WHERE id = $1 AND grade = $2',
      [themeId, grade]
    );

    if (themeResult.rows.length === 0) {
      return res.status(403).json({ error: 'Theme not available for your grade' });
    }

    const result = await pool.query(
      'SELECT id, name, learning_outcome, focal_competency FROM topics WHERE theme_id = $1 ORDER BY sequence_order ASC',
      [themeId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).json({ error: 'Error fetching topics' });
  }
});

// Get full topic details with content, activities, and evaluations
router.get('/topics/:topicId', verifyToken, async (req, res) => {
  const { topicId } = req.params;

  try {
    // Get topic basic info
    const topicResult = await pool.query(
      'SELECT id, name, learning_outcome, focal_competency FROM topics WHERE id = $1',
      [topicId]
    );

    if (topicResult.rows.length === 0) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicResult.rows[0];

    // Get content
    const contentResult = await pool.query(
      'SELECT section_type, content_text FROM content WHERE topic_id = $1 ORDER BY section_type ASC',
      [topicId]
    );

    // Get learning activities
    const activitiesResult = await pool.query(
      'SELECT activity_description, resources FROM learning_activities WHERE topic_id = $1',
      [topicId]
    );

    // Get evaluation guides
    const evaluationResult = await pool.query(
      'SELECT evaluation_criteria FROM evaluation_guides WHERE topic_id = $1',
      [topicId]
    );

    // Organize content by type
    const content = {};
    contentResult.rows.forEach(row => {
      content[row.section_type] = row.content_text;
    });

    res.json({
      ...topic,
      content,
      learningActivities: activitiesResult.rows,
      evaluationGuide: evaluationResult.rows[0]?.evaluation_criteria || ''
    });
  } catch (error) {
    console.error('Error fetching topic details:', error);
    res.status(500).json({ error: 'Error fetching topic details' });
  }
});

// Get student's learning progress for a theme
router.get('/themes/:themeId/progress', verifyToken, async (req, res) => {
  const { themeId } = req.params;

  try {
    const result = await pool.query(
      `SELECT
        t.id, t.name,
        COALESCE(sp.status, 'not_started') as status,
        COALESCE(sp.understanding_level, 0) as understanding_level,
        sp.last_accessed
      FROM topics t
      LEFT JOIN student_progress sp ON t.id = sp.topic_id AND sp.student_id = $1
      WHERE t.theme_id = $2
      ORDER BY t.sequence_order ASC`,
      [req.studentId, themeId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Error fetching progress' });
  }
});

export default router;
