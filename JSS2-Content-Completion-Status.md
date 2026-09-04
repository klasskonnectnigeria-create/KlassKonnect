# JSS2 Content Completion Status

**Status: 14 subjects live**, each with full three-term coverage (Hausa added 2026-09-04,
DB-verified: 33 topics) — now **13 of the 21 subjects** in the reconciled NESRI 2025 target (see
"Remaining gaps" below; 8 subjects still missing, one legacy holdover present that isn't on the
target list).

No SS3-style category structure applies to this grade — JSS2 has no vocational/trade tier,
so subjects are tracked as a flat list rather than split into categories.

## Subjects (14 live)

Business Studies, Christian Religious Studies, Cultural and Creative Arts, Digital
Technologies, English Studies, French, Hausa, Intermediate Science, Islamic Studies,
Mathematics, Nigerian History, Physical and Health Education, Social and Citizenship Studies,
Yoruba.

Commit `90a4943e` added 9 subjects (179 topics); commit `0f7e7602` completed the remaining 4
(Business Studies, Cultural and Creative Arts, English Studies, Mathematics — 131 topics).
Hausa was added 2026-09-04 via the nerdc-curriculum-sourcer agent (SchemeofWork.com, L1 track,
legacy curriculum_version, 33 topics across three terms).

## Known gaps

None found in commit history or the live DB aggregate for the 14 subjects that are live — no
JSS2 subject among those 14 is flagged as partial or unresolved. But see "Remaining gaps
against the 21-subject NESRI 2025 target" below: the subject catalogue was never checked
against an authoritative target list until the 2026-09-04 audit found one.

## Remaining gaps against the 21-subject NESRI 2025 target

A 2026-09-04 audit (mirroring the Primary 4-6 reconciliation documented in root `CLAUDE.md`)
found that the Federal Ministry of Education's NESRI 2025 press release
(`education.gov.ng/wp-content/uploads/2025/09/FG-OVERHAULS-CURRICULUM.pdf` — the same document
already used to reconcile Primary 4-6) carries a **Junior Secondary School** column in its
Basic Education Subject List table, alongside the Primary 4-6 column. Expanding that column's
pick-one groups into individual subjects — matching this platform's established convention
(Nigerian Languages → Hausa/Igbo/Yoruba; CRS/IS → Christian Religious Studies/Islamic Studies;
the named Trade Subjects list → six separate subjects) — gives a 21-subject target: English
Studies, Mathematics, Hausa, Igbo, Yoruba, Intermediate Science, Physical and Health Education,
Digital Technologies, Christian Religious Studies, Islamic Studies, Nigerian History, Social
and Citizenship Studies, Cultural and Creative Arts, French, Arabic Language, Solar
Photovoltaic Installation and Maintenance, Fashion Design and Garment Making, Livestock
Farming, Beauty and Cosmetology, Computer Hardware and GSM Repairs, Horticulture and Crop
Production.

JSS2 is at **13 of 21** target subjects as of 2026-09-04 (Hausa sourced this session from
SchemeofWork.com's Federal JSS2 L1 track — see Subjects above). JSS1 and JSS3 were previously
identical to JSS2's prior 13-subject catalogue; this Hausa addition has not yet been mirrored
at JSS1/JSS3, so check the live count for JSS1/JSS3 Hausa before assuming it's also sourced
there. **8 subjects remain missing**: Igbo, Arabic Language, and all 6 named trade options
(Solar Photovoltaic Installation and Maintenance, Fashion Design and Garment Making, Livestock
Farming, Beauty and Cosmetology, Computer Hardware and GSM Repairs, Horticulture and Crop
Production). None of these 8 have been sourced or attempted yet, and — unlike the Primary 4-6
Arabic Language gap — sourceability hasn't been checked against
SchemeofWork.com/syllabus.ng/ecolebooks.com for any of them. This is a substantially larger gap
than any single Primary 4-6 grade (which topped out at 1 missing subject each) and has not yet
been prioritized for sourcing.

**Business Studies is a legacy holdover.** It's live in the DB (tagged `legacy` per commit
`0f7e7602`) but doesn't appear anywhere in the NESRI JSS target column. Not removed — flagged
here pending a decision on whether it predates the 2025 reform and should stay, or should be
retired in favor of the target list.
