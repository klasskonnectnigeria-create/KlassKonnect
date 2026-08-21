#!/usr/bin/env node

import readline from 'readline';

const API_URL = 'http://localhost:5000/api/agents/chat';
const AUTH_URL = 'http://localhost:5000/api/auth/test-login';

let token = null;
let studentId = null;
let studentName = null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function init() {
  console.log('\n🤖 NERDC AI Tutor - Interactive Chat\n');
  console.log('Authenticating...\n');

  try {
    const response = await fetch(AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' })
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const data = await response.json();
    token = data.token;
    studentId = data.student.id;
    studentName = data.student.fullName;

    console.log(`✅ Logged in as: ${studentName} (Grade ${data.student.grade})\n`);
    console.log('📚 Choose an agent type:');
    console.log('   - tutor    (Explain concepts)');
    console.log('   - practice (Solve problems)');
    console.log('   - assessment (Test understanding)\n');

    askForAgent();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Make sure the backend is running on http://localhost:5000');
    rl.close();
  }
}

function askForAgent() {
  rl.question('Select agent (tutor/practice/assessment) [default: tutor]: ', (agent) => {
    const agentType = agent.trim() || 'tutor';

    if (!['tutor', 'practice', 'assessment'].includes(agentType)) {
      console.log('Invalid agent type. Using tutor.\n');
    }

    console.log(`\n🎓 Agent: ${agentType}`);
    console.log('Type "quit" to exit, "clear" to clear chat, "agent [type]" to change agent\n');

    askQuestion(agentType);
  });
}

function askQuestion(agentType) {
  rl.question('You: ', async (message) => {
    if (!message.trim()) {
      askQuestion(agentType);
      return;
    }

    if (message.toLowerCase() === 'quit') {
      console.log('\nGoodbye! 👋\n');
      rl.close();
      return;
    }

    if (message.toLowerCase() === 'clear') {
      console.clear();
      console.log('📚 Chat cleared\n');
      askQuestion(agentType);
      return;
    }

    if (message.toLowerCase().startsWith('agent ')) {
      const newAgent = message.split(' ')[1];
      if (['tutor', 'practice', 'assessment'].includes(newAgent)) {
        console.log(`\n✅ Switched to ${newAgent} agent\n`);
        askQuestion(newAgent);
      } else {
        console.log('Invalid agent type.\n');
        askQuestion(agentType);
      }
      return;
    }

    console.log('\n⏳ Thinking...\n');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: message.trim(),
          agentType: agentType
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to get response');
      }

      const data = await response.json();

      console.log(`\n🤖 ${agentType.charAt(0).toUpperCase() + agentType.slice(1)} Agent:\n`);
      console.log(formatResponse(data.response));
      console.log(`\n💡 ${data.nextStep}\n`);

    } catch (error) {
      console.error(`\n❌ Error: ${error.message}\n`);
    }

    askQuestion(agentType);
  });
}

function formatResponse(text) {
  // Convert markdown-like formatting to readable text
  let formatted = text
    .replace(/\*\*(.+?)\*\*/g, '\x1b[1m$1\x1b[0m') // Bold
    .replace(/\n###\s+(.+)/g, '\n\n📌 $1') // Headers
    .replace(/\n##\s+(.+)/g, '\n\n📌 $1')
    .replace(/\n#\s+(.+)/g, '\n\n📌 $1')
    .replace(/\n-\s+/g, '\n  • ')
    .replace(/\n\*/g, '\n  •');

  return formatted;
}

// Start the CLI
init();
