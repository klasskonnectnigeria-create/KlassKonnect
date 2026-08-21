import Anthropic from '@anthropic-ai/sdk';

// Conversation history for context management
const conversationHistories = new Map();

// Lazy initialization of Anthropic client
let client = null;

function getClient() {
  if (!client) {
    const apiKey = process.env.CLAUDE_API_KEY;
    console.log('[claudeClient] Initializing Anthropic client with API key:', apiKey ? `${apiKey.substring(0, 20)}...` : 'UNDEFINED');

    if (!apiKey) {
      throw new Error('CLAUDE_API_KEY environment variable is not set. Please check your .env file.');
    }

    client = new Anthropic({
      apiKey: apiKey
    });
  }
  return client;
}

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

  // DEMO MODE: Return mock response when API key is invalid
  if (process.env.DEMO_MODE === 'true' || !process.env.CLAUDE_API_KEY || process.env.CLAUDE_API_KEY.length < 50) {
    return getDemoResponse(userMessage, studentId, history);
  }

  try {
    const anthropicClient = getClient();
    const response = await anthropicClient.messages.create({
      model: 'claude-opus-5',
      max_tokens: 1024,
      system: systemPrompt,
      messages: history
    });

    // Extract text from response (handle thinking blocks in newer models)
    let assistantMessage = null;
    if (response.content[0]?.type === 'text') {
      assistantMessage = response.content[0].text;
    } else if (response.content[0]?.type === 'thinking') {
      // Find the text block after thinking block
      const textBlock = response.content.find(block => block.type === 'text');
      assistantMessage = textBlock?.text;
    }

    if (!assistantMessage) {
      throw new Error('No text content in Claude response');
    }

    addToHistory(studentId, 'assistant', assistantMessage);

    return {
      content: assistantMessage,
      usage: {
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens
      }
    };
  } catch (error) {
    console.error('Claude API error:', error.message);

    // Fallback to demo mode on API errors
    if (error.message.includes('authentication') || error.message.includes('401')) {
      console.log('⚠️  Claude API auth failed, using demo responses');
      return getDemoResponse(userMessage, studentId, history);
    }

    throw new Error(`Claude API call failed: ${error.message}`);
  }
}

function getDemoResponse(userMessage, studentId, history) {
  const demoResponses = {
    'fractions': `Great question! Let me explain fractions step by step.

A fraction represents a **part of a whole**. It has two numbers:
- **Numerator** (top): How many parts we have
- **Denominator** (bottom): How many equal parts the whole is divided into

For example: 3/4 means we have 3 parts out of 4 equal parts.

Think of a pizza 🍕:
- If we divide it into 4 equal slices, and eat 3 of them
- We've eaten 3/4 of the pizza!

**Key concept:** The bottom number (denominator) can NEVER be zero.`,

    'improper': `An **improper fraction** is when the numerator (top number) is **greater than or equal to** the denominator (bottom number).

Examples:
- 5/4 (improper - 5 is more than 4)
- 7/3 (improper - 7 is more than 3)

Why are they called "improper"? Because they represent **more than one whole**.

You can convert an improper fraction to a **mixed number** (a whole number + a fraction):
- 5/4 = 1 1/4 (one and one-quarter)
- 7/3 = 2 1/3 (two and one-third)

Both forms are correct - it depends on the context!`,

    'default': `I'm here to help you understand mathematics! 📚

You can ask me about:
- Explaining concepts
- Breaking down problems
- Solving practice questions
- Clarifying difficult topics

What would you like to learn about today?`
  };

  const lower = userMessage.toLowerCase();
  const messageKey = lower.includes('improper') ? 'improper' :
                     lower.includes('fraction') ? 'fractions' :
                     'default';

  const demoContent = demoResponses[messageKey];
  addToHistory(studentId, 'assistant', demoContent);

  return {
    content: demoContent,
    usage: {
      inputTokens: 0,
      outputTokens: 0
    }
  };
}
