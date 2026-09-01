# SS2 Content Completion Status

**Status: Core tier expanded** — the original 9/9 catalogued science/humanities-core SS2
subjects remain complete, each with full three-term coverage. A Phase 1 sourcing pass
(2026-08-31) additionally added the 4 "Compulsory Core" subjects that were already live at
SS3 but missing at SS1/SS2 (a sourcing backlog, not a designed curriculum boundary — see
`CLAUDE.md`). A Phase 2b-ii language-subject pass (2026-09-01) added French, Yoruba, and Igbo. A Phase 2b-iii
language-subject pass (2026-09-01) added Hausa and Arabic. Music was added 2026-09-01 as the
third subject of Phase 2b-iii. SS2 now has 25 live subjects. DB-verified 2026-09-01.

No SS3-style five-category structure applies here — SS2's catalogue is limited to the
science/humanities core plus this new Compulsory Core tier, plus a Humanities & Arts addition
(Christian Religious Studies, Islamic Studies) and two Vocational & Trade additions
(Agriculture, Technical Drawing); the rest of the Vocational & Trade and Business & Commercial
tiers have not yet been attempted at this grade.

## Subjects (25 live)

Original 9 (`legacy`): Biology, Chemistry, Economics, English Language, Geography, Government,
Literature-in-English, Mathematics, Physics.

Phase 1 Compulsory Core additions (2026-08-31): Citizenship and Heritage Studies (`nesri_2025`,
24 topics), Digital Technologies (`nesri_2025`, 24 topics), Physical Education (`legacy`, 31
topics), Health Education (`legacy`, 22 topics — First/Second Term plus a partial Third Term;
see the curriculum-data file header for the excluded thin-source weeks).

Additional addition (2026-08-31): Further Mathematics (`legacy`, 31 topics — full
First/Second/Third Term coverage).

Vocational & Trade additions (2026-08-31): Agriculture (`legacy`, 35 topics — full
First/Second/Third Term coverage); Technical Drawing (`legacy`, 30 topics — full
First/Second/Third Term coverage).

Humanities & Arts additions (2026-08-31): Christian Religious Studies (`legacy`, 30 topics —
full First/Second/Third Term coverage); Islamic Studies (`legacy`, 33 topics — full
First/Second/Third Term coverage); Nigerian History (`legacy`, 33 topics — full
First/Second/Third Term coverage); French (`legacy`, 22 topics — full First/Second/Third Term
coverage).

Phase 2b-ii language-subject addition (2026-09-01): Yoruba (`legacy`, 33 topics — full
First/Second/Third Term coverage; source page's custom web font garbled Yoruba underdot
characters and the syllabic nasal into Latin-1 lookalikes, resolved via the same raw-HTML
substitution technique used for SS1 Yoruba — see the curriculum-data file header); Igbo
(`legacy`, 29 topics — full First/Second/Third Term coverage; no federal SS2 Igbo page is
indexed on schemeofwork.com, so the Lagos State variant was used, cross-confirmed against the
matching Osun State variant — see the curriculum-data file header). This completes the full
6-cell language×grade set for SS1/SS2 (French, Yoruba, Igbo at both SS1 and SS2).

Phase 2b-iii language-subject addition (2026-09-01): Hausa (`legacy`, 31 topics — full
First/Second/Third Term coverage; source: SchemeofWork.com federal SS2 page; no diacritic
mojibake issue was found on this page's raw HTML, unlike the prior Yoruba/Igbo runs, so no
character substitution was needed — see the curriculum-data file header); Arabic (`legacy`, 32
topics — full First/Second/Third Term coverage; source: SchemeofWork.com federal SS2 page;
Arabic script content verified against the raw fetched HTML as genuine, correctly encoded
Arabic; two topic-name slots had merged two distinct weeks' topics with no separator and were
split back into their real per-week topics by cross-checking the week-ordinal and content
columns — see the curriculum-data file header); Music (`legacy`, 33 topics — full
First/Second/Third Term coverage; source: SchemeofWork.com federal SS2 page, found via a direct
URL-pattern guess from the SS1/SS3 Music page URLs after the search index missed it).

Each addition has its own individual commit via the nerdc-curriculum-sourcer agent.

## Known gaps / incidents

One notable incident, now resolved: commit `4aa9b7ce` **reverted** an SS2 Economics import
after a fetch that returned no real content was caught (content had been written from memory
instead of a verified source). It was correctly re-sourced and re-imported in commit
`279bd7e0` ("properly re-sourced from verified fetch"). This is the incident documented as a
cautionary example in `.claude/agents/nerdc-curriculum-sourcer.md`. No other SS2 subject has
a known gap.
