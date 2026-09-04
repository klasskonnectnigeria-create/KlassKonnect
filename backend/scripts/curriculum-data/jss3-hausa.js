// JSS3 Hausa — First, Second, and Third Term
// Source: SchemeofWork.com "Hausa Language Scheme of Work for JSS 3 Federal (All Terms)"
// URL: https://schemeofwork.com/hausa-language-scheme-of-work-for-jss-3-federal/
// Source page carries no NESRI 2025 reform claim, so curriculumVersion is 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Bitar aikin baya/maimaitawa "revision" and Jarabawa "examination"
// at the end of each term) are excluded below.
// The source page carries two parallel tracks for JSS3 — Hausa Language L1 (first
// language / native-speaker track) and L2 (second language track) — each with its own
// full three-term scheme. This file uses the L1 track, listed first and primary on the
// source page, matching the same convention already established in jss1-hausa.js and
// jss2-hausa.js; the L2 track was not merged in to avoid conflating two distinct syllabi
// under one theme.
// Topic names and knowledge points are translated into readable English from the
// source's Hausa MAKO/BATU (week/topic) lines under the HARSHE (Language), ADABI
// (Literature), and AL'ADA (Culture) headings, with the original Hausa terms retained
// parenthetically for identification — no content is invented; every point traces to a
// specific line on the source page. A small number of proper-noun/agency names in Second
// Term Week 9's source line were faint/ambiguous in the scraped text; only the clearly
// legible items (security/consumer-rights terms) are transcribed.

export const curriculumData = {
  subject: 'Hausa',
  grade: 'JSS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS3 Hausa (First Term)',
      topics: [
        {
          name: 'Harshe: Gina Jimla mai Amfani da Salon Ba-kai-tsaye (Constructing Sentences in Narrative/Reported Style)',
          learningOutcome: 'Construct grammatically correct Hausa sentences in a narrative/reported style, following the example sentence given.',
          knowledge: [
            'Sentence construction in narrative/reported style (jimla mai harshen ba-kai-tsaye)',
            "Example sentence: 'yaron nan baki gare shi, ta ci wake, yaron ya koma'"
          ]
        },
        {
          name: 'Harshe: Takaitaccen Bayani Akan Lokutan Hausa (Brief Explanation of Hausa Tenses)',
          learningOutcome: 'Identify and use the three main Hausa tenses — future, present, and past.',
          knowledge: [
            'Future tense (lokaci mai zuwa)',
            'Present tense (lokacin yanzu)',
            'Past tense (lokaci wanda ya gabata)'
          ]
        },
        {
          name: "Adabi: Nazarin Saukakan Rubutattun WaƘoƘi Masu Ɗango Biyu-Biyu Zuwa Uku-Uku (Analysis of Simple Written Poems with Two-to-Three-Line Stanzas)",
          learningOutcome: 'Analyze simple written Hausa poems composed of two-line to three-line stanzas.',
          knowledge: [
            'Simple written poems with two-line stanzas (waƙoƙi masu ɗango biyu-biyu)',
            'Simple written poems with three-line stanzas (waƙoƙi masu ɗango uku-uku)'
          ]
        },
        {
          name: 'Adabi: Gabatar da Bayani Akan Rubutun Zube (Introduction to Prose Writing)',
          learningOutcome: 'Give an introductory explanation of prose (rubutun zube) as a literary form.',
          knowledge: [
            'Introduction to prose writing (rubutun zube)'
          ]
        },
        {
          name: "Al'ada: Ma'anar Tsaro da Nau'o'ina (Meaning and Types of Security)",
          learningOutcome: 'Explain the meaning of security and identify its types.',
          knowledge: [
            "Meaning of security (ma'anar tsaro)",
            'Personal security (tsaron kai)',
            'Home security (tsaron gida)',
            'Community/town security (tsaron gari)',
            'National security (tsaron ƙasa)'
          ]
        },
        {
          name: "Al'ada: Ma'anar Sana'a da Ire-irenta (Meaning and Types of Trades/Crafts)",
          learningOutcome: 'Explain the meaning of trades/crafts and identify traditional Hausa trade types.',
          knowledge: [
            "Meaning of trade/craft (ma'anar sana'a)",
            'Farming (noma)',
            'Animal husbandry (ƙiwo)',
            'Dyeing (rini)',
            'Blacksmithing (ƙira)',
            'Weaving (saƙa)',
            'Tanning (dukanci)',
            'Leatherworking (jima)',
            'Tailoring (ɗinki)',
            'Building/construction (gini)'
          ]
        },
        {
          name: "Harshe: Amfani da Babban Baki Ko Ƙarami a Inda Ya Dace (Correct Use of Capital and Lowercase Letters)",
          learningOutcome: 'Apply capitalization rules correctly in Hausa writing.',
          knowledge: [
            'Use of capital letters where appropriate',
            'Use of lowercase letters where appropriate'
          ]
        },
        {
          name: "Adabi: Ci Gaba da Nazari Akan Zaɓaɓɓun Rubutattun WaƘoƘi (Continued Analysis of Selected Written Poems)",
          learningOutcome: 'Continue analyzing selected written poems, paying attention to form, style, and theme.',
          knowledge: [
            'Continued analysis of selected written poems',
            'Form (zubi)',
            'Style (salo)',
            'Theme (jigo)'
          ]
        },
        {
          name: 'Al\'ada: Bayani Akan Hukumomin Tsaro da Irin Ayyukansu (Explanation of Security Agencies and Their Functions)',
          learningOutcome: "Identify Nigeria's major security agencies and describe their respective functions.",
          knowledge: [
            'Explanation of security agencies and their roles',
            "Police ('yan sanda)",
            'Armed forces — army, air force, navy (soja: sama, ƙasa, ruwa)',
            'Customs (kwastan)',
            "Immigration officers (jami'an kula da shiga da fice)",
            'Other internal security services'
          ]
        },
        {
          name: "Al'ada: Tsokaci Akan Muhimmancin Sana'a (Commentary on the Importance of Trades/Crafts)",
          learningOutcome: 'Explain the importance of trades/crafts to individuals and society.',
          knowledge: [
            'Self-reliance (dogaro da kai)',
            'Preserving dignity/self-respect (kare mutunci)',
            'Earning a livelihood (samun abin masarufi)',
            'Economic development (haɓaka tattalin arziki)'
          ]
        },
        {
          name: 'Adabi: Ci Gaba da Nazari Akan Rubutun Zube (Continued Analysis of Prose)',
          learningOutcome: 'Continue analyzing prose narratives, focusing on their form, structure, and theme.',
          knowledge: [
            'Continued analysis of prose (rubutun zube)',
            'Form and structure of the narrative (zubi da tsarin labari)',
            'Theme (jigo)'
          ]
        },
        {
          name: "Harshe: Haɗawa Ko Raba Ƙalmomi Inda Ya Dace (Compounding or Segmenting Words Where Appropriate)",
          learningOutcome: 'Apply the rules for joining or splitting Hausa words correctly, using the given examples.',
          knowledge: [
            'Word compounding and segmentation (haɗawa ko raba ƙalmomi)',
            'Examples: kodayaushe, ci gaba, barkonon-tsohuwa, matsattsaku, shasshaka'
          ]
        }
      ]
    },
    {
      name: 'JSS3 Hausa (Second Term)',
      topics: [
        {
          name: "Harshe: Ma'ana da Nau'o'in Fassara (Meaning and Types of Translation)",
          learningOutcome: 'Explain the meaning of translation and identify its types.',
          knowledge: [
            "Meaning of translation (ma'anar fassara)",
            'Oral translation (fassara ta baki)',
            'Written translation (fassara ta rubutu)'
          ]
        },
        {
          name: "Adabi: Nazari da Bayanin Zaɓaɓɓun Rubutattun Wasan ƘwaiƘwayo (Analysis of Selected Written Dramas)",
          learningOutcome: 'Analyze and explain selected written Hausa dramas.',
          knowledge: [
            'Analysis of selected written dramas (rubutattun wasan ƙwaikwayo)'
          ]
        },
        {
          name: "Adabi: Ma'anar Adabin Baka da Rukunoninsa (Meaning and Categories of Oral Literature)",
          learningOutcome: 'Explain the meaning of oral literature and identify its categories.',
          knowledge: [
            "Meaning of oral literature (ma'anar adabin baka)",
            'Oral poetry (waƙoƙin baka)',
            'Folktales (tatsuniyoyi)',
            'Traditional stories (labaran gargajiya)',
            'Storytelling sessions (zaurance)',
            'Proverbs (Karin Magana)',
            "Praise-singers' songs (waƙoƙin makaɗa)"
          ]
        },
        {
          name: "Al'ada: Ma'anar Kare-Saye da HaƘƘoƘin Kare Saye (Meaning of Consumer Protection and Consumer Rights)",
          learningOutcome: 'Explain the meaning of consumer protection and identify the rights of buyers/consumers.',
          knowledge: [
            "Meaning of consumer protection (ma'anar kare-saye)",
            'Right to have needs met (samun biyan buƙata)',
            'Right to protection from harm to health (rashin illa ga lafiya)',
            'Right to information (samun bayani)'
          ]
        },
        {
          name: "Al'ada: Nazari Akan Hanyoyin Haɓaka Tattalin Arziki na Zamani (Study of Modern Methods of Economic Development)",
          learningOutcome: 'Identify modern methods of economic development.',
          knowledge: [
            'Modern farming and animal husbandry (noma da kiwo na zamani)',
            'Food processing (sarrafa kayan abinci)'
          ]
        },
        {
          name: "Harshe: Cikakken Bayani Akan Rubutacciyar Fassara (Detailed Explanation of Written Translation)",
          learningOutcome: 'Give a detailed explanation of written translation, distinguishing free and literal translation.',
          knowledge: [
            'Free translation (fassara mai yanci)',
            'Literal translation (fassara mara yanci)'
          ]
        },
        {
          name: "Adabi: Ci Gaba da Nazari Akan Rubutaccen Wasan ƘwaiƘwayo (Continued Analysis of Written Drama)",
          learningOutcome: 'Continue analyzing written drama, focusing on its theme and style.',
          knowledge: [
            'Continued analysis of written drama',
            'Theme (jigo)',
            'Style of the play (salon wasa)'
          ]
        },
        {
          name: 'Adabi: Ci Gaba da Bayani Akan Rukunonin Adabin Baka (Continued Explanation of the Categories of Oral Literature)',
          learningOutcome: 'Continue explaining the categories of oral literature introduced earlier in the term.',
          knowledge: [
            'Continued explanation of the categories of oral literature (rukunonin adabin baka)'
          ]
        },
        {
          name: "Al'ada: Ci Gaba da Bayani Kan HaƘƘoƘin Kare Saye (Continued Explanation of Consumer Rights)",
          learningOutcome: 'Continue explaining consumer rights, including the right to choice, to complain, and to be informed.',
          knowledge: [
            'Right to choice (haƙƙin zaɓi)',
            'Right to complain (kai kuka)',
            'Right to be informed (ilimantar da kai)',
            'Right to lodge grievances (koke)'
          ]
        },
        {
          name: "Al'ada: Ci Gaba da Nazarin Hanyoyin Haɓaka Tattalin Arziki (Continued Study of Methods of Economic Development)",
          learningOutcome: 'Continue identifying methods of economic development, including modern handicrafts and modern trade.',
          knowledge: [
            "Modern handicrafts (sana'o'in hannu na zamani)",
            'Modern trade/commerce (cinikayyar zamani)'
          ]
        }
      ]
    },
    {
      name: 'JSS3 Hausa (Third Term)',
      topics: [
        {
          name: "Adabi: Ma'anar Rubutaccen Adabi da Rukunoninsa (Meaning and Categories of Written Literature)",
          learningOutcome: 'Explain the meaning of written literature and identify its categories.',
          knowledge: [
            "Meaning of written literature (ma'anar rubutaccen adabi)",
            'Categories of written literature'
          ]
        },
        {
          name: "Al'ada: Ma'anar da Misalan Keta Haddi (Meaning and Examples of Social Vices/Offenses)",
          learningOutcome: 'Explain the meaning of social vices and identify examples affecting society.',
          knowledge: [
            "Meaning of social vices/offenses (ma'anar keta haddi)",
            'Kidnapping (satar mutane)',
            'Human trafficking (safarar mutane)',
            'Child abuse (azabtar da yara)',
            'Violence against women (gallazawa mata)'
          ]
        },
        {
          name: "Harshe: Bayani Kan Auna Fahimta da Nau'o'in Sa (Explanation of Comprehension and Its Types)",
          learningOutcome: 'Explain comprehension exercises and identify topics they can cover, such as awareness, technology, and innovation.',
          knowledge: [
            'Meaning of comprehension assessment (auna fahimta)',
            'Awareness/sensitization passages (wayar da kai)',
            'Technology-themed passages (fasaha)',
            'Innovation-themed passages (ƙirƙire-ƙirƙire)'
          ]
        },
        {
          name: 'Adabi: Ci Gaba da Cikakken Bayani Akan Rukunonin Rubutaccen Adabi (Continued Detailed Explanation of the Categories of Written Literature)',
          learningOutcome: 'Give a detailed explanation of the categories of written literature: prose, poetry, and drama.',
          knowledge: [
            'Prose (rubutun zube)',
            'Written poetry (rubutacciyar waƙa)',
            'Drama (wasan ƙwaikwayo)'
          ]
        },
        {
          name: 'Harshe: Ci Gaba da Bayani Akan Auna Fahimta (Continued Explanation of Comprehension)',
          learningOutcome: 'Continue practicing comprehension exercises based on passages about computer technology and communication.',
          knowledge: [
            'Continued comprehension practice (auna fahimta)',
            'Computer technology (fasahar ƙwamfuta)',
            'Communication (sadarwa)'
          ]
        },
        {
          name: "Al'ada: Illolin Keta Haddin Al'umma (Effects of Social Vices on Society)",
          learningOutcome: 'Explain the negative effects of social vices on society.',
          knowledge: [
            'Prostitution (karuwanci)',
            'Rebelliousness/delinquency (ƙangarewa)',
            'Substance abuse (shaye-shaye)',
            'Insanity (hauka)'
          ]
        }
      ]
    }
  ]
};
