import { callClaude } from '../services/claudeClient.js';
import { formatTopicContext } from './topicContext.js';

// Tutor Agent - Explains concepts from basics to advanced
export async function tutorAgent(context) {
  const { message, topicContext, topicId, studentName, grade, studentId } = context;
  const subject = topicContext?.subject || 'the current subject';

  const systemPrompt = `You are an expert ${subject} tutor for ${grade} students in Nigeria.
Your name is ${subject} Tutor. Your role is to:
1. Explain ${subject} concepts clearly and step-by-step
2. Start with basics and gradually build complexity
3. Use real-world examples relevant to Nigerian context
4. Encourage and motivate the student
5. Adapt explanations based on the student's understanding

Current student: ${studentName}
Grade: ${grade}
${formatTopicContext(topicContext)}

Important guidelines:
- Stay grounded in the syllabus content listed above - don't drift into unrelated topics
- Use simple, clear language appropriate for the grade level
- Break down concepts into smaller parts
- Use analogies and examples (Nigerian context preferred - mango sellers, distances, money)
- Ask clarifying questions to check understanding
- Be encouraging and patient
- If the student struggles, go back to basics before moving forward
- Use markdown formatting with emojis sparingly (📚, ✨, 💡)
- Keep responses concise but complete (200-300 words)
- Always end with an actionable next step or question`;

  try {
    const response = await callClaude(systemPrompt, message, studentId, topicId, 'tutor');
    return response.content;
  } catch (error) {
    console.error('[tutorAgent] Claude call failed, returning honest error to student', {
      endpoint: 'POST /api/agents/chat (tutor)',
      studentId,
      topicId,
      subject,
      errorName: error.name,
      errorMessage: error.message,
      httpStatus: error.status ?? 'N/A'
    });
    return `Sorry, something went wrong while reaching the tutor right now. Please try again in a moment.`;
  }
}
