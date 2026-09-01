// SS2 Arabic — First, Second and Third Term
// Source: SchemeofWork.com "Arabic Language Scheme of Work for SS2 Federal"
// URL: https://schemeofwork.com/arabic-language-scheme-of-work-for-ss2-federal/
// Source page does not explicitly claim 2025 NESRI reform compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (المراجعة العامة / General review, الإمتحانات / Examinations, والتصحيح /
// Correction — the final 2-3 weeks per term) are excluded.
// As with SS1 Arabic, the raw fetched HTML presents each term as a single 3-column table row
// (content / topic / week-ordinal), with topics separated by runs of &nbsp; rather than clean
// per-row markup. Two topic slots merged two distinct weeks' topic names with no separator at
// all (Second Term week 4-5 "التصغير الحال" = diminutive-form week + Hal/circumstantial-case
// week sharing one set of grammar examples; Third Term week 2-3 "الترجمة ... وبالعكس الإنشاء" =
// a translation week immediately followed by a composition week) — these were split back into
// their two real per-week topics by cross-checking the week-ordinal column and the content
// column, per the shared-objective-week guidance. The Arabic script text below was verified
// against the raw fetched HTML (not an AI-summarized fetch) to confirm it renders as genuine,
// correctly encoded Arabic — no mojibake or placeholder characters were found. Topic names keep
// the original Arabic terms with an English gloss.

export const curriculumData = {
  subject: 'Arabic',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Arabic',
      topics: [
        // First Term
        {
          name: 'التعليم وأهميته (Education and Its Importance)',
          learningOutcome: 'Define education and the school, and explain the importance of diligence and hard work in seeking knowledge.',
          knowledge: [
            'Definitions of education (التعليم) and the school/place of learning (المدرسة)',
            'The benefits of education and the importance of diligence and hard work (الجد والإجتهاد) in the pursuit of knowledge'
          ]
        },
        {
          name: 'الزراعـة (Agriculture)',
          learningOutcome: 'Give a complete/integrated account of agriculture, covering its definition, land preparation, seed selection, and harvesting.',
          knowledge: [
            'Definition of agriculture and how to prepare the land, and selecting a good/suitable seed for planting',
            'How to harvest, and the benefits of agriculture'
          ]
        },
        {
          name: 'القرية وحياة المدن (Village and City Life)',
          learningOutcome: 'Compare village and city life, describing the characteristics, trades, and institutions found in each.',
          knowledge: [
            'Definitions of the village and the city, and the characteristics and trades/occupations found in the village and city',
            'Definition of civic/urban life, with examples, its characteristics, and the institutions, companies, trades, and occupations found in the city'
          ]
        },
        {
          name: 'رعاية صحة البدن (Care of Bodily Health)',
          learningOutcome: 'Explain how to safeguard bodily health, including the role of good nutrition and cleanliness/purity.',
          knowledge: [
            'Definition of the topic: how to take care of bodily health',
            'The benefits of good food for bodily health, and the meaning, importance, and benefits of purity/cleanliness (الطهارة)'
          ]
        },
        {
          name: 'الترجمة الإنجليزية إلى العربية (Translation: English to Arabic)',
          learningOutcome: 'Translate short English paragraphs and stories into Arabic.',
          knowledge: [
            'Writing some paragraphs and stories in English, then translating them into Arabic'
          ]
        },
        {
          name: 'الإنشاء (Composition)',
          learningOutcome: 'Organize vocabulary, ideas, and style to compose short pieces on naming a newborn child and writing personal/family letters.',
          knowledge: [
            'Composition topic 1: the naming ceremony of a newborn child (تسمية المولود)',
            'Composition topic 2: personal/family letters (الرسائل الأهـلية)'
          ]
        },
        {
          name: 'المسرحية (The Play/Drama)',
          learningOutcome: 'Summarize a play, identify its characters, and extract its key/important points.',
          knowledge: [
            'A brief summary/narration of the play (حكاية المسرحية بالإيجاز) and its characters (شخصيات المسرحية)',
            'Writing out the important points from the play (كتابة النقاط الهامة من المسرحية)'
          ]
        },
        {
          name: 'خطب الشيخ آدم عبد الله الألورى (Sermons of Sheikh Adam Abdullah Al-Ilory)',
          learningOutcome: 'Extract and explain difficult vocabulary from one of Sheikh Adam Al-Ilory\'s sermons, and read an excerpt from it.',
          knowledge: [
            'Extracting difficult words from the sermon (الخطبة) and explaining them',
            'Reading a passage from a sermon by Sheikh Adam (خطبة الشيخ آدم)'
          ]
        },
        {
          name: 'التمييز (Tamyiz / Specification)',
          learningOutcome: 'Define Tamyiz (the specifying/discriminative accusative), identify its types, and state its grammatical ruling using selected texts and example sentences.',
          knowledge: [
            'Selected texts for identifying Tamyiz (التمييز), its types (أقسامه), and its grammatical ruling (حكمه)',
            'Definition of Tamyiz, with several example sentences (عدة جمل عن التمييز)'
          ]
        },
        {
          name: 'الأنشودة (Short Song)',
          learningOutcome: "Recite and understand a short, suitable Arabic song appropriate to the learner's level.",
          knowledge: [
            'A short, suitable Arabic song/poem (أنشودة عربية قصيرة مناسبة)'
          ]
        },
        {
          name: 'العلاقات الدولية (International Relations)',
          learningOutcome: 'Define international relations and describe the diplomatic relations among the world\'s more than 150 countries.',
          knowledge: [
            'A suitable passage on international relations, including its definition (التعريف بالدولية)',
            'The existence of more than 150 countries in the world, and the diplomatic relations (العلاقات الدبلوماسية) between them'
          ]
        },

        // Second Term
        {
          name: 'العقيقة (Aqiqah)',
          learningOutcome: 'Read and comprehend a passage on the Aqiqah (newborn naming/sacrifice ceremony), extracting its key points and explaining unfamiliar vocabulary.',
          knowledge: [
            'A suitable passage on the Aqiqah (العقيقة)',
            'Extracting the important points from the passage, and extracting and explaining its unfamiliar/difficult vocabulary'
          ]
        },
        {
          name: 'القراءة والفهم: مدينة أبوجا العاصمة الجديدة للجمهورية (Reading Comprehension: Abuja, the New Federal Capital)',
          learningOutcome: 'Read and comprehend a passage describing Abuja as the new federal capital, covering its geographic location, buildings, and amenities.',
          knowledge: [
            'A suitable passage giving a complete/integrated picture of the city of Abuja: its geographic location, buildings, and paved roads',
            'Further details: offices, markets, parks, and other impressive modern structures and ministries in Abuja'
          ]
        },
        {
          name: 'آيات مختارة تحث على مكارم الأخلاق (Selected Verses Urging Noble Character)',
          learningOutcome: 'Read and interpret selected Qur\'anic verses urging noble character, including honoring parents, neighbors\' rights, and honesty.',
          knowledge: [
            'Selected verses containing and pronouncing on good character: honoring parents and not disobeying them',
            'The rights of the neighbor (حقوق الجار), and honesty and acting upon it (الصدق والعمل به)'
          ]
        },
        {
          name: 'التصغير (Diminutive Form)',
          learningOutcome: 'Form and identify the diminutive (tasghir) form of Arabic nouns using worked examples. This week shares its set of example sentences with the following week (الحال) under the source\'s combined topic "التصغير الحال".',
          knowledge: [
            'Diminutive forms (صيغ التصغير) demonstrated through several worked examples'
          ]
        },
        {
          name: 'الحال (The Circumstantial Accusative / Hal)',
          learningOutcome: 'Identify the Hal (circumstantial accusative) by underlining it within the same set of example sentences introduced in the previous week under the source\'s combined topic "التصغير الحال".',
          knowledge: [
            'Identifying and underlining the Hal (الحال) in the example sentences carried over from the diminutive-form lesson'
          ]
        },
        {
          name: 'الزواج (Marriage)',
          learningOutcome: 'Describe the pillars of a valid Islamic marriage, including guardianship, witnessing, dower, and the offer and acceptance.',
          knowledge: [
            'A suitable passage on marriage, mentioning its pillars (أركان الزواج): the guardian (الولى) and two just witnesses (شاهدى عدل)',
            'The dower (الصداقة) and the marriage formula: offer and acceptance (الإيجاب والقبول)'
          ]
        },
        {
          name: 'الترجمة العربية إلى الإنجليزية (Translation: Arabic to English)',
          learningOutcome: 'Translate a selected Arabic text drawn from bulletins, newspapers, or storybooks into English.',
          knowledge: [
            'A selected text taken from bulletins, newspapers, or storybooks (نشرات أو الجرائد أو كتب قصصية), translated into English'
          ]
        },
        {
          name: 'تصريف الفعل الصحيح (Conjugation of the Sound Verb)',
          learningOutcome: 'Define the sound verb and conjugate its sound, hamzated, and doubled forms with examples.',
          knowledge: [
            'Definition of the sound verb (الفعل الصحيح) with examples such as كتب (he wrote), قرأ (he read), لعب (he played), عـد (he counted)',
            'Conjugating the sound verb\'s sub-types with examples: sound (السالم), hamzated (المهموز), and doubled (المضاعف)'
          ]
        },
        {
          name: 'من شعر الدكتور عيسى ألبى أبوبكر (From the Poetry of Dr. Isa Alkali Abubakar)',
          learningOutcome: 'Study a brief biography of Dr. Isa Alkali Abubakar and interpret selected verses of his poetry addressed to poets and describing the Qur\'an.',
          knowledge: [
            'A selected text on the life history of Dr. Isa Alkali Abubakar and some verses of his poetry',
            'Verses addressed "To the Poets" (إلى الشعراء) and verses describing the Qur\'an (وصف القرآن)'
          ]
        },
        {
          name: 'من شعر الشيخ عبد الله بن فودى: تزيين الورقاء (From the Poetry of Sheikh Abdullah ibn Fodio: Tazyin al-Waraqat)',
          learningOutcome: 'Study a brief biography of Sheikh Abdullah ibn Fodio and recite verses from his elegy for the Prophet.',
          knowledge: [
            'A selected text on the life history of Sheikh Abdullah ibn Fodio, focused on his elegy for the Prophet (رثاء المصطفى)',
            'Selected verses of the elegy poem, e.g. "عفت عندى منازل أهل كبير # وحل على معارفها نكير" and subsequent lines'
          ]
        },

        // Third Term
        {
          name: 'الحكومة وواجبها نحو الفرد (Government and Its Duty to the Individual)',
          learningOutcome: 'Give a complete/integrated account of government and its responsibilities toward the individual citizen.',
          knowledge: [
            'A suitable essay giving a complete/integrated idea about government and its duty toward the individual'
          ]
        },
        {
          name: 'الترجمة من العربية إلى الإنجليزية وبالعكس (Translation: Arabic to English and Vice Versa)',
          learningOutcome: 'Translate a selected Arabic passage into English and translate short English texts back into Arabic.',
          knowledge: [
            'An Arabic passage for translation into English and vice versa (قطعة عربية للترجمة إلى الإنجليزية وبالعكس)'
          ]
        },
        {
          name: 'الإنشاء (Composition)',
          learningOutcome: 'Compose short essays on a range of everyday and social topics using appropriate vocabulary and style.',
          knowledge: [
            'Essay topics: neighbors\' rights (حقوق الجيران), self-reliance (الإعتماد على النفس), the benefits of education (فوائد التعليم)',
            'Further essay topics: a football match (مباراة كرة القدم), social responsibility (المسؤلية الإجتماعية), a wedding celebration (حفلة الزواج), and love of goodness (حب الخير وأهله)'
          ]
        },
        {
          name: 'العدد (Numbers)',
          learningOutcome: 'Apply the grammatical rules governing Arabic cardinal numbers 3-10 and compound numbers, including their gender-reversal agreement and case endings.',
          knowledge: [
            'Grammar rule: numbers 3 to 10 are masculine in form when counting feminine nouns, and feminine in form when counting masculine nouns',
            'Compound numbers are built with a fixed fatha ending, except for 12 (إثنا عشر), where the first part follows dual declension and the second part is fixed on the fatha'
          ]
        },
        {
          name: 'المنادى (The Vocative)',
          learningOutcome: 'Identify and correctly construct vocative expressions in Arabic using selected example sentences.',
          knowledge: [
            'Example vocative sentences: يا خليل! تعال هنا (O Khalil! Come here.), يا صالح الدين! صل بنا (O Salahuddeen! Lead us in prayer.)',
            'Further example: يا مسافر! إتق الله (O traveler! Fear Allah.)'
          ]
        },
        {
          name: 'من شعر القاضى عمر إبراهيم (From the Poetry of Judge Umar Ibrahim)',
          learningOutcome: 'Study a brief biography of Judge Umar Ibrahim and interpret selected verses of his poetry on love/friendship.',
          knowledge: [
            'A selected text on the life history of Judge Umar Ibrahim, including verses of poetry on love/companionship (أبيات شعر الأحبـة)'
          ]
        },
        {
          name: 'المفعول المطلق (The Absolute/Cognate Object)',
          learningOutcome: 'Define the absolute object (maf\'ul mutlaq) and identify it in Arabic sentences by its grammatical position.',
          knowledge: [
            'Example sentences featuring the absolute object, e.g. لعب حسن لعبا (Hassan played a play), يشرب الطفل اللبن شربا (the child drinks milk, a drinking)',
            'Grammar rule: the absolute object is an accusative noun matching the verb in form, coming after the verb to emphasize it or clarify its type'
          ]
        },
        {
          name: 'المفعول به (The Direct Object)',
          learningOutcome: 'Identify the direct object (maf\'ul bih) and its grammatical position in Arabic sentences using selected examples.',
          knowledge: [
            'Example sentences featuring the direct object, e.g. شـد التلمذ الحبل (the pupil pulled the rope), طوت البنت الثوب (the girl folded the garment)',
            'Further examples: أكل الذئب الخروف (the wolf ate the lamb), حاز السابق جائزة (the winner obtained a prize), يصيد الثعلب دجاجة (the fox hunts a hen)'
          ]
        },
        {
          name: 'الأنشودة (The Song/Hymn)',
          learningOutcome: 'Recite and understand a devotional Arabic song affirming the eternity of Allah and invoking blessings on the Prophet.',
          knowledge: [
            'Selected hymn text: "كل شيئ فانى # إلا الله باقى" (Everything perishes, except Allah, Who remains)',
            'Further lines invoking blessings on the Prophet: "صلوا على محمد # الصلاة والسلام على رسول الله" (Send blessings upon Muhammad, peace and blessings upon the Messenger of Allah)'
          ]
        },
        {
          name: 'النظافة من الإيمان (Cleanliness Is Part of Faith)',
          learningOutcome: 'Use vocabulary related to personal and environmental cleanliness and basic health/hygiene practices.',
          knowledge: [
            'Vocabulary on cleanliness of the environment and the body: bathing (إستحمام), trimming the nails (تقليم الأظافر), flies (الذباب)',
            'Further vocabulary: disease-carrying pests, the water cycle (دورة المياه), dirt, health, prevention (الوقاية), and treatment (العلاج)'
          ]
        },
        {
          name: 'الإتحاد الإفريقى (The African Union)',
          learningOutcome: 'Use vocabulary related to the African Union and international/political cooperation among African states.',
          knowledge: [
            'Vocabulary on the African Union: independence (إستقلال), states (دول), republics (جمهوريات), cooperation and mutual understanding (التعاون والتفاهم)',
            'Further vocabulary: political relations (علاقات سياسية), security (الأمن), peace (سلام), agreements (إتفاقيات), and negotiations (مفاوضات)'
          ]
        }
      ]
    }
  ]
};
