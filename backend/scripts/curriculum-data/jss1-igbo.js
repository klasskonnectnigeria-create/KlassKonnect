// JSS1 Igbo — First, Second, and Third Term
// Source: SchemeofWork.com "Igbo Language Scheme of Work for JSS1 Federal"
// URL: https://schemeofwork.com/igbo-language-scheme-of-work-for-jss1-federal/
// Source page carries no NESRI 2025 reform claim, so curriculumVersion is 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (MMỤGHARỊ IHE A KỤZIRI "revision", ULE "examination", and MMECHI
// "closing" at the end of each term) are excluded below.
// The source page carries two parallel tracks for JSS1 — Asụsụ Igbo L1 (first language /
// native-speaker track) and L2 (second language track) — each with its own full
// three-term scheme. This file uses the L1 track, listed first and primary on the source
// page, as the representative "Igbo" subject content, matching the precedent already set
// for JSS1 Hausa; the L2 track was not merged in to avoid conflating two distinct syllabi
// under one theme.
// The source's weekly table groups several weeks per row with topic/content and
// activity/materials cells that do not align 1:1 to week numbers; topic names and
// knowledge points below were parsed directly from the source's raw HTML table cells
// (ISIOKWU/NDỊNISIOKWU "topic/content" headings), not summarized from memory, and kept
// as separate topics per distinct heading rather than collapsed, per the established
// pattern for this source. Topic names and knowledge points are translated into readable
// English from the source's Igbo headings, with the original Igbo terms retained
// parenthetically for identification — no content is invented; every point traces to a
// specific line on the source page. Second Term runs 12 real weeks and Third Term runs
// 11 real weeks of instruction before administrative weeks, slightly shorter than First
// Term's 12, reflecting the source page's own week counts.

export const curriculumData = {
  subject: 'Igbo',
  grade: 'JSS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS1 Igbo (First Term)',
      topics: [
        {
          name: 'Asụsụ: Nkọwa na Uru Asụsụ (Meaning and Usefulness of Language)',
          learningOutcome: 'Explain the meaning of language (asụsụ) and its usefulness, and identify the characteristics that distinguish human language from other forms of communication.',
          knowledge: [
            'Meaning of language and its usefulness (nkọwa asụsụ na uru asụsụ bara)',
            'Characteristics of language (njirimara asụsụ)',
            "Other non-verbal means of communication, e.g. drum (ekwe), horn (opi), gun (egbe)"
          ]
        },
        {
          name: 'Agụmagụ na Nkenụdị Ya (Literature and Its Genres)',
          learningOutcome: 'Explain the meaning of literature (agụmagụ) and identify its genres, distinguishing the features of oral/traditional literature from modern literature.',
          knowledge: [
            'Meaning of literature (nkọwa agụmagụ)',
            'Genres of literature (nkenụdị agụmagụ)',
            'Features of oral/traditional literature (njirimara agụmagụ ọdịnala)',
            'Features of modern literature (njirimara agụmagụ ugbu a)'
          ]
        },
        {
          name: 'Ndị Igbo (The Igbo People)',
          learningOutcome: 'Describe the Igbo people, identifying their language, where they live, their traditional attire, and their neighbouring ethnic groups on a map.',
          knowledge: [
            'Their language (asụsụ ha)',
            'Where they live (ebe ha bi)',
            'Their traditional attire (ejiji ha)',
            'Their neighbours (ndị agbataobi ha)',
            'Locating Igbo states and their neighbours on a map'
          ]
        },
        {
          name: 'Omenala Ndị Igbo (Igbo Customs and Traditions)',
          learningOutcome: 'Explain selected Igbo customs and traditions with examples, and demonstrate appropriate Igbo greetings for different occasions.',
          knowledge: [
            'Meaning of some customs with examples, e.g. new yam festival (iri ji), wrestling (ịgba mgba), kola nut breaking (ịwa ọjị), marriage (ịlụ nwaanyị)',
            "Igbo greetings for different occasions and times (ekele ndị Igbo n'oge dị iche iche)"
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Ọdee na Isiokwu (Prose Reading — Author and Theme)',
          learningOutcome: 'Read a selected prose text, identify its author, title/theme and plot, and explain new vocabulary encountered in the story.',
          knowledge: [
            'Reading a selected prose text (ịgụ akwụkwọ iduuazị a họpụtara)',
            'Identifying the author, theme and plot of the story (aha odee, isiokwu ya na ihe akụkọ na-akọ)',
            "Explaining new vocabulary from the story (nkọwa okwu ọhụrụ ndị pụtara n'akụkọ)"
          ]
        },
        {
          name: 'Ụdaasụsụ / Nsoroedide: Ụdaume na Mgbochiume (Phonology — Vowels and Consonants)',
          learningOutcome: 'Write and read Igbo letters/alphabet, and classify them into vowels and consonants, identifying the differences between the two.',
          knowledge: [
            'Writing and reading letters of the alphabet (ọdịde na ọgụgụ mkpụrụedemede/abịdị)',
            'Classification: vowels (ụdaume) and consonants (mgbochiume)',
            "Differences between vowels and consonants (ndịiche dị n'etiti ha abụọ)"
          ]
        },
        {
          name: 'Nsoroedide: Mgbochiume na Myiriụdaume (Orthography — Long/Short Consonants and Semi-Vowels)',
          learningOutcome: 'Identify long and short consonants and semi-vowels, use them to form words, and explain the differences between consonants and semi-vowels.',
          knowledge: [
            'Long consonants (mgbochiume nge)',
            'Short consonants (mgbochiume mkpị)',
            'Semi-vowels (myiriụdaume)',
            'Using them to form words (iji ha mebe mkpụrụokwu)',
            'Explaining the differences between consonants and semi-vowels'
          ]
        },
        {
          name: 'Nkewa Ụdaume: Ụdaarọ na Ụdamfe (Classification of Vowels — Long and Short)',
          learningOutcome: 'Classify vowels into long and short types, identify the differences between them, and use them together with consonants to form words and sentences.',
          knowledge: [
            'Classification of vowels (nkewa ụdaume)',
            'Long vowel (ụdaarọ) and short vowel (ụdamfe)',
            'Differences between long and short vowels',
            'Using vowels and consonants to form words and use them in sentences'
          ]
        },
        {
          name: 'Ọnụọgụgụ: Ọnụọgụgụ 1–500 (Numbers 1–500)',
          learningOutcome: 'Explain the meaning of numbers, read new numbers from 1 to 100, and read numbers from 101 to 500.',
          knowledge: [
            'Meaning of numbers (nkọwa ọnụọgụgụ)',
            'New numbers 1–100 (ọnụọgụgụ ọhụrụ)',
            'Reading numbers 101–500'
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Usorookwu na Okwu Ọhụrụ (Prose Reading — Sentence Structure and Vocabulary)',
          learningOutcome: 'Continue reading a selected prose text, explaining its sentence structure and new vocabulary, and summarizing what was read.',
          knowledge: [
            'Reading the selected prose text (ọgụgụ akwụkwọ iduuazị)',
            'Explaining sentence structure and new vocabulary (nkọwa usorookwu, okwu ọhụrụ)',
            "Summarizing the content read (nchịkọta ihe a gụrụ ọnụ)"
          ]
        },
        {
          name: 'Akaraedemede (Punctuation Marks)',
          learningOutcome: 'Identify the meaning and types of punctuation marks and use them correctly in sentences.',
          knowledge: [
            'Meaning and types of punctuation marks: comma (rịkọm), full stop (kpọm), semi-colon (kpọm rịkọm), exclamation mark (akara ngwu), question mark (njụajụjụ), quotation marks (akara mkpu)',
            "Using punctuation marks in sentences (ntinye ha n'ahịrịokwu)"
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Ntụle Agwa na Nchịkọta (Prose Reading — Character Evaluation and Summary)',
          learningOutcome: 'Continue reading a prose text, explain the sentence structure and vocabulary, evaluate the characters in the story, and summarize the story and its lessons.',
          knowledge: [
            'Continued reading of the prose text',
            'Explaining sentence structure and vocabulary from the story',
            "Evaluating the characters in the story (ntụle agwa ndị batara n'iduuazi)",
            "Summarizing the story and its lessons (nchịkọta akụkọ a kọrọ na ihe mmụta dị n'akụkọ)"
          ]
        }
      ]
    },
    {
      name: 'JSS1 Igbo (Second Term)',
      topics: [
        {
          name: 'Ekwumekwu: Ihe Ụmụaka Na-eme (Daily Activities — Weekdays and Weekends)',
          learningOutcome: 'Describe the daily activities children engage in on regular weekdays (Monday to Friday) and on Saturdays.',
          knowledge: [
            "What children do on regular weekdays, Monday to Friday (ihe ụmụaka na-eme n'ụbọchị nkịtị)",
            "What children do on Saturdays (ihe ụmụaka na-eme n'ụbọchị Satọdee)"
          ]
        },
        {
          name: 'Ezinụlọ: Nkọwa na Ụdị Ezinụlọ (Meaning, Members and Types of Family)',
          learningOutcome: 'Explain what a family is, identify its members, describe different types of family, and state the roles of parents in the family.',
          knowledge: [
            'Meaning of family (nkọwa ihe bụ ezinụlọ)',
            "Members of the family (ndị a na-ahụ n'ezinụlọ)",
            'Types of family: nuclear (mkpuke), extended/polygamous (mbisa na ụbara)',
            "Roles of parents in the family (ọrụ nne na nna n'ezinụlọ)"
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Odee na Isiokwu (Written Drama — Playwright, Theme and Plot)',
          learningOutcome: 'Identify the playwright, theme, and plot of a selected drama text, read the drama, and explain its sentence structure and new vocabulary.',
          knowledge: [
            "Identifying the playwright, theme and plot of the drama (ntụle odee ejije, isiokwu na ihe ọdee na-akọwa)",
            'Reading the selected drama text (ọgụgụ akwụkwọ ejije)',
            'Explaining sentence structure and new vocabulary (nkọwa usorookwu na okwu ọhụrụ)'
          ]
        },
        {
          name: 'Ezinụlọ: Ọrụ Ụmụaka na Uru Ezinụlọ (Roles of Children and Benefits of Family)',
          learningOutcome: 'State the roles children play within the family and explain the benefits of family.',
          knowledge: [
            "Roles of children in the family (ọrụ ụmụaka n'ezinụlọ)",
            'Benefits of family (uru ezinụlọ bara)'
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Ọgụgụ na Okwu Ọhụrụ (Written Drama — Continued Reading and Vocabulary)',
          learningOutcome: 'Continue reading the selected drama text and explain its sentence structure and new vocabulary.',
          knowledge: [
            'Continued reading of the selected drama text',
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: 'Ahụike (Health)',
          learningOutcome: 'Explain what health is, identify factors that affect health, describe different types of diseases, and state ways of preventing disease.',
          knowledge: [
            'Meaning of health (nkọwa ihe bụ ahụike)',
            'Factors affecting health (ihe dị iche iche na-ebute ahụike)',
            'Types of diseases (ụdị ọrịa dị iche iche)',
            'Ways of preventing disease (ụzọ e si egbochi ọrịa)'
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Nkọwa Okwu Ọhụrụ na Ịza Ajụjụ (Written Drama — Vocabulary and Comprehension)',
          learningOutcome: 'Read the selected drama text, explain new vocabulary encountered, and answer comprehension questions on it.',
          knowledge: [
            'Reading the selected drama text',
            'Explaining new vocabulary',
            'Answering comprehension questions'
          ]
        },
        {
          name: 'Ọnụọgụgụ: Narị Ise na Otu Ruo Otu Puku (Numbers 501–1000)',
          learningOutcome: 'Read out numbers from 501 to 1,000.',
          knowledge: [
            'Reading numbers from 501 to 1,000 (ịgụpụta ọnụọgụgụ site na narị ise na otu ruo otu puku)'
          ]
        },
        {
          name: 'Ọnụọgụgụ: Otu Puku Ruo Puku Ise (Numbers 1001–5000)',
          learningOutcome: 'Read out numbers from 1,001 to 5,000.',
          knowledge: [
            "Reading numbers from 1,001 to 5,000 (ịgụpụta ọnụọgụgụ site n'otu puku na otu ruo puku ise)"
          ]
        },
        {
          name: 'Ọrụ Dị Iche Iche (Different Occupations)',
          learningOutcome: 'Identify various occupations done by men and women, such as farming and teaching.',
          knowledge: [
            'Different types of jobs done by men and women (ụdị ọrụ dị iche iche ụmụ nwoke na ụmụ nwaanyị na-arụ)',
            'Examples of occupations, e.g. farming (ọrụ ugbo), teaching (ọrụ nkụzi)'
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Ntụle Agwa na Nchịkọta (Written Drama — Character Evaluation and Summary)',
          learningOutcome: 'Read the drama text, evaluate the characters portrayed, and summarize the drama.',
          knowledge: [
            'Reading the drama',
            "Evaluating the characters in the drama (ntụle agwa ndị batara n'ejije)",
            'Summarizing the drama (nchịkọta ejije)'
          ]
        },
        {
          name: 'Ahịrịokwu (Sentence Types)',
          learningOutcome: 'Explain the meaning of a sentence and its types, identify different sentence types, and construct different types of sentences.',
          knowledge: [
            'Meaning of a sentence and its types (nkọwa ahịrịokwu na ụdị ya gasị)',
            'Identifying different sentence types (ịkpọpụta ụdị ahịrịokwu dị iche iche)',
            'Constructing different sentence types (imepụta ụdị ahịrịokwu dị iche iche)'
          ]
        }
      ]
    },
    {
      name: 'JSS1 Igbo (Third Term)',
      topics: [
        {
          name: 'Agụmagụ Ọdịnala (Traditional/Oral Literature)',
          learningOutcome: 'Explain the meaning and types of traditional/oral literature — folktales, traditional songs and traditional drama — with examples, and identify the features of oral literature.',
          knowledge: [
            'Meaning and types of traditional/oral literature: folktales (akụkọ ifo), traditional songs (abụ ọdịnala), traditional drama (ejije ọdịnala)',
            'Examples of traditional literature (ọmụmaatụ ha)',
            'Features of oral/traditional literature (njirimara agụmagụ ọdịnala)'
          ]
        },
        {
          name: 'Ọnụọgụgụ: Puku Ise Ruo Otu Nde (Numbers 5,000–1,000,000)',
          learningOutcome: 'Read out numbers from 5,000 to 1,000,000.',
          knowledge: [
            'Reading numbers from 5,000 to 1,000,000 (ịgụpụta ọnụọgụgụ site na puku ise ruo otu nde)'
          ]
        },
        {
          name: 'Ọrụ Ndị Igbo (Occupations of the Igbo People)',
          learningOutcome: 'Describe traditional occupations of the Igbo people before and after colonial contact, and name towns known for specific occupations.',
          knowledge: [
            'Occupations of the Igbo people before the arrival of Europeans and in modern times',
            'Towns known for specific occupations, e.g. blacksmithing in Awka (ịkpụ ụzụ — Ọka), weaving in Akwaete (ikwe akwa — Akwaete)'
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Isiokwu na Ihe Abụ (Written Poetry — Theme and Content)',
          learningOutcome: 'Read and recite two selected poems, identify their theme and content, and explain the sentence structure and new vocabulary they contain.',
          knowledge: [
            'Reading two selected poems (ọgụgụ abụ abụọ a họpụtara)',
            'Reciting the poems (ngụpụta abụ)',
            "Identifying the theme and content of the poems (ntụle isiokwu na ihe abụ na-akọ maka ya)",
            'Explaining sentence structure and new vocabulary in the poems'
          ]
        },
        {
          name: 'Nrụkọrịta Ọrụ na Uru Ya (Cooperative Work and Its Benefits)',
          learningOutcome: 'Explain the meaning and process of cooperative work, and state its benefits and drawbacks.',
          knowledge: [
            'Meaning of cooperative work (nkọwa nrụkọrịta ọrụ)',
            'Process of cooperative work (usoro nrụkọrịta ọrụ)',
            'Benefits and drawbacks of cooperative work (uru na ọghọm ya)'
          ]
        },
        {
          name: 'Nzisa Ozi (Communication)',
          learningOutcome: 'Explain what communication is, identify various means of communication, and state its benefits and drawbacks.',
          knowledge: [
            'Meaning of communication (nkọwa nzisa ozi)',
            'Various means of communication (ụzọ nzisa ozi dị iche iche)',
            'Benefits of communication (uru nzisa ozi bara)',
            "Drawbacks of communication (ọghọm dị n'izisa ozi)"
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Ọgụgụ na Nkọwa Usorookwu (Written Poetry — Continued Reading)',
          learningOutcome: 'Continue reading the selected poems and explain their sentence structure and new vocabulary.',
          knowledge: [
            'Continued reading of the selected poems',
            'Explaining sentence structure and new vocabulary'
          ]
        },
        {
          name: 'Ezinụlọ: Mmụọ Ụmụ (Family Planning)',
          learningOutcome: 'Discuss how many children one should plan to have and can adequately care for, and explain the benefits of having fewer children versus the drawbacks of having many.',
          knowledge: [
            'How many children one should plan to have (mụọ ole ị ga-azụtalị)',
            'Benefits of having fewer children (uru dị n\'amụghị ọtụtụ ụmụ)',
            "Drawbacks of having many children (ọghọm dị n'ịmụ ọtụtụ ụmụ)",
            'Class discussion on the benefits of having fewer children'
          ]
        },
        {
          name: 'Nchekwa Gburugburu (Environmental Conservation)',
          learningOutcome: 'Discuss the care and conservation of our environment, identify things that damage the environment such as flooding and erosion, explain their causes, and state ways of preventing them.',
          knowledge: [
            'Discussion on environmental care and conservation (nlekọta na nchekwa gburugburu anyị)',
            'Things that damage the environment, e.g. flooding (ide mmiri), erosion (mbuze)',
            'Causes of environmental damage',
            'Ways of preventing environmental damage (ụzọ mgbochi ha)'
          ]
        },
        {
          name: 'Ọnụọgụgụ: Mmụgharị 1–1,000,000 (Numbers — Revision 1 to 1,000,000)',
          learningOutcome: 'Revise reading of numbers from 1 to 1,000,000.',
          knowledge: [
            'Revision of numbers from 1 to 1,000,000 (mmụgharị ọnụọgụgụ)'
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Nchịkọta Abụ na Ihe Mmụta (Written Poetry — Summary and Lessons)',
          learningOutcome: 'Read the selected poems, explain their sentence structure and new vocabulary, and summarize the poems along with the lessons they contain.',
          knowledge: [
            'Reading the selected poems',
            'Explaining sentence structure and new vocabulary',
            "Summarizing the poems and their lessons (nchikọta abụ na ihe mmụta dị n'abụ)"
          ]
        }
      ]
    }
  ]
};
