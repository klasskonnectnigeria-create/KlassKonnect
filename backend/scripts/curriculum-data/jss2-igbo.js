// JSS2 Igbo — First, Second, and Third Term
// Source: SchemeofWork.com "Igbo Language Scheme of Work for JSS2 Federal"
// URL: https://schemeofwork.com/igbo-language-scheme-of-work-for-jss2-federal/
// Source page carries no NESRI 2025 reform claim, so curriculumVersion is 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (MMỤGHARỊ IHE A KỤZIRI "revision" and ULE/MMECHI "examination/closing"
// at the end of each term) are excluded below.
// The source page carries two parallel tracks for JSS2 — Asụsụ Igbo L1 (first language /
// native-speaker track) and L2 (second language track) — each with its own full
// three-term scheme. This file uses the L1 track, listed first and primary on the source
// page, as the representative "Igbo" subject content, matching the precedent already set
// for JSS1 Igbo; the L2 track was not merged in to avoid conflating two distinct syllabi
// under one theme.
// The source's weekly table groups all weeks per term into single topic/content and
// activity/materials cells that do not align 1:1 to week numbers; topic names and
// knowledge points below were parsed directly from the source's raw HTML table cells
// (ISIOKWU/NDỊNISIOKWU "topic/content" headings), not summarized from memory, and kept
// as separate topics per distinct heading rather than collapsed, per the established
// pattern for this source. Topic names and knowledge points are translated into readable
// English from the source's Igbo headings, with the original Igbo terms retained
// parenthetically for identification — no content is invented; every point traces to a
// specific line on the source page. Several consecutive weeks in each term share near-
// identical reading/sentence-structure objectives (repeated prose/drama/poetry reading
// sessions); these are kept as separate topics per week, with the shared-objective
// relationship noted in the learningOutcome text rather than inventing distinct
// objectives per week, per the agent's stated pattern for this source. Each term runs
// 10 real topic weeks before the closing administrative (revision/exam) weeks.

export const curriculumData = {
  subject: 'Igbo',
  grade: 'JSS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS2 Igbo (First Term)',
      topics: [
        {
          name: 'Ekwumekwu: Nrụbeisi na Ndebeiwu (Discourse — Obedience and Law-Abidance)',
          learningOutcome: 'Explain the meaning of obedience and law-abidance, give real-life examples of obedient and rule-following behaviour, and state their benefits and drawbacks.',
          knowledge: [
            'Meaning of obedience (nrụbeisi) and law-abidance (ndebeiwu)',
            "Examples of obedient/law-abiding behaviour, e.g. running errands (ịga ozi), paying dues/taxes (ịkwụ ụtụisi), coming to school on time (ịbịa akwụkwọ n'oge)",
            'Benefits and drawbacks of obedience and law-abidance (uru na ọghọm)'
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Ọdee na Isiokwu (Prose Reading — Author and Theme)',
          learningOutcome: 'Read a selected prose text, identify its author and the theme/subject matter of the story, and explain the sentence structure and new vocabulary encountered.',
          knowledge: [
            'Reading a selected prose text (ọgụgụ akwụkwọ iduuazị a họpụtara)',
            "Identifying the author and theme/subject of the story (aha odee, isiokwu na ndị n'isiokwu akụkọ)",
            'Explaining sentence structure and new vocabulary (nkọwa usoro okwu na okwu ọhụrụ)'
          ]
        },
        {
          name: "Nkụzi Izu na Oge Dị n'Afọ (Igbo Week Days and Times of the Year)",
          learningOutcome: 'Recite the four Igbo market days, the seven-day week, and the months of the year.',
          knowledge: [
            'The four Igbo market days: Eke, Orie, Afọ, Nkwọ',
            'The seven-day week (Mọnde ruo Sọnde — Monday to Sunday)',
            "The months of the year (Ọnwa dị n'afọ)"
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Ọgụgụ na Usoro Okwu I (Prose Reading — Reading and Sentence Structure I)',
          learningOutcome: "Read a selected prose text and explain its sentence structure and new vocabulary; this objective is shared with the following week's session on the same skill.",
          knowledge: [
            'Reading a selected prose text (ọgụgụ akwụkwọ iduuazị)',
            'Explaining sentence structure and new vocabulary (nkọwa usoro okwu na okwu ọhụrụ)'
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Ọgụgụ na Usoro Okwu II (Prose Reading — Reading and Sentence Structure II)',
          learningOutcome: "Continue reading the selected prose text from the previous week and explain its sentence structure and new vocabulary.",
          knowledge: [
            'Continued reading of the selected prose text (ọgụgụ akwụkwọ iduuazị a họpụtara)',
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: 'Nsoroedide: Mkpọpụta Mkpụrụokwu na Ọnụọgụgụ (Orthography — Word Pronunciation/Writing and Numbers)',
          learningOutcome: 'Pronounce and write words correctly to demonstrate mastery of the Igbo alphabet, and read numbers from 1,000,000 to 2,000,000.',
          knowledge: [
            'Pronunciation and writing of words to show mastery of the alphabet (mkpọpụta mkpụrụokwu na odide ihe iji gosi na ha amụtala abịdị)',
            "Reading numbers from 1,000,000 to 2,000,000 (ịgụ ọnụọgụgụ site n'otu nde ruo na nde abụọ)"
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Mmụgharị Ọgụgụ (Prose Reading — Revision Reading)',
          learningOutcome: 'Re-read the selected prose text as revision ahead of the numbers and character-evaluation topics that follow.',
          knowledge: [
            'Revision reading of the selected prose text (ọgụgụ akwụkwọ iduuazị a họpụtara na agarịrị)'
          ]
        },
        {
          name: 'Ọnụọgụgụ: Otu Nde Ruo Nde Ise (Numbers — 1,000,000 to 5,000,000)',
          learningOutcome: 'Read numbers from 1,000,000 to 5,000,000 and insert numbers correctly into sentences.',
          knowledge: [
            "Numbers from 1,000,000 to 5,000,000 (ọnụọgụgụ bido n'otu nde ruo na nde ise)",
            "Inserting numbers into sentences (ntinye ọnụọgụgụ n'ahịrịokwu)"
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Ntụle Agwa na Nchịkọta (Prose Reading — Character Evaluation and Summary)',
          learningOutcome: 'Read the selected prose text, explain its sentence structure and new vocabulary, evaluate the characters that feature in it, and summarize the story along with its lessons.',
          knowledge: [
            'Reading the selected prose text (ọgụgụ akwụkwọ iduuazị a họpụtara)',
            'Explaining sentence structure and new vocabulary',
            "Evaluating the characters featured in the story (ntụle agwa ndị kara pụta ihe n'iduuazị)",
            "Summarizing the story and its lessons (nchịkọta akụkọ na ihe mmụta sitere n'akụkọ)"
          ]
        },
        {
          name: 'Ahịrịokwu (Sentence Types)',
          learningOutcome: 'Explain the meaning of sentence types, study simple sentences and their kinds in the present tense, and revise sentence types in the future and past tenses.',
          knowledge: [
            'Meaning of sentence types (nkọwa ahịrịokwu)',
            'Simple sentences and their kinds in the present tense (ahịrịmfe na ụdị ya, ahịrịmfe ndịnugbua)',
            'Revision of sentence types (ahịrịokwu na agarịrị)',
            'Future-tense sentences (ahịrịmfe ndịniihu)',
            'Past-tense sentences (ahịrịmfe ndịnaazụ)'
          ]
        }
      ]
    },
    {
      name: 'JSS2 Igbo (Second Term)',
      topics: [
        {
          name: 'Agụmagụ: Ejije Ederede — Ọdee na Isiokwu (Written Drama — Playwright and Theme)',
          learningOutcome: 'Read a selected drama text, identify its playwright and theme/characters, and explain its sentence structure and new vocabulary.',
          knowledge: [
            'Reading a selected drama text (ọgụgụ akwụkwọ ejije a họpụtara)',
            "Identifying the playwright, theme and characters (aha odee, isiokwu na ndị n'isiokwu ejije ya)",
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: "Otu Nzuzo n'Ụlọakwụkwọ na Iji Mmadụ Atụ Mgbere Ahịa (Secret Societies in School and Peer Ridicule)",
          learningOutcome: 'Explain what secret societies are and give examples of ones common in schools, state the drawbacks of joining them, and explain what it means to make someone an object of ridicule, its causes and drawbacks.',
          knowledge: [
            'Meaning of secret societies and examples (nkọwa otu nzuzo na ọmụmaatụ ha)',
            "Secret societies commonly found in schools (otu nzuzo ndị na-apụtakarị ihe n'ụlọakwụkwọ)",
            "Drawbacks of joining a secret society in school (ọghọm ịba n'otu nzuzo n'ụlọakwụkwọ)",
            'Meaning of mocking/ridiculing others (iji mmadụ atụ mgbere ahịa)',
            'Different ways people are made objects of ridicule, their drawbacks, and what can lead to it'
          ]
        },
        {
          name: 'Agụmagụ: Ejije — Ọgụgụ na Usoro Okwu (Drama — Continued Reading and Sentence Structure)',
          learningOutcome: 'Continue reading the selected drama text and explain its sentence structure and new vocabulary.',
          knowledge: [
            'Reading the selected drama text (ọgụgụ akwụkwọ ejije a họpụtara)',
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: 'Nkejiasụsụ: Mkpọaha, Ngwaa na Nkọwaaha (Parts of Speech — Nouns, Verbs and Qualifiers)',
          learningOutcome: 'Explain what parts of speech are and list their different kinds, with focus on nouns, verbs, and qualifiers/adjectives, giving examples of each in sentences.',
          knowledge: [
            'Meaning of parts of speech and list of the different kinds (nkọwa nkejiasụsụ na ndepụta ụdị ya)',
            'Nouns (mkpọaha) with examples in sentences',
            'Verbs (ngwaa) with examples',
            'Qualifiers/adjectives (nkọwaaha) with examples'
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Ọgụgụ Ọzọ (Drama — Further Reading)',
          learningOutcome: 'Continue reading the selected drama text and explain its sentence structure and new vocabulary, building on the previous drama-reading sessions.',
          knowledge: [
            'Reading the selected drama text (ọgụgụ akwụkwọ ejije a họpụtara)',
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: 'Nkejiasụsụ: Njikọ na Mbuụzọ (Parts of Speech — Conjunctions and Prepositions)',
          learningOutcome: 'Explain conjunctions and prepositions, giving examples of each.',
          knowledge: [
            'Conjunctions (njikọ) with examples',
            'Prepositions (mbuụzọ) with examples'
          ]
        },
        {
          name: 'Nkejiasụsụ: Nkwuwa na Mgbakwụnye (Parts of Speech — Interjections and Intensifiers)',
          learningOutcome: 'Explain interjections and intensifiers/additive words, giving examples of each.',
          knowledge: [
            'Interjections (nkwuwa) with examples',
            'Intensifiers/additive words (mgbakwụnye) with examples'
          ]
        },
        {
          name: 'Ọnụọgụgụ: 2,000,000–3,000,000 (Numbers)',
          learningOutcome: 'Read numbers from 2,000,000 to 3,000,000.',
          knowledge: [
            'Reading numbers from 2,000,000 to 3,000,000 (ịgụ ọnụọgụgụ site na nde abụọ ruo na nde atọ)'
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Nchịkọta na Ntụle Agwa (Drama — Summary and Character Evaluation)',
          learningOutcome: 'Read the selected drama text, summarize it, evaluate the characters, customs, and stylistic devices used in it, and state the lessons the drama teaches.',
          knowledge: [
            'Reading the selected drama text (ọgụgụ ejije a họpụtara)',
            'Summarizing the drama (nchịkọta akwụkwọ ejije)',
            'Evaluating the characters, customs and language techniques used in the drama (ntụle agwa, omenala na asụsụ nka ndị kara pụta ihe)',
            "Summarizing the drama and its lessons (nchịkọta na ihe mmụta sitere n'ejije)"
          ]
        },
        {
          name: "Mkparịtaụka na Ahụike: Ikike Ụmụnwaanyị na Mgbochi Ọgwụ Aghara Aghara (Discussion and Health — Women's Rights and Drug-Abuse Prevention)",
          learningOutcome: "Discuss supporting and giving women the right to become whatever they choose to be, and explain the meaning of health, what to do to stay healthy, how to identify spoiled drugs, and the dangers of indiscriminate drug use.",
          knowledge: [
            "Class discussion on supporting women's right to be whatever they choose to be (ịkwado na inye ụmụnwaanyị ikike ịbụ ihe ọ bụla ha chọrọ ịbụ)",
            'Meaning of health (nkọwa ahụike)',
            'What to do to maintain good health',
            "How to identify spoiled/harmful drugs (etu e si amata ọgwụ ndị meruru emeru)",
            "Dangers/drawbacks of indiscriminate drug use (ọghọm dị n'ịṅụ ọgwụ aghara aghara)"
          ]
        }
      ]
    },
    {
      name: 'JSS2 Igbo (Third Term)',
      topics: [
        {
          name: "Ikpochapụ Ụbịam na Agụụ n'Ala Anyị (Eradicating Poverty and Hunger in Our Land)",
          learningOutcome: 'Explain the meaning of poverty and hunger, identify the various causes of poverty and hunger, state ways of eradicating or preventing them, and discuss how they affect families and communities.',
          knowledge: [
            'Meaning of the topic — poverty and hunger (nkọwa isiokwu)',
            'Various causes of poverty and hunger (ihe dị iche iche na-ebute ụbịam na agụụ)',
            'Ways of eradicating or preventing poverty and hunger (ụzọ dị iche iche e si ekpochapụ maọbụ egbochi ụbịam na agụụ)',
            'Class discussion on how poverty and hunger affect families and communities'
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Ọgụgụ na Isiokwu I (Written Poetry — Reading and Theme I)',
          learningOutcome: 'Read two selected poems, recite them, identify their theme and content, and explain their sentence structure and new vocabulary.',
          knowledge: [
            'Reading two selected poems (ọgụgụ abụ abụọ a họpụtara)',
            'Reciting the poems (ngụpụta abụ)',
            'Identifying the theme and content of the poems (ntụle isiokwu na ihe abụ na-akọ)',
            'Explaining sentence structure and new vocabulary in the poems'
          ]
        },
        {
          name: 'Akụnụba na Aghọtaazaa (Wealth/Resources and Listening Comprehension)',
          learningOutcome: 'Discuss the different ways communities generate wealth, such as farming, trading, and setting up industries, and answer listening-comprehension questions.',
          knowledge: [
            'Class discussion on ways communities generate wealth: farming (ọrụugbo), trading/market activities (ịtụ mgbere ahịa), setting up industries (ịrụ ụlọ mpepụta ahịa)',
            'Meaning of listening comprehension (nkọwa aghọtaazaa)',
            'Question-and-answer procedure for listening comprehension (usoro ajụjụ/azịza aghọtaazaa)'
          ]
        },
        {
          name: 'Edemede (Composition/Essay Writing)',
          learningOutcome: 'Explain the meaning and different types of composition, including letter writing, and distinguish the long essay from the two types of letter writing.',
          knowledge: [
            'Meaning of composition and its different types, e.g. letter composition (nkọwa edemede na ụdị ya, dịka kọmpozishọn leta)',
            'Meaning of the long essay and its kinds (nkọwa edemede ogologo na ụdị ya)',
            'Meaning of letter writing and its two types (nkọwa edemede leta na ụdị ya abụọ)'
          ]
        },
        {
          name: 'Ọnụọgụgụ: 4,000,000–5,000,000 (Numbers)',
          learningOutcome: 'Read numbers from 4,000,000 to 5,000,000.',
          knowledge: [
            'Reading numbers from 4,000,000 to 5,000,000 (ịgụ ọnụọgụgụ site na nde anọ ruo na nde ise)'
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Ọgụgụ na Isiokwu II (Written Poetry — Reading and Theme II)',
          learningOutcome: 'Continue reading the two selected poems, recite them, identify their theme and content, and explain their sentence structure and new vocabulary.',
          knowledge: [
            'Reading the two selected poems',
            'Reciting the poems',
            'Identifying theme and content',
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: 'Ahụike Ndị Ntorọbịa (Adolescent Health)',
          learningOutcome: 'Explain the meaning of adolescent health, describe the physical changes that occur in male and female adolescents, identify diseases that commonly affect them, and state ways of preventing these diseases.',
          knowledge: [
            'Meaning of the topic (nkọwa isiokwu)',
            "Physical changes in male and female adolescents (mgbanwe na-adị n'ahụ ndị ntorọbịa na agbọghọbịa)",
            'Diseases that commonly affect adolescents (ọrịa ụfọdụ na-emetụta ndị ntorọbịa)',
            'Ways of preventing these diseases (ụzọ mgbochi ọrịa ndị a)'
          ]
        },
        {
          name: 'Ahụike na Nri (Health — Food and Nutrition)',
          learningOutcome: 'Discuss how to identify good food from spoiled food, read a comprehension passage related to the topic, and answer questions on it.',
          knowledge: [
            'Class discussion on identifying good food versus spoiled food (ụzọ e si amata ezigbo nri na nri mebiri emebi)',
            'Reading a comprehension passage related to the topic (ịgụ aghọtaazaa metụtara isiokwu a)',
            'Answering comprehension questions (ịza ajụjụ so aghọtaazaa)'
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Ọgụgụ na Isiokwu III (Written Poetry — Reading and Theme III)',
          learningOutcome: 'Continue reading the two selected poems as revision, reciting them, identifying their theme and content, and explaining sentence structure and new vocabulary.',
          knowledge: [
            'Reading the two selected poems',
            'Reciting the poems',
            'Identifying theme and content',
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Nchịkọta na Ihe Mmụta (Written Poetry — Summary and Lessons)',
          learningOutcome: 'Read the selected poems, summarize them and the lessons they teach, and explain their sentence structure and new vocabulary.',
          knowledge: [
            'Reading the selected poems (ọgụgụ abụ a họpụtara)',
            'Summarizing the poems and the lessons they teach (nchịkọta abụ na ihe abụ na-akụzi)',
            'Explaining sentence structure and new vocabulary (nkọwa usorookwu na okwu ọhụrụ)'
          ]
        }
      ]
    }
  ]
};
