# Phase 3: Claude API Integration Setup

## What's New

**Claude API is now integrated!** All 4 agents now make real API calls:

✓ **Tutor Agent** — Explains concepts with Claude's intelligence
✓ **Assessment Agent** — Creates tests and checks understanding  
✓ **Practice Agent** — Generates problems and provides feedback
✓ **Orchestrator** — Routes intelligently based on student intent

## Quick Start

### 1. Get Your Claude API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign in or create account
3. Navigate to **API Keys**
4. Create new API key
5. Copy it (you won't see it again!)

### 2. Set Environment Variables

```bash
# Backend - create .env file
cd backend
cp .env.example .env

# Edit .env and add:
CLAUDE_API_KEY=sk-ant-your-actual-key-here
DATABASE_URL=postgresql://postgres:password@localhost:5432/nerdc_ai_tutor
JWT_SECRET=your-secret-key-change-in-production
NODE_ENV=development
```

### 3. Install Claude SDK

```bash
cd backend
npm install @anthropic-ai/sdk
```

### 4. Start Everything

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Mobile (if testing):**
```bash
cd mobile
npm start
```

**Terminal 3 - Database (if needed):**
```bash
# If PostgreSQL isn't running
pg_ctl -D /usr/local/var/postgres start
```

## How It Works

### Agent Architecture

```
Student Message
      ↓
  Orchestrator (detects intent)
      ↓
  ├─→ Tutor Agent (explain/teach)
  ├─→ Assessment Agent (test/check)
  └─→ Practice Agent (problems/exercises)
      ↓
   Claude API (generates response)
      ↓
  Conversation Logged
      ↓
   Student Response
```

### Intent Detection

The orchestrator automatically routes based on keywords:

| Intent | Keywords | Agent |
|--------|----------|-------|
| Teaching | explain, teach, how, why, help, example | Tutor |
| Assessment | test, quiz, check, understand, correct | Assessment |
| Practice | problem, exercise, solve, answer, question | Practice |

### Conversation Context

- Last 10 messages stored per student per topic
- Claude can reference previous exchanges
- Context automatically managed (max 20 messages in memory)
- Full conversation history in database

## API Endpoints

### POST /api/agents/chat
Send a message to the AI tutor.

**Request:**
```json
{
  "message": "Explain whole numbers",
  "topicId": 1,
  "agentType": "tutor" (optional)
}
```

**Response:**
```json
{
  "response": "📚 Let me help you understand whole numbers...",
  "agentType": "tutor",
  "nextStep": "Would you like to practice some problems?"
}
```

### GET /api/agents/history/:topicId
Get conversation history for a topic.

### DELETE /api/agents/history/:topicId
Clear conversation history (testing only).

## Configuration

### System Prompts

Each agent has a specialized system prompt:

**Tutor** — Explains clearly, starts with basics, uses Nigerian examples
**Assessment** — Tests understanding, gives hints not answers, builds confidence
**Practice** — Generates problems, provides step-by-step solutions, adapts difficulty

### Model Settings

- **Model**: claude-3-5-sonnet-20241022 (fast, accurate)
- **Max Tokens**: 1024 (balanced length)
- **Temperature**: Default (0.7 - balanced creativity)

## Features

### ✓ Intelligent Routing
- Automatically detects what student needs
- Can override with `agentType` parameter
- Suggests next steps naturally

### ✓ Context Awareness
- Remembers conversation history
- Knows student's understanding level
- Adapts to grade and previous attempts

### ✓ Nigerian Context
- Problems use real scenarios (markets, money, distances)
- Examples are culturally relevant
- Language is age-appropriate

### ✓ Graceful Error Handling
- If API fails, returns helpful fallback
- Logs all errors for debugging
- Student experience not interrupted

### ✓ Progress Tracking
- Every interaction updates student progress
- Understanding level tracked
- Attempts counted automatically

## Testing

### Test the Backend Directly

```bash
# Login first
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "password123"
  }'

# Copy the token from response

# Chat with tutor
curl -X POST http://localhost:5000/api/agents/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "message": "Explain whole numbers",
    "topicId": 1
  }'
```

### Test Different Agent Types

```bash
# Test Assessment Agent
curl -X POST http://localhost:5000/api/agents/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "message": "Test my understanding",
    "topicId": 1,
    "agentType": "assessment"
  }'

# Test Practice Agent
curl -X POST http://localhost:5000/api/agents/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "message": "Give me a practice problem",
    "topicId": 1,
    "agentType": "practice"
  }'
```

## Troubleshooting

### "Invalid API Key" Error
- Check your CLAUDE_API_KEY in .env
- Make sure it starts with `sk-ant-`
- Verify it's not expired in console.anthropic.com

### "No API Key Provided" Error
- Did you add CLAUDE_API_KEY to .env?
- Run `npm run dev` again after adding it
- Don't forget to `source .env` if needed

### "Failed to Connect to Database" Error
- Is PostgreSQL running?
- Is DATABASE_URL correct in .env?
- Did you run `npm run setup-db` and `npm run seed-db`?

### Claude API Timeout
- Usually means API is slow (rare)
- Response will fail gracefully and show fallback
- User can retry their message

### Empty Response from Claude
- Check that CLAUDE_API_KEY is valid
- Check API rate limits in console.anthropic.com
- Review logs in terminal for more details

## Cost

Claude API uses pay-per-token pricing:

- **Input tokens**: ~$0.003 per 1M tokens
- **Output tokens**: ~$0.015 per 1M tokens

Typical student interaction:
- Student message: ~50 tokens ($0.00015)
- Claude response: ~200 tokens ($0.003)
- **Per exchange: ~$0.0035** (very cheap!)

## Next Steps

1. ✅ Install @anthropic-ai/sdk
2. ✅ Add CLAUDE_API_KEY to .env
3. ✅ Start backend: `npm run dev`
4. ✅ Test with curl commands above
5. ✅ Start mobile app and chat!

## File Changes Summary

**New Files:**
- `backend/services/claudeClient.js` — Claude API wrapper
- `backend/services/conversationManager.js` — Conversation context management

**Updated Files:**
- `backend/agents/tutor.js` — Now uses Claude API
- `backend/agents/assessment.js` — Now uses Claude API
- `backend/agents/practice.js` — Now uses Claude API
- `backend/agents/orchestrator.js` — Improved intent detection
- `backend/routes/agents.js` — Enhanced with context
- `backend/package.json` — Added @anthropic-ai/sdk

## Architecture

```
Student → Mobile App → Backend API
                           ↓
                      Orchestrator
                           ↓
                    ┌──────┼──────┐
                    ↓      ↓      ↓
                  Tutor  Assess  Practice
                    ↓      ↓      ↓
                    └──────┼──────┘
                           ↓
                     Claude API
                           ↓
                      Response
                           ↓
                     Database Log
                           ↓
                    Mobile App Display
```

---

**Ready? Start the backend with your API key and begin tutoring!** 🚀
