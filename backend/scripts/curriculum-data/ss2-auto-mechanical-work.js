// SS2 Auto Mechanical Work — First Term, Second Term and Third Term
// Source: SchemeofWork.com — "Technology Curriculum for Secondary School. SS 2 Auto
// Mechanics Scheme of Work Federal"
// URL: https://schemeofwork.com/auto-mechanics-scheme-of-work-for-ss-2-federal/
// Page presents itself as a Federal "Technology Curriculum for Secondary School" scheme of
// work — does not claim NESRI-2025 compliance, and this subject predates the reform, so
// 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Raw HTML was fetched and parsed directly (not just summarized) to confirm the WEEK /
// TOPIC-CONTENT / ACTIVITIES table structure and content for all three terms — this was
// double-checked against a second, differently-structured (Lagos State) version of the same
// SS2 subject on the same site to make sure real per-week content, not a thin summary, was
// used.
// Administrative weeks (Revision, Examination) at the end of each term are excluded.
// Third Term Weeks 4 and 5 share the source's identical heading "BRAKING SYSTEM—FAULTS IN
// BRAKING SYSTEM" but have genuinely distinct activity content (wheel-cylinder operation vs.
// hydraulic brake-adjustment fault diagnosis), so each is kept as its own topic with a
// content-specific name rather than being collapsed or duplicated verbatim.

export const curriculumData = {
  subject: 'Auto Mechanical Work',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Auto Mechanical Work',
      topics: [
        // ---- First Term ----
        {
          name: 'Petrol Engine: Two Stroke Cycle',
          learningOutcome: 'Define and explain the operation of the two-stroke cycle petrol (spark ignition) engine and examine its working sequence.',
          knowledge: [
            'Definition and explanation of two-stroke cycle operation',
            'Working sequence of the two-stroke petrol engine',
            'Use of a live engine and two-stroke charts as learning resources'
          ]
        },
        {
          name: 'Petrol Engine: Four Stroke Cycle',
          learningOutcome: 'Explain and illustrate the operation of the four-stroke cycle petrol engine, observing its working sequence.',
          knowledge: [
            'Explanation and illustration of the four-stroke cycle engine',
            'Working operation of the four-stroke cycle',
            'Use of live engines, charts and posters as learning resources'
          ]
        },
        {
          name: 'Petrol Engine: Comparing Two-Stroke and Four-Stroke Advantages',
          learningOutcome: 'Distinguish between two-stroke and four-stroke cycle petrol (spark ignition) engines and identify the advantages of each.',
          knowledge: [
            'Differences between two-stroke and four-stroke cycle engines',
            'Advantages of two-stroke versus four-stroke engines',
            'Use of charts and posters on spark ignition engines (SIE)'
          ]
        },
        {
          name: 'Diesel Engine: Two-Stroke and Four-Stroke Cycle',
          learningOutcome: 'Explain and illustrate the principles of operation of two-stroke and four-stroke cycle diesel (compression ignition) engines and distinguish their layout and advantages.',
          knowledge: [
            'Principles of operation of two-stroke and four-stroke cycle compression ignition engines (CIE)',
            'Operational sequence differences between two-stroke and four-stroke cycles',
            'Layout and advantages of each cycle type'
          ]
        },
        {
          name: 'Transmission Unit (Clutch): Identification of Parts and Characteristics',
          learningOutcome: 'Identify the parts of clutches in a transmission unit and describe their characteristics through sketches.',
          knowledge: [
            'Types of transmission components: pressure plate, disc, release bearing',
            'Sketching types of clutches',
            'Observing clutch operation'
          ]
        },
        {
          name: 'Transmission Unit (Clutch): Construction and Operation of a Single-Plate Clutch',
          learningOutcome: 'List the parts of a transmission system and identify the construction and operation of a single-plate clutch.',
          knowledge: [
            'Various parts in a transmission system',
            'Construction and operation of a single-plate clutch',
            'Identification of transmission components on a live vehicle'
          ]
        },
        {
          name: 'Transmission Unit (Gearbox): Sliding Mesh Gearbox and Reverse Mechanism',
          learningOutcome: 'Describe the operation of a sliding mesh gearbox and its reverse mechanism through dismantling and observation.',
          knowledge: [
            'Dismantling and identifying parts of a gearbox',
            'Operation of a sliding mesh gearbox',
            'Reverse mechanism operation'
          ]
        },
        {
          name: 'Suspension System: Leaf Spring and Coil Spring',
          learningOutcome: 'Identify faulty leaf spring and coil spring suspension systems and trace faults within them.',
          knowledge: [
            'Leaf spring suspension system',
            'Coil spring suspension system',
            'Tracing faulty suspension components'
          ]
        },
        {
          name: 'Suspension System: Hydraulic Suspension System',
          learningOutcome: 'Demonstrate the removal and replacement procedure for a hydraulic suspension system.',
          knowledge: [
            'Hydraulic suspension system operation',
            'Removal procedure for suspension components',
            'Replacement procedure for suspension components'
          ]
        },
        {
          name: 'Suspension System: Fault Finding in Suspension Systems',
          learningOutcome: 'Identify faulty areas in a suspension system through systematic fault finding.',
          knowledge: [
            'Identifying faulty areas in suspension systems',
            'Use of leaf spring and coil spring in fault diagnosis',
            'Charts and posters as diagnostic aids'
          ]
        },
        {
          name: 'Suspension System: Repair of Suspension System',
          learningOutcome: 'Carry out the repair of a faulty suspension system using coil spring and leaf spring components.',
          knowledge: [
            'Repair procedure for faulty suspension systems',
            'Coil spring repair',
            'Leaf spring repair'
          ]
        },
        {
          name: 'Suspension System: Advantages of Suspension System Types',
          learningOutcome: 'Demonstrate how different types of suspension systems work and explain their respective advantages.',
          knowledge: [
            'How suspension systems function',
            'Advantages of different suspension system types',
            'Use of suspension system models, charts and posters'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Steering System: Faults in Gearbox, Rack and Pinion, Worm and Wheel, Worm and Nut',
          learningOutcome: 'Explain the effects of faults in different types of steering gear systems, including rack and pinion, and worm-and-wheel/worm-and-nut mechanisms.',
          knowledge: [
            'Effects of a faulty steering system',
            'Rack and pinion steering gear',
            'Worm and wheel, worm and nut steering gear'
          ]
        },
        {
          name: 'Steering System: Adjustment of Steering Unit',
          learningOutcome: 'Demonstrate the removal, replacement and adjustment of a steering unit.',
          knowledge: [
            'Removal and replacement of a steering unit',
            'Adjustment procedure for a steering unit',
            'Use of spanners, hammers and screwdrivers as tools'
          ]
        },
        {
          name: 'Engine Lubrication: Viscosity and Viscosity Index',
          learningOutcome: 'Explain oil viscosity and the viscosity index and differentiate between grades of lubricating oil.',
          knowledge: [
            'Meaning of oil viscosity',
            'Viscosity index of lubricating oils',
            'Differentiating grades of oil'
          ]
        },
        {
          name: 'Engine Lubrication: Oil Filters and Qualities of Lubricants',
          learningOutcome: 'List the qualities of a good lubricant and describe the function of oil filters.',
          knowledge: [
            'Qualities of engine lubricants',
            'Function of oil filters',
            'Handling and assessing oil viscosity practically'
          ]
        },
        {
          name: 'Cooling System: Air Cooling and Water Cooling System',
          learningOutcome: 'Identify the parts of air-cooled and water-cooled engine cooling systems and demonstrate their removal.',
          knowledge: [
            'Parts of a cooling system: radiator, fan blade, fan belt, rubber hoses',
            'Air cooling system operation',
            'Water cooling system operation'
          ]
        },
        {
          name: 'Properties of Fuel',
          learningOutcome: 'Explain the key properties of automotive fuel relevant to engine performance.',
          knowledge: [
            'Properties of fuel used in automobile engines',
            'Observation of fuel behaviour using live vehicle demonstrations'
          ]
        },
        {
          name: 'Carburettors: Simple and Multi-Jet Carburettors',
          learningOutcome: 'Describe, with sketches, the operation of simple and multi-jet carburettors.',
          knowledge: [
            'Operation of simple carburettors',
            'Operation of multi-jet carburettors',
            'Sketching carburettor types'
          ]
        },
        {
          name: 'Carburettors: Removal, Replacement and Fault Diagnosis',
          learningOutcome: 'Carry out simple carburettor maintenance including diagnosis of faults, removal and replacement.',
          knowledge: [
            'Diagnosis of faults in carburettors',
            'Removal and replacement of carburettors',
            'Simple carburettor maintenance practice'
          ]
        },
        {
          name: 'Air Cleaner: Functions and Servicing',
          learningOutcome: 'Explain the functions of the air cleaner and carry out its removal and replacement.',
          knowledge: [
            'Definition and functions of the air cleaner',
            'Removal and replacement of the air cleaner'
          ]
        },
        {
          name: 'Air Cleaner: Importance of Servicing Air Cleaners',
          learningOutcome: 'Demonstrate the correct procedure for removing and replacing air cleaners and explain why regular servicing is important.',
          knowledge: [
            'Importance of servicing air cleaners',
            'Removal and replacement procedure',
            'Use of complete air cleaner units, spanners and screwdrivers'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Braking System: Mechanical and Hydraulic Operation of Disc and Drum Brakes',
          learningOutcome: 'Explain the mechanical and hydraulic operation of disc and drum brakes and identify the operational differences between them.',
          knowledge: [
            'Mechanical operation of disc and drum brakes',
            'Hydraulic operation of disc and drum brakes',
            'Master cylinder, wheel cylinder and brake caliper components'
          ]
        },
        {
          name: 'Braking System: Master Cylinder Operations',
          learningOutcome: 'Illustrate and assess the correct function of a brake master cylinder.',
          knowledge: [
            'Illustration and drawing of the master cylinder',
            'Assessing correct master cylinder function',
            'Tools and equipment used with the master cylinder'
          ]
        },
        {
          name: 'Braking System: Adjustments of Brakes',
          learningOutcome: 'Carry out simple brake adjustments on a hydraulic brake operation, including removal and replacement of brake component parts.',
          knowledge: [
            'Removal and replacement of brake component parts',
            'Simple brake adjustment on hydraulic systems'
          ]
        },
        {
          name: 'Braking System: Wheel Cylinder Operation',
          learningOutcome: 'Demonstrate how the wheel cylinder operates and carry out a simple wheel cylinder operation.',
          knowledge: [
            'Function and operation of the wheel cylinder',
            'Simple wheel cylinder operation practice'
          ]
        },
        {
          name: 'Braking System: Diagnosing Faults in Hydraulic Brakes',
          learningOutcome: 'Remove brake components to find out the fault and carry out a simple brake adjustment on a hydraulic operation.',
          knowledge: [
            'Removing brakes to diagnose faults',
            'Simple hydraulic brake adjustment for fault correction'
          ]
        },
        {
          name: 'Braking System: Removal of Brake Lining and Brake Bleeding',
          learningOutcome: 'Demonstrate the procedure for bleeding brakes and participate in brake bleeding during operation.',
          knowledge: [
            'Procedure for bleeding brakes',
            'Removal of brake lining',
            'Practical participation in brake bleeding'
          ]
        },
        {
          name: 'Wheel and Tyre: Road Wheels and Tyre Pressure',
          learningOutcome: 'Explain the vulcanizing process for tubes and tubeless tyres and demonstrate correct tyre pressure checks.',
          knowledge: [
            'Road wheels and tyre pressure',
            'Vulcanizing of tubes and tubeless tyres',
            'Use of tyre pressure gauge and vulcanizing equipment'
          ]
        },
        {
          name: 'Wheel and Tyre Service: Vulcanizing Tubes and Tubeless Tyres',
          learningOutcome: 'State the causes of tyre wear and remedies, and practice the process involved in vulcanizing tyres.',
          knowledge: [
            'Causes of tyre wear and remedies',
            'Practical vulcanizing process for tubes and tubeless tyres'
          ]
        },
        {
          name: 'Wheel and Tyre Service: Wheel Construction',
          learningOutcome: 'Explain the construction of road wheels and wheel rims.',
          knowledge: [
            'Wheel construction',
            'Wheel rims and related components'
          ]
        },
        {
          name: 'Wheel and Tyre Service: Tyre Regulations and Construction',
          learningOutcome: 'Explain the types of tyre construction and practice the procedures involved in tyre construction and regulation.',
          knowledge: [
            'Types of tyre construction',
            'Tyre regulations',
            'Use of tyre pressure gauge and vulcanizing equipment'
          ]
        },
        {
          name: 'Workshop Management: Definition, Functions and Authority',
          learningOutcome: 'Define management and explain its functions, the purpose of managing resources, and the concept of authority in a workshop or business setting.',
          knowledge: [
            'Definition of management: planning, organizing, controlling, staffing, directing/supervising',
            'Managing resources (money, men, material and machines)',
            'Concept of authority in a business/workshop organization'
          ]
        }
      ]
    }
  ]
};
