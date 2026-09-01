// SS1 Auto Mechanical Work — First Term, Second Term and Third Term
// Source: SchemeofWork.com — "Auto Mechanic Work Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/auto-mechanic-work-scheme-of-work-for-ss-1-federal-2/
// Page introduces itself as "Nigeria Curriculum for Senior Secondary School. Federal Auto
// Mechanic Work Scheme of Work for SS 1" — does not claim NESRI-2025 compliance, and this
// subject predates the reform, so 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Raw HTML was fetched and parsed directly (not just summarized) to confirm the WEEK /
// TOPIC-CONTENT / ACTIVITIES table structure and content for all three terms.
// Administrative weeks (Revision, Examination) at the end of each term are excluded.
// Several consecutive weeks share one broader topic heading in the source (e.g. "SAFETY"
// across Weeks 1-3, "THE CHASSIS" across Weeks 8-10, "BRAKING SYSTEM" across Weeks 1-5 of
// Third Term) but each week's TOPIC/CONTENT column carries genuinely distinct sub-content, so
// each week is kept as its own topic with a content-specific name rather than being collapsed.

export const curriculumData = {
  subject: 'Auto Mechanical Work',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Auto Mechanical Work',
      topics: [
        // ---- First Term ----
        {
          name: 'Safety: Definitions and Causes of Workshop Accidents',
          learningOutcome: 'Define safety and workshop, and explain the meaning and causes of workshop accidents.',
          knowledge: [
            'Definition of safety',
            'Definition of workshop',
            'Meaning and causes of workshop accidents',
            'Accident prevention techniques'
          ]
        },
        {
          name: 'Safety: Accident Prevention Techniques',
          learningOutcome: 'Explain what an accident is and describe different ways of preventing workshop accidents through safety rules and regulations.',
          knowledge: [
            'Meaning of an accident',
            'Ways of preventing accidents',
            'Safety rules and regulations'
          ]
        },
        {
          name: 'Safety: Safety Devices and Their Applications',
          learningOutcome: 'Identify common workshop safety devices and explain their applications.',
          knowledge: [
            'Safety devices and their applications',
            'Examples of safety devices: fire extinguisher, sand, buckets'
          ]
        },
        {
          name: 'Hand Tools/Maintenance: Types and Uses',
          learningOutcome: 'Define a hand tool and identify the types and uses of hand tools found in the workshop.',
          knowledge: [
            'Definition of a hand tool',
            'Types of hand tools: measuring, cutting, boring, bench, and holding tools',
            'Uses of hand tools'
          ]
        },
        {
          name: 'Hand Tools/Maintenance: Care in Handling Hand Tools',
          learningOutcome: 'Explain how to maintain hand tools and demonstrate proper care in handling them.',
          knowledge: [
            'Hand tool maintenance procedures',
            'Care in handling hand tools',
            'Cleaning and maintaining hand tool items'
          ]
        },
        {
          name: 'Workshop Equipment and Maintenance: Types and Uses',
          learningOutcome: 'Define workshop equipment and identify the types and uses of common workshop equipment.',
          knowledge: [
            'Definition of equipment',
            'Types and uses of equipment, e.g. compressor, battery charger, wheel balancing and alignment gauge'
          ]
        },
        {
          name: 'Maintenance of Equipment: Types and Importance',
          learningOutcome: 'Explain how equipment is maintained and describe the types and importance of maintenance.',
          knowledge: [
            'How to maintain equipment',
            'Types of maintenance',
            'Importance of maintenance'
          ]
        },
        {
          name: 'The Chassis: Explanation and Types',
          learningOutcome: 'Explain the meaning of the vehicle chassis and identify the types of motor vehicle chassis.',
          knowledge: [
            'Explanation of the chassis',
            'Types of motor vehicle chassis',
            'Vehicle layout'
          ]
        },
        {
          name: 'The Chassis: Principal Components',
          learningOutcome: 'Identify the principal components mounted on the vehicle chassis and describe how they are arranged.',
          knowledge: [
            'Engine, transmission system, chassis members, braking system, and suspension system as mounted on the chassis',
            'Diagrammatic illustrations of chassis components'
          ]
        },
        {
          name: 'The Chassis: Functions of Principal Components',
          learningOutcome: 'Explain the functions and uses of each principal component of the chassis.',
          knowledge: [
            'Functions of each principal component',
            'Uses of chassis components'
          ]
        },
        {
          name: 'Engine: Types of Engine Design',
          learningOutcome: 'Identify and describe the types of engine design used in motor vehicles.',
          knowledge: [
            'Single cylinder engine design',
            'Multi-cylinder engine design',
            'In-line and V-engine designs'
          ]
        },
        {
          name: 'Engine: Identification of Main Components',
          learningOutcome: 'Identify the main components of an engine and describe their arrangement, including through workshop observation.',
          knowledge: [
            'Main components of the engine',
            'Sketches showing engine component details',
            'Workshop visit to observe engine components'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Types of Engine: Multi-Cylinder Line Diagrams',
          learningOutcome: 'Draw and explain line diagrams of multi-cylinder engines.',
          knowledge: [
            'Line diagrams of multi-cylinder engines',
            'Explanation of multi-cylinder engine layout'
          ]
        },
        {
          name: 'Types of Engine: Cylinder Liners',
          learningOutcome: 'Differentiate between types of cylinder liners and explain their constructional details, advantages, and disadvantages.',
          knowledge: [
            'Types of cylinder liners: dry and wet',
            'Constructional details of cylinder liners',
            'Advantages and disadvantages of each liner type'
          ]
        },
        {
          name: 'Transmission System: Layout',
          learningOutcome: 'Identify and describe the layout of the transmission system and its sequential components.',
          knowledge: [
            'Transmission system layout: engine, clutch, gearbox, universal joint, propeller shaft, rear axle, and half shafts',
            'Sequential arrangement of transmission components'
          ]
        },
        {
          name: 'Transmission System: Types of Drive Arrangement',
          learningOutcome: 'Identify types of engine and driving arrangements found in motor vehicles.',
          knowledge: [
            'Front-engine front-wheel drive arrangement',
            'Rear-engine rear-wheel drive arrangement'
          ]
        },
        {
          name: 'Suspension System: Types and Functions',
          learningOutcome: 'Identify types of suspension systems and explain their functions.',
          knowledge: [
            'Types of suspension system: laminated spring, coil spring, and torsion bar',
            'Functions of suspension system components'
          ]
        },
        {
          name: 'Steering System: Functions and Components',
          learningOutcome: 'Explain the functions of the steering system and identify its components.',
          knowledge: [
            'Functions of steering',
            'Components of steering system: kingpin, steering column, stub axle, steering box'
          ]
        },
        {
          name: 'Steering System: Types of Steering Boxes',
          learningOutcome: 'Differentiate between types of steering boxes and explain their functions.',
          knowledge: [
            'Types of steering boxes: rack and pinion, cam and worm, recirculating balls',
            'Functions of each type of steering box'
          ]
        },
        {
          name: 'Engine Lubricating System: Friction and Purpose of Lubrication',
          learningOutcome: 'Explain the concept of friction and the merits, demerits, and purpose of the engine lubricating system.',
          knowledge: [
            'Friction: merits and demerits',
            'Purpose of the lubricating system, e.g. passages, pump, filters',
            'Demonstration of the effect of lubrication on friction between surfaces'
          ]
        },
        {
          name: 'Engine Cooling System: Functions',
          learningOutcome: 'Define the cooling system and explain why it is necessary for engine operation.',
          knowledge: [
            'Definition of the cooling system',
            'Need for a cooling system',
            'Effect of lack of water on a running engine'
          ]
        },
        {
          name: 'Cooling System: Types and Components',
          learningOutcome: 'Identify types of cooling systems and explain the role of their components.',
          knowledge: [
            'Types of cooling system',
            'Components of cooling system: radiator, water pump, hoses, cooling fan',
            'Circulation of water in the cooling system'
          ]
        },

        // ---- Third Term ----
        {
          name: 'Braking System: Basic Concept of Friction',
          learningOutcome: 'Explain the importance of brakes and the braking system in a motor vehicle based on the concept of friction.',
          knowledge: [
            'Basic concept of friction as applied to the braking system',
            'Importance of brakes in a moving vehicle'
          ]
        },
        {
          name: 'Braking System: Functions, Drum and Disc Brakes',
          learningOutcome: 'State the functions of the braking system and identify drum and disc brake types.',
          knowledge: [
            'Functions of braking system',
            'Drum brakes and disc brakes',
            'Location of drum and disc brakes on a motor vehicle'
          ]
        },
        {
          name: 'Braking System: Mechanical and Hydraulic Types',
          learningOutcome: 'Distinguish between mechanically and hydraulically operated brake systems and explain their principle of operation.',
          knowledge: [
            'Types of braking systems: mechanical and hydraulic',
            'Principle of operation of mechanical and hydraulic brakes'
          ]
        },
        {
          name: 'Braking System: Components',
          learningOutcome: 'Identify and differentiate the components of hydraulic and mechanical braking systems.',
          knowledge: [
            'Components of braking systems: master cylinder, wheel cylinder, pipe lines, calipers, disc, shoes, pedal, linkages, actuating rods'
          ]
        },
        {
          name: 'Braking System: Advantages and Disadvantages of Mechanical and Hydraulic Types',
          learningOutcome: 'Compare the advantages and disadvantages of mechanical and hydraulic brake systems and identify which offers more efficient operation.',
          knowledge: [
            'Advantages and disadvantages of mechanical brake systems',
            'Advantages and disadvantages of hydraulic brake systems'
          ]
        },
        {
          name: 'Fuel System: General Layout and Types of Fuel',
          learningOutcome: 'Explain the general layout and working principle of the fuel system and identify types of fuel.',
          knowledge: [
            'General layout and working principle of the fuel system',
            'Types of fuel: petrol, diesel, paraffin'
          ]
        },
        {
          name: 'Fuel System: Components and Parts',
          learningOutcome: 'Identify the components and parts of the fuel system, including through workshop observation.',
          knowledge: [
            'Components of fuel system: fuel pump, carburetor, float, float chamber',
            'Workshop visit to observe a live vehicle fuel system layout'
          ]
        },
        {
          name: 'Manifold: Functions and Types',
          learningOutcome: 'State the functions of the manifold, identify its types, and describe how it is removed and replaced.',
          knowledge: [
            'Functions of manifold',
            'Types of manifold: inlet and exhaust manifold',
            'Removing and replacing a manifold'
          ]
        },
        {
          name: 'Rims: Functions, Types, Sizes, Removal and Fixing',
          learningOutcome: 'Identify the functions, types, and sizes of rims, and demonstrate removing and fixing them with appropriate tools.',
          knowledge: [
            'Functions of rims',
            'Types of rims: alloy and press steel',
            'Sizes of rims',
            'Removing and fixing rims, and tools used'
          ]
        },
        {
          name: 'Tyres: Functions and Sizes',
          learningOutcome: 'State the functions of tyres and identify tyre types by size and designation.',
          knowledge: [
            'Functions of tyres',
            'Sizes of tyres, e.g. tyre designation',
            'Types of tyres: tube and tubeless'
          ]
        },
        {
          name: 'Tyres: Advantages and Disadvantages of Tube and Tubeless Types',
          learningOutcome: 'Compare the advantages and disadvantages of tube and tubeless tyres and identify the more efficient type.',
          knowledge: [
            'Advantages and disadvantages of tube tyres',
            'Advantages and disadvantages of tubeless tyres'
          ]
        }
      ]
    }
  ]
};
