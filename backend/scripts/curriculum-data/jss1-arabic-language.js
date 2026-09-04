// JSS1 Arabic Language — First, Second and Third Term
// Source: SchemeofWork.com "Arabic Language Scheme of Work for Junior Secondary School Federal"
// URL: https://schemeofwork.com/arabic-language-scheme-of-work-for-junior-secondary-federal/
// Source page does not explicitly claim NESRI 2025 compliance (published 2022, last modified
// 2022-10-02; it is a pre-reform Federal scheme of work).
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// This single page covers JSS1, JSS2 and JSS3 under one "SCHEME OF WORK FOR J.S.S 1/2/3"
// heading structure; only the JSS1 section is used here. Administrative weeks (المراجعة
// العامة / General Review, الإمتحانات والتصحيح / Examinations and Correction — the final one
// or two weeks of each term) are excluded. Raw fetched HTML was checked directly (not just the
// AI-summarized fetch) to confirm the Arabic text renders as genuine, correctly encoded script
// tied to a real JSS1-labelled table (السنة الأولى الإعدادية = "First Preparatory Year"),
// not fabricated or copied from an adjacent grade.

export const curriculumData = {
  subject: 'Arabic Language',
  grade: 'JSS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'JSS1 Arabic Language',
      topics: [
        {
          name: 'الإسم: تعريف الاسم وأنواعه (The Noun: Definition and Types)',
          learningOutcome: 'Identify and use Arabic nouns (proper and common) with the correct vocabulary.',
          knowledge: [
            'Vocabulary related to nouns (أسماء) and their types, e.g. proper nouns like محمد (Muhammad) and فاطمة (Fatima)',
            'Common nouns such as ولد (boy), أسد (lion), جمل (camel), بقرة (cow), شجرة (tree), حشيش (grass), and جزر (carrot)'
          ]
        },
        {
          name: 'الأصوات العربية (Arabic Sounds)',
          learningOutcome: 'Recognize and pronounce Arabic letters with similar sounds in context.',
          knowledge: [
            'A literary text featuring letters with similar sounds: ا ع د ض ل ح خ ه ظ ز ذ',
            'Practice sentences: نام الولد (the boy slept), جاء المعلم (the teacher came), جلست فاطمة (Fatima sat)'
          ]
        },
        {
          name: 'التدريب على الحروف الخاصة (Practice on Special Letters / Object Types)',
          learningOutcome: 'Identify direct and indirect objects (مفعول) within simple Arabic sentences.',
          knowledge: [
            'Passages selected by the teacher containing different types of objects (مفعولات), such as direct and indirect objects',
            'Example sentences: شرب علي الماء (Ali drank the water), ضرب المعلم التلاميذ ضربتين (the teacher hit the students twice)'
          ]
        },
        {
          name: 'التدريب على الفاعل (Practice on the Subject, via Dialogue)',
          learningOutcome: 'Practice using the grammatical subject (فاعل) correctly through guided dialogue.',
          knowledge: [
            'Training on the grammatical subject (فاعل) of a sentence through structured dialogues',
            'Practice recognizing and using subjects in simple Arabic sentences'
          ]
        },
        {
          name: 'التدريب على المفعولات (Practice on Objects)',
          learningOutcome: 'Reinforce correct use of objects (مفعول) in Arabic sentence construction.',
          knowledge: [
            'Continued exercises on objects (مفعولات) in Arabic sentences, building on earlier object-type practice'
          ]
        },
        {
          name: 'المحادثة (Conversation — Greetings)',
          learningOutcome: 'Hold a simple greeting-based conversation in Arabic using question-and-answer form.',
          knowledge: [
            'Greeting dialogue: السلام عليكم يا بلال (Peace be upon you, Bilal) — وعليكم السلام يا أحمد (And upon you peace, Ahmad)',
            'Question-and-answer practice: إلى أين تذهب؟ (Where are you going?) — أذهب إلى المدرسة (I am going to school)'
          ]
        },
        {
          name: 'القصص القصيرة (Short Stories)',
          learningOutcome: 'Read and comprehend short moral stories, extracting the lesson taught.',
          knowledge: [
            'Selected texts on good neighborliness (حسن الجوار)',
            'Selected texts on kindness to parents (بر الوالدين)'
          ]
        },
        {
          name: 'المطالعة (Reading Comprehension)',
          learningOutcome: 'Read a passage aloud and answer comprehension questions on it.',
          knowledge: [
            'Comprehension passage on the importance of Arabic as a language recognized by Muslims everywhere'
          ]
        },
        {
          name: 'المحادثة (Conversation — Family and Market)',
          learningOutcome: 'Continue dialogue practice on everyday topics such as family and the market.',
          knowledge: [
            'Dialogue on family: من أي أعضاء تتكون الأسرة؟ (Who makes up a family?) — تتكون الأسرة من ثلاثة أعضاء على الأقل: أب وأم وأولاد (A family consists of at least a father, mother, and children)',
            'Dialogue practice built around a market/shopping scenario'
          ]
        },
        {
          name: 'الخط العربي (Arabic Calligraphy)',
          learningOutcome: 'Write simple Arabic words, sentences and phrases with correct letter formation.',
          knowledge: [
            'Writing easy words, sentences, and simple phrases in Arabic script'
          ]
        },
        {
          name: 'العدد (Arabic Numerals 101–201)',
          learningOutcome: 'Read and write Arabic numerals from 101 to 201.',
          knowledge: [
            'Arabic numerals from 101 to 201',
            'Revision of numeral lessons covered in previous weeks'
          ]
        },
        {
          name: 'الحروف القمرية (Lunar Letters)',
          learningOutcome: 'Identify and correctly pronounce the Arabic lunar (moon) letters and words beginning with them.',
          knowledge: [
            'The lunar letters: ء ب ج ح خ ع غ ف ق ك م و ه ي',
            'Example words: الأسد (lion), الباب (door), القمر (moon), اليد (hand)'
          ]
        },
        {
          name: 'الحروف الشمسية (Solar Letters)',
          learningOutcome: 'Identify and correctly pronounce the Arabic solar (sun) letters and words beginning with them.',
          knowledge: [
            'The solar letters: ت ث د ذ ر ز س ش ص ض ط ظ ل ن',
            'Example words: الشمس (sun), السمك (fish), النور (light)'
          ]
        },
        {
          name: 'الاستمرار بالتدريب على الفاعل (Continued Subject Practice)',
          learningOutcome: 'Apply the grammatical subject correctly in a wider range of Arabic sentences.',
          knowledge: [
            'Continued subject (فاعل) practice with sentences such as حفظ التلميذ القرآن (the pupil memorised the Qur\'an)',
            'Further examples: سمع الولد النصيحة (the boy heard the advice), صلت فاطمة الظهر (Fatima prayed Dhuhr)'
          ]
        },
        {
          name: 'الخط العربي (Arabic Calligraphy — Short Passage)',
          learningOutcome: 'Write a short Arabic passage neatly and accurately.',
          knowledge: [
            'Copying and writing a short Arabic passage'
          ]
        },
        {
          name: 'المحادثة (Conversation — Buyer and Seller)',
          learningOutcome: 'Role-play a simple buyer-seller dialogue in Arabic.',
          knowledge: [
            'Market dialogue: ماذا تريد؟ (What do you want?) — أريد الشراء (I want to buy)',
            'بكم تبيع هذا الكتاب؟ (How much do you sell this book for?) — أبيع بمائة نيرة (I sell it for one hundred naira)'
          ]
        },
        {
          name: 'معرفة مفرد ومثنى من الأسماء (Singular and Dual Nouns)',
          learningOutcome: 'Distinguish and form singular and dual noun forms in Arabic.',
          knowledge: [
            'Singular-to-dual noun formation: ولد → ولدان (boy → two boys)',
            'Further examples: بنت → بنتان (girl → two girls), كتاب → كتابان (book → two books)'
          ]
        },
        {
          name: 'المفعول به (Direct Objects)',
          learningOutcome: 'Identify the direct object (مفعول به) in a sentence.',
          knowledge: [
            'Direct object examples: فتح علي الباب (Ali opened the door), شربت عائشة الماء (Aisha drank the water)'
          ]
        },
        {
          name: 'الأرقام العربية (Arabic Numerals 140–211)',
          learningOutcome: 'Read and write Arabic numerals from 140 to 211.',
          knowledge: [
            'Arabic numerals from 140 to 211, chosen to suit pupils\' level'
          ]
        },
        {
          name: 'الأصوات العربية والأناشيد (Arabic Sounds and Songs)',
          learningOutcome: 'Recognize Arabic phonetic sounds reinforced through songs and chants.',
          knowledge: [
            'Arabic phonetic sounds practiced through songs and chants'
          ]
        },
        {
          name: 'الإملاء (Dictation)',
          learningOutcome: 'Write short Arabic sentences correctly from dictation.',
          knowledge: [
            'Dictation of short sentences drawn from previous lessons'
          ]
        },
        {
          name: 'الترجمة (Translation — English to Arabic)',
          learningOutcome: 'Translate short simple sentences from English into Arabic.',
          knowledge: [
            'Translating a short passage from English into Arabic'
          ]
        },
        {
          name: 'الحوار (Dialogue — Home and School)',
          learningOutcome: 'Hold a dialogue giving personal information about home and school location.',
          knowledge: [
            'Dialogue: أين تسكن يا أحمد؟ (Where do you live, Ahmad?) — أسكن في وسي (I live in Osi)',
            'أين مدرستك؟ (Where is your school?) — مدرستي في تدون ودا (My school is in Tudun Wada)'
          ]
        },
        {
          name: 'معرفة الجمع من الأسماء (Plural Nouns)',
          learningOutcome: 'Form the plural of common Arabic nouns.',
          knowledge: [
            'Plural formation examples: ولد → أولاد (boy → boys), بنت → بنات (girl → girls)',
            'Further examples: كتاب → كتب (book → books), قلم → أقلام (pen → pens)'
          ]
        },
        {
          name: 'التدريب على بعض الحروف الهجائية (Letter Pronunciation Practice)',
          learningOutcome: 'Distinguish the pronunciation of commonly confused Arabic letters.',
          knowledge: [
            'Practice distinguishing the pronunciation of similar letters: ث ذ ز ظ ع غ ك ق ص س'
          ]
        },
        {
          name: 'القصص القصيرة (Short Stories — Virtues)',
          learningOutcome: 'Read short moral stories and identify their message.',
          knowledge: [
            'Short stories on honesty (الأمانة), truthfulness (الصدق), and benevolence (الإحسان)'
          ]
        },
        {
          name: 'الخط العربي (Arabic Calligraphy — Practice)',
          learningOutcome: 'Practice Arabic handwriting for legibility and accuracy.',
          knowledge: [
            'Handwriting practice writing Arabic letters and words'
          ]
        },
        {
          name: 'القراءة (Reading Practice)',
          learningOutcome: 'Read a level-appropriate passage from the prescribed textbook fluently.',
          knowledge: [
            'Reading passages from the prescribed textbook, chosen by the teacher to suit pupils\' level'
          ]
        },
        {
          name: 'عدد الأرقام (Reading Numbers 160–242)',
          learningOutcome: 'Read and write Arabic numerals from 160 to 242.',
          knowledge: [
            'Arabic numerals from 160 to 242'
          ]
        },
        {
          name: 'المحادثة (Conversation — Hospital Dialogue)',
          learningOutcome: 'Role-play a doctor-patient dialogue describing an illness.',
          knowledge: [
            'Hospital dialogue: ماذا أصابك؟ (What is wrong with you?) — أصابني الحمى (I have a fever)'
          ]
        },
        {
          name: 'الترجمة (Translation — Arabic to English)',
          learningOutcome: 'Translate simple Arabic sentences into English.',
          knowledge: [
            'Translating simple Arabic sentences into English, drawing on sentences from previous lessons'
          ]
        }
      ]
    }
  ]
};
