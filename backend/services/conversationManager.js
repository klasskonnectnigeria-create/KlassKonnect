import { pool } from '../server.js';

// Get conversation history for a student and topic
export async function getConversationContext(studentId, topicId) {
  try {
    const result = await pool.query(
      `SELECT user_message, ai_response, agent_type, created_at
       FROM conversation_logs
       WHERE student_id = $1 AND topic_id = $2
       ORDER BY created_at DESC
       LIMIT 10`,
      [studentId, topicId]
    );

    // Return in chronological order (oldest first)
    return result.rows.reverse().map(row => ({
      user: row.user_message,
      assistant: row.ai_response,
      agentType: row.agent_type,
      timestamp: row.created_at
    }));
  } catch (error) {
    console.error('Error fetching conversation context:', error);
    return [];
  }
}

// Save conversation to database
export async function saveConversation(studentId, topicId, userMessage, aiResponse, agentType) {
  try {
    await pool.query(
      `INSERT INTO conversation_logs (student_id, topic_id, user_message, ai_response, agent_type)
       VALUES ($1, $2, $3, $4, $5)`,
      [studentId, topicId, userMessage, aiResponse, agentType]
    );
  } catch (error) {
    console.error('Error saving conversation:', error);
  }
}

// Build context message from conversation history
export function buildContextMessage(conversationHistory, studentName, topicName) {
  if (conversationHistory.length === 0) {
    return `This is the start of our conversation about ${topicName}. You're helping ${studentName}.`;
  }

  let context = `Here's our conversation history about ${topicName} with ${studentName}:\n`;
  conversationHistory.forEach((exchange, idx) => {
    context += `\nExchange ${idx + 1}:\n`;
    context += `Student: ${exchange.user}\n`;
    context += `Tutor: ${exchange.assistant}\n`;
  });

  return context;
}

// Get student's understanding level on a topic
export async function getTopicUnderstanding(studentId, topicId) {
  try {
    const result = await pool.query(
      `SELECT understanding_level, status, attempts
       FROM student_progress
       WHERE student_id = $1 AND topic_id = $2`,
      [studentId, topicId]
    );

    if (result.rows.length === 0) {
      return { level: 0, status: 'not_started', attempts: 0 };
    }

    const progress = result.rows[0];
    return {
      level: progress.understanding_level || 0,
      status: progress.status,
      attempts: progress.attempts
    };
  } catch (error) {
    console.error('Error fetching understanding level:', error);
    return { level: 0, status: 'not_started', attempts: 0 };
  }
}
