// JSS3 Igbo — First, Second, and Third Term
// Source: SchemeofWork.com "Igbo Language Scheme of Work for JSS 3 Federal"
// URL: https://schemeofwork.com/igbo-language-scheme-of-work-for-jss-3-federal/
// Source page carries no NESRI 2025 reform claim, so curriculumVersion is 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (MMỤGHARỊ IHE A KỤZIRI "revision" and ULE/MMECHI "examination/closing"
// at the end of each term) are excluded below.
// The source page carries two parallel tracks for JSS3 — Asụsụ Igbo L1 (first language /
// native-speaker track) and L2 (second language track) — each with its own full three-term
// scheme. This file uses the L1 track, listed first and primary on the source page, as the
// representative "Igbo" subject content, matching the precedent already set for JSS1/JSS2
// Igbo; the L2 track was not merged in to avoid conflating two distinct syllabi under one
// theme.
// The source's weekly table groups all weeks per term into single topic/content and
// activity/materials cells that do not align 1:1 to week numbers; topic names and knowledge
// points below were parsed directly from the source's raw HTML table cells (ISIOKWU/
// NDỊNISIOKWU "topic/content" headings), not summarized from memory, and kept as separate
// topics per distinct heading rather than collapsed, per the established pattern for this
// source. Topic names and knowledge points are translated into readable English from the
// source's Igbo headings, with the original Igbo terms retained parenthetically for
// identification — no content is invented; every point traces to a specific line on the
// source page. Several consecutive weeks share continued-reading objectives (prose, poetry,
// and drama sessions spanning multiple weeks); these are kept as separate topics per week,
// with the shared-objective relationship noted in the learningOutcome text rather than
// inventing distinct objectives per week, per the agent's stated pattern for this source.
// Term 1 runs 11 real topic weeks before the closing administrative (revision/exam/closing)
// weeks; Term 2 runs 10 real topic weeks before a combined revision/exam/closing week; Term 3
// runs 7 real topic weeks before a single closing exam week.

export const curriculumData = {
  subject: 'Igbo',
  grade: 'JSS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS3 Igbo (First Term)',
      topics: [
        {
          name: 'Ọnụọgụgụ: Ịgụ na Ide Ọnụọgụgụ (0–1000) (Numbers — Reading and Writing 0–1,000)',
          learningOutcome: 'Read and recite numbers from 0 to 5,000 and understand written/past-form numbers from 501 to 1,000.',
          knowledge: [
            'Reading numbers from 0 to 5,000 (ịgụ ọnụọgụgụ 0-5000)',
            "Reading numbers from 501 to 1,000 in their written/past form (ịgụ ọnụ ọgụgụ na-agarirị 501-1000)"
          ]
        },
        {
          name: 'Omenala: Nkọwa na Mgbanwe (Culture — Meaning and Changes in Custom)',
          learningOutcome: 'Explain the meaning of culture/custom, describe the naming ceremony and its participants, describe the crown-prince/heir-apparent custom and those involved, and discuss changes that have crept into these customs.',
          knowledge: [
            'Meaning of culture/custom (nkọwa omenala)',
            'Naming ceremony and those involved (ịgụ nwa aha na ndị o metụtara)',
            'The crown prince/heir-apparent custom and those involved (ịhụ nwata eze na ndị o metụtara)',
            "Changes that have crept into these customs (mgbanwe na-abatagasị n'omenala ndị a)"
          ]
        },
        {
          name: 'Agụmagụ: Ọgụgụ Iduuazị A Họpụtara (Prose — Reading the Selected Prose Text)',
          learningOutcome: 'Identify the author, title, and theme of a selected prose text, read the text, and explain new vocabulary and word meanings encountered in it.',
          knowledge: [
            "Author, title and theme of the story (nkọwa odee akwụkwọ, isiokwu, ndị n'isiokwu akụkọ ya)",
            'Reading the selected prose text (ọgụgụ akwụkwọ iduuazị)',
            "Explaining new words and vocabulary encountered (nkọwa mkpụruokwu na okwu ọhụrụ batara n'ihe a gụrụ)"
          ]
        },
        {
          name: 'Omenala: Ile Ọbịa na Ilu (Culture — Receiving Visitors and Proverbs)',
          learningOutcome: 'Explain the custom of receiving visitors and the items traditionally used for hospitality such as kola nut, and learn and explain a few simple Igbo proverbs.',
          knowledge: [
            'Meaning of the custom (nkọwa omenala)',
            "Receiving visitors and items used for hospitality, such as kola nut (ile ọbịa na mkpọpụta ihe ndị ụfọdụ ndị Igbo ji ele ọbịa)",
            'Learning and explaining a few simple proverbs (ọmụmụ ilu na nkọwa ilu ụfọdụ dị mfe)'
          ]
        },
        {
          name: 'Agụmagụ: Iduuazị — Ntụle Agwa na Nchịkọta (Prose — Character Evaluation and Summary)',
          learningOutcome: 'Continue reading the selected prose text, explain sentence structure and new vocabulary, evaluate the characters that stand out in the story, and summarize the story with its lessons.',
          knowledge: [
            'Reading the selected prose text (ọgụgụ akwụkwọ iduuazị a họpụtara)',
            "Explaining sentence structure and new vocabulary from the reading (nkọwa usoro okwu na okwu ọhụrụ ndị bata n'ihe a gụrụ)",
            "Evaluating characters who stand out in the story (ntụle agwa ndị gbara elu n'iduuazị)",
            "Summarizing the story and its lessons (nchịkọta akwụkwọ ejije na ihe mmụta sitere n'akụkọ)"
          ]
        },
        {
          name: 'Nsoroedide: Iwu Ndakọrịta Ụdaume (Orthography — Vowel Harmony Rules)',
          learningOutcome: 'Explain and apply the rules of vowel harmony, including spelling rules for word formation and division, and list words that harmonize and those that break the vowel harmony rule.',
          knowledge: [
            'Meaning and study of vowel harmony rules (nkọwa na ọmụmụ iwu ndakọrịtaụdaume)',
            'Spelling rules as they relate to word formation and word division (iwu nsụpe dịka o metụtara ndekọ na ndesa mkpụrụokwu)',
            "List of words that harmonize and words that break the vowel harmony rule (ndepụta mkpụrụokwu ndị nwere ndakorịta na ndị dara n'iwu ndakọrịtaụdaume)"
          ]
        },
        {
          name: 'Nsoroedide: Ọrụ "Na" N\'Ahịrịokwu (Grammar — Functions of "Na" in a Sentence)',
          learningOutcome: 'Identify the different functions the word "na" performs in a sentence — as a preposition, auxiliary/complement of the verb, conjunction, and verb subject — and give examples of each in sentences.',
          knowledge: [
            'The word "na" performing multiple functions in a sentence: as preposition, auxiliary to the verb, conjunction, and verb subject (ọrụ "na" na-arụ n\'ahịrị-okwu dịka mbuụzọ, nnyemakangwaa, njikọ na isingwaa)',
            'Teaching "na" as a conjunction (nkụzi "na" dịka njikọ)',
            "Giving examples in sentences (inyegasị ọmụmaatụ ha n'ahịrịokwu)"
          ]
        },
        {
          name: 'Ụtọasụsụ: "Na" Dịka Mbuụzọ (Grammar — "Na" as a Preposition)',
          learningOutcome: 'Study and give examples of the word "na" used as a preposition in sentences.',
          knowledge: [
            'Study of "na" as a preposition (ọmụmụ "na" dịka mbuụzọ)',
            'Giving examples in sentences (inyegasị ọmụmaatụ ha)'
          ]
        },
        {
          name: 'Ụtọasụsụ: "Na" Dịka Isingwaa na Nnyemaka Ngwaa (Grammar — "Na" as Verb Subject and Verb Auxiliary)',
          learningOutcome: 'Study and give examples of the word "na" used as the subject of a verb and as an auxiliary/helping verb.',
          knowledge: [
            'Study of "na" as the subject of a verb (ọmụmụ "na" dịka isingwaa)',
            'Study of "na" as an auxiliary/helping verb (ọmụmụ "na" dịka nnyemaka ngwaa)',
            'Giving examples (iwepụtagasị ọmụmaatụ ha)'
          ]
        },
        {
          name: "Ibi N'Udo na Mpụ Ule (Peaceful Coexistence and Examination Malpractice)",
          learningOutcome: 'Explain the meaning of peaceful coexistence, list ways of living peacefully and its benefits and drawbacks, explain the meaning of examination malpractice, list ways students commit it, state its drawbacks, and discuss who bears more responsibility for it — parents or students.',
          knowledge: [
            "Meaning of peaceful coexistence (nkọwa ihe bụ ibi n'udo)",
            "Various ways of living peacefully (ụzọ dị iche iche e si ebi n'udo)",
            "Benefits and drawbacks of peaceful coexistence (uru na ọghọm dị n'ibi n'udo)",
            'Meaning of examination malpractice (nkọwa ihe bụ mpụ ule)',
            'Various ways examination malpractice is committed (ụzọ dị iche iche e si eme mpụ ule)',
            "Drawbacks of examination malpractice (ọghọm dị n'ime mpụ ule)",
            'Class discussion on who should be blamed more for examination malpractice — parents or students (nrụrịtaụka)'
          ]
        },
        {
          name: "Agụmagụ: Iduuazị — Nchịkọta na Omenala Batara N'Akụkọ (Prose — Summary and Cultural Elements in the Story)",
          learningOutcome: 'Read the prose text, summarize its topic and content, explain the lessons it teaches, evaluate the characters featured in it, and identify the Igbo customs reflected in the story.',
          knowledge: [
            'Reading the prose text (ọgụgụ iduuazị)',
            'Summarizing the topic and content of the story (nchịkọta isiokwu na ndịnisiokwu akụkọ)',
            "Explaining the lessons in the story (nkọwa ihe mmụta dị n'akụkọ)",
            "Evaluating the characters featured in the story (ntụle agwa ndị batara n'akụkọ)",
            "Igbo customs reflected in the story (omenala Igbo ndị batara n'akụkọ)"
          ]
        }
      ]
    },
    {
      name: 'JSS3 Igbo (Second Term)',
      topics: [
        {
          name: 'Agụmagụ: Abụ Ederede — Ọdee na Isiokwu (Written Poetry — Poet and Theme)',
          learningOutcome: "Identify the poet and the poetry collection a poem comes from, read two selected poems, analyze their theme, literary devices, and content in brief, and explain the lessons and new vocabulary in the poems.",
          knowledge: [
            'Identifying the poet and the poetry collection (ịkọwa odee abụ na akwụkwọ abụ ya)',
            'Reading two selected poems (ọgụgụ abụ abụọ ndị a họpụtara)',
            'Analyzing the poems\' theme, literary devices, and content in brief (ntụle abụ, isiokwu, asụsụ nka na ihe abụ na-akọ maka ya na nkenke)',
            "Explaining the lessons in the poem (ịkọwa ihe mmụta dị n'abụ)",
            "Explaining new vocabulary in the poems (nkọwa okwu ọhụrụ ndị batara n'abụ)"
          ]
        },
        {
          name: 'Ọgwụ (Medicine and Drugs)',
          learningOutcome: 'Explain what medicine/drugs are, who is qualified to dispense them, where they should be purchased, when they should be taken, the problems associated with buying and taking drugs improperly, and the dangers of indiscriminate drug use.',
          knowledge: [
            'Meaning of medicine/drugs (nkọwa ihe bụ ọgwụ)',
            'Who is qualified to dispense drugs (onye kwesiri inye ọgwụ)',
            'Where drugs should be purchased (ebe e kwesiri ịzụta ọgwụ)',
            'When drugs should be taken (mgbe e kwesiri ịnụ ọgwụ)',
            "Problems associated with improperly buying and taking drugs (nsogbu dị n'ịzụ na ịṅụ ọgwụ)",
            'Dangers of indiscriminate drug use (ịnụ ọgwụ aghara aghara na ọghọm ya)'
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Ntụle Abụ na Asụsụ Nka (Written Poetry — Poem Analysis and Literary Devices)',
          learningOutcome: 'Continue reading the two selected poems, analyze their theme, content and literary devices, explain the lessons in the poems, and explain further literary devices and new vocabulary used.',
          knowledge: [
            'Reading the two selected poems (ọgụgụ abụ abụọ a họpụtara)',
            'Analyzing the poems\' theme and content (ntụle abụ, isiokwu/ihe abụ na-akọ maka ya na asụsụ nka)',
            "Explaining the lessons in the poems (nkọwa ihe mmụta dị n'abụ)",
            "Analyzing literary devices used in the poems (itụle asụsụ nka ndị batara n'abụ)",
            'Explaining new vocabulary in the poems (nkọwa okwu ọhụrụ batara na ha)'
          ]
        },
        {
          name: 'Nkebiokwu: Nkọwa na Ụdị Ya (Sentence Clauses — Meaning and Types)',
          learningOutcome: 'Explain the meaning of a sentence clause, list its different types — noun clause, adjective clause, prepositional clause, and adverbial clause — and construct sentences containing clauses.',
          knowledge: [
            'Meaning of a sentence clause (nkọwa nkebiokwu)',
            'Different types of clause: noun, adjective, prepositional and adverbial clause (ụdị nkebiokwu dị iche iche dịka: nkeaha, kenkọwa, nkembuụzọ na nkenrụaka)',
            'Constructing sentences containing clauses (mmebe ahịrịokwu ndị nwere nkebiokwu)'
          ]
        },
        {
          name: 'Edemede: Kọmpozishọn (Composition Writing)',
          learningOutcome: 'Explain the meaning of composition writing, its structure/organization, and write a sample composition/essay.',
          knowledge: [
            'Meaning of composition writing (nkọwa edemede kọmpozishọn)',
            'Organization/structure of a composition (nhazi ya)',
            'Writing a sample explanatory composition (ide otu edemede nkọwa)'
          ]
        },
        {
          name: 'Nkebiokwu: Nkeaha na Kenkọwaha (Sentence Clauses — Noun Clause and Adjective Clause)',
          learningOutcome: 'Study the noun clause and adjective clause in detail, giving and identifying examples of each in sentences.',
          knowledge: [
            'Meaning of a sentence clause, recap (nkọwa nkebiokwu)',
            'Study of the noun clause (ọmụmụ nkebiokwu keaha)',
            'Study of the adjective clause (ọmụmụ nkebiokwu kenkọwaha)',
            "Examples in sentences (ọmụmaatụ gasị n'ahịrịokwu)"
          ]
        },
        {
          name: 'Nkebiokwu: Kenrụaka na Kembuụzọ (Sentence Clauses — Adverbial Clause and Prepositional Clause)',
          learningOutcome: 'Study the adverbial clause and the prepositional clause, giving examples of each in sentences.',
          knowledge: [
            'Study of the adverbial clause (ọmụmụ nkebiokwu kenrụaka)',
            'Study of the prepositional clause (ọmụmụ nkebiokwu kembuụzọ)',
            "Examples in sentences (ọmụmaatụ ha gasị n'ahịrịokwu)"
          ]
        },
        {
          name: 'Agụmagụ: Abụ Ederede — Ọgụgụ na Ntụle (Written Poetry — Reading and Analysis, Continued)',
          learningOutcome: 'Continue reading the two selected poems, analyze their theme and content, explain the lessons in the poems, and explain new vocabulary encountered.',
          knowledge: [
            'Reading the two selected poems (ọgụgụ akwụkwọ abụ abụọ a họpụtara)',
            'Analyzing the poems\' theme and content (ntụle abụ, isiokwu/ihe abụ na-akọ maka ya na asụsụ nka)',
            "Explaining the lessons in the poems (nkọwa ihe mmụta dị n'abụ)",
            'Explaining new vocabulary (nkọwa okwu ọhụrụ batara na ha)'
          ]
        },
        {
          name: 'Agụmagụ: Ngụgharị na Nchịkọta Abụ (Poetry — Re-reading and Summarizing the Selected Poems)',
          learningOutcome: 'Re-read the selected poems as revision and produce a summary of them.',
          knowledge: [
            'Re-reading the selected poems (ngụgharị akwụkwọ abụ ndị a họpụtara)',
            'Summarizing the poems (nchịkọta ha)'
          ]
        },
        {
          name: 'Edemede: Ụdị Edemede Dị Iche Iche (Composition — Types of Letter Writing)',
          learningOutcome: 'Explain the meaning of composition and identify different types of writing, including the informal (personal) letter, the formal/official letter, and discursive/discussion essays.',
          knowledge: [
            'Meaning of composition (nkọwa edemede)',
            'Different types of composition: (i) informal/personal letter (leta nke onye) (ii) formal/official letter (leta anamachọihe) (iii) discursive essay (edemede mkparịtaụka)'
          ]
        }
      ]
    },
    {
      name: 'JSS3 Igbo (Third Term)',
      topics: [
        {
          name: 'Agụmagụ: Ejije Ederede — Ọdee na Isiokwu (Drama — Playwright and Theme)',
          learningOutcome: 'Identify the playwright, birthplace, theme, and literary devices used in the selected drama text, read the text, and explain new vocabulary encountered.',
          knowledge: [
            'Author\'s name, birthplace, theme of the drama and literary devices used (ntụle odee ejije, ihe ejije na-akọ maka ya na asụsụ nka odee)',
            'Reading the selected drama text (ọgụgụ akwụkwọ ejije)',
            "Explaining new vocabulary encountered (nkọwa okwu ọhụrụ batara n'ejije)"
          ]
        },
        {
          name: "Omenala: Ile Ọmụgwọ na Ibi Ugwu (Culture — Postnatal Care Custom and Title-Taking)",
          learningOutcome: 'Explain what students already know about the ọmụgwọ (postnatal care) custom and the ibi ugwu (title-taking) custom.',
          knowledge: [
            'The ọmụgwọ postnatal care custom (ile ọmụgwọ)',
            'The ibi ugwu title-taking custom (ibi ugwu)'
          ]
        },
        {
          name: "Omenala: Iri Ji Ọhụrụ na Ịwa Ọjị (Culture — New Yam Festival and Kola-Nut Breaking)",
          learningOutcome: 'Explain what students already know about the new yam festival custom and the kola-nut breaking custom.',
          knowledge: [
            'The new yam festival custom (iri ji ọhụrụ)',
            'The kola-nut breaking custom (ịwa ọjị)'
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Ọgụgụ na Usoro Okwu (Drama — Continued Reading and Sentence Structure)',
          learningOutcome: 'Continue reading the selected drama text and explain its sentence structure and new vocabulary.',
          knowledge: [
            'Reading the selected drama text (ọgụgụ akwụkwọ ejije a họpụtara)',
            "Explaining sentence structure and new vocabulary (nkọwa usoro okwu na okwu ọhụrụ ndị batara n'ihe a gụrụ)"
          ]
        },
        {
          name: 'Ụtọasụsụ: Nkebiahịrịokwu Keaha (Grammar — Sentence Phrases and the Noun Phrase)',
          learningOutcome: 'Explain the meaning of a sentence phrase, list its different types, and study the noun phrase, showing its use in sentences.',
          knowledge: [
            'Meaning of a sentence phrase (nkọwa ihe bụ nkebiahịrịokwu)',
            'Different types of sentence phrase (ụdị nkebiahịrịokwu dị iche iche)',
            'Study of the noun phrase and showing it in sentences (ọmụmụ nkebiahịrị keaha na izipụta ya n\'ahịrịokwu)'
          ]
        },
        {
          name: 'Ụtọasụsụ: Nkebiahịrị Kenkọwa na Kembuụzọ (Grammar — Adjective Phrase and Prepositional Phrase)',
          learningOutcome: 'Study the adjective phrase and the prepositional phrase, showing each in sentences.',
          knowledge: [
            'Study of the adjective phrase, showing it in sentences (nkebiahịrị kenkọwa, izipụta nkebiahịrị kenkọwa n\'ahịrịokwu)',
            "Study of the prepositional phrase, showing it in sentences (nkebiahịrị kembuụzọ na nzipụta ha n'ahịrịokwu)"
          ]
        },
        {
          name: 'Agụmagụ: Ejije Ederede — Nchịkọta na Ntụle Agwa (Drama — Summary and Character Evaluation)',
          learningOutcome: 'Read the drama text, summarize it, evaluate the characters that stand out in it, and state the lessons the drama teaches.',
          knowledge: [
            'Reading the selected drama text (ọgụgụ ejije a họpụtara)',
            'Summarizing the drama text read (nchịkọta akwụkwọ ejije a gụrụ)',
            "Evaluating characters that stand out in the drama (ntụle agwa ndị kara pụta ihe n'ejije)",
            'Summarizing the drama and its lessons (nchịkọta akwụkwọ ejije na ihe mmụta sitere n\'ejije)'
          ]
        }
      ]
    }
  ]
};
