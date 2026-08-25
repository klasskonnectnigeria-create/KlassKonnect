# NERDC AI Tutor — Project Overview

**Last updated:** 25 August 2026

## What it is

An AI-powered tutoring app for Nigerian students, built around the NERDC curriculum. Currently active: **Primary 4 Mathematics**, **SS2** across 9 subjects, and **SS3** across 9 subjects. Provides three modes of AI-assisted learning: tutoring, practice questions, and assessments.

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
- Grade dropdown on signup (`SignupScreen.js`, `GRADES` constant): `Primary 4`, `Primary 5`, `Primary 6`, `JSS1`, `JSS2`, `JSS3`, `SS1`, `SS2`, `SS3` — no space before the number for JSS/SS grades, matching the format stored in `themes.grade` in the database. This must stay in sync; see Known Gaps.
- Shared `Input` component (`components/Input.js`) supports a `multiline` prop (forwards to the underlying `TextInput`, applies `inputMultiline` style with `maxHeight: 100`); pass `multiline` explicitly wherever a growable text field is needed — it defaults to `false`.

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

Full source-by-source provenance for SS3 (exact URLs, dates, known quirks in each source) is documented separately in `SS3_Subject_Sourcing.md` at the repo root.

### SS2 — 9 subjects, 292 topics total

| Subject | Topics | Curriculum Version | Terms Covered |
|---|---|---|---|
| Mathematics | 31 | `legacy` | All 3 |
| English Language | 33 | `legacy` | All 3 |
| Government | 33 | `legacy` | All 3 |
| Chemistry | 33 | `legacy` | All 3 |
| Physics | 32 | `legacy` | All 3 |
| Biology | 33 | `legacy` | All 3 |
| Geography | 32 | `legacy` | All 3 |
| Economics | 34 | `legacy` | All 3 |
| Literature-in-English | 31 | `legacy` | All 3 |

All 9 SS2 subjects were sourced from `schemeofwork.com`'s Federal SS2 scheme-of-work pages, all tagged `legacy` since none of those source pages claim NESRI compliance — consistent with the fact that current real SS2 students started SS1 before the reform existed. Unlike several SS3 subjects, every SS2 subject has full three-term coverage.

### `curriculum_version` system

**`themes.curriculum_version`** distinguishes two curriculum generations:
- **`legacy`** — the pre-reform WAEC-era curriculum (in use for years; well-documented by third-party sites). This is what every actual current SS2 and SS3 student is on.
- **`nesri_2025`** — the new National Education Sector Reform Initiatives curriculum, approved by NERDC on September 8, 2025. Sourced only for a subset of SS3 subjects, from a page that self-describes as NESRI-compliant.

**Important caveat on the reform's actual applicability**: NESRI implementation is phased by entry cohort, starting at SS1 in the 2025/2026 session — meaning students who were *already* in SS2/SS3 when the reform launched are finishing under the **legacy** curriculum, not NESRI. The first cohort to experience NESRI at SS3 won't arrive until roughly 2027/2028. Both versions are stored so the app can serve the correct one depending on which cohort a student belongs to, but this cohort-matching logic is **not yet implemented** in the app itself — see Known Gaps.

**Sourcing**: All curriculum content (Primary 4, and every SS2/SS3 subject) comes from third-party aggregator sites (primarily schemeofwork.com, also ecolebooks.com for one SS3 subject), not the official NERDC portal directly. The official portals (`lmis.nerdcportals.com.ng`, `nerdc.org.ng/eCurriculum`) are login-gated and/or block automated access (`robots.txt` disallow) — this is a structural limitation of the source material, not something this project failed to check.

Each topic carries: `name`, `learning_outcome`, `focal_competency`, `sequence_order`, plus normalized child records in `content` (syllabus content, tagged by `section_type`), `learning_activities` (teacher and student activities, with resources/materials), and `evaluation_guides` (currently empty for all subjects/grades).

**Note**: Primary 5, Primary 6, and JSS1–JSS3 exist as grade values on some (test/seed) student accounts, but have no curriculum content populated yet — students at those grades currently see an empty theme list.

## Offline Support

- The app detects connectivity via a `connectionManager` service and, when offline, reads from and writes to a local SQLite cache instead of the network.
- **Progress/gamification data** is designed to queue locally and sync automatically once the connection is restored, via a `sync()` callback registered with `connectionManager.setSyncCallback()` and triggered by an `onOnline` event listener (`mobile/app/_layout.js`).
- **Chat messages behave differently**: when offline, sending a chat message fails immediately with a visible "Unable to send message. Please check your connection" error — it is **not** queued for later delivery. This makes sense given a chat message needs a live AI-generated reply, which can't be produced until the connection returns; there's nothing meaningful to queue. Confirmed via live testing (see Known Gaps for what wasn't confirmed).
- This offline-first design is intended for the low-connectivity environments common across Nigeria.

## AI Behavior

- Responses are personalized (address the student by name), contextually grounded in the curriculum topic's actual syllabus content, and localized to Nigerian settings and examples
- Conversation history is scoped **per student per topic** (not just per student), so a student's tutoring session on one topic, practice session on another, and assessment session on a third each maintain independent, non-bleeding context — while still correctly remembering earlier turns within the same topic
- Verified end-to-end in production via direct API testing across multiple subjects and topics: tutor, practice, and assessment agents all produce responses correctly grounded in the specific syllabus content for their topic
- **Known display bug**: AI responses that use markdown formatting (headers with `#`, bold with `**`) are rendered as raw markdown text in the chat bubble rather than being parsed/styled — e.g. a response literally shows `# What is ECOWAS?` and `**ECOWAS**` instead of a styled heading and bold text. Confirmed via live testing. Needs a markdown renderer (e.g. `react-native-markdown-display`) wired into the chat message bubble component.

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
3. **Added SS3 curriculum across 9 subjects** — 115 topics total. See SS3 table above.
4. **Extended `topics` schema, then migrated to the app's real schema** — initially added flat columns directly on `topics`; subsequently migrated that data into the app's proper normalized tables (`content`, `learning_activities`) to match what `/api/content/topics/:topicId` already expected.
5. **Wired syllabus content into AI agent prompts** — `tutor.js`, `practice.js`, and `assessment.js` previously only used the topic name (and sometimes learning outcome). Now they pull in syllabus content, focal competency, and student activities.
6. **Fixed grade-based content isolation** — `/api/content/themes` and `/api/content/themes/:themeId/topics` previously had no grade filtering (and `/themes` had no auth requirement at all). Now themes/topics are scoped to the requesting student's grade, with cross-grade access returning 403.
7. **Fixed cross-topic conversation bleed** — in-memory conversation history was keyed only by `studentId`, causing sessions on different topics to leak into each other. History is now keyed by `studentId:topicId`.
8. **Built a reusable, non-destructive curriculum import tool** (`importCurriculum.js`), used to add all SS3 and SS2 curriculum content described above.
9. **Added `curriculum_version` tracking** — `themes.curriculum_version` (`legacy` or `nesri_2025`) added to distinguish pre- and post-reform curricula, anticipating the NESRI rollout without disrupting existing legacy content.
10. **Added SS2 curriculum across all 9 subjects** — 292 topics total, all three terms for every subject. See SS2 table above.
11. **Fixed a real production bug: SS3 grade string mismatch causing empty subject lists.** A student's account had `grade = "SS 3"` (with a space) while all SS3 themes are stored as `"SS3"` (no space); the exact-match grade filter (see fix #6) meant this student saw zero subjects, with no visible error. Root cause: `SignupScreen.js`'s `GRADES` dropdown offered spaced values (`'SS 1'`, `'SS 2'`, `'SS 3'`, `'JSS 1'`, etc.) inconsistent with the backend's unspaced convention. Fixed the dropdown to use unspaced values matching the database (`SS1`, `SS2`, `SS3`, `JSS1`, `JSS2`, `JSS3`), and corrected the one affected student's existing database record. Verified fixed via live logout/login test.
12. **Fixed a hardcoded home-screen heading** — `HomeScreen.js` displayed a literal "📚 Mathematics Topics" label regardless of the student's actual grade or subjects. Changed to dynamically read `{student.grade} Subjects`.
13. **Removed hardcoded test login credentials from `authStore.js`.** Git history shows this file has repeatedly flip-flopped between safe `null`/`null` defaults and various hardcoded test tokens/students (`alice@test.com`, `test@example.com`, etc.) — a recurring pattern from quick local UI testing that wasn't reverted before other commits landed on top. Removed again as of this fix; worth being deliberate about not reintroducing this during future quick-testing sessions.
14. **Reviewed and integrated a batch of app-startup and chat performance work** found sitting uncommitted in the working tree (from a separate, earlier debugging pass): added timing instrumentation across app init steps and the chat API call, made push-notification registration non-blocking and cache the Expo push token, fixed a `GestureHandlerRootView` mounting bug (was conditionally un-mounted during loading, which can break gesture handler attachment), and fixed a Send-button sizing issue. One part of that batch — deferring automatic sync until the user next navigates, instead of syncing immediately on reconnect — was deliberately **reverted**, since it silently disabled a documented offline feature (auto-sync-on-reconnect) without actually addressing its stated goal (the sync listener registration itself was not the blocking operation; `await initializeNotifications()` was, and that was fixed separately in the same batch).
15. **Deleted a set of unreviewed, unverified SS2 curriculum import files** found in the working tree (`SS2_IMPORT_INSTRUCTIONS.md`, `IMPORT_SS2.sh`, `deploy-and-import-ss2.js`, `ss2-literature-in-english.js`, and two SQL dump files), left over from what appears to have been a separate, parallel session attempting the same SS2 rollout independently. These were never actually run against the database (no data conflicts existed), and one of the SQL files used **hardcoded primary key IDs** that would have collided with and potentially corrupted real data already in the live database had it ever been executed. Our own SS2 work (see fix #10) fully supersedes this.
16. **Fixed the chat input box's bottom safe-area and multiline support.** The chat screen's `SafeAreaView` was imported from core `react-native` rather than `react-native-safe-area-context`; core RN's version silently ignores the `edges` prop, and critically, the input row at the bottom of the chat screen wasn't wrapped in any safe-area-aware container at all (only the header was). This caused typed text to sit flush against the very bottom edge of the screen with no padding. Separately, the shared `Input` component didn't accept or forward a `multiline` prop, so passing one had no effect. Fixed both: `TopicDetailsScreen.js` now imports the correct `SafeAreaView` and wraps the input row in one with `edges={['bottom']}`; `Input.js` now properly supports `multiline` (with a capped `maxHeight`) and centers its content correctly at any height. Verified via live multi-line message testing.

## Testing Notes — Offline Sync (25 August 2026, inconclusive)

Attempted to verify auto-sync-on-reconnect (see fix #14 revert) by toggling the Mac's WiFi off/on while the iOS Simulator was running and watching for `[ConnectionManager] Network status:` and `⏱️ Sync operation took:` log lines to appear automatically. The test was inconclusive: toggling WiFi produced **no new log output at all** in one attempt, suggesting the simulator's network-change detection (likely via `NetInfo` or similar) may not reliably catch connectivity changes made this way, or requires a longer state change than was tested. This needs re-testing — ideally on a **physical device** via Expo Go, where WiFi/cellular toggling is more representative of a real network transition, or with a longer off-duration. Until re-verified, don't assume auto-sync-on-reconnect is confirmed working in practice, even though the code path (`connectionManager.addEventListener('onOnline', sync)`) is correctly wired.

## Known Gaps

- `evaluation_guides` table is empty for all topics across every subject and grade
- Duplicate theme rows exist for some Primary-grade themes (same names, different `description` values) — pre-existing, not yet cleaned up
- Several SS3 subjects (Physics, Biology, Geography) only have First Term content — Second/Third Term wasn't available from the sources found. SS2 does not have this gap — all 9 SS2 subjects have full three-term coverage.
- SS3 Mathematics Third Term is not populated — believed to be WAEC/NECO revision of prior material, not new content, but this hasn't been verified against an official source
- No curriculum content exists yet for Primary 5, Primary 6, or JSS1–JSS3, despite those grade values appearing on some student accounts
- **No cohort-aware curriculum-version selection**: the app doesn't yet determine whether a given student should see `legacy` or `nesri_2025` content based on when they started SS1 — both versions exist in the database, but nothing currently picks between them (worth resolving before `nesri_2025` content is actually relevant to any real student, likely not urgent until ~2027/2028)
- **Grade-string consistency is fragile**: the grade value is free-form text stored per student and compared by exact string match against `themes.grade`. The signup dropdown and database now agree (`SS3` not `SS 3`), but any future change to one side without the other will silently break that grade's content for every affected student, with no error surfaced anywhere. Worth considering a stricter approach (e.g. an enum/lookup table) if this class of bug recurs.
- **Auto-sync-on-reconnect is not yet confirmed working in practice** — see Testing Notes above. The code is correctly wired, but a live test to prove it fires on real connectivity restoration was inconclusive and needs a retry, ideally on a physical device.
- **Chat messages are not queued for offline sending** — unlike progress/gamification data, a chat message sent while offline fails immediately with a visible error rather than being queued for later delivery. This may well be the correct/intended design (there's no AI reply to produce until reconnected), but it means the app's offline story is narrower than earlier documentation implied — it covers offline *reading* and *progress tracking*, not offline *chat composition*.
- **Chat responses don't render markdown** — AI replies that use `#` headers or `**bold**` show the raw markdown syntax in the chat bubble instead of styled text. Needs a markdown renderer wired into the message display component.
- **Unexplained app-initialization timeout warning**: `App initialization timeout - showing UI anyway (critical path took >20s)` fires on essentially every app launch/reload in testing, but the app's own instrumented `TOTAL INITIALIZATION TIME` log consistently shows only 25–86ms for the same launch. This suggests either the 20-second timeout warning's trigger condition doesn't actually reflect the instrumented init steps (e.g. it's tied to a different, unmeasured operation), or the log message itself is stale/miswired. Worth investigating — right now it's a confusing, seemingly-false warning appearing on every launch.
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

**Note on testing network/connectivity behavior specifically**: toggling the Mac's WiFi while the iOS Simulator is running does not reliably trigger a detectable connectivity change in testing so far (see Testing Notes above). For offline/reconnect testing, prefer a physical device via Expo Go where toggling WiFi or cellular data is more representative of a real transition.

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

### If working on this repo from multiple sessions/tools at once

If more than one Claude session (or another collaborator) might be working on this repo concurrently, check `git status` for uncommitted changes and untracked files before starting new work — a parallel session may have left local changes that haven't been reviewed or committed. Don't assume the working directory only contains your own changes. See fix #15 above for a real example of this happening.
