// SS2 Metalwork — First, Second and Third Term
// Source: schemeofwork.com "Metal Work Scheme of Work SSS2 Lagos State"
// URL: https://schemeofwork.com/metal-work-scheme-of-work-sss2-lagos-state/
// The page is presented as an "Access free Unified Metal Work Scheme of work SSS2" and does
// not claim NESRI 2025 compliance -> curriculumVersion: legacy.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Mid-term Break, Revision/Examination, Examination) are
// excluded from all three terms.
// A handful of week/topic labels in the source have apparent OCR-style typos ("Centre latte",
// "Coding tools", "Cars and maintenance of machine tools", "Power saving machines"); these were
// corrected to their evident intended meaning ("Centre Lathe", "Cutting Tools", "Care and
// Maintenance of Machine Tools", "Power Sawing Machines") based on the surrounding content.
// The Second Term Week 5-6 entry had no topic label in the source table (content jumps
// straight to learning objectives about forging); named "Introduction to Forging: Tools and
// Equipment" here based on its content, which precedes the separate "Forging Operations" topic.

export const curriculumData = {
  subject: 'Metalwork',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Metalwork',
      topics: [
        // ---------------- FIRST TERM ----------------
        {
          name: 'Metal Joining: Hard and Soft Soldering',
          learningOutcome: 'Identify tools and equipment for soft and hard soldering, select the correct joint type for a job, describe and apply the procedure for making a soldered joint, and produce a simple soldered artefact.',
          knowledge: [
            'Tools and equipment used for soft and hard soldering',
            'Types of joints suitable for particular soldering jobs',
            'Procedure for making a simple soldered joint',
            'Making a simple artefact (e.g. a whistle) involving a soft and hard soldered joint'
          ]
        },
        {
          name: 'Soldering Project Work',
          learningOutcome: 'Design and construct a project incorporating both hard and soft soldered joints and document the process in a written report.',
          knowledge: [
            'Designing and making projects involving a hard soldered and a soft soldered joint',
            'Writing an individual or group report on the soldering project'
          ]
        },
        {
          name: 'Welding Operations: Gas and Arc Welding',
          learningOutcome: 'Identify tools and equipment for welding, differentiate between gas and electric arc welding, observe safety measures, and perform simple welding operations.',
          knowledge: [
            'Tools and equipment for oxy-acetylene (gas) welding and arc welding',
            'Differences between gas and electric arc welding, and situations where each is used',
            'Safety measures to observe during welding',
            'Types of welding techniques, their advantages, disadvantages and appropriate use',
            'Performing simple welding operations using gas and electric arc'
          ]
        },
        {
          name: 'Sheet Metal Work: Tools and Equipment',
          learningOutcome: 'Recognise and correctly handle basic sheet metal work tools and equipment, identify sheet metal joints, and apply sheet metalwork processes to make a simple artefact.',
          knowledge: [
            'Basic tools and equipment for sheet metal work (e.g. scriber, mallet, hammer, pipe stake)',
            'Joints and processes used in sheet metal work',
            'Planning the solution to an identified problem using sheet metal',
            'Making a simple artefact, e.g. a trashcan or funnel'
          ]
        },
        {
          name: 'Pattern Development',
          learningOutcome: 'Develop patterns for rectangular, cylindrical and conical forms and transfer and cut them onto sheet metal.',
          knowledge: [
            'Methods of pattern development',
            'Types of pattern',
            'Laying out and cutting out a pattern',
            'Observing pattern-making procedures, e.g. via a visit to a local casting industry'
          ]
        },
        {
          name: 'Steel Metalwork Project Submission',
          learningOutcome: 'Complete and submit a steel metalwork design project demonstrating the skills covered during the term.',
          knowledge: [
            'Submission of a steel metalwork design project for assessment'
          ]
        },
        // ---------------- SECOND TERM ----------------
        {
          name: 'Heat Treatment of Plain Carbon Steel',
          learningOutcome: 'Describe how plain carbon steel behaves when heated using the iron-carbon equilibrium diagram, describe heat treatment processes, quench steel after hardening and tempering, and apply heat treatment when making artefacts.',
          knowledge: [
            'Behaviour of plain carbon steel when heated, referencing the iron-carbon equilibrium diagram',
            'Heat treatment processes: hardening, tempering and quenching',
            'Quenching media, e.g. coal, brine, water and air',
            'Applying heat treatment processes to strengthen and modify a practical work piece'
          ]
        },
        {
          name: 'Introduction to Forging: Tools and Equipment',
          learningOutcome: 'Recognise forging as a useful metalworking skill, identify forging tools and equipment, and handle them correctly.',
          knowledge: [
            'Forging as a process of heating and shaping metal',
            'Forging tools and equipment, e.g. flatters, swages, anvil, rake',
            'Correct handling techniques for forging tools in the workshop'
          ]
        },
        {
          name: 'Forging Operations',
          learningOutcome: 'Outline and perform forging operations such as upsetting, drawing down, flattening and bending, and design a project applying these operations.',
          knowledge: [
            'Forging operations: upsetting, drawing down, flattening and bending',
            'Hand forging technique',
            'Designing and making a project involving forging operations'
          ]
        },
        {
          name: 'Cutting Tools: Hacksaw and Sawing',
          learningOutcome: 'Identify types of hacksaw frame and blade, examine hacksaw blade teeth, and select the appropriate blade for a given job.',
          knowledge: [
            'Types of hacksaw frame',
            'Types of hacksaw blade and their uses',
            'Examining the pitch and set of hacksaw blade teeth',
            'Selecting the recommended hacksaw blade for different jobs'
          ]
        },
        // ---------------- THIRD TERM ----------------
        {
          name: 'Power Sawing Machines',
          learningOutcome: 'Describe power sawing machines, perform power sawing operations, and observe basic safety precautions when using them.',
          knowledge: [
            'Description and working operations of power sawing machines',
            'Basic safety precautions to observe when using power sawing machines',
            'Observing power sawing machine operation, e.g. during a workshop visit'
          ]
        },
        {
          name: 'Centre Lathe',
          learningOutcome: 'Identify types and major parts of the centre lathe, identify cutting tools used on it, perform basic lathe operations, and carry out basic maintenance.',
          knowledge: [
            'Types of lathe machines',
            'Major parts of the centre lathe and their functions',
            'Cutting tools used on the centre lathe and their functions',
            'Basic/simple lathe turning operations',
            'Basic maintenance, e.g. topping up gearbox oil and greasing essential parts'
          ]
        },
        {
          name: 'Shaping Machine',
          learningOutcome: 'Identify the major parts and cutting tools of the shaping machine, perform simple shaping operations, and carry out basic maintenance.',
          knowledge: [
            'Major parts of the shaping machine and their functions, including the quick return motion mechanism and clapper box',
            'Shaping machine cutting tools',
            'Basic vertical and horizontal shaping operations, with attention to safety measures',
            'Solutions to common problems experienced during shaping operations',
            'Basic maintenance of the shaping machine'
          ]
        },
        {
          name: 'Milling Machine',
          learningOutcome: 'Describe types of milling machine, identify their parts and functions, explain basic principles of milling, and perform basic milling operations.',
          knowledge: [
            'Types of milling machine: horizontal, vertical and universal',
            'Parts and functions of the milling machine',
            'Basic principles of milling operations',
            'Aligning the work piece and setting up the cutter correctly',
            'Performing basic milling operations'
          ]
        },
        {
          name: 'Care and Maintenance of Machine Tools: Cutting Solutions and Lubricants',
          learningOutcome: 'Identify types of metal cutting solution and their functions, and mix soluble oil and water in the appropriate ratio for a given job.',
          knowledge: [
            'Metal cutting solutions and their functions for particular operations',
            'Types of cutting solution, including straight mineral oils and emulsified oils',
            'Mixing soluble oil and water using the appropriate ratio'
          ]
        },
        {
          name: 'Principles of Design',
          learningOutcome: 'Identify and define a design problem, state the benefits of solving it, and generate possible solutions.',
          knowledge: [
            'Identifying a design problem in a given situation',
            'Defining the identified problem',
            'Stating the benefits to be derived from solving a design problem',
            'Generating possible solutions and preparing an operational sequence/cutting list for a project'
          ]
        },
        {
          name: 'Elements of Design in Metalwork',
          learningOutcome: 'Explain the functions of lines, shapes, mass, texture and colour in design, state the stages of a project, and explain factors involved in selecting a design.',
          knowledge: [
            'Functions of lines, shapes, mass, texture and colour in design',
            'Stages of a metalwork design project',
            'Factors involved in selecting a type of design',
            'Evaluating a completed project for functionality and appropriateness'
          ]
        }
      ]
    }
  ]
};
