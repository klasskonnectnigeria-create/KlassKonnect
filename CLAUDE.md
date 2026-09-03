## NERDC curriculum sourcing

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

## Subject categories are a doc convention, not a product concept

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

## Remaining sourcing gaps: Primary 6 is partially sourced; Primary 4/5 have a provenance gap

The SS1/SS2 vs SS3 sourcing backlog once documented here is closed: SS1 and SS2 each carry
61 live subjects against SS3's 62, and the sole difference is `Mining`, which genuinely is
SS3-only. Don't re-source SS1/SS2 wholesale on the assumption that they're thin — check the
live count for the specific subject first.

Two open items remain across the catalogue:

- **Primary 6 is in progress, not unsourced.** As of 2026-09-03 it has 12 live subjects
  in `themes` (Mathematics, English Studies, Basic Digital Literacy, Basic Science and
  Technology, Christian Religious Studies, Cultural and Creative Arts, French, Nigerian
  History, Physical and Health Education, Pre-vocational Studies, Social and Citizenship
  Studies, Yoruba) — see `Primary6-Content-Completion-Status.md` for full sourcing detail
  and citations. The full target subject list for this grade hasn't been enumerated against
  a canonical source yet, so the remaining gap size is unknown; check the live count for a
  specific subject before assuming it needs sourcing.
- **Primary 4 and Primary 5 have a known provenance gap.** Primary 4 shows 12 live subjects
  but only 11 have a git-tracked file under `backend/scripts/curriculum-data/`; Primary 5
  shows 11 live subjects but only 1 (`primary5-mathematics.js`) is git-tracked. The rest were
  seeded directly via `backend/routes/seed.js`, not through the `nerdc-curriculum-sourcer`
  pipeline, so their source provenance isn't recorded the way sourced subjects' is. This is
  worth reconciling (either backfilling the missing curriculumData files or accepting
  seed.js as their record) before treating Primary 4/5 as fully sourced.
