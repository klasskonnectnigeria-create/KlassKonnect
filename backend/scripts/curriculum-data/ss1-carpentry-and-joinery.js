// SS1 Carpentry and Joinery — First Term, Second Term and Third Term
// Source: SchemeofWork.com — "Carpentry and Joinery Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/carpentry-and-joinery-scheme-of-work-for-ss-1-federal/
// Page introduces itself as "Entrepreneurship (Trade Subjects) Senior Secondary Curriculum.
// Federal Carpentry and Joinery Scheme of Work for SS 1" — does not claim NESRI-2025
// compliance, and this subject predates the reform, so 'legacy' is used per the
// versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Raw HTML was fetched and parsed directly (not just summarized) to confirm the WEEK /
// TOPIC-CONTENT / ACTIVITIES table structure and content for all three terms.
// Administrative weeks (Revision and Examination at the end of each term) are excluded;
// Week 6 of First Term is absent from the source's own table (likely a mid-term
// break/test omitted by the source itself) and is not represented here.
// Several consecutive weeks share one broader topic heading in the source (e.g.
// "WORKSHOP RULES AND REGULATION" across Weeks 1-5 of First Term, "TIMBER" across Weeks
// 3-7 of Second Term, "IDENTIFICATION OF COMMON JOINTS" across Weeks 4-10 of Third Term)
// but each week's TOPIC/CONTENT column carries genuinely distinct sub-content, so each
// week is kept as its own topic with a content-specific name rather than being collapsed.

export const curriculumData = {
  subject: 'Carpentry and Joinery',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Carpentry and Joinery',
      topics: [
        // ---- First Term ----
        {
          name: 'Workshop Rules and Regulation: Personal Safety',
          learningOutcome: 'Explain personal safety practices in the carpentry workshop and demonstrate correct safety behaviour using displayed safety posters.',
          knowledge: [
            'Displays safety posters',
            'Demonstrates safety practices',
            'Use of the black board to reinforce safety instruction'
          ]
        },
        {
          name: 'Workshop Rules and Regulation: Machine Safety in a Workshop',
          learningOutcome: 'Explain workshop rules and regulations governing the safe use of machines.',
          knowledge: [
            'Explanation of workshop rules and regulations',
            'Use of posters to reinforce machine safety'
          ]
        },
        {
          name: 'Workshop Rules and Regulation: Electrical Safety',
          learningOutcome: 'Observe and demonstrate safe practices when working with electrical equipment in the workshop.',
          knowledge: [
            'Observation of electrical safety practices',
            'Demonstration of safety practices around electrical equipment'
          ]
        },
        {
          name: 'Workshop Rules and Regulation: Mechanical Fault Safety',
          learningOutcome: 'Demonstrate awareness of workshop rules relating to mechanical faults, using displayed posters as reference.',
          knowledge: [
            'Demonstration of some workshop rules',
            'Posters displayed on mechanical fault safety'
          ]
        },
        {
          name: 'Workshop Rules and Regulation: General Safety in a Workshop',
          learningOutcome: 'Explain general workshop safety rules and demonstrate the correct way of handling tools.',
          knowledge: [
            'Explanation of some workshop rules',
            'Demonstration of the right way of handling tools',
            'Observation of posters displayed'
          ]
        },
        {
          name: 'First Aid: First Aid Material in a Workshop',
          learningOutcome: 'List and state the uses of first aid materials kept in the workshop.',
          knowledge: [
            'List of first aid materials',
            'Uses of first aid materials',
            'Demonstration of the application of first aid'
          ]
        },
        {
          name: 'First Aid: First Aid Application',
          learningOutcome: 'Demonstrate the correct application of first aid in a workshop setting.',
          knowledge: [
            'Demonstration of first aid application',
            'Use of charts and posters'
          ]
        },
        {
          name: 'Hand Tools: Marking Out, Arriving and Abrading Tools',
          learningOutcome: 'Sketch marking out, driving and abrading hand tools and explain their uses.',
          knowledge: [
            'Sketching and explaining the uses of hand tools',
            'Student sketching of hand tools',
            'Use of charts and posters'
          ]
        },
        {
          name: 'Hand Tools: Pairing and Sharing Tools',
          learningOutcome: 'Explain how to maintain hand tools and sketch the tools discussed.',
          knowledge: [
            'Explanation of hand tool maintenance',
            'Sketching hand tools',
            'Use of charts and posters'
          ]
        },
        {
          name: 'Hand Tools: Holding and Supporting Tools',
          learningOutcome: 'Explain the types of holding and supporting tools used in carpentry work.',
          knowledge: [
            'Explanation of types of holding and supporting tools',
            'Use of hand tools and posters'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Hand Tools Maintenance: Maintenance of Planes and Saws',
          learningOutcome: 'Explain how plane blades and saw teeth ought to be sharpened, and demonstrate how to shape the blade.',
          knowledge: [
            'Explanation of blade and saw tack sharpening',
            'Demonstration of how to shape the blade',
            'Use of hand tools'
          ]
        },
        {
          name: 'Hand Tools Maintenance: Maintenance of Bench Vice, Cramps, Hammers',
          learningOutcome: 'Explain how to maintain the bench vice, cramps and hammers and sketch the tools.',
          knowledge: [
            'Explanation of tool maintenance',
            'Sketching the tools',
            'Use of charts and posters'
          ]
        },
        {
          name: 'Timber: Growth and Structure of a Timber',
          learningOutcome: 'Explain how timber grows and sketch the structure of timber.',
          knowledge: [
            'Explanation of how timber grows',
            'Sketches of timber structure',
            'Use of charts and posters'
          ]
        },
        {
          name: 'Timber: Timber Conversion',
          learningOutcome: 'Explain the methods of timber conversion and sketch the types of timber conversion.',
          knowledge: [
            'Explanation of methods of timber conversion',
            'Sketching types of timber conversion',
            'Use of charts and posters'
          ]
        },
        {
          name: 'Timber: Defects in Timber',
          learningOutcome: 'Explain the types of defects found in timber, using sample pieces to illustrate.',
          knowledge: [
            'Explanation of types of defects in timber',
            'Examination of pieces of timber showing defects'
          ]
        },
        {
          name: 'Timber: Prevention of Timber Defects (Timber Seasoning)',
          learningOutcome: 'Explain how timber defects can be prevented and demonstrate the ways of preventing them, including through seasoning.',
          knowledge: [
            'Explanation of prevention of timber defects',
            'Demonstration of the ways to prevent timber defects'
          ]
        },
        {
          name: 'Timber: Timber Preservation',
          learningOutcome: 'Explain the methods of timber preservation and sketch the items used for preservation.',
          knowledge: [
            'Explanation of methods of timber preservation',
            'Sketching items used for preservation'
          ]
        },
        {
          name: 'Sources and Products of Timber: Veneer',
          learningOutcome: 'Explain the method of cutting veneer and describe the types of veneer.',
          knowledge: [
            'Method of cutting veneer',
            'Types of veneer',
            'Use of charts and posters'
          ]
        },
        {
          name: 'Sources and Products of Timber: Manufactured Board (Plywood)',
          learningOutcome: 'Explain the types and uses of plywood and sketch the different types.',
          knowledge: [
            'Explanation of types and uses of plywood',
            'Sketching types of plywood',
            'Examination of different types of plywood'
          ]
        },
        {
          name: 'Sources and Products of Timber: Particle Board, Laminated Board',
          learningOutcome: 'Explain the types and uses of particle board and laminated board, and sketch the different types of manufactured board.',
          knowledge: [
            'Explanation of types and uses of particle board and laminated board',
            'Sketching different types of manufactured boards',
            'Use of charts and posters'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Timber Preparation: Sequence of Timber Preparation to Size',
          learningOutcome: 'Explain the steps in preparing wood to size and practise planing timber to flatness.',
          knowledge: [
            'Explanation of steps in preparing wood',
            'Student planing to flatness',
            'Use of small-size timber for practice'
          ]
        },
        {
          name: 'Timber Preparation: Developing Preliminary Sketches',
          learningOutcome: 'Explain three-dimensional lines in drawing and produce preliminary sketches of articles.',
          knowledge: [
            'Explanation of three-dimensional lines in drawing',
            'Sketching of articles',
            'Use of drawing instruments'
          ]
        },
        {
          name: 'Timber Preparation: Final and Working Drawing',
          learningOutcome: 'Explain how to use drawing instruments for final and working drawings, including other graphics, sectioning and exploded views.',
          knowledge: [
            'Use of instruments for final drawing',
            'Other graphic techniques',
            'Sectioning and exploded views'
          ]
        },
        {
          name: 'Identification of Common Joints: Widening Joints',
          learningOutcome: 'Explain and sketch the types of widening joints and examine projects made using them.',
          knowledge: [
            'Explanation of types of widening joints',
            'Sketching different types of widening joints',
            'Examination of a project made by a widening joint'
          ]
        },
        {
          name: 'Identification of Common Joints: Angle Joints',
          learningOutcome: 'Explain the various types of angle joints and sketch different types of framing joints.',
          knowledge: [
            'Explanation of various types of angle joints',
            'Sketching different types of framing joints',
            'Examination of projects made by angle joints'
          ]
        },
        {
          name: 'Identification of Common Joints: Types of Housing Joints',
          learningOutcome: 'Produce wood housing joints, such as through housing and stopped housing joints.',
          knowledge: [
            'Production of through housing joint',
            'Production of stopped housing joint'
          ]
        },
        {
          name: 'Identification of Common Joints: Framing Joints',
          learningOutcome: 'Explain and cut types of framing joints, such as mortise and tenon, and construct a small item using them.',
          knowledge: [
            'Explanation of types of framing joints (e.g. mortise and tenon)',
            'Construction of a small size stool',
            'Examination of a project produced from mortise and tenon'
          ]
        },
        {
          name: 'Identification of Common Joints: Halving Joints',
          learningOutcome: 'Demonstrate how to make and cut halving joints and produce a small item using them.',
          knowledge: [
            'Demonstration of how to make and cut halving joints',
            'Production of a small door frame',
            'Use of posters'
          ]
        },
        {
          name: 'Identification of Common Joints: Dovetail Joint',
          learningOutcome: 'Demonstrate how to mark and cut a dovetail joint.',
          knowledge: [
            'Demonstration of marking a dovetail joint',
            'Demonstration of cutting a dovetail joint',
            'Use of posters'
          ]
        },
        {
          name: 'Identification of Common Joints: Good Requirements of a Joint',
          learningOutcome: 'Explain the qualities of a good joint, such as rigidity and stability, and sketch different types of joints.',
          knowledge: [
            'Explanation of qualities of a good joint (rigidity, stability)',
            'Sketching different types of joints',
            'Use of posters'
          ]
        },
        {
          name: 'Abrasives: Abrading Tools',
          learningOutcome: 'Explain abrasives and abrading tools and demonstrate their use, identifying different grades of abrasives.',
          knowledge: [
            'Explanation of abrasives and abrading tools',
            'Demonstration of the use of abrasives and abrading tools',
            'Identification of the grades of abrasives'
          ]
        },
        {
          name: 'Abrasives: Types of Abrasives',
          learningOutcome: 'Explain how to choose the appropriate abrasive and identify where each grade of abrasive is best used.',
          knowledge: [
            'Explanation of how to make a choice of abrasives',
            'Identification of where every grade of abrasive is best used'
          ]
        }
      ]
    }
  ]
};
