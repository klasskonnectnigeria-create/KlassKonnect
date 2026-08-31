# Primary 5 Content Completion Status

**Status: 11 subjects live**, DB-verified 2026-08-31 (grade-level aggregate: 11 subjects,
388 topics). This significantly corrects an earlier file-based estimate of just 1 subject —
the curriculum-data directory only contains a file for Mathematics, but 10 more subjects are
actually live in the database with no corresponding source file.

No SS3-style five-category structure applies to this grade — Primary 5 has no
vocational/trade tier, so subjects are tracked as a flat list.

## Subjects (11 live, all `legacy`)

| Subject | Topics | Git provenance |
|---|---|---|
| Basic Digital Literacy | 25 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Basic Science and Technology | 31 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Christian Religious Studies | 30 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Cultural and Creative Arts | 19 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| English Studies | 32 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| **Mathematics** | 33 | `primary5-mathematics.js` — commit `b53da412`, "First, Second & Third Term, legacy" |
| Nigerian History | 18 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Physical and Health Education | 35 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Pre-vocational Studies | 66 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Social and Citizenship Studies | 66 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |
| Yoruba | 33 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown** |

## Data-provenance gap: 10 of 11 subjects

Only Mathematics has a real, git-tracked source file and importer commit. The other 10
subjects went through the repo's original, pre-agent seeding path:
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

None beyond the provenance gap above — all 11 subjects have full topic sets live in the
database; term-level completeness (First/Second/Third) was not independently re-verified
this session for the 10 undocumented subjects, since there is no source file to check
against.
