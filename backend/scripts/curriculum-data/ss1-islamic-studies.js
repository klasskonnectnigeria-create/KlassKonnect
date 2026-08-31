// SS1 Islamic Studies — First, Second & Third Term
// Source: SchemeofWork.com "Islamic Religious Studies Scheme of Work for SS 1 Federal" (source
// labels this subject "Islamic Religious Studies" — the tracked catalogue name "Islamic Studies"
// is used here as subject, matching the existing ss3-islamic-studies.js precedent).
// URL: https://schemeofwork.com/islamic-religious-studies-scheme-of-work-for-ss-1-federal/
// Source does not claim NESRI-2025 compliance; 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks excluded: First Term Week 13 (Revision) and Week 14 (Examination);
// Second Term Week 12 (Revision) and Week 13 (Examination). Third Term has no revision/
// examination weeks listed on the source and is used in full (10 weeks).
// First Term Weeks 8 & 9 share one broader topic (Makkan/Medinan surahs, then a continuation on
// the Prophet's qualities that spread Islam) — kept as two separate topics per week per the
// per-week rule, with the shared relationship noted in the learningOutcome text.

export const curriculumData = {
  subject: 'Islamic Studies',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Islamic Studies',
      topics: [
        // ---- First Term ----
        {
          name: 'Revelation, Recording and Memorisation of the Glorious Qur\'an',
          learningOutcome: 'Explain how the Qur\'an was revealed, recorded and memorised during the lifetime of Prophet Muhammad (SAW), and identify the materials and companions (Sahabas) involved.',
          knowledge: [
            'How the Qur\'an was revealed to Prophet Muhammad (SAW)',
            'How the Qur\'an was recorded and memorised during his lifetime',
            'Items used for recording revelation: copies of the Qur\'an, stones, bones, and leaves',
            'Names of Sahabas known for memorising the Qur\'an'
          ]
        },
        {
          name: 'Hadith and Its Relationship to Shari\'ah',
          learningOutcome: 'Define Hadith and explain its meaning, importance, and relationship to Shari\'ah.',
          knowledge: [
            'Meaning and definition of Hadith',
            'Meaning and definition of Shari\'ah',
            'Implications of Hadith and its relationship to Shari\'ah'
          ]
        },
        {
          name: 'The Arabs Before Islam',
          learningOutcome: 'Describe the religious, economic and social life of the Arabian peninsula before the advent of Islam.',
          knowledge: [
            'Geography of the Arabian peninsula before Islam',
            'Religious life of pre-Islamic Arabs',
            'Economic life of pre-Islamic Arabs',
            'Social life of pre-Islamic Arabs'
          ]
        },
        {
          name: 'Kalmatu Shahadah (First Part)',
          learningOutcome: 'Define Kalmatu Shahadah and explain the meaning and implications of its first part.',
          knowledge: [
            'Definition and importance of Kalmatu Shahadah',
            'Reading and meaning of the first part of Kalmatu Shahadah',
            'Implications of declaring the first part of Kalmatu Shahadah'
          ]
        },
        {
          name: 'Compilation and Standardization of the Glorious Qur\'an',
          learningOutcome: 'Explain how the Qur\'an was compiled and standardised, particularly during the era of the third Caliph.',
          knowledge: [
            'Process of compiling the Qur\'an after the Prophet\'s death',
            'Standardisation of the Qur\'an during the third Caliph\'s era'
          ]
        },
        {
          name: 'Hadith of the Holy Prophet Muhammad',
          learningOutcome: 'Identify the forms of Hadith and the criteria used to determine their authenticity.',
          knowledge: [
            'Forms of Hadith',
            'Criteria for authenticating a Hadith',
            'Isnad (chain of narration) and Matn (text) as components of Hadith'
          ]
        },
        {
          name: 'The Life of the Holy Prophet Muhammad',
          learningOutcome: 'Narrate the mission of Prophet Muhammad (SAW) before and after he received revelation.',
          knowledge: [
            'The Prophet\'s life before prophethood',
            'The Prophet\'s mission after receiving revelation'
          ]
        },
        {
          name: 'Makkan and Medinan Surahs',
          learningOutcome: 'Distinguish between surahs revealed in Makka and those revealed in Madinah. (This topic continues into the following week\'s lesson on the qualities that helped spread Islam.)',
          knowledge: [
            'Main differences between Makkan surahs and Medinan surahs',
            'Characteristics used to classify a surah as Makkan or Medinan'
          ]
        },
        {
          name: 'Good Qualities of the Prophets That Brought People to Islam',
          learningOutcome: 'Describe the good qualities exhibited by the Prophets that attracted people to Islam, continuing from the previous week\'s lesson on Makkan and Medinan surahs.',
          knowledge: [
            'Qualities of the Prophets that drew people to Islam',
            'Examples of these qualities from Islamic history and the Qur\'an'
          ]
        },
        {
          name: 'Shirk',
          learningOutcome: 'Define Shirk and identify its various types and how they manifest in actions and sayings.',
          knowledge: [
            'Definition of Shirk',
            'Types of Shirk: hero worship, ancestral worship, atheism',
            'Shirk in actions and in sayings'
          ]
        },
        {
          name: 'The Four Rightly Guided Caliphs',
          learningOutcome: 'Give a brief history of the four rightly guided Caliphs of Islam.',
          knowledge: [
            'Brief history of Abu-Bakr Siddiq',
            'Brief history of Umar Ibn Al-khattab',
            'Brief history of Usman ibn Attan',
            'Brief history of Aliyu ibn Abutalib'
          ]
        },
        {
          name: 'The Concept of Worship (Ibadah) in Islam',
          learningOutcome: 'Explain the meaning of Ibadah and its various modes, and describe how worship applies to daily life.',
          knowledge: [
            'Definition and explanation of Ibadah',
            'Modes of worship in Islam',
            'Daily application: good intention, salat, and fasting'
          ]
        },
        // ---- Second Term ----
        {
          name: 'The Importance of the Glorious Qur\'an',
          learningOutcome: 'Explain the importance of the Glorious Qur\'an to Muslims.',
          knowledge: [
            'Reasons the Qur\'an is important to Muslims',
            'The Qur\'an as a source of guidance in daily life'
          ]
        },
        {
          name: 'The Six Sound Collections of Hadith',
          learningOutcome: 'Identify and list the six sound (Sahih) collections of Hadith and their authors.',
          knowledge: [
            'The six sound Hadith collections',
            'Authors/compilers of each collection'
          ]
        },
        {
          name: 'Abubakar Siddiq — Life History and Contributions',
          learningOutcome: 'Narrate the life history and contributions of Abubakar Siddiq, the first Caliph.',
          knowledge: [
            'Life history of Abubakar Siddiq',
            'Contributions of Abubakar Siddiq as the first Caliph'
          ]
        },
        {
          name: 'Articles of Faith (Iman)',
          learningOutcome: 'Define Iman, list the six articles of faith, and explain their implications.',
          knowledge: [
            'Definition of Iman',
            'The six articles of faith',
            'Implications of belief in Allah, Angels, and Prophets'
          ]
        },
        {
          name: 'Tafsir',
          learningOutcome: 'Define Tafsir and explain its origin, sources, and importance.',
          knowledge: [
            'Definition of Tafsir',
            'Origin of Tafsir',
            'Sources of Tafsir',
            'Importance of Tafsir to Qur\'anic understanding'
          ]
        },
        {
          name: 'Umar Ibn Al-khattab — Life History and Contributions',
          learningOutcome: 'Narrate the life history and contributions of Umar Ibn Al-khattab, the second Caliph.',
          knowledge: [
            'Life history of Umar Ibn Al-khattab',
            'Contributions of Umar Ibn Al-khattab as the second Caliph'
          ]
        },
        {
          name: 'Articles of Faith: Belief in Allah, Angels, and Revealed Books',
          learningOutcome: 'Explain the articles of faith relating to belief in Allah, Angels, and the revealed books.',
          knowledge: [
            'Belief in Allah',
            'Belief in Angels',
            'Belief in the revealed books'
          ]
        },
        {
          name: 'Reading, Writing and Translation of Selected Qur\'anic Verses',
          learningOutcome: 'Recite, write, translate and explain Suratul Fatiha, Ayatul Kursiyu, and Amanar Rasul.',
          knowledge: [
            'Suratul Fatiha (Q1:1-7)',
            'Ayatul Kursiyu (Q2:225)',
            'Amanar Rasul (Q2:285-286)'
          ]
        },
        {
          name: 'Hadith 1 and 2 of An-Nawawi\'s Collection',
          learningOutcome: 'Read, write, memorise and explain the meaning of Hadith 1 and 2 of An-Nawawi\'s collection.',
          knowledge: [
            'Text of Hadith 1 (An-Nawawi)',
            'Text of Hadith 2 (An-Nawawi)',
            'Meaning and lessons of each Hadith'
          ]
        },
        {
          name: 'Compilers of the Six Sound Hadith Collections',
          learningOutcome: 'Identify the compilers of the six sound Hadith collections and outline their biographies.',
          knowledge: [
            'Identification of compilers of the six sound collections',
            'Brief biographies of the compilers',
            'Sahih Bukhari and Sahih Muslim as examples'
          ]
        },
        {
          name: 'Fiqhu: At-Taharah (Purification)',
          learningOutcome: 'Define At-Taharah and explain its kinds and importance in Islam.',
          knowledge: [
            'Definition of At-Taharah (purification)',
            'Kinds of Taharah',
            'Importance of purification in Islam'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Reading, Translation and Commentary: Suratul Shams to Suratul Inshirah',
          learningOutcome: 'Read, translate and give commentary on Suratul Shams, Suratul Layl, Suratul Duha, and Suratul Inshirah.',
          knowledge: [
            'Suratul Shams (Q91)',
            'Suratul Layl (Q92)',
            'Suratul Duha (Q93)',
            'Suratul Inshirah (Q94)'
          ]
        },
        {
          name: 'Al Hadith: Hadith No. 3 and 5 of Al-Nawawi Collection',
          learningOutcome: 'Read and explain the meaning and lessons of Hadith no. 3 and 5 of the Al-Nawawi collection.',
          knowledge: [
            'Text and meaning of Hadith no. 3 (Al-Nawawi)',
            'Text and meaning of Hadith no. 5 (Al-Nawawi)',
            'Lessons drawn from each Hadith'
          ]
        },
        {
          name: 'Islamic Political System: Sovereignty of Allah (SWT)',
          learningOutcome: 'Explain the concept of Allah\'s sovereignty within the Islamic political system.',
          knowledge: [
            'Meaning of sovereignty of Allah (SWT)',
            'Application of Allah\'s sovereignty in an Islamic political system'
          ]
        },
        {
          name: 'Fiqhu: As-Salat (Prayer)',
          learningOutcome: 'Describe the Raka\'ah (units) in each of the five daily prayers.',
          knowledge: [
            'As-Salat as one of the pillars of Islam',
            'Number of Raka\'ah in each of the five daily prayers'
          ]
        },
        {
          name: 'Reading, Translation and Commentary: Suratul Tin to Suratul Qadr',
          learningOutcome: 'Read, translate and give commentary on Suratul Tin, Suratul Alaq, and Suratul Qadr.',
          knowledge: [
            'Suratul Tin (Q95)',
            'Suratul Alaq (Q96)',
            'Suratul Qadr (Q97)'
          ]
        },
        {
          name: 'Al Hadith: Hadith No. 4 of Al-Nawawi Collection',
          learningOutcome: 'Read and explain the meaning and lessons of Hadith no. 4 of the Al-Nawawi collection.',
          knowledge: [
            'Text and meaning of Hadith no. 4 (Al-Nawawi)',
            'Lessons drawn from the Hadith'
          ]
        },
        {
          name: 'Fiqhu: Al-Amanah, Adalah and Shurah',
          learningOutcome: 'Explain the principles of Al-Amanah (trust), Adalah (justice), and Shurah (mutual consultation) with reference to the Prophet\'s life.',
          knowledge: [
            'Principle of Al-Amanah (trust)',
            'Principle of Adalah (justice)',
            'Principle of Shurah (mutual consultation)',
            'Examples from the Prophet\'s life history'
          ]
        },
        {
          name: 'Fiqhu: The Concept of Zakkat',
          learningOutcome: 'Explain the concept of Zakkat, citing relevant Qur\'anic verses and Hadith, and describe its distribution and beneficiaries.',
          knowledge: [
            'Definition of Zakkat',
            'Relevant Qur\'anic verses and Hadith on Zakkat',
            'Distribution of Zakkat and its beneficiaries'
          ]
        },
        {
          name: 'Reading, Translation and Commentary: Suratul Bayyinah to Suratul Adiyat',
          learningOutcome: 'Read, translate and give commentary on Suratul Bayyinah, Suratul Zilzalah, and Suratul Adiyat.',
          knowledge: [
            'Suratul Bayyinah (Q98)',
            'Suratul Zilzalah (Q99)',
            'Suratul Adiyat (Q100)'
          ]
        },
        {
          name: 'Fiqhu: Implications of the Six Articles of Faith',
          learningOutcome: 'Explain the implications of the six articles of faith, including belief in the Prophets, the Last Day, and destiny (Qadr).',
          knowledge: [
            'The six articles of faith revisited',
            'Belief in the Prophets',
            'Belief in the Last Day',
            'Belief in destiny (Qadr)'
          ]
        }
      ]
    }
  ]
};
