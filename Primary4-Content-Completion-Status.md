# Primary 4 Content Completion Status

**Status: 15 subjects live**, grade-level aggregate 356 topics as of 2026-09-05 (see
Mathematics dedupe below; 363 as DB-verified 2026-09-03 before that fix), against the
reconciled 16-subject NESRI 2025 target (see root `CLAUDE.md` "Remaining sourcing gaps"
section). **Arabic Language is genuinely unresolved** (not just unsourced) — see "Remaining
gaps" below; it is now the sole gap.

**Theme structure fix (2026-09-05)**: a direct DB audit found Hausa, Igbo, Pre-vocational
Studies, Social and Citizenship Studies, and Yoruba each split into 3 per-term theme rows
instead of 1 bundled theme — the same bug already fixed for JSS1-3 Hausa/Igbo (commit
`08c947b7`). Merged all 5 live in the DB: lowest theme ID kept and renamed to the standard
`"Primary 4 <Subject>"` format, topics reassigned via `UPDATE topics SET theme_id`, empty
theme rows deleted. Per-merge topic-count match verified before/after (32/36/29/28/33 topics
respectively, unchanged), plus a final audit confirming every Primary 4 subject except
Mathematics (see below) now has exactly 1 theme row. This also resolves the "Known gaps"
uncertainty below: Social and Citizenship Studies and Pre-vocational Studies were split into
3 per-term rows *because* they already had full 3-term content, not because Second/Third Term
was missing — so both are confirmed full 3-term coverage, not First-Term-only.

**Mathematics duplicate content — resolved (2026-09-05)**: following up on the 2026-09-05 DB
audit that found Mathematics had 10 theme rows (5 subject areas each duplicated as 2 theme
rows, ids 6-10 created 2026-08-19 and ids 11-15 created 2026-08-20, byte-identical content),
the 2026-08-19 copy was kept as canonical — it's the one carrying the 29 real
`conversation_logs` rows (genuine AI-tutor chat exchanges, 2026-08-20 to 2026-08-25). Before
deleting the 2026-08-20 copy: its 21 `student_progress` rows (all `not_started`/0 attempts,
a seeding artifact — every row shared the exact timestamp of that import) were reassigned via
`UPDATE student_progress SET topic_id = <old>` to the corresponding topic on the surviving
copy, mapped by matching theme name + topic name + sequence_order (a clean 1:1 correspondence
across all 7 topics, verified programmatically, with no `(student_id, topic_id)` unique-
constraint conflicts since the surviving copy had zero prior `student_progress` rows). Its
duplicate topic-metadata rows (28 `content`, 26 `learning_activities`, 7
`evaluation_guides` — byte-identical to what the surviving copy already holds, so nothing
lost) were then deleted, followed by its now-childless topics and theme rows. Verified
before/after: 5 theme rows / 7 topics survive (was 10/14), `content`=28, `learning_activities`
=26, `evaluation_guides`=7, `student_progress`=21 (all reassigned, no duplicates), and
`conversation_logs`=29 unchanged — plus a grade-wide audit confirming every other Primary 4
subject still has exactly 1 theme row. Mathematics' 5-theme structure (one row per topic
category: NUMBER NUMERATION, BASIC OPERATIONS, MENSURATION, GEOMETRY, EVERYDAY STATISTICS) is
its own long-standing pattern, unrelated to the per-term-split bug above, and is unchanged by
this fix.

No SS3-style five-category structure applies to this grade — Primary 4 has no
vocational/trade tier, so subjects are tracked as a flat list.

## Subjects (15 live, all `legacy`)

| Subject | Topics | Git provenance |
|---|---|---|
| Basic Digital Literacy | 10 | `primary4-basic-digital-literacy.js` |
| Basic Science and Technology | 24 | `primary4-basic-science-and-technology.js` |
| Christian Religious Studies | 21 | `primary4-christian-religious-studies.js` |
| Cultural and Creative Arts | 32 | `primary4-cultural-and-creative-arts.js` |
| English Studies | 24 | `primary4-english-studies.js` |
| French | 10 | `primary4-french.js` |
| Hausa | 32 | `primary4-hausa.js` |
| Igbo | 36 | `primary4-igbo.js` |
| Islamic Studies | 21 | `primary4-islamic-studies.js` |
| **Mathematics** | 7 | **live in database, no git-tracked curriculum-data file — seeded via legacy parsePdf.js/seedDb.js workflow, source unknown; was 14 topics (5 subject areas duplicated) until the 2026-09-05 dedupe fix** |
| Nigerian History | 24 | `primary4-nigerian-history.js` |
| Physical and Health Education | 25 | `primary4-physical-and-health-education.js` |
| Pre-vocational Studies | 29 | `primary4-pre-vocational-studies.js` |
| Social and Citizenship Studies | 28 | `primary4-social-and-citizenship-studies.js` |
| Yoruba | 33 | `primary4-yoruba.js` |

## Remaining gaps against the 16-subject NESRI 2025 target

**Arabic Language** is still missing and is now genuinely unresolved (2026-09-03), not just
unsourced — it is the sole remaining gap against the 16-subject target. Hausa (2026-09-03),
Igbo (2026-09-03), and Yoruba (2026-09-03) were all sourced and imported from
SchemeofWork.com's federal Primary 4 pages, closing those gaps. Arabic Language was checked
against SchemeofWork.com (Federal, Lagos, Osun variants — no Primary Arabic content exists on
the site at all, only SS1/SS3), syllabus.ng (lists "Primary 4 Arabic Language" as a subject
name in its all-subjects index but with no working link — the page doesn't exist), ecolebooks.com
(Uganda-focused, no Nigerian Arabic Primary content), edudelighttutors.com (no Arabic Language
in its Basic 4 subject list at all), classbasic.com's "Lagos State Unified Scheme of Work for
Primary 4-6 (Middle Basic)" (its table of contents lists an "Arabic Language" section at pages
441–441 — suspiciously just a single page versus 20-40+ pages for every other subject — but the
actual downloaded 391-page PDF document skips directly from the end of the Agriculture section
to "HOME ECONOMICS (PRIMARY FOUR)" with no Arabic Language content present anywhere in the
document; the ToC entry is a stub that was never filled in), and NERDC's own official site
(nerdc.gov.ng/content_manager/pri4-6.html advertises a "Primary 4-6 Arabic Curriculum" PDF but
the download link is a non-functional `javascript:;` placeholder, not an accessible file). One
real Arabic scheme of work was found (The Olive Tree Primary School, UK) but it's a UK KS2
generic scheme with no NERDC/WAEC connection, so it was not used. This mirrors the identical
finding already documented for Primary 6 Arabic Language — don't re-attempt without a new
source lead.

## Data-provenance gap: Mathematics

`backend/scripts/parsePdf.js` currently holds a "Primary 4 Mathematics" curriculum
structure and is only ever referenced by `backend/scripts/seedDb.js`, which reads whatever
content is currently sitting in `parsePdf.js` and inserts it — an old one-subject-at-a-time
seeding workflow that predates the per-subject `curriculum-data/*.js` + `importCurriculum.js`
convention every other subject in this repo now uses. Git only ever captured
`parsePdf.js`'s very first state (the initial commit, `ed9c11d6`), which happens to be this
Primary 4 Mathematics content — so it does have a traceable origin, unlike the Primary 5
subjects seeded the same way (see `Primary5-Content-Completion-Status.md`). Because
`parsePdf.js` is a mutable scratch file rather than a per-subject archive, this content
cannot be re-imported from a dedicated source file the way every other Primary 4 subject
can; **do not run `backend/scripts/seedDb.js`** — it is destructive and will overwrite this
data with whatever `parsePdf.js` next contains.

## Known gaps

Per commit `9b8076e9` ("Complete Primary 4 curriculum: add 11 subjects (179 topics,
legacy). 5 subjects (SCS, CCA, Basic Digital Literacy, PVS, French) are First Term only —
Second/Third Term not yet sourced"), 5 subjects were First-Term-only at that point. Commit
`f10ee23a` subsequently upgraded **Cultural and Creative Arts** to full 3-term (32-topic)
coverage. The 2026-09-05 theme-merge DB audit (see above) resolved this for two more:
**Social and Citizenship Studies** and **Pre-vocational Studies** were found split into 3
per-term theme rows, confirming they already had full 3-term coverage all along (now merged
into 1 theme row each). Only **Basic Digital Literacy** and **French** remain confirmed
First-Term-only — each has exactly 1 live theme row named "(First Term)" with no Second/Third
Term rows anywhere in the DB.
