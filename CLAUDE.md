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

## SS1/SS2 having far fewer subjects than SS3 is a sourcing backlog, not a designed boundary

SS3 has 62 live subjects; SS1 and SS2 each have only 9 (Biology, Chemistry, Economics,
English Language, Geography, Government, Literature-in-English, Mathematics, Physics — one
broad seed per major track). This gap is **not** because vocational/trade, business/
commercial, or most humanities subjects are SS3-only under the real curriculum.

Under Nigeria's NERDC/WAEC senior-secondary structure, a student selects a subject
combination/track (Science, Arts, Commercial, or Technical/Vocational) at the start of SS1
and carries that same subject list through SS1 → SS2 → SS3 with increasing depth each year,
culminating in WASSCE at the end of SS3. Vocational/trade and business/commercial subjects
are three-year subjects like any other — they are not officially SS3-exclusive electives.
Scheme-of-work sources (schemeofwork.com and similar, the same sources
`nerdc-curriculum-sourcer` already uses) publish SS1, SS2, and SS3 versions of nearly every
subject, including the trade subjects.

So the disparity exists only because SS3 sourcing was carried to completion while SS1/SS2
sourcing stopped after the initial 9-subject seed. Treat SS1/SS2 as a real, fillable content
gap — not a structural limit — when deciding what to source next.
