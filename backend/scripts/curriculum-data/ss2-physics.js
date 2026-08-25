// SS2 Physics — First, Second, and Third Term
// Source: schemeofwork.com "Physics Scheme of Work for SS 2 Federal"
// (published 2022-10-14, updated 2023-03-02)
// This source does not claim compliance with the new NERDC/NESRI (Sept 2025) curriculum,
// so it is tagged as 'legacy' rather than 'nesri_2025'. Students currently in SS2 began
// SS1 before the reform existed, so 'legacy' is also the curriculum they are actually on.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examination) are excluded.

export const curriculumData = {
  subject: 'Physics',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Physics',
      topics: [
        {
          name: 'Heat Energy: Temperature and Thermometry',
          learningOutcome: 'Explain temperature and its measurement, describe types of thermometers, and describe the absolute scale of temperature.',
          knowledge: [
            'Temperature and its measurement',
            'Types of thermometer',
            'Absolute scale of temperature'
          ]
        },
        {
          name: 'Heat Energy Measurement: Specific Heat Capacity',
          learningOutcome: 'Explain the concept of specific heat capacity, its measurement, and its significance.',
          knowledge: [
            'Concept of specific heat capacity',
            'Measurement of specific heat capacity',
            'Significance of specific heat capacity'
          ]
        },
        {
          name: 'Heat Energy Measurement: Latent Heat and Humidity',
          learningOutcome: 'Explain latent heat, distinguish evaporation, boiling, and sublimation, and describe relative humidity and dew point.',
          knowledge: [
            'Latent heat',
            'Evaporation, boiling, and sublimation',
            'Relative humidity and dew point'
          ]
        },
        {
          name: 'Gas Laws',
          learningOutcome: 'Measure gas pressure, use a barometer, and apply Boyle\'s Law, Charles\' Law, the pressure law, and the general gas law.',
          knowledge: [
            'Measurement of gas pressure',
            'Barometers in practical use',
            'Boyle\'s Law and its application',
            'Charles\' Law and its application',
            'The pressure law',
            'The general gas law'
          ]
        },
        {
          name: 'Production and Propagation of Waves',
          learningOutcome: 'Describe the production of mechanical waves, pulsating systems, wave form, and the mathematical relationships between frequency, wavelength, period, and velocity.',
          knowledge: [
            'Production of mechanical waves',
            'Pulsating system: energy transmitted with definite speed, frequency, and wavelength',
            'Wave form: description and graphical representation',
            'Mathematical relationships among f, λ, T and V'
          ]
        },
        {
          name: 'Types and Properties of Waves',
          learningOutcome: 'Distinguish longitudinal and transverse waves, apply the wave equation, and explain the properties of waves.',
          knowledge: [
            'Longitudinal waves',
            'Transverse waves',
            'Wave equation: Y = A sin(wt - 2πx/λ)',
            'Properties of waves: reflection, refraction, diffraction, interference, polarization'
          ]
        },
        {
          name: 'Light Waves: Sources and Transmission',
          learningOutcome: 'Describe sources of light, explain the interaction of light and matter, and describe shadows, eclipses, and the pinhole camera.',
          knowledge: [
            'Sources of light',
            'Light and matter',
            'Transmission of light: shadows, eclipse, the pinhole camera'
          ]
        },
        {
          name: 'Light Waves: Reflection',
          learningOutcome: 'State the laws of reflection, describe image formation by plane and curved mirrors, and identify their applications.',
          knowledge: [
            'Reflection of light at plane and curved surfaces',
            'Laws of reflection',
            'Formation of images by plane and curved mirrors',
            'Application of plane and curved mirrors'
          ]
        },
        {
          name: 'Light Waves: Refraction Through Rectangular Glass Blocks',
          learningOutcome: 'State the laws of refraction, distinguish real and apparent depth, and explain total internal reflection and critical angle.',
          knowledge: [
            'Refraction of light through a rectangular glass block',
            'Laws of refraction',
            'Real and apparent depth',
            'Total internal reflection',
            'Critical angle'
          ]
        },
        {
          name: 'Light Waves: Refraction Through Triangular Glass Blocks',
          learningOutcome: 'Describe refraction of light through a triangular glass block, the angle of minimum deviation, and totally reflecting prisms.',
          knowledge: [
            'Refraction of light through a triangular glass block',
            'Angle of minimum deviation',
            'Totally reflecting prisms'
          ]
        },
        {
          name: 'Light Waves: Dispersion and Lenses',
          learningOutcome: 'Explain the dispersion of white light and describe refraction and image formation by converging and diverging lenses.',
          knowledge: [
            'Dispersion of white light',
            'Refraction of light through converging and diverging lenses',
            'Images formed by lenses'
          ]
        },
        {
          name: 'Application of Light Waves',
          learningOutcome: 'Describe the operation of the simple camera, film projector, human eye, microscopes, telescope, and prism binoculars.',
          knowledge: [
            'Simple camera and film projector',
            'The human eye',
            'The simple microscope and compound microscope',
            'Telescope',
            'Prism binoculars'
          ]
        },
        {
          name: 'Sound Waves: Sources and Transmission',
          learningOutcome: 'Describe sources and transmission of sound, the speed of sound in different media, and the characteristics of sound.',
          knowledge: [
            'Sources of sound',
            'Transmission of sound',
            'Speed of sound in solid, liquid, and gas',
            'Characteristics of sound'
          ]
        },
        {
          name: 'Sound Waves: Resonance and Stationary Waves',
          learningOutcome: 'Distinguish noise and music, and explain forced vibration, resonance, harmonics, overtones, and stationary waves.',
          knowledge: [
            'Noise and music',
            'Forced vibration, resonance, harmonics, and overtones',
            'Stationary waves'
          ]
        },
        {
          name: 'Application of Sound Waves',
          learningOutcome: 'Describe vibrations in strings and pipes, categorize wind, string, and percussion instruments, and explain echoes and their applications.',
          knowledge: [
            'Vibrations in strings and pipes',
            'Wind instruments',
            'String instruments',
            'Percussion instruments',
            'Echoes and their application',
            'Hearing aids'
          ]
        },
        {
          name: 'Molecular Theory of Matter: Pressure in Fluids',
          learningOutcome: 'Explain the concept of pressure in liquids and the atmosphere, and describe Pascal\'s Principle and its applications.',
          knowledge: [
            'Concept of pressure',
            'Pressure in liquids',
            'Atmospheric pressure',
            'Applications of atmospheric and gas pressure',
            'Pascal\'s Principle'
          ]
        },
        {
          name: 'Electromagnetic Waves',
          learningOutcome: 'Describe the electromagnetic spectrum and the different types of radiation within it.',
          knowledge: [
            'Electromagnetic spectrum',
            'Types of radiation in the electromagnetic spectrum'
          ]
        },
        {
          name: 'Gravitational Field I: Newton\'s Law and Gravitational Potential',
          learningOutcome: 'State Newton\'s law of universal gravitation, explain "G" as a universal constant, and describe gravitational potential and escape velocity.',
          knowledge: [
            'Gravitational force between two masses (Newton\'s law of universal gravitation)',
            '"G" as a universal constant',
            'Gravitational potential',
            'Escape velocity'
          ]
        },
        {
          name: 'Gravitational Field II: The Solar System',
          learningOutcome: 'Describe the solar system, state Kepler\'s laws, and distinguish natural and artificial satellites.',
          knowledge: [
            'Solar system',
            'Kepler\'s laws',
            'Natural and artificial satellites'
          ]
        },
        {
          name: 'Electric Fields I: Cells and Circuits',
          learningOutcome: 'Explain the production of continuous charges by primary and secondary cells, and describe series and parallel circuit arrangements.',
          knowledge: [
            'Production of continuous charges: primary cells, secondary cells',
            'Electric circuit: series and parallel arrangement of cells and resistors'
          ]
        },
        {
          name: 'Electric Fields II: EMF and Resistance',
          learningOutcome: 'Explain e.m.f. and internal resistance of a cell, and describe standard resistors, rheostats, resistivity, and conductivity.',
          knowledge: [
            'E.m.f. of a cell',
            'Internal resistance of a cell',
            'Standard resistors and rheostats',
            'Resistivity and conductivity'
          ]
        },
        {
          name: 'Electric Fields III: Potentiometer and Bridges',
          learningOutcome: 'Explain shunts and multipliers, the principle of the potentiometer, and the Wheatstone and meter bridge.',
          knowledge: [
            'Shunts and multipliers (galvanometer conversions)',
            'Principle of the potentiometer',
            'Wheatstone bridge',
            'Meter bridge'
          ]
        },
        {
          name: 'Electric Field: Electrolysis',
          learningOutcome: 'Distinguish electrolytes and non-electrolytes, describe ion dynamics in electrolytes, state Faraday\'s law of electrolysis, and identify its applications.',
          knowledge: [
            'Electrical conduction through liquids (electrolysis)',
            'Electrolytes and non-electrolytes',
            'Dynamics of charged particles (ions) in electrolytes',
            'Voltameter',
            'Examples of electrolysis',
            'Faraday\'s law of electrolysis',
            'Applications of electrolysis'
          ]
        },
        {
          name: 'Electric Field: Conduction Through Gases',
          learningOutcome: 'Describe conduction of electricity through gases, thermionic emission, the diode valve, and the cathode-ray oscilloscope.',
          knowledge: [
            'Conduction of electricity through gases',
            'Hot cathode, thermionic emission',
            'The diode valve',
            'Application of thermionic emission: cathode-ray oscilloscope'
          ]
        },
        {
          name: 'Electric Field: Coulomb\'s Law and Field Concepts',
          learningOutcome: 'State Coulomb\'s law of electric force between point charges and explain electric field intensity and potential.',
          knowledge: [
            'Electric force between point charges (Coulomb\'s law)',
            'Concept of electric field: electric field intensity, electric potential'
          ]
        },
        {
          name: 'Electric Field: Capacitors',
          learningOutcome: 'Define capacitors and capacitance, describe arrangements of capacitors, and explain energy storage and applications of capacitors.',
          knowledge: [
            'Capacitors and capacitances: definition and arrangement',
            'Energy stored in a capacitor',
            'Application of capacitors'
          ]
        },
        {
          name: 'Magnetic Field I: Properties and Sources',
          learningOutcome: 'Describe properties of magnets, magnetic flux and flux density, and the magnetic field around a bar magnet, a straight conductor, and a solenoid.',
          knowledge: [
            'Properties of magnet',
            'Magnetic flux and flux density',
            'Magnetic field around a bar magnet, a straight conductor carrying current, and a solenoid',
            'Methods of making magnets',
            'Methods of demagnetization'
          ]
        },
        {
          name: 'Magnetic Field II: Materials and Electromagnets',
          learningOutcome: 'Describe the magnetic properties of iron and steel, magnetic screening, and electromagnets and their applications.',
          knowledge: [
            'Magnetic properties of iron and steel',
            'Magnetic screening or shielding',
            'Electromagnets and application of electromagnets',
            'Temporary magnets: the electric bell, telephone earpiece'
          ]
        },
        {
          name: 'Magnetic Field III: The Earth\'s Magnetic Field',
          learningOutcome: 'Describe the earth\'s magnetic field, magnetic elements of a place, neutral points, and the mariner\'s compass.',
          knowledge: [
            'The earth\'s magnetic field',
            'Magnetic elements of a place: angle of declination, angle of dip, horizontal component',
            'Bar magnet in earth\'s field: neutral point',
            'Mariner\'s compass'
          ]
        },
        {
          name: 'Electromagnetic Field I: Force and Interaction',
          learningOutcome: 'Explain the magnetic force on a moving charge and the interaction of magnetic fields with current-carrying conductors, and describe the electric motor and moving coil galvanometer.',
          knowledge: [
            'Magnetic force on a charge moving in a magnetic field',
            'Concept of electromagnetic field',
            'Interaction between magnetic field and currents in a current-carrying wire and solenoid',
            'Applications of electromagnetic field: electric motor, moving coil galvanometer'
          ]
        },
        {
          name: 'Electromagnetic Field II: Induction',
          learningOutcome: 'State Faraday\'s law and Lenz\'s law, and explain the motor generator effect and eddy currents.',
          knowledge: [
            'Electromagnetic induction',
            'Faraday\'s law',
            'Lenz\'s law',
            'Motor generator effect',
            'Eddy currents'
          ]
        },
        {
          name: 'Electromagnetic Field III: Transformers',
          learningOutcome: 'Describe the transformer, power transmission, and the induction coil.',
          knowledge: [
            'The transformer',
            'Power transmission',
            'The induction coil'
          ]
        }
      ]
    }
  ]
};
