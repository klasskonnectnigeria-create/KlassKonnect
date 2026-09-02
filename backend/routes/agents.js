import express from 'express';
import { pool } from '../server.js';
import { verifyToken } from '../middleware/auth.js';
import { orchestrateQuery } from '../agents/orchestrator.js';
import { getConversationContext, saveConversation, getTopicUnderstanding } from '../services/conversationManager.js';

const router = express.Router();

// Main agent endpoint - student asks a question or requests help
router.post('/chat', verifyToken, async (req, res) => {
  const { message, topicId, agentType } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Get student info for context (needed first so the topic lookup below can be grade-scoped)
    const studentResult = await pool.query(
      'SELECT full_name, grade FROM students WHERE id = $1',
      [req.studentId]
    );

    if (studentResult.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const student = studentResult.rows[0];

    // Get topic details if provided, scoped to the student's own grade (matches content.js's pattern)
    let topicContext = null;
    if (topicId) {
      const topicResult = await pool.query(
        `SELECT t.id, t.name, t.learning_outcome, t.focal_competency, th.subject, th.grade
         FROM topics t
         JOIN themes th ON th.id = t.theme_id
         WHERE t.id = $1 AND th.grade = $2`,
        [topicId, student.grade]
      );

      if (topicResult.rows.length === 0) {
        return res.status(403).json({ error: 'Topic not available for your grade' });
      }

      const topic = topicResult.rows[0];

      const [contentResult, activitiesResult, evaluationResult] = await Promise.all([
        pool.query('SELECT section_type, content_text FROM content WHERE topic_id = $1', [topicId]),
        pool.query('SELECT activity_description FROM learning_activities WHERE topic_id = $1', [topicId]),
        pool.query('SELECT evaluation_criteria FROM evaluation_guides WHERE topic_id = $1', [topicId])
      ]);

      const contentByType = {};
      contentResult.rows.forEach(row => {
        contentByType[row.section_type] = row.content_text;
      });

      topicContext = {
        id: topic.id,
        name: topic.name,
        subject: topic.subject,
        grade: topic.grade,
        learning_outcome: topic.learning_outcome,
        focal_competency: topic.focal_competency,
        knowledge: contentByType.knowledge || null,
        skills: contentByType.skills || null,
        competencies: contentByType.competencies || null,
        values: contentByType.values || null,
        activities: activitiesResult.rows.map(row => row.activity_description),
        evaluationGuide: evaluationResult.rows[0]?.evaluation_criteria || null
      };
    }

    // Get conversation context for better responses (use in-memory history for now)
    const conversationHistory = [];

    // Get student's understanding level on this topic
    const understanding = topicId
      ? await getTopicUnderstanding(req.studentId, topicId)
      : { level: 0, status: 'not_started', attempts: 0 };

    // Call orchestrator to route to appropriate agent
    const response = await orchestrateQuery({
      studentId: req.studentId,
      studentName: student.full_name,
      grade: student.grade,
      message,
      topicId,
      topicContext,
      conversationHistory,
      understanding,
      preferredAgentType: agentType // 'tutor', 'assessment', 'practice'
    });

    // Save conversation to database
    if (topicId) {
      await saveConversation(
        req.studentId,
        topicId,
        message,
        response.content,
        response.agentType
      );

      // Update student progress on this topic
      await pool.query(
        `UPDATE student_progress
         SET status = 'in_progress', last_accessed = CURRENT_TIMESTAMP
         WHERE student_id = $1 AND topic_id = $2`,
        [req.studentId, topicId]
      );
    }

    res.json({
      response: response.content,
      agentType: response.agentType,
      nextStep: response.nextStep
    });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      error: 'Error processing your question. Please try again.',
      details: error.message
    });
  }
});

// Get conversation history for a topic
router.get('/history/:topicId', verifyToken, async (req, res) => {
  const { topicId } = req.params;

  try {
    const result = await pool.query(
      `SELECT user_message, ai_response, agent_type, created_at
       FROM conversation_logs
       WHERE student_id = $1 AND topic_id = $2
       ORDER BY created_at DESC
       LIMIT 50`,
      [req.studentId, topicId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching conversation history:', error);
    res.status(500).json({ error: 'Error fetching history' });
  }
});

// Clear conversation history (for testing)
router.delete('/history/:topicId', verifyToken, async (req, res) => {
  const { topicId } = req.params;

  try {
    await pool.query(
      `DELETE FROM conversation_logs
       WHERE student_id = $1 AND topic_id = $2`,
      [req.studentId, topicId]
    );

    res.json({ message: 'Conversation history cleared' });
  } catch (error) {
    console.error('Error clearing history:', error);
    res.status(500).json({ error: 'Error clearing history' });
  }
});

export default router;
