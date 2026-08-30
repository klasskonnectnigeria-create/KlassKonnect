// SS3 Solar Photovoltaic Installation — First Term (partial), Second Term (partial), Third Term (very thin)
// Source: SchemeofWork.com "SS3 Scheme of Work Unified" (Solar Photovoltaic Installation
// and Maintenance section, Trade Subjects in SS3)
// URL: https://schemeofwork.com/ss3-scheme-of-work-unified/
// Source states general "Compliance with the Government Approved New National Curriculum
// NERDC" but does not explicitly claim compliance with the September 2025 NESRI reform,
// so 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative and exam-focused weeks are excluded throughout: Midterm Test, Midterm
// Break, Revision & Exams, "Review of SS1 & SS2 Work" (recap), "Preparation for SSCE",
// "SSCE Past Questions – Theory/Practical" (past-question review), "Mock SSCE", "Exam
// Prep & Coaching", "Comprehensive Revision", "Mock Exams", "Final SSCE Preparation",
// "WAEC/NECO Practical & Theory Exams", and "Closing & Graduation".
// Third Term content is almost entirely exam preparation and closing activities; only
// one substantive topic (Final Project Presentation) remains after exclusions, so Third
// Term is very thin — represented here with that single topic rather than omitted,
// since it is genuine student project work rather than administrative content.

export const curriculumData = {
  subject: 'Solar Photovoltaic Installation',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Solar Photovoltaic Installation',
      topics: [
        // ---- First Term ----
        {
          name: 'Advanced PV Technologies',
          learningOutcome: 'Describe advanced photovoltaic technologies, including bifacial panels and solar trackers.',
          knowledge: [
            'Bifacial panels',
            'Solar trackers'
          ]
        },
        {
          name: 'Smart Solar Systems',
          learningOutcome: 'Explain smart solar systems, including IoT integration and monitoring applications.',
          knowledge: [
            'IoT integration in solar systems',
            'Monitoring applications'
          ]
        },
        {
          name: 'Hybrid Energy Systems',
          learningOutcome: 'Explain how solar power is combined with other energy sources in hybrid energy systems.',
          knowledge: [
            'Combining solar with wind power',
            'Combining solar with diesel generators'
          ]
        },
        {
          name: 'Energy Policies in Nigeria',
          learningOutcome: 'Discuss Nigeria\'s energy policies relevant to solar power, including rural electrification and renewable energy policy.',
          knowledge: [
            'Rural electrification policy',
            'Renewable energy policy'
          ]
        },
        {
          name: 'Climate Change and Renewable Energy',
          learningOutcome: 'Explain the role of solar power in addressing climate change and promoting sustainability.',
          knowledge: [
            'Role of solar in sustainability',
            'Solar power and climate change mitigation'
          ]
        },
        {
          name: 'Environmental Impacts of PV Systems',
          learningOutcome: 'Discuss the environmental impacts of photovoltaic systems, including waste and recycling considerations.',
          knowledge: [
            'Waste from PV systems',
            'Recycling of PV components',
            'Sustainability considerations'
          ]
        },
        {
          name: 'Practical: Smart Solar Monitoring System',
          learningOutcome: 'Use IoT tools to set up and operate a smart solar monitoring system.',
          knowledge: [
            'Using IoT tools for solar monitoring'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Practical Installation Project: Group Practical Design',
          learningOutcome: 'Work in a group to design a solar photovoltaic installation project.',
          knowledge: [
            'Group practical design of a solar installation project'
          ]
        },
        {
          name: 'Practical Installation Project: Installation and Commissioning',
          learningOutcome: 'Carry out the installation and commissioning of a solar photovoltaic system as part of a practical project.',
          knowledge: [
            'Installation procedures',
            'Commissioning of a solar photovoltaic system'
          ]
        },
        {
          name: 'Practical Installation Project: Troubleshooting and Maintenance',
          learningOutcome: 'Troubleshoot and maintain a solar photovoltaic installation as part of a practical project.',
          knowledge: [
            'Troubleshooting common installation faults',
            'Maintenance procedures for a solar photovoltaic system'
          ]
        },
        // ---- Third Term (very thin: one substantive topic remains after exclusions) ----
        {
          name: 'Final Project Presentation',
          learningOutcome: 'Present an individual or group solar photovoltaic project, explaining its design and outcomes.',
          knowledge: [
            'Presentation of individual or group solar projects'
          ]
        }
      ]
    }
  ]
};
