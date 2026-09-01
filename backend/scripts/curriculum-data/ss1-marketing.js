// SS1 Marketing — First, Second & Third Term
// Source: SchemeofWork.com "Marketing Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/marketing-scheme-of-work-for-ss-1-federal/
// Source does not claim NESRI-2025 compliance (labeled "Senior Secondary Nigeria Syllabus.
// Federal Marketing Scheme of Work"); 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examination) excluded from all three terms.
// First Term weeks 1-4 ("Introduction to Marketing"), weeks 5-6 ("Marketing Concepts"), and
// weeks 9-11 ("Marketing Mix") each span multiple consecutive weeks on a shared topic under
// one set of objectives; Second Term weeks 6-8 ("Marketing Planning Process and Research");
// Third Term weeks 1-3 ("Advertising"), weeks 4-6 ("Promotion"), and weeks 7-9
// ("Merchandizing") likewise — kept as separate topics per week per the task's collapsing
// rule, with the shared relationship noted in each learningOutcome.

export const curriculumData = {
  subject: 'Marketing',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Marketing',
      topics: [
        // ---- First Term ----
        {
          name: 'Introduction to Marketing: Meaning',
          learningOutcome: 'Explain the meaning of marketing. This topic continues into the following three weeks on marketing terms, functions, and history.',
          knowledge: [
            'Meaning of marketing'
          ]
        },
        {
          name: 'Introduction to Marketing: Basic Terms',
          learningOutcome: 'Explain basic marketing terms including needs, wants, demands, products, exchange, and transactions, and describe markets and marketing management.',
          knowledge: [
            'Needs, wants, demands',
            'Products, exchange, transactions',
            'Markets and marketing management'
          ]
        },
        {
          name: 'Introduction to Marketing: Functions of the Marketing System',
          learningOutcome: 'Discuss the functions of the marketing system, including maximizing consumption, consumer satisfaction, choice, life quality, and profit.',
          knowledge: [
            'Maximize consumption',
            'Maximize consumer satisfaction',
            'Maximize choice',
            'Maximize life quality',
            'Maximize profit'
          ]
        },
        {
          name: 'Introduction to Marketing: History of Marketing in Nigeria',
          learningOutcome: 'Narrate briefly the history of marketing in Nigeria across the colonial age (100AD-1860), colonial era (1860-1960), and post-independence age (1960 to date).',
          knowledge: [
            'Colonial age: 100AD to 1860',
            'Colonial era: 1860 to 1960',
            'Post-independence age: 1960 to date'
          ]
        },
        {
          name: 'Marketing Concepts',
          learningOutcome: 'Discuss the concepts under which organizations conduct marketing activities, namely the production concept, the product concept, and the selling concept. This topic continues into the following week on further concepts.',
          knowledge: [
            'The production concept',
            'The product concept',
            'The selling concept'
          ]
        },
        {
          name: 'Marketing Concepts (Continued)',
          learningOutcome: 'Distinguish further concepts under which organizations conduct marketing activities, namely the societal marketing concept, consumer orientation, integrated organizational efforts, and profit orientation.',
          knowledge: [
            'The societal marketing concept',
            'The consumer orientation',
            'Integrated organizational efforts',
            'Profit orientation'
          ]
        },
        {
          name: 'Market Segmentation',
          learningOutcome: 'Explain the meaning of market segmentation and identify its bases, including geographical, socio-economic, psychographic, and behavioural characteristics.',
          knowledge: [
            'Meaning of market segmentation',
            'Basis of segmentation: geographical, socio-economic, psychographic, behavioural characteristics'
          ]
        },
        {
          name: 'Classification of Products',
          learningOutcome: 'Explain the meaning of a product, classify products into industrial goods and consumer goods, and differentiate between goods and services.',
          knowledge: [
            'Meaning of product',
            'Classification of product: industrial goods, consumer goods',
            'Differences between goods and services'
          ]
        },
        {
          name: 'Marketing Mix (4Ps): Explanation',
          learningOutcome: 'Explain the marketing mix and identify its four elements: product, price, place, and promotion. This topic continues into the following two weeks on the market environment.',
          knowledge: [
            'Explanation of marketing mix (4Ps)',
            'Product, Price, Place, Promotion'
          ]
        },
        {
          name: 'Marketing Mix (Continued): Market Environment',
          learningOutcome: 'Explain the market environment through a first-hand market visit.',
          knowledge: [
            'Explanation of the market environment'
          ]
        },
        {
          name: 'Marketing Mix (Continued): Factors Affecting Market Environment',
          learningOutcome: 'Differentiate between the factors affecting the market environment.',
          knowledge: [
            'Factors affecting market environment'
          ]
        },
        {
          name: 'What Markets Do: Actions Before Marketing',
          learningOutcome: 'Describe organizational actions that occur before marketing, such as mobilization of the workforce.',
          knowledge: [
            'Actions before marketing e.g. mobilization of workforce'
          ]
        },
        // ---- Second Term ----
        {
          name: 'What Markets Do: Explanation of Operations',
          learningOutcome: 'Explain the operations of organizations and individuals in marketing, including mobilization of force, utilization of feedback, production of quality goods and services, managing distribution networks, and advertisement and promotion.',
          knowledge: [
            'Mobilization of force',
            'Utilization of feedback',
            'Production of quality goods and services',
            'Managing distribution networks',
            'Advertisement and promotion'
          ]
        },
        {
          name: 'Types of Markets: Meaning',
          learningOutcome: 'Explain the meaning of a market and distinguish between organizational markets and consumer markets. This topic continues into the following week on types of organizational market.',
          knowledge: [
            'Meaning of market',
            'Organizational market',
            'Consumer market'
          ]
        },
        {
          name: 'Types of Markets (Continued): Organizational Market',
          learningOutcome: 'Identify the types of organizational market, namely industrial, reseller, and government markets, through a market visit.',
          knowledge: [
            'Industrial market',
            'Reseller market',
            'Government market'
          ]
        },
        {
          name: 'Consumer Behaviour and Organizational Behaviour',
          learningOutcome: 'Explain consumer behaviour and identify the factors influencing it, including cultural, social, personal, and psychological factors. This topic continues into the following week on the consumer decision process.',
          knowledge: [
            'Meaning of consumer behaviour',
            'Cultural factors, social factors, personal factors, psychological factors'
          ]
        },
        {
          name: 'Consumer Behaviour and Organizational Behaviour (Continued)',
          learningOutcome: 'List the stages in the consumer decision process (problem recognition, information search, evaluation of alternatives, purchase decision, post-purchase behaviour) and distinguish consumer behaviour from organizational buying behaviour.',
          knowledge: [
            'Consumer decision process: problem recognition, information search, evaluation of alternatives, purchase decision, post-purchase behaviour',
            'Distinguishing consumer behaviour from organizational buying behaviour'
          ]
        },
        {
          name: 'Marketing Planning Process and Research: Meaning',
          learningOutcome: 'Explain the meaning of the marketing planning process and its key elements. This topic continues over the following two weeks on importance, research, and information gathering.',
          knowledge: [
            'Meaning of marketing planning process',
            'Key elements in marketing planning'
          ]
        },
        {
          name: 'Marketing Planning Process and Research: Importance',
          learningOutcome: 'Discuss the importance of marketing planning and describe marketing research.',
          knowledge: [
            'Importance of marketing plan',
            'Marketing research'
          ]
        },
        {
          name: 'Marketing Planning Process and Research: Gathering Information',
          learningOutcome: 'State the reasons for marketing research and demonstrate how to collect information for marketing planning.',
          knowledge: [
            'Reasons for marketing research',
            'Getting information for planning: opinion polls, books, internet, TV surveys, questionnaires'
          ]
        },
        {
          name: 'Pricing',
          learningOutcome: 'Define pricing, discuss pricing strategies such as haggling and cost-plus pricing, and identify price determinants including ability to pay, competition, and profit maximization.',
          knowledge: [
            'Definition of pricing',
            'Pricing strategies: haggling, cost-plus, etc.',
            'Price determinants: ability to pay, competition, profit maximization'
          ]
        },
        {
          name: 'Advertising: Roles',
          learningOutcome: 'Explain the concept of advertising and discuss its roles.',
          knowledge: [
            'Meaning of advertising',
            'Roles of advertising'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Advertising: Media',
          learningOutcome: 'Identify the media used in advertising, namely print and electronic media. This topic continues into the following two weeks on the advantages and disadvantages of each medium.',
          knowledge: [
            'Advertising media: print, electronics'
          ]
        },
        {
          name: 'Advertising (Continued): Electronic Media',
          learningOutcome: 'Discuss the advantages and disadvantages of electronic advertising media.',
          knowledge: [
            'Advantages and disadvantages of electronic media'
          ]
        },
        {
          name: 'Advertising (Continued): Print Media',
          learningOutcome: 'Discuss the advantages and disadvantages of print advertising media and produce a sample advert for placement.',
          knowledge: [
            'Advantages and disadvantages of print media',
            'Producing an advert for placement'
          ]
        },
        {
          name: 'Promotion: Meaning and Forms',
          learningOutcome: 'Explain the meaning of promotion and identify forms of promotion such as price-off, coupons, salesman competitions, and loyalty schemes. This topic continues into the following two weeks on further forms and functions.',
          knowledge: [
            'Meaning of promotion',
            'Forms of promotion: pricing-off, coupon, salesman competition, loyalty scheme'
          ]
        },
        {
          name: 'Promotion (Continued): Further Forms',
          learningOutcome: 'Identify additional forms of promotion including premium offers, word of mouth, trade-in allowance, sampling, merchandising incentives, and training schemes.',
          knowledge: [
            'Premium offers, word of mouth, trade-in allowance',
            'Sampling, merchandising incentives, training schemes'
          ]
        },
        {
          name: 'Promotion (Continued): Functions',
          learningOutcome: 'Discuss the functions of promotion.',
          knowledge: [
            'Functions of promotion'
          ]
        },
        {
          name: 'Merchandizing: Meaning and Features',
          learningOutcome: 'Explain the meaning of merchandising and identify its features, including packaging, branding, and labeling. This topic continues into the following two weeks on conditions and functions.',
          knowledge: [
            'Meaning of merchandising',
            'Features of merchandising: packaging, branding, labeling'
          ]
        },
        {
          name: 'Merchandizing: Conditions',
          learningOutcome: 'Identify the conditions affecting merchandising, such as warehousing cost, cost resulting from reduction in inventory value, and transportation cost.',
          knowledge: [
            'Warehousing cost',
            'Cost resulting from reduction in inventory value',
            'Transportation cost'
          ]
        },
        {
          name: 'Merchandizing (Continued): Functions',
          learningOutcome: 'Discuss the functions of merchandising, including scrambled merchandising, and produce, package, brand, and label a product.',
          knowledge: [
            'Functions of merchandising: scrambled merchandising',
            'Producing, packaging, branding and labeling a product'
          ]
        },
        {
          name: 'Types and Functions of Distribution',
          learningOutcome: 'Explain distribution and identify its types and channels.',
          knowledge: [
            'Meaning of distribution',
            'Types of distribution',
            'Channels of distribution'
          ]
        },
        {
          name: 'Consumer Behaviour: Factors Influencing Purchase Decisions',
          learningOutcome: 'Discuss the factors that influence consumer behaviour, including cultural, social, personal, and psychological factors.',
          knowledge: [
            'Cultural factors',
            'Social factors',
            'Personal factors',
            'Psychological factors'
          ]
        }
      ]
    }
  ]
};
