// SS2 Blocklaying, Bricklaying and Concreting — First Term, Second Term and Third Term
// Source: SchemeofWork.com — "Block Laying and Brick Laying Scheme of Work for SS 2 Federal"
// URL: https://schemeofwork.com/block-laying-and-brick-laying-scheme-of-work-for-ss-2-federal/
// Page presents itself as a Federal Nigeria Senior Secondary scheme of work — does not claim
// NESRI-2025 compliance, and this subject predates the reform, so 'legacy' is used per the
// versioning rule (matches the SS1 sibling source, sourced in the prior session).
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examination) at the end of each term are excluded.
// Several consecutive weeks share one broader topic heading in the source (e.g. "Basic
// Principles of Sub Structural Construction" across First Term Weeks 1-5, "Floor Construction"
// across First Term Weeks 6-8, "Openings in Walls" across First Term Weeks 11-12 and Second
// Term Week 1, "Bonding" across Second Term Weeks 2-3, "Timber/Timber Conversion and Seasoning"
// across Second Term Weeks 4-7, "Methods of Handling and Placing Concrete" across Second Term
// Week 10 and Third Term Weeks 1-2, "Uses of Formwork in Construction" across Third Term Weeks
// 5-6, "Organization and Execution of External and Internal Rendering" across Third Term Weeks
// 9-10) but each week's own content column carries genuinely distinct sub-content, so each week
// is kept as its own topic with a content-specific name rather than being collapsed.
// `subject` uses the comma form ("Blocklaying, Bricklaying and Concreting") to match the string
// already used by the existing SS1 and SS3 rows in the live database.

export const curriculumData = {
  subject: 'Blocklaying, Bricklaying and Concreting',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Blocklaying, Bricklaying and Concreting',
      topics: [
        // ---- First Term ----
        {
          name: 'Basic Principles of Sub-Structural Construction: Types of Soil',
          learningOutcome: 'Define soil, explain how soil is formed, and identify the various types of soil relevant to sub-structural construction work.',
          knowledge: [
            'Definition and formation of soil',
            'Types of soil encountered on a construction site',
            'Nature and characteristics of different soil types'
          ]
        },
        {
          name: 'Basic Sub-Structural Construction: Site and Soil Investigation',
          learningOutcome: 'Explain the process and importance of site and soil investigation, and describe the methods and tools used to determine the bearing capacity of soil.',
          knowledge: [
            'Process of investigating and identifying soil, and its importance',
            'Methods used in soil investigation',
            'Tools and apparatus used for soil investigation',
            'Bearing capacity of soil'
          ]
        },
        {
          name: 'Tools for Manual Excavation and Safe Working Precautions',
          learningOutcome: 'Identify the tools used for manual excavation and state the precautions necessary for safe working conditions on a construction site.',
          knowledge: [
            'Tools used for manual excavation',
            'Precautions for safe working conditions during excavation',
            'Soil investigation methods and tools relevant to excavation planning'
          ]
        },
        {
          name: 'Timbering to Trenches: Purpose and Types',
          learningOutcome: 'Define timbering to trenches, explain its purpose, and name the members or parts that make up a timbering system.',
          knowledge: [
            'Definition of timbering to trenches',
            'Purpose of timbering to trenches',
            'Members/parts of a timbering system',
            'Types of timbering to trenches'
          ]
        },
        {
          name: 'Practical Work on Timbering to Trenches',
          learningOutcome: 'Carry out practical work erecting timbering to trenches using appropriate tools, timber, nails, and adjustable props, applying the purpose and parts of timbering learned in the prior weeks.',
          knowledge: [
            'Practical application of timbering to trenches',
            'Use of tools, timber, nails, and adjustable props in timbering work'
          ]
        },
        {
          name: 'Floor Construction: Definition, Types and Materials',
          learningOutcome: 'Define what a floor is, explain its purpose, state the types of floor, and identify the materials used for floor construction.',
          knowledge: [
            'Definition and explanation of a floor',
            'Types of floor',
            'Materials for floor construction (cement, fine and coarse aggregate)'
          ]
        },
        {
          name: 'Floor Construction: Application and Drawings of Floors',
          learningOutcome: 'Explain where different floor types are applied and interpret drawings of floors.',
          knowledge: [
            'Application of different floor types',
            'Drawings and sketches of floors'
          ]
        },
        {
          name: 'Floor Construction: Method of Construction and Concrete Mixing',
          learningOutcome: 'Describe the method of constructing a floor and the method of mixing concrete used for floor work.',
          knowledge: [
            'Method of floor construction',
            'Method of concrete mixing for floor work'
          ]
        },
        {
          name: 'Wall: Definition, Functions and Types',
          learningOutcome: 'Define a wall, state its functions, identify the types of wall, and state the materials used for wall construction.',
          knowledge: [
            'Definition and functions of a wall',
            'Types of wall',
            'Materials for wall construction (blocks/bricks, stones, concrete)'
          ]
        },
        {
          name: 'Principles of Wall Construction',
          learningOutcome: 'Apply the definitions, functions, and types of walls to explain the principles that guide wall construction.',
          knowledge: [
            'Principles guiding wall construction',
            'Relationship between wall function/type and construction approach'
          ]
        },
        {
          name: 'Openings in Walls: Functions and Fixing Methods',
          learningOutcome: 'Explain what openings in a wall are, state their functions, and describe the different types of timber used for door and window construction.',
          knowledge: [
            'Explanation and functions of openings in a wall',
            'Types of timber used for doors and windows',
            'Method of fixing doors and windows'
          ]
        },
        {
          name: 'Openings in Walls: Methods of Fixing Doors and Windows',
          learningOutcome: 'Carry out the practical methods of fixing doors and windows within wall openings.',
          knowledge: [
            'Practical methods of fixing doors and windows in openings',
            'Use of timbers, tools, and yarding wall in fixing doors/windows'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Openings in Wall (continued): Materials for Door and Window Construction',
          learningOutcome: 'State the functions of openings in a wall and explain the materials, including timber types and their conversion and preservation methods, used to construct doors and windows.',
          knowledge: [
            'Functions of openings in a wall',
            'Types of timber used for door and window construction',
            'Method of timber conversion',
            'Method of preservation of timber',
            'Visits to forest reserves and saw mills to observe timber sourcing'
          ]
        },
        {
          name: 'Bonding: Types and Materials',
          learningOutcome: 'Explain the concept of bond/bonding, state the types of bonds, and identify the materials used for bonding.',
          knowledge: [
            'Definition of bond/bonding',
            'Types of bonds',
            'Materials for bonding (bricks/blocks, mortar)',
            'Sketches/drawings of various bonds'
          ]
        },
        {
          name: 'Bonding: Practical Work on Various Bonds',
          learningOutcome: 'Construct different types of bonds using bricks and blocks, including bonds using a combination of bricks and blocks.',
          knowledge: [
            'Practical construction of different bond types using bricks/blocks',
            'Construction of bonds using a combination of bricks and blocks'
          ]
        },
        {
          name: 'Timber/Timber Conversion and Seasoning: Nigerian Timber and Products',
          learningOutcome: 'Explain how timber is obtained, state its applications in the construction industry, and identify Nigerian timber used for making doors and windows.',
          knowledge: [
            'How timber is obtained',
            'Applications of timber in the construction industry',
            'Nigerian timber and products used for doors and windows',
            'Visits to timber yards to observe timber activities'
          ]
        },
        {
          name: 'Timber/Timber Conversion and Seasoning: Methods of Conversion and Seasoning',
          learningOutcome: 'Explain the conversion of timber with the aid of sketches, state the methods of conversion, and explain seasoning and its methods with the aid of diagrams.',
          knowledge: [
            'Conversion of timber, with sketches',
            'Methods of timber conversion',
            'Explanation of seasoning and its methods, illustrated with diagrams'
          ]
        },
        {
          name: 'Timber/Timber Conversion and Seasoning: Functions of Openings in Dwellings',
          learningOutcome: 'Relate the properties of converted and seasoned timber to the functions that door and window openings serve in a dwelling.',
          knowledge: [
            'Functions of openings in a dwelling',
            'Relevance of timber conversion and seasoning to opening construction'
          ]
        },
        {
          name: 'Timber/Timber Conversion and Seasoning: Types of Timber Doors and Windows',
          learningOutcome: 'State the types of timber doors and windows commonly used in building construction.',
          knowledge: [
            'Types of timber doors',
            'Types of timber windows'
          ]
        },
        {
          name: 'Concrete: Types and Materials for Concreting',
          learningOutcome: 'Explain and name the types of concrete, identify the materials required for concreting, and state the methods of mixing concrete.',
          knowledge: [
            'Types of concrete',
            'Materials for concrete (cement, fine and coarse aggregate)',
            'Methods of mixing concrete'
          ]
        },
        {
          name: 'Methods of Proportioning, Mixing and Testing Concrete',
          learningOutcome: 'State the types of concrete mixers, explain different mixing ratios and the water-cement ratio, and operate a concrete mixer to manually mix concrete.',
          knowledge: [
            'Types of concrete mixers',
            'Mixing ratio of cement, fine and coarse aggregate',
            'Water-cement ratio',
            'Operating a concrete mixer and manually mixing concrete'
          ]
        },
        {
          name: 'Methods of Handling and Placing Concrete',
          learningOutcome: 'Explain the means of transporting wet concrete to its placing point and state the precautions taken while handling fresh concrete.',
          knowledge: [
            'Means of transporting wet concrete to its placing point',
            'Precautions for handling fresh concrete',
            'Transporting fresh concrete with a wheelbarrow or head pan'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Methods of Handling and Placing Concrete: Pumping and Transport Factors',
          learningOutcome: 'Explain the pumping of ready-mixed concrete and the factors influencing the choice of transportation system for wet concrete.',
          knowledge: [
            'Pumping of ready-mixed concrete',
            'Factors influencing choice of transportation system for wet concrete',
            'Reasons for choosing a particular transport system for a particular work'
          ]
        },
        {
          name: 'Methods of Handling and Placing Concrete: Compaction Tools and Reasons',
          learningOutcome: 'Identify the tools and equipment used for compacting concrete and state the reasons for compacting concrete.',
          knowledge: [
            'Tools and equipment for compacting concrete',
            'Reasons for compacting concrete'
          ]
        },
        {
          name: 'Compacting and Curing of Concrete',
          learningOutcome: 'Explain the curing of concrete and state the reasons for curing concrete, and carry out practical mixing, transporting, and placing of concrete in a form.',
          knowledge: [
            'Curing of concrete and its reasons',
            'Practical mixing, transporting, and placing concrete in a form'
          ]
        },
        {
          name: 'Methods of Construction Joints in Concrete Structures',
          learningOutcome: 'Explain the types of joints used in concrete structures, identify jointing materials, and describe the methods of making construction joints.',
          knowledge: [
            'Types of joints in concrete structures',
            'Jointing materials and their application',
            'Methods of making construction joints',
            'Practical simple construction joint work'
          ]
        },
        {
          name: 'Uses of Formwork in Construction: Materials, Functions and Advantages',
          learningOutcome: 'Explain formwork and state its materials and functional requirements, and explain the advantages of steel over timber formwork.',
          knowledge: [
            'Definition and materials of formwork',
            'Functional requirements of formwork',
            'Advantages of steel over timber formwork'
          ]
        },
        {
          name: 'Uses of Formwork in Construction: Types, Erection and Care',
          learningOutcome: 'State and explain the types of formwork, select appropriate materials for a specific formwork, and erect, dismantle, and care for formwork.',
          knowledge: [
            'Types of formwork',
            'Selecting appropriate materials for specific formwork',
            'Erecting and dismantling formwork',
            'Care of formwork'
          ]
        },
        {
          name: 'Techniques of Laying Pre-cast Floor Finishes',
          learningOutcome: 'Explain the properties of pre-cast floor finishes, state the precautions and procedures for laying floor finishing materials, and identify common defects in pre-cast floor finishing.',
          knowledge: [
            'Properties of pre-cast floor finishes',
            'Precautions and procedures for laying floor finishing materials',
            'Methods of laying floor tiles',
            'Common defects in pre-cast floor finishing'
          ]
        },
        {
          name: 'Techniques of Laying Synthetic Floor Tiles',
          learningOutcome: 'Identify synthetic floor tiles and their sizes, and apply the methods of laying floor tiles learned in the prior week to synthetic tile installation.',
          knowledge: [
            'Synthetic floor tiles and their sizes',
            'Identification of various floor finishes on a construction site visit'
          ]
        },
        {
          name: 'Organization and Execution of Rendering/Plastering: Functions and Quality',
          learningOutcome: 'Explain rendering/plastering, state its functions, and explain the qualities of good rendering.',
          knowledge: [
            'Definition of rendering/plastering',
            'Functions of rendering/plastering',
            'Qualities of good rendering/plaster'
          ]
        },
        {
          name: 'Organization and Execution of Rendering/Plastering: Procedures and Practical',
          learningOutcome: 'Explain the procedures for rendering/plastering and organize and carry out practical rendering work using tools, cement, fine aggregate, and water.',
          knowledge: [
            'Procedures for rendering/plastering',
            'Practical execution of rendering/plastering',
            'Materials used: tools, equipment, cement, fine aggregate, and water'
          ]
        }
      ]
    }
  ]
};
