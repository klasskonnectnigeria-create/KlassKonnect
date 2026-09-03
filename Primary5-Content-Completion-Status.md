# Primary 5 Content Completion Status

**Status: IN PROGRESS** — 14 of a 16-subject reconciled target live in the database,
DB-verified 2026-09-03 (grade-level aggregate: 14 subjects, 481 topics). Hausa, Igbo, and
Islamic Studies were added this session via the nerdc-curriculum-sourcer pipeline — Hausa
sourced from SchemeofWork.com, Igbo from SyllabusNG (Lagos State Unified Scheme of Work;
SchemeofWork.com's Federal Primary 5 Igbo page only had First Term, so SyllabusNG was used
for complete Second/Third Term coverage), Islamic Studies sourced from SchemeofWork.com's
Federal Primary 5 page (same source pattern used successfully for Primary 6 Islamic
Studies). The sole remaining gap, Arabic Language, is genuinely unresolved (not merely
unsourced) after a confirmation pass this session — see "Known gaps" below. This mirrors
Primary 6's outcome exactly (15 of 16, same sole gap).

No SS3-style five-category structure applies to this grade — Primary 5 has no
vocational/trade tier, so subjects are tracked as a flat list.

## Subjects (14 live, all `legacy`)

| Subject | Topics | Git provenance |
|---|---|---|
| Basic Digital Literacy | 25 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Basic Science and Technology | 31 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Christian Religious Studies | 30 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Cultural and Creative Arts | 19 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| English Studies | 32 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| **Hausa** | 33 | `primary5-hausa.js` — "Hausa Language Scheme of Work Primary 5 Federal" (SchemeofWork.com), First/Second/Third Term, legacy |
| **Igbo** | 27 | `primary5-igbo.js` — "Primary 5 Igbo Language Scheme of Work" (SyllabusNG, Lagos State Unified Scheme of Work), First/Second/Third Term, legacy |
| **Islamic Studies** | 33 | `primary5-islamic-studies.js` — "Islamic Religious Studies Scheme of Work Primary 5 Federal" (SchemeofWork.com), First/Second/Third Term, legacy |
| **Mathematics** | 33 | `primary5-mathematics.js` — commit `b53da412`, "First, Second & Third Term, legacy" |
| Nigerian History | 18 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Physical and Health Education | 35 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Pre-vocational Studies | 66 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Social and Citizenship Studies | 66 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Yoruba | 33 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |

## Data-provenance gap: 10 of 14 subjects

Only Mathematics, Hausa, Igbo, and Islamic Studies have a real, git-tracked source file and
importer commit.
The other 10 subjects went through the repo's original, pre-agent seeding path:
`backend/scripts/seedDb.js` reads whatever curriculum structure is currently sitting in
`backend/scripts/parsePdf.js` and inserts it — a scratch file meant to be hand-edited and
re-run per subject, not archived per subject. Because it gets overwritten on every use, git
never captured any of these 10 subjects' content; `parsePdf.js`'s only committed state
(`ed9c11d6`, the initial commit) reflects Primary 4 Mathematics, not any Primary 5 subject.

Practical consequences:
- This content **cannot be verified as real-vs-fabricated** the way every SS3/JSS/SS1/SS2
  subject and Primary 4's 11 file-backed subjects can — there is no source document, URL,
  or scheme-of-work reference tied to any of these 10 subjects.
- It **cannot be re-imported if lost** — there is no `curriculum-data/*.js` file to re-run
  through `importCurriculum.js`.
- **Do not run `backend/scripts/seedDb.js`** — it is destructive and will overwrite live
  data with whatever `parsePdf.js` next contains, and would not recover any of these 10
  subjects if they were ever lost.

Reconstructing proper `curriculum-data/*.js` files for these 10 subjects — dumping their
live DB content into the standard format so they have real git provenance going forward —
was offered as follow-up work and has not yet been done.

## Known gaps

- **Arabic Language** — checked 2026-09-03 (confirmation pass; same subject already came back
  unresolved at Primary 4 and Primary 6). NERDC's own `content_manager/pri4-6.html` page still
  advertises a "Primary 4-6 Arabic Curriculum" PDF link, but it remains a non-functional
  `javascript:;` placeholder (unchanged from the Primary 6 check). SchemeofWork.com's dedicated
  Arabic Scheme of Work category page carries only SS1 Federal and SS3 Federal entries, no
  Primary content. syllabus.ng's Primary 5 scheme-of-work page lists "Primary 5 Arabic Language"
  as a menu item but with no functional href, matching the pattern already found at Primary 4/6.
  ecolebooks.com has no Nigerian NERDC-aligned Arabic Primary content. One tangential lead (a
  standalone PDF from a UK-based "Olive Tree Primary School") was found but is not verifiable as
  Nigerian/NERDC-aligned and isn't a recognized aggregator, so it does not meet this project's
  sourcing bar. Unresolved — this closes out the last open item of the reconciled 16-subject
  NESRI 2025 target for Primary 5 (15 of 16 sourced/live, same gap as Primary 6); should be
  re-checked in a future session in case a source publishes it later.

Beyond that, and the provenance gap above — all 14 subjects have full topic sets live in
the database; term-level completeness (First/Second/Third) was not independently
re-verified this session for the 10 undocumented subjects, since there is no source file
to check against.
