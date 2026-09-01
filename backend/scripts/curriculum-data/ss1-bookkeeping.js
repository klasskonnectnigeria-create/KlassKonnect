// SS1 Bookkeeping — First, Second & Third Term
// Source: SchemeofWork.com "Book Keeping Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/book-keeping-scheme-of-work-for-ss-1-federal
// Source does not claim NESRI-2025 compliance (labeled "Federal Syllabus for Secondary
// School"); 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examinations) excluded from all three terms.
// First Term weeks 4-5 ("Assets and Liabilities"), Second Term weeks 1-3 ("Ledger"),
// weeks 4-5 ("Single column cash book"), weeks 6 & 8 ("Double column cash book"), weeks 7
// & 10 ("Principles of double entry"), Third Term weeks 2-3 ("Trial balance"), weeks 4-5
// ("Corrections of errors"), weeks 6-7 ("Trading Accounts"), weeks 8-9 ("Profit and loss
// Account"), and weeks 10-11 ("Balance Sheet") each span multiple consecutive weeks on a
// shared topic under one set of objectives; kept as separate topics per week per the
// task's collapsing rule, with the shared relationship noted in each learningOutcome.

export const curriculumData = {
  subject: 'Bookkeeping',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Bookkeeping',
      topics: [
        // ---- First Term ----
        {
          name: 'Meaning of Book Keeping',
          learningOutcome: 'Define book-keeping and explain its importance.',
          knowledge: [
            'Meaning of book-keeping',
            'Importance of book-keeping'
          ]
        },
        {
          name: 'History of Book Keeping',
          learningOutcome: 'Narrate briefly the history of book-keeping in Nigeria.',
          knowledge: [
            'History of book-keeping in Nigeria'
          ]
        },
        {
          name: 'Career Opportunities in Book Keeping',
          learningOutcome: 'Discuss career opportunities in book-keeping and identify its beneficiaries.',
          knowledge: [
            'Career opportunities in book-keeping',
            'Beneficiaries of book-keeping'
          ]
        },
        {
          name: 'Assets and Liabilities',
          learningOutcome: 'Define assets and mention the various classes of assets in order of permanency and liquidity. This topic continues into the following week on liabilities.',
          knowledge: [
            'Meaning of assets',
            'Classes of assets in order of permanency and liquidity'
          ]
        },
        {
          name: 'Assets and Liabilities (Continued)',
          learningOutcome: 'Define liabilities, differentiate between assets and liabilities, explain the classification of liabilities, and give examples of liabilities.',
          knowledge: [
            'Meaning of liabilities',
            'Differentiation between assets and liabilities',
            'Classification of liabilities',
            'Examples of liabilities'
          ]
        },
        {
          name: 'Business Transactions',
          learningOutcome: 'Explain the meaning of business transactions, list the different types, and identify the parties involved (e.g. buyer, seller, customer).',
          knowledge: [
            'Meaning of business transaction',
            'Types of business transaction',
            'Parties involved in business transaction e.g. buyers, sellers, customers'
          ]
        },
        {
          name: 'Debtors and Creditors',
          learningOutcome: 'Explain the terms debtor and creditor and differentiate between them.',
          knowledge: [
            'Meaning of debtor',
            'Meaning of creditor',
            'Differences between debtors and creditors'
          ]
        },
        {
          name: 'Source Documents',
          learningOutcome: 'Explain the meaning of source documents and identify their types, such as invoices, receipts, vouchers, and debit/credit notes.',
          knowledge: [
            'Meaning of source document',
            'Types of source documents: invoice, receipt, voucher, credit/debit notes, etc.'
          ]
        },
        {
          name: 'Source Documents (Continued)',
          learningOutcome: 'Explain the content of each source document and state their uses.',
          knowledge: [
            'Content of each source document',
            'Uses of source documents'
          ]
        },
        {
          name: 'Books of Original Entry',
          learningOutcome: 'Explain the meaning of journals and mention the types of journals. This topic continues into the following weeks on format and use.',
          knowledge: [
            'Meaning of journals',
            'Types of journals: sales, purchases, returns inwards, returns outwards, general journal'
          ]
        },
        {
          name: 'Books of Original Entry (Continued): Format and Functions',
          learningOutcome: 'Draw the format of a journal and explain the functions and uses of each column.',
          knowledge: [
            'Format of a journal',
            'Functions of each column',
            'Uses of journals'
          ]
        },
        {
          name: 'Books of Original Entry (Continued): Extracting Information',
          learningOutcome: 'Explain how to extract information from source documents into the books of original entry and differentiate the types of journal.',
          knowledge: [
            'Extracting information from source documents into books of original entry',
            'Differentiating types of journal'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Ledger: Meaning and Structure',
          learningOutcome: 'Define the ledger, explain its division into debit and credit sides, and identify items recorded on it. This topic continues into the following two weeks on format and use.',
          knowledge: [
            'Meaning of ledger',
            'Division of ledger into debit and credit side',
            'Items identified on the ledger'
          ]
        },
        {
          name: 'Ledger: Format and Account Types',
          learningOutcome: 'Draw the format of a ledger and explain the types of ledger account.',
          knowledge: [
            'Format of ledger',
            'Types of ledger account'
          ]
        },
        {
          name: 'Ledger: Uses and Posting',
          learningOutcome: 'Explain the uses of the ledger and post entries correctly into it through practice exercises.',
          knowledge: [
            'Uses of ledger',
            'Correct posting of entries into the ledger'
          ]
        },
        {
          name: 'Single Column Cash Book',
          learningOutcome: 'Explain the meaning of a single column cash book, its items, and its uses. This topic continues into the following week on preparation.',
          knowledge: [
            'Meaning of single column cash book',
            'Items of a single column cash book',
            'Uses of single column cash book'
          ]
        },
        {
          name: 'Single Column Cash Book: Preparation',
          learningOutcome: 'Prepare a single column cash book through practice exercises.',
          knowledge: [
            'Preparation of single column cash book',
            'Practice exercises on single column cash book'
          ]
        },
        {
          name: 'Double Column Cash Book: Meaning and Format',
          learningOutcome: 'Explain the meaning of a double column cash book and identify its items through its format. This topic continues in a later week on preparation.',
          knowledge: [
            'Meaning of double column cash book',
            'Items on the double column cash book (through format)'
          ]
        },
        {
          name: 'Principles of Double Entry',
          learningOutcome: 'Explain the meaning of double entry and state its role. This topic continues in a later week on debiting/crediting and posting.',
          knowledge: [
            'Meaning of double entry',
            'Role of double entry'
          ]
        },
        {
          name: 'Double Column Cash Book: Preparation',
          learningOutcome: 'Prepare a double column cash book with emphasis on cash and bank columns on both the receipt and payment sides, differentiating it from a single column cash book.',
          knowledge: [
            'Preparation of double column cash book with cash and bank columns',
            'Difference between single column and double column cash book'
          ]
        },
        {
          name: 'Contra-Entry',
          learningOutcome: 'Explain the concept of contra-entry, identify contra entry transactions, and record them appropriately.',
          knowledge: [
            'Concept of contra-entry',
            'Identification of contra entry transactions',
            'Appropriate recording of contra entry transactions'
          ]
        },
        {
          name: 'Principles of Double Entry (Continued): Debiting, Crediting and Posting',
          learningOutcome: 'Identify the account to be debited and the one to be credited, and post transactions from the cash book to the ledger.',
          knowledge: [
            'Identifying accounts to debit and credit',
            'Posting transactions from cash book to ledger'
          ]
        },
        {
          name: 'Petty Cash Book',
          learningOutcome: 'Explain the meaning of a petty cash book and the classification of its columns.',
          knowledge: [
            'Meaning of petty cash book',
            'Classification of petty cash book columns'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Petty Cash Book (Continued): Posting',
          learningOutcome: 'Explain the posting of transactions into the various columns of the petty cash book through practice.',
          knowledge: [
            'Posting of transactions into columns of petty cash book'
          ]
        },
        {
          name: 'Trial Balance: Meaning and Functions',
          learningOutcome: 'Explain the meaning and functions of the trial balance and state the rule for posting items from the ledger to it. This topic continues into the following week on extraction and preparation.',
          knowledge: [
            'Meaning of trial balance',
            'Functions of trial balance',
            'Rule for posting items from ledger to trial balance'
          ]
        },
        {
          name: 'Trial Balance: Extraction and Preparation',
          learningOutcome: 'Extract balances from the ledger into the trial balance and prepare a trial balance.',
          knowledge: [
            'Extraction of balances from ledger to trial balance',
            'Preparation of trial balance'
          ]
        },
        {
          name: 'Corrections of Errors: Meaning and Types',
          learningOutcome: 'Explain the meaning of error, state the types of error, and identify errors that affect the trial balance. This topic continues into the following week on errors not affecting the trial balance.',
          knowledge: [
            'Meaning of error',
            'Types of error',
            'Errors affecting the trial balance'
          ]
        },
        {
          name: 'Corrections of Errors: Errors Not Affecting Trial Balance',
          learningOutcome: 'Identify errors that do not affect the trial balance and correct errors identified in the trial balance.',
          knowledge: [
            'Errors that do not affect trial balance',
            'Correcting errors identified in the trial balance'
          ]
        },
        {
          name: 'Trading Accounts: Identification and Terminology',
          learningOutcome: 'Identify the trading account, state its purpose, and explain terminologies used in its preparation such as cost of goods sold and cost of goods available for sale. This topic continues into the following week on format rules.',
          knowledge: [
            'Identification of trading account',
            'Purpose of trading account',
            'Terminologies: cost of goods sold, cost of goods available for sale, etc.'
          ]
        },
        {
          name: 'Trading Accounts: Format and Gross Profit',
          learningOutcome: 'State the rules for constructing a simple trading account in both vertical and horizontal format and determine gross profit.',
          knowledge: [
            'Rules and format for constructing simple trading account (vertical and horizontal)',
            'Determining gross profit'
          ]
        },
        {
          name: 'Profit and Loss Account: Definition and Purpose',
          learningOutcome: 'Define the profit and loss account, state its purpose, and explain the terminology used in its preparation. This topic continues into the following week on preparation rules.',
          knowledge: [
            'Definition of profit and loss account',
            'Purpose of profit and loss account',
            'Terminology used in preparation of profit and loss account'
          ]
        },
        {
          name: 'Profit and Loss Account: Preparation and Net Profit/Loss',
          learningOutcome: 'Outline the rules for preparing a simple profit and loss account in both vertical and horizontal format and determine net profit or loss.',
          knowledge: [
            'Rules for preparing simple profit and loss account (vertical and horizontal)',
            'Determining net profit or loss'
          ]
        },
        {
          name: 'Balance Sheet: Meaning and Content',
          learningOutcome: 'Explain the meaning of the balance sheet and state its content, with reference to both vertical and horizontal format. This topic continues into the following week on uses and preparation.',
          knowledge: [
            'Meaning of balance sheet',
            'Content of balance sheet (vertical and horizontal format)'
          ]
        },
        {
          name: 'Balance Sheet: Uses and Preparation',
          learningOutcome: 'State the uses of the balance sheet and prepare a simple balance sheet through practice.',
          knowledge: [
            'Uses of balance sheet',
            'Preparation of a simple balance sheet'
          ]
        }
      ]
    }
  ]
};
