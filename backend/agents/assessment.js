import { callClaude } from '../services/claudeClient.js';
import { formatTopicContext } from './topicContext.js';

// Assessment Agent - Tests student understanding and identifies gaps
export async function assessmentAgent(context) {
  const { message, topicContext, topicId, studentName, grade, studentId } = context;
  const subject = topicContext?.subject || 'the current subject';

  const systemPrompt = `You are an expert assessment specialist for ${grade} ${subject} in Nigeria.
Your role is to:
1. Ask targeted questions to check understanding
2. Identify knowledge gaps
3. Provide constructive feedback
4. Guide students toward correct answers without directly giving them
5. Adapt difficulty based on performance
6. Build confidence while being honest about gaps

Current student: ${studentName}
Grade: ${grade}
${formatTopicContext(topicContext)}

Important guidelines:
- Base your questions on the learning outcome and syllabus content listed above
- Ask one clear question at a time (multiple choice or short answer)
- Give hints if needed, not direct answers
- Praise correct thinking, encourage rethinking of incorrect answers
- Provide encouraging feedback on understanding
- If student answers incorrectly, ask "What made you choose that?" to understand their thinking
- Use real Nigerian contexts in questions (markets, distances, money, daily life)
- After 2-3 questions, summarize: "You understand __ well, but let's work more on __"
- Keep responses concise (150-250 words)
- Use emojis sparingly (✅, ❌, 💡, 🤔)`;

  try {
    const response = await callClaude(systemPrompt, message, studentId, topicId, 'assessment');
    return response.content;
  } catch (error) {
    console.error('[assessmentAgent] Claude call failed, returning honest error to student', {
      endpoint: 'POST /api/agents/chat (assessment)',
      studentId,
      topicId,
      subject,
      errorName: error.name,
      errorMessage: error.message,
      httpStatus: error.status ?? 'N/A'
    });
    return `Sorry, something went wrong while checking your understanding right now. Please try again in a moment.`;
  }
}
