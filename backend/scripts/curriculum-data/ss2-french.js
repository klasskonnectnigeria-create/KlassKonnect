// SS2 French — First, Second & Third Term
// Source: SchemeofWork.com, "French Scheme of Work SSS2 Lagos State"
// URL: https://schemeofwork.com/french-scheme-of-work-sss2-lagos-state/
// This source does not claim NESRI 2025 compliance; it presents itself as the "Unified French
// Free Scheme of Work for SSS2" (Lagos State), so this is treated as 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Fetched and independently verified via raw HTML (curl + tag-stripped text dump) to confirm the
// SEMAINE/SUJET-CONTENU tables for all three terms were real, not fabricated.
// Administrative weeks (L'Examen, La Révision, Mid Term Test/Open Day/Mid Term Break) are
// excluded from every term.
// The source's underlying text has many OCR-style typos (e.g. "devraent" for "devraient",
// "cnjuguer" for "conjuguer"); the French phrases below are corrected for spelling/accents while
// preserving the source's actual vocabulary, structures and activities — no content was invented.
// Third Term Weeks 8&9 ("Nuancer l'expression d'une opinion") and 10&11 ("Rédaction") have only
// thin source content (a short expressions list / a bare objective statement, with no detailed
// activities listed) — this is noted in those topics' knowledge arrays rather than padded with
// invented detail.
// The recurring Week 1 "L'Épreuve et l'Oral" topic in each term combines review of the prior
// term's exam questions with genuine oral-comprehension skill practice; it is kept as a real
// topic focused on the oral comprehension skill rather than treated as pure exam-review filler.

export const curriculumData = {
  subject: 'French',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 French',
      topics: [
        // ---- First Term ----
        {
          name: "L'épreuve orale — compréhension orale (Oral Comprehension Practice)",
          learningOutcome: 'Answer oral comprehension questions accurately and build listening skills through role-play and individual practice.',
          knowledge: [
            'Answering questions drawn from an oral comprehension text (compréhension orale)',
            "Group work, jeu de rôle (role-play) and individual work to build listening/response skills",
            "Review of the type of oral examination questions asked in the previous term's exam"
          ]
        },
        {
          name: 'Citer une action passée mais récente (Recent Past Actions)',
          learningOutcome: "Use the structure 'venir de + infinitif' to describe an action that has just happened.",
          knowledge: [
            "Structure: sujet + venir de/d' + l'infinitif, e.g. 'Je viens de manger du riz', 'Nous venons de terminer le repas'",
            "Conjugating the verb 'venir' in the présent de l'indicatif",
            'Flashcard games where learners pronounce verbs and build sentences with each one',
            'Mime activity: one learner performs an action, others say what they have just done',
            'Short written composition (petite rédaction) using the recent-past structure'
          ]
        },
        {
          name: "Exprimer une action répétée dans le passé (Imparfait vs Passé Composé)",
          learningOutcome: 'Express habitual or repeated past actions/states, contrasting the imparfait and passé composé, and conjugate verbs correctly in each tense.',
          knowledge: [
            "Expressions marking repeated past habits: tous les jours, chaque fois, souvent, toujours, de temps en temps",
            "Contrasting the passé composé and l'imparfait",
            "Imparfait verb endings: -ais, -ais, -ait, -ions, -iez, -aient",
            "Group storytelling activity ('Il était une fois...') and individual composition ('Quand j'étais petit(e)')"
          ]
        },
        {
          name: 'Exprimer la simultanéité (Expressing Simultaneity)',
          learningOutcome: 'Describe two actions or states occurring at the same time using simultaneity expressions.',
          knowledge: [
            "Vocabulary/structures for simultaneity: en même temps, à la fois, au même moment où, pendant que, en + gérondif",
            "Mime game ('la boîte de verbes') where a learner mimes two verbs and classmates name the simultaneous actions",
            'Group poem-writing activity built around expressions of simultaneity'
          ]
        },
        {
          name: 'Rapporter des conversations/ordres (Reported Speech)',
          learningOutcome: 'Report facts and conversations using indirect speech, correctly shifting tense and time expressions.',
          knowledge: [
            "Tense shifts for indirect discourse: présent → imparfait, futur → conditionnel présent, passé composé → plus-que-parfait",
            "Adverbial time shifts: aujourd'hui → ce jour-là, demain → le lendemain, ce mois → ce mois-là",
            "Listening comprehension followed by 'reportage' activity: reporting news items as read in a newspaper or seen on TV",
            "Game 'Qu'est-ce qu'il/elle a dit?' — one learner whispers to another, the class asks what was said",
            'Role-play: reporting to friends what someone who does not speak French has said'
          ]
        },
        {
          name: "Rapporter des conversations/ordres — suite (Reported Speech, continued)",
          learningOutcome: 'Continue practicing reported speech and indirect discourse through listening comprehension and role-play.',
          knowledge: [
            'Continued practice reporting facts and news heard in conversation or read in the newspaper',
            "Group 'reportage' activity and the 'Qu'est-ce qu'il/elle a dit?' whisper game",
            "Role-play: reporting a French-speaking friend's statement to other friends"
          ]
        },
        {
          name: "Exprimer l'antériorité (Expressing Anteriority)",
          learningOutcome: 'Sequence two past actions or states using anteriority expressions and write an informal letter using them.',
          knowledge: [
            "Anteriority vocabulary/structures: avant, dès que, après, avant de + infinitif, quand + passé composé",
            "e.g. 'Quand il a fini de parler, il est parti'; 'Dès qu'il a fini de manger, il a commencé à faire son devoir'",
            'Verb conjugation practice in présent, passé composé and plus-que-parfait',
            "Group activity: drafting an informal letter that uses anteriority expressions and presenting it to the class"
          ]
        },
        {
          name: 'Rédaction — écrire une lettre informelle (Writing an Informal Letter)',
          learningOutcome: 'Write a properly structured informal letter, correctly using its component parts and closing conventions.',
          knowledge: [
            'Identifying the parts of an informal letter',
            'Appropriate closing conventions (conclusions) for an informal letter',
            'Correspondence project: pairing with a classmate to exchange written letters and replies'
          ]
        },

        // ---- Second Term ----
        {
          name: "L'épreuve et l'oral — révision et compréhension orale (Term Review and Oral Comprehension)",
          learningOutcome: 'Answer first-term-style examination questions and oral comprehension texts to reinforce listening skills.',
          knowledge: [
            "Group work, role-play and individual review of the type of questions asked in the first-term exam",
            'Answering questions based on an oral comprehension text, as directed by the teacher'
          ]
        },
        {
          name: 'Demander et donner une opinion (Requesting and Giving Opinions)',
          learningOutcome: 'Ask for and express personal opinions on a topic using appropriate French expressions.',
          knowledge: [
            "Requesting an opinion: 'Qu'est-ce que tu en penses?', 'D'après toi, c'est une bonne idée?', 'Qu'en pensez-vous?'",
            "Giving an opinion: 'À mon avis', 'J'ai l'impression que...', 'Je trouve que...', 'Personnellement...', 'D'après moi...'",
            "Debate activity: 'L'enseignement à distance, faut-il l'encourager?'",
            'Role-play: friends discussing a new film they have seen at the cinema'
          ]
        },
        {
          name: 'Se plaindre (Complaining)',
          learningOutcome: 'Express complaints, annoyance and irritation appropriately in spoken French.',
          knowledge: [
            "Expressions: 'C'est insupportable', 'Ça m'énerve', 'J'en ai assez/marre', 'C'est révoltant', 'Je suis désespéré(e)'",
            "Role-play: a tenants' meeting where residents complain to the building owner about a disruptive new neighbour",
            "Personal scenario: complaining about a sibling's behaviour and imagining the dialogue"
          ]
        },
        {
          name: 'Se plaindre — la rédaction (Complaint Writing)',
          learningOutcome: 'Write a formal letter or email of complaint about a situation, product or person.',
          knowledge: [
            'Writing a formal complaint email, e.g. to an electricity company disputing an inflated bill',
            'Writing a formal letter of complaint about a new class prefect',
            'Using memory cards (carte mémoire) and authentic documents as writing supports'
          ]
        },
        {
          name: "Exprimer l'hésitation et le doute (Expressing Hesitation and Doubt)",
          learningOutcome: 'Express uncertainty and doubt in French, including an introduction to the subjunctive mood.',
          knowledge: [
            "Expressions of doubt: 'Je ne suis pas certain(e) de...', 'Je ne suis pas sûr(e) que...', 'Je doute que...', 'Je ne crois pas que...'",
            'Grammar: introduction to le subjonctif',
            'Scenario/role-play: deciding whether to join a class trip to a francophone country, expressing hesitation and doubt'
          ]
        },
        {
          name: "Exprimer la peur et l'inquiétude (Expressing Fear and Anxiety)",
          learningOutcome: 'Verbalize fear, anxiety and physiological reactions using appropriate French expressions.',
          knowledge: [
            "Expressions: 'J'ai peur', 'Je suis effrayé(e)', 'Je suis terrorisé(e) par...', 'Je crains pour...', 'J'en frissonne'",
            'Scenario: reacting to seeing a snake in the classroom and relating the reaction to a classmate',
            'Role-play: comforting a friend who is afraid to go home after failing a final exam'
          ]
        },
        {
          name: 'Exprimer la confiance (Expressing Confidence and Trust)',
          learningOutcome: 'Express confidence and trust in someone or something using appropriate French expressions.',
          knowledge: [
            "Expressions: 'Avoir confiance en...', 'Je fais confiance à...', 'Fais-moi confiance', 'Être digne de confiance'",
            'Role-play: class prefect election, with students expressing confidence in their favourite candidates'
          ]
        },
        {
          name: 'La rédaction — structure de la composition (Composition Writing)',
          learningOutcome: 'Write a structured composition with an introduction, body and conclusion, and write an informal letter.',
          knowledge: [
            "Parts of a composition: l'introduction, le corps, la conclusion",
            'Grammar focus: adjectives and adverbs',
            "Writing prompts: 'Mon/Ma meilleur(e) ami(e)', 'Mon professeur de français', 'Mon quartier', 'Mon pays' (teacher's choice)",
            'Writing an informal letter inviting a friend to a birthday celebration'
          ]
        },

        // ---- Third Term ----
        {
          name: "L'épreuve et l'oral — révision et compréhension orale (Term Review and Oral Comprehension)",
          learningOutcome: 'Answer second-term-style examination questions and oral comprehension texts to reinforce listening skills.',
          knowledge: [
            "Group work, role-play and individual review of the type of questions asked in the second-term exam",
            'Answering questions based on an oral comprehension text'
          ]
        },
        {
          name: "Exprimer l'appréciation (Expressing Appreciation)",
          learningOutcome: 'Express positive and negative appreciation or judgment about people or things.',
          knowledge: [
            "Positive appreciation: 'Je l'apprécie beaucoup', 'C'est fascinant', 'C'est unique', 'C'est magnifique', 'C'est génial'",
            "Negative appreciation: 'C'est horrible', 'C'est détestable', 'Ça me laisse froid', 'Il est terrible/dangereux/paresseux'",
            'Role-play: exchanging gifts at the end of the school year and reacting to them',
            'Role-play: two friends shopping and appreciating a shirt in a ready-to-wear store'
          ]
        },
        {
          name: 'Exprimer la déception (Expressing Disappointment)',
          learningOutcome: 'Talk about disappointment and regret regarding events or situations.',
          knowledge: [
            "Expressions: 'C'est dommage', 'Je suis déçu(e)', 'Ça ne m'a pas plu', 'C'est vraiment décevant'",
            "Discussion prompt: 'Regrettez-vous beaucoup de choses? Lesquelles?'",
            'Role-play: forgetting to pick up a young cousin from school and facing an upset aunt'
          ]
        },
        {
          name: 'La rédaction — le métier (Career-Focused Composition Writing)',
          learningOutcome: 'Write a composition describing a career or profession one would like to pursue.',
          knowledge: [
            "Written composition prompt: 'Le métier que j'aimerais faire'",
            'PowerPoint-style presentation of different professions as a writing support',
            'Use of authentic documents to support vocabulary for describing careers'
          ]
        },
        {
          name: "Nuancer l'expression d'une opinion (Nuancing an Opinion)",
          learningOutcome: 'Express an opinion with caution and diplomacy, softening agreement or disagreement.',
          knowledge: [
            "Nuancing expressions: 'Je dirais que...', 'Vous avez raison mais...', 'Je ne dirais pas non', 'Pas exactement...', 'Si vous insistez...'",
            'Practicing cautious, diplomatic expression of one\'s attitude toward a stated fact',
            '(Source content for this week is brief — only the expressions list and general learning objective are given, with no further activity detail published.)'
          ]
        },
        {
          name: 'Rédaction (Extended Composition Writing)',
          learningOutcome: 'Produce an extended written composition applying the structures and vocabulary covered across the year.',
          knowledge: [
            'Continued practice of structured composition writing',
            'Authentic documents used as a writing support',
            '(Source content for this week is thin — it states only the general objective of composition writing, with no specific prompt or activity published.)'
          ]
        }
      ]
    }
  ]
};
