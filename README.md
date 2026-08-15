# NERDC AI Tutor

An AI-powered educational platform for Nigerian primary and secondary school students, featuring adaptive learning with specialized AI agents.

## Project Structure

```
nerdc-ai-tutor/
├── backend/           # Node.js + Express backend
│   ├── agents/       # AI agents (Tutor, Assessment, Practice, Orchestrator)
│   ├── routes/       # API endpoints
│   ├── middleware/   # Authentication
│   ├── scripts/      # Database setup and seeding
│   └── server.js     # Main server file
├── mobile/           # React Native + Expo mobile app
└── docs/            # Documentation
```

## Phase 1: Setup & Core Infrastructure

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Backend Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

3. Set up database:
```bash
npm run setup-db
npm run seed-db
```

4. Start backend:
```bash
npm run dev
```

Backend runs on `http://localhost:5000`

### Mobile Setup

1. Install dependencies:
```bash
cd mobile
npm install
```

2. Start Expo:
```bash
npm start
```

3. Press `i` for iOS or `a` for Android

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current student

### Content
- `GET /api/content/themes` - List all themes
- `GET /api/content/themes/:themeId/topics` - Get topics for a theme
- `GET /api/content/topics/:topicId` - Get full topic details
- `GET /api/content/themes/:themeId/progress` - Get student progress

### Progress
- `GET /api/progress` - Get overall progress stats
- `POST /api/progress/topics/:topicId` - Update topic progress
- `GET /api/progress/topics/:topicId` - Get topic-specific progress

### Agents (AI Tutoring)
- `POST /api/agents/chat` - Chat with AI tutor/assessment/practice
- `GET /api/agents/history` - Get conversation history

## Current Curriculum

**Primary 4 Mathematics** with 5 themes:

1. **NUMBER NUMERATION**
   - Whole Numbers
   - Fractions

2. **BASIC OPERATIONS**
   - Addition and Subtraction
   - Multiplication
   - Division

3. **MENSURATION**
   - Money
   - Length, Weight, Time, Area, Capacity

4. **GEOMETRY**
   - Plane Shapes
   - Three Dimensional Shapes

5. **EVERYDAY STATISTICS**
   - Bar Graphs

## AI Agents Architecture

### 1. **Orchestrator Agent**
Routes student queries to appropriate specialized agents based on intent

### 2. **Tutor Agent**
- Explains concepts step-by-step
- Starts with basics, progresses to advanced
- Uses real-world examples
- Encourages learning

### 3. **Assessment Agent**
- Tests student understanding
- Identifies knowledge gaps
- Provides feedback without giving direct answers
- Adapts difficulty

### 4. **Practice Agent**
- Generates contextual exercises
- Provides step-by-step solutions
- Gives encouraging feedback
- Adjusts difficulty progressively

## Next Steps

- [ ] Integrate Claude API for real AI responses
- [ ] Build complete mobile UI screens
- [ ] Add conversation context management
- [ ] Implement progress tracking with visualizations
- [ ] Add more subjects and grade levels
- [ ] Implement spaced repetition for better learning
- [ ] Add offline support
- [ ] Deploy to production

## Database Schema

See `backend/scripts/schema.sql` for complete schema.

Key tables:
- `students` - User accounts
- `themes` - Curriculum themes
- `topics` - Specific topics within themes
- `content` - Knowledge, skills, competencies
- `learning_activities` - Exercises and activities
- `evaluation_guides` - Assessment criteria
- `student_progress` - Learning progress tracking
- `conversation_logs` - AI interaction history
