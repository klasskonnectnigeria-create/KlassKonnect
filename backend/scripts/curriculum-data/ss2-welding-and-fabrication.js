// SS2 Welding and Fabrication — First Term, Second Term, Third Term
// Source: SchemeofWork.com "Fabrication and Welding Scheme of Work SSS2"
// URL: https://schemeofwork.com/fabrication-and-welding-scheme-of-work-sss2
// Source is presented as a "Free Unified Fabrication and Welding Scheme of Work" referencing
// the Lagos State SS2 Welding Syllabus; it does not claim NESRI 2025 compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks are excluded: First Term week 7 (Mid-term Break), week 13 (Examination)
// — the source's own First Term table skips a numbered week 12 entirely, a gap in the source
// itself; Second Term week 1 (bare "Welcome test" with no listed content), week 7 (Mid-term
// Break), week 12 (bare "Completion and submission of given projects" with no listed content),
// week 13 (Examination); Third Term week 7 (Mid term break), weeks 13-14 (Examination). First
// Term week 11 ("Project work") and Third Term week 1 ("Welcome test/Environmental Health") and
// week 12 ("Revision and projects") were each kept as real topics, since the source pairs them
// with concrete described activities/content rather than leaving them as bare review labels.
// Second Term weeks 4-6 ("Rivets and Riveting") share one set of objectives across a single
// merged source row; per sourcing convention these are kept as separate per-week topics below
// rather than collapsed, with the shared-objective relationship noted in each learningOutcome.

export const curriculumData = {
  subject: 'Welding and Fabrication',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Welding and Fabrication',
      topics: [
        // ---------- FIRST TERM ----------
        {
          name: 'Fabrication and Welding Workshop Layout',
          learningOutcome: 'Identify a standard fabrication and welding workshop layout and state the criteria for arranging tools, equipment, and gangways within it.',
          knowledge: [
            'Identification of a standard fabrication and welding workshop',
            'Description of the standard layout of a welding workshop',
            'Criteria for arranging a workshop, including gangways'
          ]
        },
        {
          name: 'Sources of Accidents and Personal Safety in the Workshop',
          learningOutcome: 'Identify potential sources of workshop accidents and demonstrate correct personal safety measures and clothing.',
          knowledge: [
            'Potential sources of accidents in the fabrication and welding workshop',
            'Correct personal safety measures and available safety clothing',
            'General safety rules and regulations for the workshop environment'
          ]
        },
        {
          name: 'Care and Maintenance of Equipment and Machines',
          learningOutcome: 'Explain the concept and types of maintenance and detect faulty equipment to prevent machine downtime.',
          knowledge: [
            'Definition and types of maintenance in fabrication and welding',
            'Detection of a faulty machine or piece of equipment',
            'Methods of preventing downtime or breakdown of machines and equipment'
          ]
        },
        {
          name: 'Marking Out Primary Shapes on Metals',
          learningOutcome: 'Mark out and cut primary shapes such as squares, rectangles, and circles on sheet metal.',
          knowledge: [
            'Marking out of primary shapes: triangle, square, rectangle',
            'Use of steel rule, set square, and punch on sheet metal'
          ]
        },
        {
          name: 'Bending of Sheet Metals into Objects',
          learningOutcome: 'Demonstrate ways of bending sheet metals into objects using the right tools and safety precautions.',
          knowledge: [
            'Cutting sheet metals into shapes and bending them into objects',
            'Use of snips, anvils, mallets, benders, and rollers to develop different shapes'
          ]
        },
        {
          name: 'Soldering of Sheet Metals',
          learningOutcome: 'Identify tools and equipment for soft soldering, select the appropriate joint type, and apply soft solder to a sheet metal joint.',
          knowledge: [
            'Tools and equipment for soft soldering and their uses',
            'Selection and sketching of types of soft-soldered joints',
            'Procedure for making a simple soft-soldered joint'
          ]
        },
        {
          name: 'Hard Soldering and Brazing',
          learningOutcome: 'Differentiate between soft soldering, hard soldering, and brazing, and describe the process for making a hard-soldered joint.',
          knowledge: [
            'Differences between soft soldering, hard soldering, and brazing',
            'Tools and equipment for hard soldering',
            'Process for making a hard-soldered joint; brazing spelter has a higher melting point than hard solder'
          ]
        },
        {
          name: 'Forging',
          learningOutcome: 'Explain forging as a metal-shaping process, identify hand forging tools, and handle them correctly.',
          knowledge: [
            'Forging as a process of heating and shaping metals with tools',
            'Identification of hand forging tools and the various shapes of tongs',
            'Correct handling, care, and maintenance of forging tools'
          ]
        },
        {
          name: 'Forging Process and Operations',
          learningOutcome: 'Outline and perform basic forging operations and design a project involving forging.',
          knowledge: [
            'Various forging operations, including upsetting, drawing down, and flattening',
            'Demonstration of basic forging operations',
            'Design and construction of an artefact involving forging (e.g. hook and eye)'
          ]
        },
        {
          name: 'Project Work: Soldering Joints',
          learningOutcome: 'Design and make an artefact involving both soft and hard soldering joints and write a report on the process.',
          knowledge: [
            'Application of soft and hard soldering joint techniques in a designed artefact',
            'Individual or group project reporting on the soldering process used'
          ]
        },
        // ---------- SECOND TERM ----------
        {
          name: 'Heat Treatment',
          learningOutcome: 'Explain heat treatment and its processes, use the iron-carbon equilibrium diagram to describe the behaviour of plain carbon steel when heated and cooled, and apply heat treatment in making artefacts.',
          knowledge: [
            'Heat treatment processes and their explanation',
            'Use of the iron-carbon equilibrium diagram to explain plain carbon steel behaviour when heated and cooled',
            'Quenching a plain carbon steel after heating during hardening and tempering',
            'Application of heat treatment processes in making artefacts'
          ]
        },
        {
          name: 'Fasteners: Bolts, Nuts, and Screws',
          learningOutcome: 'Identify types of fasteners and use them appropriately in fabrication projects.',
          knowledge: [
            'Identification of common fasteners: bolts, nuts, and screws',
            'Difference between temporary and permanent fasteners',
            'Use of fasteners in fabrication projects'
          ]
        },
        {
          name: 'Rivets and Riveting I: Tools and Process',
          learningOutcome: 'Identify riveting tools and equipment and explain the riveting process. This topic shares its learning objectives with the following two weeks, which together cover rivet joint types, application, and fault-finding.',
          knowledge: [
            'Tools and equipment for riveting operations and their uses',
            'Explanation of the process of riveting'
          ]
        },
        {
          name: 'Rivets and Riveting II: Joint Types and Shapes',
          learningOutcome: 'Sketch various shapes of rivet heads and identify the different types of rivet joints, continuing the shared objectives from the previous week.',
          knowledge: [
            'Shapes of rivet heads',
            'Types of rivet joints and their identification'
          ]
        },
        {
          name: 'Rivets and Riveting III: Application and Fault-Finding',
          learningOutcome: 'Use various types of rivets to join metal pieces, design an artefact involving riveting, and identify rivet faults and remedies, completing the three-week shared-objective block.',
          knowledge: [
            'Use of different types of rivets to join pieces of metal',
            'Design and construction of an artefact involving riveting',
            'Identification of rivet faults and their remedies'
          ]
        },
        {
          name: 'Templates',
          learningOutcome: 'Define templates, state the materials and storage methods used for them, and cut templates for fabricated assemblies.',
          knowledge: [
            'Definition of templates and materials used to make them',
            'Methods of storing templates',
            'Measurement, marking out, and cutting of templates'
          ]
        },
        {
          name: 'Job Cutting Techniques',
          learningOutcome: 'Identify job cutting techniques, cut materials to required dimensions, and interpret cutting lists and working drawings.',
          knowledge: [
            'Various job cutting techniques',
            'Cutting materials to required dimensions',
            'Interpretation of cutting lists and working drawings of projects'
          ]
        },
        {
          name: 'Surface Preparation (Fabrication)',
          learningOutcome: 'List the steps and state the purpose of surface preparation in fabrication, and prepare metal surfaces accordingly.',
          knowledge: [
            'Steps taken in surface preparation for fabrication',
            'Purpose of surface preparation',
            'Preparation of metal surfaces for fabrication'
          ]
        },
        {
          name: 'Surface Preparation (Welding)',
          learningOutcome: 'Define surface preparation, state its purpose before welding, and prepare metal surfaces for welding.',
          knowledge: [
            'Definition and purpose of surface preparation before welding',
            'Preparation of metal surfaces for welding'
          ]
        },
        // ---------- THIRD TERM ----------
        {
          name: 'Environmental Health and Safety in the Workshop',
          learningOutcome: 'Identify causes of health hazards in fabrication and welding and demonstrate workshop hygiene and first aid procedures for common workshop injuries.',
          knowledge: [
            'Causes of health hazards and control methods in fabrication and welding',
            'Hygiene practices in the workshop',
            'Consequences of accidents and first aid procedures for cuts, electric shock, eye injury, and skin burns'
          ]
        },
        {
          name: 'Electrodes',
          learningOutcome: 'Define an electrode, state its qualities, and select appropriate electrodes for welding projects.',
          knowledge: [
            'Definition and qualities of an electrode',
            'Selection of electrodes for specific projects',
            'Different types, sizes, and gauges of electrodes and filler rods'
          ]
        },
        {
          name: 'Electrode Manufacture and Storage',
          learningOutcome: 'Differentiate between methods of electrode manufacture and explain how to store electrodes safely.',
          knowledge: [
            'Methods of electrode manufacture',
            'Safe storage procedures for electrodes'
          ]
        },
        {
          name: 'Welding Techniques',
          learningOutcome: 'Identify different welding techniques, including rightward and leftward methods, and apply them appropriately.',
          knowledge: [
            'Types of welding techniques',
            'Rightward and leftward welding methods',
            'Industrial application of welding techniques observed on an industrial visit'
          ]
        },
        {
          name: 'Welding Position I: Overhead and Inclined Welding',
          learningOutcome: 'Perform overhead and inclined welding techniques on different metals.',
          knowledge: [
            'Overhead welding technique',
            'Inclined welding technique',
            'Demonstration and practice of welding and cutting different metals'
          ]
        },
        {
          name: 'Welding Position II: Weld Positions and Pipe Welding',
          learningOutcome: 'Identify the standard 1G, 2G, 3G, 1F, 2F, and 3F weld positions and weld pipes of different sizes.',
          knowledge: [
            'Standard weld positions: 1G, 2G, 3G, 1F, 2F, 3F',
            'Welding of pipes of different sizes'
          ]
        },
        {
          name: 'Welding in a Confined Space',
          learningOutcome: 'Apply the necessary precautions when welding in a confined space.',
          knowledge: [
            'Precautions necessary for welding in a confined space',
            'Guidance on safe practice in confined-space welding'
          ]
        },
        {
          name: 'Welding Containers with Inflammable Substances',
          learningOutcome: 'Identify inflammable substances found in containers and describe safe procedures for welding such containers.',
          knowledge: [
            'Identification of inflammable substances such as fluid, grease, and chemicals in containers',
            'Processes involved in safely welding containers that already contain inflammable substances'
          ]
        },
        {
          name: 'Welding Signs and Symbols',
          learningOutcome: 'Draw and identify welding signs and symbols and interpret working drawings that use them.',
          knowledge: [
            'Welding signs and symbols and their meanings',
            'Interpretation of working drawings containing welding signs and symbols'
          ]
        },
        {
          name: 'Welding Code',
          learningOutcome: 'Explain standard welding processes and identify the regulations applicable to specific job outputs.',
          knowledge: [
            'Standard welding processes and codes',
            'Regulations applicable to different welding job outputs'
          ]
        },
        {
          name: 'Revision and Projects: Window Grille and Door Construction',
          learningOutcome: "Apply the term's welding and fabrication knowledge to design and construct window grilles and doors.",
          knowledge: [
            'Design and construction of different types of window grille and doors',
            'Application of welding and fabrication skills learned during the term in a practical project'
          ]
        }
      ]
    }
  ]
};
