# JSS2 Content Completion Status

**Status: 22 subjects live**, each with full three-term coverage (Hausa and Igbo added
2026-09-04, DB-verified: 33 and 30 topics respectively; Arabic Language added later the same
day, DB-verified: 33 topics; Fashion Design and Garment Making added later the same day,
DB-verified: 26 topics; Beauty and Cosmetology added later the same day, DB-verified: 27
topics; Livestock Farming added later the same day, DB-verified: 24 topics; Solar
Photovoltaic Installation and Maintenance added later the same day, DB-verified: 21 topics;
Computer Hardware and GSM Repairs added later the same day, DB-verified: 23 topics;
Horticulture and Crop Production added later the same day, DB-verified: 24 topics)
— now **21 of the 21 subjects** in the reconciled NESRI 2025 target, closing the target-list
gap entirely (one legacy holdover, Business Studies, present that isn't on the target list —
see "Remaining gaps" below).

No SS3-style category structure applies to this grade — JSS2 has no vocational/trade tier,
so subjects are tracked as a flat list rather than split into categories.

## Subjects (22 live)

Arabic Language, Beauty and Cosmetology, Business Studies, Christian Religious Studies,
Computer Hardware and GSM Repairs, Cultural and Creative Arts, Digital Technologies, English
Studies, Fashion Design and Garment Making, French, Hausa, Horticulture and Crop Production,
Igbo, Intermediate Science, Islamic Studies, Livestock Farming, Mathematics, Nigerian History,
Physical and Health Education, Social and Citizenship Studies, Solar Photovoltaic Installation
and Maintenance, Yoruba.

Commit `90a4943e` added 9 subjects (179 topics); commit `0f7e7602` completed the remaining 4
(Business Studies, Cultural and Creative Arts, English Studies, Mathematics — 131 topics).
Hausa and Igbo were both added 2026-09-04 via the nerdc-curriculum-sourcer agent
(SchemeofWork.com, L1 track, legacy curriculum_version — Hausa: 33 topics, Igbo: 30 topics,
each across three terms). Arabic Language was added the same day via the same agent
(SchemeofWork.com's single Federal JSS1/JSS2/JSS3 Arabic page, JSS2 section only, legacy
curriculum_version — 33 topics across three terms). Fashion Design and Garment Making was
added later the same day via the same agent (SchemeofWork.com's "JSS2 Scheme of Work Unified"
page, legacy curriculum_version — 26 topics across three terms, after excluding administrative
weeks). Beauty and Cosmetology was added later the same day via the same agent, also sourced
directly from the "JSS2 Scheme of Work Unified" page (its embedded Beauty and Cosmetology
section, not the separate SS1-3-only Cosmetology page also hosted on schemeofwork.com), legacy
curriculum_version — 27 topics across three terms, after excluding administrative weeks
(Midterm Examination, Midterm Break, Revision, Examination/Closing). Livestock Farming was
added later the same day via the same agent, also sourced directly from the "JSS2 Scheme of
Work Unified" page (its embedded Livestock Farming section), legacy curriculum_version — 24
topics across three terms, after excluding the same administrative weeks. Solar Photovoltaic
Installation and Maintenance was added later the same day via the same agent, also sourced
directly from the "JSS2 Scheme of Work Unified" page (its embedded Solar Photovoltaic
Installation and Maintenance section), legacy curriculum_version — 21 topics across three
terms, after excluding the same administrative weeks plus the start-of-term "Review of [prior]
Term's Work" recap weeks (matching the exclusion convention already used for JSS1 Solar
Photovoltaic Installation and Maintenance). Computer Hardware and GSM Repairs was added later
the same day via the same agent, also sourced directly from the "JSS2 Scheme of Work Unified"
page (its embedded Computer Hardware and GSM Repairs section) — 23 topics across three terms,
after excluding the same administrative weeks. Horticulture and Crop Production was added
later the same day via the same agent, also sourced directly from the "JSS2 Scheme of Work
Unified" page (its embedded Horticulture and Crop Production section) — 24 topics across
three terms, after excluding the same administrative weeks. This was the sixth and final named
trade option, closing the target-list gap for JSS2 entirely.

## Known gaps

None found in commit history or the live DB aggregate for the 18 subjects that are live — no
JSS2 subject among those 18 is flagged as partial or unresolved. But see "Remaining gaps
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

JSS2 is at **21 of 21** target subjects as of 2026-09-04 (Hausa and Igbo sourced earlier the
same session, Arabic Language sourced later the same day, Fashion Design and Garment Making,
Beauty and Cosmetology, Livestock Farming, Solar Photovoltaic Installation and Maintenance,
Computer Hardware and GSM Repairs, and finally Horticulture and Crop Production sourced later
still — all nine from SchemeofWork.com's "JSS2 Scheme of Work Unified" page; see Subjects
above). **The target-list gap is now fully closed for JSS2.** JSS1 and JSS3 were previously
identical to JSS2's prior 13-subject catalogue; these additions have not yet been mirrored at
JSS1/JSS3, so check the live count for JSS1/JSS3 Hausa/Igbo/Arabic Language/Fashion Design/
Beauty and Cosmetology/Livestock Farming/Solar Photovoltaic Installation and Maintenance/
Computer Hardware and GSM Repairs/Horticulture and Crop Production before assuming they're
also sourced there.

**Business Studies is a legacy holdover.** It's live in the DB (tagged `legacy` per commit
`0f7e7602`) but doesn't appear anywhere in the NESRI JSS target column. Not removed — flagged
here pending a decision on whether it predates the 2025 reform and should stay, or should be
retired in favor of the target list.

## Theme structure fix (2026-09-04)

Hausa and Igbo were originally imported as **3 separate per-term theme rows** each
(`"JSS2 Hausa (First Term)"`, `"(Second Term)"`, `"(Third Term)"`, and likewise for Igbo) — the
only two subjects across JSS1-3 using that pattern; every other subject bundles all three
terms' topics into a single theme row, and the mobile app renders every theme as its own flat
card, so a student saw three separate "Hausa" tiles instead of one.

Fixed by merging each subject's 3 theme rows into 1: the lowest-ID theme row was kept and
renamed to the standard `"<Grade> <Subject>"` format, all topics were reassigned to it via
`UPDATE topics SET theme_id = ...`, and the now-empty theme rows were deleted. Verified
per-merge that the surviving theme's topic count matched the pre-merge total exactly (JSS2
Hausa: 33, JSS2 Igbo: 30), and confirmed via a final DB audit that every JSS1/2/3 subject (66
total) now has exactly 1 theme row. DB-only fix — no backend route or mobile code hardcodes a
theme ID, so no code changes were required.
