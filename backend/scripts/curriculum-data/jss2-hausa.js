// JSS2 Hausa — First, Second, and Third Term
// Source: SchemeofWork.com "Hausa Language Scheme of Work for JSS 2 Federal"
// URL: https://schemeofwork.com/hausa-language-scheme-of-work-for-jss-2-federal/
// Source page carries no NESRI 2025 reform claim, so curriculumVersion is 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Bitan aikin baya/maimaitawa "revision" and Jarabawa "examination"
// at the end of each term) are excluded below.
// The source page carries two parallel tracks for JSS2 — Hausa Language L1 (first
// language / native-speaker track) and L2 (second language track) — each with its own
// full three-term scheme. This file uses the L1 track, listed first and primary on the
// source page, matching the same convention already established in jss1-hausa.js; the
// L2 track was not merged in to avoid conflating two distinct syllabi under one theme.
// Topic names and knowledge points are translated into readable English from the
// source's Hausa BATU/KUMSHIYA (topic/content) lines under the HARSHE (Language), ADABI
// (Literature), FURUCI (Pronunciation), and AL'ADA (Culture) headings, with the original
// Hausa terms retained parenthetically for identification — no content is invented; every
// point traces to a specific line on the source page.
// Third Term Week 1 repeats the same word-classes content line as Second Term Week 1 on
// the source page itself; this is transcribed faithfully rather than altered, and noted
// as a continuation in its learningOutcome.

export const curriculumData = {
  subject: 'Hausa',
  grade: 'JSS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS2 Hausa (First Term)',
      topics: [
        {
          name: "Harshe: Ma'anar Furuci da Gaɓoɓinsa (Meaning of Pronunciation and Its Organs)",
          learningOutcome: "Explain the meaning of pronunciation/articulation (furuci) and identify its organs.",
          knowledge: [
            "Meaning of pronunciation/articulation (ma'anar furuci)",
            'Organs of speech (gaɓoɓinsa): hanɗa, hanƙa, ganɗa, dasashi, makwallato'
          ]
        },
        {
          name: "Harshe: Ma'ana da Ire-iren Jimla (Meaning and Types of Sentences)",
          learningOutcome: 'Explain the meaning of a sentence and identify its various types.',
          knowledge: [
            "Meaning of a sentence (ma'anar jimla)",
            'Declarative sentence (jimla bayanau)',
            'Interrogative sentence (jimla tambayoyi)',
            'Imperative sentence (jimla umarni)',
            'Negative sentence (jimla korewa)'
          ]
        },
        {
          name: 'Adabi: Misalan Labarai Masu Tushen Karin Magana (Examples of Proverb-Based Stories)',
          learningOutcome: 'Identify and narrate stories rooted in Hausa proverbs.',
          knowledge: [
            "Examples of proverb-based stories (labarai masu tushen Karin Magana)",
            "Sample proverbs: 'in kunne yaji jiki ya tsira', 'kunne ya girmi kaka'"
          ]
        },
        {
          name: "Adabi: Ma'ana da Rukunonin Adabin Baka (Meaning and Categories of Oral Literature)",
          learningOutcome: 'Explain the meaning of oral literature and identify its categories.',
          knowledge: [
            "Meaning of oral literature (ma'anar adabin baka)",
            'Oral poetry (waƙoƙin baka)',
            'Folktales (tatsuniyoyi)',
            'Traditional stories (labarin gargajiya)'
          ]
        },
        {
          name: 'Furuci: Gaɓoɓin Furuci Masu Motsi da Marasa Motsi (Movable and Immovable Speech Organs)',
          learningOutcome: 'Give a detailed explanation of movable and immovable organs of speech.',
          knowledge: [
            'Movable and immovable articulators (gaɓoɓin furuci masu motsi da marasa motsi)',
            'Examples: harshe (tongue), hanɗa, ganɗa, dasashi'
          ]
        },
        {
          name: 'Harshe: Jimla Umarni da Jimla Tambaya (Imperative and Interrogative Sentences)',
          learningOutcome: 'Explain imperative and interrogative sentences with examples.',
          knowledge: [
            'Imperative sentences with examples: tafi!, zauna!',
            "Interrogative sentences with examples: 'me Ali ya saya?', 'wa ya mari Binta?'"
          ]
        },
        {
          name: 'Adabi: Gabatar da Rubutaccen Wasan Kwaikwayo (Introduction to Written Drama)',
          learningOutcome: 'Give an introductory explanation of written drama.',
          knowledge: [
            'Introduction to written drama (rubutaccen wasan kwaikwayo)'
          ]
        },
        {
          name: "Adabi: Ci Gaba da Labari Mai Tushen Karin Magana (Continuation of Proverb-Based Stories)",
          learningOutcome: 'Continue the study of proverb-based stories from earlier in the term.',
          knowledge: [
            'Continued study of proverb-based stories (ci gaba da labari mai tushen Karin Magana)'
          ]
        },
        {
          name: "Adabi: Cikakken Bayani Akan Nau'o'in Adabin Baka (Detailed Explanation of Types of Oral Literature)",
          learningOutcome: 'Give a detailed explanation of the different types of oral literature.',
          knowledge: [
            'Folktale (tatsuniya)',
            'Traditional story (labarin gargajiya)',
            'Storytelling gathering (zaurance)',
            'Comic tale (barkwanci)',
            'Proverb (Karin Magana)',
            "Praise poetry/musicians' songs (waƙoƙin makaɗa)",
            'Eulogy and praise-chanting (take da kirari)'
          ]
        },
        {
          name: 'Adabi: Nazari Akan Rubutaccen Wasan Kwaikwayo (Analysis of Written Drama)',
          learningOutcome: 'Analyze a written drama in terms of theme, style, and structure.',
          knowledge: [
            'Theme (jigo)',
            'Style (salo)',
            'Form and structure (zubi da tsari)',
            'Protagonist/hero (jarumi)'
          ]
        },
        {
          name: "Adabi: Muhimmancin Adabin Baka ga Al'umma (Importance of Oral Literature to Society)",
          learningOutcome: 'Explain the importance of oral literature to society.',
          knowledge: [
            "Importance of oral literature to society (muhimmancin adabin baka ga al'umma)"
          ]
        },
        {
          name: "Adabi: Muhimmancin Wasan Kwaikwayo ga Al'umma (Importance of Drama to Society)",
          learningOutcome: 'Explain the importance of drama to society.',
          knowledge: [
            "Importance of drama to society (muhimmancin wasan kwaikwayo ga al'umma)"
          ]
        }
      ]
    },
    {
      name: 'JSS2 Hausa (Second Term)',
      topics: [
        {
          name: "Harshe: Ma'ana da Ire-iren Rukunonin Kalmomi (Meaning and Types of Word Classes)",
          learningOutcome: 'Explain the meaning of word classes and identify their types.',
          knowledge: [
            'Noun (suna)',
            'Pronoun (wakilin suna)',
            'Verb (aikatau)',
            'Adverb (bayanau)'
          ]
        },
        {
          name: "Harshe: Ma'anar Insha'i da Misalansa (Meaning of Composition and Examples)",
          learningOutcome: 'Explain the meaning of composition writing and give examples of its types.',
          knowledge: [
            "Meaning of composition (ma'anar insha'i)",
            'Descriptive composition (insha\'i siffantawa)',
            "Narrative composition (insha'in labari)",
            "Argumentative composition (insha'in muhawara)"
          ]
        },
        {
          name: 'Adabi: Aiwatar da Karatun Gajerun Rubutattun Waƙoƙi (Reading Short Written Poems)',
          learningOutcome: 'Practice reading short written poems aloud.',
          knowledge: [
            'Reading short written poems (gajerun rubutattun waƙoƙi)'
          ]
        },
        {
          name: "Adabi: Ma'anar Rubutaccen Adabi da Rukunonin Sa (Meaning of Written Literature and Its Categories)",
          learningOutcome: 'Explain the meaning of written literature and identify its categories.',
          knowledge: [
            "Meaning of written literature (ma'anar rubutaccen adabi)",
            'Prose (rubutun zube)',
            'Poetry (waƙa)',
            'Drama (wasan kwaikwayo)'
          ]
        },
        {
          name: "Al'ada: Ma'anar Shugabanci da Muhimmancinsa (Meaning of Leadership and Its Importance)",
          learningOutcome: 'Explain the meaning of leadership/governance and its importance to society.',
          knowledge: [
            'Leadership (jagoranci)',
            'Administration (gudanar da mulki)',
            'Law enforcement (tabbatar da bin doka)',
            'Peace (zaman lafiya)',
            'Security (tsaro)',
            'Justice (adaki)'
          ]
        },
        {
          name: 'Harshe: Bayani Akan Misalan Rukunonin Kalmomi (Explanation of Examples of Word Classes)',
          learningOutcome: 'Give further explanation with examples of the different word classes.',
          knowledge: [
            'Noun (suna)',
            'Pronoun (wakilin suna)',
            'Verb (aikatau)',
            'Adjective (sifa)',
            'Adverb (bayanau)'
          ]
        },
        {
          name: "Harshe: Cikakken Bayani Akan Nau'o'in Insha'i (Detailed Explanation of Types of Composition)",
          learningOutcome: 'Give a detailed explanation of the different types of composition writing.',
          knowledge: [
            'Descriptive composition (na siffantawa)',
            'Narrative composition (na labari)',
            'Argumentative composition (na muhawara)',
            'Expository composition (na bayyanawa)',
            'Proverb-based composition (na Karin Magana)',
            'Letter-writing composition (na wasiƙa)'
          ]
        },
        {
          name: "Adabi: Ci Gaba da Nazarin Gajerun Rubutattun Waƙoƙin Hausa (Continued Analysis of Short Written Hausa Poems)",
          learningOutcome: 'Continue analyzing short written Hausa poems for theme, style, and structure.',
          knowledge: [
            'Theme (jigo)',
            'Style (salo)',
            'Form (zubi)',
            'Structure (tsari)'
          ]
        },
        {
          name: "Adabi: Cikakken Bayani Akan Rukunonin Rubutaccen Adabi (Detailed Explanation of Categories of Written Literature)",
          learningOutcome: 'Give a detailed explanation of the categories of written literature.',
          knowledge: [
            'Prose (rubutun zube)',
            'Poetry (waƙa)',
            'Drama (wasan kwaikwayo)'
          ]
        },
        {
          name: "Al'ada: Misalan Shugabanci, Matakai Uku na Gwamnati (Examples of Leadership, the Three Tiers of Government)",
          learningOutcome: 'Identify examples of leadership and describe the three tiers and three arms of government.',
          knowledge: [
            'Examples of leadership (misalan shugabanci)',
            'The three tiers of government (matakai uku na gwamnati)',
            'The three arms of government (hawa uku na mulki)'
          ]
        }
      ]
    },
    {
      name: 'JSS2 Hausa (Third Term)',
      topics: [
        {
          name: "Harshe: Ma'ana da Ire-iren Rukunonin Kalmomi (Meaning and Types of Word Classes, continued)",
          learningOutcome: 'Continue the study of word classes introduced in Second Term, reinforcing identification of noun, pronoun, verb, and adverb.',
          knowledge: [
            'Noun (suna)',
            'Pronoun (wakilin suna)',
            'Verb (aikatau)',
            'Adverb (bayanau)'
          ]
        },
        {
          name: "Harshe: Cikakken Bayani Akan Wasiƙar Neman Aiki (Detailed Explanation of Job Application Letters)",
          learningOutcome: 'Give a detailed explanation of how to write a job application letter.',
          knowledge: [
            "Detailed explanation of the job application letter (wasiƙar neman aiki)"
          ]
        },
        {
          name: "Al'ada: Ma'anar Ibada da Muhimmancinta (Meaning of Worship and Its Importance)",
          learningOutcome: 'Explain the meaning of worship and its importance in daily life.',
          knowledge: [
            'Strengthening faith (ƙarfafa imani)',
            'Good conduct/dealings (kyautata mu\'amala)',
            'Upbringing/discipline (samun tarbiyya)'
          ]
        },
        {
          name: "Al'ada: Hanyoyin Kyautata Tattalin Arziki da Misalansa (Ways to Improve the Economy and Examples)",
          learningOutcome: 'Identify ways of improving the economy with examples.',
          knowledge: [
            'Farming (noma)',
            'Animal husbandry (kiwo)',
            "Handicrafts/trades (sana'o'in hannu)",
            'Trade/commerce (cinikayya)'
          ]
        },
        {
          name: "Harshe: Ci Gaba da Bayanin Ginin Kalma — Tilo da Jam'i (Continuation of Word Formation — Singular and Plural)",
          learningOutcome: 'Continue the explanation of word formation, focusing on singular and plural forms.',
          knowledge: [
            "Word formation — singular (tilo)",
            "Word formation — plural (jam'i)"
          ]
        },
        {
          name: "Al'ada: Ci Gaba da Rubutun Wasiƙa — Yan Uwa da Abokin (Continuation of Letter Writing — Family and Friends)",
          learningOutcome: 'Continue practicing letter writing, focused on letters to family and friends.',
          knowledge: [
            'Continuation of letter writing (ci gaba da rubutun wasiƙa)',
            "Letters to family (yan'uwa) and friends (abokin arziki)"
          ]
        },
        {
          name: "Al'ada: Cikakken Bayani Akan Ire-iren Ayyukan Ibada (Detailed Explanation of Types of Worship Practices)",
          learningOutcome: 'Give a detailed explanation of the different acts of worship.',
          knowledge: [
            'Prayer (sallah)',
            'Fasting (azumi)',
            'Almsgiving (zakkah)',
            'Pilgrimage/visitation (hajj/ziyara)',
            'Maintaining family ties (sada zumunci)',
            'Charity (sadaka)',
            'Gift-giving (kyauta)',
            'Upbringing (tarbiyya)',
            "Good conduct (mu'amala)"
          ]
        },
        {
          name: "Al'ada: Cikakken Bayani Akan Hanyoyin Kyautata Tattalin Arziki (Detailed Explanation of Ways to Improve the Economy)",
          learningOutcome: 'Give a detailed explanation of ways to improve the economy.',
          knowledge: [
            'Modern farming and animal husbandry (noma da kiwo na zamani)',
            'Food processing (sarrafa kayan abinci)',
            "Handicrafts/trades (sana'o'in hannu)"
          ]
        },
        {
          name: "Al'ada: Tasirin Cinikayyar Zamani Akan ta Gargajiya (Influence of Modern Trade on Traditional Trade)",
          learningOutcome: 'Explain the influence of modern trade on traditional forms of trade.',
          knowledge: [
            'Influence of modern trade on traditional trade (tasirin cinikayyar zamani akan ta gargajiya)'
          ]
        },
        {
          name: "Al'ada: Kyawawan Dabi'u da Munana (Good and Bad Character Traits)",
          learningOutcome: 'Identify good and bad character traits and their effects on society.',
          knowledge: [
            'Truthfulness (faɗin gaskiya)',
            'Trustworthiness (rikon amana)',
            'Kinship/family relations (zumunci)',
            'Stealing (sata)',
            'Gossip (gulma)',
            'Substance abuse (shaye-shaye)'
          ]
        },
        {
          name: "Al'ada: Ingancin Tsaftar Jiki da ta Tufafi (Importance of Personal and Clothing Hygiene)",
          learningOutcome: 'Explain the importance of maintaining personal and clothing hygiene.',
          knowledge: [
            'Bathing (wanka)',
            'Laundry (wanki)',
            'Shaving/haircut (aski)',
            'Hairstyling (kitso)',
            'Nail trimming (yanke farce)',
            'Teeth cleaning (goge hakori)'
          ]
        }
      ]
    }
  ]
};
