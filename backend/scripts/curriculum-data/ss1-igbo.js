// SS1 Igbo — First, Second and Third Term
// Source: SchemeofWork.com "Igbo Language Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/igbo-language-scheme-of-work-for-ss-1-federal/
// Source page does not explicitly claim NESRI 2025 reform compliance; 'legacy' used per the
// versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Source content is in Igbo, organised each week into three strands: ỤTỌASỤSỤ (Grammar),
// OMENALA (Culture/Social Studies), and AGỤMAGỤ (Literature). Following the convention set by
// ss3-igbo.js, each strand is kept as a separate topic per week rather than collapsed into one
// per week, since the content of each strand is genuinely distinct. Topic names have been
// translated to English for catalogue consistency, retaining the Igbo term in parentheses.
// Administrative weeks (MMỤGHARỊ IHE A KỤZIRI NA TAM / end-of-term revision, ULE / exam,
// ULE NA MMECHI / exam-and-closing) are excluded from all three terms.
// Term 2 Week 10 has no OMENALA (Culture) entry in the source — only Grammar and Literature
// topics are listed for that week, matching the source table exactly.

export const curriculumData = {
  subject: 'Igbo',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Igbo',
      topics: [
        // ---- First Term ----
        {
          name: 'Grammar: The Igbo Alphabet (Abịdịị Igbo)',
          learningOutcome: 'Recite the Igbo alphabet and divide it into its two main classes.',
          knowledge: [
            'The Igbo alphabet (abịdịị Igbo)',
            'Division of the alphabet into two classes: vowels and consonants'
          ]
        },
        {
          name: 'Culture: Meaning of Family (Ezinụlọ)',
          learningOutcome: 'Explain the meaning of family and identify the members that make up a family.',
          knowledge: [
            'Meaning of ezinụlọ (family)',
            'Members that make up a family'
          ]
        },
        {
          name: 'Literature: Meaning and Divisions of Literature',
          learningOutcome: 'Explain the meaning of literature and distinguish its two broad divisions.',
          knowledge: [
            'Meaning of agụmagụ (literature)',
            'Division of literature into two types: traditional (ọdịnala) and modern (ụgbu a)'
          ]
        },
        {
          name: 'Grammar: Igbo Vowels (Ụdaume)',
          learningOutcome: 'Explain the meaning of Igbo vowels and classify them correctly.',
          knowledge: [
            'Meaning of ụdaume (vowels)',
            'Classification of vowels into ụdamfe (short vowels) and ụdaarọ (long vowels)'
          ]
        },
        {
          name: 'Culture: Types of Family Structures',
          learningOutcome: 'Identify and describe the different types of family structures found in Igbo society.',
          knowledge: [
            'Nuclear family (mkpuke)',
            'Extended/polygamous family types (mkpuke ụbara, mbisa)'
          ]
        },
        {
          name: 'Literature: Traditional Folk Stories',
          learningOutcome: 'Identify types of traditional Igbo folk stories and describe their features.',
          knowledge: [
            'Trickster tales (akụkọ nkọkịrịkọ)',
            'Creation myths (okike)',
            'Historical/happening narratives (ihe mere)'
          ]
        },
        {
          name: 'Grammar: Classification of Consonants (Mgbochiume)',
          learningOutcome: 'Classify Igbo consonants into their sub-types with examples.',
          knowledge: [
            'Plosives (nge) and nasals (mkpị)',
            'Semivowels (myiriụdaume) and consonant clusters (ndagba myiri-ụdaume)'
          ]
        },
        {
          name: 'Culture: Roles of Family Members',
          learningOutcome: 'Describe the roles of the mother, father, and children within the family.',
          knowledge: [
            'Role of the mother (nne) in the family',
            'Role of the father (nna) in the family',
            'Role of children (ụmụaka) in the family'
          ]
        },
        {
          name: 'Literature: Traditional Songs (Abụ Ọdịnala)',
          learningOutcome: 'Identify types of traditional Igbo songs and give examples of each.',
          knowledge: [
            'Lullabies (abụ nwa)',
            'Dramatic/masquerade songs (abụ ejije)',
            'Other traditional song types'
          ]
        },
        {
          name: 'Grammar: Syllable Structure (Mmụba Mkpụrụokwu)',
          learningOutcome: 'Explain syllable structure in Igbo and identify common syllable patterns.',
          knowledge: [
            'Meaning of nkejiokwu (syllable division)',
            'Syllable patterns: V, VC, CVC, VCV and others'
          ]
        },
        {
          name: 'Culture: Expected Conduct of Family Members',
          learningOutcome: 'Describe the expected conduct/behaviour of each member of the family.',
          knowledge: [
            'Expected conduct of a mother, father, and children in the family (nrubere onye n\'ezinụlọ)'
          ]
        },
        {
          name: 'Literature: Traditional Drama/Masquerade Forms',
          learningOutcome: 'Identify traditional Igbo drama and masquerade forms and describe their features.',
          knowledge: [
            'Traditional drama/masquerade forms: Oro, Okereke okereke, Akpankolo',
            'Other traditional dramatic performance types (ejije ọdịnala)'
          ]
        },
        {
          name: 'Grammar: Numbers 1–1000 (Ọnụọgụgụ)',
          learningOutcome: 'Count and write out numbers from 1 to 1000 in Igbo.',
          knowledge: [
            'Numbers 1 to 1000 in Igbo (ọnụọgụgụ)'
          ]
        },
        {
          name: 'Culture: The Value of Family in Igbo Society',
          learningOutcome: 'Explain the importance of the family to Igbo society, including its role in governance and development.',
          knowledge: [
            'Value of the family (uru ezinụlọ) to Igbo life',
            'Role of the family in local governance and community development'
          ]
        },
        {
          name: 'Literature: Modern Literature and Its Genres',
          learningOutcome: 'Explain what modern Igbo literature is and identify its main genres with examples.',
          knowledge: [
            'Meaning of modern literature (agụmagụ ụgbu a)',
            'Genres: prose (iduuazị), poetry (abụ), and drama (ejije)',
            'Examples of each genre'
          ]
        },
        {
          name: 'Grammar: Fractions, Mixed and Ordinal Numbers',
          learningOutcome: 'Read and write fractions, mixed numbers, and ordinal numbers in Igbo.',
          knowledge: [
            'Fractions such as ½ (nọmba mpekele)',
            'Mixed numbers such as 4½ (nọmba ọgwa)',
            'Ordinal numbers such as 1st, 10th (nọmbanke)'
          ]
        },
        {
          name: 'Culture: Marriage Customs (Alụmdi na Nwunye)',
          learningOutcome: 'Explain the meaning of marriage and describe the customs associated with it.',
          knowledge: [
            'Meaning of alụmdi na nwunye (marriage)',
            'Marriage customs: wine-carrying (ibu mmanya), bride price (ime ego), palm-wine tapping (ịgba nkwụ)',
            'Witnesses (onyeaka ebe) and divorce (ịgba alụkwaghị)'
          ]
        },
        {
          name: 'Literature: Poetry Analysis Procedure',
          learningOutcome: 'Explain the procedure for analyzing a poem and apply it to two selected poems.',
          knowledge: [
            'Procedure for poetry analysis (usoro nnyocha abụ)',
            'Study of two selected poems'
          ]
        },
        {
          name: 'Grammar: The Simple Igbo Sentence (Ahịrịmfe)',
          learningOutcome: 'Explain the meaning of a simple sentence and describe its structure.',
          knowledge: [
            'Meaning of ahịrịmfe (simple sentence)',
            'Structure of the simple sentence'
          ]
        },
        {
          name: 'Culture: The Value of Marriage',
          learningOutcome: 'Describe the value of marriage and demonstrate it through dramatization.',
          knowledge: [
            'Value/importance of marriage (uru alụmdi na nwunye bara)',
            'Dramatized representation of marriage customs'
          ]
        },
        {
          name: 'Literature: Reading a Selected Drama Text',
          learningOutcome: 'Read a selected drama text and follow its plot and characters.',
          knowledge: [
            'Reading of one selected drama text (akwụkwọ ejije)'
          ]
        },
        {
          name: 'Grammar: Simple and Compound Sentences',
          learningOutcome: 'Distinguish between simple sentences (ahịrịmfe) and compound sentences (ahịrịukwu).',
          knowledge: [
            'Study of simple sentences (ahịrịmfe)',
            'Study of compound sentences (ahịrịukwu)'
          ]
        },
        {
          name: 'Culture: Adolescent Health — Good Practices',
          learningOutcome: 'Describe practices that promote adolescent health, including personal and environmental hygiene.',
          knowledge: [
            'Meaning of ahụike ntọrọbịa (adolescent health)',
            'Practices that promote health: personal hygiene and environmental cleanliness'
          ]
        },
        {
          name: 'Literature: Continued Reading of the Drama Text',
          learningOutcome: 'Continue reading the selected drama text from the previous week and track its development.',
          knowledge: [
            'Continued reading of the drama text (akwụkwọ ejije) from the previous week'
          ]
        },
        {
          name: 'Grammar: Complex Sentences and Other Types',
          learningOutcome: 'Identify complex sentences and other sentence types in Igbo.',
          knowledge: [
            'Study of complex sentences (ahịrịnha)',
            'Other sentence types (ahịrịokwu ndị ọzọ)'
          ]
        },
        {
          name: 'Culture: Adolescent Health — Harmful Practices',
          learningOutcome: 'Identify practices that cause illness in adolescents, such as poor hygiene.',
          knowledge: [
            'Practices that cause illness (dịka adịghị ọcha — poor hygiene)'
          ]
        },
        {
          name: 'Literature: Analysis of a Selected Poem',
          learningOutcome: 'Analyze a selected poem by identifying its title, poet, theme, structure, and literary devices.',
          knowledge: [
            'Title and poet\'s name (aha abụ, aha odee abụ)',
            'Theme and subject matter of the poem (isiokwu na ndịna isiokwu abụ)',
            'Structure of the poem (nhazi abụ)',
            'Poetic/literary devices used (asụsụ nka)'
          ]
        },
        {
          name: 'Grammar: Igbo Dialects (Nkeji Asụsụ Igbo)',
          learningOutcome: 'Explain the meaning of Igbo dialects and identify the different varieties.',
          knowledge: [
            'Meaning of nkeji asụsụ Igbo (Igbo dialects)',
            'Different dialect varieties of Igbo'
          ]
        },
        {
          name: 'Culture: Colours and Their Meanings',
          learningOutcome: 'Identify different colours in Igbo culture and explain their traditional significance.',
          knowledge: [
            'Colours (agwa/kọlọ): black (oji), yellow/camwood (odo), white (ọcha)'
          ]
        },
        {
          name: 'Literature: Study of a Selected Prose Text',
          learningOutcome: 'Read a selected prose text and identify its main features.',
          knowledge: [
            'Study of one selected prose text (akwụkwọ iduuazị)'
          ]
        },
        {
          name: 'Grammar: Nouns (Mkpọaha) — Types',
          learningOutcome: 'Identify different types of Igbo nouns.',
          knowledge: [
            'Study of mkpọaha (nouns) and their different types'
          ]
        },
        {
          name: 'Culture: Igbo Identity',
          learningOutcome: 'Explain the different ways by which Igbo people are identified.',
          knowledge: [
            'Igbo identity markers (njirimara ndị Igbo): dress, language, food, state of origin'
          ]
        },
        {
          name: 'Literature: Study of a Selected Prose Text (Continued)',
          learningOutcome: 'Continue the study of a selected prose text, deepening comprehension.',
          knowledge: [
            'Continued study of one selected prose text (iduuazị)'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Grammar: Pronouns and Demonstrative Pronouns',
          learningOutcome: 'Identify pronouns and demonstrative pronouns and use them to construct sentences.',
          knowledge: [
            'Pronouns (nnọchiaha) and demonstrative pronouns (nnọchimpesịn)',
            'Using pronouns to form sentences'
          ]
        },
        {
          name: 'Culture: Igbo Identity — Language and Dialects',
          learningOutcome: 'Explain Igbo identity through language, distinguishing dialects from Standard Igbo.',
          knowledge: [
            'Language (asụsụ) and dialect (olundị) as markers of Igbo identity',
            'Standard Igbo (Igbo Izugbe)'
          ]
        },
        {
          name: 'Literature: Study of a Selected Prose Text',
          learningOutcome: 'Read a selected prose text for the term and identify its key features.',
          knowledge: [
            'Study of a selected prose text (akwụkwọ iduuazị)'
          ]
        },
        {
          name: 'Grammar: Interrogatives and Numerals',
          learningOutcome: 'Use interrogative nouns and numerals correctly within noun phrases.',
          knowledge: [
            'Interrogatives (njụajụjụ) and numerals (ọnụọgụgụ) as noun modifiers'
          ]
        },
        {
          name: 'Culture: Igbo Foods and Preparation',
          learningOutcome: 'Describe Igbo traditional foods and explain how one dish is prepared.',
          knowledge: [
            'Study of Igbo foods (nrị ndị Igbo)',
            'How one Igbo dish is prepared'
          ]
        },
        {
          name: 'Literature: Reading Two Selected Poems',
          learningOutcome: 'Read two selected poems and identify their themes.',
          knowledge: [
            'Reading of two selected poems (abụ abụọ)'
          ]
        },
        {
          name: 'Grammar: Verbs (Ngwaa) and Their Types',
          learningOutcome: 'Identify different types of Igbo verbs.',
          knowledge: [
            'Study of ngwaa (verbs) and their different types'
          ]
        },
        {
          name: 'Culture: Traditional Igbo Government',
          learningOutcome: 'Explain the meaning, origin, and process of traditional Igbo government and its importance.',
          knowledge: [
            'Meaning and origin of traditional Igbo government (ọchịchị ọdịnala)',
            'Process, features and importance of the system'
          ]
        },
        {
          name: 'Literature: Reading Another Selected Poem',
          learningOutcome: 'Read another selected poem and compare it with the previous poems studied.',
          knowledge: [
            'Reading of another selected poem'
          ]
        },
        {
          name: 'Grammar: Adjectives (Nkọwaaha) and Their Structure',
          learningOutcome: 'Explain the structure of Igbo adjectives.',
          knowledge: [
            'Study of nkọwaaha (adjectives) and their structure'
          ]
        },
        {
          name: 'Culture: Traditional Government — Age-Grade Groups',
          learningOutcome: 'Describe the age-grade groups involved in traditional town administration and their functions.',
          knowledge: [
            'Age-grade groups (ọgbọ/uke/ebiri) in town administration',
            'Induction process, functions and importance of age-grades'
          ]
        },
        {
          name: 'Literature: Reading a Selected Drama Text',
          learningOutcome: 'Read a selected drama text for the term and identify its features.',
          knowledge: [
            'Reading of a selected drama text (akwụkwọ ejije)'
          ]
        },
        {
          name: 'Grammar: Adverbs (Nkwuwa)',
          learningOutcome: 'Identify Igbo adverbs and give examples of their use.',
          knowledge: [
            'Study of nkwuwa (adverbs)'
          ]
        },
        {
          name: 'Culture: Traditional Government — Titled Men (Nze na Ọzọ)',
          learningOutcome: 'Describe the Nze na Ọzọ title system, its induction process, functions and importance.',
          knowledge: [
            'The Nze na Ọzọ title system',
            'Induction process (usoro echichi)',
            'Functions and importance of titled men'
          ]
        },
        {
          name: 'Literature: Figures of Speech',
          learningOutcome: 'Explain figures of speech and their different types and value in writing.',
          knowledge: [
            'Meaning of atụmaatụokwu (figures of speech)',
            'Different types of figures of speech',
            'Value of figures of speech in writing'
          ]
        },
        {
          name: 'Grammar: Prepositions (Mbuụzọ)',
          learningOutcome: 'Identify Igbo prepositions and their function in a sentence.',
          knowledge: [
            'Study of mbuụzọ (prepositions)'
          ]
        },
        {
          name: 'Culture: Traditional Government — Women\'s Age-Grade Societies',
          learningOutcome: 'Describe the women\'s age-grade societies in traditional Igbo government.',
          knowledge: [
            'Ụmụọkpụ and ịyọm women\'s societies',
            'The lọọlọ (titled women) group'
          ]
        },
        {
          name: 'Literature: Igbo Proverbs (Ilu)',
          learningOutcome: 'Explain the meaning of Igbo proverbs and give examples with their interpretations.',
          knowledge: [
            'Study of ilu Igbo (Igbo proverbs)',
            'Meaning and interpretation of selected proverbs'
          ]
        },
        {
          name: 'Grammar: The Functions of "Na" in a Sentence',
          learningOutcome: 'Identify the different grammatical functions of the word "na" in Igbo sentences.',
          knowledge: [
            'Functions of "na": as preposition (mbuụzọ), auxiliary (nnyemakangwaa), verb-headword marker (isingwaa)'
          ]
        },
        {
          name: 'Culture: Igbo Occupations and Craftsmanship',
          learningOutcome: 'Explain the meaning, types and value of Igbo occupations/crafts and the need to promote them.',
          knowledge: [
            'Meaning and types of ọrụ aka (craftsmanship/occupation)',
            'Value of these trades and the need to promote them'
          ]
        },
        {
          name: 'Literature: Idiomatic Expressions',
          learningOutcome: 'Explain different Igbo idiomatic expressions and their meanings.',
          knowledge: [
            'Study of akpalaokwu (idiomatic expressions) and their meanings'
          ]
        },
        {
          name: 'Grammar: Conjunctions (Njikọ)',
          learningOutcome: 'Identify Igbo conjunctions and their use in linking words and clauses.',
          knowledge: [
            'Study of njikọ (conjunctions)'
          ]
        },
        {
          name: 'Culture: Towns and Their Traditional Crafts',
          learningOutcome: 'Identify different Igbo towns and the trades/crafts they are known for.',
          knowledge: [
            'Different towns in Igboland and the trades associated with them'
          ]
        },
        {
          name: 'Literature: Proverbial Expressions (Ụkabụilu)',
          learningOutcome: 'Explain the meaning of proverbial/idiomatic expressions known as ụkabụilu.',
          knowledge: [
            'Study of ụkabụilu (proverbial expressions)'
          ]
        },
        {
          name: 'Grammar: Affixes — Prefixes, Suffixes, Infixes',
          learningOutcome: 'Identify prefixes, suffixes, and infixes and explain their function in word formation.',
          knowledge: [
            'Prefixes (ndịnihu), suffixes (ndịnazụ), and infixes (nnọnetiti)'
          ]
        },
        {
          name: 'Culture: Diligence and Communal Care',
          learningOutcome: 'Explain Igbo values of hard work, brotherliness, and communal care for one another.',
          knowledge: [
            'Igbo identity: diligence/hard work (ịgba mbọ/ichuchu)',
            'Brotherliness (ime nwanne) and communal care for one another (ichere ibe ha)'
          ]
        },
        {
          name: 'Literature: Reading a Selected Drama Text',
          learningOutcome: 'Read a selected drama text and identify its features.',
          knowledge: [
            'Reading of a selected drama text (akwụkwọ ejije)'
          ]
        },
        {
          name: 'Grammar: Interjections and Dialectal Expressions',
          learningOutcome: 'Identify Igbo interjections and dialectal expressions and explain their meaning.',
          knowledge: [
            'Interjections (ntimkpu) and dialectal expressions such as ọkọọ, ihiyee, ewoo'
          ]
        },
        {
          name: 'Literature: Reading a Selected Drama Text (Continued)',
          learningOutcome: 'Continue reading a selected drama text, following plot and characters to the end of the term.',
          knowledge: [
            'Continued reading of a selected drama text (akwụkwọ ejije)'
          ]
        },

        // ---- Third Term ----
        {
          name: 'Grammar: Composition/Essay Writing — Meaning and Types',
          learningOutcome: 'Explain the meaning of composition writing and identify its various types.',
          knowledge: [
            'Meaning of edemede (composition/essay)',
            'Types of composition writing'
          ]
        },
        {
          name: 'Culture: Childbirth and Naming Ceremony Customs',
          learningOutcome: 'Explain the meaning of childbirth customs and what is done during the naming ceremony period.',
          knowledge: [
            'Meaning of ọmọgwọ (post-natal/naming ceremony customs)',
            'Practices carried out during this period'
          ]
        },
        {
          name: 'Literature: Analysis of a Selected Prose Text',
          learningOutcome: 'Analyze a selected prose text and identify the character traits it portrays.',
          knowledge: [
            'Analysis of a selected prose text (iduuazị)',
            'Character traits/themes portrayed in the text'
          ]
        },
        {
          name: 'Grammar: Writing Dialogue/Conversational Essays',
          learningOutcome: 'Write a dialogue/conversational essay (edemede mkparịtaụka) following correct structure.',
          knowledge: [
            'Writing of dialogue/conversational essays (edemede mkparịtaụka)'
          ]
        },
        {
          name: 'Culture: Childbirth, Ibe Ugwu Custom, and Naming',
          learningOutcome: 'Explain the meaning of childbirth, the ibe ugwu custom, and the naming of a child.',
          knowledge: [
            'Meaning of childbirth (ọmụmụ) and the ibe ugwu custom',
            'Naming the child (ikupụta nwa) and items used'
          ]
        },
        {
          name: 'Literature: Analysis of a Selected Drama Text',
          learningOutcome: 'Analyze a selected drama text and identify the character traits it portrays.',
          knowledge: [
            'Analysis of a selected drama text (ejije)',
            'Character traits portrayed in the text'
          ]
        },
        {
          name: 'Grammar: Features of Narrative Essay Writing',
          learningOutcome: 'Identify the features of narrative essay writing (edemede akọmakọ).',
          knowledge: [
            'Features of narrative essay writing (akọmakọ)'
          ]
        },
        {
          name: 'Culture: The Kola Nut (Ọjị) Tradition',
          learningOutcome: 'Explain the meaning and value of the kola nut and describe the kola-breaking ceremony.',
          knowledge: [
            'Meaning and value of ọjị (kola nut)',
            'The kola nut breaking ceremony (ibe ọjị) and its significance'
          ]
        },
        {
          name: 'Literature: Analysis of a Prose Text — Character Traits',
          learningOutcome: 'Analyze a prose text focusing on significant themes and character traits.',
          knowledge: [
            'Analysis of a prose text and significant character traits within it'
          ]
        },
        {
          name: 'Grammar: Writing Expository/Discursive Essays',
          learningOutcome: 'Write an expository/discursive essay (edemede ekwumekwu) following correct structure.',
          knowledge: [
            'Writing of expository/discursive essays (ekwumekwu)'
          ]
        },
        {
          name: 'Culture: Kola Nut Presentation Procedure',
          learningOutcome: 'Describe the kola nut/chalk presentation procedure and alternative items used to represent it.',
          knowledge: [
            'Kola nut/chalk (ọjị/nzu) presentation procedure',
            'Alternative items representing kola nut when unavailable'
          ]
        },
        {
          name: 'Literature: Analysis of a Prose Text — Continued',
          learningOutcome: 'Continue the analysis of a prose text, examining character traits within it.',
          knowledge: [
            'Continued analysis of a prose text and character traits within it'
          ]
        },
        {
          name: 'Grammar: Writing Descriptive Essays',
          learningOutcome: 'Write a descriptive essay (edemede nkọwasị) following correct structure.',
          knowledge: [
            'Writing of descriptive essays (nkọwasị)'
          ]
        },
        {
          name: 'Culture: Receiving and Welcoming Visitors',
          learningOutcome: 'Describe the Igbo custom of receiving and welcoming visitors (ịnabata ọbịa).',
          knowledge: [
            'The custom of welcoming visitors (ịnabata ọbịa)'
          ]
        },
        {
          name: 'Literature: Analysis of a Prose Text — Customs Portrayed',
          learningOutcome: 'Analyze a prose text, identifying the significant customs portrayed in it.',
          knowledge: [
            'Analysis of a prose text and the customs it portrays'
          ]
        },
        {
          name: 'Grammar: Writing Formal/Official Essays',
          learningOutcome: 'Write a formal/official-style essay (edemede nkọwami) following correct conventions.',
          knowledge: [
            'Writing of formal/official-type essays (nkọwami)'
          ]
        },
        {
          name: 'Culture: The Igbo Week and Market-Day Cycle',
          learningOutcome: 'Explain the traditional Igbo week (izu) and the market-day/calendar cycle (izuụka).',
          knowledge: [
            'The Igbo four-day week (izu) and market cycle (izuụka)'
          ]
        },
        {
          name: 'Literature: Analysis of a Prose Text — Customs Continued',
          learningOutcome: 'Continue analyzing the prose text, tracking the customs and themes it portrays.',
          knowledge: [
            'Continued analysis of the prose text and the customs it portrays'
          ]
        },
        {
          name: 'Grammar: Vowel Harmony — Front and Back Vowels',
          learningOutcome: 'Explain vowel harmony in Igbo, distinguishing front and back vowel harmony.',
          knowledge: [
            'Meaning of olilo ụdaume (vowel harmony)',
            'Front vowel harmony (olilo ihu) and back vowel harmony (olilo azụ)'
          ]
        },
        {
          name: 'Culture: Counting Months and Years',
          learningOutcome: 'Explain the traditional Igbo method of counting months and years.',
          knowledge: [
            'Method of counting months (ọnwa) and years (afọ)'
          ]
        },
        {
          name: 'Literature: Reading and Comprehension — Drama Text',
          learningOutcome: 'Read a passage from a selected drama text and answer comprehension questions on it.',
          knowledge: [
            'Reading and comprehension exercise from a selected drama text'
          ]
        },
        {
          name: 'Grammar: Vowel Harmony — Elision, Assimilation, Contraction',
          learningOutcome: 'Explain vowel elision, assimilation, and contraction within vowel harmony.',
          knowledge: [
            'Vowel elision (nlofo), assimilation (mmakọ), and contraction (nlocha)'
          ]
        },
        {
          name: 'Culture: Conduct of the First Son (Diọkpara)',
          learningOutcome: 'Describe the expected conduct of the first son (diọkpara) in the Igbo family.',
          knowledge: [
            'Expected conduct/role of the diọkpara (first son) in the family'
          ]
        },
        {
          name: 'Literature: Reading and Comprehension — Prose Text',
          learningOutcome: 'Read a passage from a selected prose text and answer comprehension questions on it.',
          knowledge: [
            'Reading and comprehension exercise from a selected prose text'
          ]
        },
        {
          name: 'Grammar: Vowel and Consonant Elision',
          learningOutcome: 'Identify instances of vowel elision and consonant elision in Igbo words.',
          knowledge: [
            'Vowel elision (ndapu ụdaume) and consonant elision (ndapu mgbochiume)'
          ]
        },
        {
          name: 'Culture: Conduct of the First Daughter (Ada)',
          learningOutcome: 'Describe the expected conduct of the first daughter (ada) in the Igbo family.',
          knowledge: [
            'Expected conduct/role of the ada (first daughter) in the family'
          ]
        },
        {
          name: 'Literature: Translation of Idiomatic Expressions',
          learningOutcome: 'Translate Igbo idiomatic expressions accurately.',
          knowledge: [
            'Translation of idiomatic expressions (ntụgharị akpaalaokwu)'
          ]
        },
        {
          name: 'Grammar: Comprehension Passages and Question-Answering',
          learningOutcome: 'Explain the meaning of comprehension passages and apply the correct procedure for answering questions on them.',
          knowledge: [
            'Meaning of aghọta-azaa (comprehension)',
            'Procedure for answering comprehension questions'
          ]
        },
        {
          name: 'Culture: Dangers of Substance Abuse',
          learningOutcome: 'Discuss the problems caused by substance/drug abuse.',
          knowledge: [
            'Problems arising from drug/substance abuse (ịṅụọgwụ aghara aghara)'
          ]
        },
        {
          name: 'Literature: Translation of Proverbs',
          learningOutcome: 'Translate selected Igbo proverbs and explain their meaning.',
          knowledge: [
            'Translation of proverbs (ntụgharị ilu)'
          ]
        }
      ]
    }
  ]
};
