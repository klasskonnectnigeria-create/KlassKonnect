# JSS3 Content Completion Status

**Status: 14 subjects live**, each with full three-term coverage, DB-verified 2026-09-04
(grade-level aggregate: 14 subjects, 305 topics — 277 from the 2026-08-31 baseline plus 28
from Hausa, sourced and DB-verified 2026-09-04) — but only **13 of the 21 subjects** in the
reconciled NESRI 2025 target (see "Remaining gaps" below; 8 subjects still missing, one
legacy holdover present that isn't on the target list).

No SS3-style category structure applies to this grade — JSS3 has no vocational/trade tier,
so subjects are tracked as a flat list rather than split into categories.

## Subjects (14 live)

Business Studies, Christian Religious Studies, Cultural and Creative Arts, Digital
Technologies, English Studies, French, Hausa, Intermediate Science, Islamic Studies,
Mathematics, Nigerian History, Physical and Health Education, Social and Citizenship
Studies, Yoruba.

Each has an individual "Add JSS3 &lt;Subject&gt; curriculum (3 terms, ...)" commit
confirming full three-term coverage. Hausa (source: SchemeofWork.com's L1/first-language
track, 28 topics across all three terms) was added 2026-09-04 via the
nerdc-curriculum-sourcer agent.

## Known gaps

None found in commit history or the live DB aggregate for the 13 subjects that are live — no
JSS3 subject among those 13 is flagged as partial or unresolved. But see "Remaining gaps
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

JSS3 is at **13 of 21** target subjects as of 2026-09-04, up from 12/21 — Hausa was sourced
this session from SchemeofWork.com's Federal "Hausa Language Scheme of Work for JSS 3" page
(L1/first-language track, 28 topics, `legacy` version; the page's parallel L2 track was not
merged in, matching the JSS1/JSS2 Hausa convention). JSS1 and JSS2 remain at the prior
13-subject catalogue (no Hausa yet at those grades) — this closes the gap for JSS3 only, it
does not carry over to JSS1/JSS2 automatically. **8 subjects are still missing** from JSS3:
Igbo, Arabic Language, and all 6 named trade options (Solar Photovoltaic Installation and
Maintenance, Fashion Design and Garment Making, Livestock Farming, Beauty and Cosmetology,
Computer Hardware and GSM Repairs, Horticulture and Crop Production). None of these 8 have
been sourced or attempted yet, and — unlike the Primary 4-6 Arabic Language gap — sourceability
hasn't been checked against SchemeofWork.com/syllabus.ng/ecolebooks.com for any of them. This
remains a substantially larger gap than any single Primary 4-6 grade (which topped out at 1
missing subject each) and has not yet been fully prioritized for sourcing.

**Business Studies is a legacy holdover — with an inconsistent tag.** It's live in the DB but
doesn't appear anywhere in the NESRI JSS target column; unlike JSS1 and JSS2 (where Business
Studies is tagged `legacy`), JSS3's copy is tagged `nesri_2025` (commit `fa5673e7`), which is
misleading given it isn't actually part of the NESRI 2025 target list. Not removed or
retagged — flagged here pending a decision on whether it predates the 2025 reform and should
stay (with its tag corrected), or should be retired in favor of the target list.
