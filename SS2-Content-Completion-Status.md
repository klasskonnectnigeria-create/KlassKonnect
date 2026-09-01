# SS2 Content Completion Status

**Status: Core tier expanded** — the original 9/9 catalogued science/humanities-core SS2
subjects remain complete, each with full three-term coverage. A Phase 1 sourcing pass
(2026-08-31) additionally added the 4 "Compulsory Core" subjects that were already live at
SS3 but missing at SS1/SS2 (a sourcing backlog, not a designed curriculum boundary — see
`CLAUDE.md`). A Phase 2b-ii language-subject pass (2026-09-01) added French and Yoruba. SS2
now has 21 live subjects. DB-verified 2026-09-01.

No SS3-style five-category structure applies here — SS2's catalogue is limited to the
science/humanities core plus this new Compulsory Core tier, plus a Humanities & Arts addition
(Christian Religious Studies, Islamic Studies) and two Vocational & Trade additions
(Agriculture, Technical Drawing); the rest of the Vocational & Trade and Business & Commercial
tiers have not yet been attempted at this grade.

## Subjects (21 live)

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
substitution technique used for SS1 Yoruba — see the curriculum-data file header). SS2 Igbo
is the next combination in this pass.

Each addition has its own individual commit via the nerdc-curriculum-sourcer agent.

## Known gaps / incidents

One notable incident, now resolved: commit `4aa9b7ce` **reverted** an SS2 Economics import
after a fetch that returned no real content was caught (content had been written from memory
instead of a verified source). It was correctly re-sourced and re-imported in commit
`279bd7e0` ("properly re-sourced from verified fetch"). This is the incident documented as a
cautionary example in `.claude/agents/nerdc-curriculum-sourcer.md`. No other SS2 subject has
a known gap.
