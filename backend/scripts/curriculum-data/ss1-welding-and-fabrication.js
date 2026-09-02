// SS1 Welding and Fabrication — First Term, Second Term, Third Term
// Source: SchemeofWork.com "Fabrication and Welding Scheme of Work SSS1"
// URL: https://schemeofwork.com/fabrication-and-welding-scheme-of-work-sss1
// Source is presented as a "Free Unified Fabrication and Welding Scheme of Work" referencing
// the Lagos State SS1 Fabrication syllabus; it does not claim NESRI 2025 compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks are excluded: First Term weeks 7 (Mid-term Break), 12 (Revision and
// Prospects), 13 (Examination); Second Term weeks 1 (Welcome Test and Revision), 7 (Mid-term
// Break), 12-13 (Examination); Third Term weeks 1 (Welcome Test and Revision), 7 (Mid-term
// Break), 12 (Revision/Projects), 13 (Examination).
// The source combines Second Term weeks 3-4 ("Classification of Metals: Ferrous and Non
// Ferrous Metals") and weeks 9-11 ("Surface Preparation") under one shared set of objectives
// each; per sourcing convention these are kept as separate per-week topics below rather than
// collapsed, with the shared-objective relationship noted in each learningOutcome.

export const curriculumData = {
  subject: 'Welding and Fabrication',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Welding and Fabrication',
      topics: [
        // ---------- FIRST TERM ----------
        {
          name: 'Introduction to Fabrication and Welding',
          learningOutcome: 'Define welding and fabrication, differentiate between the two processes, and describe career prospects available in the field.',
          knowledge: [
            'Definition of welding and fabrication and how they differ',
            'Career opportunities and prospects in the fabrication and welding trade'
          ]
        },
        {
          name: 'Safety',
          learningOutcome: 'Apply general safety rules during all practical activities carried out in a metal workshop.',
          knowledge: [
            'General safety rules applicable to practical activities in a metal workshop',
            'Identification and correct use of various safety materials and clothing',
            'Workshop safety rules and regulations'
          ]
        },
        {
          name: 'Personal Protective Equipment (PPE)',
          learningOutcome: 'Identify types of protective gear used in the workshop and demonstrate their correct use for specific tasks.',
          knowledge: [
            'Types of protective gear: apron, safety boots, hand gloves, helmet, welding shield, spats, leggings',
            'Correct usage of personal protective equipment for specific workshop tasks'
          ]
        },
        {
          name: 'Causes of Accident and Hazard',
          learningOutcome: 'Identify common sources of accidents in the workshop and demonstrate measures to prevent them.',
          knowledge: [
            'Common sources and causes of accidents in the metal workshop',
            'Measures for preventing and avoiding workshop accidents and hazards'
          ]
        },
        {
          name: 'First Aid and Fire Fighting',
          learningOutcome: 'Identify the contents of a first aid box and demonstrate correct first aid and fire-fighting responses to workshop emergencies.',
          knowledge: [
            'Contents of a first aid box and their correct use',
            'Fire codes and methods of fighting fire outbreaks in the workshop'
          ]
        },
        {
          name: 'Workshop Tools',
          learningOutcome: 'Classify common workshop tools and describe their functions in preparation for safe use.',
          knowledge: [
            'Classification of workshop tools by function',
            'Functions of different categories of workshop tools',
            'Safety awareness required for using workshop tools'
          ]
        },
        {
          name: 'Measuring and Marking Out Tools',
          learningOutcome: 'Identify types of measuring and marking out tools and apply them correctly, including conversion between measurement units.',
          knowledge: [
            'Types of measuring and marking out tools: vernier caliper, micrometer, steel rule, tape rule',
            'SI and imperial units of measurement and conversion between them',
            'Safe use, handling, and measurement techniques from a datum point'
          ]
        },
        {
          name: 'Holding and Driving Tools',
          learningOutcome: 'Identify types of holding and driving tools and demonstrate correct handling, care, and maintenance techniques.',
          knowledge: [
            'Types of holding tools and their uses',
            'Correct handling techniques for holding and driving tools',
            'Care and maintenance of holding and driving tools'
          ]
        },
        {
          name: 'Cutting Tools',
          learningOutcome: 'Select appropriate cutting tools, differentiate between cross filing and draw filing, and practice filing metal work pieces.',
          knowledge: [
            'Types and selection of cutting tools',
            'Difference between cross filing and draw filing techniques',
            'Practical filing of metal work pieces to a smooth finish'
          ]
        },
        {
          name: 'Power Tools',
          learningOutcome: 'Identify simple power tools used in fabrication and welding and demonstrate correct operating and handling techniques.',
          knowledge: [
            'Types of simple power tools used in fabrication and welding',
            'Correct operating and handling techniques for power tools'
          ]
        },
        // ---------- SECOND TERM ----------
        {
          name: 'Workshop Equipment',
          learningOutcome: 'Identify types of workshop equipment and describe their functions, advantages, and correct handling techniques.',
          knowledge: [
            'Types of workshop equipment: bending machines, rolling machines, swaging machines',
            'Functions and advantages of common workshop equipment',
            'Correct handling techniques for workshop equipment'
          ]
        },
        {
          name: 'Classification of Metals: Ferrous Metals',
          learningOutcome: 'Describe the production and properties of ferrous metals. This topic shares its learning objectives with the following week on non-ferrous metals, both covering the classification of metals by production method and properties such as ductility and malleability.',
          knowledge: [
            'Meaning and production methods of ferrous metals',
            'Properties of ferrous metals such as ductility and malleability, using examples like cast iron and mild steel'
          ]
        },
        {
          name: 'Classification of Metals: Non-Ferrous Metals',
          learningOutcome: 'Describe the production and properties of non-ferrous metals, continuing directly from the previous week\'s shared objectives on metal classification.',
          knowledge: [
            'Meaning and production methods of non-ferrous metals',
            'Properties of non-ferrous metals using examples such as aluminium, copper, zinc, and bronze'
          ]
        },
        {
          name: 'Cutting and Filing Operations',
          learningOutcome: 'Cut plates and rods to different shapes and sizes and file work pieces to a smooth finish using appropriate hand tools.',
          knowledge: [
            'Use of hacksaw, snips, and chisels to cut plates and rods to different shapes and sizes',
            'Filing methods for achieving a smooth finish on work pieces'
          ]
        },
        {
          name: 'Sheet Metal Workshop',
          learningOutcome: 'Identify basic sheet metal tools and equipment and demonstrate correct marking-out techniques for sheet metal work.',
          knowledge: [
            'Basic sheet metal tools and equipment and their functions',
            'Correct marking-out techniques for sheet metal work'
          ]
        },
        {
          name: 'Joints and Applications in Fabrication and Welding',
          learningOutcome: 'Identify various types of joints used in fabrication and welding and design simple artifacts using them.',
          knowledge: [
            'Types of joints: paned-down bottom joint, knocked-up bottom joint, folded/grooved seam joint, lap joint, butt joint',
            'Designing and making simple artifacts using these joints'
          ]
        },
        {
          name: 'Surface Preparation I',
          learningOutcome: 'State the steps involved in preparing metal surfaces for welding. This topic shares its learning objectives with the two following weeks, which together cover the full sequence of surface preparation stages.',
          knowledge: [
            'Steps involved in preparing metal surfaces for welding',
            'Assisting in demonstrations of the initial stages of surface preparation'
          ]
        },
        {
          name: 'Surface Preparation II',
          learningOutcome: 'Continue practicing the stages of metal surface preparation for welding, building on the objectives shared across this three-week block.',
          knowledge: [
            'Intermediate stages of surface preparation for welding',
            'Group presentations with diagrams illustrating surface preparation stages'
          ]
        },
        {
          name: 'Surface Preparation III',
          learningOutcome: 'Complete and consolidate the sequence of metal surface preparation stages for welding, sharing objectives with the two preceding weeks.',
          knowledge: [
            'Final stages of surface preparation for welding',
            'Practical demonstration of a fully prepared metal surface ready for welding'
          ]
        },
        // ---------- THIRD TERM ----------
        {
          name: 'Introduction to Welding',
          learningOutcome: 'Define welding, state its two main types, and differentiate between arc welding and gas welding.',
          knowledge: [
            'Definition of welding and its two main types: arc welding and gas welding',
            'Differences between arc welding and gas welding',
            'Basic procedure for striking an arc and laying a bead'
          ]
        },
        {
          name: 'Welding Machines and Accessories',
          learningOutcome: 'Identify welding tools and equipment and sketch and label the basic equipment used in oxy-acetylene and electric arc welding.',
          knowledge: [
            'Parts and accessories of oxy-acetylene welding equipment',
            'Parts and accessories of electric arc-welding equipment'
          ]
        },
        {
          name: 'Principles of Welding',
          learningOutcome: 'Differentiate between gas welding and arc welding principles and apply appropriate safety measures for each.',
          knowledge: [
            'Differences between gas welding and arc welding principles',
            'Safety measures and appropriate situations for using each welding method',
            'Step-by-step procedure for striking an arc and laying beads'
          ]
        },
        {
          name: 'Gas Welding',
          learningOutcome: 'State the function of the oxy-acetylene set and identify its components used to weld metals.',
          knowledge: [
            'Function of the oxy-acetylene set in gas welding',
            'Components: needle valves, cylinders, regulators, flame traps, flash-back arrestors, hose, gas economizer, welding torch, and nozzle'
          ]
        },
        {
          name: 'Flame Types (Oxidizing, Neutral, Carburizing)',
          learningOutcome: 'Identify the three oxy-acetylene flame types and explain their characteristics and appropriate uses.',
          knowledge: [
            'Characteristics of the three oxy-acetylene flame types: oxidizing, neutral, and carburizing',
            'Appropriate uses of each flame type in cutting and welding'
          ]
        },
        {
          name: 'Oxy-Acetylene Welding Torch',
          learningOutcome: 'Describe the function and working principle of the oxy-acetylene welding torch and demonstrate its correct use and adjustment.',
          knowledge: [
            'Functions and working principle of the oxy-acetylene welding torch',
            'Parts of the torch and how to adjust it for use'
          ]
        },
        {
          name: 'Oxy-Acetylene Cutting',
          learningOutcome: 'State the two types of oxy-fuel cutting, describe the cutting principle involved, and differentiate the cutting torch from the welding torch.',
          knowledge: [
            'Two types of oxy-fuel cutting and the cutting principle involved',
            'Use and adjustment of the cutting torch, and how it differs from the welding torch'
          ]
        },
        {
          name: 'Common Gas Preparation (Acetylene)',
          learningOutcome: 'Describe the preparation of acetylene gas from calcium carbide and apply the necessary safety precautions.',
          knowledge: [
            'Preparation of acetylene gas from calcium carbide using the carbide-to-water and water-to-carbide methods',
            'Safety precautions when preparing and handling acetylene gas'
          ]
        }
      ]
    }
  ]
};
