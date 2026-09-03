// Primary 5 Igbo — First, Second, and Third Term
// Source: SyllabusNG "Primary 5 Igbo Language Scheme of Work" (Lagos State Government
// Ministry of Education Unified Scheme of Work for Primary Schools, Primary/Basic 5 Igbo)
// URL: https://syllabus.ng/primary5-scheme-of-work/igbo/
// SchemeofWork.com's Federal "Igbo Language Scheme of Work Primary 5 Federal" page
// (https://schemeofwork.com/igbo-language-scheme-of-work-primary-5-federal/) was checked
// first per the standard source order, and is a real, fetch-verified page, but it only
// contains First Term content (IZUUKA 1-14) with no Second or Third Term section anywhere
// on the page or site category listings. SyllabusNG's Lagos State Unified Scheme of Work
// was used instead because it provides real, verified content for all three terms.
// Source page carries no NESRI 2025 reform claim — it is the long-standing Lagos State
// Unified Scheme of Work format — so curriculumVersion is 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks are excluded: the resumption revision week at the start of each
// term (Mmụgharị ihe e mere n'afọ/tam gara aga — review of the previous term/exam),
// MID TERM TEST/BREAK, and the end-of-term revision/exam/closing weeks (Mmụgharị ihe e
// mere na tam, Ule, Ule na Mmechi). Third Term Week 2 ("Mmụgharị akara edemede") is
// retained despite the word "Mmụgharị" (review) in its name, because — unlike the purely
// administrative recap weeks above — it carries its own specific content and objectives
// (identifying and correctly placing punctuation marks), not a content-free recap.
// The source's transliterated Igbo text has inconsistent diacritics and some OCR-style
// noise (e.g. missing underdots, stray characters); topic names and knowledge points
// below are translated into readable English from the source's TOPICS/Learning
// Objectives columns, with the original Igbo terms retained parenthetically for
// identification — no content is invented; every point traces to a specific line on the
// source page.
// Several weeks (one per term: First Term Week 6 and Week 9, Second Term Week 6, Third
// Term Week 6) list two distinct lettered sub-topics (A and B) with their own separate
// content and objectives; both are kept as separate topics, matching the convention
// already used for Primary 6 Igbo from a comparable dual-subtopic source.

export const curriculumData = {
  subject: 'Igbo',
  grade: 'Primary 5',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'Primary 5 Igbo (First Term)',
      topics: [
        {
          name: 'Onuogugu: Numbers 200-250',
          learningOutcome: 'Read, write, and use numbers from 200 to 250 in simple sentences, and compare numbers.',
          knowledge: [
            'Numbers from 200 to 250 (onu ogugu site na narị abụọ na iri ise)',
            'Using these numbers to build simple sentences (iji onuogugu mee ahịrị)',
            'Writing out numbers (odide onu ogugu)',
            'Comparing numbers (ịmakọ onụọgụgụ)'
          ]
        },
        {
          name: 'Abu Nkenke: Short Poems',
          learningOutcome: 'Recite taught poems well, show understanding and enjoyment of poems, recite poems from memory or of their own composition, and explain the idea/theme in a poem.',
          knowledge: [
            'Various simple poems (abụ mfe dị iche iche)',
            'Reciting poems taught well (ịgụpụta abụ akụziri nke ọma)',
            'Showing understanding, interest, and enjoyment in poems (nghọta, mmasị na obi ụtọ dị n\'abụ)',
            'Reciting poems from memory or their own composition',
            'Explaining the idea/theme contained in a poem'
          ]
        },
        {
          name: 'Aghotaazaa: Comprehension from a Selected Short Story',
          learningOutcome: 'Read a chosen short story well, explain what was narrated in it, and explain difficult vocabulary in the passage.',
          knowledge: [
            'Reading a short story chosen for comprehension (ogugu)',
            'Explaining what was read/narrated in the story (nkowa ihe a koro n\'akuko ahu)',
            'Explaining difficult words found in the passage (nkọwa okwu ndị siri ike)',
            'Answering questions about the passage read'
          ]
        },
        {
          name: 'Idobe Gburugburu Ọcha: Environmental Cleanliness',
          learningOutcome: 'State ways of caring for the environment and explain the benefits of environmental care.',
          knowledge: [
            'Ways of caring for the environment: sweeping, clearing grass in the appropriate place, and disposing of dirty water/waste properly (iza ihe, ikpofu ahihia, inyu mmiri na nsi ebe kwesiri)',
            'Benefits derived from caring for the environment (uru nlekota gburugburu bara)'
          ]
        },
        {
          name: 'Akara Edemede: Punctuation Marks',
          learningOutcome: 'State the punctuation marks available, place them correctly in sentences, and identify and demonstrate their use.',
          knowledge: [
            'Various punctuation marks, e.g. comma and full stop (akara edemede dị iche iche)',
            'Correct placement/use of punctuation marks in writing (ntinye akara edemede)',
            'Identifying and demonstrating punctuation marks in sentences'
          ]
        },
        {
          name: 'Omugwo: Postnatal Care Practice for a New Mother',
          learningOutcome: 'Explain what omugwo (postnatal care) is, name items used for it, identify who performs and who receives it, and list what is given to the person who performs it.',
          knowledge: [
            'Meaning of omugwo (nkọwa omugwo)',
            'Items used for omugwo (ngwa eji ele omugwo)',
            'Who stays for omugwo and who performs it (onye na-anọ omugwo na onye na-ele omugwo)',
            'What is given to the person who comes to perform omugwo (ihe a na-enye onye biara ile omugwo)'
          ]
        },
        {
          name: 'Edemede Nduzi: Guided Composition',
          learningOutcome: 'Explain what a composition is, state its features, plan and note what will be written, and write their own composition.',
          knowledge: [
            'Meaning of composition (nkọwa ihe bụ edemede)',
            'Features of a composition: title, introduction, conclusion (njirimara edemede — isiokwu, mmalite, mmechi)',
            'Teacher writes an outline/plan on the board (ntụta aro)',
            'Note-taking of what is written and writing their own composition'
          ]
        },
        {
          name: 'Akuko Ifo: Folktales — Creation Stories and Moral Lessons',
          learningOutcome: 'Narrate and read folktales including creation stories and moral-teaching tales, analyze characters in the story, and state the lesson learned.',
          knowledge: [
            'Various folktales, including creation stories and stories that teach good behavior (akụkọ ifo — nke Okike na nke na-akụzi ezi omume)',
            'Showing interest, understanding, and enjoyment while narrating and reading folktales',
            'Analyzing the character(s) in the story (ntule agwa)',
            'Stating the lesson learned from the folktale (ihe mmuta)'
          ]
        },
        {
          name: 'Ndị Ntorobịa na Ahụike: Adolescents and Health',
          learningOutcome: 'Understand bodily changes that occur in adolescents and identify diseases, such as HIV/AIDS, associated with sexual intercourse.',
          knowledge: [
            'Bodily changes experienced by adolescents (mgbanwe n\'ahụ ndị ntorobịa)',
            'Diseases that affect them, spread through sexual intercourse, such as HIV/AIDS'
          ]
        }
      ]
    },
    {
      name: 'Primary 5 Igbo (Second Term)',
      topics: [
        {
          name: 'Onuogugu: Numbers 251-350',
          learningOutcome: 'Read, write, and use numbers from 251 to 350 in simple sentences.',
          knowledge: [
            'Numbers from 251 to 350 (onụọgụgụ site na narị abụọ na iri ise na otu ruo narị atọ na iri ise)',
            'Using these numbers to build sentences (iji onuogugu mee ahịrịokwu)',
            'Writing out numbers (odide onu ogugu)'
          ]
        },
        {
          name: 'Ikowaputa Ọdịdị Mmadụ: Describing People\'s Appearance',
          learningOutcome: 'Describe a person\'s physical appearance and compare and contrast the appearances of different people.',
          knowledge: [
            'Describing a person\'s appearance: fair-skinned, tall, big, etc. (nkọwa ọdịdị mmadụ — ọcha, ogologo, ibu, dgz)',
            'Comparing and contrasting the appearances of different people (ntule na ịtụnyere ọdịdị mmadụ)'
          ]
        },
        {
          name: 'Uru na Ọghọm Dị n\'Edobeghị Gburugburu Ọcha: Benefits and Dangers of Environmental (Un)Cleanliness',
          learningOutcome: 'State the benefits of keeping the environment clean, and state the dangers that follow when the environment is not kept clean.',
          knowledge: [
            'Benefits of keeping the environment clean (uru idobe gburugburu ọcha bara)',
            'Dangers that arise from not caring for the environment (ọghọm dị n\'ẹlekọtaghị gburugburu ọcha)'
          ]
        },
        {
          name: 'Ejije Nkenke: Market Trading and Farm Work Role-play',
          learningOutcome: 'Explain what drama/role-play is, and perform a role-play depicting market trading and farm work.',
          knowledge: [
            'Meaning of drama/role-play (nkọwa ejije)',
            'Meaning of market trading and farm work (nkọwa ihe bụ ahịa na ọrụ ubi)',
            'Using market trading and farm work as the basis for a role-play (iji ahịa na ọrụ ubi mee ejije)'
          ]
        },
        {
          name: 'Edemede: Composition on a Teacher-Selected Topic',
          learningOutcome: 'Explain what a composition is, plan and note what will be written, and write their own composition on a topic chosen by the teacher.',
          knowledge: [
            'Meaning of composition (nkọwa ihe bụ edemede)',
            'Features of composition, e.g. title, introduction (njirimara edemede — isiokwu, mmalite, dgz)',
            'Note-taking of what is written and writing their own composition'
          ]
        },
        {
          name: 'Akuko Ifo: Benefits and Warnings in a Folktale',
          learningOutcome: 'Analyze the character(s) in a folktale, and state the benefits and warnings/dangers contained in it along with the lesson learned.',
          knowledge: [
            'Analyzing the character(s) in the folktale (ntule agwa dị n\'ifo ahụ)',
            'Benefits found in the folktale (uru dị n\'akụkọ ifo)',
            'Dangers/warnings found in it (ọghọm dị na ya)',
            'Stating the lesson learned (ihe mmụta)'
          ]
        },
        {
          name: 'Aghotaazaa: Comprehension from a Selected Book',
          learningOutcome: 'Read a selected passage well, explain what was narrated in it, and answer questions about what was read.',
          knowledge: [
            'Reading a passage from a selected book (ọgụgụ)',
            'Explaining what was narrated in the story (nkọwa ihe a kọrọ n\'akụkọ ahụ)',
            'Explaining difficult words found in the passage read',
            'Answering questions about the passage'
          ]
        },
        {
          name: 'Omugwo: Naming Ceremony and Buying Items for a New Baby',
          learningOutcome: 'Name various Igbo names, state when and how naming is done, and explain the meaning of some names.',
          knowledge: [
            'Various Igbo names, e.g. Chinemere, Chisom, Kosị, Chukwuma (aha Igbo dị iche iche)',
            'When naming takes place (mgbe a na-agụ aha)',
            'How a child is named (etu esi agụ nwa aha)',
            'The meaning of some names (mpụtara aha ụfọdụ)'
          ]
        },
        {
          name: 'Abu: Baby Songs and War Songs',
          learningOutcome: 'Recite baby/lullaby songs and war songs well, show understanding and enjoyment of the songs, sing them independently, and explain the idea/theme in each.',
          knowledge: [
            'Various baby/lullaby songs (abụ nwa dị iche iche)',
            'Various war songs (abụ agha dị iche iche)',
            'Reciting the songs well and singing them independently',
            'Explaining the idea/theme contained in each song'
          ]
        }
      ]
    },
    {
      name: 'Primary 5 Igbo (Third Term)',
      topics: [
        {
          name: 'Akara Edemede: Consolidating Punctuation Marks',
          learningOutcome: 'State the different punctuation marks used in a composition, and correctly place punctuation marks in a composition.',
          knowledge: [
            'Identifying different punctuation marks (mpọpụta akara edemede)',
            'Locating and demonstrating punctuation marks (nchọpụta na nzipụta akara edemede)',
            'Correctly placing punctuation marks in a composition (ntinye akara edemede n\'ebe kwesiri ekwesi)'
          ]
        },
        {
          name: 'Nkeji Asụsụ: Nouns and Pronouns',
          learningOutcome: 'Explain what parts of speech are, identify various parts of speech, and use nouns and pronouns to form simple sentences.',
          knowledge: [
            'Meaning of parts of speech (nkọwa nkeji asụsụ)',
            'Examples of nouns (ọmụmaatụ mkpọaha)',
            'Examples of pronouns (ọmụmaatụ nnọchiaha)',
            'Using nouns and pronouns to form simple sentences and demonstrating them in sentences'
          ]
        },
        {
          name: 'Ezinụlọ: Family',
          learningOutcome: 'Explain what a family is, state the members found in a family and their roles, list types of family, and state the benefits of family.',
          knowledge: [
            'Meaning of family (nkọwa ezinụlọ)',
            'Members found in a family (ndị a na-ahụ n\'ezinụlọ)',
            'Different types of family (ụdị ezinụlọ dị iche iche)',
            'The role of each family member and the benefits of family (uru ezinụlọ bara)'
          ]
        },
        {
          name: 'Njirimara Ndị Igbo: Identity and Occupations/Crafts',
          learningOutcome: 'State identifying features of the Igbo, explain what an occupation/craft is, state types of occupations that exist, and state the benefits of having an occupation.',
          knowledge: [
            'Meaning of identifying features (nkọwa ihe bụ njirimara)',
            'Identifying features of the Igbo people (njirimara ndị Igbo)',
            'Meaning of occupation/craft and the types that exist (akaọrụ)',
            'Benefits of having an occupation/craft (uru akaọrụ bara)'
          ]
        },
        {
          name: 'Onụọgụgụ: Numbers 351-400',
          learningOutcome: 'Read, write, and use numbers from 351 to 400 in simple sentences.',
          knowledge: [
            'Numbers from 351 to 400 (onụọgụgụ site na narị atọ na iri ise ruo na narị anọ)',
            'Using these numbers to form sentences (iji onụọgụgụ mee ahịrịokwu)',
            'Writing out the numbers'
          ]
        },
        {
          name: 'Idezu Akụkọ: Story Organization and Writing',
          learningOutcome: 'State the parts found in a composition (introduction, body, conclusion), and write out a narrated story in their own words.',
          knowledge: [
            'Organization of a composition: introduction, body, and conclusion (nhazi edemede dịka mmalite, ahụ na mmechi)',
            'Organizing/writing out a story that has been narrated (ndezu akụkọ a kọfọrọ akọfọ)'
          ]
        },
        {
          name: 'Tensi Igbo: Past, Future, and Present Tense',
          learningOutcome: 'Explain what past, future, and present tense are, use them to form simple sentences, and identify when each tense is used.',
          knowledge: [
            'Meaning of past tense, future tense, and present tense (ndịnụhụ, ndịnazụ, ndịugbua)',
            'Using these tenses to form simple sentences (iji ha eme ahịrịokwu mfe)',
            'Identifying when each tense is used'
          ]
        },
        {
          name: 'Ejije E Depụtara E Depụta: Published/Recorded Skits',
          learningOutcome: 'Read a published/recorded skit, join in performing it, and explain the lesson contained in it.',
          knowledge: [
            'Short published/recorded skits (ejije nkenke e depụtara e depụta)',
            'The lesson found in the skit (ihe mmụta dị n\'ejije)'
          ]
        },
        {
          name: 'Okwu Ntụhi: Riddles and Tongue-Twisters',
          learningOutcome: 'State various riddles and tongue-twisters and explain what each one means.',
          knowledge: [
            'Various riddles/tongue-twisters (okwu ntụhi dị iche iche)',
            'The meaning of a riddle/tongue-twister (ihe okwu ntụhi pụtara)'
          ]
        }
      ]
    }
  ]
};
