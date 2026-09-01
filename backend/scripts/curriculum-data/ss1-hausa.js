// SS1 Hausa — First, Second and Third Term
// Source: SchemeofWork.com "Hausa Language Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/hausa-language-scheme-of-work-for-ss-1-federal/
// Source page does not explicitly claim 2025 NESRI reform compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Maimaitawa / Revision, Jarabawa / Examination) are excluded.
// Hausa special characters (Ƙ/ƙ, Ɗ/ɗ, Ɓ/ɓ, ' apostrophe) came through the raw fetched HTML
// as correct UTF-8 text — no custom-web-font mojibake was found on this page (checked for the
// "â€"-style corruption pattern seen on the Yoruba/Igbo sources; none present), so no character
// substitution was needed. Topic names below keep the original Hausa terms with an English gloss.

export const curriculumData = {
  subject: 'Hausa',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Hausa',
      topics: [
        {
          name: "Ƙa'idojin Rubutu I (Writing Rules I)",
          learningOutcome: "Explain the basic rules of Hausa writing and apply them correctly to separate and join words in a sentence.",
          knowledge: [
            "Meaning of ƙa'idojin rubutu (writing/orthography rules)",
            "Separating and joining words correctly, e.g. 'Ali ne', 'Motar baƙa ce', 'ya ci'",
            "Correct joining of words, e.g. 'saboda' not 'sabo da'"
          ]
        },
        {
          name: "Ƙa'idojin Rubutu II (Writing Rules II — Possessives and Consonant Doubling)",
          learningOutcome: "Apply the rules for short possessive forms and consonant linking/doubling in Hausa writing.",
          knowledge: [
            "Short possessive forms, e.g. 'rigarsa' not 'rigar sa', 'gidanmu' not 'gidan mu'",
            "Linking of /m/ or /n/ with supporting consonants, e.g. 'tambaya' not 'tanbaya', 'tinya' not 'timya'",
            "Doubling of supporting consonants, e.g. gyaggyara, shasshare, fyaffyace"
          ]
        },
        {
          name: 'Sassan Jimla (Parts of a Sentence)',
          learningOutcome: 'Define a sentence and identify its two main parts.',
          knowledge: [
            'Meaning of a sentence (jimla)',
            'Parts of a sentence: noun phrase (yankin suna)',
            'Parts of a sentence: verb phrase (yanki aikatau)'
          ]
        },
        {
          name: 'Fayyace Sassan Suna da Aikatau (Elements of the Noun and Verb Phrase)',
          learningOutcome: 'Identify the grammatical elements that make up the noun phrase and the verb phrase in a Hausa sentence.',
          knowledge: [
            'Noun phrase elements: noun, pro-form, pronoun, adjective, qualifier, quantifier, demonstrative',
            'Verb phrase elements: pronoun, tense marker, and other verb-phrase components',
            'Verb (aikatau) as the head of the verb phrase'
          ]
        },
        {
          name: "Insha'i (Composition Writing)",
          learningOutcome: 'State the meaning of composition writing and identify its different types.',
          knowledge: [
            "Meaning of insha'i (composition)",
            'Types of composition: narrative (labari), descriptive (siffantawa), argumentative (muhawara)',
            'Types of composition: discussion (tattaunawa), expository (fayyacewa), letter writing (rubutun wasiƙa)'
          ]
        },
        {
          name: "Sigar Insha'i (Forms and Structure of a Composition)",
          learningOutcome: 'Describe the structural stages of a well-written composition and apply them when writing.',
          knowledge: [
            'Structure of a composition: introduction (gabatarwa), body (gundarin labari), conclusion (kammalawa)',
            'Sequencing of ideas and good style',
            'Appropriate word choice, short sentences, paragraphing, and correct punctuation'
          ]
        },
        {
          name: 'Rabe-Raben Adabin Baka (Classification of Oral Literature)',
          learningOutcome: 'Explain the meaning of oral literature and classify it according to its forms.',
          knowledge: [
            'Meaning of adabin baka (oral literature) by form',
            'Forms: folktale (tatsuniya), legend (almara), story (hikaya), narratives (labarai)',
            "Reference text: 'Rabe-raben Adabi Da Muhimmancinsa' by Dangambo, A. Aimana Publishers"
          ]
        },
        {
          name: 'Waƙoƙin Makaɗa (Songs of Traditional Musicians)',
          learningOutcome: 'Classify traditional Hausa musicians by the social role of their songs and give examples.',
          knowledge: [
            'Palace musicians (makaɗan fada), e.g. Sarkin Taushin Katsina',
            "Community musicians (makaɗan jama'a), e.g. Mamman Shata",
            "Occupational musicians (makaɗan sana'a), e.g. Illori Kalgo",
            "Men's musicians (makaɗan maza), e.g. Gambo (song of thieves)"
          ]
        },
        {
          name: 'Nazarin Zobe (Analysis of the Novel "Zobe")',
          learningOutcome: 'Read the set prose text "Zobe" and analyze its theme, style, and use of language.',
          knowledge: [
            'Reading and understanding the plot of "Zobe"',
            'Identifying the theme (jigo) of the text',
            'Identifying the style (salo) and use of language in the text'
          ]
        },
        {
          name: 'Salon Sarrafa Harshe (Style and Use of Language in the Text)',
          learningOutcome: 'Describe the writer\'s stylistic techniques for holding the reader\'s attention in a prose text.',
          knowledge: [
            'Use of words and word choice for effect',
            "Techniques for drawing the reader's attention",
            'Paragraphing, chaptering, and sentence construction'
          ]
        },
        {
          name: 'Adabin Baka da Tarihin Al\'umma (Oral Literature and Community History)',
          learningOutcome: 'Explain how oral literature preserves the history of the founding of the Hausa people.',
          knowledge: [
            'Founding of towns such as Kano, Barbushe, and Tsumburbura',
            'Durɓi ta Kusheyi',
            'Bayajida and the founding of Hausa Bakwai (the seven Hausa states) and Banza Bakwai'
          ]
        },
        {
          name: 'Jihadin Shehu Danfodio (The Jihad of Shehu Usman Danfodio)',
          learningOutcome: 'Recount the key events surrounding the jihad of Shehu Usman Danfodio and its effect on Hausa kingship.',
          knowledge: [
            'The role of Bawa Jangwarzo',
            'The coming of the British (Turawa)',
            'Wars among the Hausa kings (sarakunan Hausawa)'
          ]
        },
        {
          name: 'Ire-Iren Jimloli (Types of Sentences)',
          learningOutcome: 'Distinguish between verbal and non-verbal (verbless) sentences in Hausa.',
          knowledge: [
            "Verbal sentences, e.g. 'Bala ya ci tuwo', 'Binta ta sha ruwa'",
            "Non-verbal/verbless sentences, e.g. 'Akwai ruwa', 'Babu tuwo'"
          ]
        },
        {
          name: 'Rabe-Raben Rubutaccen Adabi (Classification of Written Literature)',
          learningOutcome: 'Define written literature and identify how it is classified.',
          knowledge: [
            'Meaning of rubutaccen adabi (written literature)',
            'Classification of modern (written) literature',
            'Points to note when classifying written literature'
          ]
        },
        {
          name: 'Tarihin Ajami da Boko (History of Ajami and Boko Writing)',
          learningOutcome: 'Explain the historical background and purpose of the Ajami and Boko (Roman-script) writing systems.',
          knowledge: [
            'History of the introduction of Ajami and Boko scripts',
            'Purposes of written literature',
            'Form and structure (zubi da tsarinsa) of written works'
          ]
        },
        {
          name: 'Rubutattun Waƙoƙi, Zube, da Wasan Ƙwaikwayo (Written Poetry, Prose, and Drama)',
          learningOutcome: 'Trace the development of written Hausa poetry, prose fiction, and drama across different eras and media.',
          knowledge: [
            '19th-century and 20th-century written poetry',
            'Prose fiction (zube/ƙagaggen labari)',
            'Drama (wasan ƙwaikwayo) for television, radio, and stage'
          ]
        },
        {
          name: 'Nazarin Rubutacciyar Waƙa (Analysis of a Written Poem)',
          learningOutcome: 'Identify the message conveyed by a written poem through its form, structure, and style.',
          knowledge: [
            'Identifying the message (saƙo) of the poem',
            'Form (zubi) and structure (tsari) of the poem',
            'Style (salo) and theme (jigo) of the poem'
          ]
        },
        {
          name: 'Zubi da Tsarin Waƙa (Poetic Form and Structure)',
          learningOutcome: 'Describe the structural features of Hausa verse and the poet\'s use of language for effect.',
          knowledge: [
            'Verse structure: couplets and triplets (ƙwar-biyu, uku)',
            'Number of verses, opening, and closing of the poem',
            'Use of borrowed words and attention-drawing techniques'
          ]
        },
        {
          name: 'Tarihi a Adabin Baka (Historical Elements in Oral Literature)',
          learningOutcome: "Identify historical elements preserved within different forms of Hausa oral literature.",
          knowledge: [
            "Forms of oral literature examined: women's songs (waƙoƙin mata)",
            "Musicians' songs (waƙoƙin makaɗa)",
            "History/origin narratives, e.g. how death came to be (yadda mutuwa ta zo)"
          ]
        },
        {
          name: 'Wasannin Gargajiya (Traditional Games and Contests)',
          learningOutcome: 'Describe traditional Hausa contests held between different groups and communities.',
          knowledge: [
            'Contests between ethnic groups (wasanni tsakanin ƙabilu)',
            'Contests between towns (wasanni tsakanin garuruwa)',
            'Traditional combat/wrestling contests (sara)'
          ]
        },
        {
          name: 'Wasa Ƙwaƙwalwa (Riddles)',
          learningOutcome: 'Define riddles and identify their different types.',
          knowledge: [
            "Meaning of wasa ƙwaƙwalwa (riddles/mind games)",
            'Types of riddles used in Hausa oral tradition'
          ]
        },
        {
          name: 'Hikimomin Wasa Ƙwaƙwalwa (The Wisdom Within Riddles)',
          learningOutcome: 'Explain the wisdom and reasoning embedded in traditional Hausa riddles.',
          knowledge: [
            'Analyzing the logic/wisdom behind sample riddles',
            'Practicing riddle-and-answer exchanges'
          ]
        },
        {
          name: 'Nazarin Wasan Ƙwaikwayo I (Analysis of a Drama Text I)',
          learningOutcome: 'Define drama and identify the key elements of a set written drama text.',
          knowledge: [
            'Meaning of wasan ƙwaikwayo (drama) and rubutaccen wasan ƙwaikwayo (written drama)',
            'Theme (jigo), awareness-raising (wayar da kai), and character reformation (gyaran hali)',
            'Moral lesson (nasiha) and entertainment (nishadi)'
          ]
        },
        {
          name: 'Nazarin Wasan Ƙwaikwayo II (Analysis of a Drama Text II — Form and Structure)',
          learningOutcome: 'Describe the structural elements of the set drama text.',
          knowledge: [
            'Form and structure of the play (zubi da tsarin wasa)',
            'Acts (kashi) and scenes (fitowa)',
            "Characters' speech (maganar ɗan wasa) and paragraphing (sakin layi)"
          ]
        },
        {
          name: 'Nazarin Wasan Ƙwaikwayo III (Analysis of a Drama Text III — Language Use)',
          learningOutcome: "Critically appreciate the drama text's use of language across different character types.",
          knowledge: [
            'Use of language (sarrafa harshe) and appropriateness of speech (dacewar magana)',
            "Speech style of a mute character (maganar kurma) and an effeminate character (maganar dandaudu)",
            "Speech style of female characters (maganar mata)"
          ]
        },
        {
          name: "Zamantakewar Al'ummar Hausawa I (Hausa Social Structure I)",
          learningOutcome: 'Explain the meaning of social structure and describe how Hausa society is grouped.',
          knowledge: [
            'Status and value of the Hausa people',
            'How Hausa society is grouped/classified',
            'Meaning of zamantakewa (socialization) and age-based groups: children, youth, adults'
          ]
        },
        {
          name: "Zamantakewar Al'ummar Hausawa II (Hausa Social Structure II — Roles by Group)",
          learningOutcome: 'Describe the roles and responsibilities expected of each social group in Hausa society.',
          knowledge: [
            'Roles of children: upbringing, household chores, farm work, trading, respect for elders',
            "Roles of youth: communal labor (aikin gayya), house work, grinding"
          ]
        },
        {
          name: 'Tufafin Hausawa da Kayan Ado (Hausa Traditional Dress and Adornment)',
          learningOutcome: 'Identify the main categories of traditional Hausa clothing and adornment.',
          knowledge: [
            'Caps (hula): dara, zanna habal-kada, ƙube, malfa, ɗankwara',
            'Gowns (riga): alkyabba, kaftani, jamfa, jallabiya, malun-malun, yar shara',
            'Trousers (wando): tsala, kafi shanu, buje, ture',
            'Footwear (takalma): fed, kafi-katifa, gwandola, shimi, ɗantofi, ɗanfatari, ɗankwali, gyale'
          ]
        },
        {
          name: 'Kayan Sarauta (Chieftaincy/Royal Attire)',
          learningOutcome: 'Identify items of dress associated with Hausa royalty and chieftaincy.',
          knowledge: [
            'Royal robe (alkyabba) and turban (rawani)',
            'Kufta, abaya, and shure',
            'Yartofa and other royal regalia'
          ]
        },
        {
          name: 'Auna Fahimta I (Comprehension I)',
          learningOutcome: 'Demonstrate understanding of a story or poem and explain the meaning of Hausa vocabulary within it.',
          knowledge: [
            'Sharpening understanding of a given story or poem',
            'Giving the meaning of key Hausa words in context'
          ]
        },
        {
          name: 'Auna Fahimta II (Comprehension II — Prose and Poetry)',
          learningOutcome: 'Answer comprehension questions on both prose and poetry passages and explain what comprehension assessment involves.',
          knowledge: [
            'Answering questions based on a prose passage (jawabi)',
            'Answering questions based on a poem (waƙa)',
            'Meaning and forms of comprehension assessment (auna fahimta)'
          ]
        },
        {
          name: 'Dabarun Fassara (Translation Techniques)',
          learningOutcome: 'Explain the meaning of translation and apply different translation techniques to summarize information.',
          knowledge: [
            'Meaning of fassara (translation) and acquiring translation techniques',
            'Types of translation: literal/letter-by-letter (baƙi da baƙi), word-for-word (kalma da kalma), free translation (mai \'yanci)',
            'Producing a summarized translation of a passage'
          ]
        },
        {
          name: "Fassarar Batutuwan Zamantakewa (Translation of Social Issues)",
          learningOutcome: 'Produce a summarized translation of short passages dealing with contemporary social/health issues.',
          knowledge: [
            'Translating information on ƙanjamau (HIV/AIDS)',
            'Translating information on yoyon fitsari (urinary/health complications) and drug abuse (shan miyagun ƙwayoyi)',
            'Translating information on relationships between men and women (dangantakar maza da mata)'
          ]
        }
      ]
    }
  ]
};
