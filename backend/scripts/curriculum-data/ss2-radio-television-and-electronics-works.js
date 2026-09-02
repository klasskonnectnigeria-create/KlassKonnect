// SS2 Radio, Television and Electronics Works — First, Second & Third Term
// Source: SchemeofWork.com — "Radio,Television and Electronics Works Scheme of Work SSS2"
// URL: https://schemeofwork.com/radiotelevision-and-electronics-works-scheme-of-work-sss2
// Source does not state any NESRI-2025 compliance claim; 'legacy' is used per the versioning
// rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid Term Break, Revision, Examination) are excluded. The Second Term
// "Welcome Test/Electronic Measuring Instrument" week and the Third Term "Welcome Test/Satellite
// Communication Systems" week are kept, since each is paired with real described content beyond
// the review portion. The First, Second and Third Term "Practical/Projects" weeks are kept since
// each has a concrete described project (Television Transmitter block-diagram work is covered
// under its own week; 9V power supply unit construction; satellite signal tracking).

export const curriculumData = {
  subject: 'Radio, Television and Electronics Works',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Radio, Television and Electronics Works',
      topics: [
        // ---- First Term ----
        {
          name: 'Safety Checks in Servicing Television Workshop',
          learningOutcome: 'Carry out safety checks on a television receiver before servicing, covering the power supply, picture tube, extra high voltage section and component ratings.',
          knowledge: [
            'Safety checks on the power supply section',
            'Safety checks on the picture tube',
            'Safety checks on the extra high voltage (EHV) section',
            'Checking component ratings before servicing'
          ]
        },
        {
          name: "Kirchhoff's Law",
          learningOutcome: "State Kirchhoff's first and second laws, represent them with diagrams and algebraic expressions, and apply them to solve circuit calculations.",
          knowledge: [
            "Definition of Kirchhoff's first and second laws",
            'Diagram and algebraic expression of each law',
            "Calculations involving Kirchhoff's laws",
            "Applications of Kirchhoff's laws"
          ]
        },
        {
          name: 'Fault Finding Equipment',
          learningOutcome: 'Identify common fault-finding equipment used in electronics servicing and state the uses of each.',
          knowledge: [
            'Identification and uses of the oscilloscope',
            'Identification and uses of the signal tracer',
            'Identification and uses of the digital frequency counter',
            'Identification and uses of the TV analyzer'
          ]
        },
        {
          name: 'Resistive, Inductive, Capacitive (RLC) Circuits',
          learningOutcome: 'Calculate capacitive and inductive reactance and analyze series and parallel RC, RL, LC and RLC circuits.',
          knowledge: [
            'Calculation of capacitive reactance',
            'Calculation of inductive reactance',
            'RC, RL, LC and RLC circuit analysis',
            'Series and parallel RLC circuits'
          ]
        },
        {
          name: 'Feedback in Amplifiers',
          learningOutcome: 'Explain the concept of feedback in amplifiers, distinguish negative from positive feedback, and evaluate the effects of negative feedback on bandwidth, noise, gain and distortion.',
          knowledge: [
            'Concept of feedback in an amplifier',
            'Differences between negative and positive feedback',
            'Advantages of negative feedback',
            'Effects of feedback on bandwidth, noise, gain and distortion'
          ]
        },
        {
          name: 'Oscillators and Multivibrators',
          learningOutcome: 'Explain the operating principles of common oscillator circuits and describe the types and operation of multivibrator circuits.',
          knowledge: [
            'Principle of Hartley, Colpitt and tuned-collector oscillators',
            'Types of multivibrator, including IC 555-based circuits',
            'Bistable and monostable multivibrator circuits'
          ]
        },
        {
          name: 'Television Transmitter',
          learningOutcome: 'Describe the basic working principle of a television transmitter and interpret the stages shown in its block diagram.',
          knowledge: [
            'Basic working principle of a television transmitter',
            'Block diagram of a television transmitter',
            'Stages of a television transmitter'
          ]
        },
        {
          name: 'Picture Production in T.V. Receiver',
          learningOutcome: 'Explain the principle of scanning and the process by which video signals are converted into a reproduced image on a television receiver.',
          knowledge: [
            'Principle of scanning',
            'Video signal processing',
            'Image reproduction process'
          ]
        },
        {
          name: 'Sound Production in Television Receiver',
          learningOutcome: 'Explain the principle of the F.M. detector and trace the path of the sound signal from detection to the loudspeaker in a television receiver.',
          knowledge: [
            'Principle of the F.M. detector',
            'Sound signal formation',
            'Path of the sound signal to the loudspeaker'
          ]
        },
        {
          name: 'Monochrome Television Receiver',
          learningOutcome: 'Describe the concept and applications of a monochrome television system and explain the function and operation of a black and white television receiver using a block diagram.',
          knowledge: [
            'Concept of a television receiver',
            'Applications of the television system',
            'Function and operation of a black and white television receiver',
            'Block diagram of a monochrome television receiver'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Electronic Measuring Instruments',
          learningOutcome: 'Following a review of first-term work, define electronic measuring instruments, explain their principle of operation, and identify types such as the voltmeter, ammeter, ohmmeter and wattmeter.',
          knowledge: [
            'Definition of measuring instruments',
            'Principle of operation of measuring instruments',
            'Types: voltmeter, ammeter, ohmmeter, wattmeter'
          ]
        },
        {
          name: 'Power Supply Unit',
          learningOutcome: 'Describe a power supply unit, identify its types, and outline the stages of a regulated power supply unit.',
          knowledge: [
            'Description of a power supply unit',
            'Types: dry cells, colour cells, accumulator, power pack, AC supply',
            'Stages of a regulated power supply unit'
          ]
        },
        {
          name: 'Amplifiers',
          learningOutcome: 'Define an amplifier, draw its circuit symbol, state its functions, and classify amplifiers by class of operation.',
          knowledge: [
            'Definition and circuit symbol of an amplifier',
            'Functions of an amplifier',
            'Classes of amplifier: A, B, C, AB'
          ]
        },
        {
          name: 'Radio Transmitter',
          learningOutcome: 'Explain the function and operation of a radio transmitter using its block diagram and describe the function of each stage.',
          knowledge: [
            'Function and operation of a radio transmitter',
            'Block diagram of a radio transmitter',
            'Function of each transmitter stage'
          ]
        },
        {
          name: 'Radio Receiver',
          learningOutcome: 'Explain the function and operation of a radio receiver using its block diagram, identify various types of radio receivers, and evaluate their advantages and disadvantages.',
          knowledge: [
            'Function and operation of a radio receiver',
            'Block diagram of a radio receiver',
            'Types of radio receivers',
            'Advantages and disadvantages of each type'
          ]
        },
        {
          name: 'Selectivity and Sensitivity',
          learningOutcome: 'Define selectivity and sensitivity in a radio receiver and explain the function and identification of the tuner.',
          knowledge: [
            'Definition of selectivity and sensitivity',
            'Function of the tuner in a radio receiver',
            'Identification of the tuner'
          ]
        },
        {
          name: 'Resonance Circuit',
          learningOutcome: 'Define resonance, express resonant frequency mathematically, and distinguish series from parallel resonance circuits and their bandwidth frequency ranges.',
          knowledge: [
            'Definition of resonance',
            'Mathematical representation of resonant frequency',
            'Series and parallel resonance circuits',
            'Frequency ranges for bandwidth'
          ]
        },
        {
          name: 'Satellite Communication Systems — Basic Principles',
          learningOutcome: 'Explain the basic principles of a satellite communication system.',
          knowledge: [
            'Basic principles of satellite communication systems'
          ]
        },
        {
          name: 'Basic Concept of Entrepreneurship',
          learningOutcome: 'Explain the meaning of entrepreneurship and entrepreneurship education, and outline the qualities and importance of an entrepreneur.',
          knowledge: [
            'Meaning of entrepreneurship',
            'Meaning of entrepreneurship education',
            'Qualities of an entrepreneur',
            'Importance of entrepreneurship'
          ]
        },
        {
          name: 'Practical/Project — 9V Power Supply Unit Construction',
          learningOutcome: 'Construct a 9V power supply unit as a practical project applying the term\'s work on power supply units and amplifiers.',
          knowledge: [
            'Construction of a 9V power supply unit'
          ]
        },

        // ---- Third Term ----
        {
          name: 'Satellite Communication Systems I — Elements and Types',
          learningOutcome: 'Following a review of second-term work, identify the basic elements of a satellite communication system and describe its types.',
          knowledge: [
            'Basic elements of a satellite communication system',
            'Types of satellite communication systems'
          ]
        },
        {
          name: 'Satellite Communication Systems II — Transmission, Reception and Installation',
          learningOutcome: 'Describe transmission and reception in a satellite communication system and explain the installation of a satellite communication system using a parabolic dish.',
          knowledge: [
            'Transmission and reception of a satellite communication system',
            'Installation of a satellite communication system',
            'Use of the parabolic dish'
          ]
        },
        {
          name: 'Electronic Repairs I',
          learningOutcome: 'Dismantle and reassemble a power supply unit in a radio set, and dismantle and reassemble the RF, IF and detector stages of a radio receiver set.',
          knowledge: [
            'Dismantling and reassembling a radio set power supply unit',
            'Dismantling and reassembling the RF, IF and detector stages of a radio receiver'
          ]
        },
        {
          name: 'Electronic Repairs II',
          learningOutcome: 'Install and maintain a radio set.',
          knowledge: [
            'Installation of a radio set',
            'Maintenance of a radio set'
          ]
        },
        {
          name: 'Fault Finding and Repairs in Radio Receiver I',
          learningOutcome: 'Diagnose faults in a radio receiver using fault-finding equipment and a troubleshooting procedure, and identify types of fault.',
          knowledge: [
            'Diagnosing faults using fault-finding equipment',
            'Troubleshooting procedure',
            'Types of fault in a radio receiver'
          ]
        },
        {
          name: 'Fault Finding and Repairs in Radio Receiver II',
          learningOutcome: 'Identify the specific components responsible for particular faults in a radio receiver.',
          knowledge: [
            'Identification of components responsible for specific faults'
          ]
        },
        {
          name: 'Fault Finding and Repairs in Radio Receiver III',
          learningOutcome: 'Apply appropriate remedies to identified faults in a radio receiver.',
          knowledge: [
            'Remedies to faults in a radio receiver'
          ]
        },
        {
          name: 'Basic Concepts of Marketing',
          learningOutcome: 'Explain the meaning, methods and importance of marketing, and interpret a marketing/distribution channel chart.',
          knowledge: [
            'Meaning of marketing',
            'Methods of marketing',
            'Importance of marketing',
            'Marketing/distribution channel chart'
          ]
        },
        {
          name: 'Marketing — Branding, Packaging, Costing and Pricing',
          learningOutcome: 'Explain product branding and packaging, and apply costing, pricing and feasibility study concepts to a product.',
          knowledge: [
            'Product branding',
            'Product packaging',
            'Costing and pricing',
            'Feasibility study development'
          ]
        },
        {
          name: 'Practical/Project — Satellite Signal Tracking',
          learningOutcome: 'Track satellite signals from different satellites, such as ASTRA and INTELSAT, as a practical project.',
          knowledge: [
            'Satellite signal tracking using different satellites (ASTRA, INTELSAT)'
          ]
        }
      ]
    }
  ]
};
