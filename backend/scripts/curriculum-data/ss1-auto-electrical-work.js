// SS1 Auto Electrical Work — First Term, Second Term and Third Term
// Source: AseiClass "Recent Scheme of Work on Auto Electrical Works — Syllabus for Senior Secondary"
// URL: https://aseiclass.com/catalog/auto_elect_works_senior_class_scheme_work.php
// This page presents a three-column (SSS1/SSS2/SSS3) grade-differentiated scheme of work —
// only the SSS1 column was used here. The raw HTML was fetched and parsed directly (not just
// summarized) to confirm the SSS1 column holds genuinely distinct real content from the SSS2
// and SSS3 columns on every non-administrative row (verified programmatically: SSS1 topic
// text differs from SSS2/SSS3 text on every content week; only the "Revision" and "Revision
// and Examination" administrative rows are identical across all three columns). The site
// carries a generic site-wide banner ("NEW & UPDATED 2025 FG/NERDC SCHEME OF WORK IN ALL
// SUBJECTS") but this specific subject is listed under the site's "Odd"/legacy-name subject
// group (not the "NEW"-renamed 2025 group), so this content is not treated as an explicit
// NESRI-2025 claim; 'legacy' is used per the versioning rule, consistent with the SS2 entry
// for this same subject.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Week 1 "Revision" and Week 10 "Revision and Examination" each term)
// are excluded across all three terms. schemeofwork.com (Federal/Lagos/Osun), syllabus.ng,
// and ecolebooks.com have no scheme of work specific to "Auto Electrical Work" for SS1 (only
// related but distinct subjects, e.g. Auto Mechanical Work and Electrical Installation and
// Maintenance Work) — this was the basis of an earlier "unresolved" report for this exact
// grade+subject (commit 974b912c). This entry corrects that report: the AseiClass source was
// missed in that earlier search and provides a genuine SSS1-specific breakdown, as already
// established when SS2 was successfully sourced from the same page's SSS2 column.
// Several consecutive weeks in the source repeat one topic verbatim (some explicitly labeled
// "(Cont.)", some simply repeating the same Theme/Topic/Content without that label); each such
// week is kept as its own topic entry per the step-4 rule, with the shared-objective
// relationship noted in the learningOutcome text.

export const curriculumData = {
  subject: 'Auto Electrical Work',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Auto Electrical Work',
      topics: [
        // ---- First Term ----
        {
          name: 'Concept of Battery',
          learningOutcome: 'Identify and distinguish motor vehicle batteries and primary cell batteries by type, and carry out inspection of a motor vehicle battery.',
          knowledge: [
            'Motor batteries and primary cell batteries, e.g. lead acid and nickel alkaline types',
            'Inspection of motor vehicle battery and other batteries'
          ]
        },
        {
          name: 'Uses of Battery',
          learningOutcome: 'Explain the uses of a battery in a motor vehicle, including its assembly on the vehicle and its use as a power source.',
          knowledge: [
            'Battery assembly on a vehicle',
            'Battery as a power source in soldering'
          ]
        },
        {
          name: 'Battery Types and Construction',
          learningOutcome: 'Distinguish between different types of secondary cell vehicle battery by their construction, similarities and differences.',
          knowledge: [
            'Different types of secondary cell vehicle battery',
            'Similarities and differences between them'
          ]
        },
        {
          name: 'Battery Types and Construction (Continued)',
          learningOutcome: 'Continue studying the types and construction of secondary cell vehicle batteries to reinforce understanding of their similarities and differences.',
          knowledge: [
            'Different types of secondary cell vehicle battery',
            'Similarities and differences between them'
          ]
        },
        {
          name: 'Purpose of the Starting System',
          learningOutcome: 'Locate the starter motor within the engine compartment and explain the purpose of the starting system.',
          knowledge: [
            'Starter motor location in the engine compartment'
          ]
        },
        {
          name: 'Starter Circuit Diagram',
          learningOutcome: 'Read and interpret a starter circuit diagram, identifying the location and sequential arrangement of starter circuit components in a vehicle.',
          knowledge: [
            'Starter circuit components located in their respective positions in a vehicle',
            'Sequential arrangement of these units in a vehicle'
          ]
        },
        {
          name: 'Types of Starter Motors',
          learningOutcome: 'Distinguish between axial and inertia pinion engagement types of starter motor.',
          knowledge: [
            'Axial pinion engagement',
            'Inertia pinion engagement'
          ]
        },
        {
          name: 'Types of Starter Motors (Continued)',
          learningOutcome: 'Continue studying axial and inertia pinion engagement starter motor types to reinforce understanding.',
          knowledge: [
            'Axial pinion engagement',
            'Inertia pinion engagement'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Purpose of the Ignition System',
          learningOutcome: 'Locate the ignition system assembly in a vehicle and explain its purpose.',
          knowledge: [
            'Ignition system assembly in its position in the vehicle'
          ]
        },
        {
          name: 'Ignition Circuit Diagram',
          learningOutcome: 'Read, draw and label an ignition circuit diagram.',
          knowledge: [
            'Reading, drawing and labeling the ignition circuit'
          ]
        },
        {
          name: 'Spark Plug: Uses and Construction',
          learningOutcome: 'Describe the location, construction and function of spark plugs, and explain how to change them.',
          knowledge: [
            'Spark plugs in their locations in a vehicle',
            'Short and long reach plugs: constructional differences',
            'How to change spark plugs'
          ]
        },
        {
          name: 'Spark Plug: Uses and Construction (Continued)',
          learningOutcome: 'Continue studying spark plug location, construction and replacement to reinforce understanding.',
          knowledge: [
            'Spark plugs in their locations in a vehicle',
            'Short and long reach plugs: constructional differences',
            'How to change spark plugs'
          ]
        },
        {
          name: 'Purpose of the Charging System / Alternator Unit',
          learningOutcome: 'Explain the purpose of the charging system as a sub-system of the motor vehicle and identify the unique features of the alternator.',
          knowledge: [
            'The charging system assembly as a sub-system of a motor vehicle',
            'Alternator unique features'
          ]
        },
        {
          name: 'Charging Circuit Diagram',
          learningOutcome: 'Interpret a graphical and pictorial representation of the charging circuit and explain how to remove and fix charging system units.',
          knowledge: [
            'Graphical and pictorial representation of the charging circuit',
            'Need for diagrammatic representation of the charging system',
            'How to remove and fix the charging system units'
          ]
        },
        {
          name: 'Current Rectification from AC to DC',
          learningOutcome: 'Explain how current is rectified from AC to DC in the charging system, using diodes and commutator segments.',
          knowledge: [
            'One-way flow of current in diodes',
            'Commutator segment regulation of current flow'
          ]
        },
        {
          name: 'Current Rectification from AC to DC (Continued)',
          learningOutcome: 'Continue studying diode and commutator-based current rectification from AC to DC to reinforce understanding.',
          knowledge: [
            'One-way flow of current in diodes',
            'Commutator segment regulation of current flow'
          ]
        },

        // ---- Third Term ----
        {
          name: 'Purpose of the Lighting System',
          learningOutcome: 'Explain the need for lighting in a motor vehicle and identify the lights that are obligatory.',
          knowledge: [
            'Need for lighting in a motor vehicle',
            'Obligatory lights in a motor vehicle'
          ]
        },
        {
          name: 'Lighting Circuit Diagram',
          learningOutcome: 'Interpret and draw a lighting circuit diagram, identifying the units that make up the circuit.',
          knowledge: [
            'Interpretation and drawing of the lighting circuit diagram',
            'Identification of the units that make up the circuit'
          ]
        },
        {
          name: 'Types of Head Lamps',
          learningOutcome: 'Distinguish between sealed-type and open-ended head lamps by their construction features.',
          knowledge: [
            'Distinguishing features of the sealed type of head lamp',
            'Distinguishing features of the open-ended head lamp'
          ]
        },
        {
          name: 'Types of Head Lamps (Continued)',
          learningOutcome: 'Continue studying sealed-type and open-ended head lamp construction features to reinforce understanding.',
          knowledge: [
            'Distinguishing features of the sealed type of head lamp',
            'Distinguishing features of the open-ended head lamp'
          ]
        },
        {
          name: 'Concept and Need for the Auxiliary System',
          learningOutcome: 'Define the auxiliary system, explain its uses and identify the units that make it up.',
          knowledge: [
            'Concept of the auxiliary system: definition and uses',
            'Units in the auxiliary system'
          ]
        },
        {
          name: 'Concept and Need for the Auxiliary System (Continued)',
          learningOutcome: 'Continue studying the definition, uses and units of the auxiliary system to reinforce understanding.',
          knowledge: [
            'Concept of the auxiliary system: definition and uses',
            'Units in the auxiliary system'
          ]
        },
        {
          name: 'Auxiliary Circuit Diagram',
          learningOutcome: 'Interpret and draw an auxiliary circuit diagram, identifying the units classified as auxiliary.',
          knowledge: [
            'Interpretation and drawing of the auxiliary circuit diagram',
            'Identification of the units that are classified as auxiliary'
          ]
        },
        {
          name: 'Auxiliary Circuit Diagram (Continued)',
          learningOutcome: 'Continue studying interpretation and drawing of the auxiliary circuit diagram to reinforce understanding.',
          knowledge: [
            'Interpretation and drawing of the auxiliary circuit diagram',
            'Identification of the units that are classified as auxiliary'
          ]
        }
      ]
    }
  ]
};
