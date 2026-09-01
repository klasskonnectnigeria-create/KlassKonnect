// SS2 Bookkeeping — First, Second & Third Term
// Source: SchemeofWork.com "Book Keeping Scheme of Work for SS 2 Federal"
// URL: https://schemeofwork.com/book-keeping-scheme-of-work-for-ss-2-federal/
// Source does not claim NESRI-2025 compliance (labeled "Federal Syllabus for Secondary
// School"); 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examination) excluded from all three terms.
// First Term weeks 1-2 ("Accounting Concepts"), weeks 5-6 ("Depreciation Methods"), weeks
// 8-9 ("End of Year Adjustment"), weeks 10-11 ("Bad and Doubtful Debts"); Second Term weeks
// 1-2 ("Stock Valuation"), weeks 3-4 ("Three Column Cash Book"), weeks 5-6 ("Classes of
// Ledger"), weeks 7-9 ("Trading, Profit and Loss Account [and Balance Sheet]"); and Third
// Term weeks 1-4 ("Receipt and Payment") and weeks 5-11 ("Income and Expenditure") each
// span multiple consecutive weeks on a shared topic under one set of objectives; kept as
// separate topics per week per the task's collapsing rule, with the shared relationship
// noted in each learningOutcome.

export const curriculumData = {
  subject: 'Bookkeeping',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Bookkeeping',
      topics: [
        // ---- First Term ----
        {
          name: 'Accounting Concepts and Conventions (I)',
          learningOutcome: 'Explain the meaning of accounting concepts and conventions, and identify basic accounting concepts (week 1 of a two-week topic).',
          knowledge: [
            'Meaning of accounting concepts and conventions',
            'Identification of basic accounting concepts'
          ]
        },
        {
          name: 'Accounting Concepts and Conventions (II)',
          learningOutcome: 'Explain the basic accounting concepts introduced in the previous week (week 2 of a two-week topic).',
          knowledge: [
            'Explanation of basic accounting concepts'
          ]
        },
        {
          name: 'Accounting Conventions',
          learningOutcome: 'Identify and explain basic accounting conventions.',
          knowledge: [
            'Identification of basic accounting conventions',
            'Explanation of basic accounting conventions'
          ]
        },
        {
          name: 'Depreciation',
          learningOutcome: 'Define depreciation and identify its causes.',
          knowledge: [
            'Meaning/definition of depreciation',
            'Causes of depreciation'
          ]
        },
        {
          name: 'Depreciation Methods (I)',
          learningOutcome: 'Mention the various methods of computing depreciation and explain the fixed instalment (straight line) method (week 1 of a two-week topic).',
          knowledge: [
            'Various methods of computing depreciation',
            'Fixed instalment (straight line) method'
          ]
        },
        {
          name: 'Depreciation Methods (II)',
          learningOutcome: 'Explain the diminishing balance and revaluation methods of depreciation (week 2 of a two-week topic).',
          knowledge: [
            'Diminishing balance method',
            'Revaluation method'
          ]
        },
        {
          name: 'Depreciation Computation',
          learningOutcome: 'Compute simple depreciation using the fixed/straight line, diminishing balance, and revaluation methods.',
          knowledge: [
            'Computation of depreciation using fixed/straight line method',
            'Computation of depreciation using diminishing balance method',
            'Computation of depreciation using revaluation method'
          ]
        },
        {
          name: 'End of Year Adjustment (I)',
          learningOutcome: 'Explain the meaning of end-of-year adjustments and identify the two types of adjustments (week 1 of a two-week topic).',
          knowledge: [
            'Meaning of adjustment',
            'Types of adjustments'
          ]
        },
        {
          name: 'End of Year Adjustment (II)',
          learningOutcome: 'Explain the treatment of accrued and prepaid expenses/income in end-of-year adjustments (week 2 of a two-week topic).',
          knowledge: [
            'Treatment of accrual expenses in end-of-year adjustment',
            'Treatment of prepaid expenses and income in end-of-year adjustment'
          ]
        },
        {
          name: 'Bad and Doubtful Debts (I)',
          learningOutcome: 'Define bad debts and doubtful debts and differentiate between them (week 1 of a two-week topic).',
          knowledge: [
            'Definition of bad debt',
            'Definition of doubtful debts',
            'Difference between bad debt and doubtful debt'
          ]
        },
        {
          name: 'Bad and Doubtful Debts (II)',
          learningOutcome: 'Explain how to make provision for doubtful debts and record bad and doubtful debts in the appropriate books (week 2 of a two-week topic).',
          knowledge: [
            'Provision for doubtful debts',
            'Methods of recording bad debts and doubtful debts'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Stock Valuation (I)',
          learningOutcome: 'Explain the meaning and purpose of stock valuation (week 1 of a two-week topic).',
          knowledge: [
            'Meaning of stock valuation',
            'Purpose of stock valuation'
          ]
        },
        {
          name: 'Stock Valuation (II)',
          learningOutcome: 'List methods of stock valuation and compute stock valuation using the FIFO (First In First Out) method (week 2 of a two-week topic).',
          knowledge: [
            'Methods of stock valuation',
            'Computation of stock valuation using FIFO'
          ]
        },
        {
          name: 'Three Column Cash Book (I)',
          learningOutcome: 'Revisit single and double column cash books and explain the three column cash book and its columns (week 1 of a two-week topic).',
          knowledge: [
            'Revision of single column and double column cash book',
            'Meaning of three column cash book',
            'Columns of a three column cash book'
          ]
        },
        {
          name: 'Three Column Cash Book (II)',
          learningOutcome: 'Differentiate between single, double, and three column cash books, and prepare three column cash books (week 2 of a two-week topic).',
          knowledge: [
            'Difference between single, double and three column cash book',
            'Preparation of three column cash books'
          ]
        },
        {
          name: 'Classes of Ledger (I)',
          learningOutcome: 'State the classes of ledger and identify the columns used in a ledger (week 1 of a two-week topic).',
          knowledge: [
            'Classes of ledger',
            'Columns in a ledger'
          ]
        },
        {
          name: 'Classes of Ledger (II)',
          learningOutcome: 'Explain the extraction of entries from the cash book to the ledger and post transactions into a ledger (week 2 of a two-week topic).',
          knowledge: [
            'Extraction from cash book to ledger',
            'Posting transactions into a ledger'
          ]
        },
        {
          name: 'Trading, Profit and Loss Account (I)',
          learningOutcome: 'Define trading, profit and loss accounts and prepare a profit and loss account with adjustments such as prepayments, accruals, depreciation, and bad/doubtful debts (week 1 of a three-week topic).',
          knowledge: [
            'Definition of profit and loss accounts',
            'Preparation of profit and loss account with adjustments (prepayment, accruals, depreciation, bad and doubtful debts)'
          ]
        },
        {
          name: 'Trading, Profit and Loss Account (II)',
          learningOutcome: 'Practice further exercises on the trading, profit and loss account with adjustments (week 2 of a three-week topic).',
          knowledge: [
            'Practice exercises on trading, profit and loss account with adjustments',
            'Excursion to a business organisation'
          ]
        },
        {
          name: 'Trading, Profit and Loss Account and Balance Sheet',
          learningOutcome: 'Explain how adjustments (bad and doubtful debts on debtors, depreciation on fixed assets, accruals as liabilities, and prepayments as assets) are treated in the balance sheet (week 3 of a three-week topic).',
          knowledge: [
            'Treatment of bad and doubtful debts on debtors in the balance sheet',
            'Treatment of depreciation on fixed assets in the balance sheet',
            'Treatment of accruals as liabilities in the balance sheet',
            'Treatment of prepayments as assets in the balance sheet'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Receipt and Payment Account (I)',
          learningOutcome: 'Explain the meaning and limitations of a receipt and payment account (week 1 of a four-week topic).',
          knowledge: [
            'Meaning of receipt and payment',
            'Limitations of receipt and payment'
          ]
        },
        {
          name: 'Receipt and Payment Account (II)',
          learningOutcome: 'State the purpose and features of a receipt and payment account (week 2 of a four-week topic).',
          knowledge: [
            'Purpose of receipt and payment',
            'Features of receipt and payment'
          ]
        },
        {
          name: 'Receipt and Payment Account (III)',
          learningOutcome: 'Identify the users and concepts underlying receipts and payment accounts (week 3 of a four-week topic).',
          knowledge: [
            'Users of receipts and payment',
            'Concepts of receipts and payment'
          ]
        },
        {
          name: 'Receipt and Payment Account (IV)',
          learningOutcome: 'Prepare a simple receipt and payment account (week 4 of a four-week topic).',
          knowledge: [
            'Preparation of a simple receipt and payment account',
            'Excursion to a non-profit-making organisation'
          ]
        },
        {
          name: 'Income and Expenditure Account (I)',
          learningOutcome: 'Explain the meaning of an income and expenditure account and differentiate it from a receipts and payment account (week 1 of a seven-week topic).',
          knowledge: [
            'Meaning of income and expenditure',
            'Difference between income and expenditure and receipts and payment'
          ]
        },
        {
          name: 'Income and Expenditure Account (II)',
          learningOutcome: 'Identify the users of an income and expenditure account and its contents (week 2 of a seven-week topic).',
          knowledge: [
            'Users of income and expenditure account',
            'Contents of income and expenditure account'
          ]
        },
        {
          name: 'Income and Expenditure Account (III)',
          learningOutcome: 'Describe the features of an income and expenditure account and the sources of income of a non-profit-making organisation (week 3 of a seven-week topic).',
          knowledge: [
            'Features of income and expenditure',
            'Sources of income of a non-profit-making organisation'
          ]
        },
        {
          name: 'Income and Expenditure Account (IV)',
          learningOutcome: 'Determine purchases and sales figures using the total purchases/creditors control account and total debtors control account respectively (week 4 of a seven-week topic).',
          knowledge: [
            'Determination of purchases through total purchases/creditors control account',
            'Determination of sales through total debtors control account'
          ]
        },
        {
          name: 'Income and Expenditure Account (V)',
          learningOutcome: 'Prepare subscription in advance and in arrears as they affect the income and expenditure account (week 5 of a seven-week topic).',
          knowledge: [
            'Subscription in advance',
            'Subscription in arrears',
            'Effect on income and expenditure account'
          ]
        },
        {
          name: 'Income and Expenditure Account (VI)',
          learningOutcome: 'Prepare a simple income and expenditure account (week 6 of a seven-week topic).',
          knowledge: [
            'Preparation of a simple income and expenditure account'
          ]
        },
        {
          name: 'Income and Expenditure Account (VII)',
          learningOutcome: 'Practice further exercises on preparing an income and expenditure account (week 7 of a seven-week topic).',
          knowledge: [
            'Further practice exercises on income and expenditure account'
          ]
        }
      ]
    }
  ]
};
