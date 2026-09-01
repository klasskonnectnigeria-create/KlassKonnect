// SS2 Yoruba — First, Second and Third Term
// Source: SchemeofWork.com "Yoruba Language Scheme of Work for SS 2 Federal"
// URL: https://schemeofwork.com/yoruba-language-scheme-of-work-for-ss-2-federal/
// Source page does not explicitly claim 2025 NESRI reform compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Àtúnyẹwò Ẹkọ/Iṣẹ / Revision, Ìdánwò / Examination) are excluded.
// As with SS1 Yoruba, the source page renders Yoruba underdot vowels/consonants (ẹ, ọ, ṣ)
// and the syllabic nasal (ǹ) through a custom web font that serializes as mismatched
// Latin-1 lookalikes in the raw page text (e.g. ë/ê/ç -> ẹ, õ/ö/ô -> ọ, ś -> ṣ, ý -> ǹ).
// This was resolved the same way as SS1: downloading the raw HTML via curl, deriving the
// substitution table from words with unambiguous real-Yoruba meaning, and cross-checking it
// against recognizable vocabulary before use, e.g. "akëkõö" -> "akẹkọọ" (student),
// "olùkö" -> "olùkọ" (teacher), "àpççrç" -> "àpẹẹrẹ" (example), "Çgbàá...Õkë" ->
// "Ẹgbàá...Ọkẹ" (the traditional Yoruba number units for 2,000 and 20,000), and
// "Köýpútà" -> "Kọǹpútà" (computer, a loanword) — all genuine, recognizable Yoruba words,
// confirming the substitution table before it was applied to the rest of the content below.
// Week 3 of Third Term ("Ọrọ Àyálò") repeats the exact grammar topic already covered in
// Week 11 of First Term; it is kept as its own topic per the source's own week-by-week
// listing rather than collapsed, per the sourcing convention for repeated umbrella topics.

export const curriculumData = {
  subject: 'Yoruba',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Yoruba',
      topics: [
        {
          name: 'Àròkọ Aláríyànjiyàn (Argumentative Essay Writing)',
          learningOutcome: 'Plan and write a structured Yoruba argumentative essay using a clear introduction, body, and conclusion outline.',
          knowledge: [
            'Meaning and structure of an argumentative essay (àròkọ aláríyànjiyàn)',
            'Producing an outline (ìlapa èrò) before writing the full essay',
            'Applying the outline to compose a complete argumentative essay',
            'Class discussion and debate on a selected topic as a springboard for writing'
          ]
        },
        {
          name: 'Àtúpalẹ Ìwé Eré-Onítàn (Analysis of a Drama Text)',
          learningOutcome: 'Read a set drama text and analyze its theme, plot, setting, characters, and use of language.',
          knowledge: [
            'Theme and plot summary of the selected drama text',
            'Setting (ibùdó ìtàn) and characterization, including character comparison',
            'Use of language (ìlò-èdè) and cultural relevance (ìjẹyọ àṣà) in the text',
            'Merits and demerits (àmúyẹ àti àléébù) of the drama'
          ]
        },
        {
          name: 'Ìsìnkú (Death and Burial Rites)',
          learningOutcome: 'Describe the different causes of death and the customary burial and mourning rites practiced in Yoruba society, including special cases.',
          knowledge: [
            'Various causes of death: illness, accidents, untimely death, suicide',
            'Preparation and care of the corpse, and lying-in-state practices',
            'Condolence customs (ìbánikẹdùn) and how burial was conducted in the past',
            'Special/unusual burial cases: a hunchback, a person who drowned, who hanged themselves, or who fell from a palm tree',
            'Embalming and masquerade rites associated with burial (eegun òkú)'
          ]
        },
        {
          name: 'Gbólóhùn (Sentence Types)',
          learningOutcome: 'Classify Yoruba sentences by structure and identify the subject and predicate within a sentence.',
          knowledge: [
            'Definition of a sentence (gbólóhùn) and how it is structured',
            'Sentence types: simple (alábọdé), compound (oníbọ), and complex (alákànpọ)',
            'Identifying the subject and verb/predicate within a sentence',
            'Practical examples of each sentence type on the board'
          ]
        },
        {
          name: 'Eré Ìdárayá (Traditional Games and Recreation)',
          learningOutcome: 'Identify various traditional Yoruba recreational games and describe how each is played.',
          knowledge: [
            'Types of traditional games: moonlight games (eré òṣùpá) such as bojúbojú and sansalùbọ',
            'Indoor games (eré abẹlé)',
            'Outdoor games (eré ìta gbangba): okòtó, arin, wrestling (ìjàkadì), and spinning-top games',
            'Songs associated with the games and how each is performed'
          ]
        },
        {
          name: 'Àtúpalẹ Ewì Alohùn (Analysis of a Selected Oral Poem)',
          learningOutcome: 'Read a selected oral poem repeatedly and analyze its theme, structure, language use, and the poet\'s background.',
          knowledge: [
            'Theme and cultural content highlighted in the poem',
            'Structural features: call-and-response (lílé/gbígbè), solo and communal chanting',
            'Use of language and cultural relevance within the poem',
            'Background of the chanters/poets: their occupation and era of composition',
            'Other examples of oral literature genres'
          ]
        },
        {
          name: 'Ètò Ìṣèlú (Family Governance and Chieftaincy System)',
          learningOutcome: 'Describe the traditional Yoruba family governance structure and the different categories of chieftaincy titles.',
          knowledge: [
            'Household governance structure (ààtò agbo ilé) and the roles of the household head, wife, and children',
            'Categories of chieftaincy titles (oyè jíjẹ): lineage title, honorary title, religious title, Ogboni title, and military title',
            'Role-play and video illustration of a chieftaincy title-conferment ceremony'
          ]
        },
        {
          name: 'Àròkọ Oníròyìn (News Report Writing)',
          learningOutcome: 'Write a structured Yoruba news report following the correct steps for introduction, paragraphing, and use of language.',
          knowledge: [
            'Steps for writing a news report essay (àròkọ oníròyìn)',
            'Structuring the introduction (ìfáàrà), paragraph division, punctuation, and indentation',
            'Appropriate use of language for reporting news',
            'Sample topics: a road accident witnessed, a football match, a visit to a police station'
          ]
        },
        {
          name: 'Ètò Ọrọ-Ajé: Ìpolówó Ọjà (Advertising and Commerce)',
          learningOutcome: 'Explain why goods are advertised and compare traditional and modern methods of advertising in Yoruba society.',
          knowledge: [
            'Reasons for advertising (ìpolówó ọjà) goods and services',
            'Advertising strategies and jingles used in the past and today',
            'Modern advertising media: radio, television, newspaper, and town-crier (ìkiri)',
            'Class practice creating and performing an advertisement, and a market/shop visit to observe real advertisements'
          ]
        },
        {
          name: 'Ìtẹsíwájú Àtúpalẹ Ewì Àpilẹkọ (Continued Analysis of Written Poetry)',
          learningOutcome: 'Continue analyzing a set written poem, deepening understanding of its theme, structure, and use of language.',
          knowledge: [
            'Theme and cultural practices reflected in the written poem',
            'Structure/form (ètò/ìhun) of the poem',
            'Use of language within the poem',
            'Merits and demerits (àmúyẹ àti àléébù) of the poem'
          ]
        },
        {
          name: 'Ọrọ Àyálò (Loan Words)',
          learningOutcome: 'Explain the meaning, causes, and principles of loan words in the Yoruba language.',
          knowledge: [
            'Meaning of loan words (ọrọ àyálò) in Yoruba',
            'Rules governing the adoption of loan words',
            'Causes of loan words: religion, trade/economy, and other contact factors',
            'Principles of borrowing: visual borrowing (àfojúyá) and oral/aural borrowing (àfetíyá)'
          ]
        },
        {
          name: 'Ọrọ Àgbàsọ: Afọ Asafọ àti Afọ Agbàrán (Reduplicated/Echo Words)',
          learningOutcome: 'Explain the meaning of ọrọ àgbàsọ (reduplicated/echo word formation) and distinguish its two forms.',
          knowledge: [
            'Meaning of ọrọ àgbàsọ (repeated/echo word formation)',
            'Distinguishing the "afọ asafọ" form from the "afọ agbàrán" form',
            'Markers/indicators used to identify ọrọ àgbàsọ',
            'Word classes that commonly appear within ọrọ àgbàsọ constructions'
          ]
        },
        {
          name: 'Àròkọ: Lẹtà Gbẹfẹ (Formal Letter Writing)',
          learningOutcome: 'Write a formal Yoruba letter using the correct address, salutation, heading, date, and closing format.',
          knowledge: [
            'Correct format for an address (àdírẹsì) in a formal letter',
            'Salutation/greeting (ìkíni) conventions',
            'Heading/title (àkọlé), date (dééti), and body/subject matter (kókó ọrọ)',
            'Appropriate closing (àsọkágbá) of a formal letter'
          ]
        },
        {
          name: 'Àtúpalẹ Ìtàn Àròsọ (Analysis of a Prose Narrative)',
          learningOutcome: 'Read a prose narrative closely and analyze its theme, plot, setting, and use of language.',
          knowledge: [
            'Theme (kókó ọrọ) of the prose narrative',
            'Plot summary (àhunpọ ìtàn) and comparison with similar narratives',
            'Setting (ibùdó ìtàn) and plot technique (ọgbọn ìsọtàn)',
            'Use of language and cultural elements portrayed in the story'
          ]
        },
        {
          name: 'Aáyan Ògbufọ (Translation)',
          learningOutcome: 'Translate short poems between English and Yoruba, applying appropriate translation guidelines.',
          knowledge: [
            'Guidelines for translating a poem excerpt from English into Yoruba',
            'Translating a short Yoruba poem into English',
            'Recording and comparing translated versions for accuracy'
          ]
        },
        {
          name: 'Ìhun Gbólóhùn: Oríṣiríṣi Awẹ-Gbólóhùn (Clause Types)',
          learningOutcome: 'Identify the structure and function of clauses (awẹ-gbólóhùn) within a Yoruba sentence.',
          knowledge: [
            'Structure of a clause (awẹ-gbólóhùn) and its function within a sentence',
            'Distinguishing a phrase (àpólà) from a clause',
            'Identifying the main clause (olórí awẹ-gbólóhùn) and a subordinate/relative clause (awẹ-gbólóhùn afarahẹ)',
            'Comparing main and subordinate clauses using worked examples'
          ]
        },
        {
          name: 'Ètò Ogún Jíjẹ (Inheritance Customs)',
          learningOutcome: 'Describe the meaning, procedures, and challenges associated with traditional Yoruba inheritance practices.',
          knowledge: [
            'Meaning of inheritance (ogún) and what may be inherited',
            'Difference between maternal inheritance (ogún ìyá) and paternal inheritance (ogún baba)',
            'Procedures followed in dividing an inheritance',
            'Who has a right to inherit and common problems/disputes in sharing',
            'Court and media illustrations of inheritance disputes and resolutions'
          ]
        },
        {
          name: 'Pípajẹ àti Ìsúnkì (Elision and Vowel Contraction)',
          learningOutcome: 'Explain the meaning and rules of vowel/consonant elision and contraction in Yoruba, and identify the relationship between the two processes.',
          knowledge: [
            'Meaning of elision (pípajẹ) and contraction (ìsúnkì)',
            'Rules governing elision',
            'Vowel elision and consonant elision',
            'Vowel merging (ìyọpọ fáwẹlì)',
            'Relationship between elision and contraction'
          ]
        },
        {
          name: 'Ìtẹsíwájú Àtúpalẹ Ewì Alohùn (Continued Analysis of Oral Poetry)',
          learningOutcome: 'Continue analyzing a selected oral poem, focusing on its theme, associated cultural practices, and merits and demerits.',
          knowledge: [
            'Themes within the oral poem',
            'Religious or occupational associations (ẹsìn/ìṣe) reflected in the poem',
            'Drumming, dancing, and song traditions linked to the poem',
            'Cultural practices depicted, use of language, and merits and demerits of the poem'
          ]
        },
        {
          name: 'Ètò Ìdájọ (Traditional and Modern Judicial System)',
          learningOutcome: 'Compare the traditional and modern Yoruba judicial systems and describe the courts and officials involved in each.',
          knowledge: [
            'Traditional dispute resolution through the family head, ward head (baálẹ), and king (ọba), and the role of the palace emissary',
            'Modern court system: customary court, high court, magistrate court, and court of appeal',
            'Community mediation panels and the roles of the court clerk, police, and warder',
            'Illustrations/videos of past and modern judicial proceedings'
          ]
        },
        {
          name: 'Àrànmọ (Assimilation)',
          learningOutcome: 'Explain the meaning of assimilation in Yoruba phonology and identify its different types.',
          knowledge: [
            'Meaning of assimilation (àrànmọ)',
            'Tonal assimilation (àrànmọ ohùn) and vowel assimilation',
            'Forward assimilation (iwájú) and backward assimilation (ẹyìn)',
            'Nasal (unmarked) assimilation and oral/marked assimilation'
          ]
        },
        {
          name: 'Wúnrẹn Onítumọ Gírámà (Grammatical Tense/Aspect Markers)',
          learningOutcome: 'Identify the grammatical markers used to express future, present, perfective, and continuous/habitual actions in Yoruba.',
          knowledge: [
            'Meaning of grammatical tense/aspect markers (wúnrẹn onítumọ gírámà)',
            'The markers: yóò (future), máa (habitual), ti (completed/perfective), ń (continuous)',
            'Using each marker to indicate future, present, completed, continuous, and habitual actions',
            'Recognizing these markers within full sentences'
          ]
        },
        {
          name: 'Àtúnyẹwò Àròkọ Ajẹmọ-Ìsípayá (Persuasive Essay Writing, Reviewed)',
          learningOutcome: 'Plan and write a persuasive essay using a clear title, introduction, well-organized body, and appropriate paragraph transitions.',
          knowledge: [
            'Review of the outline/planning approach (ìlànà èrò) for a persuasive essay',
            'Choosing a title, writing the introduction (ìfáàrà), and structuring body content',
            'Organizing and transitioning between paragraphs (àgbálọgbábọ)',
            'Practice titles: the market, water, newspapers, and fasting'
          ]
        },
        {
          name: 'Ìranra-Ẹni-Lọwọ (Cooperative Associations)',
          learningOutcome: 'Identify the traditional Yoruba cooperative/mutual-aid associations and explain their role in communal and economic life.',
          knowledge: [
            'Types of cooperative associations: Èsúsú (rotating savings) and Àjọ (savings collection)',
            'Communal labour groups: Ọwẹ and Àáró',
            'Àrokodóko and Gbà-mi-o-rà-mí (mutual assistance) associations',
            'Role of cooperative societies (ẹgbẹ aláfọwọsowọpọ) in trade and community life',
            'Class discussion and a visit to a cooperative society to observe communal cooperation'
          ]
        },
        {
          name: 'Ọrọ Àyálò (Loan Words, Revisited)',
          learningOutcome: 'Review the meaning, causes, and principles of loan words in the Yoruba language.',
          knowledge: [
            'Review of the meaning of loan words and the rules governing them',
            'Causes of loan words: religion, trade/economy, and other contact factors',
            'Principles of borrowing: visual borrowing (àfojúyá) and oral/aural borrowing (àfetíyá)'
          ]
        },
        {
          name: 'Àròkọ Alápèjúwe (Descriptive Essay Writing)',
          learningOutcome: 'Plan and write a descriptive essay with an outline, introduction, appropriate use of language, and conclusion.',
          knowledge: [
            'Choosing a theme and producing an outline (kókó ọrọ, ìlapa èrò) for a descriptive essay',
            'Structuring content (ètò kókó), introduction (ìfáàrà), and conclusion (ìkádìí)',
            'Appropriate use of descriptive language (èdè)',
            'Sample topics: my school, a described street/route, my Yoruba teacher'
          ]
        },
        {
          name: 'Ọnà Ìbánisọrọ (Traditional and Modern Communication)',
          learningOutcome: 'Compare traditional non-verbal communication methods with modern communication tools used in Yoruba society.',
          knowledge: [
            'Traditional non-verbal communication using body parts: finger gestures, head movement, eye signals, foot-stamping, nose gestures',
            'Traditional coded/indirect speech (ìpàrokò)',
            'Modern communication media: newspaper, television, radio, telephone, and computer (kọǹpútà)',
            'Comparing communication tools and methods of the past and present'
          ]
        },
        {
          name: 'Ìhun Gbólóhùn (Phrase Types)',
          learningOutcome: 'Identify noun phrases, verb phrases, and preposition phrases and their function within a sentence.',
          knowledge: [
            'Noun phrase (àpólà ọrọ-orúkọ)',
            'Verb phrase (àpólà ọrọ-ìṣe)',
            'Preposition phrase (àpólà ọrọ-atọkùn)',
            'Function and position of each phrase type within a sentence'
          ]
        },
        {
          name: 'Owó Yíyá àti Gbèsè Gbígbà (Borrowing Money and Credit)',
          learningOutcome: 'Explain the meaning of and reasons for borrowing money, and describe traditional and modern methods of obtaining credit.',
          knowledge: [
            'Meaning of and reasons for borrowing money (owó yíyá)',
            'The role of a guarantor (onídùúró) in borrowing',
            'Traditional credit methods: pawning (dídógò) and traveling credit trading (Òsómàálò)',
            'Modern methods of borrowing money'
          ]
        },
        {
          name: 'Òǹkà Èdè Yorùbá láti Ẹgbàá dé Àádọta Ọkẹ (Yoruba Numbers 2,000 to 1,000,000)',
          learningOutcome: 'Count and apply Yoruba numbers from ẹgbàá (2,000) to àádọta ọkẹ (1,000,000) in addition, subtraction, and multiplication.',
          knowledge: [
            'Meaning of number (òǹkà) and its uses',
            'Counting in Yoruba from ẹgbàá (2,000) to àádọta ọkẹ (fifty ọkẹ units, i.e. one million)',
            'Using Yoruba numbers in simple addition, subtraction, and multiplication',
            'Practice reading and writing large Yoruba numbers'
          ]
        },
        {
          name: 'Àmì Ohùn (Tone Marks)',
          learningOutcome: 'Explain the role of tone in Yoruba as a tonal language and correctly apply high, mid, and low tone marks.',
          knowledge: [
            'Yoruba as a tonal language (èdè olóhùn)',
            'Tone marks used in Yoruba: high tone (àmì òkè), mid tone (àmì àárin), low tone (àmì ìsàlẹ)',
            'Words with identical spelling distinguished only by tone marks, e.g. agbọn, ọkọ, aya',
            'Rule that tone marks apply to vowels, except the syllabic nasal consonant'
          ]
        },
        {
          name: 'Àpèjúwe Ìró Kọńsónáǹtì (Description of Consonant Sounds)',
          learningOutcome: 'Describe Yoruba consonant sounds by their place and manner of articulation and voicing.',
          knowledge: [
            'Meaning of phonetics (fónẹtíìkì)',
            'The Yoruba alphabet and its consonant sounds',
            'Describing consonants by place of articulation (ibi ìsẹnupè) and manner of articulation (ọnà ìsẹnupè)',
            'Voiced and voiceless consonant sounds',
            'The eighteen consonant sounds of Yoruba'
          ]
        },
        {
          name: 'Àpèjúwe Ìró Fáwẹlì (Description of Vowel Sounds)',
          learningOutcome: 'Describe Yoruba vowel sounds by lip position, tongue position, and nasal or oral quality.',
          knowledge: [
            'Meaning of vowel sound (ìró fáwẹlì)',
            'Lip position: rounded (roboto) and spread (pẹrẹsẹ)',
            'Tongue position: front, back, and central',
            'Oral versus nasal vowels',
            'The seven vowel sounds of Yoruba'
          ]
        }
      ]
    }
  ]
};
