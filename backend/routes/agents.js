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
    // Get topic details if provided
    let topicContext = null;
    if (topicId) {
      const topicResult = await pool.query(
        'SELECT id, name, learning_outcome, focal_competency FROM topics WHERE id = $1',
        [topicId]
      );
      if (topicResult.rows.length > 0) {
        topicContext = topicResult.rows[0];
      }
    }

    // Get student info for context
    const studentResult = await pool.query(
      'SELECT full_name, grade FROM students WHERE id = $1',
      [req.studentId]
    );

    if (studentResult.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const student = studentResult.rows[0];

    // Get conversation context for better responses
    const conversationHistory = topicId
      ? await getConversationContext(req.studentId, topicId)
      : [];

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
