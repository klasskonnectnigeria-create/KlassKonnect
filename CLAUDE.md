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

## Remaining sourcing gaps: Primary 4/5/6 are all reconciled against the 16-subject target (Primary 4/5 still have a provenance gap); JSS1-3 are newly reconciled against a 21-subject target with a substantial 9-subject gap

The SS1/SS2 vs SS3 sourcing backlog once documented here is closed: SS1 and SS2 each carry
61 live subjects against SS3's 62, and the sole difference is `Mining`, which genuinely is
SS3-only. Don't re-source SS1/SS2 wholesale on the assumption that they're thin — check the
live count for the specific subject first.

**Open question, unresolved and actively evolving: WAEC's own SS trade-subject list may make
SS3's 33-subject Vocational & Trade catalogue obsolete — don't act on this yet.** Per Oct-Nov
2025 news reporting (WAEC Nigeria National Office Head Dr. Amos Josiah Dangut, disclosed after
the 63rd Nigeria National Council meeting in Umuahia, Abia State; corroborated by multiple
outlets including Guardian.ng's "Senate halts WAEC curriculum change over concerns for 2026
candidates" and Vanguard's "WAEC's new subjects combination is confusion masquerading as
reform"), WAEC has officially streamlined SS-level trade subjects from roughly 26-35 down to
**six** for the 2026 WASSCE: Solar PV Installation and Maintenance, Fashion Design and Garment
Making, Livestock Farming, Beauty and Cosmetology, Computer Hardware and GSM Repairs, and
Horticulture and Crop Production — the same six named in the NESRI 2025 JSS reform table (see
JSS section below). This is independent confirmation that **Mining is not part of the new
WAEC list**, consistent with it being SS3-only relative to SS1/SS2 above. It also raises a real
open question: should most of SS3's existing 33-subject Vocational & Trade catalogue (Welding
and Fabrication, Auto Body Repairs, Auto Electrical Work, Mining, etc. — see
`SS3-Content-Completion-Status.md`) eventually be consolidated or renamed to match this
6-subject WAEC list? **Do not restructure or delete any existing SS3 vocational content based
on this alone.** The reform itself is contested and still moving: multiple sources report the
Nigerian Senate halted immediate implementation of the new WAEC guidelines in December 2025
over concerns that 2025/2026 SS3 candidates would be forced into trade subjects they were never
taught, with lawmakers pushing for the new rules to apply only from the 2027/2028 diet onward.
Treat this as a live, unsettled situation to monitor rather than a target to reconcile against.

**The upper-primary (Primary 4-6) target subject list is no longer open-ended.** It's been
reconciled against an authoritative source: the Federal Ministry of Education's official press
release, 3 September 2025, "Lighter Load, Stronger Minds: FG Overhauls Curriculum for a
Smarter Generation" (`education.gov.ng/wp-content/uploads/2025/09/FG-OVERHAULS-CURRICULUM.pdf`
— the NESRI 2025 reform document itself, citing NERDC/WAEC/NECO/NBTE/NABTEB consultation, with
an official Basic Education Subject List table for Primary 4-6). Expanding that table's
"Nigerian Languages" (Hausa/Igbo/Yoruba, pick one) and "CRS/IS" (pick one by faith) rows into
every individual option — matching this platform's convention already established at SS1-3,
where all of Hausa/Igbo/Yoruba/Arabic/CRS/IS are separate live subjects rather than one pick —
gives a 16-subject target: English Studies, Mathematics, Basic Science and Technology,
Physical and Health Education, Basic Digital Literacy, Nigerian History, Social and
Citizenship Studies, Cultural and Creative Arts, Pre-vocational Studies, Christian Religious
Studies, Islamic Studies, Yoruba, Hausa, Igbo, French, Arabic Language. (Note: the live
`nerdc.gov.ng` content-manager pages for Primary 4-6 host an older, pre-reform curriculum and
should not be used as the target list — they bundle a "National Values" subject instead of
separate Nigerian History/Basic Digital Literacy/Physical & Health Education entries.)

Open items across the catalogue:

- **Primary 6 is at 15 of the 16-subject target** as of 2026-09-03 — see
  `Primary6-Content-Completion-Status.md` for full sourcing detail, citations, and the target
  table. The sole gap is **Arabic Language**, which is genuinely unresolved (not just
  unsourced) after exhausting SchemeofWork.com, syllabus.ng, and ecolebooks.com — don't
  re-attempt it without a new source lead.
- **Primary 4 is at 15 of the 16-subject target** as of 2026-09-03 — Hausa, Igbo, and Yoruba
  were all sourced from SchemeofWork.com this session (see
  `Primary4-Content-Completion-Status.md`). Yoruba was a target-list gap not caught by the
  original Hausa/Igbo/Arabic Language sourcing pass — cross-check a grade's full live subject
  list against the 16-subject target (not just the subjects explicitly requested) before
  declaring a grade's gaps closed. The sole remaining gap is **Arabic Language**, checked and
  genuinely unresolved (same dead ends as Primary 5/6: no Primary-level Arabic content on
  SchemeofWork.com/syllabus.ng/ecolebooks.com, and NERDC's own site links a non-functional
  placeholder) — don't re-attempt without a new source lead. This now matches Primary 5/6's
  outcome exactly.
- **Primary 5 is at 15 of the 16-subject target** as of 2026-09-03 — Hausa, Igbo, Islamic
  Studies, and French were all sourced this session (see
  `Primary5-Content-Completion-Status.md`). French is First-Term-only (10 topics), matching
  the same partial-term precedent already documented for Primary 4 and Primary 6 French. The
  sole remaining gap is **Arabic Language**, checked and genuinely unresolved (same dead ends
  as Primary 4/6) — don't re-attempt without a new source lead. This now matches Primary 6's
  outcome exactly.
- **All three of Primary 4/5/6 now converge on the same outcome: 15 of 16, with Arabic
  Language as the sole gap**, genuinely unresolved at every grade after exhausting the same
  handful of sources (SchemeofWork.com, syllabus.ng, ecolebooks.com, NERDC's own site). Don't
  re-attempt any of the three without a new source lead.
- **Primary 4 and Primary 5 also have a known provenance gap**, orthogonal to the target-list
  gaps above. Primary 4's 15 live subjects have 14 git-tracked files under
  `backend/scripts/curriculum-data/` — only Mathematics is untracked, seeded via the legacy
  `parsePdf.js`/`seedDb.js` path. Primary 5's 15 live subjects have only 5 git-tracked files
  (Mathematics, French, Hausa, Igbo, Islamic Studies) — the other 10 went through that same
  legacy seeding path and have no recorded source. This is worth reconciling (either
  backfilling the missing curriculumData files or accepting the legacy seeding as their
  record) before treating those subjects as fully sourced.

**JSS1-3 have been reconciled against an authoritative target too, found during a 2026-09-04
audit** — the same NESRI 2025 press release PDF used for Primary 4-6 also carries a Junior
Secondary School column in its Basic Education Subject List table, sitting right next to the
Primary 4-6 column. Expanding that column's pick-one groups the same way as Primary 4-6
(Nigerian Languages → Hausa/Igbo/Yoruba; CRS/IS → Christian Religious Studies/Islamic Studies)
plus its named "Trade Subjects (Students to choose 1 subject)" list → six separate subjects,
gives a 21-subject target: English Studies, Mathematics, Hausa, Igbo, Yoruba, Intermediate
Science, Physical and Health Education, Digital Technologies, Christian Religious Studies,
Islamic Studies, Nigerian History, Social and Citizenship Studies, Cultural and Creative Arts,
French, Arabic Language, Solar Photovoltaic Installation and Maintenance, Fashion Design and
Garment Making, Livestock Farming, Beauty and Cosmetology, Computer Hardware and GSM Repairs,
Horticulture and Crop Production.

- **JSS1, JSS2, and JSS3 are each at 12 of the 21-subject target** as of 2026-09-04 — all three
  grades carry the exact identical 13-subject catalogue (confirmed via a JSS1-vs-JSS2-vs-JSS3
  cross-check, which alone would have missed this gap since the three grades agree with each
  other). See `JSS1-Content-Completion-Status.md`, `JSS2-Content-Completion-Status.md`, and
  `JSS3-Content-Completion-Status.md` for full detail. **9 subjects are missing from all three
  grades**: Hausa, Igbo, Arabic Language, and all 6 named trade options (Solar Photovoltaic
  Installation and Maintenance, Fashion Design and Garment Making, Livestock Farming, Beauty
  and Cosmetology, Computer Hardware and GSM Repairs, Horticulture and Crop Production). None
  of the 9 have been sourced or checked for sourceability yet — this is a substantially bigger
  gap than any single Primary 4-6 grade (1 missing subject each) and hasn't been prioritized.
- **Business Studies is live in all three JSS grades but isn't on the NESRI JSS target list at
  all** — flagged as a legacy holdover, not removed. Its tag is inconsistent across grades:
  `legacy` in JSS1 and JSS2, but `nesri_2025` in JSS3 (commit `fa5673e7`), which is misleading
  since it isn't actually part of the NESRI 2025 target. Needs a decision on whether to keep it
  (with JSS3's tag corrected) or retire it in favor of the target list.
