// JSS2 Solar Photovoltaic Installation and Maintenance — First, Second and Third Term
// Source: schemeofwork.com "JSS2 Scheme of Work Unified"
// URL: https://schemeofwork.com/jss2-scheme-of-work-unified/
// This source does not claim NESRI 2025 compliance -> curriculumVersion: legacy.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid-Term Examination, Mid-Term Break, Revision, Examination,
// Closing/holiday, and the start-of-term "Review of [prior] Term's Work" recap weeks,
// which restate prior content rather than introduce new material) are excluded from all
// three terms.

export const curriculumData = {
  subject: 'Solar Photovoltaic Installation and Maintenance',
  grade: 'JSS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS2 Solar Photovoltaic Installation and Maintenance',
      topics: [
        // ---------------- FIRST TERM ----------------
        {
          name: 'Electricity Fundamentals',
          learningOutcome: 'Define electricity and explain its importance, distinguish conductors from insulators and AC from DC current, and use a multimeter to measure electrical quantities.',
          knowledge: [
            'Definition and importance of electricity',
            'Conductors and insulators',
            'Types of current: AC and DC',
            'Voltage, current, and resistance (Ohm’s Law)',
            'Measuring electrical quantities using a multimeter'
          ]
        },
        {
          name: 'Energy Sources and Power Generation',
          learningOutcome: 'Distinguish renewable from non-renewable energy sources, describe how electricity is generated from solar, wind, hydro, and thermal power, and explain the environmental importance of clean energy.',
          knowledge: [
            'Renewable vs non-renewable energy',
            'Solar, wind, hydro, and thermal power',
            'Electricity generation process',
            'Importance of clean energy to the environment'
          ]
        },
        {
          name: 'Solar PV System Configuration',
          learningOutcome: 'Identify standalone, grid-tied, and hybrid solar PV system types, explain series and parallel component connections, and compare the advantages and disadvantages of each configuration.',
          knowledge: [
            'Types of solar PV systems: standalone, grid-tied, hybrid',
            'Components connection (series and parallel)',
            'Advantages and disadvantages of each configuration',
            'System setup demonstration'
          ]
        },
        {
          name: 'Solar Charge Controllers',
          learningOutcome: 'Explain the meaning and functions of a charge controller, distinguish PWM from MPPT types, and demonstrate correct controller installation and wiring practice.',
          knowledge: [
            'Meaning and functions of charge controllers',
            'Types of charge controllers (PWM and MPPT)',
            'Importance of charge regulation',
            'Controller installation and wiring practice'
          ]
        },
        {
          name: 'Solar Panels and Mounting Techniques',
          learningOutcome: 'Review solar panel efficiency and describe the correct steps, angles, and direction for mounting panels, as well as their care and maintenance.',
          knowledge: [
            'Review of solar panels and their efficiency',
            'Steps in mounting solar panels',
            'Mounting angles and direction',
            'Care and maintenance of solar panels'
          ]
        },
        {
          name: 'Electrical Wiring in Solar Systems',
          learningOutcome: 'Identify types of electrical wiring, tools, and materials used in solar systems, apply correct cable sizing and colour codes, and wire a small solar-powered circuit.',
          knowledge: [
            'Types of electrical wiring',
            'Wiring tools and materials',
            'Cable sizing and colour codes',
            'Practical: wiring a small solar-powered circuit'
          ]
        },
        {
          name: 'Entrepreneurship in Solar PV',
          learningOutcome: 'Identify business opportunities in the solar PV sector, apply customer service and professionalism, and develop a simple marketing plan for a solar business.',
          knowledge: [
            'Business opportunities in solar PV',
            'Customer service and professionalism',
            'Solar PV market trends',
            'Simple marketing plan for solar business'
          ]
        },

        // ---------------- SECOND TERM ----------------
        {
          name: 'Solar Batteries',
          learningOutcome: 'Explain the meaning and importance of solar batteries, distinguish lead-acid, lithium-ion, and gel battery types, and identify and test batteries through charging and discharging cycles.',
          knowledge: [
            'Meaning and importance of solar batteries',
            'Types of batteries: lead-acid, lithium-ion, gel batteries',
            'Functions and characteristics of each type',
            'Battery charging and discharging cycles',
            'Practical: identifying and testing batteries'
          ]
        },
        {
          name: 'Inverters and Converters',
          learningOutcome: 'Explain the meaning and functions of inverters and converters, distinguish pure sine wave from modified sine wave inverters, and connect an inverter to a solar battery.',
          knowledge: [
            'Meaning and functions of inverters and converters',
            'Types of inverters: pure sine wave, modified sine wave',
            'Importance of voltage conversion (DC to AC)',
            'Practical: connecting an inverter to a solar battery'
          ]
        },
        {
          name: 'Load Estimation and Energy Demand',
          learningOutcome: 'Define electrical load and calculate total load requirement and daily energy consumption, and explain the importance of proper load management.',
          knowledge: [
            'Meaning of electrical load',
            'Steps in calculating total load requirement',
            'Daily energy consumption estimation',
            'Importance of proper load management',
            'Practical: calculating the load of classroom equipment'
          ]
        },
        {
          name: 'System Sizing and Design',
          learningOutcome: 'Explain the meaning of system sizing, identify factors such as load, autonomy, and location that affect sizing, and design a small off-grid solar system.',
          knowledge: [
            'Meaning of system sizing',
            'Factors to consider in sizing (load, autonomy, location)',
            'Panel, battery, and inverter sizing',
            'Design of a small off-grid solar system',
            'Practical: solar system design demonstration'
          ]
        },
        {
          name: 'Installation Procedures',
          learningOutcome: 'Carry out a pre-installation site inspection, follow the steps in solar PV installation, and test wiring connections while identifying and correcting common installation errors.',
          knowledge: [
            'Pre-installation site inspection',
            'Steps in solar PV installation',
            'Wiring connection and testing',
            'Common installation errors and troubleshooting',
            'Demonstration: installing a small solar lighting system'
          ]
        },
        {
          name: 'Safety Practices in Installation',
          learningOutcome: 'Explain the importance of safety in solar installation, use personal protective equipment correctly, and apply electrical hazard prevention and first aid procedures.',
          knowledge: [
            'Importance of safety in solar installation',
            'Personal protective equipment (PPE)',
            'Safe handling of tools and materials',
            'Electrical hazard prevention',
            'First aid and emergency response'
          ]
        },
        {
          name: 'Solar PV Maintenance and Troubleshooting',
          learningOutcome: 'Define maintenance and distinguish preventive from corrective maintenance, identify common solar PV faults and their causes, and carry out a maintenance check on a sample setup.',
          knowledge: [
            'Meaning of maintenance',
            'Types: preventive and corrective maintenance',
            'Common solar PV faults and causes',
            'Steps in troubleshooting a solar system',
            'Practical: maintenance check on a sample setup'
          ]
        },

        // ---------------- THIRD TERM ----------------
        {
          name: 'Energy Storage Systems',
          learningOutcome: 'Explain the meaning and importance of energy storage, distinguish chemical, mechanical, and thermal storage types, and identify factors affecting the storage efficiency of batteries in PV systems.',
          knowledge: [
            'Meaning and importance of energy storage',
            'Types of energy storage systems: chemical, mechanical, thermal',
            'Batteries as energy storage devices in PV systems',
            'Factors affecting energy storage efficiency',
            'Practical: observing battery charge/discharge patterns'
          ]
        },
        {
          name: 'Solar System Performance Evaluation',
          learningOutcome: 'Explain the importance of performance evaluation, identify parameters such as voltage, current, and efficiency to monitor, and use instruments to measure and record system performance data.',
          knowledge: [
            'Meaning and importance of performance evaluation',
            'Parameters to monitor (voltage, current, efficiency)',
            'Tools and instruments for system testing',
            'Recording and interpreting data',
            'Practical: measuring voltage and current from a panel'
          ]
        },
        {
          name: 'Fault Detection in PV Systems',
          learningOutcome: 'Identify common PV system faults such as panel shading, loose connections, and battery failure, apply step-by-step fault tracing techniques, and document and report faults found.',
          knowledge: [
            'Common PV system faults (panel shading, loose connection, battery failure)',
            'Troubleshooting techniques',
            'Step-by-step guide to fault tracing',
            'Documentation and reporting of faults',
            'Demonstration: identifying faults in a sample solar circuit'
          ]
        },
        {
          name: 'Entrepreneurship in Solar Energy',
          learningOutcome: 'Explain the meaning of entrepreneurship, identify solar business opportunities in installation, sales, and maintenance, and demonstrate the customer service and communication skills needed for solar entrepreneurship.',
          knowledge: [
            'Meaning of entrepreneurship',
            'Solar business opportunities (installation, sales, maintenance)',
            'Customer service and communication',
            'Skills needed for successful solar entrepreneurship',
            'Role play: acting as a solar consultant'
          ]
        },
        {
          name: 'Career Opportunities in Renewable Energy',
          learningOutcome: 'Identify careers available in the solar and renewable energy industry, state the qualifications and skills required, and discuss gender inclusivity and innovation in the sector.',
          knowledge: [
            'Careers in solar and renewable energy industry',
            'Qualifications and skills required',
            'Institutions offering solar training',
            'Gender inclusivity and innovation in renewable energy',
            'Class presentation: "My dream solar career"'
          ]
        },
        {
          name: 'Environmental Impact of Solar Energy',
          learningOutcome: 'Discuss the positive and negative environmental impacts of solar energy, explain the recycling of panels and batteries, and evaluate sustainable solar practices.',
          knowledge: [
            'Positive impacts: clean energy, reduced carbon footprint',
            'Negative impacts: waste disposal, land use',
            'Recycling of panels and batteries',
            'Sustainable solar practices',
            'Debate: "Solar Energy is 100% Environmentally Friendly"'
          ]
        },
        {
          name: 'Final Project and Demonstration',
          learningOutcome: 'Work in a group to design, select components for, and install a mini solar system for home lighting, then test and present the completed project for peer and instructor review.',
          knowledge: [
            'Group project: designing a mini solar system for home lighting',
            'Component selection and installation steps',
            'Testing and presentation of group projects',
            'Peer review and instructor feedback'
          ]
        }
      ]
    }
  ]
};
