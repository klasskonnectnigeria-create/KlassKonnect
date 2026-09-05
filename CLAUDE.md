# CLAUDE.md

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

## Current state (as of 2026-09-05)

### Curriculum content, by grade

| Grade tier | Live subjects | Target | Status |
|---|---|---|---|
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

---

## Open items

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
