// SS2 Carpentry and Joinery — First Term, Second Term and Third Term
// Source: SchemeofWork.com — "Carpentry and Joinery Scheme of Work for SS 2 Federal"
// URL: https://schemeofwork.com/carpentry-and-joinery-scheme-of-work-for-ss-2-federal/
// Page introduces itself as "(Trade Subjects) Senior Secondary Entrepreneurship
// Curriculum. SS 2 Carpentry and Joinery Scheme of Work Federal" — does not claim
// NESRI-2025 compliance, and this subject predates the reform, so 'legacy' is used per
// the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Raw HTML was fetched and parsed directly (not just summarized) to confirm the WEEK /
// TOPIC-CONTENT / ACTIVITIES table structure and content for all three terms.
// Administrative weeks (Revision and Examination at the end of each term) are excluded.
// Several consecutive weeks share one broader topic heading in the source (e.g. "SAFETY
// RULES IN THE MACHINE SHOP" across Weeks 1-3 of First Term, "ADHESIVES" across Weeks
// 1-4 of Second Term, "FINISHES" across Weeks 7-12 of Third Term) but each week's
// TOPIC/CONTENT column carries genuinely distinct sub-content, so each week is kept as
// its own topic with a content-specific name rather than being collapsed.
// A few evident source-side typos/OCR artifacts are silently corrected in topic naming
// only (content/knowledge points otherwise kept close to source wording): "IRON
// MOMONGREY" -> "Ironmongery" (matches standard carpentry terminology and the source's
// own recurring use of "iron mongrey" for hardware fittings); "Farm work and centring"
// in Third Term Week 1 -> "Formwork and centring" (the source's own section header for
// that block reads "FORMWORK AND CENTRING", confirming "Farm work" was a scanning
// error); "Timbering to tranches" -> "Timbering to trenches"; "Resernol adhesine" ->
// "Resorcinol adhesive".

export const curriculumData = {
  subject: 'Carpentry and Joinery',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Carpentry and Joinery',
      topics: [
        // ---- First Term ----
        {
          name: 'Safety Rules in the Machine Shop: Machine Safety Rule',
          learningOutcome: 'Explain general safety practices in the machine shop and demonstrate the safe use of workshop machines.',
          knowledge: [
            'Explanation of general safety in machine shops',
            'Demonstration of the safe use of machines'
          ]
        },
        {
          name: 'Safety Rules in the Machine Shop: Electrical Equipment Safety',
          learningOutcome: 'Explain the correct procedure for operating machines electrically and observe the rules governing their operation.',
          knowledge: [
            'Explanation of the way to operate machines electrically',
            'Observation of the rules in operating machines'
          ]
        },
        {
          name: 'Safety Rules in the Machine Shop: Safety Devices on a Machine',
          learningOutcome: 'Explain how safety devices are used on workshop machines and demonstrate their use.',
          knowledge: [
            'Explanation of how safety devices are used in a workshop/machine',
            'Demonstration of the use of devices on a machine'
          ]
        },
        {
          name: 'Portable Power Tools and Maintenance: Portable Power Planer',
          learningOutcome: 'Explain the parts, operation and maintenance of a portable power planer and operate it correctly.',
          knowledge: [
            'Display of the portable power planer and its parts, operations and maintenance',
            'Student operation of the power planer'
          ]
        },
        {
          name: 'Portable Power Tools and Maintenance: Portable Circular Saw',
          learningOutcome: 'Explain and demonstrate the use of a portable circular saw.',
          knowledge: [
            'Teaching of the use of the portable circular saw'
          ]
        },
        {
          name: 'Portable Power Tools and Maintenance: Portable Power Drill',
          learningOutcome: 'Demonstrate the use and maintenance of a portable power drill while observing safety rules.',
          knowledge: [
            'Demonstration of the use and maintenance of the power drill',
            'Observation of safety rules when handling the power drill'
          ]
        },
        {
          name: 'Portable Power Tools and Maintenance: Portable Router and Jigsaw',
          learningOutcome: 'Explain the use and maintenance of a portable router and jigsaw.',
          knowledge: [
            'Explanation of the use and maintenance of the router and jigsaw'
          ]
        },
        {
          name: 'Machines and Maintenance: Circular Saw Machine',
          learningOutcome: 'Name and discuss the operations of the circular saw machine and carry out simple maintenance on it.',
          knowledge: [
            'Naming and discussion of the operations of the circular saw and its maintenance',
            'Student practice of simple machine maintenance'
          ]
        },
        {
          name: 'Machines and Maintenance: Cross Cut Machine',
          learningOutcome: 'Explain the operation and maintenance of the cross cut machine and observe the relevant safety rules.',
          knowledge: [
            'Explanation of the maintenance and operation of the cross cut machine',
            'Observation of safety rules'
          ]
        },
        {
          name: 'Machines and Maintenance: Surface Planer and Thickness Machine',
          learningOutcome: 'Explain the use and maintenance of the surface planer and thickness machine and carry out simple maintenance on them.',
          knowledge: [
            'Explanation of the use of the machines and their maintenance',
            'Student practice of simple maintenance on the machines'
          ]
        },
        {
          name: 'Machines and Maintenance: Wood Turning Machine',
          learningOutcome: 'Explain the parts, operations and maintenance of the wood turning (lathe) machine and observe safety rules while using it.',
          knowledge: [
            'Explanation of the parts of the lathe machine, its operations and maintenance',
            'Observation of safety rules on the machine'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Adhesives: Animal Glue',
          learningOutcome: 'Explain the characteristics and uses of animal glue and apply it correctly on a project.',
          knowledge: [
            'Explanation of the characteristics and uses of animal glue',
            'Application of the glue on a given project'
          ]
        },
        {
          name: 'Adhesives: Casein Glue',
          learningOutcome: 'Explain the characteristics and uses of casein glue and apply it correctly on a project.',
          knowledge: [
            'Explanation of the characteristics and uses of casein glue',
            'Application of the glue on a project'
          ]
        },
        {
          name: 'Adhesives: Urea Formaldehyde',
          learningOutcome: 'Explain the characteristics and uses of urea formaldehyde adhesive and apply it correctly on a project.',
          knowledge: [
            'Explanation of the characteristics and uses of urea formaldehyde',
            'Application of the adhesive on a project'
          ]
        },
        {
          name: 'Adhesives: Resorcinol Adhesive and Epoxy Resin',
          learningOutcome: 'Explain the characteristics and application of resorcinol adhesive and epoxy resin.',
          knowledge: [
            'Explanation of the use, application and characteristics of resorcinol adhesive and epoxy resin'
          ]
        },
        {
          name: 'Ironmongery: Screws, Nails, Hinges',
          learningOutcome: 'Identify and sketch common ironmongery items such as screws, nails and hinges.',
          knowledge: [
            'Display of screws, nails and various types of hinges',
            'Student sketching of the items displayed'
          ]
        },
        {
          name: 'Ironmongery: Sketches of Different Types of Bolts, Hinges, Handles',
          learningOutcome: 'Sketch various types of ironmongery, including bolts, hinges and handles, after examining displayed samples.',
          knowledge: [
            'Sketching of various ironmongery items',
            'Display of ironmongery for reference'
          ]
        },
        {
          name: 'Ironmongery: Fixing of Locks, Hinges, Handles, Brackets, Casters',
          learningOutcome: 'Demonstrate how to fix locks, hinges, handles, brackets and casters onto a project.',
          knowledge: [
            'Demonstration of how to fix ironmongery',
            'Student practice fixing ironmongery onto displayed items'
          ]
        },
        {
          name: 'Ironmongery: Specifications of Nails, Screws, Locks, Handles',
          learningOutcome: 'Explain how to order ironmongery correctly by specification and sketch the various types.',
          knowledge: [
            'Explanation of ordering of various ironmongery by specification',
            'Sketching of various types of ironmongery'
          ]
        },
        {
          name: 'Doors and Windows: Types of Doors and Windows',
          learningOutcome: 'Identify and distinguish between different types of doors and windows using displayed models.',
          knowledge: [
            'Display of doors and windows models',
            'Identification of the differences between types'
          ]
        },
        {
          name: 'Doors and Windows: Sketching Joints Used in Construction of Doors and Windows',
          learningOutcome: 'Construct a simple door and window frame and sashes, demonstrating the joints used in their construction.',
          knowledge: [
            'Demonstration of the process of constructing doors and windows',
            'Student construction of a simple door and window frame and sashes using wood'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Formwork and Centring: Formwork and Centring',
          learningOutcome: 'Construct simple formwork using a template after examining prepared mould samples.',
          knowledge: [
            'Display of samples of prepared mould for formwork and centres',
            'Student construction of simple formwork using a template'
          ]
        },
        {
          name: 'Formwork and Centring: Centre for Various Shapes of Arches',
          learningOutcome: 'Prepare a mould for various arch shapes and select the appropriate materials to use.',
          knowledge: [
            'Preparation of a mould for various arch shapes',
            'Selection of materials to use'
          ]
        },
        {
          name: 'Formwork and Centring: Timbering to Trenches',
          learningOutcome: 'Identify and name the tools used for timbering to trenches, using displayed samples.',
          knowledge: [
            'Display of tools to be used',
            'Student naming of the tools to be used'
          ]
        },
        {
          name: 'Estimation and Costing: Sketching and Working Drawing',
          learningOutcome: 'Select a simple project and calculate the quantity of materials required from its working drawing.',
          knowledge: [
            'Selection of simple projects by the teacher',
            'Calculation of the quantity of materials needed'
          ]
        },
        {
          name: 'Estimation and Costing: Interpretation of Drawing and Sketches',
          learningOutcome: 'Interpret working drawings and sketches for carpentry projects.',
          knowledge: [
            'Teacher interpretation of drawings for students',
            'Student practice interpreting other drawings'
          ]
        },
        {
          name: 'Estimation and Costing: Calculation and Estimation',
          learningOutcome: 'Explain how a cutting list is prepared and use it to estimate material quantities for a project.',
          knowledge: [
            'Explanation of the cutting list',
            'Observation of a table of a cutting list of materials'
          ]
        },
        {
          name: 'Finishes: Reasons for Applying Finishes',
          learningOutcome: 'Explain the reasons for applying finishes to wood and identify items that have been finished.',
          knowledge: [
            'Explanation of the uses of finishes',
            'Identification of items that have been finished'
          ]
        },
        {
          name: 'Finishes: Preparation of Surface for Finishes',
          learningOutcome: 'Explain the steps involved in preparing a surface before applying finishes and identify the tools and materials used.',
          knowledge: [
            'Explanation of the steps taken before applying finishes',
            'Identification of tools and materials used to prepare a surface (glue, sawdust, scraper, sandpaper)'
          ]
        },
        {
          name: 'Finishes: Types of Finishes',
          learningOutcome: 'Explain the types of finishes and their characteristics.',
          knowledge: [
            'Explanation of the types of finishes and their characteristics',
            'Student listing of types of finishes'
          ]
        },
        {
          name: 'Finishes: Application of Finishes',
          learningOutcome: 'Explain the methods used to apply finishes and the safety precautions to observe during application.',
          knowledge: [
            'Explanation of the methods used to apply finishes',
            'Explanation of the safety to be observed during application'
          ]
        },
        {
          name: 'Finishes: Tool and Equipment',
          learningOutcome: 'List the tools and equipment used for finishing work.',
          knowledge: [
            'Listing of the tools and equipment to be used'
          ]
        },
        {
          name: 'Finishes: Maintenance of Tools and Equipment',
          learningOutcome: 'Explain and demonstrate correct maintenance of finishing tools and equipment, including cleaning and storage.',
          knowledge: [
            'Explanation of the maintenance of tools',
            'Cleaning of the tools and returning them to their proper place'
          ]
        }
      ]
    }
  ]
};
