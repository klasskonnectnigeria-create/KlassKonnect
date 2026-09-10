# CLAUDE.md

## Getting started

At the beginning of every work session on this project, open a terminal and run:

```
cd ~/CC/nerdc-ai-tutor
claude
```

This loads this file's full context (current state, brand system, open items, operating
conventions) before any work begins. If Claude Code offers to resume a prior session, prefer
that when continuing recent work; start fresh only when beginning something new.

As of 2026-09-09, `origin/main` is at `5b9e3b31` following a full review-and-cleanup session
that audited 10 previously-unreviewed local commits alongside 5 new ones (18 total) — see
"Full review-and-cleanup session (2026-09-09)" under "Current state" below for what it caught
and fixed, and "Open items" for what's still outstanding.

## Operating conventions

### NERDC curriculum sourcing — always use the subagent

This repo has a subagent at `.claude/agents/nerdc-curriculum-sourcer.md` for sourcing real
NERDC/WAEC curriculum content and importing it into the live database.

Invoke it whenever a Class and Subject are named together, in any phrasing — e.g.
`Class: SS3, Subject: Auto Body Repairs`, "source Physics for SS1", "do Welding and Fabrication
for SS3 next". It runs the full pipeline unattended: web search → fetch → validate real content
→ compile the `curriculumData` file → dry-run → real DB import via Railway → verify → git commit.
It reports "unresolved" rather than fabricating content if no real source is found.

Don't improvise this process manually — always delegate to the subagent so the search sources,
validation steps, grade-string convention, and commit format stay consistent with prior sourcing
sessions.

### Subject categories are a doc convention, not a product concept

The "5-category" grouping used in the `*-Content-Completion-Status.md` tracking files —
Compulsory Core, Science & Math, Humanities & Arts, Business & Commercial, Vocational &
Trade — has **no backing in the schema, backend, or frontend**. It exists purely to make the
SS3 tracking file readable given how large that catalogue is; it is not stored, queried, or
rendered anywhere in the app:

- `backend/scripts/schema.sql`'s `themes` table has no `category` column (only `id, name,
  description, subject, grade, created_at`).
- `backend/routes/content.js` fetches themes with a flat `WHERE grade = $1` — no category
  filter or per-grade subject allowlist exists anywhere in the backend.
- `mobile/screens/HomeScreen.js` renders every theme for a grade as a flat, uncategorized
  list (`themes.map(...)`) — no grouping or category UI exists.

Do not assume any code path restricts which categories of subjects a grade can have.

### Extra/legacy subjects are not a problem — only genuinely missing new subjects are

When checking a grade's live catalogue against an official target list, **a subject that's
live but isn't on the target list is not a gap and doesn't need reconciling, removing, or
renaming.** The target lists (Primary/JSS 16/21-subject NESRI 2025 lists, the SS 6-subject
NESRI 2025 trade list) describe what's *new or required*, not an exhaustive allowlist of
everything a grade is permitted to have. Only a subject NERDC/WAEC has genuinely introduced
that the app doesn't yet have counts as a real gap worth sourcing.

Two practical consequences:
- Before treating a named target subject as missing, check whether an existing live subject
  under a different but close-enough name already covers it (e.g. "Solar Photovoltaic
  Installation" vs. the NESRI 2025 "Solar PV Installation and Maintenance" — same subject,
  not a gap) — don't source a duplicate under the new exact name.
- Legacy/off-target subjects already live (e.g. Business Studies at JSS1-3; the pre-reform
  33-subject SS3 Vocational & Trade catalogue, even now that 4 of the 6 new NESRI 2025 SS
  trade subjects have been added alongside it) can be left alone indefinitely just for being
  off-target. Do not restructure, retag, or remove them on that basis alone, unless the user
  explicitly asks for that cleanup — a subject being untargeted is not itself a problem to
  fix. (This is distinct from unrelated data-quality issues on such a subject, like a
  mislabeled `curriculum_version` tag — see Business Studies in "Open items" below, which is
  still worth fixing on its own merits.)

### Railway/Postgres access

`RAILWAY_TOKEN` in this environment is project-scoped. That kind of token has no associated
user identity, so `railway whoami`, `railway list`, `railway ssh`, and `railway connect` all
correctly return `Unauthorized` — that's expected, documented behavior for this token type,
not a sign it's broken or misconfigured. Never use those commands as a health check, and never
respond to their failure by unsetting `RAILWAY_TOKEN` or falling back to a cached
interactive/browser-login session — that silently switches which account and credentials the
rest of the pipeline runs under. Use `railway status` or `railway variables --service Postgres`
instead, both of which are project-scoped and work fine with a project token.

**Don't use `railway connect`** — it needs account-level SSH auth a project token can't
satisfy, and fails with `Unauthorized` even though the token itself is fine. Go straight to the
public TCP proxy instead:

```bash
railway variables --service Postgres --kv > /tmp/pgvars.env
```

Read `RAILWAY_TCP_PROXY_DOMAIN`, `RAILWAY_TCP_PROXY_PORT`, and `PGPASSWORD`/`POSTGRES_PASSWORD`
from that output, then connect `psql`/`DATABASE_URL` directly to the proxy. Delete the file
once you've read what you need — **never write a password or `DATABASE_URL` to disk even
temporarily**, and never silently switch connection methods (e.g. to `railway run`) if the
documented path hits a block — stop and ask instead.

---

## Brand & design system

### Official KlassKonnect brand — colors, typography, logo, tagline (authoritative spec, updated 2026-09-05)

This is the current source of truth for KlassKonnect branding. It supersedes any color
scheme, typeface, logo, or brand description found elsewhere in the app or its docs — see
"Brand migration status" below for what still needs to catch up to it. Synced from
`KK_ASSETS_CLAUDE.md` (a fuller brand doc from Claude Design that hasn't otherwise been merged
into this repo) — this file's own "KlassKonnect Logo System.pdf" only carries the 4 core
colors, logo, and tagline below; the typography and subject-identity colors are new,
previously undocumented anywhere in this repo.

**Core colors**:
- Ink Navy `#0B1B3F` — mark, headings, dark UI
- Konnect Blue `#1B54F5` — actions, links, "Konnect" wordmark
- Signal Yellow `#F5A524` — accent only, never small text (use `#7F4F00` — "Deep Yellow" below
  — when set as type on light backgrounds)
- Paper `#F2F1EC` — backgrounds, light lockup ground

**Subject-identity colors** — a separate, distinct palette for identifying subjects/categories
only, not general UI:
- Green `#0E9F6E`
- Violet `#6D4AF3`
- Amber `#E0A21B`
- Coral `#E4572E`

No feature in the app currently colors subjects/categories at all (see CLAUDE.md's "Subject
categories are a doc convention, not a product concept" above — themes render as a flat,
uncolored list). These 4 colors have nothing to attach to yet; documented here for whenever
that feature is actually built, not as something to retrofit onto existing UI.

**Typography**:
- Archivo — brand/headings
- Plus Jakarta Sans — app UI

No typeface was documented anywhere in this repo before this — the app currently renders
entirely in the platform default system font (San Francisco/Roboto), since no font is loaded
or referenced anywhere in `mobile/` (`expo-font` is present only as a transitive dependency,
unused). Applying this is unstarted work — see "Brand migration status" below.

**Logo**: flat vector, no bevels/shadows/gradients. 4 lockups: primary, stacked, compact,
reversed. App icon uses 18% padding. Single-color rule: the yellow dot goes to the ground
color, never outlined to fake it. Minimum sizes: mark 20px, compact lockup 120px wide, primary
lockup with tagline 220px wide. Clear space = half the bubble height on all sides, measured
from the tail tip.

**Tagline**: "YOUR PERSONAL AI TUTOR" (updated 2026-09-09, replacing the earlier "LEARN YOUR
WAY, IN YOUR CURRICULUM." — permanent change, everywhere the tagline appears). Uppercase,
letterspaced, never below 9px. **Single color**, not two-tone: unlike the old tagline, this
one doesn't split into two clauses, so there's no natural place to divide a two-color
treatment — render it in one color (Ink Navy in the current `LoginScreen.js` implementation).
Don't reintroduce a two-tone split for this text.

**Hard rules**: no stretching or rotating the wordmark; never recolor "Klass" and "Konnect"
separately from the pair; no photo behind the mark without a solid tile.

**No emoji in product UI or brand assets.** No literal emoji characters (✉️, 🔒, 👁️, 🔥, 🏆,
🎉, etc.) in any user-facing screen, icon, or brand asset — use vector icons instead (this app
already standardizes on `@expo/vector-icons`, e.g. `MaterialCommunityIcons`). This rule comes
from `KK_ASSETS_CLAUDE.md` and predates this file's own brand write-up, but was never actually
transcribed into this CLAUDE.md until now (2026-09-10) — it previously existed only as a line
in one commit message (`e9d0f0ce`, "Replace emoji icons on LoginScreen with proper vector
icons"). That gap is exactly why enforcement stalled after `LoginScreen.js`: nothing in this
file told a future session the rule existed, so `HomeScreen.js` (👋 📊 🎓 💡 📚 🚀) and
`GamificationDisplay.js` (🔥 🏆 🎉) were never brought in line — see "Brand migration status"
below for the full remaining-emoji inventory.

### Brand migration status (updated 2026-09-05)

**Colors and logo are done.** `mobile/constants/colors.js` (the real, in-use design-token
file, imported by all 14 screens/components) now maps its existing token names onto Ink Navy /
Konnect Blue / Signal Yellow / Paper — `colors.primary` is Konnect Blue (the app's dominant
action/link color, by actual usage), `colors.primaryDark` is Ink Navy, etc.; every value not
literally one of the 4 core hexes is commented "derived" in the file for design sign-off. The
hardcoded hex values that used to bypass the token file (`GamificationDisplay.js` ×6,
`HomeScreen.js` ×2, `ThemesScreen.js` ×1, `TopicDetailsScreen.js` ×2, `app/(app)/_layout.js`
×1) all now reference tokens instead. `LoginScreen.js` renders a real two-tone wordmark
("Klass" in Ink Navy, "Konnect" in Konnect Blue) and the current tagline ("YOUR PERSONAL AI
TUTOR") in single-color Ink Navy, uppercase and letterspaced, matching the spec above (updated
2026-09-09 along with the tagline text itself). The app icon, Android adaptive icon, splash
screen, and web favicon are
all wired in `mobile/app.json` and `mobile/assets/` from the real logo
(`KlassKonnect_Logo_Assets_v2.zip`) — verified via actual `xcrun simctl` screenshots showing
the K-mark on the home screen icon and Ink Navy on the splash background, not just source-file
inspection. `PHASE2_SUMMARY.md` has a dated note flagging its old-palette "Design System"
section as a historical build-log snapshot, not current brand. **The K-mark image itself is
only ever used in native chrome** — app icon, adaptive icon, splash screen, web favicon. It
never appears inside the JS-rendered UI: `LoginScreen.js`'s "wordmark" is plain two-tone text
("Klass"/"Konnect"), not the bubble-mark graphic, and no other screen (`HomeScreen.js`
included) renders it either. Whether it should appear anywhere in-app — e.g. a small mark in a
header — is an open question, not a decided scope; see below.

**Still open, not yet done:**
- **Typography**: Archivo/Plus Jakarta Sans aren't loaded or applied anywhere — the app still
  renders in the platform default system font. No font files, `expo-font` usage, or
  `fontFamily` references exist yet.
- **Subject-identity colors**: undeployed by design — there's no subject/category-coloring
  feature to attach them to (see above). Not a gap to close; don't build the feature
  speculatively just to use these colors.
- **`SignupScreen.js`** has "Join KlassKonnect today" as ordinary body copy — not a tagline
  usage, but adjacent branding text nobody's reviewed against the current spec yet.
- **Emoji cleanup only ever reached `LoginScreen.js`** (commit `e9d0f0ce`) plus, per that
  commit's own note, `GamificationDashboard.js`/`GamificationNotification.js` (already on
  vector icons independently). `HomeScreen.js` (👋 greeting, 📊 stats title, 🎓 exam-prep
  heading, 💡 exam-prep tip, 📚 subjects heading, 🚀 CTA title, 🏆 leaderboard button) and the
  separate `GamificationDisplay.js` (🔥 streak, 🏆 best-streak badge, 🎉 badge-unlock
  notification) — a different component from `GamificationDashboard.js` despite the similar
  name — still have every one of their original emoji. Not yet scoped into a fix.
- **Open question: should the K-mark appear anywhere in the JS-rendered UI** (e.g. a small
  header mark on Home or other authenticated screens), or stay native-chrome-only as it is
  today? No decision has been made either way — don't add or rule it out unilaterally.

---

## Current state (as of 2026-09-09)

### Curriculum content, by grade

| Grade tier | Live subjects | Target | Status |
|---|---|---|---|
| Primary 1 | 6 | not yet reconciled | Live content, thin — learning outcomes only, no full lesson content (see below) |
| Primary 2 | 4 | not yet reconciled | Live content, thin — learning outcomes only, no full lesson content (see below) |
| Primary 3 | 5 | not yet reconciled | Live content, thin — learning outcomes only, no full lesson content (see below) |
| Primary 4 | 15 | 16 (NESRI 2025) | Arabic Language unresolved (sole gap) |
| Primary 5 | 15 | 16 (NESRI 2025) | Arabic Language unresolved (sole gap) |
| Primary 6 | 15 | 16 (NESRI 2025) | Arabic Language unresolved (sole gap) |
| JSS1 | 22 | 21 (NESRI 2025) + 1 legacy | 21/21 target complete; Business Studies is an untargeted legacy extra |
| JSS2 | 22 | 21 (NESRI 2025) + 1 legacy | 21/21 target complete; Business Studies is an untargeted legacy extra |
| JSS3 | 22 | 21 (NESRI 2025) + 1 legacy | 21/21 target complete; Business Studies is an untargeted legacy extra |
| SS1 | 65 | 65 (= SS2) | Matches SS2 exactly; includes 4 new NESRI 2025 trade subjects (2026-09-05) |
| SS2 | 65 | 65 (= SS1) | Matches SS1 exactly; includes 4 new NESRI 2025 trade subjects (2026-09-05) |
| SS3 | 66 | 66 | **COMPLETE** on its original 62-subject catalogue; +4 new NESRI 2025 trade subjects (2026-09-05) |

**Primary 4-6** target is a 16-subject list reconciled against the Federal Ministry of
Education's official 3 September 2025 press release, "Lighter Load, Stronger Minds: FG
Overhauls Curriculum for a Smarter Generation" (the NESRI 2025 reform document,
`education.gov.ng/wp-content/uploads/2025/09/FG-OVERHAULS-CURRICULUM.pdf`), citing
NERDC/WAEC/NECO/NBTE/NABTEB consultation. Its Primary 4-6 subject table's "Nigerian Languages"
(pick one) and "CRS/IS" (pick one) rows were expanded into every individual option — matching
this platform's convention of offering Hausa/Igbo/Yoruba/Arabic/CRS/IS as separate live
subjects rather than enforcing one pick — giving: English Studies, Mathematics, Basic Science
and Technology, Physical and Health Education, Basic Digital Literacy, Nigerian History,
Social and Citizenship Studies, Cultural and Creative Arts, Pre-vocational Studies, Christian
Religious Studies, Islamic Studies, Yoruba, Hausa, Igbo, French, Arabic Language. (The live
`nerdc.gov.ng` content-manager pages for Primary 4-6 host an older, pre-reform curriculum and
were not used as the target — they bundle a "National Values" subject instead of separate
Nigerian History/Basic Digital Literacy/Physical & Health Education entries.) All three grades
converged on the identical outcome — 15 of 16, Arabic Language the sole gap — independently.
See "Open items" below for why Arabic Language isn't just unsourced but genuinely unresourceable
right now, and for a provenance caveat on some Primary 4/5 subjects.

**Primary 1-3** are live with real, sourced content — imported 2026-09-07 via
`backend/scripts/import-primary-curriculum.js` from `backend/scripts/curriculum-data/
primary_1_curriculum_data.js`, `primary_1_social_studies_cca_phe.js`,
`primary_2_curriculum_data.js`, and `primary_3_curriculum_data.js`, each citing "NERDC,
SchemeofWork.com, SyllabusNG" and structured week-by-week the same way as the JSS1-3 sourcing
sessions. Live subjects: Primary 1 — Mathematics, English Studies, Basic Science and
Technology, Social Studies, Cultural and Creative Arts, Physical and Health Education (6);
Primary 2 — Mathematics, English Studies, Basic Science and Technology, Social Studies (4);
Primary 3 — Mathematics, English Studies, Basic Science and Technology, Social Studies, Civic
Education (5). No NESRI 2025 (or other) target list has been reconciled against these three
grades yet, unlike Primary 4-6/JSS1-3/SS1-3 — treat subject-count gaps as unknown, not
targeted, until that reconciliation happens. The source files themselves were never committed
until this session, another instance of the provenance-gap pattern already called out for
Primary 4/5 and JSS1 Fashion Design below.

**JSS1-3** target is a 21-subject list from the same NESRI 2025 press release PDF, which also
carries a Junior Secondary School column in its Basic Education Subject List table. Expanding
its pick-one groups the same way (Nigerian Languages → Hausa/Igbo/Yoruba; CRS/IS → Christian
Religious Studies/Islamic Studies) plus its named "Trade Subjects (Students to choose 1
subject)" list into six separate subjects gives: English Studies, Mathematics, Hausa, Igbo,
Yoruba, Intermediate Science, Physical and Health Education, Digital Technologies, Christian
Religious Studies, Islamic Studies, Nigerian History, Social and Citizenship Studies, Cultural
and Creative Arts, French, Arabic Language, Solar Photovoltaic Installation and Maintenance,
Fashion Design and Garment Making, Livestock Farming, Beauty and Cosmetology, Computer
Hardware and GSM Repairs, Horticulture and Crop Production. All three grades started from an
identical 12-subject baseline and closed the same 9-subject gap (Hausa, Igbo, Arabic Language,
and all 6 named trade options) in one 2026-09-04 session, each sourced from that grade's
`schemeofwork.com/jssN-scheme-of-work-unified/` page. See `JSS1/2/3-Content-Completion-Status.md`
for full per-subject sourcing detail and citations. Business Studies is live at all three
grades but isn't part of this target — see "Open items" below.

**SS1/SS2 vs SS3 (original 62-subject catalogue)**: this backlog is closed. SS1 and SS2 each
carried 61 live subjects against SS3's 62, and the sole difference was `Mining`, which
genuinely is SS3-only. Don't re-source SS1/SS2 wholesale on the assumption they're thin —
check the live count for the specific subject first.

**SS3** is fully COMPLETE on its original catalogue: all 62 subjects across the five
doc-convention categories (Compulsory Core, Science & Mathematics, Humanities & Arts, Business
& Commercial, Vocational & Trade) have real sourced content live. See
`SS3-Content-Completion-Status.md`.

**NESRI 2025 SS trade-subject additions (2026-09-05)**: per the "extra/legacy subjects are
fine" rule below, checking SS1/2/3 against the official 6-subject NESRI 2025 SS trade list
(same source PDF as Primary/JSS, page 4's "Senior Secondary School Subject List" — this is
confirmed straight from the primary source document, not just secondhand news reporting as
earlier framed) found 4 of the 6 genuinely missing outright and 2 already covered by
close-enough existing subjects:

- **Genuinely missing, sourced and added at all three grades**: Fashion Design and Garment
  Making, Beauty and Cosmetology, Horticulture and Crop Production, Computer Hardware and GSM
  Repairs. Each added as its own new standalone subject, distinct from and leaving untouched
  any similarly-scoped legacy subject already live (Garment Making Construction; Agriculture;
  GSM Maintenance and Repairs — the last one mirrors how JSS1-3 also sourced "Computer
  Hardware and GSM Repairs" as a wholly standalone subject). All sourced from
  schemeofwork.com, tagged `legacy`, terms vary by subject/grade (see
  `SS1/2/3-Content-Completion-Status.md` for full per-subject topic counts and term coverage).
- **Not gaps — already covered by existing subjects under close-enough names**: Solar PV
  Installation and Maintenance (live as the pre-existing "Solar Photovoltaic Installation");
  Livestock Farming (live within the pre-existing "Animal Husbandry / Livestock Farming").
  Confirmed via DB check, not sourced separately, per the rule below.

### AI tutor bug fixes (5 bugs found in live testing, all fixed)

Two sessions of live testing against the production DB and Claude API surfaced 5 real bugs in
the chat/tutor pipeline, all now fixed and verified:

1. **Subject grounding** — every agent prompt (tutor/assessment/practice) hardcoded
   `"mathematics"` as the subject regardless of the topic's actual subject, so a student on
   Physics, Auto Mechanical Work, etc. was told they were being tutored in math.
2. **Content grounding** — the chat endpoint's topic query read
   `topics.content`/`teacher_activities`/`student_activities`/`materials`, columns the importer
   never populates. The real sourced content lives in separate `content`/`learning_activities`/
   `evaluation_guides` tables and never reached the model. Fixed to join those tables the same
   way `content.js` already did.
3. **Cross-grade security** — the chat endpoint had no check that a requested `topicId`
   belonged to the student's own grade, unlike `content.js`'s theme lookup. Added the same
   grade-scoped `WHERE` + 403 pattern.
4. **Routing** — `detectIntent()` misrouted any message containing the bare substring
   `"question"` (e.g. "what subject is this, quick question") to the practice agent instead of
   tutor. Narrowed to specific practice-request phrasings.
5. **Silent API-error fallback** — `callClaude()` caught every error from the Anthropic SDK
   (auth failures, network errors, rate limits, anything) and returned `getDemoResponse()`, a
   hardcoded math-only reply, in the same shape as a real success. A student asking a non-math
   tutor (e.g. Yoruba) a question during a real outage would silently get a fabricated "I'm
   here to help you understand mathematics!" answer with no error signal anywhere. Fixed to log
   full diagnostics (source agent, studentId, topicId, error name/message/status/type,
   timestamp) and rethrow instead of swallowing the error, letting the honest,
   subject-agnostic catch blocks already in `tutor.js`/`practice.js`/`assessment.js` fire
   correctly. `getDemoResponse()` itself is untouched and still used for the explicit
   `DEMO_MODE=true` flag and local dev without an API key — neither is an error path.

Bugs 1-4: commit `70c1e844`. Bug 5: commit `09606c4b`. Both verified live — re-ran the exact
conversations that surfaced each bug (bugs 1-4) and an invalid-API-key 401 (bug 5) and
confirmed the fix.

### Data-integrity fixes (theme-row duplication)

Two rounds of direct DB audits found and fixed the same structural bug in different places,
plus one unrelated content-duplication bug:

- **Per-term theme-row split, JSS1-3 (2026-09-04, commit `08c947b7`)**: Hausa and Igbo had
  been imported as 3 separate per-term theme rows each (e.g. `"JSS1 Hausa (First Term)"` /
  `"(Second Term)"` / `"(Third Term)"`) instead of 1 bundled theme like every other subject —
  since the mobile app renders every theme as its own flat card, students saw 3 "Hausa" tiles
  instead of 1. Fixed by merging each subject+grade's 3 rows into 1 (6 merges: Hausa/Igbo ×
  JSS1/2/3): lowest theme ID kept and renamed to `"<Grade> <Subject>"`, topics reassigned via
  `UPDATE topics SET theme_id`, empty theme rows deleted. Verified per-merge topic-count match
  and a final audit confirming every JSS1/2/3 subject (66 total) has exactly 1 theme row.
  DB-only — no other table references `theme_id` except `topics`, and no backend route or
  mobile code hardcodes a theme ID.
- **Per-term theme-row split, Primary 4/5/6 (2026-09-05)**: a direct DB audit found the
  identical bug across 28 subject-instances (5 in Primary 4, 13 in Primary 5, 10 in Primary
  6) — including fully sourced, file-backed subjects like Hausa/Igbo/Islamic Studies/
  Mathematics, not just legacy-seeded ones. Fixed the same way, one transaction per merge, all
  28 verified topic-count-match before/after, plus a final audit confirming every Primary
  4/5/6 subject has exactly 1 theme row except Primary 4 Mathematics (see next item). Bonus:
  this resolved standing "term coverage unverified" doc caveats for Primary 4/5 — subjects
  that turned out to be split into 3 term rows necessarily had all 3 terms' content already,
  not just First Term. See `Primary4/5/6-Content-Completion-Status.md` for the full breakdown.
- **Primary 4 Mathematics duplicate content (2026-09-05, resolved)**: a separate, unrelated
  bug — a straight re-import, not a per-term split. 5 subject areas (NUMBER NUMERATION, BASIC
  OPERATIONS, MENSURATION, GEOMETRY, EVERYDAY STATISTICS) were each duplicated as 2 theme rows
  (one set created 2026-08-19, one 2026-08-20), 14 topics total, with every topic field
  byte-identical between copies. The two copies had diverged in linked usage data: the
  2026-08-19 copy carried 29 real `conversation_logs` rows (genuine AI-tutor chat) and 0
  `student_progress` rows; the 2026-08-20 copy carried 21 `student_progress` rows (all
  `not_started`/0 attempts — a seeding artifact, all sharing the import's exact timestamp) and
  0 `conversation_logs`. Kept the 2026-08-19 copy (real conversation history). Before deleting
  the 2026-08-20 copy: reassigned its 21 `student_progress` rows to the matching topic on the
  surviving copy (mapped by theme name + topic name + sequence_order, a clean 1:1
  correspondence, no unique-constraint conflicts), deleted its duplicate `content`/
  `learning_activities`/`evaluation_guides` rows (byte-identical to what the surviving copy
  already holds), then its now-childless topics and theme rows. Verified before/after: 5 theme
  rows / 7 topics survive (was 10/14), all child-table counts match expectations, no orphans
  or duplicate `student_progress` rows. See `Primary4-Content-Completion-Status.md`.
- **SS3 Chemistry — audited, confirmed not a bug (2026-09-05)**: SS3 Chemistry genuinely has
  2 theme rows, both named "SS3 Chemistry": one with real subject content (20 topics: Food
  Chemistry, Industrial Chemistry, Environmental Chemistry, exam-prep, etc.) and one that's a
  distinct revision/exam-prep module (6 topics: Summary of Major Topics, Intensive Revision,
  Mock Final Exams, etc.), traced to two real commits (`3522a4f2` then gap-fill `6cf5dbfc`).
  Unlike the splits/duplicates above, these are two different modules that happen to share a
  name, not duplicate rows of the same content. Confirmed and left untouched — no action taken.

### Infrastructure fixes

- **Railway token behavior clarified** (commit `415dff24`): `RAILWAY_TOKEN` here is
  project-scoped, so `whoami`/`list`/`ssh`/`connect` correctly return `Unauthorized` — that was
  being misread as broken. Documented in the sourcer subagent (see "Operating conventions"
  above) so it isn't re-litigated per session.
- **TCP proxy connection method** (commit `cbc3f6ee`): `railway connect` needs account-level
  SSH auth a project token can't provide. Every sourcing run was independently hitting and
  working around this by reading the TCP proxy vars and connecting `psql`/`DATABASE_URL`
  directly — now the documented path instead of `railway connect`.
- **Credential-handling hardening** (commit `96169f0f`): after a sourcing run hit a classifier
  block on the documented path and silently switched to `railway run`, briefly writing a
  plaintext DB password to a scratchpad file before self-correcting — added hard constraints:
  never write a password/`DATABASE_URL` to disk even temporarily, and stop-and-ask rather than
  silently switch connection methods on any block.
- **Git commit identity**: commit authorship switched from a generic placeholder identity
  (`Nubians <globlbuy@Daniels-MacBook-Air.local>`) to the project's own identity
  (`KlassKonnect <klasskonnectnigeria@gmail.com>`) starting 2026-09-02; all commits since have
  used the correct identity.
- **Verify after any interruption before committing (2026-09-05 incident)**: during the SS3
  Horticulture and Crop Production sourcing run, the sourcer subagent hit a session rate
  limit right after its DB import but before its `git commit` — the DB write itself was fine,
  but its staged status-file edit turned out to also contain a fabricated claim (that an
  unrelated "Solar Photovoltaic Installation" subject had been newly sourced that session,
  which never actually happened — no such DB row or file existed beyond the real, pre-existing
  2026-08-30 version). This was caught by diffing the staged changes and cross-checking the
  live DB against the claimed state before committing, rather than trusting the interrupted
  run's own summary; the false claim was stripped and the fix pushed as a follow-up commit
  (`3396bea1`) rather than an amend. **Lesson: after any interruption (rate limit, error,
  resumed session), verify `git status`/`git diff` and the live DB match what's about to be
  committed — do not commit staged changes, or trust a task's self-reported summary, without
  that check.** Every subsequent task in that same batch was re-verified this way before
  committing and came back clean.

### Full review-and-cleanup session (2026-09-09)

A single session did a ground-up audit of everything sitting locally-committed-but-unpushed on
`main`: 10 pre-existing local commits that had never been reviewed (a gamification/engagement
system built 2026-09-06) plus 5 new commits from the session itself — 18 commits total, now
pushed to `origin/main` at `5b9e3b31`. What the review specifically caught and fixed:

- **A backend-boot-breaking syntax error in `assessment.js`.** An unescaped ` ``` ` markdown
  fence inside its `systemPrompt` template literal (present since commit `07520cc3`,
  2026-09-06) prematurely closed the string, turning the following prose into invalid
  JavaScript. Since `orchestrator.js` statically imports `assessmentAgent`, the whole backend
  would have failed to boot on this branch as originally committed — not caught by any earlier
  pass, only surfaced by running `node --check` during this review. Fixed (commit `f230a8e3`);
  every `backend/**/*.js` file verified clean afterward.
- **Fabricated WAEC/UTME question-bank content, deleted.** Files claiming to be real past WAEC
  papers, exam frameworks, and study guides (`waec_utme_framework.js`,
  `past_questions_sample.json`, `social_science_humanities_content.json`,
  `study_guides_by_subject.json`, plus an abandoned MySQL-dialect schema draft and empty SQL
  stubs) turned out to be generic AI-generated placeholder content with zero real sourcing —
  one file's own metadata admitted "Sample data - to be populated with authenticated past
  papers." None of it ever reached production: the Postgres schema these files' tables matched
  (`waec_schema_postgres.sql`, kept, now with an explicit "no real data" warning header) was
  checked directly against the live DB and every table had 0 rows. Deleted rather than
  committed, since it directly contradicted this project's sourcing discipline and would have
  misled a future session into thinking real WAEC content existed.
- **A gamification fabrication problem in the tutor/practice/assessment prompts.** The Phase
  2/3 engagement commits (`eca663b8`, `ef25e9dd`) instructed the AI to state specific invented
  numbers directly to students — streak counts, topic-mastery percentages, point totals, and
  badge-unlock announcements — while zero real streak/progress/points/badge data is ever passed
  into these agents' prompt context (verified: they only receive `studentName`, `grade`, and
  topic content). `assessment.js` additionally had a fake leaderboard section instructing the
  model to state other students' fabricated names and scores. Stripped from all three agents
  (commit `8ddccef4`), keeping only what's legitimately groundable — encouragement for a good
  run observed within the current conversation, real in-session difficulty adjustment, and
  choice-path offerings framed as options rather than promised rewards. The backend
  `isCorrect`/badge-wiring correctness signal is a separate, still-open problem — see Open
  items.
- **A routing bug in the new exam-prep agent.** `detectIntent()` matched the bare substring
  `'exam'`, so any message containing "example" would misroute to the exam-prep agent instead
  of tutor — the same bug class as the earlier `'question'` substring bug (`70c1e844`). Fixed
  by narrowing to specific phrasings (commit `be786ef0`).

Real work reviewed and kept, not just bugs found: the exam-prep agent itself (`examPrep.js`,
following the same pattern as tutor/practice/assessment, wired into the orchestrator and the
mobile UI) is sound; the gamification backend/UI is kept with its crash-causing default/named
export mismatches fixed (commit `b0f79022` — `GamificationNotification.js` and
`GamificationDashboard.js` were rendering as `undefined` and would have crashed the Topic
Details and Achievements screens) while its correctness-signal redesign remains open; and
Primary 1-3 curriculum content — real, sourced, already live in production since 2026-09-07 but
never committed until this session — is now documented in the grade table above, with its
content-depth gap (learning outcomes only, no `learning_activities`/`evaluation_guides`) tracked
as an open item.

One provenance note on the brand/logo work (see "Brand & design system" above): it went through
two iterations before landing on the current spec — an early exploratory mark, then the
canonical K-in-bubble mark once the fuller `KK_ASSETS_CLAUDE.md` spec was found. The
final wired-in asset (`mobile/assets/icon.png`, commit `613fe30a`) was directly re-inspected
during this session and confirmed correct: an Ink Navy speech-bubble shape with a white "K"
knocked out and a Signal Yellow accent dot — no re-wiring needed. Typography (Archivo/Plus
Jakarta Sans) remains genuinely open, exactly as already documented above. The tagline itself
changed the same day (see "Official KlassKonnect brand" above) — "YOUR PERSONAL AI TUTOR"
replaced "LEARN YOUR WAY, IN YOUR CURRICULUM." everywhere, dropping the two-tone treatment
since the new text doesn't split into two clauses; `LoginScreen.js` is updated to match.

---

## Open items

- **Gamification is disconnected from real state in two places — one is a flawed signal, the
  other is model fabrication of specific claims to students.** (1) The backend `isCorrect`
  heuristic (`backend/routes/agents.js`) detects praise language in AI responses, not actual
  answer correctness — needs redesign to only fire from practice/assessment agents with an
  explicit correctness signal, not by scanning tutor replies for encouraging phrases.
  Relatedly, `checkBadgeQualifications`/`awardBadge`
  (`backend/services/gamificationService.js`) are never called from the live chat flow
  (`agents.js` only calls `updateGamificationStats`/`getLevelProgress`/
  `getStudentGamificationProfile`) — badges can currently never be earned through real usage.
  (2) **More severe**: the Phase 2/3 engagement prompt commits (`eca663b8`, `ef25e9dd`)
  instruct the tutor/practice/assessment agents to state specific numbers and events directly
  to students — streak counts ("You're on a 3-question streak!"), mastery percentages ("You've
  learned 60% of this topic"), point totals ("Total learning points: 342"), and badge-unlock
  announcements ("🎉 BADGE UNLOCKED: 'Curious Mind'!") — while zero real streak, mastery,
  point, or badge data is ever passed into these agents' prompt context (verified: `tutorAgent`
  etc. only receive `studentName`, `grade`, and topic content). The model has no grounding for
  any of these numbers and fabricates them on demand; some invented badge tiers (Bronze/Silver/
  Gold, Common→Rare→Epic→Legendary rarity) don't exist anywhere in the real `BADGES` config
  either. This is model fabrication of specific claims to a student, not just a flawed
  correctness signal — a more serious instance of the same "gamification state disconnected
  from reality" problem, and directly against this project's own anti-fabrication principle
  (see bug 5 above and the WAEC/UTME content cleanup). Fix all of this together: a real
  correctness signal, real badge-award wiring, and prompt instructions that only ever narrate
  gamification data actually passed into context — never invented numbers.
- **Residual subject-bias in the tutor/practice/assessment prompt templates (lower priority,
  not blocking).** These templates correctly use `${subject}`/`${studentName}` (no
  reintroduction of the hardcoded-"mathematics" bug 1), but nearly every illustrative example
  added across `07520cc3`/`ebeea438`/etc. is a math word problem (₦ prices, fractions,
  distances), and `ebeea438` left the literal phrase "that's mathematician thinking!" in the
  generic tutor template used for every subject. Not a functional bug, but a softer version of
  the same failure mode — worth a pass to genericize the examples across subjects.
- **Prompt bloat in tutor.js/practice.js/assessment.js (lower priority, not blocking).** Five
  stacked commits (`07520cc3`, `ebeea438`, `eca663b8`, `ef25e9dd`, `5ee3d316`) grew each
  agent's system prompt to 237-262 lines, sent in full on every chat message, with real overlap
  between phases (praise-language guidance independently restated in Phase 1, Phase 2's
  "surprise bonuses," and Phase 3's "badge announcements"). Ongoing latency/token-cost concern
  worth a consolidation pass, separate from the correctness issues above.
- **Primary 1-3 content is live but thin — learning outcomes only, no lesson content.**
  `import-primary-curriculum.js` only writes to the `content` table with
  `section_type = 'learning_outcome'` (verified directly against the live DB: every Primary
  1-3 topic has exactly the learning-outcome strings and nothing else). It never writes to
  `learning_activities` or `evaluation_guides`. Per the AI tutor content-grounding fix
  documented above (bug 2, commit `70c1e844`), the chat endpoint pulls real teaching content
  from `content`/`learning_activities`/`evaluation_guides` together — so the AI tutor is
  running on materially thinner grounding for these three grades (topic titles + learning
  outcomes only) than every other grade, which also has activities and evaluation guides.
  Needs either a richer re-import from fuller source material, or an explicit acceptance that
  Primary 1-3 tutoring will be shallower until that's done.
- **Arabic Language is unresolved across Primary 4, 5, and 6** — the sole gap against each
  grade's 16-subject target, and genuinely unresourceable right now, not just unsourced.
  Exhausted at every grade: SchemeofWork.com (Federal/Lagos/Osun — no Primary Arabic content
  exists on the site at all, only SS1/SS3), syllabus.ng (lists "Primary N Arabic Language" as
  a menu item with no working link), ecolebooks.com (Uganda-focused, no matching Nigerian
  content), and NERDC's own `nerdc.gov.ng/content_manager/pri4-6.html` (advertises a PDF but
  the download link is a non-functional `javascript:;` placeholder). One tangential UK KS2
  scheme was found but isn't NERDC/WAEC-aligned, so wasn't used. Don't re-attempt without a
  new source lead; re-check in a future session in case a source publishes it later.
- **WAEC's SS trade-subject reform: the new 6-subject list is now sourced; whether to touch
  the old 33-subject catalogue is still unsettled — do not act on that part yet.** The SS
  6-subject trade list (Solar PV Installation and Maintenance, Fashion Design and Garment
  Making, Livestock Farming, Beauty and Cosmetology, Computer Hardware and GSM Repairs,
  Horticulture and Crop Production) is confirmed straight from the primary source — the same
  official 3 Sept 2025 FME press release PDF used for Primary/JSS also has a page-4 "Senior
  Secondary School Subject List" table naming this exact six as the "One Core Trade Subject"
  option — not merely the Oct-Nov 2025 news reporting (WAEC Nigeria National Office Head Dr.
  Amos Josiah Dangut, disclosed after the 63rd Nigeria National Council meeting; corroborated
  by Guardian.ng and Vanguard) this was originally sourced from, which remains useful
  corroborating context but was superseded as the primary citation once the PDF itself was
  checked. As of 2026-09-05, the 4 of these 6 that were genuinely missing have been sourced
  and added at SS1/SS2/SS3 (see "Current state" above); the other 2 (Solar PV Installation
  and Maintenance, Livestock Farming) were confirmed already covered by existing subjects
  under close-enough names, so no gap remained there.

  **What's still genuinely open**: whether most of SS3's existing, separate 33-subject
  Vocational & Trade catalogue (Welding and Fabrication, Auto Body Repairs, Auto Electrical
  Work, Mining, etc.) should eventually be consolidated, renamed, or retired to match this
  6-subject list — this is a different question from "is the new list sourced," and remains
  unresolved. **Do not restructure or delete any existing SS3 (or SS1/SS2) vocational
  content based on this alone** — per the "extra/legacy subjects are fine" rule above, the
  old catalogue isn't a problem just for coexisting with the new one, and the reform's rollout
  itself is still contested and moving: the Nigerian Senate halted immediate implementation in
  December 2025 over concerns that 2025/2026 SS3 candidates would be forced into trade
  subjects they were never taught, with lawmakers pushing for the new rules to apply only from
  the 2027/2028 diet onward. Monitor as a live, unsettled situation rather than a target to
  reconcile the old catalogue against.
- **Business Studies (JSS1-3) isn't on the NESRI JSS target list at all** — live in all three
  grades, flagged as a legacy holdover, not removed. Its tag is inconsistent: `legacy` in JSS1
  and JSS2, but `nesri_2025` in JSS3 (commit `fa5673e7`), which is misleading since it isn't
  actually part of the NESRI 2025 target. Needs a decision: keep it (with JSS3's tag
  corrected) or retire it in favor of the target list.
- **Primary 4 and Primary 5 have a provenance gap** for some legacy-seeded subjects,
  orthogonal to the target-list gap above. Primary 4's 15 live subjects have 14 git-tracked
  files under `backend/scripts/curriculum-data/` — only Mathematics is untracked, seeded via
  the legacy `parsePdf.js`/`seedDb.js` path (though its content does have a traceable origin:
  git's very first commit, `ed9c11d6`, happens to capture that exact content). Primary 5's 15
  live subjects have only 5 git-tracked files (Mathematics, French, Hausa, Igbo, Islamic
  Studies) — the other 10 went through that same legacy seeding path with no recorded source
  at all. **Do not run `backend/scripts/seedDb.js`** on either grade — it's destructive and
  will overwrite live data with whatever `parsePdf.js` next contains, with no way to recover
  the untracked subjects if lost. Worth reconciling (backfill proper `curriculum-data/*.js`
  files from the live DB content, or formally accept the legacy seeding as the record) before
  treating those subjects as fully sourced.
- **JSS1 Fashion Design and Garment Making has a provenance gap of its own**: live in the DB
  from a prior session whose source file was never committed. A later session reconciled this
  by committing the file without re-importing — see `JSS1-Content-Completion-Status.md`.
- **Brand migration — colors, logo, and tagline are done; typography is not** — see "Brand
  migration status" under "Brand & design system" above before starting any further UI work.
  Remaining: load Archivo/Plus Jakarta Sans and apply them, and review `SignupScreen.js`'s
  "Join KlassKonnect today" branding copy against the current spec. Subject-identity colors
  are documented but deliberately unbuilt — no feature exists to attach them to. Also remaining:
  the "no emoji" rule (now documented under "Official KlassKonnect brand" above) was only ever
  applied to `LoginScreen.js` — `HomeScreen.js` and `GamificationDisplay.js` still have their
  original emoji, full inventory under "Brand migration status" — and whether the K-mark should
  ever appear in the JS-rendered UI (today it's native-chrome-only) is an open question, not a
  decision either way.
- **`mobile/assets/splash.png` (the source asset file, not the compiled native splash) still
  has the retired "LEARN YOUR WAY," / "IN YOUR CURRICULUM." tagline baked into it as pixels,
  alongside a full logo+wordmark composition.** This does not currently render live anywhere —
  verified via simulator screenshots that the actual compiled native splash screen only shows
  a small 100×100 logo mark (see `SplashScreenLogo.imageset`), not this full image — so it's a
  dormant, stale source file rather than a live user-facing bug. Still worth regenerating with
  the new tagline (or removing the baked-in text entirely) so the source asset doesn't silently
  contradict the live brand the next time someone opens it, but it's not blocking anything.
