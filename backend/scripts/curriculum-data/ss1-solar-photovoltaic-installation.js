// SS1 Solar Photovoltaic Installation — First, Second & Third Term
// Source: SchemeofWork.com "SS1 Scheme of Work Unified" (Solar Photovoltaic Installation &
// Maintenance section, under "SS 1 Trade Subjects")
// URL: https://schemeofwork.com/ss1-scheme-of-work-unified/
// Source states a general sitewide "Compliance with the Government Approved New National
// Curriculum NERDC" but does not explicitly claim compliance with the September 2025 NESRI
// reform, and this trade subject already existed pre-reform, so 'legacy' is used per the
// versioning rule (consistent with the SS3 Solar Photovoltaic Installation entry sourced from
// the same site).
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Midterm Test, Midterm Break, and "Revision & Exams" blocks with no
// described content) are excluded from all three terms.

export const curriculumData = {
  subject: 'Solar Photovoltaic Installation',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Solar Photovoltaic Installation',
      topics: [
        // ---- First Term ----
        {
          name: 'Introduction to Renewable Energy',
          learningOutcome: 'Explain the meaning and sources of renewable energy and describe the importance of solar energy in Nigeria.',
          knowledge: [
            'Meaning of renewable energy',
            'Sources of renewable energy: solar, wind, hydro, biomass',
            'Importance of solar energy in Nigeria'
          ]
        },
        {
          name: 'Basics of Solar Energy',
          learningOutcome: 'Describe solar radiation and the photovoltaic effect, and state the advantages and limitations of solar energy.',
          knowledge: [
            'Solar radiation',
            'The photovoltaic effect',
            'Advantages of solar energy',
            'Limitations of solar energy'
          ]
        },
        {
          name: 'Solar Energy Terminologies',
          learningOutcome: 'Define and correctly use key solar energy terminologies encountered in photovoltaic work.',
          knowledge: [
            'Irradiance',
            'Insolation',
            'Efficiency',
            'Peak sun hours'
          ]
        },
        {
          name: 'Types of Solar Energy Systems',
          learningOutcome: 'Distinguish between off-grid, on-grid, and hybrid solar systems and identify their applications.',
          knowledge: [
            'Off-grid systems',
            'On-grid systems',
            'Hybrid systems',
            'Differences between the three system types',
            'Applications of each system type'
          ]
        },
        {
          name: 'Components of PV Systems I — Solar Panels',
          learningOutcome: 'Identify the types of solar panels and interpret their ratings.',
          knowledge: [
            'Monocrystalline panels',
            'Polycrystalline panels',
            'Thin-film panels',
            'Solar panel ratings'
          ]
        },
        {
          name: 'Components of PV Systems II — Charge Controllers',
          learningOutcome: 'Identify the types of charge controllers used in PV systems and explain their functions.',
          knowledge: [
            'Types of charge controllers',
            'Functions of charge controllers'
          ]
        },
        {
          name: 'Components of PV Systems III — Batteries',
          learningOutcome: 'Identify battery types used in solar systems and explain correct sizing and care practices.',
          knowledge: [
            'Lead-acid batteries',
            'Lithium-ion batteries',
            'Battery sizing',
            'Battery care'
          ]
        },
        {
          name: 'Components of PV Systems IV — Inverters',
          learningOutcome: 'Identify inverter types used in solar systems and interpret their ratings.',
          knowledge: [
            'Pure sine wave inverters',
            'Modified sine wave inverters',
            'Inverter ratings'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Basic Electrical Concepts',
          learningOutcome: 'Apply Ohm\'s law to explain the relationship between current, voltage, resistance, and power.',
          knowledge: [
            'Current',
            'Voltage',
            'Resistance',
            'Power',
            "Ohm's law"
          ]
        },
        {
          name: 'Tools & Instruments in PV Installation',
          learningOutcome: 'Identify and describe the use of common tools and instruments used in PV installation work.',
          knowledge: [
            'Multimeter',
            'Clamp meter',
            'Solar tester',
            'Hand tools'
          ]
        },
        {
          name: 'Solar Panel Connections I — Series Connection',
          learningOutcome: 'Explain series connection of solar panels and its effect on system voltage.',
          knowledge: [
            'Series connection',
            'Effect of series connection on voltage'
          ]
        },
        {
          name: 'Solar Panel Connections II — Parallel Connection',
          learningOutcome: 'Explain parallel connection of solar panels and its effect on system current.',
          knowledge: [
            'Parallel connection',
            'Effect of parallel connection on current'
          ]
        },
        {
          name: 'Solar Panel Mounting Structures',
          learningOutcome: 'Describe types of mounting structures and assess considerations for orientation, tilt angle, and site selection.',
          knowledge: [
            'Types of mounting structures',
            'Panel orientation',
            'Tilt angle',
            'Site assessment'
          ]
        },
        {
          name: 'Wiring & Cabling',
          learningOutcome: 'Describe DC and AC cabling requirements in PV systems, including cable sizing and safety precautions.',
          knowledge: [
            'DC cabling',
            'AC cabling',
            'Cable sizing',
            'Cabling safety'
          ]
        },
        {
          name: 'Earthing & Protection',
          learningOutcome: 'Describe earthing and protection components used to safeguard PV systems.',
          knowledge: [
            'Surge protectors',
            'Grounding systems',
            'Circuit breakers'
          ]
        },
        {
          name: 'Practical: Small Solar Setup',
          learningOutcome: 'Assemble a small 12V DC solar lighting system using basic PV components.',
          knowledge: [
            'Assembling a 12V DC lighting system'
          ]
        },

        // ---- Third Term ----
        {
          name: 'PV System Design Principles',
          learningOutcome: 'Apply load assessment and energy demand calculation principles to PV system design.',
          knowledge: [
            'Load assessment',
            'Energy demand calculation'
          ]
        },
        {
          name: 'Sizing Solar Panels',
          learningOutcome: 'Calculate the appropriate solar panel capacity by comparing energy requirements against panel output.',
          knowledge: [
            'Calculating energy requirement',
            'Comparing energy requirement to solar panel output'
          ]
        },
        {
          name: 'Sizing Batteries',
          learningOutcome: 'Calculate battery capacity requirements using daily load, depth of discharge, and battery autonomy.',
          knowledge: [
            'Daily load',
            'Depth of discharge',
            'Battery autonomy'
          ]
        },
        {
          name: 'Sizing Charge Controllers & Inverters',
          learningOutcome: 'Select appropriately rated charge controllers and inverters based on system ratings and efficiency considerations.',
          knowledge: [
            'Charge controller ratings',
            'Inverter ratings',
            'Efficiency considerations'
          ]
        },
        {
          name: 'Practical PV System Design',
          learningOutcome: 'Apply PV system design and sizing principles to a household case study.',
          knowledge: [
            'Case study: household solar system design'
          ]
        },
        {
          name: 'PV System Installation Steps I',
          learningOutcome: 'Carry out the initial steps of PV system installation, including panel mounting and balance-of-system installation.',
          knowledge: [
            'Mounting panels',
            'Installing balance of system'
          ]
        },
        {
          name: 'PV System Installation Steps II',
          learningOutcome: 'Carry out the electrical connection steps of PV system installation, including wiring and inverter/battery connection.',
          knowledge: [
            'Electrical wiring',
            'Inverter connection',
            'Battery connection'
          ]
        },
        {
          name: 'System Testing & Commissioning',
          learningOutcome: 'Test and commission a completed PV system by verifying voltage, current, and performance.',
          knowledge: [
            'Voltage tests',
            'Current tests',
            'Performance checks'
          ]
        }
      ]
    }
  ]
};
