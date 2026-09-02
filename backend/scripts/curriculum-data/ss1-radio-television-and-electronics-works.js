// SS1 Radio, Television and Electronics Works — First, Second & Third Term
// Source: SchemeofWork.com — "Radio,Television and Electronics Works Scheme of Work SSS1"
// URL: https://schemeofwork.com/radio-television-and-electronics-works-scheme-of-work-sss1/
// Source does not state any NESRI-2025 compliance claim; 'legacy' is used per the versioning
// rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid Term Test, Mid Term Break, Revision, Examination, and the First
// Term's content-less "Practical/Project" week, which the source lists with no described
// content) are excluded. The Second and Third Term "Welcome Test" weeks are kept, since each is
// paired with real described content (Electronic Hand Tools; Electromagnetic Spectrum frequency
// ranges) beyond the review portion, and the Second/Third Term "Practical/Project" weeks are
// kept since each has a concrete described project (full-wave rectifier design; amplifier
// circuit design and CRT disassembly/reassembly).

export const curriculumData = {
  subject: 'Radio, Television and Electronics Works',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Radio, Television and Electronics Works',
      topics: [
        // ---- First Term ----
        {
          name: 'Sources and Precautions of Hazard',
          learningOutcome: 'Describe the concept of safety, define hazard, and list common sources of hazard in an electronics workshop.',
          knowledge: [
            'Concept of safety',
            'Definition of hazard',
            'Sources of hazard in the workshop'
          ]
        },
        {
          name: 'Safety Rules and Regulations',
          learningOutcome: 'Explain workshop safety rules and regulations, analyze how accidents can be prevented, and state materials used for firefighting.',
          knowledge: [
            'Safety rules and regulations',
            'Accident prevention analysis',
            'Firefighting materials and practical use of a fire extinguisher'
          ]
        },
        {
          name: 'Structure of Matter',
          learningOutcome: 'Define matter, explain its composition and structure, and describe the structure and parts of an atom.',
          knowledge: [
            'Definition of matter',
            'Composition and structure of matter',
            'Structure and parts of an atom'
          ]
        },
        {
          name: 'Conductors and Insulators',
          learningOutcome: 'Define conductors and insulators, identify materials that belong to each category, and compare them by valence electron count.',
          knowledge: [
            'Definition of conductors and insulators',
            'Materials classified as conductors or insulators',
            'Comparison by number of valence electrons'
          ]
        },
        {
          name: 'Semiconductors',
          learningOutcome: 'Define semiconductors, identify semiconductor materials, and differentiate semiconductors from conductors and insulators using valence electron analysis.',
          knowledge: [
            'Definition of semiconductors',
            'Semiconductor materials',
            'Differentiating semiconductors from conductors and insulators'
          ]
        },
        {
          name: 'Current, Voltage and Resistance',
          learningOutcome: 'Define current, voltage and resistance, state their symbols and units, and explain the instruments used to measure them.',
          knowledge: [
            'Definitions of current, voltage and resistance',
            'Symbols and units of measurement',
            'Measuring instruments for current, voltage and resistance'
          ]
        },
        {
          name: 'Attraction and Repulsion of Charges',
          learningOutcome: 'State the laws of attraction and repulsion of magnetic charges and demonstrate the process using bar magnets.',
          knowledge: [
            'Laws of attraction and repulsion',
            'Demonstration with bar magnets'
          ]
        },
        {
          name: 'Electronic Components I',
          learningOutcome: 'Identify electronic components by name, type, symbol, value and rating on a circuit board.',
          knowledge: [
            'Names and types of electronic components',
            'Symbols, values and ratings of components',
            'Identification on circuit boards'
          ]
        },
        {
          name: 'Electronic Components II',
          learningOutcome: 'Draw and label the graphical symbols of common electronic components.',
          knowledge: [
            'Graphical symbols of electronic components',
            'Identification of component symbols on charts/tables'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Electronic Hand Tools',
          learningOutcome: 'Following a review of first-term work, identify and select electronic hand tools, state their uses, and sketch and label their parts.',
          knowledge: [
            'Identification and selection of electronic hand tools',
            'Uses of electronic hand tools',
            'Sketching and labelling of tool parts'
          ]
        },
        {
          name: 'Electronics and Electronic Circuits',
          learningOutcome: 'Define electronics and describe what constitutes an electronic circuit.',
          knowledge: [
            'Definition of electronics',
            'Description of an electronic circuit'
          ]
        },
        {
          name: 'Concept of Emission',
          learningOutcome: 'Define emission, enumerate its types, and justify its applications using a cathode ray tube (CRT) demonstration.',
          knowledge: [
            'Definition of emission',
            'Types of emission',
            'Application of emission, demonstrated with a CRT'
          ]
        },
        {
          name: 'Photoelectric Devices',
          learningOutcome: 'Explain photoelectric devices and illustrate their applications.',
          knowledge: [
            'Explanation of photoelectric devices',
            'Applications of photoelectric devices'
          ]
        },
        {
          name: 'Semiconductor — PN-Junction and Rectification',
          learningOutcome: 'Explain how a PN-junction is formed, enumerate types of semiconductor devices, and describe the rectification process.',
          knowledge: [
            'Formation of a PN-junction',
            'Types of semiconductor devices',
            'Description of rectification'
          ]
        },
        {
          name: 'Semiconductor Devices — Operating Principles',
          learningOutcome: 'Explain the operating principles of semiconductor devices, state their characteristics, and devise applications for them.',
          knowledge: [
            'Operating principles of semiconductor devices',
            'Characteristics of semiconductor devices',
            'Applications of semiconductor devices'
          ]
        },
        {
          name: 'Electronic Communication Systems',
          learningOutcome: 'Define an electronic communication system, differentiate between types of systems, and interpret a block diagram of a communication system.',
          knowledge: [
            'Definition of an electronic communication system',
            'Types of communication systems',
            'Interpretation of a communication system block diagram'
          ]
        },
        {
          name: 'Electronic Communication Systems — Noise',
          learningOutcome: 'Define noise in a communication system, classify types of noise, and generate examples of noise.',
          knowledge: [
            'Definition of noise',
            'Classification of noise types',
            'Examples of noise in communication systems'
          ]
        },
        {
          name: 'Electromagnetic Spectrum',
          learningOutcome: 'Define the electromagnetic spectrum and describe how radio waves propagate.',
          knowledge: [
            'Definition of the electromagnetic spectrum',
            'Radio wave propagation'
          ]
        },
        {
          name: 'Practical/Project — Full-Wave Rectifier Design',
          learningOutcome: 'Design a full-wave rectifier circuit capable of powering a 5V device.',
          knowledge: [
            'Design of a full-wave rectifier',
            'Powering a 5V device from the rectifier output'
          ]
        },

        // ---- Third Term ----
        {
          name: 'Electromagnetic Spectrum — Frequency Ranges and Applications',
          learningOutcome: 'Following a review of second-term work, break down the frequency ranges of the electromagnetic spectrum from VLF to EHF and analyze their applications.',
          knowledge: [
            'Frequency ranges of the electromagnetic spectrum (VLF to EHF)',
            'Applications of each frequency range'
          ]
        },
        {
          name: 'Transducers',
          learningOutcome: 'Define transducers, outline their types, and infer their importance in electronic systems.',
          knowledge: [
            'Definition of transducers',
            'Types of transducers',
            'Importance of transducers'
          ]
        },
        {
          name: 'Modulation I',
          learningOutcome: 'Define modulation and enumerate and describe its types, including amplitude and frequency modulation.',
          knowledge: [
            'Definition of modulation',
            'Types of modulation (AM and FM)',
            'Description of each modulation type'
          ]
        },
        {
          name: 'Modulation II',
          learningOutcome: 'Construct amplitude and frequency modulation waveforms, analyze their peaks and valleys, and explain the function of the carrier wave.',
          knowledge: [
            'Construction of AM and FM waveforms',
            'Analysis of waveform peaks and valleys',
            'Function of the carrier wave'
          ]
        },
        {
          name: 'Demodulation',
          learningOutcome: 'Describe the demodulation process and compare and contrast its types using charts and sketches.',
          knowledge: [
            'Description of the demodulation process',
            'Comparison of demodulation types'
          ]
        },
        {
          name: 'Soldering and De-soldering in Electronic Circuits',
          learningOutcome: 'Explain the soldering and de-soldering processes and carry them out on components while observing safety precautions.',
          knowledge: [
            'Explanation of soldering and de-soldering processes',
            'Practical soldering and de-soldering of components',
            'Safety precautions during soldering'
          ]
        },
        {
          name: 'Soldering and De-soldering II',
          learningOutcome: 'Enumerate types of solder, identify the suitable soldering process for a given task, and apply the correct flux.',
          knowledge: [
            'Types of solder',
            'Selection of a suitable soldering process',
            'Soldering to a veroboard with correct flux application'
          ]
        },
        {
          name: 'Electronic Measuring Instruments',
          learningOutcome: 'Enumerate and explain the types of electronic measuring instruments available in the workshop.',
          knowledge: [
            'Types of electronic measuring instruments',
            'Explanation of each instrument type'
          ]
        },
        {
          name: 'Using a Multimeter',
          learningOutcome: 'Use a multimeter to measure current, voltage and resistance on electronic components and circuits.',
          knowledge: [
            'Multimeter use for measuring current, voltage and resistance',
            'Application on components and circuit boards'
          ]
        },
        {
          name: 'Practical/Project — Amplifier Circuit and CRT Disassembly',
          learningOutcome: 'Design a circuit using a microphone and speaker as an amplifier, and disassemble and reassemble a cathode ray tube (CRT).',
          knowledge: [
            'Design of a microphone/speaker amplifier circuit',
            'Disassembly and reassembly of a CRT'
          ]
        }
      ]
    }
  ]
};
