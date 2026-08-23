# NERDC AI Tutor — Project Overview

## What it is

An AI-powered tutoring app for Nigerian students, built around the NERDC curriculum. Currently active: **Primary 4 Mathematics** and **SS3 Mathematics** (General Mathematics, First & Second Term). Provides three modes of AI-assisted learning: tutoring, practice questions, and assessments.

## Repository

- **GitHub**: `klasskonnectnigeria-create/KlassKonnect`
- **Structure**: monorepo with `backend/` and `mobile/`
- **Local path**: `/Users/karavirs/CC/nerdc-ai-tutor`

## Architecture

### Mobile app (`mobile/`)
- Expo/React Native (Expo SDK 54, React Native 0.81.5, React 19)
- Local SQLite database (`expo-sqlite`) for offline caching — stores themes, topics, and conversation history locally
- Zustand for state management
- Connects to the backend via a configurable `API_URL` (dev vs. production, set in `mobile/config/api.js`)

### Backend (`backend/`)
- Node.js/Express, deployed on Railway (service: `pacific-growth`, project `poetic-flexibility`)
- PostgreSQL database (Railway-hosted, same project)
- JWT-based authentication (`/api/auth`)
- Anthropic SDK integration calling Claude directly for tutoring responses (model: `claude-sonnet-5`)

## Core Features / Routes

- **Auth** (`/api/auth`) — signup, login, session
- **Content** (`/api/content`) — themes → topics → topic details, tied to the NERDC curriculum structure, **now scoped to the logged-in student's grade**
- **Progress** (`/api/progress`) — per-student, per-topic tracking (status, understanding level, attempts)
- **Agents** (`/api/agents/chat`, `/api/agents/history`) — the core AI tutoring engine, with three modes:
  - **Tutor** — explains concepts, responds to student questions conversationally; now grounded in each topic's actual syllabus content and focal competency
  - **Practice** — generates contextual practice questions (localized with Nigerian examples, e.g. market/farm scenarios); now grounded in syllabus content and expected student activities
  - **Assessment** — generates full tests with multiple question types (basic recall, classification, conversion, real-life application); now grounded in the topic's learning outcome and syllabus content
- **Leaderboard & Gamification** (`/api/leaderboard`, `/api/gamification`) — competitive/motivational layer
- **Conversation logging** — every exchange (student message + AI response + agent type) is saved to `conversation_logs` in Postgres, keyed by student and topic, enabling context-aware follow-up responses

## Curriculum Data

- **Primary 4 Mathematics**: 5 themes (Number Numeration, Basic Operations, Mensuration, Geometry, Everyday Statistics), 14 topics
- **SS3 Mathematics**: 1 theme, 15 topics covering First Term (Matrices I & II, Arithmetic of Finance I & II, Application of Linear/Quadratic Equations, Trigonometry, Surface Area & Volume of a Sphere, The Earth as a Sphere, Coordinate Geometry I & II, Differentiation I & II) and Second Term (Integration I & II, Logarithms). Sourced from schemeofwork.com (Federal SS3 Mathematics scheme of work); not verified against the official NERDC portal, which is login-gated and blocks automated access.
- Each topic carries: `name`, `learning_outcome`, `focal_competency`, `sequence_order`, plus normalized child records in `content` (syllabus content), `learning_activities` (teacher and student activities, with resources/materials), and `evaluation_guides` (currently empty for both grades)
- **Note**: Primary 5, Primary 6, and JSS 1 exist as grade values on some (test/seed) student accounts, but have no curriculum content populated yet — students at those grades currently see an empty theme list

## Offline Support

- The app detects connectivity and, when offline, reads from and writes to a local SQLite cache instead of the network
- Actions taken offline (chat messages, progress updates) are queued locally and synced to the backend once the connection is restored
- This is by design — the app is meant to function in low-connectivity environments common across Nigeria

## AI Behavior

- Responses are personalized (address the student by name), contextually grounded in the curriculum topic's actual syllabus content, and localized to Nigerian settings and examples
- Conversation history is used as context so the tutor can reference what a student already got right/wrong within a topic
- Verified end-to-end in production: tutor responses on SS3 topics (e.g. "The Earth as a Sphere") correctly draw on the specific syllabus content (equator, hemispheres, great/small circles) rather than generating generic explanations

## Infrastructure

- **Hosting**: Railway (project `poetic-flexibility`, workspace `klasskonnectnigeria-create`)
- **Database**: managed Postgres on Railway, same project
- **Production backend URL**: `https://pacific-growth-production-d82a.up.railway.app`

---

## Recent Fixes & Additions (August 2026)

1. **Fixed invalid Claude model name** — `claudeClient.js` was calling a non-existent model (`claude-opus-5`), silently falling back to canned demo responses on every request. Fixed to `claude-sonnet-5`. Verified via direct API test and live conversation logs.
2. **Removed public debug endpoints** — `/api/debug/config` and `/api/debug/test-claude` were exposed on the public production URL; `/api/debug/config` was leaking large portions of the live `CLAUDE_API_KEY`. Both endpoints removed and confirmed returning 404.
3. **Added SS3 Mathematics curriculum** — 15 topics across First and Second Term, added as a new theme with full NERDC-style detail (content, teacher/student activities, materials), matching the format of the existing Primary curriculum documents.
4. **Extended `topics` schema** — added `content`, `teacher_activities`, `student_activities`, `materials` columns; data was subsequently migrated into the app's proper normalized tables (`content`, `learning_activities`) to match the schema the rest of the app already expected.
5. **Wired syllabus content into AI agent prompts** — `tutor.js`, `practice.js`, and `assessment.js` previously only used the topic name (and sometimes learning outcome) in their system prompts. Now they pull in syllabus content, focal competency, and student activities so responses are grounded in the actual curriculum rather than the model's general knowledge.
6. **Fixed grade-based content isolation** — `/api/content/themes` and `/api/content/themes/:themeId/topics` previously had no grade filtering (and `/themes` had no auth requirement at all), meaning any student could see every grade's content. Now themes/topics are scoped to the requesting student's grade, with cross-grade access returning 403. Confirmed safe to deploy — no real student accounts had any activity outside Primary 4 and SS3 (the only grades with populated content).

## Known Gaps

- `evaluation_guides` table is empty for all topics (Primary 4/5 and SS3) — the `/api/content/topics/:topicId` route expects data there but none has been populated
- Duplicate theme rows exist for some Primary-grade themes (same names, different `description` values) — pre-existing, not yet cleaned up
- SS3 Third Term is not populated — sources agree it's WAEC/NECO revision of prior material rather than new content, but this hasn't been verified against an official source
- No curriculum content exists yet for Primary 5, Primary 6, or JSS 1, despite those grade values appearing on some student accounts

---

## How to Run It Locally

### Backend

```bash
cd backend
npm install        # first time only
npm start           # or: npm run dev  (auto-restarts on file changes)
```

Runs at `http://localhost:5000` (or `PORT` env var if set). Needs `CLAUDE_API_KEY`, `DATABASE_URL`, and `JWT_SECRET` available — locally these come from a `.env` file in `backend/` (in production, Railway injects them directly).

### Mobile app / Simulator

```bash
cd mobile
npx expo start
```

From the Expo CLI menu that opens, you can:
- Press **`i`** — launch iOS Simulator (runs on your Mac; can reach `localhost` directly)
- Press **`a`** — launch Android emulator
- Press **`w`** — open in a web browser
- Scan the QR code — open in **Expo Go** on a physical phone

Or launch a target directly:

```bash
npx expo start --ios       # iOS Simulator
npx expo start --android   # Android emulator
```

**Important — physical devices vs. simulator/emulator:**

`mobile/config/api.js` currently points dev-mode traffic (`isDevelopment`) at the **production Railway URL**, not `localhost:5000` (this was changed during testing since a physical phone via Expo Go can't reach your Mac's `localhost`). That means:

- Right now, dev mode talks to the **live production backend** regardless of simulator or physical device.
- If you want to test against a **local backend** instead (e.g. on iOS Simulator, which *can* reach `localhost`), you'd need to start the backend locally (`npm start` in `backend/`) and change `mobile/config/api.js` back to point `isDevelopment` at `http://localhost:5000`.

### Database access (for checking data directly)

```bash
railway login       # first time only
railway link         # select poetic-flexibility → production → pacific-growth
railway connect Postgres
```

Drops into a live `psql` session against the production database.

Prefer writing SQL to a file and loading it with `\i /path/to/file.sql` over pasting large blocks directly into the interactive prompt — long pastes can get truncated by the terminal and leave `psql` in a broken state (use `Ctrl+D` to force-exit if that happens).
