// SS2 Hausa — First, Second and Third Term
// Source: SchemeofWork.com "Hausa Language Scheme of Work for SS 2 Federal"
// URL: https://schemeofwork.com/hausa-language-scheme-of-work-for-ss2-federal/
// Source page does not explicitly claim 2025 NESRI reform compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Maimaitawa / Revision, Jarabawa / Examination) are excluded.
// Hausa special characters (Ƙ/ƙ, Ɗ/ɗ, Ɓ/ɓ, ' apostrophe) came through the raw fetched HTML
// as correct UTF-8 text — no custom-web-font mojibake was found on this page (checked for the
// "â€"-style corruption pattern seen on the Yoruba/Igbo sources; none present), so no character
// substitution was needed. Topic names below keep the original Hausa terms with an English gloss.
// A few list items in the source ran together without spaces between entries (e.g. a week-5
// list of oral-song types and a week-1 second-term list of prose themes); where individual words
// could not be confidently separated, the knowledge points below summarize the group rather than
// inventing a precise word boundary.

export const curriculumData = {
  subject: 'Hausa',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Hausa',
      topics: [
        {
          name: 'Azuzuwan Kalmomi I (Word Classes I)',
          learningOutcome: 'Define the meaning of a word and classify Hausa word types including noun, pronoun, and adjective.',
          knowledge: [
            'Meaning of kalma (word)',
            'Suna (noun) and its classifications (rabe-raben suna)',
            "Wakilin suna (pronoun) and its types; sifa (adjective) and what it entails"
          ]
        },
        {
          name: 'Azuzuwan Kalmomi II (Word Classes II)',
          learningOutcome: 'Identify and use further Hausa word classes including verb, adverb, and demonstrative.',
          knowledge: [
            'Aikatau (verb)',
            'Bayanau (adverb)',
            'Nunau (demonstrative)'
          ]
        },
        {
          name: 'Azuzuwan Kalmomi III (Word Classes III)',
          learningOutcome: 'Complete the classification of Hausa word types with additional illustrative examples in sentences.',
          knowledge: [
            "Concluding word classes: mafayyac and ma'auni (quantifying/comparative word types)",
            'Numerous illustrative examples given in full sentences'
          ]
        },
        {
          name: 'Nazarin Waƙoƙin Baka I (Study of Oral Poetry I — Meaning and Purpose)',
          learningOutcome: 'Explain the meaning and social purposes of Hausa oral poetry.',
          knowledge: [
            'Meaning of waƙoƙin baka (oral poetry/songs)',
            'Wayar da kai (raising awareness), zambo (mockery), and zuga (incitement) as purposes of oral songs',
            'Nishaɗi (entertainment), habaici (innuendo), yabo (praise), raha (humor), and kewa (nostalgia/longing)'
          ]
        },
        {
          name: 'Nazarin Waƙoƙin Baka II (Study of Oral Poetry II — Types)',
          learningOutcome: 'Identify different types of Hausa oral songs and the occasions on which they are performed.',
          knowledge: [
            'Types of oral songs, e.g. waƙar aure (marriage/wedding songs)',
            'Further traditional song forms performed in Hausa communities'
          ]
        },
        {
          name: 'Ginin Kalmomi I (Word Formation I)',
          learningOutcome: 'Explain the concept of word formation and identify the root of a word.',
          knowledge: [
            'Meaning of ginin kalma (word formation)',
            'Saiwa or tushen kalma (word root/stem)'
          ]
        },
        {
          name: 'Ginin Kalma II (Word Formation II — Affixation)',
          learningOutcome: 'Identify the components of Hausa word formation, including different affix positions.',
          knowledge: [
            'Elements that make up a word: ɗafi (affix)',
            'Ɗafa-goshi (prefix), ɗafa-ciki (infix), and ɗafa-ƙeya (suffix)'
          ]
        },
        {
          name: "Insha'i (Letter Writing)",
          learningOutcome: "Write a properly formatted letter following correct Hausa composition rules.",
          knowledge: [
            'Letter writing (wasiƙu) according to proper format and structure',
            "Rules of writing (ƙa'idojin rubutu) applied to letters"
          ]
        },
        {
          name: 'Nazarin Tatsunniyoyi da Labarai I (Study of Folktales and Stories I)',
          learningOutcome: 'Analyze folktales and stories for the life lessons and survival strategies they convey.',
          knowledge: [
            'Study of tatsuniyoyi (folktales) and labarai (stories) that teach life skills/survival strategies (dabarun zaman duniya)'
          ]
        },
        {
          name: 'Nazarin Tatsunniyoyi da Labarai II (Study of Folktales and Stories II — Character Traits)',
          learningOutcome: 'Distinguish between good and bad character traits illustrated in folktales and stories.',
          knowledge: [
            'Kyawawan halaye (good character traits) drawn from folktales and stories',
            'Munanan halaye (bad character traits) drawn from folktales and stories'
          ]
        },
        {
          name: 'Camfe-camfe da Magungunan Gargajiya (Superstitions and Traditional Medicine)',
          learningOutcome: 'Describe Hausa superstitions and traditional medicine practices and explain their importance.',
          knowledge: [
            'Types of Hausa superstitions (camfe-camfe) and their meanings',
            'Meaning and types of magungunan gargajiya (traditional medicine)',
            'Traditional healers/dispensers of medicine (masu bada su) and the importance of traditional medicine'
          ]
        },
        {
          name: 'Nazarin Littafin Zube I (Study of the Prose Text I — Themes)',
          learningOutcome: 'Analyze the themes of a set Hausa prose text, including heroism, love, and character reform.',
          knowledge: [
            'Jigo (theme) of the prose text',
            'Jaruntaka (heroism), soyayya (love), and tausayi (compassion/pity) as thematic elements',
            'Gyaran hali (character reform) and dabarun zaman duniya (life skills/survival strategies)'
          ]
        },
        {
          name: 'Nazarin Littafin Zube II (Study of the Prose Text II — Style and Language)',
          learningOutcome: "Describe the author's stylistic techniques for structuring and holding attention in the prose text.",
          knowledge: [
            'Chapter divisions (babi-babi) in the prose text',
            'Sentence construction (tsara jimloli) and paragraphing (sakin layi)',
            'Attention-drawing techniques (dabarun jan hankali) and word usage/choice'
          ]
        },
        {
          name: 'Furucin Baƙaƙe da Wasula I (Phonetics I — Sound System)',
          learningOutcome: 'Explain the Hausa sound system, distinguishing simple and compound consonants and vowel types.',
          knowledge: [
            'Meaning of tsarin sauti (sound system/phonology)',
            'Simple consonants (baƙaƙe saukaka), e.g. B, C, D, F',
            'Compound/supported consonants, e.g. gy, gw, ts, sh; single and paired vowels'
          ]
        },
        {
          name: 'Furucin Baƙaƙe da Wasula II (Phonetics II — Articulation)',
          learningOutcome: 'Describe how Hausa consonants and vowels are articulated, including place, manner, and voicing.',
          knowledge: [
            'Place of articulation of consonants (gurbin furici)',
            'Manner of articulation (yanayin furici) and voicing status — voiced (mai ziza) versus voiceless (marar ziza)',
            'Articulation of vowels: length (tsayi), quality/shape (siga), and diphthongs (tagwan wasali)'
          ]
        },
        {
          name: 'Furucin Baƙaƙe da Wasula III (Phonetics III — Syllable Structure)',
          learningOutcome: 'Identify Hausa syllable structures and distinguish closed from open syllables.',
          knowledge: [
            'Meaning of gaɓa (syllable)',
            'Syllable structures: consonant-vowel (BW), consonant-vowel-consonant (BWB), consonant-vowel-vowel (BWW)',
            'Rufaffiyar gaɓa (closed syllable) and budaddiyar gaɓa (open syllable)'
          ]
        },
        {
          name: 'Nazarin Littafin Karin Magana (Study of Proverbs)',
          learningOutcome: 'Explain the meaning, usage, and types of Hausa proverbs.',
          knowledge: [
            'Meaning of karin magana (proverbs)',
            'How proverbs are used/constructed',
            'Types of proverbs'
          ]
        },
        {
          name: 'Lokuta (Tenses)',
          learningOutcome: 'Identify and use the different tense forms in Hausa.',
          knowledge: [
            'Meaning of lokaci (tense)',
            'Shuɗaɗɗen lokaci (past tense) forms I and II',
            'Lokaci sabau (new/habitual tense) and lokaci mai ci (continuous tense) forms I and II'
          ]
        },
        {
          name: 'Nazarin Littafin Wasan Kwaikwayo I (Study of the Drama Text I)',
          learningOutcome: 'Analyze the theme, plot, structure, and language of a set drama text.',
          knowledge: [
            'Meaning of wasan kwaikwayo (drama)',
            'Jigo (theme), zubi (plot/form), tsari (structure), and sarrafa harshe (use of language) in the drama text'
          ]
        },
        {
          name: 'Nazarin Littafin Wasan Kwaikwayo II (Study of the Drama Text II — Performance Venues)',
          learningOutcome: 'Identify the different media/venues through which Hausa drama is performed.',
          knowledge: [
            'Venues/media for drama performance: rediyo (radio), telebijin (television), and dandali (stage)'
          ]
        },
        {
          name: 'Tunanin Bahaushe Akan Fatalwa (Hausa Beliefs About Ghosts)',
          learningOutcome: 'Explain Hausa traditional beliefs about ghosts and related spiritual concepts.',
          knowledge: [
            'Meaning of fatalwa (ghost) and how the Hausa understand ghosts',
            'Related concepts: mutuwa (death), kurwa (spirit/soul), and kishibege (a fearsome apparition)',
            'Traditional stories/narratives about ghosts'
          ]
        },
        {
          name: 'Auna Fahimta I (Comprehension I — Meaning)',
          learningOutcome: 'Explain the meaning and purpose of comprehension assessment and interpret Hausa vocabulary in context.',
          knowledge: [
            "Meaning of auna fahimta (comprehension assessment) — confirming understanding to sharpen learners' grasp",
            'Understanding the meaning of Hausa vocabulary in context'
          ]
        },
        {
          name: 'Auna Fahimta II (Comprehension II — Types)',
          learningOutcome: 'Distinguish between narrative-based, speech-based, and poetry-based comprehension assessment.',
          knowledge: [
            'Types of comprehension assessment: na labari (narrative-based)',
            'Na jawabi (speech-based) and na waƙa (poetry-based)'
          ]
        },
        {
          name: 'Ire-Iren Fassara I (Types of Translation I)',
          learningOutcome: 'Identify and apply different types of translation, including literal and free translation.',
          knowledge: [
            "Fassarar baƙi da baƙi (literal/letter-by-letter translation)",
            "Fassarar nan take (instant/on-the-spot translation)",
            "Fassara mai yanci (free translation)"
          ]
        },
        {
          name: 'Ire-Iren Fassara II (Types of Translation II — Categories and Stages)',
          learningOutcome: 'Explain the linguistic and cultural competencies and stages required for accurate translation.',
          knowledge: [
            'Naƙaltar harsuna biyu (bilingual competence) and naƙaltar al\'adu (cultural competence)',
            "Daidaituwar saƙo (message equivalence) and banbancin karin harshe (dialect differences) as stages of translation"
          ]
        },
        {
          name: 'Nazarin Littafin Rubutacciyar Waƙa I (Study of Written Poetry I — Theme and Structure)',
          learningOutcome: 'Analyze the theme, form, and stanza structure of a written Hausa poem.',
          knowledge: [
            'Jigo (theme) of the written poem',
            'Zubi (form) and tsarin baitoci (structure of stanzas)'
          ]
        },
        {
          name: 'Nazarin Littafin Rubutacciyar Waƙa II (Study of Written Poetry II — Style and Language)',
          learningOutcome: 'Describe the stylistic and language techniques used in written Hausa poetry.',
          knowledge: [
            'Salo (style) and sarrafa harshe (use of language) in written poetry',
            "Attention-drawing techniques (dabarun jawo hankali) and the use of archaic/borrowed words (ararrun kalmomi)"
          ]
        },
        {
          name: "Sana'oin Gargajiya I (Traditional Occupations I)",
          learningOutcome: 'Identify traditional Hausa occupations/crafts and describe what each involves.',
          knowledge: [
            "Meaning of sana'oin gargajiya (traditional occupations/crafts)",
            'Fawa (butchering), kaɗi (spinning), kitso (hair plaiting), and farauta (hunting)',
            "Dori (tanning), gini (building), jima (sewing/tailoring), and rini (dyeing)"
          ]
        },
        {
          name: "Sana'oin Gargajiya II (Traditional Occupations II — Tools and Practitioners)",
          learningOutcome: 'Identify the tools and practitioners associated with traditional Hausa crafts.',
          knowledge: [
            "Types of tools used in traditional crafts (kayan aikin sana'o'i gargajiya)",
            "Identifying practitioners of traditional crafts (masu sana'o'i gargajiya)"
          ]
        },
        {
          name: 'Tunanin Bahaushe Akan Iskoki I (Hausa Beliefs About Spirits I)',
          learningOutcome: 'Explain Hausa beliefs about spirits and their classification.',
          knowledge: [
            'Meaning of iskoki (spirits) and how the Hausa understand spirits',
            'Masu ban tsoro (frightening spirits), baƙaƙen iskoki (black spirits), and fararen iskoki (white spirits)'
          ]
        },
        {
          name: 'Tunanin Bahaushe Akan Iskoki II (Hausa Beliefs About Spirits II — Dwelling Places)',
          learningOutcome: 'Describe the traditional dwelling places associated with spirits in Hausa belief.',
          knowledge: [
            'Dwelling places of spirits: tsamiya (tamarind tree), faƙo (anthill/rock crevice), and kuka (baobab tree)',
            'Further dwelling places: kogo (cave), suri, gwalalo, juji (rubbish heap), and bayi'
          ]
        }
      ]
    }
  ]
};
