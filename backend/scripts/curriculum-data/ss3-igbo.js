// SS3 Igbo — First & Second Term
// Source: Syllabus.ng "SSS3 Igbo Scheme of Work" (Lagos State unified scheme)
// URL: https://syllabus.ng/ss3-scheme-of-work/igbo/
// The 61-subject catalogue lists "One Nigerian Language" as a single subject; students
// actually choose from Yoruba, Igbo, or Hausa. Igbo and Hausa were both sourced as separate
// subjects (see ss3-hausa.js). Yoruba was not sourced: schemeofwork.com/syllabus.ng's Yoruba
// page link is broken (redirects to their Agricultural Science page — a site bug, not a real
// Yoruba page) and no working alternative Yoruba SS3 page was found.
// Source does not claim NESRI-2025 compliance; this subject also predates the reform, so
// 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Source content is in Igbo; topic names have been translated to English for catalogue
// consistency, retaining Igbo-specific grammatical/cultural terms in parentheses.
// Administrative weeks (welcome/placement tests, Mid-Term Break, Revision, Examination)
// excluded. Some weeks in the source contain two sub-topics under one week number — split
// into separate topics where content is genuinely distinct.
// Only First and Second Term were available on this source; Third Term not found.

export const curriculumData = {
  subject: 'Igbo',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Igbo',
      topics: [
        // ---- First Term ----
        {
          name: 'Grammar: Types of Sentences (Nkejiokwu)',
          learningOutcome: 'Explain what a clause/sentence type (nkejiokwu) is and identify the basis on which each type is classified, distinguishing words that show each type.',
          knowledge: [
            'Meaning of nkejiokwu (sentence/clause types)',
            'Basis for classifying sentence types',
            'Distinguishing words indicating each sentence type'
          ]
        },
        {
          name: 'Culture: The Age-Grade System (Otu Ogbo)',
          learningOutcome: 'Explain the meaning and function of the age-grade system, its various types in Igboland, and give an opinion on its relevance today.',
          knowledge: [
            'Meaning of the age-grade system (otu ogbo)',
            'Function of the age-grade system',
            'Advantages and importance of the age-grade system',
            'Types of age-grade systems found in Igboland'
          ]
        },
        {
          name: 'Composition: Letter Writing and Its Types',
          learningOutcome: 'Explain what a letter is, describe its various types and features, and write a letter on a given topic.',
          knowledge: [
            'Meaning of a letter',
            'Types of letters and their distinguishing features',
            'Writing a letter on a given topic'
          ]
        },
        {
          name: 'Literature: Reading a Selected Text',
          learningOutcome: 'Read a selected literary text and identify the language style and ideas expressed in it.',
          knowledge: [
            'Reading a selected literary text',
            'Identifying language style and themes in the text'
          ]
        },
        {
          name: 'Grammar: Parts of Speech (Ogan Okwu) — Review',
          learningOutcome: 'Explain parts of speech, describe the types that exist, and produce a written composition on parts of speech.',
          knowledge: [
            'Meaning of parts of speech (ogan okwu)',
            'Types of parts of speech',
            'Written composition on parts of speech'
          ]
        },
        {
          name: 'Igbo Beliefs about the Afterlife: Ogbanje and Reincarnation',
          learningOutcome: 'Explain the concept of ogbanje and the various types, describe how ogbanje are recognised, and explain the concept of reincarnation (ilo uwa).',
          knowledge: [
            'Meaning and types of ogbanje',
            'Signs used to identify ogbanje',
            'Meaning of reincarnation (ilo uwa)'
          ]
        },
        {
          name: 'Punctuation Marks (Akara Edemede)',
          learningOutcome: 'Explain punctuation marks, describe the different types, and state when each is used in a sentence.',
          knowledge: [
            'Meaning of punctuation marks',
            'Types of punctuation marks',
            'Correct usage of punctuation marks in sentences'
          ]
        },
        {
          name: 'Literature: Analysis of a Selected Text',
          learningOutcome: 'Read a selected literary text and analyse its content and form.',
          knowledge: [
            'Reading a selected literary text',
            'Analysing the content and form of the text'
          ]
        },
        {
          name: 'Culture: Taboos and Traditional Values (Nsọ Ala)',
          learningOutcome: 'Explain the meaning of taboos and traditional prohibitions, describe how they originated, and explain the consequences for offenders.',
          knowledge: [
            'Meaning of nsọ ala (taboo) and traditional prohibitions',
            'Origin of these traditional prohibitions',
            'Consequences for those who violate them'
          ]
        },
        {
          name: 'Traditional Worship Practices: Divination and Sacrifice',
          learningOutcome: 'Explain divination and sacrifice as traditional worship practices and identify the items and objects associated with them.',
          knowledge: [
            'Meaning of divination (igba afa) and sacrifice (ichu aja)',
            'Worship items such as ofo, ikenga, okpesi, ogu',
            'Objects of worship such as ancestors, land deities/spirits, ikenga'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Oral: Technology and Communication',
          learningOutcome: 'Explain information and communication technology, discuss its various methods, and describe its uses including Igbo-language websites on the internet.',
          knowledge: [
            'Meaning of information and communication technology',
            'Various methods of communication technology',
            'Uses and advantages of communication technology',
            'Igbo-language websites on the internet'
          ]
        },
        {
          name: 'Poetry: Formal and Informal Verse',
          learningOutcome: 'Explain the features of formal and informal verse, compare them, and give examples of each.',
          knowledge: [
            'Features of formal verse',
            'Features of informal verse',
            'Comparison and examples of formal and informal verse'
          ]
        },
        {
          name: 'Traditional Titles and Title-Taking Ceremonies',
          learningOutcome: 'Describe the various types of traditional titles, give an opinion on their importance, and explain the rules and duties associated with title holders.',
          knowledge: [
            'Types of traditional titles',
            'Importance of traditional titles',
            'Rules and duties of title holders'
          ]
        },
        {
          name: 'Figures of Speech: Simile (Myiri Udaume)',
          learningOutcome: 'Explain what simile is, give examples, and demonstrate how it is used in speech and writing.',
          knowledge: [
            'Meaning of simile (myiri udaume)',
            'Examples of simile',
            'Use of simile in speech and writing'
          ]
        },
        {
          name: 'Translation (Ntughari)',
          learningOutcome: 'Translate written material between Igbo and English and translate common proverbs and idioms.',
          knowledge: [
            'Translating Igbo text into English',
            'Translating English text into Igbo',
            'Translating proverbs and idiomatic expressions'
          ]
        },
        {
          name: 'Literature: Study of a Selected Text (Second Term)',
          learningOutcome: 'Read a selected literary text and evaluate its language style, character, and content.',
          knowledge: [
            'Reading a selected literary text',
            'Evaluating language style, character, and content'
          ]
        },
        {
          name: 'Oral: The Role of Reading in Development',
          learningOutcome: 'Explain what reading is, describe how it contributes to progress and development, and give an opinion on the effects of not reading.',
          knowledge: [
            'Meaning of reading',
            'How reading contributes to progress and development',
            'Effects of not reading books'
          ]
        },
        {
          name: 'Traditional Composition Styles: Essay Types',
          learningOutcome: 'Identify the distinguishing features of narrative, descriptive, argumentative, dialogue, and letter-writing styles, and write a composition in a given style.',
          knowledge: [
            'Features of narrative, descriptive, and argumentative composition styles',
            'Features of dialogue and letter-writing styles',
            'Writing a composition on a given topic'
          ]
        }
      ]
    }
  ]
};
