// SS3 Economics — Gap-fill (Second Term, currently entirely missing)
// Source: EcoleBooks "2ND TERM SS3 ECONOMICS SCHEME OF WORK AND NOTE"
// URL: https://www.ecolebooks.com/2nd-term-ss3-economics-scheme-of-work-and-note/
// This source does not explicitly claim NESRI 2025 compliance, so curriculumVersion stays 'legacy',
// matching the existing First Term Economics theme already in the DB (also 'legacy').
// Administrative weeks (Mock and WAEC Exams) are excluded.
//
// CONTEXT: The live database currently has only 10 SS3 Economics topics, all from First Term.
// No Second Term content exists in the DB at all. No published Third Term scheme for SS3
// Economics was found (EcoleBooks has Third Term Economics for SS1 and SS2, but not SS3 —
// consistent with the WASSCE-revision-term pattern already confirmed for other SS3 subjects
// like Mathematics, Government, English Language, and Literature-in-English). This file adds
// the 6 real Second Term topics. Verify via dry-run that this appends to the EXISTING
// Economics/SS3/legacy theme rather than creating a duplicate theme before running the real import.

export const curriculumData = {
  subject: 'Economics',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Economics',
      topics: [
        {
          name: 'Economic Growth and Development',
          learningOutcome: 'Distinguish between economic growth and economic development, and identify the causes of and solutions to underdevelopment.',
          knowledge: [
            'Definition and distinction between economic growth and economic development',
            'Underdevelopment and its characteristics',
            'Causes of underdevelopment (low savings, political instability, poor planning, corruption, over-reliance on importation)',
            'Solutions to underdevelopment (capital accumulation, foreign trade, borrowing, capacity building)',
            'Strategies for economic development (diversification, infrastructure, political stability, export promotion)'
          ]
        },
        {
          name: 'Economic Development Planning',
          learningOutcome: 'Explain the meaning and purpose of economic planning, identify types of economic plans, and discuss the problems facing planning in Nigeria.',
          knowledge: [
            'Meaning and reasons for economic planning',
            'Types of plan: financial, strategic, comprehensive, partial, controlled economic planning',
            'Problems of planning (political instability, insufficient capital, misplaced priorities, inaccurate data, corruption)'
          ]
        },
        {
          name: 'International Economics Organisation',
          learningOutcome: 'Explain the origin, objectives, achievements, and problems of major international economic organisations relevant to Nigeria.',
          knowledge: [
            'ECOWAS — origin, membership, aims, achievements, problems',
            'IMF — origin, objectives, achievements, problems',
            'IBRD (World Bank) — origin, objectives, achievements, problems',
            'ADB — origin, functions, problems',
            'ECA, UNCTAD, EEC/EU, and WACH — origin, objectives, achievements, problems'
          ]
        },
        {
          name: 'Current Economic Plans',
          learningOutcome: 'Describe the meaning and objectives of the Millennium Development Goals, NEEDS, and Vision 2020 as national and international development frameworks.',
          knowledge: [
            'Meaning and objectives of the Millennium Development Goals (MDGs)',
            'Meaning and objectives of NEEDS (National Economic Empowerment and Development Strategy)',
            'Meaning and objectives of Vision 2020'
          ]
        },
        {
          name: 'Economic Development Challenges',
          learningOutcome: 'Discuss the meaning, effects, and possible solutions to major economic development challenges facing Nigeria.',
          knowledge: [
            'Meaning and effects of poverty',
            'Methods of poverty alleviation and eradication, and agencies for poverty alleviation (NAPEP, DFRRI, NDE, etc.)',
            'HIV/AIDS and the economy',
            'Corruption and the economy',
            'Power and energy inadequacy'
          ]
        },
        {
          name: 'Economic Reform Programs',
          learningOutcome: 'Explain major Nigerian economic reform policies and the roles of key regulatory agencies established to support them.',
          knowledge: [
            'Consolidation of financial institutions (bank recapitalization)',
            'Indigenization, nationalization, commercialization, and privatization policies',
            'Roles of EFCC and ICPC',
            'Roles of NAFDAC',
            'Roles of SON (Standards Organisation of Nigeria)'
          ]
        }
        // ... 6 topics: the entire Second Term, currently missing from the DB
      ]
    }
  ]
};
