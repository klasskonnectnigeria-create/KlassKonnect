// SS2 Igbo — First, Second and Third Term
// Source: SchemeofWork.com "Igbo Language Scheme of Work SSS 2 Lagos State"
// URL: https://schemeofwork.com/igbo-language-scheme-of-work-sss-2-lagos-state/
// (No federal SS2 Igbo page is indexed on schemeofwork.com; the Osun State variant at
// https://osun.schemeofwork.com/igbo-language-scheme-of-work-sss-2-osun-state/ was fetched too
// and carries the same week-by-week structure and topics, cross-confirming this content is real.)
// Source page does not explicitly claim NESRI 2025 reform compliance; 'legacy' used per the
// versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Unlike SS1/SS3 Igbo, this source is NOT organised into three parallel Grammar/Culture/
// Literature strands per week — it lists one topic (occasionally two) per week in a single
// column. That single-topic-per-week structure is followed here rather than forced into three
// strands, since the source itself does not present three strands.
// The raw page text has heavy OCR-style noise (e.g. "lkowaputa" for "Ikowaputa", "flue" for
// stray text, "dgz" as an abbreviation for "dị gasị" / "and so on") from how the source table
// was digitised. Fetched and independently parsed via raw HTML (curl + BeautifulSoup table
// extraction) to confirm the IZUUKA/ISIOKWU/EBUMNUCHE (Week/Topic/Objectives) tables for all
// three terms were real, not fabricated. Topic names and knowledge points below are translated
// and cleaned up from the source's stated objectives/activities, preserving the source's actual
// content and Igbo terminology (retained in parentheses) rather than inventing new detail.
// Administrative weeks (Ule Mmalite / opening test, Ezumike Etiti Taam / mid-term break,
// Mmeghari Ihe E Mere / revision, Ule / exam, Ule na Mmechi / exam-and-closing) are excluded
// from all three terms.

export const curriculumData = {
  subject: 'Igbo',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Igbo',
      topics: [
        // ---- First Term ----
        {
          name: 'Discussion: Eradicating Poverty and Hunger (Ikochapụ Ụbịam na Aguụ)',
          learningOutcome: 'Explain the meaning and causes of poverty and hunger, and discuss ways of eradicating them.',
          knowledge: [
            'Meaning and causes of poverty (ụbịam) and hunger (aguụ)',
            'Ways of eradicating poverty and hunger',
            'Dramatization of scenarios about poverty and hunger'
          ]
        },
        {
          name: 'Grammar: Vowel Harmony (Olilo Ụdaume) — Meaning and Types',
          learningOutcome: 'Explain the meaning of vowel harmony, identify its types, and illustrate it with word examples.',
          knowledge: [
            'Meaning of olilo ụdaume (vowel harmony)',
            'Types of vowel harmony in Igbo',
            'Words illustrating vowel harmony'
          ]
        },
        {
          name: 'Culture: Good and Bad Character in Igbo Society (Agwa Ọma na Agwa Ọjọọ)',
          learningOutcome: 'Distinguish good and bad character, explain the value of good behaviour, and describe groups within Igbo society that promote good conduct.',
          knowledge: [
            'Meaning of good character (agwa ọma) and bad character (agwa ọjọọ)',
            'Value/reward of good behaviour',
            'Consequences of bad behaviour, dramatized',
            'Social groups (age-grades, masquerade societies, family associations) that enforce societal norms'
          ]
        },
        {
          name: 'Grammar: Word Affixation and Formation (Mwube na Mmụba Mkpụruokwu)',
          learningOutcome: 'Explain word affixation and word formation processes, identifying prefixes, infixes, suffixes, and other ways new words are formed in Igbo.',
          knowledge: [
            'Meaning of word affixation (mwube mkpụruokwu): prefixes (ndịnihu), infixes (nnọnetiti), suffixes (nsonaazụ)',
            'Meaning of word expansion/derivation (mmụba mkpụruokwu)',
            'Ways new words are formed: borrowed words (okwu mbite), coined words (okwu ọkpụ), slang (okwu njakịrị)'
          ]
        },
        {
          name: 'Grammar: Tense and Its Types (Tensi na Ụdị Ya)',
          learningOutcome: 'Explain the meaning of tense, identify its types, and recognise tense as expressed in sentences.',
          knowledge: [
            'Meaning of tensi (tense)',
            'Types of tense',
            'Identifying tense of verbs within sentences'
          ]
        },
        {
          name: 'Literature: Selected Text Reading (Agụmagụ Ederede)',
          learningOutcome: 'Read a selected literary text and identify the figurative language used in it.',
          knowledge: [
            'Reading of a selected literary text (akwụkwọ agụmagụ a họpụtara)',
            'Identification of figurative language (asụsụ nka) within the passage'
          ]
        },
        {
          name: 'Grammar: Clauses (Nkebiokwu)',
          learningOutcome: 'Explain the meaning of a clause, identify its types, and divide sentences into their component clauses.',
          knowledge: [
            'Meaning of nkebiokwu (clause)',
            'Types of clauses',
            'Constructing and dividing sentences into clauses'
          ]
        },
        {
          name: 'Literature: Analysis of Selected Text — Character and Figures of Speech',
          learningOutcome: 'Read a selected text and analyse the character traits and figures of speech portrayed in it.',
          knowledge: [
            'Reading of a selected text (akwụkwọ a họpụtara)',
            'Analysis of character traits (agwa) and figures of speech (atụmatụokwu na asụsụ nka) in the text'
          ]
        },
        {
          name: 'Culture: Secret Societies (Otu Nzuzo — Mmọnwụ, Ekpe, Ọdọ, Ọkọnkọ, Ọmabe)',
          learningOutcome: 'Explain the meaning, distinguishing features, functions, and value of traditional secret societies, and discuss how they have changed over time.',
          knowledge: [
            'Meaning of otu nzuzo (secret societies) such as mmọnwụ, ekpe, ọdọ, ọkọnkọ, ọmabe',
            'Differences among the various secret societies',
            'Functions, value, and dangers associated with secret societies',
            'Changes observed in secret societies in modern times'
          ]
        },
        {
          name: 'Reading Comprehension (Ogugu na Aghọtaazaa)',
          learningOutcome: 'Read a passage, answer comprehension questions on it, explain new vocabulary, and use it in sentences.',
          knowledge: [
            'Reading of a comprehension passage',
            'Question-and-answer on the passage',
            'Meaning of new words and their use in sentences',
            'Dramatization of the passage content'
          ]
        },
        {
          name: 'Grammar: Tone Marks (Akara Ụdaolu)',
          learningOutcome: 'Explain the meaning of tone and tone marks, identify their types, and apply them correctly in words and sentences.',
          knowledge: [
            'Meaning of tone (ụdaolu) and tone marks (akara ụdaolu)',
            'Types of tone marks',
            'Application of tone marks to words and sentences'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Grammar: Spelling — Compound (Joined) and Separate Words (Okwu Ndekọ na Okwu Ndesa)',
          learningOutcome: 'Explain spelling rules, distinguishing words that should be written joined from those written separately, and practice spelling through dictation and games.',
          knowledge: [
            'Spelling rules for joined words (okwu ndekọ) and separated words (okwu ndesa)',
            'Oral and written spelling practice, including dictation',
            'Spelling games and passage reading for reinforcement'
          ]
        },
        {
          name: 'Grammar: Vowel Elision (Ndapu Ụdaume)',
          learningOutcome: 'Explain the meaning of vowel elision and identify words in which it occurs.',
          knowledge: [
            'Meaning of ndapu ụdaume (vowel elision)',
            'Words illustrating vowel elision'
          ]
        },
        {
          name: 'Culture: Traditional Doctors — Types and Functions (Dibia Ọdịnala)',
          learningOutcome: 'Explain who a traditional doctor is, describe their functions, benefits, risks, and how one becomes one, and dramatize their practices.',
          knowledge: [
            'Meaning of dibia ọdịnala (traditional doctor/healer)',
            'Functions performed by traditional doctors',
            'Benefits and dangers associated with their practice',
            'How one becomes a traditional doctor',
            'Dramatization of traditional doctors\' activities'
          ]
        },
        {
          name: 'Grammar: Prepositions, Adverbs and Conjunctions (Mbuụzọ, Nkwuwa na Njikọ)',
          learningOutcome: 'Identify prepositions, adverbs, and conjunctions in Igbo and use them correctly within sentences.',
          knowledge: [
            'Prepositions (mbuụzọ)',
            'Adverbs (nkwuwa)',
            'Conjunctions (njikọ)'
          ]
        },
        {
          name: 'Literature: Selected Text Reading and Character Analysis',
          learningOutcome: 'Read a selected literary text and analyse the character traits it portrays.',
          knowledge: [
            'Reading of a selected literary text',
            'Analysis of character traits portrayed in the text'
          ]
        },
        {
          name: 'Grammar: Numbers — One Thousand to One Million (Ọnụọgụgụ)',
          learningOutcome: 'Count, write, and translate numbers from one thousand to one million in Igbo.',
          knowledge: [
            'Counting numbers from one thousand (otu puku) to one million (otu ijeri)',
            'Writing out these numbers',
            'Translating numbers between English and Igbo'
          ]
        },
        {
          name: 'Grammar: Consonant Elision (Ndapu Mgbochiume)',
          learningOutcome: 'Explain the meaning of consonant elision and identify words illustrating it.',
          knowledge: [
            'Meaning of ndapu mgbochiume (consonant elision)',
            'Words illustrating consonant elision',
            'Examples of consonant elision in use'
          ]
        },
        {
          name: 'Grammar: Compound and Complex Sentences (Nsoroedide)',
          learningOutcome: 'Distinguish compound sentences from complex sentences and construct examples of each.',
          knowledge: [
            'Meaning of compound sentence (mgbakwụnye)',
            'Meaning of complex sentence (nsokwunye)',
            'Examples illustrating compound and complex sentences'
          ]
        },

        // ---- Third Term ----
        {
          name: 'Culture: Traditional Festivals (Echichi na Echimechi Ọdịnala)',
          learningOutcome: 'Identify types of traditional festivals for men and women, explain their value and risks, and describe how they are celebrated and led.',
          knowledge: [
            'Types of traditional festivals/rites (echichi) for men and women',
            'Benefits and dangers associated with traditional festivals',
            'How these festivals are celebrated',
            'Roles of those who officiate the festivals'
          ]
        },
        {
          name: 'Composition/Letter Writing (Edemede)',
          learningOutcome: 'Explain the format of letter writing — opening, body, and closing — and write a well-organized composition on a given topic.',
          knowledge: [
            'Format of letter writing: opening, body, closing (mmalite, ahụ, mmechi)',
            'Writing a well-organized composition on an assigned topic'
          ]
        },
        {
          name: "Grammar: Present Continuous Tense Verbs with 'Na' (Oru 'Na' na-aru n'Ahịrịokwu)",
          learningOutcome: "Identify verbs that take the 'na' present-continuous marker and use them correctly within sentences.",
          knowledge: [
            "Verbs that take the present-continuous marker 'na'",
            "Correct placement of 'na' in ongoing actions",
            'Completing sentences with the correct present-continuous verb form'
          ]
        },
        {
          name: 'Culture: Wealth Acquisition — Lawful and Unlawful Means (Iri Ekpe na Ike Ekpe)',
          learningOutcome: 'Explain the meaning of greed and distinguish lawful from unlawful means of acquiring wealth, and discuss the dangers of wrongful wealth acquisition.',
          knowledge: [
            'Meaning of greed/covetousness (enwe-enwe)',
            'Lawful (iri ekpe) versus unlawful/forceful (ike ekpe) means of acquiring wealth',
            'Different kinds of greed found in society',
            'Dangers of acquiring wealth through wrongful means'
          ]
        },
        {
          name: 'Literature: Selected Text Reading and Discussion',
          learningOutcome: 'Read a selected literary text and discuss its content with classmates.',
          knowledge: [
            'Reading of a selected literary text',
            'Group discussion and analysis of the text read'
          ]
        },
        {
          name: "Grammar: Future Tense Verbs with 'Ga' (Oru 'Ga' na-aru n'Ahịrịokwu)",
          learningOutcome: "Identify verbs that take the 'ga' future-tense marker and use them correctly within sentences.",
          knowledge: [
            "Verbs that take the future-tense marker 'ga'",
            "Correct placement of 'ga' for future actions",
            'Completing sentences with the correct future-tense verb form'
          ]
        },
        {
          name: 'Literature: Analysis of Selected Text — Theme, Figures of Speech, and Character',
          learningOutcome: 'Read a selected text and analyse its theme, figures of speech, and the character traits it portrays.',
          knowledge: [
            'Reading of a selected text',
            'Examination of theme and figures of speech (atụmatụokwu na asụsụ nka)',
            'Analysis of character traits portrayed in the text'
          ]
        },
        {
          name: 'Figures of Speech and Figurative Language (Atụmatụokwu na Asụsụ Nka)',
          learningOutcome: 'Explain and give examples of figures of speech and figurative language, identify them within literary texts, and use them in creative writing.',
          knowledge: [
            'Meaning of atụmatụokwu (figures of speech) and asụsụ nka (figurative language)',
            'Examples of figures of speech',
            'Identifying figures of speech within literary texts',
            'Using figures of speech in creative writing'
          ]
        },
        {
          name: 'Creative Writing (Edemede Nka)',
          learningOutcome: 'Explain the meaning, types, features, and value of creative writing, and produce a piece of creative writing with accompanying illustrations.',
          knowledge: [
            'Meaning and types of edemede nka (creative writing): story (akụkọ), drama (ejije), poetry (abụ)',
            'Value and features of creative writing',
            'Writing a creative composition with illustrations'
          ]
        },
        {
          name: 'Literature: Drama Text Review and Character Analysis (Agụmagụ Ederede)',
          learningOutcome: 'Review the selected drama text, examine its content, and analyse its characters.',
          knowledge: [
            'Review of the selected drama text',
            "Close examination of the text's content",
            'Analysis of characters in the drama text'
          ]
        }
      ]
    }
  ]
};
