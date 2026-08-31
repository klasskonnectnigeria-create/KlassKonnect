// SS1 French — First, Second & Third Term
// Source: EcoleBooks Nigeria, "First/Second/Third Term SS1 French Notes" (weekly note posts,
// SS1 French category pages)
// URL: https://ecolebooks.com/nigeria/subject/senior-secondary-lesson-notes/ss1-first-term-lesson-note/first-term-ss1-french/
//      https://ecolebooks.com/nigeria/subject/senior-secondary-lesson-notes/ss1-second-term-lesson-note/second-term-ss1-french/
//      https://ecolebooks.com/nigeria/subject/senior-secondary-lesson-notes/ss1-third-term-lesson-note/third-term-ss1-french/
// This source does not claim NESRI 2025 compliance; it is a long-standing Nigerian
// senior-secondary French scheme of work, so this is treated as 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// EcoleBooks was preferred over schemeofwork.com and syllabus.ng for this subject/grade because
// those two sources only had thin, one-line-per-week Term 1 content and left Second/Third Term
// as "coming soon" placeholders, while EcoleBooks had actual detailed weekly notes (with real
// vocabulary lists, model texts, and grammar drills) fetched and verified across all three terms.
// Administrative/assessment-only weeks (Revision, Examen) at the end of Third Term are excluded.
// First Term source content runs through Week 9 with no further weeks published on the source;
// Second Term source content likewise runs through Week 9. Third Term Week 8 in the source
// covers "être"/"avoir"-style article grammar under the heading "NOMS, ADJECTIFS, PRONOMS,
// VERBE, ARTICLE" but its detailed content is entirely about the definite article, so the topic
// name below reflects the actual content taught that week.

export const curriculumData = {
  subject: 'French',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 French',
      topics: [
        // ---- First Term ----
        {
          name: "L'importance de la langue française au Nigeria",
          learningOutcome: 'Explain why French is taught in Nigerian schools and identify the Francophone countries that border Nigeria.',
          knowledge: [
            "French is Nigeria's official second foreign language after English, taught alongside English in secondary schools",
            'Nigeria is surrounded by four Francophone countries: Cameroon (east), Republic of Benin (west), Chad (north-east) and Republic of Niger (north-west)',
            'The Nigerian government established a French Language Village in Badagry to support immersive French learning',
            "Knowledge of French supports Nigeria's economic, commercial, political and cultural relations with its Francophone neighbours"
          ]
        },
        {
          name: 'Les pays francophones et anglophones d’Afrique',
          learningOutcome: 'List major Francophone African countries and their capitals, and contrast them with Anglophone African countries.',
          knowledge: [
            'Francophone countries and capitals covered include Togo (Lomé), Mali (Bamako), Senegal (Dakar), Benin (Porto-Novo), Niger (Niamey), Cameroon (Yaoundé), Côte d’Ivoire (Abidjan) and Burkina Faso (Ouagadougou)',
            'Anglophone African countries and capitals covered include Nigeria (Abuja), Ghana (Accra), Egypt (Cairo), Kenya (Nairobi) and South Africa (Pretoria)',
            'Practice forming nationality adjectives from country names, e.g. Nigeria → Nigérian, Egypt → Égyptien, Ghana → Ghanéen'
          ]
        },
        {
          name: 'Les salutations et se présenter',
          learningOutcome: 'Use common French greetings correctly in context and give a short spoken or written self-introduction.',
          knowledge: [
            'Common greetings and courtesy expressions: Bonjour, Bonsoir, Au revoir, À bientôt, Merci beaucoup, De rien, Ça va?, Bonne chance',
            'Occasion-specific greetings distinguish time of day and events: Bon Noël, Bonne année, Bon voyage, Bon week-end, Bon anniversaire',
            'Self-introduction ("moi-même") covers name, age, nationality, state of origin, language, address, profession, and favourite food/colour'
          ]
        },
        {
          name: 'Les verbes auxiliaires être et avoir',
          learningOutcome: 'Conjugate and correctly use the auxiliary verbs "être" (to be) and "avoir" (to have) in simple present-tense sentences.',
          knowledge: [
            'Present-tense conjugation of être: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont',
            'Present-tense conjugation of avoir: j’ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont',
            'Practice sentences apply both verbs to describe identity, nationality and possessions, e.g. "Je suis étudiant", "J’ai un stylo"'
          ]
        },
        {
          name: 'Les accents français et les signes de ponctuation',
          learningOutcome: 'Identify and correctly use the five French accent marks and standard punctuation marks in writing.',
          knowledge: [
            'The five accents: accent aigu (é), accent grave (è), accent circonflexe (ê), la cédille (ç), and le tréma, with example words (étudiant, mère, hôpital, garçon, Noël)',
            'Punctuation marks covered: le point (.), la virgule (,), le point d’interrogation (?), le point d’exclamation (!), les guillemets (« »), le tiret (–), les deux points (:)'
          ]
        },
        {
          name: 'Les professions et métiers',
          learningOutcome: 'Name common professions in French using the correct masculine and feminine forms.',
          knowledge: [
            'Masculine/feminine profession pairs covered include professeur/professeure, avocat/avocate, comptable, pilote, journaliste, boulanger/boulangère, médecin, secrétaire, coiffeur/coiffeuse and chauffeur',
            'Practice describing people by profession, title and clothing colour, e.g. "Voici Docteur Bola, il est médecin. Il porte un pantalon noir."'
          ]
        },
        {
          name: 'Parler de son environnement immédiat',
          learningOutcome: 'Describe one’s house, school and immediate surroundings in French, including rooms, objects and people.',
          knowledge: [
            'Vocabulary for describing a neighbourhood (quartier), a school, and rooms of a house (le salon, la cuisine, la chambre, la salle de bains)',
            'A model composition "Mon École" describes the school’s name, location, size, staff, and facilities such as science laboratories and the French audio-visual room',
            'Extension vocabulary for describing family members, teachers and favourite meals'
          ]
        },
        {
          name: 'Les activités quotidiennes et exprimer son accord/désaccord',
          learningOutcome: 'Narrate a daily routine using reflexive verbs and express agreement or disagreement on a simple topic with reasons.',
          knowledge: [
            'Reflexive (pronominal) verbs for daily routine: se lever, se laver, se promener, s’habiller, se réveiller, se coucher',
            'A model text "Que je fais tous les jours" narrates a full day from waking at 5am to sleeping at 10pm using time expressions',
            'Expressions for agreement/disagreement: Je suis d’accord, Je ne suis pas d’accord, C’est vrai, C’est faux, Je crois que…, with justification words à cause de, parce que, car',
            'Sample debate prompt "L’argent fait le bonheur" (money brings happiness) used for simple argumentation practice'
          ]
        },
        {
          name: 'Exprimer ses goûts et ses préférences',
          learningOutcome: 'Express likes, dislikes and preferences using the verbs adorer, aimer, détester and préférer, correctly conjugated.',
          knowledge: [
            'Present-tense conjugation of adorer, aimer, détester, préférer and goûter',
            'Practice sentences express personal preferences about school subjects, food and career interests, e.g. "Je déteste les mathématiques", "J’adore la littérature"',
            'Introduces forming negative sentences as a follow-on exercise'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Les accents français (révision) et les signes de ponctuation',
          learningOutcome: 'Reinforce correct identification and use of French accent marks and punctuation in written French.',
          knowledge: [
            'Revises the five accents (aigu, grave, circonflexe, cédille, tréma) with further example words (bébé, étudiant, mère, hôpital, leçon)',
            'Revises punctuation marks: point, point-virgule, virgule, point d’interrogation, point d’exclamation, guillemets, tiret, points de suspension'
          ]
        },
        {
          name: 'Révision de l’alphabet français et des consonnes phonétiques',
          learningOutcome: 'Recite the French alphabet with correct pronunciation and recognise International Phonetic Alphabet consonant sounds in French words.',
          knowledge: [
            'Full revision of the French alphabet with letter names (Aa, Bb "bé", Cc "cé" … Zz "zed")',
            'Introduction to IPA consonant sounds in French with example words, e.g. (b) as in bébé, beaucoup; (d) as in lundi, mardi; (f) as in famille, photo; (g) as in garçon, légumes'
          ]
        },
        {
          name: 'Les consonnes et voyelles orales simples; introduction à la culture française',
          learningOutcome: 'Distinguish further French consonant and simple oral vowel sounds, and describe what "culture" means in a French-language context.',
          knowledge: [
            'Further consonant sounds covered: (l), (m), (n), (p), (r), (s), (t), (v), (z), with example words',
            'Simple oral vowels a, i, o, u and their phonetic variants (fermé/ouvert), e.g. (e) as in été, (ɛ) as in être, lait',
            'Introductory definition: "la culture est la vie totale" (culture is the total way of life), framing culture as beliefs, values and artifacts learned through socialization'
          ]
        },
        {
          name: 'Les voyelles composées, nasales et semi-voyelles',
          learningOutcome: 'Pronounce French compound oral vowels, nasal vowels and semi-vowels/semi-consonants correctly using guided practice words.',
          knowledge: [
            'Compound oral vowels (y), (ø), (œ) as in rue, bleu, peur',
            'Nasal vowels (ɛ̃), (ɑ̃), (ɔ̃), (œ̃) as in vin, tante, bon, lundi',
            'Semi-vowels/semi-consonants (w), (ɥ), (j) as in oui, lui, pied',
            'Guided pronunciation drills contrasting similar vowel sounds across word pairs'
          ]
        },
        {
          name: 'Culture et civilisation en France',
          learningOutcome: 'Describe key facts about France’s geography, education system and economy.',
          knowledge: [
            'France’s geography: surface area of 549,000 km², population of about 59 million, and neighbouring countries Belgium, Luxembourg, Germany, Switzerland, Italy and Spain',
            'France’s centralized education system runs from nursery (2–6) through primary (cours préparatoire, CE1/CE2, CM1/CM2) to collège (11–15), governed by the Ministère de l’Éducation nationale',
            'France’s economy is described as the world’s fourth-largest, a G7 member, with primary (agriculture), secondary (industry, nuclear power) and services sectors and a statutory 39-hour work week'
          ]
        },
        {
          name: 'Les moyens de transport',
          learningOutcome: 'Name different means of transport in French and classify them as travel by air, land or water.',
          knowledge: [
            'Transport is classified as par l’air (by air), par terre (by land), par l’eau (by water)',
            'Vocabulary for means of transport: l’avion (plane), le train, le taxi, la voiture, le bateau, la bicyclette, la motocyclette, l’autocar',
            'A short narrative text "Bon voyage" recounts a personal trip by bus and by train, used as a reading/comprehension model'
          ]
        },
        {
          name: 'Le voyage par avion',
          learningOutcome: 'Discuss air travel in Nigeria in French, including which cities are connected by air and typical flight durations.',
          knowledge: [
            'A reading passage explains that air travel is Nigeria’s fastest transport mode but is often reserved for wealthier travellers',
            'Example facts used in the text: a Lagos–Abuja flight takes about fifty minutes; a plane can carry more than 400 passengers',
            'Comprehension questions practise asking and answering about travel time and destinations (Lagos, Abuja, Port Harcourt, Ibadan)'
          ]
        },
        {
          name: "La grammaire: l'imparfait",
          learningOutcome: 'Conjugate regular and key irregular verbs in the imperfect tense and use it to describe past habitual actions.',
          knowledge: [
            'Imperfect tense endings: -ais, -ais, -ait, -ions, -iez, -aient',
            'Full imperfect conjugation of être, avoir, parler, aller and finir (2nd group)',
            'Model sentences describe childhood habits, e.g. "Quand j’étais enfant, j’habitais à Mushin avec mes parents"'
          ]
        },
        {
          name: 'La grammaire: le passé composé',
          learningOutcome: 'Form the passé composé with "avoir" for common verbs and use it to narrate completed past actions.',
          knowledge: [
            'Passé composé conjugation with avoir for être, parler, danser, boire, prendre, faire, manger, donner, lire and finir, including irregular past participles (bu, pris, fait, lu)',
            'Practice sentences narrate completed actions, e.g. "J’ai fini mon devoir hier soir", "Nous avons lu le roman"'
          ]
        },
        // ---- Third Term ----
        {
          name: "L'oral: les pratiques de la lecture — le dialogue selon WAEC et NECO",
          learningOutcome: 'Practise oral reading and dialogue comprehension in the style used in WAEC and NECO French oral examinations.',
          knowledge: [
            'Reading practice references audio material such as cassette and CD recordings, mirroring WAEC/NECO oral exam formats',
            'Establishes listening/reading comprehension as an examination-skill focus for the term'
          ]
        },
        {
          name: "Comparer le monde d'hier et d'aujourd'hui",
          learningOutcome: 'Compare past and present life in Nigeria in French, referencing changes in leisure, transport, education, health and rural development.',
          knowledge: [
            'Discusses change ("le changement") across loisirs, distractions, transport, famille, ville, magasins, écoles and moyens de communication',
            'Describes Nigerian government rural development programmes covering roads, schools, hospitals, water and electricity supply, and community banks',
            'References cooperation with the World Health Organization (OMS) on rural healthcare and vaccination programmes'
          ]
        },
        {
          name: 'Exprimer satisfaction ou son regret sur le changement',
          learningOutcome: 'Express satisfaction, regret or opinion about societal change using appropriate French expressions.',
          knowledge: [
            'Expressions of opinion/reaction: C’est bien, C’est super, C’est dommage, C’est triste, C’est terrible, C’était mieux',
            'A reading passage contrasts modern conveniences (mobile phone, internet, fax) with life before electricity, and discusses how respect for teachers has changed over time',
            'Writing task: describe life in the village versus life in the city'
          ]
        },
        {
          name: 'Exprimer ses sentiments positifs et négatifs',
          learningOutcome: 'Express positive and negative feelings and reactions in French using a range of adjectives and set expressions.',
          knowledge: [
            'Positive expressions: Je suis enchanté(e), Je suis content(e), C’est facile, C’est magnifique, Bravo, Félicitations',
            'Negative expressions: C’est dommage, C’est mal, C’est difficile, C’était mauvais',
            'A reading passage contrasts the historical respect given to school directors/teachers with reduced respect for the teaching profession today'
          ]
        },
        {
          name: 'Exprimer ses goûts (approfondissement)',
          learningOutcome: 'Extend the use of aimer, préférer, détester and vouloir to express preferences and desires in both positive and negative forms.',
          knowledge: [
            'Present-tense conjugation of aimer, préférer, détester and vouloir (positive and negative forms: je veux/je ne veux pas)',
            'Extended practice sentences apply these verbs to school, family, food and career preferences'
          ]
        },
        {
          name: 'Exprimer son opinion et parler de son avenir',
          learningOutcome: 'State an opinion using expressions like "à mon avis" and "je pense que", and describe future plans using aller + infinitive.',
          knowledge: [
            'Opinion expressions: À mon avis, Je pense que, Je crois que, Quant à moi, Ça me plaît, Ça ne m’intéresse pas',
            'Short first-person texts describe future plans (le futur proche) such as travelling to France, attending a football academy, or studying abroad after WAEC, matched to images as a reading/matching exercise'
          ]
        },
        {
          name: "Exprimer en bon français à l'oral et à l'écrit; donner des conseils",
          learningOutcome: 'Use correct spoken and written French in a health-related dialogue and give simple advice, including use of the imperfect tense.',
          knowledge: [
            'A dialogue about a student (Kunle) visiting the hospital models health vocabulary and question forms: "Qu’est-ce que tu as?", "J’ai mal à la tête/au ventre"',
            'Grammar note on the imperfect tense in context: "C’était délicieux", "Il avait mal au ventre"',
            'Practice exercise fills in body-part prepositions (au, à la, à l’, aux) and reading comprehension with vrai/faux questions'
          ]
        },
        {
          name: 'La grammaire: l’article défini',
          learningOutcome: 'Use the French definite article (le, la, les) correctly, including its contracted forms with the prepositions à and de.',
          knowledge: [
            'The three forms of the definite article: le (masculine singular), la (feminine singular), les (plural); with l’ before a vowel or silent h',
            'Contraction rules with à: à + le = au, à + les = aux, e.g. "je vais au marché"',
            'Contraction rules with de: de + le = du, de + les = des, e.g. "je viens du marché"'
          ]
        },
        {
          name: 'La grammaire: le discours indirect et les pronoms personnels objets',
          learningOutcome: 'Use direct and indirect object pronouns correctly and convert direct speech into indirect (reported) speech.',
          knowledge: [
            'Direct object pronouns (me, te, le/la, nous, vous, les) and indirect object pronouns (me, te, lui, nous, vous, leur), each with example sentences',
            'Conversion practice from direct to indirect speech, e.g. "Kodjo dit à son camarade: ‘prête-moi ton stylo’" → "Kodjo lui a demandé de lui prêter son stylo"'
          ]
        },
        {
          name: 'La grammaire et le vocabulaire: compréhension orale',
          learningOutcome: 'Use descriptive definitions ("c’est-à-dire que…") to explain vocabulary items and build descriptive vocabulary for people and situations.',
          knowledge: [
            'Descriptive definition patterns explain vocabulary, e.g. "Celui qui ne voit pas est un aveugle" (one who cannot see is blind), "Celui qui ne parle pas est un muet"',
            'Vocabulary for life situations and states: riche, malade, fatigué, célibataire, veuf/veuve, orphelin',
            'Sentence patterns using "c’est-à-dire que" (that is to say) to clarify meaning, e.g. "J’ai faim. C’est-à-dire que je veux manger"'
          ]
        }
      ]
    }
  ]
};
