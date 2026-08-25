# NERDC AI Tutor — Project Overview

## What it is

An AI-powered tutoring app for Nigerian students, built around the NERDC curriculum. Currently active: **Primary 4 Mathematics** and **SS3** across 9 subjects. Provides three modes of AI-assisted learning: tutoring, practice questions, and assessments.

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
- **Content** (`/api/content`) — themes → topics → topic details, tied to the NERDC curriculum structure, scoped to the logged-in student's grade
- **Progress** (`/api/progress`) — per-student, per-topic tracking (status, understanding level, attempts)
- **Agents** (`/api/agents/chat`, `/api/agents/history`) — the core AI tutoring engine, with three modes:
  - **Tutor** — explains concepts, responds to student questions conversationally; grounded in each topic's actual syllabus content and focal competency
  - **Practice** — generates contextual practice questions (localized with Nigerian examples, e.g. market/farm scenarios); grounded in syllabus content and expected student activities
  - **Assessment** — generates full tests with multiple question types (basic recall, classification, conversion, real-life application); grounded in the topic's learning outcome and syllabus content
- **Leaderboard & Gamification** (`/api/leaderboard`, `/api/gamification`) — competitive/motivational layer
- **Conversation logging** — every exchange (student message + AI response + agent type) is saved to `conversation_logs` in Postgres, keyed by student and topic, enabling context-aware follow-up responses

## Curriculum Data

### Primary 4 Mathematics
5 themes (Number Numeration, Basic Operations, Mensuration, Geometry, Everyday Statistics), 14 topics.

### SS3 — 9 subjects, 115 topics total

| Subject | Topics | Curriculum Version | Terms Covered |
|---|---|---|---|
| Mathematics | 15 | `legacy` | First & Second |
| English Language | 18 | `nesri_2025` | First & Second |
| Government | 13 | `nesri_2025` | First & Second |
| Physics | 8 | `nesri_2025` | First only |
| Chemistry | 20 | `nesri_2025` | First, Second & Third |
| Biology | 8 | `nesri_2025` | First only |
| Geography | 9 | `nesri_2025` | First only |
| Economics | 10 | `legacy` | First only |
| Literature-in-English | 14 | `legacy` | First & Second |

**`themes.curriculum_version`** distinguishes two curriculum generations:
- **`legacy`** — the pre-reform WAEC-era curriculum (in use for years; well-documented by third-party sites)
- **`nesri_2025`** — the new National Education Sector Reform Initiatives curriculum, approved by NERDC on September 8, 2025. Sourced from a page (schemeofwork.com's "SS3 Scheme of Work Unified") that self-describes as NESRI-compliant.

**Important caveat on the reform's actual applicability**: NESRI implementation is phased by entry cohort, starting at SS1 in the 2025/2026 session — meaning students who were *already* in SS3 when the reform launched are finishing under the **legacy** curriculum, not NESRI. The first cohort to experience NESRI at SS3 won't arrive until roughly 2027/2028. Both versions are stored so the app can serve the correct one depending on which cohort a student belongs to, but this cohort-matching logic is **not yet implemented** in the app itself — see Known Gaps.

**Sourcing**: All curriculum content (Primary 4, and every SS3 subject) comes from third-party aggregator sites (primarily schemeofwork.com, also ecolebooks.com for Economics), not the official NERDC portal directly. The official portals (`lmis.nerdcportals.com.ng`, `nerdc.org.ng/eCurriculum`) are login-gated and/or block automated access (`robots.txt` disallow) — this is a structural limitation of the source material, not something this project failed to check.

Each topic carries: `name`, `learning_outcome`, `focal_competency`, `sequence_order`, plus normalized child records in `content` (syllabus content, tagged by `section_type`), `learning_activities` (teacher and student activities, with resources/materials), and `evaluation_guides` (currently empty for all subjects/grades).

**Note**: Primary 5, Primary 6, and JSS 1 exist as grade values on some (test/seed) student accounts, but have no curriculum content populated yet — students at those grades currently see an empty theme list.

## Offline Support

- The app detects connectivity and, when offline, reads from and writes to a local SQLite cache instead of the network
- Actions taken offline (chat messages, progress updates) are queued locally and synced to the backend once the connection is restored
- This is by design — the app is meant to function in low-connectivity environments common across Nigeria

## AI Behavior

- Responses are personalized (address the student by name), contextually grounded in the curriculum topic's actual syllabus content, and localized to Nigerian settings and examples
- Conversation history is scoped **per student per topic** (not just per student), so a student's tutoring session on one topic, practice session on another, and assessment session on a third each maintain independent, non-bleeding context — while still correctly remembering earlier turns within the same topic
- Verified end-to-end in production via direct API testing across multiple subjects and topics: tutor, practice, and assessment agents all produce responses correctly grounded in the specific syllabus content for their topic

## Infrastructure

- **Hosting**: Railway (project `poetic-flexibility`, workspace `klasskonnectnigeria-create`)
- **Database**: managed Postgres on Railway, same project
- **Production backend URL**: `https://pacific-growth-production-d82a.up.railway.app`

## Reusable Curriculum Import Tool

`backend/scripts/importCurriculum.js` — a safe, additive script for adding new subjects or grades without destructive reseeding (unlike the original `seedDb.js`, which wipes all curriculum data before reseeding from `parsePdf.js` — **do not run `seedDb.js`** unless you intend to destroy all existing themes/topics/content).

- Matches the field structure of `parsePdf.js`/`seedDb.js`: `knowledge`, `skills`, `competencies`, `values`, `learningActivities`, `resources`, `evaluationGuide`
- Input is a JS module exporting `curriculumData` (see files in `backend/scripts/curriculum-data/` for examples)
- Supports `--dry-run` (validate and preview without writing) and `--force` (insert even if a theme already exists for that subject/grade/version)
- Checks for existing subject+grade+`curriculum_version` combinations before inserting, to avoid accidental duplicates
- Runs as a single transaction — fails clean, no partial imports

Usage:
```bash
railway connect Postgres &   # open SSH tunnel, note the local port it prints
sleep 3
DATABASE_URL="postgresql://postgres:<password>@localhost:<PORT>/railway" node scripts/importCurriculum.js scripts/curriculum-data/<file>.js [--dry-run] [--force]
```

## Recent Fixes & Additions (August 2026)

1. **Fixed invalid Claude model name** — `claudeClient.js` was calling a non-existent model (`claude-opus-5`), silently falling back to canned demo responses on every request. Fixed to `claude-sonnet-5`.
2. **Removed public debug endpoints** — `/api/debug/config` and `/api/debug/test-claude` were exposed on the public production URL; `/api/debug/config` was leaking large portions of the live `CLAUDE_API_KEY`. Both endpoints removed and confirmed returning 404.
3. **Added SS3 Mathematics curriculum** — the first SS3 subject added, 15 topics.
4. **Extended `topics` schema, then migrated to the app's real schema** — initially added flat columns directly on `topics`; subsequently migrated that data into the app's proper normalized tables (`content`, `learning_activities`) to match what `/api/content/topics/:topicId` already expected.
5. **Wired syllabus content into AI agent prompts** — `tutor.js`, `practice.js`, and `assessment.js` previously only used the topic name (and sometimes learning outcome). Now they pull in syllabus content, focal competency, and student activities.
6. **Fixed grade-based content isolation** — `/api/content/themes` and `/api/content/themes/:themeId/topics` previously had no grade filtering (and `/themes` had no auth requirement at all). Now themes/topics are scoped to the requesting student's grade, with cross-grade access returning 403.
7. **Fixed cross-topic conversation bleed** — in-memory conversation history was keyed only by `studentId`, causing sessions on different topics to leak into each other. History is now keyed by `studentId:topicId`.
8. **Built a reusable, non-destructive curriculum import tool** (`importCurriculum.js`) and used it to add 8 more SS3 subjects (English Language, Government, Physics, Chemistry, Biology, Geography, Economics, Literature-in-English) — 100 additional topics, bringing SS3 to 9 subjects and 115 topics total.
9. **Added `curriculum_version` tracking** — `themes.curriculum_version` (`legacy` or `nesri_2025`) added to distinguish pre- and post-reform curricula, anticipating the NESRI rollout without disrupting existing legacy content.

## Known Gaps

- `evaluation_guides` table is empty for all topics across every subject and grade
- Duplicate theme rows exist for some Primary-grade themes (same names, different `description` values) — pre-existing, not yet cleaned up
- Several SS3 subjects (Physics, Biology, Geography) only have First Term content — Second/Third Term wasn't available from the sources found
- SS3 Mathematics Third Term is not populated — believed to be WAEC/NECO revision of prior material, not new content, but this hasn't been verified against an official source
- No curriculum content exists yet for Primary 5, Primary 6, or JSS 1, despite those grade values appearing on some student accounts
- **No cohort-aware curriculum-version selection**: the app doesn't yet determine whether a given student should see `legacy` or `nesri_2025` content based on when they started SS1 — both versions exist in the database, but nothing currently picks between them (worth resolving before `nesri_2025` content is actually relevant to any real student, likely not urgent until ~2027/2028)
- In-memory conversation history (used for live AI context, separate from the permanent `conversation_logs` database table) resets on every backend redeploy/restart — expected behavior, not a bug

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

For adding new curriculum data, prefer `backend/scripts/importCurriculum.js` (see above) over raw SQL — it's safer, reusable, and matches the app's actual schema.

### Testing the backend directly (without the mobile app)

Useful for quick verification without needing the simulator running:

```bash
# Sign up a test student
curl -s -X POST https://pacific-growth-production-d82a.up.railway.app/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"TestPass123!","fullName":"Test Student","grade":"SS3"}'

# Use the returned token to send a tutor chat message
curl -s -X POST https://pacific-growth-production-d82a.up.railway.app/api/agents/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"message":"Explain this topic","topicId":25,"agentType":"tutor"}'
```
