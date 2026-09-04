# JSS1 Content Completion Status

**Status: 15 subjects live**, each with full three-term coverage, DB-verified 2026-09-04
(Hausa added earlier this session: 3 themes, 33 topics, `legacy`; Igbo added this session: 3
themes, 35 topics, `legacy`) — now **14 of the 21 subjects** in the reconciled NESRI 2025
target (see "Remaining gaps" below; 7 subjects still missing, one legacy holdover present that
isn't on the target list).

No SS3-style category structure applies to this grade — JSS1 has no vocational/trade tier,
so subjects are tracked as a flat list rather than split into categories.

## Subjects (15 live)

Business Studies, Christian Religious Studies, Cultural and Creative Arts, Digital
Technologies, English Studies, French, Hausa, Igbo, Intermediate Science, Islamic Studies,
Mathematics, Nigerian History, Physical and Health Education, Social and Citizenship
Studies, Yoruba.

Each has an individual "Add JSS1 &lt;Subject&gt; curriculum (3 terms, ...)" commit. Most are
tagged `nesri_2025`; Yoruba, Business Studies, Hausa, and Igbo are tagged `legacy`.

## Known gaps

None found in commit history or the live DB aggregate for the 14 subjects that are live — no
JSS1 subject among those 14 is flagged as partial or unresolved. But see "Remaining gaps
against the 21-subject NESRI 2025 target" below: the 13-subject catalogue itself was never
checked against an authoritative target list until the 2026-09-04 audit found one.

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

JSS1 is at **14 of 21** target subjects as of 2026-09-04 (Hausa and Igbo both sourced this
session from SchemeofWork.com's "Hausa/Igbo Language Scheme of Work for JSS1 Federal" pages —
each grade's L1/native-speaker track; the pages' parallel L2 tracks were not merged in). JSS2
and JSS3 still carry the prior 13-subject catalogue (this session covered JSS1 only), so this
gap no longer applies uniformly across JSS1-3 — JSS1 is now ahead by two subjects. **7 subjects
remain missing**: Arabic Language and all 6 named trade options (Solar Photovoltaic
Installation and Maintenance, Fashion Design and Garment Making, Livestock Farming, Beauty and
Cosmetology, Computer Hardware and GSM Repairs, Horticulture and Crop Production). None of
these 7 have been sourced or attempted yet, and — unlike the Primary 4-6 Arabic Language gap —
sourceability hasn't been checked against SchemeofWork.com/syllabus.ng/ecolebooks.com for any
of them. This is still a substantially larger gap than any single Primary 4-6 grade (which
topped out at 1 missing subject each) and has not yet been fully prioritized for sourcing.

**Business Studies is a legacy holdover.** It's live in the DB (tagged `legacy`) but doesn't
appear anywhere in the NESRI JSS target column. Not removed — flagged here pending a decision
on whether it predates the 2025 reform and should stay, or should be retired in favor of the
target list.
