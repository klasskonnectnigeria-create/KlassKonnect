// SS2 Auto Body Repairs — First Term, Second Term and Third Term
// Source: SchemeofWork.com (Unified/Lagos State) "Auto Body Repair and Spray Painting Scheme of Work SSS2"
// URL: https://schemeofwork.com/auto-body-repair-and-spray-painting-scheme-of-work-sss2
// Source names the subject "Auto Body Repair and Spray Painting" — treated as the same
// trade subject as the requested "Auto Body Repairs" (consistent with the SS1 entry, commit
// 9c853bf7, and the SS3 entry, commit 350c1a20).
// Source does not claim NESRI-2025 compliance, so 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Welcome Test, Mid-term Break, Revision/Project, Examination) are
// excluded across all three terms. Third Term weeks 10 and 11 share one set of learning
// objectives/activities in the source ("Techniques involved in Body preparation for
// painting") and are kept as a single combined topic rather than duplicated.

export const curriculumData = {
  subject: 'Auto Body Repairs',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Auto Body Repairs',
      topics: [
        // ---- First Term ----
        {
          name: 'Safety Precautions in the Auto Body Painting Workshop',
          learningOutcome: 'State and demonstrate the safety precautions to be observed when using spray paint tools and equipment, and identify toxic and inflammable substances used in the Auto Body workshop.',
          knowledge: [
            'Precautions to be observed in the Auto Body spray paint workshop',
            'Identification of toxic and inflammable substances used in the Auto Body workshop',
            'Demonstration of precautionary measures using paint boots, respirator masks, hand gloves, overalls and workshop manuals'
          ]
        },
        {
          name: 'Materials and Equipment for Auto Body Repair and Spray Painting',
          learningOutcome: 'Identify materials, tools and equipment used in the Auto Body spray workshop, state their uses, and carry out simple maintenance and correct storage.',
          knowledge: [
            'Uses of the rubber squeegee, paint measuring meter and spray gun',
            'Guides to be observed when using materials and equipment',
            'Simple maintenance and correct storage of materials and tools'
          ]
        },
        {
          name: 'Paint Materials',
          learningOutcome: 'Identify types of paint used in the Auto Body workshop, differentiate between undercoat and top coat, and mix paint correctly to obtain the original colour.',
          knowledge: [
            'Types of undercoat (primer, primer surfacer) and top coat (lacquers, enamel paints)',
            'Differences between undercoat and top coat',
            'Applying putty on the Auto Body before spray painting',
            'Method of obtaining another colour when re-spraying a car body'
          ]
        },
        {
          name: 'Care and Maintenance of Tools and Equipment',
          learningOutcome: 'Identify a faulty spray gun, replace leaking spray gun parts, and clean the nozzle, paint pot and other spray paint tools using appropriate cleaning agents.',
          knowledge: [
            'Cleaning agents used in the Auto Body spray painting workshop',
            'Tools used to dismantle and assemble a spray gun',
            'Cleaning the component parts and nozzle of a spray gun with solvent and brush before reassembly'
          ]
        },
        {
          name: 'Minor Auto Body Repair Work',
          learningOutcome: 'Identify tools used in minor repairs and carry out minor Auto Body repair, including basic methods of straightening the Auto Body.',
          knowledge: [
            'Aligning metal with a power jack',
            'Pulling metal with pull rods and side hammers, and with pull taps using a pry bar',
            'Heat shrinking metal to restore shape without additional stretching'
          ]
        },
        {
          name: 'Major Auto Body Repair Work and Types of Auto Body',
          learningOutcome: 'List the main sections of the Auto Body, state basic alignment principles, and identify the types of Auto Body construction and aluminium panel repair steps.',
          knowledge: [
            'Main Auto Body sections: front engine component, passenger section, rear section',
            'Quarter panel cutting and lightweight panel/damaged vehicle alignment',
            'Types of Auto Body: integral body, composite body, all-metal construction, all-wood/fibreglass construction',
            'Steps involved in aluminium panel and aluminium deck lid repair'
          ]
        },
        {
          name: 'Removal and Replacement of Auto Body Subassemblies and Components',
          learningOutcome: 'Determine the best method of removing and replacing Auto Body components, interpret a manufacturer\'s manual for a particular vehicle, and dismantle and assemble Auto Body subassembly components.',
          knowledge: [
            'Tools used in loosening and tightening Auto Body component parts',
            'Auto Body subassemblies that can be dismantled and their location'
          ]
        },
        {
          name: 'Spray Gun and Accessories',
          learningOutcome: 'Identify the spray gun, pressure gun, siphon gun and their component parts, list precautions to observe when using a spray gun, and carry out simple maintenance.',
          knowledge: [
            'Types of spray gun',
            'Safety precautions required in the use of a spray gun',
            'Reasons for maintaining a spray gun and tools required to dismantle and assemble it'
          ]
        },
        {
          name: 'Surface Preparation',
          learningOutcome: 'Determine the extent of work and techniques involved in preparing unpainted panel surfaces, and carry out sealing and painting.',
          knowledge: [
            'Preparation of metal surfaces for spray painting',
            'Steps involved in carrying out surface preparation',
            'Conditions under which a sealer should be applied'
          ]
        },
        {
          name: 'Differentiating Between Undercoat and Top Coat',
          learningOutcome: 'State the importance and procedure of undercoat and top coat, and demonstrate how to mix paints.',
          knowledge: [
            'Types of paint: enamel paint and lacquers',
            'Undercoats: surface primer, putty/body filler, sealers',
            'Top coats: lacquers and enamel paints'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Spray Gun and Accessories and Faulty Spray Gun',
          learningOutcome: 'Identify various sizes and makers of spray guns, state the two basic types of spray gun, identify component parts, and carry out simple maintenance.',
          knowledge: [
            'Precautions to observe when using a spray gun',
            'Spray gun parts: air cap, fluid needle, air valve, trigger, gun body, hoses',
            'Tools required to dismantle and assemble a spray gun'
          ]
        },
        {
          name: 'Cleaning Agents Used in the Auto Painting Shop',
          learningOutcome: 'Identify faulty parts of a spray gun, identify cleaning agents, and describe methods of cleaning the spray gun, paint pot and tools.',
          knowledge: [
            'Identification of pressure feed gun, siphon gun and gravity spray gun',
            'Cleaning agents: solvent, thinner',
            'Spray gun parts: air cap, fluid needle, trigger gun, body, cup'
          ]
        },
        {
          name: 'Basic Methods of Straightening Auto Body',
          learningOutcome: 'Identify basic methods and tools required for straightening the Auto Body and demonstrate their use in carrying out repairs.',
          knowledge: [
            'Aligning metal with a power jack; pulling metal with a sledge hammer',
            'Using a pry bar and pull taps to pull metal',
            'Heat shrinking metal to restore its original shape',
            'Tools used: hammers, hand dollies, spoons, spanners, files, screwdrivers'
          ]
        },
        {
          name: 'Basic Tools Used in Minor Repairs',
          learningOutcome: 'Identify basic tools required for minor repairs, determine the best method of removing and replacing damaged Auto Body components, and list the materials needed.',
          knowledge: [
            'Identifying a quarter panel and demonstrating how to cut it',
            'Repairing and aligning body sections',
            'Tools: hammers, spoons, files, dollies'
          ]
        },
        {
          name: 'Auto Body Repair and Types of Auto Body Construction',
          learningOutcome: 'Identify and differentiate between the types of Auto Body construction used in vehicles.',
          knowledge: [
            'All-metal construction',
            'All-wood construction',
            'Composite construction',
            'Integral construction'
          ]
        },
        {
          name: 'Basic Alignment Principles',
          learningOutcome: 'State guides to basic alignment principles and the process of carrying out damaged vehicle alignment, including quarter panel sectioning.',
          knowledge: [
            'Lightweight jacks and hydraulic equipment used without a heat floor, or rack type',
            'Care needed when working on a unitised body',
            'Straightening jacks, hydraulic pump and extension, and grinder machine'
          ]
        },
        {
          name: 'General Rules and Regulations in Auto Body',
          learningOutcome: 'Define and list the workshop and personal safety rules and regulations in the Auto Body workshop, identify safety equipment, and state the importance of workshop safety.',
          knowledge: [
            'Safety rules and regulations in the Auto Body repair workshop',
            'Safety equipment: fire extinguishers, overalls, safety boots, nose masks, goggles, hand gloves',
            'Dress code to be observed in the workshop and reporting of faulty machines/equipment'
          ]
        },
        {
          name: 'Tools Used When Carrying Out Minor Auto Body Repair Work',
          learningOutcome: 'Identify minor Auto Body repair work and the tools and methods used for straightening the Auto Body.',
          knowledge: [
            'Straightening tools: bolt cutters, car stands, C-clamps, cold chisels, drill sets',
            'Bolt extension, hand jacks, bench grinder, metal shears, pry bars, hacksaws, hole saws',
            'Fire extinguisher and other workshop safety items'
          ]
        },
        {
          name: 'Identification of Tools and Equipment for Auto Body Repair and Their Uses',
          learningOutcome: 'List and identify the tools and equipment used in Auto Body repair, use them appropriately, and list safety precautions when using them.',
          knowledge: [
            'Tools: hacksaw, hammers, hand dollies, spoons, files, cold chisels, hand fender',
            'Equipment: oxyacetylene welding, welding nozzles, drilling machine, grinding machine, air compressor, cutting machine, metal shears, hand jacks, regulator'
          ]
        },
        {
          name: 'Care and Maintenance of Tools Used in Auto Body',
          learningOutcome: 'Define maintenance and its types, and explain the manufacturer\'s maintenance guide for tools and equipment.',
          knowledge: [
            'Predictive maintenance',
            'Preventive maintenance',
            'Corrective maintenance'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Method of Removing and Replacing Damaged Auto Components',
          learningOutcome: 'Determine the best method of removing and replacing damaged Auto Body components and interpret the manufacturer\'s manual for a particular vehicle.',
          knowledge: [
            'Dismantling and assembling Auto Body subassembly component parts',
            'Tools used in loosening and tightening Auto Body components',
            'Cutting tools and equipment: spanners, screwdrivers, pliers, hammers, chisels, hacksaw, pry bar, metal shears'
          ]
        },
        {
          name: 'Analysis of the Manufacturer\'s Manual as It Relates to a Particular Vehicle',
          learningOutcome: 'Identify the manufacturer\'s manual for a given vehicle make and interpret the recommended metal and procedures to be used.',
          knowledge: [
            'Manufacturer\'s manuals for Ford, Toyota and Honda vehicles',
            'Interpretation of manufacturer specifications for repair work'
          ]
        },
        {
          name: 'Identification and Uses of Various Tools in Dismantling and Assembling Auto Body Component Parts',
          learningOutcome: 'Identify component parts for removal and replacement of the Auto Body, and identify tools and equipment used for the task.',
          knowledge: [
            'Dismantling and assembling Auto Body component parts',
            'Tools required: hacksaw, chisel, hammer, metal shears, spanners',
            'Equipment: oxyacetylene welding machine, grinding machine'
          ]
        },
        {
          name: 'Tools Used in Loosening and Tightening Auto Body Component Parts',
          learningOutcome: 'Identify the various tools used in loosening and tightening Auto Body component parts.',
          knowledge: [
            'Hammers, dollies, spoons, files, pliers, pry bar',
            'Hacksaw, metal shears, chisel, punch, scriber, try square'
          ]
        },
        {
          name: 'Spray Gun Accessories',
          learningOutcome: 'List the types and component parts of spray guns used in the Auto Body repair workshop and state manufacturer maintenance guidance.',
          knowledge: [
            'Pressure feed spray gun, siphon spray gun, gravity spray gun',
            'Component parts: air cap, fluid needle, air valve, trigger, gun body, cup',
            'Precautions in the use of a spray gun'
          ]
        },
        {
          name: 'Various Component Parts of the Spray Gun',
          learningOutcome: 'Identify types of spray gun used in the Auto Body workshop and demonstrate use of the spray gun to spray.',
          knowledge: [
            'Component parts of the siphon cup type spray gun: cartridge-type air valve, passage for paint, compressed air fitting, alternate air entrance, cup'
          ]
        },
        {
          name: 'Types of Auto Body Fillers',
          learningOutcome: 'Identify various types of Auto Body filler and apply body filler correctly to a dent to restore the panel contour.',
          knowledge: [
            'Plastic fillers, fibreglass filler and body solder',
            'Mixing filler with the correct amount of hardener until it becomes one colour',
            'Applying the mixture with a plastic spreader, shaping with a speed file, and sanding smooth'
          ]
        },
        {
          name: 'Surface Preparation of Painted Panel Surface',
          learningOutcome: 'Determine the techniques and quantity of work involved in preparing a painted panel surface and carry out sealing and painting.',
          knowledge: [
            'Steps involved in carrying out surface panel preparation',
            'Conditions under which sealer should be applied',
            'Preparing an aluminium panel for painting, including the use of masking tape'
          ]
        },
        {
          name: 'Techniques Involved in Body Preparation for Painting',
          learningOutcome: 'Identify damaged panels for replacement and describe the steps involved in preparing aluminium panels and other surfaces for painting, including refinishing and sealing. This topic spans two consecutive weeks in the source sharing one set of learning objectives.',
          knowledge: [
            'Steps involved in preparing aluminium panels for painting',
            'Steps involved in surface preparation for painting and refinishing solvent panels',
            'Identification of metal surfaces and parts used in Auto Body for spray painting'
          ]
        }
      ]
    }
  ]
};
