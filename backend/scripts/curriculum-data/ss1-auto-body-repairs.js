// SS1 Auto Body Repairs — First Term, Second Term and Third Term
// Source: SchemeofWork.com (Lagos State Unified) "Auto Body Repair and Spray Painting Scheme of Work SSS1"
// URL: https://schemeofwork.com/auto-body-repair-and-spray-painting-scheme-of-work-sss1/
// Source names the subject "Auto Body Repair and Spray Painting" — treated as the same
// trade subject as the requested "Auto Body Repairs" (consistent with the SS3 entry for
// this subject, commit 350c1a20).
// Source does not claim NESRI-2025 compliance, so 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid-term Break, Welcome Test, Revision/Project, Examination) are excluded.
// First Term weeks 1-3 are missing/garbled in the source table itself (a malformed row with
// no week number or topic text precedes week 4), so they are omitted rather than guessed —
// First Term therefore starts at week 4. Two rows in First Term (between weeks 8 and 11) and
// none elsewhere are missing their week-number cell in the source table; they are placed at
// weeks 9 and 10 based on their position between numbered rows 8 and 11.

export const curriculumData = {
  subject: 'Auto Body Repairs',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Auto Body Repairs',
      topics: [
        // ---- First Term (weeks 1-3 omitted: missing/garbled in source) ----
        {
          name: 'Safety Equipment and Identification of Tools and Equipment',
          learningOutcome: 'Identify tools used in Auto Body Repair and Spray Painting and demonstrate the use of Auto Body Repair and Spray Painting equipment.',
          knowledge: [
            'Handling the hammer and dollies',
            'Operating the drilling machine',
            'Operating the grinding machine',
            'Locations of safety equipment in the workshop'
          ]
        },
        {
          name: 'Sources and Causes of Accidents in the Auto Body Repair Workshop',
          learningOutcome: 'State the sources and causes of accidents in the Auto Body Repair workshop, identify them, and define prevention of accidents.',
          knowledge: [
            'Cleaning oil and water from the workshop floor with saw dust and dry sand',
            'No horse play in the workshop',
            'Sources of accidents in the workshop and how to prevent them'
          ]
        },
        {
          name: 'Safety Precautions Relating to Inflammable Liquids, Rotating Machinery and Portable Electric Tools',
          learningOutcome: 'Define safety precautions and the dangers relating to inflammable liquids, identify and use rotating machinery, and list power tools and equipment/machines.',
          knowledge: [
            'Uses of fire extinguishers',
            'Operating power tools: drilling machine, grinding machine, sharpening machine, cutting machine',
            'Reporting faulty machine, equipment and tools',
            'Items found in the First Aid box'
          ]
        },
        {
          name: 'Safety Precautions for Dangerous Gases in Oxy-Acetylene Welding',
          learningOutcome: 'State the safety precautions involved in oxy-acetylene welding, identify the various parts of oxy-acetylene welding equipment, and describe the installation of welding equipment.',
          knowledge: [
            'Precautions to observe when carrying out oxy-acetylene welding',
            'Parts of oxy-acetylene welding equipment: oxygen cylinder, acetylene cylinder, regulators, hose, pipe, nozzles, torch, valves',
            'Steps to be taken when cleaning the nozzle'
          ]
        },
        {
          name: 'Methods of Preventing Accidents in the Auto Body Repair Workshop',
          learningOutcome: 'List measures for preventing accidents in the Auto Body Repair workshop, identify and report faulty machines/tools/equipment, and administer basic first aid treatment.',
          knowledge: [
            'Procedure for reporting a faulty machine, equipment or tool',
            'Basic first aid items found in the First Aid box',
            'Use of fire extinguisher, hand gloves, overall, goggles and safety boots'
          ]
        },
        {
          name: 'Types of Hand Tools in the Auto Body Repair Workshop',
          learningOutcome: 'Identify different types of hand tools used in the Auto Body Repair workshop, explain their uses, and identify power tools and equipment used in the workshop.',
          knowledge: [
            'Hand tools: hammers, dollies, spanners, files, body spoons, ratchets',
            'Power tools: drilling machine, grinding machine, power jacks, sanders',
            'Equipment: body jack, air compressor'
          ]
        },
        {
          name: 'Uses of Hand Tools, Power Tools and Equipment on the Vehicle Body Panel',
          learningOutcome: 'Identify hand tools, power tools and equipment used in the Auto Body Repair workshop and demonstrate their uses on the vehicle body panel.',
          knowledge: [
            'Demonstrating the uses of hand tools on the car panel',
            'Demonstrating the uses of power tools on the car body panel',
            'Demonstrating the uses of equipment on the vehicle body panel'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Power Tools and Equipment Used in the Auto Body Repair Workshop (I)',
          learningOutcome: 'Identify power tools and equipment used in the Auto Body Repair workshop and state their uses.',
          knowledge: [
            'Identifying the uses of hammer, dollies, spanners, files, body spoons, ratchets',
            'Identifying power tools: drilling machine, grinding machine, body jack, air compressor'
          ]
        },
        {
          name: 'Power Tools and Equipment Used in the Auto Body Repair Workshop (II)',
          learningOutcome: 'Identify equipment used in the Auto Body Repair workshop and explain the uses of power tools and equipment, building on the previous week\'s introduction to these tools.',
          knowledge: [
            'Operating the power drilling machine',
            'Operating the power grinding machine',
            'Operating the body jack and air compressor'
          ]
        },
        {
          name: 'Maintenance of Power Tools and Equipment',
          learningOutcome: 'Define maintenance of power tools and equipment in the Auto Body Repair workshop and demonstrate how to clean and store tools.',
          knowledge: [
            'Method of cleaning tools, power tools and equipment',
            'Type of maintenance to carry out when using power tools'
          ]
        },
        {
          name: 'Preventive, Predictive and Corrective Maintenance',
          learningOutcome: 'Define preventive, predictive and corrective maintenance, and demonstrate/state the method of each.',
          knowledge: [
            'Preventive maintenance procedures',
            'Predictive maintenance procedures',
            'Corrective maintenance procedures'
          ]
        },
        {
          name: 'Care and Maintenance of Tools Used in the Auto Body Repair Workshop',
          learningOutcome: 'Explain the care and maintenance of tools and equipment, the arrangement of tools in the tool box, and the method of cleaning equipment.',
          knowledge: [
            'Arranging hand tools after cleaning into the tools box',
            'Cleaning machines with the appropriate cleaning solution'
          ]
        },
        {
          name: 'Materials Used in the Auto Body Workshop',
          learningOutcome: 'Identify various types of material used in the Auto Body Repair workshop, state their uses, and apply prepared body filler.',
          knowledge: [
            'Body fillers: plastic fillers, fibre glass fillers, body solder 30/70, body solder 40/60',
            'Body abrasives: sand paper (wet and dry), sanding disc',
            'Rivet pins: pop and solid rivets',
            'Sealers: rubber sealers, sear sealers, undercoating'
          ]
        },
        {
          name: 'Body Fillers — Plastic Fillers, Fibre Glass Filler and Body Solder',
          learningOutcome: 'Identify types of body fillers and body abrasives used in the Auto Body Repair workshop, and demonstrate the use of rivets, gum and body sealers.',
          knowledge: [
            'Preparing the body filler and applying it correctly to the panel',
            'Preparing the fibreglass format and following the correct procedure when applying it'
          ]
        },
        {
          name: 'Auto Body Shop Materials and Their Uses — Body Abrasives and Sealers',
          learningOutcome: 'Identify types of auto body abrasives and differentiate between body abrasives and sealers.',
          knowledge: [
            'Applying undercoating material and sand paper for smoothing the panel',
            'Identifying body abrasives'
          ]
        },
        {
          name: 'Irons and Steels',
          learningOutcome: 'Define cast iron and its types, explain carbon steel and its types, and differentiate between iron and steel as used in the Auto Body Repair workshop.',
          knowledge: [
            'Types of cast iron: grey cast iron, white cast iron',
            'Types of carbon steel: mild steel, medium carbon steel',
            'Application of iron and steel in auto body repair'
          ]
        },
        {
          name: 'Types of Metals',
          learningOutcome: 'Define metal, list the types of metals, and differentiate between the types of metals.',
          knowledge: [
            'Ferrous metals and non-ferrous metals',
            'Examples: aluminum, iron, steel, cast iron'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Difference Between Ferrous and Non-Ferrous Metals',
          learningOutcome: 'Define ferrous and non-ferrous metals, differentiate between them, and list types of each.',
          knowledge: [
            'Ferrous metals: mild steel, cast iron, alloy steel',
            'Non-ferrous metals: aluminium, aluminium alloys, copper, brass, zinc, bronze, tin, rubber, asbestos, plastics'
          ]
        },
        {
          name: 'Properties of Metals — Fusibility, Malleability and Ductility',
          learningOutcome: 'Define fusibility, malleability and ductility and their applications, and differentiate between ductility and malleability.',
          knowledge: [
            'Identifying mild steel, cast iron, aluminium, copper and brass',
            'Applications of fusibility, malleability and ductility'
          ]
        },
        {
          name: 'Properties and Uses of Ferrous and Non-Ferrous Metals in Auto Body Construction',
          learningOutcome: 'State the properties and uses of ferrous metals and explain the properties and uses of non-ferrous metals as applied in Auto Body construction.',
          knowledge: [
            'Metal with elasticity used in constructing vehicle panels',
            'Metal with toughness used for torsion bars, anti-roll bars, springs and components constantly being twisted'
          ]
        },
        {
          name: 'Heat Treatment of Metals',
          learningOutcome: 'Define heat treatment of metals and list the types of heat treatment.',
          knowledge: [
            'Types of heat treatment: hardening, annealing, normalizing, case hardening, tempering'
          ]
        },
        {
          name: 'Importance of Heat Treatment on Metals',
          learningOutcome: 'State the types of heat treatment on metals, list the importance of heat treatment, and explain the heat treatment process.',
          knowledge: [
            'Demonstrating heat treatment processes using oxy-acetylene welding equipment, hammer, burners and thermometers'
          ]
        },
        {
          name: 'Types of Auto Body Repair Work (Vehicle Body Construction)',
          learningOutcome: 'State and identify the types of Auto Body construction used in the motor industry.',
          knowledge: [
            'Integral body construction',
            'Composite body construction'
          ]
        },
        {
          name: 'Minor and Major Auto Body Repair Work',
          learningOutcome: 'Identify minor Auto Body repair and the tools/steps used, and explain the steps and tools/equipment needed for major Auto Body repair.',
          knowledge: [
            'Identifying Auto Body repair tools used in the workshop',
            'Identifying types of Auto Body defects',
            'Straightening auto body: aligning the metal with a jack, pulling metal with a hammer and pry-bar'
          ]
        },
        {
          name: 'Oxy-Acetylene Welding Equipment and Safety Precautions',
          learningOutcome: 'Identify the acetylene and oxygen cylinders, state the difference between them, and discuss the safety precautions involved in operating and using oxy-acetylene welding equipment.',
          knowledge: [
            'Oxygen cylinder, acetylene cylinder, regulator, safety chain, pipe, nozzle, torch, valve',
            'Safety precautions involved in operation'
          ]
        },
        {
          name: 'Component Parts of Oxy-Acetylene Welding Equipment',
          learningOutcome: 'Differentiate between the oxygen cylinder and acetylene cylinder, state the purpose of regulation, identify and select welding nozzle sizes for various work, and carry out the oxy-acetylene welding procedure.',
          knowledge: [
            'Component parts of oxy-acetylene welding equipment: oxygen cylinder, acetylene cylinder, regulators',
            'Selecting welding nozzle sizes for various work',
            'Carrying out the welding process'
          ]
        }
      ]
    }
  ]
};
