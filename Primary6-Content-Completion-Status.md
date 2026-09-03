# Primary 6 Content Completion Status

**Status: IN PROGRESS** — 15 subjects live in the database as of 2026-09-03.

## Sourced

- **Mathematics** — First, Second, and Third Term (33 topics), `legacy`. Source:
  SchemeofWork.com "Mathematics Scheme of Work Primary 6 Federal". File:
  `backend/scripts/curriculum-data/primary6-mathematics.js`.

- **English Studies** — First, Second, and Third Term (23 topics), `legacy`. Source:
  SchemeofWork.com "English Scheme of Work Primary 6 Lagos State" (the Federal Primary 6
  English Studies page on the same site had only a thin First Term summary and marked
  Second/Third Term as "Other Terms Coming Soon," so the fuller Lagos State variant was
  used instead). File: `backend/scripts/curriculum-data/primary6-english-studies.js`.
- **Basic Digital Literacy** — First Term only (10 topics), `legacy`. Source:
  SchemeofWork.com "NERDC Curriculum Scheme of Work for Primary 6". Second and Third Term
  not sourced — the source page itself marks those as "Other Terms Coming Soon."
  File: `backend/scripts/curriculum-data/primary6-basic-digital-literacy.js`.
- **Basic Science and Technology** — First, Second, and Third Term (27 topics), `legacy`.
  Source: SchemeofWork.com "Basic Science and Technology BST Scheme of work Primary 6"
  (Lagos State Unified Scheme of Work variant; a thinner, incomplete "NERDC"-labelled
  page for the same subject/grade was also checked but had less detail and was not used).
  File: `backend/scripts/curriculum-data/primary6-basic-science-and-technology.js`.
- **Christian Religious Studies** — First, Second, and Third Term (31 topics), `legacy`.
  Source: SchemeofWork.com "Christian Religious Studies Scheme of Work Primary 6 Federal".
  File: `backend/scripts/curriculum-data/primary6-christian-religious-studies.js`.
- **Cultural and Creative Arts** — Full Year (11 topics), `legacy`. Source: SchemeofWork.com
  "Cultural and Creative Arts CCA Curriculum for Primary 6". This source organizes content
  into 3 themes (Arts and Crafts; Performing Arts & Entertainment; Customs and Traditions)
  rather than First/Second/Third Term labels; no administrative weeks were present to
  exclude. File: `backend/scripts/curriculum-data/primary6-cultural-and-creative-arts.js`.
- **French** — First Term only (10 topics), `legacy`. Source: SchemeofWork.com "NERDC
  Curriculum Scheme of Work for Primary 6". Second and Third Term not sourced — the
  source page itself marks those as "Other Terms Coming Soon," and no fuller Lagos/Osun
  State, syllabus.ng, or ecolebooks.com variant for French Primary 6 could be found.
  Source content is a thin one-line-per-week summary (no more detailed table exists
  elsewhere on the page for this subject). File: `backend/scripts/curriculum-data/primary6-french.js`.
- **Nigerian History** — First, Second, and Third Term (17 topics), `legacy`. Source:
  SchemeofWork.com "History Scheme of Work Primary 6 Lagos State" (no dedicated Federal
  Primary 6 History page exists on the site; a separate thin "Nigerian History Curriculum
  Scheme of Work for Primary School" page had only one-line topic titles per term with no
  weekly detail, so the fuller Lagos State variant was used instead).
  File: `backend/scripts/curriculum-data/primary6-nigerian-history.js`.
- **Physical and Health Education** — First, Second, and Third Term (25 topics), `legacy`.
  Source: SchemeofWork.com "Physical Health Education Scheme of Work for Pry 6".
  Administrative weeks (Revision, Readiness Test, Mid-term Break, Examination) excluded.
  File: `backend/scripts/curriculum-data/primary6-physical-and-health-education.js`.
- **Pre-vocational Studies** — First, Second, and Third Term (43 topics), `legacy`. Source:
  SchemeofWork.com "Pre Vocational Studies PVS Scheme of Work Primary 6 Lagos State" (the
  Federal "NERDC Curriculum Scheme of Work for Primary 6" page's own PVS section only had a
  thin First Term summary with "Other Terms Coming Soon," so the fuller Lagos State variant,
  which runs two parallel strands — PVS (Agriculture) and PVS (Home Economics) each week —
  was used instead). Third Term on this source is thinner than First/Second (real content
  ends at Week 6). Administrative weeks (Revision, Revision/Resumption Test, Mid-term Break)
  excluded. File: `backend/scripts/curriculum-data/primary6-pre-vocational-studies.js`.
- **Social and Citizenship Studies** — First, Second, and Third Term (25 topics), `legacy`.
  Source: SchemeofWork.com "Social Studies Scheme of Work Primary 6 Lagos State" (the
  federal, non-Lagos Primary 6 page for this subject only offered a thin, one-line-per-week
  First Term summary with no Second/Third Term content, so the Lagos State variant was used
  instead, mapped to the NESRI-2025 "Social and Citizenship Studies" naming). Administrative
  weeks (Mid Term Break, Revision) excluded.
  File: `backend/scripts/curriculum-data/primary6-social-and-citizenship-studies.js`.
- **Yoruba** — First, Second, and Third Term (33 topics), `legacy`. Source: SchemeofWork.com
  "Yoruba Language Scheme of Work Primary 6 Federal". The source's own Yoruba text uses a
  non-standard font/diacritic encoding for tonal and dotted-vowel characters; topic names
  and knowledge points were transliterated/translated into readable form from that source
  text rather than copied verbatim in its garbled form. Administrative weeks (Atunyewo
  Eko/Revision, Idanwo/Examination) excluded.
  File: `backend/scripts/curriculum-data/primary6-yoruba.js`.
- **Hausa** — First, Second, and Third Term (33 topics), `legacy`. Source: SchemeofWork.com
  "Hausa Language Scheme of Work Primary 6 Federal". The source's own Hausa text uses a
  non-standard font/diacritic encoding for hooked consonants (e.g. rendering "ɗalibai" as
  garbled "Calibai"); topic names and knowledge points were translated into readable English
  from that source text (with unhooked Hausa terms retained parenthetically for
  identification) rather than copied verbatim in its garbled form. Administrative weeks
  (Bitar Ayyukan Baya/Maimaitacin Aikin Baya "review", Jarabawa "examination") excluded.
  File: `backend/scripts/curriculum-data/primary6-hausa.js`.

- **Igbo** — First, Second, and Third Term (66 topics), `legacy`. Source: SchemeofWork.com
  "Igbo Language Scheme of Work Primary 6 Federal". The page repeats the same content
  twice — a thin one-line-per-week summary and a fuller weekly (IZU) table with
  NDINISIOKWU/teacher-activity/pupil-activity detail — the fuller detailed version was
  used. Unlike the Yoruba and Hausa Primary 6 sources (one topic per week), this source
  genuinely lists two distinct sub-topics per week (ISIOKWU A and ISIOKWU B — typically
  one language/grammar or comprehension strand and one literature/culture strand, each
  with its own content), so both were kept as separate topics per week rather than
  collapsed. The source's own Igbo text uses a non-standard font/diacritic encoding for
  dotted vowels and underdotted consonants (e.g. rendering "ị" as garbled "j"); topic
  names and knowledge points were translated into readable English (with corrected Igbo
  terms retained parenthetically) rather than copied verbatim in the garbled form.
  Administrative weeks (Mmugharị na Ule/revision, Ule na Mmechi/examination) excluded.
  File: `backend/scripts/curriculum-data/primary6-igbo.js`.

- **Islamic Studies** — First, Second, and Third Term (33 topics), `legacy`. Source:
  SchemeofWork.com "Islamic Religious Studies Scheme of Work Primary 6 Federal". Sourced
  alongside the existing Christian Religious Studies subject to offer both religious-studies
  tracks, per the Federal Ministry of Education's official Primary 4-6 Basic Education
  Subject List (3 September 2025 press release), which lists both CRS and IS. Administrative
  weeks (Revision, Examination, Examination and Closing) excluded.
  File: `backend/scripts/curriculum-data/primary6-islamic-studies.js`.

## Known gaps

All other Primary 6 subjects remain unsourced.
Second/Third Term Basic Digital Literacy and French content should be re-checked in a
future session in case the source publishes it later.
