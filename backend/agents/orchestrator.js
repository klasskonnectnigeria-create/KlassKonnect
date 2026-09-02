import { tutorAgent } from './tutor.js';
import { assessmentAgent } from './assessment.js';
import { practiceAgent } from './practice.js';

// Orchestrator - routes queries to appropriate agents based on intent
export async function orchestrateQuery(context) {
  const { message, topicContext, topicId, preferredAgentType, studentName, grade, studentId } = context;

  // Determine intent from message
  const intent = detectIntent(message);

  // Choose agent based on intent or user preference
  let agentType = preferredAgentType || intent;
  let agentFunction;

  switch (agentType) {
    case 'assessment':
      agentFunction = assessmentAgent;
      break;
    case 'practice':
      agentFunction = practiceAgent;
      break;
    case 'tutor':
    default:
      agentFunction = tutorAgent;
      agentType = 'tutor';
  }

  // Call the selected agent with full context
  const response = await agentFunction({
    message,
    topicContext,
    topicId,
    studentName,
    grade,
    studentId
  });

  return {
    content: response,
    agentType,
    nextStep: suggestNextStep(agentType)
  };
}

// Detect student's intent from message - improved detection
function detectIntent(message) {
  const lowerMessage = message.toLowerCase().trim();

  // Assessment intent - testing, checking understanding
  if (
    lowerMessage.includes('test') ||
    lowerMessage.includes('quiz') ||
    lowerMessage.includes('check my understanding') ||
    lowerMessage.includes('do i understand') ||
    lowerMessage.includes('understand this') ||
    lowerMessage.includes('is this correct') ||
    lowerMessage.includes('am i right') ||
    lowerMessage.includes('assess') ||
    lowerMessage.includes('evaluate')
  ) {
    return 'assessment';
  }

  // Practice intent - exercises, problems, solving
  if (
    lowerMessage.includes('practice') ||
    lowerMessage.includes('exercise') ||
    lowerMessage.includes('problem') ||
    lowerMessage.includes('solve') ||
    lowerMessage.includes('answer') ||
    lowerMessage.includes('practice question') ||
    lowerMessage.includes('give me a question') ||
    lowerMessage.includes('ask me a question') ||
    lowerMessage.includes('try a') ||
    lowerMessage.includes('more problems') ||
    lowerMessage.match(/^\d+/) // Starts with a number (likely an answer)
  ) {
    return 'practice';
  }

  // Teaching/tutoring intent - explaining, teaching, how/what
  if (
    lowerMessage.includes('explain') ||
    lowerMessage.includes('teach') ||
    lowerMessage.includes('how') ||
    lowerMessage.includes('what') ||
    lowerMessage.includes('why') ||
    lowerMessage.includes('help') ||
    lowerMessage.includes('understand') ||
    lowerMessage.includes('example')
  ) {
    return 'tutor';
  }

  // Default to tutor for general questions
  return 'tutor';
}

// Suggest next step based on agent type
function suggestNextStep(agentType) {
  const suggestions = {
    tutor: 'Next, would you like to practice some problems to apply what you learned?',
    assessment: 'Based on that, would you like me to teach more or try harder problems?',
    practice: 'Great work! Ready for another problem or want to review the concept?'
  };

  return suggestions[agentType] || suggestions.tutor;
}
