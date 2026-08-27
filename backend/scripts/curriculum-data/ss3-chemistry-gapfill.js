// SS3 Chemistry — Gap-fill (Second Term + Third Term missing topics)
// Source: SchemeofWork.com "SS3 Scheme of Work Unified" (New NERDC/NESRI Scheme)
// URL: https://schemeofwork.com/ss3-scheme-of-work-unified/
// This source explicitly claims compliance with the new NERDC/NESRI (Sept 2025) curriculum reform.
// Administrative weeks (Midterm Test/Exam, Midterm Break, Revision, Examination, Mock Examination, Closing) are excluded.
//
// CONTEXT: The live database already has 20 SS3 Chemistry topics under curriculum_version
// 'nesri_2025' (9 from First Term, 6 of 8 from Second Term, 5 of 9 from Third Term). This file
// adds ONLY the 6 real topics that were missed from Second and Third Term — it does NOT
// re-include the 20 topics already imported. Verify via dry-run that this appends to the
// EXISTING Chemistry/SS3/nesri_2025 theme rather than creating a duplicate theme before
// running the real import.

export const curriculumData = {
  subject: 'Chemistry',
  grade: 'SS3',
  curriculumVersion: 'nesri_2025',
  themes: [
    {
      name: 'SS3 Chemistry',
      topics: [
        {
          name: 'Summary of Major Topics',
          learningOutcome: 'Review and consolidate the essential chemistry concepts covered across SS1 to SS3 in preparation for external examinations.',
          knowledge: [
            'Review of essential concepts across SS1–SS3',
            'Identification of high-priority topics for WAEC/NECO revision'
          ]
        },
        {
          name: 'Final Tips and Revision',
          learningOutcome: 'Apply effective last-minute revision strategies and time-management techniques to prepare confidently for external examinations.',
          knowledge: [
            'Strategies for last-minute preparation',
            'Study timetables',
            'Mental readiness techniques for examinations'
          ]
        },
        {
          name: 'Intensive Revision',
          learningOutcome: 'Consolidate understanding of all SS1–SS3 chemistry topics through comprehensive, targeted revision.',
          knowledge: [
            'Consolidated revision of all SS1–SS3 topics'
          ]
        },
        {
          name: 'Last-Minute Revision',
          learningOutcome: 'Recall key chemistry formulas and concepts quickly using summary sheets and rapid practice techniques.',
          knowledge: [
            'Summary sheets',
            'Formula recall',
            'Quick practice exercises'
          ]
        },
        {
          name: 'Mock Final Exams',
          learningOutcome: 'Demonstrate readiness for WAEC/NECO chemistry examinations by performing under simulated, timed exam conditions.',
          knowledge: [
            'Simulated timed conditions for WAEC/NECO',
            'Mock examination practice'
          ]
        },
        {
          name: 'Final Preparations',
          learningOutcome: 'Build confidence and mental alertness while identifying key focus areas ahead of the final chemistry examination.',
          knowledge: [
            'Confidence building',
            'Mental alertness',
            'Key focus areas for final exam'
          ]
        }
        // ... 6 topics: the real gap between the 20 currently in the DB and the 26 in the NESRI source
      ]
    }
  ]
};
