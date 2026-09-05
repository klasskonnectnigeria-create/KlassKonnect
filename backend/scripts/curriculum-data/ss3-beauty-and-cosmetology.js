// SS3 Beauty and Cosmetology — First and Second Term
// Source: schemeofwork.com "NERDC Curriculum Scheme of Work for Beauty and Cosmetology"
// URL: https://schemeofwork.com/nerdc-curriculum-scheme-of-work-for-beauty-and-cosmetology
// This source does not explicitly claim NESRI 2025 compliance (it labels itself the
// "Free Approved New NERDC Curriculum" with no NESRI/2025 reform language) -> curriculumVersion: legacy.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks ("Weeks 11-13: Revision & Examinations" in First Term, and
// "Weeks 11-13: Final Revision and Preparations for External Examinations" in Second Term)
// are excluded.
// The source page does not include an SS3 Third Term section at all — its coverage for SS3
// is presented as a single combined "SS3 – First & Second Term" section, consistent with the
// already-sourced SS1/SS2 files on this same page (neither of which has a Third Term either)
// — so Third Term is omitted here rather than represented with placeholder topics.
// Note: unlike the SS1/SS2 sections of this page, which use a per-week Topic/Learning
// Objectives/Practical Activities table, the SS3 section is written as a small number of
// multi-week blocks (e.g. "Weeks 1-4: Student-Chosen Specialization Module") describing a
// final-year specialization/portfolio/project structure rather than distinct weekly topics.
// Each block is imported here as a single topic exactly as the source presents it, since the
// source provides no distinct per-week content to split it further without fabrication.

export const curriculumData = {
  subject: 'Beauty and Cosmetology',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Beauty and Cosmetology',
      topics: [
        // ---------------- FIRST TERM: Consolidation, Specialization & Project Work ----------------
        {
          name: 'Student-Chosen Specialization Module',
          learningOutcome: 'Select one specialization area for in-depth study and complete theory and intensive practicals in that area.',
          knowledge: [
            'Choice of one specialization area for in-depth study: Advanced Hair Colouring, Advanced Skincare Therapy, Professional Makeup Artistry, or Nail Technology',
            'Theory and intensive practicals focused on the chosen specialization area'
          ]
        },
        {
          name: 'Client Management & Practical Sessions',
          learningOutcome: 'Perform beauty services on peer "clients" in a simulated salon environment, covering consultation, execution, and aftercare advice.',
          knowledge: [
            'Simulated salon environment practice',
            'Performing services on "clients" (fellow students) under supervision',
            'Focus areas: consultation, execution, and aftercare advice'
          ]
        },
        {
          name: 'Portfolio Development',
          learningOutcome: 'Compile a professional portfolio showcasing best work, including photographs, project reports, and certificates.',
          knowledge: [
            'Compiling a professional portfolio of best work',
            'Portfolio components: photographs, project reports, and certificates'
          ]
        },

        // ---------------- SECOND TERM: Final Projects and Entrepreneurship ----------------
        {
          name: 'Final Year Project',
          learningOutcome: 'Undertake and complete a major final-year project — a research project, business project, or creative project — demonstrating comprehensive cosmetology and entrepreneurship skills.',
          knowledge: [
            'Research Project option: e.g. "The Effect of Common Nigerian Herbs on Hair Growth" or "Analysis of Skincare Needs Among Teenagers in [School/Area]"',
            'Business Project option: create a full business plan for a beauty salon or mobile service, including a budget, marketing plan, and service menu',
            'Creative Project option: design and execute a complete photoshoot look (hair, makeup, styling) based on a chosen theme'
          ]
        },
        {
          name: 'Workshops & Career Talks',
          learningOutcome: 'Engage with visiting industry professionals and workshops covering career-preparation skills such as CV writing, interview skills, and pricing services.',
          knowledge: [
            'Talks from industry professionals: dermatologists, salon owners, makeup artists',
            'Workshops on CV writing and interview skills',
            'Workshops on pricing services'
          ]
        },
        {
          name: 'Project Presentation & Exhibition',
          learningOutcome: 'Present final projects to teachers, peers, and invited guests, and participate in a showcase exhibition of skills.',
          knowledge: [
            'Presentation of final projects to teachers, peers, and invited guests',
            'Participation in a "Beauty Expo"-style exhibition showcasing skills'
          ]
        }
      ]
    }
  ]
};
