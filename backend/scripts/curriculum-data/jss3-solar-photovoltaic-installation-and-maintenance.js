// JSS3 Solar Photovoltaic Installation and Maintenance — First, Second and Third Term
// Source: schemeofwork.com "JSS3 Scheme of Work Unified"
// URL: https://schemeofwork.com/jss3-scheme-of-work-unified/
// This source labels itself "(NEW NERDC SCHEME)" but does not explicitly claim NESRI 2025
// compliance -> curriculumVersion: legacy (matching the JSS1/JSS2/JSS3 Livestock Farming,
// Fashion Design and Garment Making, and Beauty and Cosmetology precedents from this session).
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid-Term Examination, Mid-Term Break, Revision/"Revision of
// Previous/First Term Work", Examination, Closing/Vacation) are excluded from all three
// terms. First Term Week 1 ("Introduction and Revision of Previous Work") is retained as a
// topic because, unlike the pure term-opening revision weeks in Term 2/3, it introduces new
// content (advanced system configurations) alongside the review, matching how the
// equivalent introductory week was handled for Livestock Farming on this same page.

export const curriculumData = {
  subject: 'Solar Photovoltaic Installation and Maintenance',
  grade: 'JSS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS3 Solar Photovoltaic Installation and Maintenance',
      topics: [
        // ---------------- FIRST TERM ----------------
        {
          name: 'Introduction and Revision of Previous Work',
          learningOutcome: 'Recall JSS2 topics on energy storage, performance evaluation, and fault detection, and describe how solar technology and system configurations have advanced since then.',
          knowledge: [
            'Review of JSS2 topics: energy storage, performance evaluation, and fault detection',
            'Understanding advanced system configurations',
            'Classroom discussion: evolution of solar technology'
          ]
        },
        {
          name: 'Advanced Solar System Components',
          learningOutcome: 'Identify and select PV modules, batteries, inverters, and charge controllers, including recent innovations such as lithium-ion batteries and MPPT controllers.',
          knowledge: [
            'Detailed study of PV modules, batteries, inverters, and charge controllers',
            'Latest innovations in solar components (Li-ion batteries, MPPT controllers)',
            'Component identification and selection for specific installations',
            'Practical: comparing different inverter and battery types'
          ]
        },
        {
          name: 'System Design and Sizing',
          learningOutcome: 'Apply the principles of solar system design to size a system for a home or school, including calculating loads and determining component sizes.',
          knowledge: [
            'Principles of system design',
            'Steps in sizing a solar system for home or school',
            'Calculating load requirements (AC/DC loads)',
            'Determining panel, battery, and inverter sizes',
            'Hands-on activity: designing a 12V DC lighting system'
          ]
        },
        {
          name: 'Solar Installation Procedures (Advanced)',
          learningOutcome: 'Carry out advanced solar installation procedures including mounting, wiring, and grounding of a complete system.',
          knowledge: [
            'Review of installation tools and materials',
            'Mounting techniques for panels and arrays',
            'Series and parallel connections (practical wiring session)',
            'Proper grounding and cable management',
            'Demonstration: complete setup of a basic solar system'
          ]
        },
        {
          name: 'System Protection and Safety Devices',
          learningOutcome: 'Explain the importance of protective devices and safe handling practices, and install a DC circuit breaker in a solar setup.',
          knowledge: [
            'Importance of safety in solar installations',
            'Protective devices: fuses, circuit breakers, surge arresters',
            'Proper earthing/grounding techniques',
            'Handling tools and batteries safely',
            'Practical: installing a DC circuit breaker in a solar setup'
          ]
        },
        {
          name: 'Maintenance and Servicing of PV Systems',
          learningOutcome: 'Carry out preventive and corrective maintenance of PV systems using appropriate tools and a maintenance schedule.',
          knowledge: [
            'Preventive and corrective maintenance',
            'Daily, weekly, and monthly maintenance schedules',
            'Tools for maintenance and system testing',
            'Troubleshooting common issues (low output, wiring faults)',
            'Group activity: creating a maintenance checklist'
          ]
        },
        {
          name: 'Renewable Energy Policies and Regulations',
          learningOutcome: 'Explain Nigeria\'s renewable energy policies and the roles of regulatory agencies and safety codes governing solar installation.',
          knowledge: [
            'Introduction to renewable energy policies in Nigeria',
            'Agencies and organizations promoting solar adoption (REA, NEMSA, NERC)',
            'Standards and safety codes for solar installation',
            'Discussion: why regulations are important for installers'
          ]
        },
        {
          name: 'Entrepreneurship in Solar Energy (Revisited)',
          learningOutcome: 'Plan a small solar energy business, covering branding, customer relations, and cost estimation, drawing on examples of Nigerian solar startups.',
          knowledge: [
            'Business setup in solar energy (retail, installation, maintenance)',
            'Customer relations and branding',
            'Cost estimation and quotation writing',
            'Case study: successful Nigerian solar startups',
            'Group presentation: "My Solar Business Plan"'
          ]
        },
        // ---------------- SECOND TERM ----------------
        {
          name: 'Electrical Wiring for Solar Systems',
          learningOutcome: 'Select and connect appropriate AC/DC cables for a solar installation, applying correct colour coding, polarity, and sizing.',
          knowledge: [
            'Introduction to solar electrical wiring concepts',
            'Types of electrical cables (AC/DC cables)',
            'Colour coding and polarity awareness',
            'Cable sizing and voltage drop considerations',
            'Practical: connecting panels, controllers, and batteries correctly'
          ]
        },
        {
          name: 'Battery Bank Configuration',
          learningOutcome: 'Configure a battery bank in series or parallel, calculating capacity and voltage and applying correct maintenance and storage practices.',
          knowledge: [
            'Series and parallel connections in batteries',
            'Battery capacity and voltage calculation',
            'Factors affecting battery performance and lifespan',
            'Maintenance and storage of batteries',
            'Practical: building a 24V battery bank'
          ]
        },
        {
          name: 'Inverter Operation and Connection',
          learningOutcome: 'Explain how different types of inverters function and connect one correctly between a battery and a load.',
          knowledge: [
            'Understanding inverter functions',
            'Types of inverters: pure sine wave, modified sine wave',
            'Inverter wiring: DC input and AC output',
            'Installation precautions and testing',
            'Demonstration: connecting an inverter to a battery and load'
          ]
        },
        {
          name: 'Solar Load Management',
          learningOutcome: 'Estimate and manage electrical loads on a solar system, prioritizing and balancing power use for efficiency.',
          knowledge: [
            'Understanding electrical loads',
            'Load prioritization and balancing',
            'Estimating total load consumption',
            'Power rating and efficiency management',
            'Practical: load distribution for home solar setup'
          ]
        },
        {
          name: 'Fault Detection and Troubleshooting',
          learningOutcome: 'Use diagnostic tools to identify and rectify common faults in a solar installation, following a systematic troubleshooting process.',
          knowledge: [
            'Common faults in solar installations',
            'Diagnostic tools: multimeter, tester, ammeter',
            'Identifying loose connections, faulty panels, and inverter issues',
            'Step-by-step troubleshooting process',
            'Practical: testing and rectifying a system fault'
          ]
        },
        {
          name: 'Solar System Testing and Commissioning',
          learningOutcome: 'Test and commission a solar system, checking output voltage, current, and other performance indicators against a commissioning checklist.',
          knowledge: [
            'Procedures for testing system performance',
            'Checking output voltage and current',
            'Performance indicators: efficiency, shading effects, battery health',
            'Final system commissioning checklist',
            'Group project: commissioning a classroom solar setup'
          ]
        },
        {
          name: 'Documentation and Reporting',
          learningOutcome: 'Record installation data and prepare professional job documentation, including invoices and customer service records.',
          knowledge: [
            'Recording installation data',
            'Report writing and job documentation',
            'Preparing invoices and customer service records',
            'Group task: prepare a mock solar project report'
          ]
        },
        // ---------------- THIRD TERM ----------------
        {
          name: 'Occupational Health and Safety (OHS) in Solar Work',
          learningOutcome: 'Apply occupational health and safety practices, including correct PPE use, to prevent electrical hazards during solar work.',
          knowledge: [
            'Importance of safety in solar installation',
            'Common electrical hazards and prevention',
            'Safe handling of panels, batteries, and tools',
            'Personal protective equipment (PPE) and usage',
            'Practical: safety drill and PPE inspection'
          ]
        },
        {
          name: 'Solar Site Assessment',
          learningOutcome: 'Assess a site for solar installation suitability, considering orientation, shading, tilt angle, and roof strength.',
          knowledge: [
            'Identifying suitable locations for PV systems',
            'Factors affecting solar site selection (orientation, shading, tilt angle, roof strength)',
            'Site survey checklist and measurements',
            'Practical: performing a basic site assessment around the school'
          ]
        },
        {
          name: 'System Installation Procedure',
          learningOutcome: 'Install a small off-grid solar lighting system, following the correct step-by-step mounting, wiring, and testing procedure.',
          knowledge: [
            'Step-by-step installation process (mounting, wiring, connections, testing)',
            'Mounting structures: roof and ground installations',
            'Installing panels, controllers, inverters, and batteries',
            'Practical: installing a small off-grid solar lighting system'
          ]
        },
        {
          name: 'Maintenance and Servicing of Solar PV Systems',
          learningOutcome: 'Carry out preventive and corrective maintenance on a solar PV system, including cleaning, checking connections, and record-keeping.',
          knowledge: [
            'Types of maintenance: preventive and corrective',
            'Cleaning panels and maintaining batteries',
            'Checking electrical connections and components',
            'Maintenance schedules and record-keeping',
            'Practical: conducting maintenance on a school solar unit'
          ]
        },
        {
          name: 'Energy Conservation and Efficiency',
          learningOutcome: 'Explain energy conservation and describe how solar technology and energy-efficient appliances support sustainable living.',
          knowledge: [
            'Meaning of energy conservation',
            'Ways to reduce power consumption',
            'Importance of energy-efficient appliances',
            'Role of solar technology in sustainable living',
            'Group discussion: designing an energy-efficient home'
          ]
        },
        {
          name: 'Entrepreneurship in Solar Energy',
          learningOutcome: 'Develop a simple solar business plan, covering service types, costing, quotation writing, and customer relations.',
          knowledge: [
            'Understanding solar business opportunities',
            'Types of solar services (installation, maintenance, consultancy, sales)',
            'Basic costing and quotation writing',
            'Building customer relations and trust',
            'Project: develop a simple solar business plan'
          ]
        },
        {
          name: 'Project Work and Field Demonstration',
          learningOutcome: 'Design, install, test, and document a mini solar setup as a group, and present the project for evaluation.',
          knowledge: [
            'Group project: design, install, and test a mini solar setup',
            'Documentation: materials used, cost, performance report',
            'Oral presentation of group projects',
            'Instructor evaluation and peer review'
          ]
        }
      ]
    }
  ]
};
