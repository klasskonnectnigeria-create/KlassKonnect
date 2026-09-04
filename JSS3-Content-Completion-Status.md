# JSS3 Content Completion Status

**Status: 20 subjects live**, each with full three-term coverage, DB-verified 2026-09-04
(grade-level aggregate: 20 subjects, 451 topics — 277 from the 2026-08-31 baseline, plus 28
from Hausa and 28 from Igbo, plus 31 from Arabic Language, plus 21 from Fashion Design and
Garment Making, plus 24 from Beauty and Cosmetology, plus 20 from Livestock Farming, plus 22
from Solar Photovoltaic Installation and Maintenance, all sourced and DB-verified 2026-09-04)
— but only **19 of the 21 subjects** in the reconciled NESRI 2025 target (see "Remaining
gaps" below; 2 subjects still missing, one legacy holdover present that isn't on the target
list).

No SS3-style category structure applies to this grade — JSS3 has no vocational/trade tier,
so subjects are tracked as a flat list rather than split into categories.

## Subjects (20 live)

Arabic Language, Beauty and Cosmetology, Business Studies, Christian Religious Studies,
Cultural and Creative Arts, Digital Technologies, English Studies, Fashion Design and Garment
Making, French, Hausa, Igbo, Intermediate Science, Islamic Studies, Livestock Farming,
Mathematics, Nigerian History, Physical and Health Education, Social and Citizenship Studies,
Solar Photovoltaic Installation and Maintenance, Yoruba.

Each has an individual "Add JSS3 &lt;Subject&gt; curriculum (3 terms, ...)" commit
confirming full three-term coverage. Hausa and Igbo (source: SchemeofWork.com's L1/
first-language track, 28 topics each across all three terms) were added 2026-09-04 via the
nerdc-curriculum-sourcer agent. Arabic Language (source: SchemeofWork.com's "Arabic Language
Scheme of Work for Junior Secondary School Federal" page's JSS3 section, 31 topics across
all three terms, `legacy` version) was also added 2026-09-04 via the same agent. Fashion
Design and Garment Making (source: SchemeofWork.com's "JSS3 Scheme of Work Unified" page's
trade-subject section, 21 topics across all three terms, `legacy` version) was added
2026-09-04 via the same agent, the first of the 6 named trade subjects to be sourced for
JSS3. Beauty and Cosmetology (source: the same SchemeofWork.com "JSS3 Scheme of Work
Unified" page's dedicated trade-subject section, 24 topics across all three terms, `legacy`
version; administrative weeks — Midterm Examination, Midterm Break, Revision,
Examination/Closing — excluded) was added 2026-09-04 via the same agent, the second of the 6
named trade subjects to be sourced for JSS3. Livestock Farming (source: the same
SchemeofWork.com "JSS3 Scheme of Work Unified" page's dedicated Livestock Farming
trade-subject section, 20 topics across all three terms, `legacy` version; administrative
weeks — Mid-Term Examination, Mid-Term Break, Revision, Examination, Closing/Vacation, plus
third-term BECE Preparation and Examination weeks — excluded) was added 2026-09-04 via the
same agent, the third of the 6 named trade subjects to be sourced for JSS3. Solar Photovoltaic
Installation and Maintenance (source: the same SchemeofWork.com "JSS3 Scheme of Work Unified"
page's dedicated trade-subject section, 22 topics across all three terms, `legacy` version;
administrative weeks — Mid-Term Examination, Mid-Term Break, Revision/"Revision of Previous
Term Work", Examination, Closing/Vacation — excluded, though the First Term's "Introduction and
Revision of Previous Work" week was kept as it introduces new content alongside the review) was
added 2026-09-04 via the same agent, the fourth of the 6 named trade subjects to be sourced for
JSS3.

## Known gaps

None found in commit history or the live DB aggregate for the 20 subjects that are live — no
JSS3 subject among those 20 is flagged as partial or unresolved. But see "Remaining gaps
against the 21-subject NESRI 2025 target" below: the original 13-subject catalogue was never
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

JSS3 is at **19 of 21** target subjects as of 2026-09-04, up from 12/21 at the start of this
day's sourcing work — Hausa and Igbo were both sourced from SchemeofWork.com's Federal "Hausa
Language Scheme of Work for JSS 3" and "Igbo Language Scheme of Work for JSS 3" pages (L1/
first-language track, 28 topics each, `legacy` version; each page's parallel L2 track was not
merged in, matching the JSS1/JSS2 Hausa/Igbo convention). Arabic Language was then sourced
from SchemeofWork.com's "Arabic Language Scheme of Work for Junior Secondary School Federal"
page — a single page covering JSS1-3, using only the JSS3 section (31 topics across all three
terms, `legacy` version; raw HTML was checked directly to confirm the JSS3 section's own
content/topic/week table, not content copied from the adjacent JSS1/JSS2 sections on the same
page). JSS1 and JSS2 remain at the prior 13-subject catalogue (no Hausa/Igbo/Arabic Language
yet at those grades, though JSS1 and JSS2 do each already have their own Arabic Language file
sourced from the same page) — this closes gaps for JSS3 only, it does not carry over to
JSS1/JSS2 automatically. Fashion Design and Garment Making was then sourced from
SchemeofWork.com's "JSS3 Scheme of Work Unified" page, which carries a dedicated trade-subject
section per term with a Week/Topic/Content-Subtopics table (21 topics across all three terms,
`legacy` version; administrative weeks — Mid-Term Examination, Mid-Term Break, Revision,
Examination, Closing/Vacation, plus third-term BECE-prep and BECE-exam weeks — excluded).
Note: SchemeofWork.com's separate "NERDC Curriculum Scheme of Work for Fashion Design and
Garment Making" page only covers SS1-3, not JSS — the JSS3 content came from the Unified page
instead, the same source already used for JSS1/JSS2 Fashion Design and Garment Making.
Beauty and Cosmetology was then sourced from the same "JSS3 Scheme of Work Unified" page's own
dedicated Beauty and Cosmetology section (24 topics across all three terms, `legacy` version;
administrative weeks — Midterm Examination, Midterm Break, Revision, Examination/Closing —
excluded). As with Fashion Design and Garment Making, SchemeofWork.com's separate "NERDC
Curriculum Scheme of Work for Beauty and Cosmetology" page was checked and confirmed to cover
only SS1-3 (verified directly against the raw HTML, zero JSS mentions), so the JSS3 content
came from the Unified page instead. Livestock Farming was then sourced from the same "JSS3
Scheme of Work Unified" page's own dedicated Livestock Farming trade-subject section (20
topics across all three terms, `legacy` version; the fetched content was cross-checked against
the raw HTML table markup directly, matching the JSS1/JSS2 Livestock Farming precedent already
sourced from this same site). Solar Photovoltaic Installation and Maintenance was then sourced
from the same "JSS3 Scheme of Work Unified" page's own dedicated trade-subject section (22
topics across all three terms, `legacy` version — the source labels itself "(NEW NERDC
SCHEME)" but does not explicitly claim NESRI 2025 compliance; the fetched content was
cross-checked against the raw HTML directly, confirming genuine week-by-week table content
rather than a summarized/hallucinated response).
**2 subjects are still missing** from JSS3: the remaining 2 named trade options (Computer
Hardware and GSM Repairs, Horticulture and Crop Production). Neither has been sourced yet,
though the JSS3 Scheme of Work Unified page appears to carry dedicated sections for both (seen
in its table of contents during this session) and is a promising lead for sourcing them next.
This remains a larger gap than any single Primary 4-6 grade (which topped out at 1 missing
subject each) and has not yet been fully prioritized for sourcing.

**Business Studies is a legacy holdover — with an inconsistent tag.** It's live in the DB but
doesn't appear anywhere in the NESRI JSS target column; unlike JSS1 and JSS2 (where Business
Studies is tagged `legacy`), JSS3's copy is tagged `nesri_2025` (commit `fa5673e7`), which is
misleading given it isn't actually part of the NESRI 2025 target list. Not removed or
retagged — flagged here pending a decision on whether it predates the 2025 reform and should
stay (with its tag corrected), or should be retired in favor of the target list.
