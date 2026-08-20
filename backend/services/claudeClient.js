import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

// Conversation history for context management
const conversationHistories = new Map();

export function getConversationHistory(studentId) {
  if (!conversationHistories.has(studentId)) {
    conversationHistories.set(studentId, []);
  }
  return conversationHistories.get(studentId);
}

export function addToHistory(studentId, role, content) {
  const history = getConversationHistory(studentId);
  history.push({ role, content });
  // Keep last 20 messages for context
  if (history.length > 20) {
    history.shift();
  }
}

export function clearHistory(studentId) {
  conversationHistories.delete(studentId);
}

export async function callClaude(systemPrompt, userMessage, studentId) {
  const history = getConversationHistory(studentId);

  // Add current message to history
  addToHistory(studentId, 'user', userMessage);

  try {
    const response = await client.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1024,
      system: systemPrompt,
      messages: history
    });

    const assistantMessage = response.content[0].text;
    addToHistory(studentId, 'assistant', assistantMessage);

    return {
      content: assistantMessage,
      usage: {
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens
      }
    };
  } catch (error) {
    console.error('Claude API error:', error);
    throw new Error(`Claude API call failed: ${error.message}`);
  }
}
