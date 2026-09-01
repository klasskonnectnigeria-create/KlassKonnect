// SS1 Arabic — First, Second and Third Term
// Source: SchemeofWork.com "Arabic Language Scheme of Work for SS1 Federal"
// URL: https://schemeofwork.com/arabic-language-scheme-of-work-for-ss1-federal/
// Source page does not explicitly claim 2025 NESRI reform compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (المراجعة / General review, الإمتحانات / Examinations, والتصحيح /
// Correction — one closing week per term) are excluded.
// The raw fetched HTML table cells for this page separate weeks with an inconsistent mix of
// plain spaces and &nbsp; runs rather than clean per-row markup, so week/topic/content
// boundaries were reconstructed by cross-checking the week-number cell (a clean sequential list
// of Arabic ordinals, 1..14 / 1..12 / 1..13 per term) against the topic and content cells. The
// Arabic script text below was verified against the raw fetched HTML (not the AI-summarized
// fetch) to confirm it renders as genuine, correctly encoded Arabic — no mojibake or
// placeholder characters were found. Topic names keep the original Arabic terms with an
// English gloss.

export const curriculumData = {
  subject: 'Arabic',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Arabic',
      topics: [
        {
          name: 'مدرستى (My School)',
          learningOutcome: 'Use basic Arabic vocabulary and phrases to describe the school environment and school life.',
          knowledge: [
            'Vocabulary and phrases giving an integrated/complete picture of school life (مدرستي)',
            'Common school-related nouns and simple descriptive sentences about the school'
          ]
        },
        {
          name: 'الكلمة والكلام والجملة المفيدة (The Word, Speech, and the Useful Sentence)',
          learningOutcome: 'Distinguish between a single word, connected speech, and a complete/meaningful sentence in Arabic, and identify examples of each.',
          knowledge: [
            'Suitable texts/passages containing examples of الكلمة (the word), الكلام (speech/utterance), and الجملة المفيدة (the useful/complete sentence)',
            'Basic units of Arabic grammar built up from word to speech to sentence'
          ]
        },
        {
          name: 'الأسرة السعيدة (The Happy Family)',
          learningOutcome: 'Read and comprehend passages describing family life and relationships, and use related vocabulary.',
          knowledge: [
            'Paragraphs giving a complete/integrated picture of the life of a happy family (الأسرة السعيدة)',
            'Family-related vocabulary and simple descriptive sentences'
          ]
        },
        {
          name: 'السوق (The Market)',
          learningOutcome: 'Use Arabic vocabulary related to the market and trade goods in context.',
          knowledge: [
            'A description/statement on trade goods and merchandise (بيان على بضائع التجارة)',
            'Market- and trade-related vocabulary'
          ]
        },
        {
          name: 'الجملة الإسمية والجملة الفعلية (Nominal and Verbal Sentences)',
          learningOutcome: 'Identify and distinguish between nominal sentences (starting with a noun) and verbal sentences (starting with a verb), recognizing their distinct grammatical characteristics.',
          knowledge: [
            'Texts selected from composition books containing examples of nominal (الجملة الإسمية) and verbal (الجملة الفعلية) sentences',
            'Distinguishing the grammatical characteristics of each sentence type'
          ]
        },
        {
          name: 'أسماء الإشارة (Demonstrative Pronouns)',
          learningOutcome: 'Correctly use masculine, feminine, singular, and dual demonstrative pronouns in Arabic sentences.',
          knowledge: [
            'Forms of demonstrative pronouns, e.g. هذا كتاب (this is a book, m.sg), هذه مسطرة (this is a ruler, f.sg)',
            'Dual demonstrative forms, e.g. هذان ولدان مهذبان (these are two well-mannered boys), هاتان بنتان مهذبتان (these are two well-mannered girls)'
          ]
        },
        {
          name: 'الأنشودة (Short Song)',
          learningOutcome: "Recite and understand a short Arabic song/poem appropriate to the learner's level and environment.",
          knowledge: [
            "A short song/poem (أنشودة قصيرة) suited to the learner's level and environment"
          ]
        },
        {
          name: 'أسماء الموصولة (Relative Pronouns)',
          learningOutcome: 'Identify and correctly use masculine, feminine, and plural relative pronouns (الذي، التي، الذين) in Arabic sentences.',
          knowledge: [
            'Forms of relative pronouns, e.g. سافر المدرس الذى كان عندنا (the teacher who was with us traveled)',
            'Further examples: سافرت البنت التى نجحت فى الإمتحان (the girl who passed the exam traveled), رجع المسلمون الذين سافروا إلى مكة المكرمة (the Muslims who traveled to Makkah returned)'
          ]
        },
        {
          name: 'المذكر (Masculine Nouns)',
          learningOutcome: 'Identify masculine nouns in Arabic sentences and recognize how they function grammatically in different sentence positions. This week shares its source examples with Week 10 (feminine nouns, and declined/indeclined forms) under the broader source topic "المذكر والمؤنث المعرب والمبنى".',
          knowledge: [
            'Texts including masculine nouns with examples, e.g. زارنى محمد وأكرمنى محمد (Muhammad visited me and honored me), مررت على محمد (I passed by Muhammad)',
            'Further examples with masculine reference: رأيت من أحبه, جاء من أحبه, نظرت إلى من أحبه (I saw/he came/I looked at the one I love)'
          ]
        },
        {
          name: 'المؤنث، المعرب والمبنى (Feminine Nouns, and Declined vs Indeclined Nouns)',
          learningOutcome: 'Identify feminine nouns and distinguish between declined (mu\'rab) and indeclined (mabni) nouns, continuing from the same set of example sentences introduced in Week 9 under the source\'s combined topic "المذكر والمؤنث المعرب والمبنى".',
          knowledge: [
            'Texts including feminine nouns alongside the masculine examples from Week 9',
            'Distinguishing declined (معرب) nouns, whose ending changes with grammatical case, from indeclined (مبني) nouns, whose ending stays fixed'
          ]
        },
        {
          name: 'التعريف بالأدب العربى وأنواعه (Introduction to Arabic Literature and Its Types)',
          learningOutcome: 'Define Arabic literature (adab) and identify its three main types: poetry, prose, and drama.',
          knowledge: [
            'الأدب هو التراث اللغوى والفكر والثقافى فى الأمة (Literature is the linguistic, intellectual, and cultural heritage of a nation)',
            'Three divisions of Arabic literature: ١- الشعر (poetry) ٢- النثر (prose) ٣- المسرحية (drama/play)'
          ]
        },
        {
          name: 'الترجمة أ: من العربية إلى الإنجليزية (Translation A: Arabic to English)',
          learningOutcome: 'Translate short Arabic phrases, passages, and sentences into English accurately.',
          knowledge: [
            'Translating Arabic phrases, passages, and sentences (عبارات وقطعات وجمل العربية) into English'
          ]
        },
        {
          name: 'الترجمة ب: من الإنجليزية إلى العربية (Translation B: English to Arabic)',
          learningOutcome: 'Translate short English sentences, phrases, and passages into Arabic accurately.',
          knowledge: [
            'Translating English sentences, phrases, and passages (الجمل وعبارات وقطعات) into Arabic'
          ]
        },

        // Second Term
        {
          name: 'المستشفى (The Hospital)',
          learningOutcome: 'Use Arabic vocabulary related to hospitals and medical care in context.',
          knowledge: [
            'A selected passage including hospital/medical vocabulary: طبيب (doctor), ممرضة (nurse), معمل (laboratory), دواء (medicine), حقنة (injection), حبوب (pills), جراحة (surgery), علاج (treatment)'
          ]
        },
        {
          name: 'رحلة إلى مصنع (A Visit to a Factory)',
          learningOutcome: 'Use Arabic vocabulary related to engineering and factory settings in context.',
          knowledge: [
            'A selected text including factory/engineering vocabulary: مهندس (engineer), آلات (machines), مواد كيماوية (chemical materials), كهرباء (electricity), محول (transformer), مكتبة (library)'
          ]
        },
        {
          name: 'الترجمة: من العربية إلى الإنجليزية (Translation: Arabic to English)',
          learningOutcome: 'Translate Arabic phrases, paragraphs, and sentences into English.',
          knowledge: [
            'Translating Arabic phrases, paragraphs, or sentences (عبارة، وفقرات، أو الجمل العربية) into English'
          ]
        },
        {
          name: 'الإنشاء (Composition)',
          learningOutcome: 'Plan and write a short Arabic composition on a given everyday topic using appropriate vocabulary and style.',
          knowledge: [
            'Vocabulary, ideas, and style for composition writing on topics such as: أ- الإعتناء بالصحة (taking care of health), ب- فوائد النار ومضارها (the benefits and harms of fire), ج- أحب الطعام (my favorite food), among others'
          ]
        },
        {
          name: 'أحوال الإعراب: الرفع والنصب والجر والجزم (States of Grammatical Case: Nominative, Accusative, Genitive, Jussive)',
          learningOutcome: "Identify the grammatical case (i'rab) of a noun in a sentence based on its syntactic function.",
          knowledge: [
            'Model sentences showing case states of the noun: جاء رجل (a man came — nominative), ضرب المعلم رجلا (the teacher struck a man — accusative), مـر التاجر بزيد (the merchant passed by Zayd — genitive)'
          ]
        },
        {
          name: 'فضائل الصدق (The Virtues of Honesty)',
          learningOutcome: 'Read and discuss an Arabic text on the virtues of honesty, trustworthiness, and keeping promises.',
          knowledge: [
            'A selected text including words and phrases on noble character: الصدق (honesty), الأمانة (trustworthiness), الإخلاص (sincerity), الوفاء بالعهد (keeping one\'s word)'
          ]
        },
        {
          name: 'الترجمة: من الإنجليزية إلى العربية (Translation: English to Arabic)',
          learningOutcome: 'Translate English sentences, phrases, paragraphs, and advertisements into Arabic.',
          knowledge: [
            'Translation from English into Arabic of sentences, phrases, paragraphs, or advertisements written in English'
          ]
        },
        {
          name: 'جمع المذكر السالم وجمع المؤنث السالم (The Sound Masculine Plural and Sound Feminine Plural)',
          learningOutcome: 'Form the sound masculine plural and sound feminine plural of regular Arabic nouns.',
          knowledge: [
            'Sound masculine plural example: مسلم (Muslim, m.sg) = مسلمون / مسلمين (Muslims, m.pl)',
            'Sound feminine plural example: مسلمة (Muslim, f.sg) = مسلمات (Muslims, f.pl)'
          ]
        },
        {
          name: 'جمع التكسير (The Broken Plural)',
          learningOutcome: 'Recognize and form common broken plural patterns of Arabic nouns.',
          knowledge: [
            'Broken plural examples: كتاب = كتب (book = books), قلم = أقلام (pen = pens), جملة = جمل (sentence = sentences), ولد = أولاد (boy = boys)'
          ]
        },
        {
          name: 'إملاء (Dictation)',
          learningOutcome: 'Accurately write Arabic sentences, phrases, and short texts from dictation.',
          knowledge: [
            'Sentences, phrases, paragraphs, advertisements, or bulletins written in Arabic, used for dictation practice'
          ]
        },
        {
          name: 'دراسة الشعر العربى الكلاسيكى (Study of Classical Arabic Poetry)',
          learningOutcome: "Appreciate classical Arabic poetry by studying the lives and works of Al-Khansa and Hassan ibn Thabit, and recite a devotional song, combining the three source sub-topics for this week: elegy, ode, and hymn.",
          knowledge: [
            'أ- A brief biography of Al-Khansa bint Amr and examples from her elegies, including her elegy for her brother Sakhr (رثاء صخر من مراثى الخنساء)',
            'ب- A brief biography of Hassan ibn Thabit and verses from his poem on the Conquest of Makkah (من قصيدة فتح مكة لحسان بن ثابت)',
            'ج- A devotional song/hymn (أنشودة) with verses in praise of and supplication to Allah, e.g. "مولانا مولانا مولانا # إياك نعبد"'
          ]
        },

        // Third Term
        {
          name: 'الصدق الوفى (True and Faithful Honesty)',
          learningOutcome: 'Read and discuss Arabic texts on the value of true and faithful honesty, supported by a related short song.',
          knowledge: [
            'Words, sentences, and paragraphs giving a complete idea about true and faithful honesty (الصدق الوفى)',
            'A short song suitable for students (أنشودة قصيرة مناسبة للطلاب) reinforcing the theme'
          ]
        },
        {
          name: 'الإنشاء (Composition)',
          learningOutcome: 'Write short Arabic compositions on the journey, the harms of lying, one\'s homeland Nigeria, and the value of unity.',
          knowledge: [
            'Vocabulary, ideas, and style for composing essays on: ١- الرحلة ووسائلها (the journey and its means), ٢- مضار الكذب (the harms of lying)',
            'Further essay topics: ٣- وطنى نيجيريا (my homeland Nigeria), ٤- الإتحاد قوة (unity is strength)'
          ]
        },
        {
          name: 'الترجمة: من العربية إلى الإنجليزية (Translation: Arabic to English)',
          learningOutcome: 'Translate Arabic sentences, paragraphs, and advertisements into English.',
          knowledge: [
            'Translating Arabic writings — sentences, paragraphs, or advertisements — into English'
          ]
        },
        {
          name: 'الإملاء: الإضافة (Dictation on the Idafa / Possessive Construction)',
          learningOutcome: 'Correctly write, from dictation, Arabic sentences containing the Idafa (possessive/genitive) construction.',
          knowledge: [
            'Several sentences containing the Idafa (الإضافة) construction, taken from the prescribed textbook, used for dictation'
          ]
        },
        {
          name: 'مـدح سيف الدولة (Praise Poem: Al-Mutanabbi\'s Ode to Sayf al-Dawla)',
          learningOutcome: 'Read and appreciate excerpts from Al-Mutanabbi\'s classical praise poem (madih) for Sayf al-Dawla.',
          knowledge: [
            'Examples from Al-Mutanabbi\'s praise poem for Sayf al-Dawla (نماذج من مدح سيف الدولة للمتنبى)'
          ]
        },
        {
          name: 'أخلاق الرسول صلى الله عليه وسلم (The Manners and Character of the Prophet)',
          learningOutcome: 'Describe aspects of the Prophet Muhammad\'s character and manners as presented in the text.',
          knowledge: [
            'Teaching drawn from the manners and character of the Prophet, peace be upon him (تدريس من أخلاق الرسول صلى الله عليه وسلم)'
          ]
        },
        {
          name: 'الضمائر المتصلة والمنفصلة (Attached and Separate Pronouns)',
          learningOutcome: 'Identify and correctly use separate and attached pronouns in Arabic sentences.',
          knowledge: [
            'Examples of attached and separate pronouns: أنا سامع (I am hearing), أنت سامع (you are hearing), نحن سامعون (we are hearing)',
            'Further examples: أعطانى المدرس كتابا (the teacher gave me a book), سافرنا إلى كدونا (we traveled to Kaduna)'
          ]
        },
        {
          name: 'الترجمة: من الإنجليزية إلى العربية (Translation: English to Arabic)',
          learningOutcome: 'Translate English sentences into Arabic.',
          knowledge: [
            'Translation exercises from English into Arabic (من الإنجليزية إلى العربية)'
          ]
        },
        {
          name: 'من لامية ابن الوردى (Excerpts from Ibn al-Wardi\'s Lamiyyah)',
          learningOutcome: 'Recite and interpret selected verses from Ibn al-Wardi\'s classical poem, the Lamiyyah.',
          knowledge: [
            'Examples/verses from Ibn al-Wardi\'s Lamiyyah poem — fifteen verses (نماذج من لامية إبن الوردى، خمسة عشر بيتا)'
          ]
        },
        {
          name: 'النعت والمنعوت (The Adjective and the Qualified Noun)',
          learningOutcome: 'Identify the adjective (na\'t) and the noun it qualifies (man\'ut) in Arabic sentences, ensuring agreement in gender, number, and case.',
          knowledge: [
            'Examples: ١- قرأنا كتابا مفيدا (we read a useful book), ٢- جريت فى ميدان فسيح (I ran in a spacious field), ٣- هذا كتاب مفيد (this is a useful book)'
          ]
        },
        {
          name: 'ذكر أبطال نيجيريا (Mention of Nigerian Heroes)',
          learningOutcome: 'Read and discuss a historical Arabic-language text about notable Nigerian national heroes.',
          knowledge: [
            'A historical article about Nigerian heroes: ١- الحاج أحمد بللو (Alhaji Ahmadu Bello), ٢- الحاج أبوبكر تفاوا بليوا (Alhaji Abubakar Tafawa Balewa), ٣- (الجنرال) مرتضى محمد (General Murtala Mohammed)'
          ]
        },
        {
          name: 'الإخلاص فى العمل (Sincerity and Dedication in Work)',
          learningOutcome: 'Read and discuss Arabic texts on the value of sincerity and dedication in one\'s work.',
          knowledge: [
            'Sentences, paragraphs, or phrases about sincerity and dedication in work (الإخلاص فى العمل)'
          ]
        }
      ]
    }
  ]
};
