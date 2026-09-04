# JSS1 Content Completion Status

**Status: 22 subjects live**, each with full three-term coverage, DB-verified 2026-09-04
(Hausa added earlier this session: 3 themes, 33 topics, `legacy`; Igbo added this session: 3
themes, 35 topics, `legacy`; Arabic Language added this session: 1 theme, 31 topics, `legacy`;
Fashion Design and Garment Making added this session: 1 theme, 26 topics, `legacy` — data was
already live in the DB from a prior session whose source file was never committed; this session
reconciled that provenance gap by committing the file, without re-importing; Beauty and
Cosmetology added this session: 1 theme, 24 topics, `legacy`, sourced from
`schemeofwork.com`'s "JSS1 Scheme of Work Unified" page; Livestock Farming added this session:
1 theme, 24 topics, `legacy`, sourced from the same `schemeofwork.com` "JSS1 Scheme of Work
Unified" page's dedicated Livestock Farming section; Solar Photovoltaic Installation and
Maintenance added this session: 1 theme, 22 topics, `legacy`, sourced from the same
`schemeofwork.com` "JSS1 Scheme of Work Unified" page's dedicated Solar Photovoltaic
Installation and Maintenance section; Computer Hardware and GSM Repairs added this session:
1 theme, 24 topics, `legacy`, sourced from the same `schemeofwork.com` "JSS1 Scheme of Work
Unified" page's dedicated Computer Hardware and GSM Repairs section; Horticulture and Crop
Production added this session: 1 theme, 24 topics, `legacy`, sourced from the same
`schemeofwork.com` "JSS1 Scheme of Work Unified" page's dedicated Horticulture and Crop
Production section)
— now **21 of the 21 subjects** in the reconciled NESRI 2025 target, a complete set (see
"Remaining gaps" below; one legacy holdover, Business Studies, present that isn't on the
target list).

No SS3-style category structure applies to this grade — JSS1 has no vocational/trade tier,
so subjects are tracked as a flat list rather than split into categories.

## Subjects (22 live)

Arabic Language, Beauty and Cosmetology, Business Studies, Christian Religious Studies,
Computer Hardware and GSM Repairs, Cultural and Creative Arts, Digital Technologies, English
Studies, Fashion Design and Garment Making, French, Hausa, Horticulture and Crop Production,
Igbo, Intermediate Science, Islamic Studies, Livestock Farming, Mathematics, Nigerian History,
Physical and Health Education, Social and Citizenship Studies, Solar Photovoltaic Installation
and Maintenance, Yoruba.

Each has an individual "Add JSS1 &lt;Subject&gt; curriculum (3 terms, ...)" commit. Most are
tagged `nesri_2025`; Yoruba, Business Studies, Hausa, Igbo, Arabic Language, Fashion Design and
Garment Making, Beauty and Cosmetology, Livestock Farming, Solar Photovoltaic Installation and
Maintenance, Computer Hardware and GSM Repairs, and Horticulture and Crop Production are tagged
`legacy`.

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

JSS1 reached **21 of 21** target subjects as of 2026-09-04 — the full NESRI 2025 target set is
now complete for this grade (Hausa and Igbo sourced earlier this
session from SchemeofWork.com's "Hausa/Igbo Language Scheme of Work for JSS1 Federal" pages —
each grade's L1/native-speaker track; the pages' parallel L2 tracks were not merged in; Arabic
Language sourced this session from SchemeofWork.com's "Arabic Language Scheme of Work for
Junior Secondary School Federal" page, which unlike the Primary 4-6 case did have real JSS1
content — that gap was specific to Primary, not JSS; Fashion Design and Garment Making — the
first of the 6 named trade options — resolved this session by reconciling an already-imported
but never-committed source file, `schemeofwork.com` "JSS1 Scheme of Work Unified", 26 topics
across 3 terms; Beauty and Cosmetology — the second of the 6 named trade options — sourced this
session from the same `schemeofwork.com` "JSS1 Scheme of Work Unified" page's dedicated Beauty
and Cosmetology section, 24 topics across 3 terms after excluding Midterm Examination/Break,
Revision, Revision Project, Examination/Closing, and the start-of-second/third-term "Review of
[prior] Term's Work" recap weeks; Livestock Farming — the third of the 6 named trade options —
also sourced this session from the same `schemeofwork.com` "JSS1 Scheme of Work Unified" page's
dedicated Livestock Farming section (First Term: poultry; Second Term: rabbit production; Third
Term: sheep and goat production), 24 topics across 3 terms after excluding Mid-Term
Examination/Break, Revision, Examination, and Closing/Vacation weeks — this one was checked
against the live DB first per a specific instruction, since the Fashion Design case showed git
history alone isn't a reliable signal of what's live, but no existing JSS1 Livestock Farming
theme was found so it went through the full sourcing pipeline; Solar Photovoltaic Installation
and Maintenance — the fourth of the 6 named trade options — sourced this session from the same
`schemeofwork.com` "JSS1 Scheme of Work Unified" page's dedicated Solar Photovoltaic
Installation and Maintenance section, 22 topics across 3 terms after excluding Mid-Term
Examination/Break, Revision, Examination, Closing/Vacation, and the start-of-second/third-term
"Review of [prior] Term's Work" recap weeks; verified present in the raw fetched HTML, not just
the summarized fetch, before writing the data file; Computer Hardware and GSM Repairs — the
fifth of the 6 named trade options — also sourced this session from the same
`schemeofwork.com` "JSS1 Scheme of Work Unified" page's dedicated Computer Hardware and GSM
Repairs section, 24 topics across 3 terms after excluding Midterm Test, Midterm Break,
Revision, Examination, and Closing weeks; verified present in the raw fetched HTML, including
its position in the page's table of contents immediately after Beauty and Cosmetology and
before Horticulture and Crop Production, before writing the data file; Horticulture and Crop
Production — the sixth and last of the 6 named trade options — also sourced this session from
the same `schemeofwork.com` "JSS1 Scheme of Work Unified" page's dedicated Horticulture and
Crop Production section, 24 topics across 3 terms after excluding Mid-Term Test, Mid-Term
Break, Revision, Examination, and Closing/Vacation weeks; raw HTML was fetched and cross-checked
against the WebFetch summary line-by-line before writing the data file, confirming the content
was genuinely present and not fabricated). JSS2 and JSS3 still carry the prior 13-subject
catalogue (this session covered JSS1 only), so this gap no longer applies uniformly across
JSS1-3 — **JSS1's target-list gap is now fully closed**, ahead of JSS2 and JSS3 by nine
subjects.

**Business Studies is a legacy holdover.** It's live in the DB (tagged `legacy`) but doesn't
appear anywhere in the NESRI JSS target column. Not removed — flagged here pending a decision
on whether it predates the 2025 reform and should stay, or should be retired in favor of the
target list.
