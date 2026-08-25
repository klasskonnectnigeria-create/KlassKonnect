// SS2 Chemistry — First, Second, and Third Term
// Source: schemeofwork.com "Chemistry Scheme of Work for SS 2 Federal"
// (published 2022-10-14, updated 2023-03-02)
// This source does not claim compliance with the new NERDC/NESRI (Sept 2025) curriculum,
// so it is tagged as 'legacy' rather than 'nesri_2025'. Students currently in SS2 began
// SS1 before the reform existed, so 'legacy' is also the curriculum they are actually on.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examinations) are excluded.

export const curriculumData = {
  subject: 'Chemistry',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Chemistry',
      topics: [
        {
          name: 'Alkanols',
          learningOutcome: 'Describe the preparation, properties, industrial production, and uses of alkanols.',
          knowledge: [
            'Types and properties of alkanols',
            'Preparation and properties of alkanols',
            'Industrial production of alkanols by fermentation',
            'Etherification',
            'Uses of alkanols'
          ]
        },
        {
          name: 'Periodic Table I: Periodic Law and Blocks of Elements',
          learningOutcome: 'State the periodic law and classify elements into blocks and families based on shared characteristics.',
          knowledge: [
            'Periodic law',
            'Blocks of elements: metals, non-metals, metalloids, and transition metals',
            'Families: s-p-d-f (groups I-VIII, e.g. Group IA Alkali metals, Group IIA Alkali Earth metals)'
          ]
        },
        {
          name: 'Periodic Table II: Trends and Properties',
          learningOutcome: 'Explain trends in atomic/ionic size, ionization energy, and electron affinity across periods and down groups, and describe diagonal relationships.',
          knowledge: [
            'Changes in atomic and ionic sizes down groups and across periods',
            'Diagonal relationships',
            'Ionization energy and electron affinity, and their changes down groups and across periods'
          ]
        },
        {
          name: 'Chemical Reactions I: Basic Concepts and Collision Theory',
          learningOutcome: 'Identify reactants and products of chemical reactions and explain the basic concept of reaction rate through collision theory.',
          knowledge: [
            'Basic concepts: reactants, products, reaction time, and reaction rate',
            'Introduction to collision theory'
          ]
        },
        {
          name: 'Chemical Reactions II: Factors Affecting Rate and Reaction Types',
          learningOutcome: 'Explain how nature of substance, concentration, pressure, temperature, and catalysts affect reaction rate, and distinguish endothermic from exothermic reactions.',
          knowledge: [
            'Factors affecting the rate of chemical reactions: nature of substance, concentration, pressure, temperature, catalyst',
            'Types of chemical reactions: endothermic and exothermic reactions',
            'Energy relationships in endothermic/exothermic reactions (graphical representation)'
          ]
        },
        {
          name: 'Chemical Reactions III: Chemical Equilibrium',
          learningOutcome: 'Explain chemical equilibrium and Le Chatelier\'s principle, and describe how concentration, temperature, and pressure affect equilibrium.',
          knowledge: [
            'Chemical equilibrium: introduction using simple equations, Le Chatelier\'s principle',
            'Factors affecting equilibrium of chemical reactions: concentration, temperature, pressure'
          ]
        },
        {
          name: 'Mass-Volume Relationships I',
          learningOutcome: 'Explain the concepts of mole, molarity, molality, standard temperature and pressure, and relative densities and molar mass.',
          knowledge: [
            'Basic concepts: mole, molar quantities, molality',
            'Standard temperature and pressure (s.t.p.)',
            'Relative densities and relative molar mass'
          ]
        },
        {
          name: 'Mass-Volume Relationships II: Calculations and SI Units',
          learningOutcome: 'Perform calculations involving mass, volume, molarity, and molality of substances, and deduce SI units of common quantities.',
          knowledge: [
            'Calculations involving mass and volume',
            'Relative densities of substances: molarity, molality, volumes of gas in chemical reactions',
            'SI units of quantities: length, mass, volume'
          ]
        },
        {
          name: 'Acid-Base Reactions I: Indicators and Titration',
          learningOutcome: 'Identify common indicators and their pH ranges, and prepare and carry out a simple acid-base titration.',
          knowledge: [
            'Common indicators and their pH ranges',
            'Simple acid-base titrations',
            'Preparation of standard solutions'
          ]
        },
        {
          name: 'Acid-Base Reactions II: Titration Practice',
          learningOutcome: 'Carry out and record simple acid-base titrations with accuracy.',
          knowledge: [
            'Simple acid-base titration practice (continued)'
          ]
        },
        {
          name: 'Acid-Base Reactions III: Heat of Neutralization',
          learningOutcome: 'Explain the concept of heat of neutralization at an introductory level.',
          knowledge: [
            'Heat of neutralization (introductory)'
          ]
        },
        {
          name: 'Water: Structure and Solubility',
          learningOutcome: 'Describe the structure of water and explain solubility, including factors affecting it and the use of solubility curves.',
          knowledge: [
            'Structure of water',
            'Solubility (basic concepts: solute, solvent, solution)',
            'Solubility of different substances',
            'Factors that affect solubility / uses of solubility curves'
          ]
        },
        {
          name: 'Water: Hardness, Purification, and Municipal Supply',
          learningOutcome: 'Explain the causes and removal of water hardness, and describe purification methods and municipal water supply.',
          knowledge: [
            'Hardness of water and removal of hardness',
            'Purification of water',
            'Municipal water supply',
            'Production of distilled water'
          ]
        },
        {
          name: 'Air: Composition, Properties, and Flame',
          learningOutcome: 'Describe the composition and properties of air, and explain the structure of a flame.',
          knowledge: [
            'Air: constituents and percentage composition',
            'Properties of air',
            'Flame structure and zones'
          ]
        },
        {
          name: 'Hydrogen',
          learningOutcome: 'Describe the electronic configuration and isotopes of hydrogen, its unique position in the periodic table, its preparation, properties, and uses.',
          knowledge: [
            'Configuration and possible oxidation numbers of hydrogen',
            'Isotopes of hydrogen',
            'Unique position of hydrogen in the periodic table',
            'Laboratory preparation of hydrogen',
            'Industrial preparation of hydrogen',
            'Physical and chemical properties of hydrogen',
            'Uses of hydrogen'
          ]
        },
        {
          name: 'Oxygen',
          learningOutcome: 'Describe the properties, preparation, reactions, and uses of oxygen.',
          knowledge: [
            'General properties of oxygen group',
            'Electronic structure and bonding capacity of oxygen',
            'Laboratory and industrial preparation of oxygen',
            'Physical and chemical properties of oxygen',
            'Reactions of oxygen (oxidation)',
            'Compounds of oxygen',
            'Uses of oxygen'
          ]
        },
        {
          name: 'Halogens I',
          learningOutcome: 'Describe the electronic configuration and properties of halogens and their gradation down the group.',
          knowledge: [
            'Electronic configuration of halogens',
            'Physical properties of halogens and gradation down the group',
            'Chemical properties of halogens and gradation down the group'
          ]
        },
        {
          name: 'Halogens II: Compounds and Uses',
          learningOutcome: 'Describe the compounds and uses of halogens (Cl2, Br2, I2) and the laboratory preparation of chlorine.',
          knowledge: [
            'Compounds of halogens',
            'Uses of halogens (Cl2, Br2, I2)',
            'Preparation of chlorine'
          ]
        },
        {
          name: 'Nitrogen I: Properties and Laboratory Preparation',
          learningOutcome: 'Describe the general properties of the nitrogen family and the laboratory preparation of nitrogen.',
          knowledge: [
            'General properties of nitrogen family (group V elements)',
            'Laboratory preparation of nitrogen'
          ]
        },
        {
          name: 'Nitrogen II: Industrial Preparation',
          learningOutcome: 'Describe the industrial preparation of nitrogen from liquid air and its properties.',
          knowledge: [
            'Industrial preparation of nitrogen from liquid air',
            'Properties of nitrogen'
          ]
        },
        {
          name: 'Nitrogen III: Uses and the Nitrogen Cycle',
          learningOutcome: 'Explain the uses of nitrogen and describe the nitrogen cycle.',
          knowledge: [
            'Uses of nitrogen',
            'Nitrogen cycle'
          ]
        },
        {
          name: 'Nitrogen IV: Compounds',
          learningOutcome: 'Identify the compounds of nitrogen, including oxides and ammonia, and test for ammonia.',
          knowledge: [
            'Compounds of nitrogen: oxides of nitrogen, ammonia',
            'Test for ammonia'
          ]
        },
        {
          name: 'Sulphur I',
          learningOutcome: 'Describe the general properties, electronic structure, allotropes, and uses of sulphur.',
          knowledge: [
            'General properties of group VIA elements',
            'Electronic structure of sulphur',
            'Allotropes of sulphur',
            'Uses of sulphur'
          ]
        },
        {
          name: 'Sulphur II: Compounds and H2SO4 Production',
          learningOutcome: 'Describe the compounds of sulphur, the industrial preparation of sulphuric acid, and its uses.',
          knowledge: [
            'Compounds of sulphur',
            'Industrial preparation of H2SO4 (Contact process)',
            'Uses of H2SO4'
          ]
        },
        {
          name: 'Oxidation-Reduction (Redox) Reactions I',
          learningOutcome: 'Define oxidation and reduction and calculate oxidation numbers of central elements in compounds.',
          knowledge: [
            'Oxidation: definition',
            'Reduction: definition',
            'Redox reactions',
            'Oxidation numbers of central elements in some compounds'
          ]
        },
        {
          name: 'Oxidation-Reduction (Redox) Reactions II',
          learningOutcome: 'Connect oxidation numbers to IUPAC naming, identify oxidizing and reducing agents, and write and balance redox equations.',
          knowledge: [
            'Connection of oxidation numbers with IUPAC names',
            'Oxidizing and reducing agents',
            'Redox equations'
          ]
        },
        {
          name: 'Ionic Theory',
          learningOutcome: 'Distinguish electrovalent from covalent compounds and electrolytes from non-electrolytes, and explain the electrochemical series.',
          knowledge: [
            'Electrovalent and covalent compounds',
            'Electrolytes and non-electrolytes',
            'Weak and strong electrolytes',
            'Electrochemical series',
            'Factors affecting the preferential discharge of ions'
          ]
        },
        {
          name: 'Electrolysis I: Concepts and Applications',
          learningOutcome: 'Define electrolysis and its key terminologies, and describe the electrolysis of acidified water, copper(II) sulphate, and brine.',
          knowledge: [
            'Meaning of electrolysis',
            'Terminologies: electrodes, electrolyte, electrolytic cell, electrochemical cells',
            'Electrolysis of acidified water, copper(II) sulphate, and brine'
          ]
        },
        {
          name: 'Electrolysis II: Faraday\'s Laws and Uses',
          learningOutcome: 'State Faraday\'s laws of electrolysis and apply them in calculations, and describe uses of electrolysis in purification, extraction, and electroplating.',
          knowledge: [
            'Faraday\'s laws of electrolysis and calculations',
            'Uses of electrolysis: purification, extraction, and electroplating of metals'
          ]
        },
        {
          name: 'Quantitative and Qualitative Analysis I: Titrations',
          learningOutcome: 'Carry out acid-base and redox titrations to determine percentage purity, heat of neutralization, and water of crystallization.',
          knowledge: [
            'Acid-base titrations (neutralization) continued',
            'Redox titrations involving KMnO4, Fe2+, C2O4, I2, KI, S2O32-'
          ]
        },
        {
          name: 'Quantitative and Qualitative Analysis II: Identifying Ions',
          learningOutcome: 'Test for cations and anions and identify oxidants and reductants in redox reactions.',
          knowledge: [
            'Test for oxidants and reductants',
            'Identification of cations and anions (e.g. Fe2+, Cu2+, NH4+, SO42-, SO32-)'
          ]
        },
        {
          name: 'Quantitative and Qualitative Analysis III: Identification of Ions',
          learningOutcome: 'Identify common cations, chlorides, nitrates, sulphates, sulphides, bicarbonates, carbonates, and sulphites.',
          knowledge: [
            'Identification of ions (Fe2+, NH4+, Fe3+, Cu2+, Pb2+ etc.)',
            'Chlorides, nitrates, sulphates, sulphide, bicarbonates, carbonates, sulphite'
          ]
        },
        {
          name: 'Quantitative and Qualitative Analysis IV: Gas and Biomolecule Tests',
          learningOutcome: 'Test for hydrogen, ammonia, hydrogen chloride, nitrate, oxygen, carbon dioxide, and chlorine, and identify fats, oils, simple sugars, proteins, and starch.',
          knowledge: [
            'Test for hydrogen, NH3, HCl, NO3, oxygen, CO2, Cl (bleaching action)',
            'Identification of fats and oils, simple sugar, proteins, starch'
          ]
        }
      ]
    }
  ]
};
