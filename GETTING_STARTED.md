# 🚀 NERDC AI Tutor - Getting Started Guide

Complete guide to run the Nigerian educational AI tutoring system.

## What You Have

A **full-stack educational AI application** with:
- 📱 React Native mobile app (iOS/Android)
- 🔗 Node.js Express API backend
- 🧠 Claude AI for intelligent tutoring
- 💾 PostgreSQL database
- 📚 Primary 4 Mathematics curriculum (expandable to all subjects/grades)

## System Requirements

- Node.js 18+
- PostgreSQL 12+
- npm or yarn
- 2GB RAM minimum
- Claude API key (free tier works)

## Installation (5 minutes)

### Step 1: Clone/Navigate to Project
```bash
cd /Users/karavirs/CC/nerdc-ai-tutor
```

### Step 2: Get Claude API Key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create account or login
3. Go to **API Keys**
4. Click **Create Key**
5. Copy the key (starts with `sk-ant-`)

### Step 3: Setup Backend

```bash
# Navigate to backend
cd backend

# Create .env file
cp .env.example .env

# Edit .env and add your Claude API key
# CLAUDE_API_KEY=sk-ant-your-key-here

# Install dependencies
npm install

# Setup database
npm run setup-db
npm run seed-db

# Start backend
npm run dev
```

Backend runs on `http://localhost:5000`

### Step 4: Setup Mobile (optional for web testing)

```bash
# In another terminal, navigate to mobile
cd mobile

# Create .env file
cp .env.example .env

# Install dependencies
npm install

# Start Expo
npm start

# Press 'w' for web, 'i' for iOS, 'a' for Android
```

Mobile runs on `http://localhost:19006`

## First Test (3 minutes)

### Create Test Account
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "password123",
    "fullName": "John Doe",
    "grade": "Primary 4"
  }'
```

Save the `token` from response.

### Chat with AI Tutor
```bash
curl -X POST http://localhost:5000/api/agents/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "message": "Explain whole numbers",
    "topicId": 1
  }'
```

You should get a response from Claude explaining whole numbers! 🎉

## How to Use the App

### Login
1. Open mobile app or visit web URL
2. Sign up or login with test account
3. You'll see the dashboard

### Dashboard
- 📊 Your progress stats
- 📚 All 5 mathematics themes
- Click any theme to explore

### Learning Flow
1. **Select Theme** → Browse topics
2. **Pick Topic** → View curriculum
3. **Choose Tab:**
   - 📚 **Content Tab** — Read lesson material
   - 💬 **Chat Tab** — Talk to AI tutor

### Chat Types
The AI automatically detects what you need:

**Teaching (ask "explain", "how", "why")**
```
Student: "Explain fractions"
AI: Detailed explanation with examples
```

**Testing (ask "test", "quiz", "check")**
```
Student: "Test my understanding"
AI: Quiz questions with feedback
```

**Practice (ask "problem", "exercise", "solve")**
```
Student: "Give me a problem"
AI: Problem + hints + step-by-step solution
```

## Project Structure

```
nerdc-ai-tutor/
├── backend/                 (Node.js API)
│   ├── agents/             (Tutor, Assessment, Practice)
│   ├── routes/             (API endpoints)
│   ├── services/           (Claude API, conversation management)
│   ├── middleware/         (Authentication)
│   ├── scripts/            (Database setup)
│   └── server.js           (Express app)
├── mobile/                  (React Native app)
│   ├── app/                (Navigation structure)
│   ├── screens/            (5 full screens)
│   ├── components/         (Reusable UI components)
│   ├── store/              (State management)
│   ├── config/             (API configuration)
│   └── constants/          (Theme colors)
├── README.md               (Project overview)
├── PHASE1_SUMMARY.md       (Infrastructure)
├── PHASE2_SUMMARY.md       (Mobile UI)
├── PHASE3_SUMMARY.md       (Claude AI)
└── PHASE3_SETUP.md         (Detailed setup)
```

## Core Features

### ✅ Authentication
- Secure signup/login
- JWT token management
- Session persistence

### ✅ Curriculum Management
- Primary 4 Math (expandable)
- Organized by theme → topic
- Full content hierarchy
- 5 themes, 25+ topics

### ✅ AI Tutoring
- **Tutor Agent** — Explains concepts
- **Assessment Agent** — Tests understanding
- **Practice Agent** — Generates problems
- **Orchestrator** — Routes intelligently

### ✅ Progress Tracking
- Student progress per topic
- Understanding level (0-100%)
- Attempt counting
- Full conversation history

### ✅ Nigerian Context
- Examples from local life
- Appropriate language
- Grade-level content
- Cultural relevance

## API Reference

### Authentication
```
POST /api/auth/signup          Create account
POST /api/auth/login           Login
GET  /api/auth/me              Get current student
```

### Content
```
GET  /api/content/themes               List themes
GET  /api/content/themes/:id/topics    List topics
GET  /api/content/topics/:id           Get topic details
GET  /api/content/themes/:id/progress  Get progress
```

### AI Chat
```
POST /api/agents/chat                  Chat with AI
GET  /api/agents/history/:topicId      Get conversation
DELETE /api/agents/history/:topicId    Clear history
```

### Progress
```
GET  /api/progress                     Stats
POST /api/progress/topics/:id          Update progress
GET  /api/progress/topics/:id          Get topic progress
```

## Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is free
lsof -i :5000

# Check Node version
node --version  # Should be 18+

# Check database connection
# Make sure PostgreSQL is running
pg_isready
```

### Database errors
```bash
# Setup database again
npm run setup-db
npm run seed-db

# Check database exists
psql -l | grep nerdc
```

### Claude API errors
```
Error: "Invalid API Key"
→ Check CLAUDE_API_KEY in .env
→ Make sure it starts with sk-ant-
→ Verify at console.anthropic.com

Error: "No API Key Provided"
→ Add CLAUDE_API_KEY to .env
→ Restart backend (npm run dev)

Error: "API request failed"
→ Check internet connection
→ Check rate limits at console.anthropic.com
→ Try again (rate limits reset hourly)
```

### Mobile app won't connect
```bash
# Make sure backend is running
curl http://localhost:5000/api/health

# Check environment variable
cat mobile/.env

# Should show: EXPO_PUBLIC_API_URL=http://localhost:5000
```

## Development Commands

```bash
# Backend
npm run dev                 # Start with auto-reload
npm run setup-db           # Create tables
npm run seed-db            # Load curriculum

# Mobile
npm start                  # Start Expo
npm run ios               # iOS simulator
npm run android           # Android emulator
npm start -- --web        # Web browser
```

## Database Schema

Key tables:
- `students` — User accounts
- `themes` — Curriculum themes (NUMBER NUMERATION, etc.)
- `topics` — Specific topics (Whole Numbers, Fractions, etc.)
- `content` — Learning materials
- `learning_activities` — Exercises
- `evaluation_guides` — Assessment criteria
- `student_progress` — Tracking progress
- `conversation_logs` — Chat history

## Expanding the System

### Add More Subjects
1. Add PDF to `/backend/scripts/`
2. Update `parsePdf.js` with new curriculum data
3. Run `npm run seed-db`

### Add More Grades
1. Update `GRADES` array in signup screen
2. Add curriculum data for each grade
3. Adjust agent prompts for grade level

### Add More Languages
1. Update agent system prompts
2. Translate UI strings
3. Add language selection in app

## Performance Tips

- **Cache curriculum**: Already implemented
- **Lazy load messages**: Implement pagination
- **Optimize images**: Use appropriate sizes
- **Monitor API costs**: Claude is cheap ($0.003/exchange)

## Security Notes

- Change `JWT_SECRET` in production
- Use HTTPS in production
- Validate all API inputs
- Rate limit API endpoints
- Never commit API keys
- Use environment variables

## Cost Estimation

**Claude API:** ~$0.003 per student exchange
- 100 students, 10 exchanges/day = ~$30/month
- Extremely affordable for educational use

**Database:** PostgreSQL is free (open source)

**Hosting:** Depends on your choice:
- Free tier available on most platforms
- ~$5-20/month for small school

## Next Steps

1. ✅ Get Claude API key
2. ✅ Setup backend
3. ✅ Setup mobile
4. ✅ Test with curl
5. ✅ Create student account
6. ✅ Start tutoring session
7. ⏭️ Add more curriculum
8. ⏭️ Deploy to production

## Support

- **Documentation**: See PHASE1/2/3 summaries
- **Setup Guide**: PHASE3_SETUP.md
- **Code Structure**: README.md
- **API Details**: Backend routes/*.js

## What's Included

✅ **Complete Backend**
- Express.js API with 15+ endpoints
- PostgreSQL database with 8 tables
- 4 specialized AI agents
- Authentication system
- Progress tracking
- Conversation management

✅ **Complete Mobile App**
- React Native (Expo)
- 5 full screens
- 4 reusable components
- Zustand state management
- Nigerian-themed design
- Touch-friendly UI

✅ **AI Intelligence**
- Claude 3.5 Sonnet integration
- Smart intent detection
- Conversation context tracking
- Adaptive responses
- Real Nigerian examples

✅ **Curriculum**
- Primary 4 Mathematics
- 5 themes, 25+ topics
- Complete learning materials
- Assessment criteria
- Activity suggestions

## Ready? Let's Go! 🚀

```bash
# 1. Add your Claude API key to backend/.env
CLAUDE_API_KEY=sk-ant-your-key

# 2. Start backend
cd backend && npm run dev

# 3. Start mobile (in another terminal)
cd mobile && npm start

# 4. Sign up and start learning!
```

---

**Your AI tutoring system is ready. Happy teaching!** 📚✨
