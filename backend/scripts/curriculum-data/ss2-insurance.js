// SS2 Insurance — First, Second & Third Term
// Source: SchemeofWork.com "Insurance Scheme of Work SSS2 Lagos State"
// URL: https://schemeofwork.com/insurance-scheme-of-work-sss2-lagos-state/
// Source does not claim NESRI-2025 compliance; 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Welcome Test/Revision, Mid-Term, Revision, Examination) excluded
// from all three terms.
// First Term weeks 2-3 (Fire Insurance), 5-6/8 (Money Insurance) and 7-8 (Fidelity
// Guarantee Insurance); Second Term weeks 3-4 (Marine Insurance), 5-6 (Aviation
// Insurance), 6-7 (Liability Insurance) and 8-9 (Engineering Insurance); and Third Term
// weeks 2-3 (Personal Accident/Group Insurance), 4-5 (Business Interruption), 6-7 (Risk
// Management) and 8-9 (Brokerage) each span consecutive weeks under one shared topic
// label on the source; kept as separate topics per week per the task's collapsing rule,
// with the shared relationship noted in each learningOutcome where applicable.

export const curriculumData = {
  subject: 'Insurance',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Insurance',
      topics: [
        // ---- First Term ----
        {
          name: 'Fire Insurance',
          learningOutcome: 'Explain the meaning of fire insurance and outline the properties covered by it. This topic continues into the following week on damaged items and who buys the policy.',
          knowledge: [
            'Meaning of fire insurance',
            'Properties covered by fire insurance'
          ]
        },
        {
          name: 'Fire Insurance (Continued)',
          learningOutcome: 'List examples of items that can be damaged by fire and identify who buys fire insurance policies.',
          knowledge: [
            'Examples of items that can be damaged by fire',
            'Persons who buy fire insurance policies'
          ]
        },
        {
          name: 'Theft Insurance',
          learningOutcome: 'Describe theft insurance and state the properties covered by it.',
          knowledge: [
            'Meaning of theft insurance',
            'Properties covered by theft insurance'
          ]
        },
        {
          name: 'Burglary Insurance',
          learningOutcome: 'Define burglary insurance, state the properties that can be insured, and differentiate between burglary and theft insurance.',
          knowledge: [
            'Meaning of burglary insurance',
            'Properties that can be insured under burglary insurance',
            'Difference between burglary insurance and theft insurance'
          ]
        },
        {
          name: 'Money Insurance',
          learningOutcome: 'Explain the meaning of money insurance and why it is necessary, and list the covers it provides. This topic continues into a later week on exclusions and extensions.',
          knowledge: [
            'Meaning and necessity of money insurance',
            'Covers provided by money insurance'
          ]
        },
        {
          name: 'Money Insurance (Continued)',
          learningOutcome: 'State the exclusions from money insurance and explain extensions an insurance company may agree to cover.',
          knowledge: [
            'Exclusions from money insurance',
            'Extensions to money insurance cover'
          ]
        },
        {
          name: 'Fidelity Guarantee Insurance',
          learningOutcome: 'Identify the meaning of fidelity guarantee insurance and list and explain its types. This topic continues into the following week on guarantee versus bond and policy types.',
          knowledge: [
            'Meaning of fidelity guarantee insurance',
            'Types of fidelity guarantee insurance'
          ]
        },
        {
          name: 'Fidelity Guarantee Insurance (Continued)',
          learningOutcome: 'Differentiate between commercial guarantee and bond, and identify and explain the types of policies under fidelity guarantee insurance.',
          knowledge: [
            'Difference between commercial guarantee and bond',
            'Types of policies under fidelity guarantee insurance'
          ]
        },
        {
          name: 'Credit Insurance',
          learningOutcome: 'Describe the meaning of credit insurance and examine its benefits to debtors and businesses. This topic continues into the following term on types and covers of credit insurance.',
          knowledge: [
            'Meaning of credit insurance',
            'Benefits of credit insurance to debtors and business'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Credit Insurance (Continued)',
          learningOutcome: 'Identify the types of credit insurance and describe the types of cover provided under it.',
          knowledge: [
            'Types of credit insurance',
            'Types of cover provided under credit insurance'
          ]
        },
        {
          name: 'Marine Insurance',
          learningOutcome: 'Describe the meaning of marine insurance and identify and explain the types of marine insurance policy. This topic continues into the following week on perils covered.',
          knowledge: [
            'Meaning of marine insurance',
            'Types of marine insurance policy'
          ]
        },
        {
          name: 'Marine Insurance (Continued)',
          learningOutcome: 'List the perils covered by marine insurance and explain jettisoning and sinking.',
          knowledge: [
            'Perils covered by marine insurance',
            'Jettisoning',
            'Sinking'
          ]
        },
        {
          name: 'Aviation Insurance',
          learningOutcome: 'Explain the concept of aviation insurance and identify and explain the types of aviation insurance policy. This topic continues into the following week on risk factors and regulatory bodies.',
          knowledge: [
            'Concept of aviation insurance',
            'Types of aviation insurance policies'
          ]
        },
        {
          name: 'Aviation Insurance (Continued)',
          learningOutcome: 'List and explain the factors affecting aviation risks and discuss the activities of the Nigeria Civil Aviation Authority and the Federal Airports Authority of Nigeria.',
          knowledge: [
            'Factors affecting aviation risks',
            'Nigeria Civil Aviation Authority',
            'Federal Airports Authority of Nigeria'
          ]
        },
        {
          name: 'Liability Insurance',
          learningOutcome: 'Describe the meaning of liability insurance and mention and explain its types. This topic continues into the following week on professional indemnity and employer liability.',
          knowledge: [
            'Meaning of public liability insurance',
            'Types of liability insurance'
          ]
        },
        {
          name: 'Liability Insurance (Continued)',
          learningOutcome: 'Describe professional indemnity insurance and list professionals that require it, and state the level of benefits provided by employer’s liability insurance.',
          knowledge: [
            'Professional indemnity insurance and professionals requiring it',
            'Benefits provided by employer’s liability insurance'
          ]
        },
        {
          name: 'Engineering Insurance',
          learningOutcome: 'Describe the meaning of engineering insurance and explain its scope. This topic continues into the following week on boiler risks and electronic equipment insurance.',
          knowledge: [
            'Meaning of engineering insurance',
            'Scope of engineering insurance'
          ]
        },
        {
          name: 'Engineering Insurance (Continued)',
          learningOutcome: 'List the risks associated with the use of boilers and explain the scope of electronic equipment insurance.',
          knowledge: [
            'Risks associated with the use of boilers',
            'Scope of electronic equipment insurance'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Insurance Market',
          learningOutcome: 'Define the insurance market and state the major players in it.',
          knowledge: [
            'Meaning of insurance market',
            'Major players in the insurance market'
          ]
        },
        {
          name: 'Personal Accident/Group Insurance',
          learningOutcome: 'Describe the meaning of personal accident insurance and explain covers under a personal accident policy. This topic continues into the following week on group personal insurance and benefits.',
          knowledge: [
            'Meaning of personal accident insurance',
            'Covers under a personal accident policy'
          ]
        },
        {
          name: 'Personal Accident/Group Insurance (Continued)',
          learningOutcome: 'Define group personal insurance and state the benefits of personal accident insurance.',
          knowledge: [
            'Meaning of group personal insurance',
            'Benefits of personal accident insurance'
          ]
        },
        {
          name: 'Business Interruption',
          learningOutcome: 'Describe the meaning of business interruption and state its benefits. This topic continues into the following week on losses and underwriting factors.',
          knowledge: [
            'Meaning of business interruption',
            'Benefits of business interruption'
          ]
        },
        {
          name: 'Business Interruption (Continued)',
          learningOutcome: 'Mention the losses covered under business interruption and state the underwriting factors involved.',
          knowledge: [
            'Losses under business interruption',
            'Underwriting factors for business interruption'
          ]
        },
        {
          name: 'Risk Management',
          learningOutcome: 'Discuss the concept of risk management and identify and explain the five steps in risk management. This topic continues into the following week on types and importance of risk management.',
          knowledge: [
            'Concept of risk management',
            'Five steps in risk management'
          ]
        },
        {
          name: 'Risk Management (Continued)',
          learningOutcome: 'Identify the three types of risk management and justify why risk management is important.',
          knowledge: [
            'Types of risk management',
            'Importance of risk management'
          ]
        },
        {
          name: 'Brokerage',
          learningOutcome: 'Describe the meaning of brokerage, identify the roles of a broker, and state the types of brokers. This topic continues into the following week on brokerage firms and their functions.',
          knowledge: [
            'Meaning of brokerage',
            'Roles of a broker',
            'Types of brokers'
          ]
        },
        {
          name: 'Brokerage (Continued)',
          learningOutcome: 'Define a brokerage firm and mention the types of brokerage firms and their functions.',
          knowledge: [
            'Meaning of brokerage firm',
            'Types of brokerage firms and their functions'
          ]
        }
      ]
    }
  ]
};
