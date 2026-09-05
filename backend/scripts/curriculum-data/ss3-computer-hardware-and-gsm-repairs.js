// SS3 Computer Hardware and GSM Repairs — First and Second Term
// Source: schemeofwork.com "NERDC Curriculum Scheme of Work for Computer Hardware and GSM Repairs"
// URL: https://schemeofwork.com/nerdc-curriculum-scheme-of-work-for-computer-hardware-and-gsm-repairs/
// This source references the older/legacy NERDC curriculum framework and does not claim NESRI 2025
// compliance -> curriculumVersion: legacy.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid-Term Tests and Assignments, Revision for Mock Examination, Mock
// Examination, Examination, WAEC/NECO Practical Examination Preparation, Final Revision, Final
// Examination) are excluded from both terms.
// The source itself does not include a Third Term for SS3 (verified directly: the SS3 breakdown
// on this page proceeds straight from Second Term into unrelated footer content, with no Third
// Term heading) -> Third Term is omitted here, not excluded for lack of content. This matches the
// same First/Second-Term-only pattern already sourced for SS1 and SS2 of this subject.
// This is the standalone new "Computer Hardware and GSM Repairs" trade subject (one of the 6 NESRI
// 2025 / WAEC-reform trade subjects) and is intentionally separate from the pre-existing legacy
// "GSM Maintenance and Repairs" subject already live at SS3 (theme id 175) — that subject is
// untouched by this import.
// Second Term Weeks 1-4 ("Final Practical Project") and Weeks 7-8 ("Revision: Computer Hardware" /
// "Revision: GSM and Mobile Repairs") share a broader theme in the source; each is kept here as a
// separate topic per the source's own week breakdown rather than collapsed into one.

export const curriculumData = {
  subject: 'Computer Hardware and GSM Repairs',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Computer Hardware and GSM Repairs',
      topics: [
        // ---------------- FIRST TERM: Advanced Troubleshooting and Software Repair ----------------
        {
          name: 'Advanced Hardware Troubleshooting',
          learningOutcome: 'Use circuit diagrams to trace power lines and diagnose complex motherboard-level issues using a multimeter.',
          knowledge: [
            'Using circuit diagrams to trace power lines',
            'Diagnosing complex motherboard-level issues',
            'Using a multimeter to test voltage and continuity on a phone\'s logic board'
          ]
        },
        {
          name: 'Water Damage Repair',
          learningOutcome: 'Outline the steps for repairing liquid-damaged phones and understand the effects of corrosion.',
          knowledge: [
            'Steps for repairing liquid-damaged phones',
            'Understanding corrosion on internal components',
            'Cleaning a liquid-damaged logic board with isopropyl alcohol'
          ]
        },
        {
          name: 'Advanced Software Repair (Android)',
          learningOutcome: 'Explain boot loops, FRP locks, and software crashes, and use recovery mode and ADB commands to resolve them.',
          knowledge: [
            'Boot loops, FRP locks, and software crashes',
            'Use of recovery mode and ADB commands',
            'Bypassing an FRP lock on a test device and flashing firmware using SP Flash Tool'
          ]
        },
        {
          name: 'Advanced Software Repair (iOS)',
          learningOutcome: 'Understand common iOS issues such as being stuck on the Apple logo or in recovery mode, and use iTunes/3uTools to resolve them.',
          knowledge: [
            'iOS issues: stuck on Apple logo, recovery mode',
            'Use of iTunes and 3uTools',
            'Teacher demonstration of restoring an iPhone using 3uTools'
          ]
        },
        {
          name: 'Microsoldering Introduction',
          learningOutcome: 'Identify basic BGA components and understand the use of hot air rework stations in microsoldering.',
          knowledge: [
            'Basic BGA components',
            'Hot air rework stations',
            'Teacher demonstration only of soldering/desoldering on a scrap board'
          ]
        },
        {
          name: 'Diagnostic Software and Tools',
          learningOutcome: 'Use PC-based diagnostic software to test and diagnose phone hardware faults.',
          knowledge: [
            'PC-based diagnostic software for phone hardware',
            'Demonstration of a diagnostic tool to test all phone functions'
          ]
        },
        {
          name: 'Setting up a Small-Scale Repair Business',
          learningOutcome: 'Write a simple business plan and identify a target market and sources for spare parts.',
          knowledge: [
            'Writing a simple business plan',
            'Identifying target market and parts sources',
            'Creating a basic business plan for a phone repair kiosk'
          ]
        },
        {
          name: 'Customer Relationship Management',
          learningOutcome: 'Develop skills for handling clients, managing complaints, and building customer trust in a repair business.',
          knowledge: [
            'Handling clients and managing complaints',
            'Building trust with customers',
            'Role-playing exercises: technician and client scenarios'
          ]
        },
        // ---------------- SECOND TERM: Entrepreneurship and Final Projects ----------------
        {
          name: 'Final Practical Project (Week 1)',
          learningOutcome: 'Apply all acquired skills to a complex, real-world repair project, from sourcing the faulty device to documenting the completed repair.',
          knowledge: [
            'Sourcing a faulty phone or computer',
            'Diagnosing faults and sourcing required parts',
            'Performing a full repair and documenting the process'
          ]
        },
        {
          name: 'Final Practical Project (Week 2)',
          learningOutcome: 'Apply all acquired skills to a complex, real-world repair project, continuing diagnosis and repair work from Week 1.',
          knowledge: [
            'Continued diagnosis of the sourced faulty device',
            'Sourcing and fitting required replacement parts',
            'Ongoing documentation of the repair process'
          ]
        },
        {
          name: 'Final Practical Project (Week 3)',
          learningOutcome: 'Apply all acquired skills to a complex, real-world repair project, progressing the repair toward completion.',
          knowledge: [
            'Advanced fault diagnosis on the project device',
            'Performing repair procedures on sourced parts',
            'Continued documentation of the repair process'
          ]
        },
        {
          name: 'Final Practical Project (Week 4)',
          learningOutcome: 'Complete the final practical repair project and finalize documentation of the full process.',
          knowledge: [
            'Completing the full repair of the project device',
            'Verifying the device functions correctly after repair',
            'Finalizing documentation of the entire repair process'
          ]
        },
        {
          name: 'Marketing a Repair Business',
          learningOutcome: 'Develop low-cost marketing strategies for a phone/computer repair business.',
          knowledge: [
            'Low-cost marketing strategies: social media, word-of-mouth, flyers',
            'Creating a flyer or simple social media page for a mock business'
          ]
        },
        {
          name: 'Pricing and Record Keeping',
          learningOutcome: 'Learn competitive pricing strategies and maintain simple income and expense records for a repair business.',
          knowledge: [
            'Competitive pricing for common repairs',
            'Maintaining simple income/expense records',
            'Creating a price list for common repairs and filling out an invoice template'
          ]
        },
        {
          name: 'Revision: Computer Hardware',
          learningOutcome: 'Consolidate understanding of core computer hardware concepts covered across SS1 and SS2.',
          knowledge: [
            'Deep revision of core computer hardware concepts from SS1 and SS2',
            'Q&A sessions and practice troubleshooting scenarios'
          ]
        },
        {
          name: 'Revision: GSM and Mobile Repairs',
          learningOutcome: 'Consolidate understanding of mobile phone technology and repair techniques covered across SS1, SS2, and SS3.',
          knowledge: [
            'Deep revision of mobile phone technology and repair techniques',
            'Q&A sessions and practice troubleshooting scenarios'
          ]
        }
      ]
    }
  ]
};
