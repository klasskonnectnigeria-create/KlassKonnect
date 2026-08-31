// SS1 Further Mathematics — First, Second, and Third Term
// Source: SchemeofWork.com "Further Maths Scheme of Work for SS1 Federal"
// URL: https://schemeofwork.com/further-maths-scheme-of-work-for-ss1-federal/
// This source does not claim NESRI 2025 compliance — it is the standard Federal (ERC FCT Teaching Scheme) scheme of work.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examinations) are excluded.

export const curriculumData = {
  subject: 'Further Mathematics',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Further Mathematics',
      topics: [
        // ===== FIRST TERM =====
        {
          name: 'Set I',
          learningOutcome: 'Students should be able to define a set, use different notation methods to represent sets, and identify types of sets.',
          knowledge: [
            'Definition of set and set notation methods',
            'Types of set: null set, singleton, finite, infinite, universal, power set',
            'Number of elements in a set'
          ]
        },
        {
          name: 'Set II',
          learningOutcome: 'Students should be able to perform set operations and use Venn diagrams to solve problems involving up to three sets.',
          knowledge: [
            'Set operations: union, intersection',
            'Venn diagrams and applications up to 3-set problems'
          ]
        },
        {
          name: 'Indices',
          learningOutcome: 'Students should be able to apply the laws of indices to simplify expressions and solve indicial equations.',
          knowledge: [
            'Laws of indices',
            'Application of indices',
            'Indicial equations'
          ]
        },
        {
          name: 'Logarithms',
          learningOutcome: 'Students should be able to apply the laws of logarithms and change the base of a logarithm.',
          knowledge: [
            'Laws of logarithms',
            'Change of base of logarithms'
          ]
        },
        {
          name: 'Coordinate Geometry (The Straight Line I)',
          learningOutcome: 'Students should be able to find the midpoint of a line segment, the gradient of a straight line, and the distance between two points.',
          knowledge: [
            'Midpoint of a line segment',
            'Gradient of a straight line',
            'Distance between two points'
          ]
        },
        {
          name: 'Coordinate Geometry (The Straight Line II)',
          learningOutcome: 'Students should be able to determine the conditions for parallelism and perpendicularity of lines and derive the equation of a line in different forms.',
          knowledge: [
            'Conditions for parallelism and perpendicularity',
            'Equation of a line'
          ]
        },
        {
          name: 'Coordinate Geometry (The Straight Line III)',
          learningOutcome: 'Students should be able to transform non-linear relationships into linear form and calculate the areas of triangles and quadrilaterals from coordinates.',
          knowledge: [
            'Transforming non-linear relationships into linear form',
            'Areas of triangles and quadrilaterals'
          ]
        },
        {
          name: 'Surds',
          learningOutcome: 'Students should be able to define surds, apply rules for manipulating surds, and rationalize the denominators of surd expressions.',
          knowledge: [
            'Definition of surds',
            'Rules for manipulating surds',
            'Rationalization of the denominators of surds'
          ]
        },
        {
          name: 'Trigonometric Ratios of Special Angles',
          learningOutcome: 'Students should be able to derive and apply the trigonometric ratios of 30°, 45°, and 60° to solve problems without the use of tables.',
          knowledge: [
            'Trigonometric ratios of 30°, 45°, and 60°',
            'Application of these ratios to solve problems without tables'
          ]
        },
        {
          name: 'Logical Reasoning I',
          learningOutcome: 'Students should be able to construct truth tables and apply logical connectives to solve practical problems.',
          knowledge: [
            'The truth table',
            'Using p or q, p and q (p∨q; p∧q)',
            'p⇒q, p⇔q',
            'Rules of syntax and simple true or false statements'
          ]
        },
        {
          name: 'Logical Reasoning II',
          learningOutcome: 'Students should be able to apply the rules of logic to arguments and use implication and deduction to solve problems.',
          knowledge: [
            'Rules of logic application to argument',
            'Implication and deduction'
          ]
        },
        // ===== SECOND TERM =====
        {
          name: 'Sequences and Series I',
          learningOutcome: 'Students should be able to define sequences and series, find the nth term, and solve problems involving arithmetic progression.',
          knowledge: [
            'Definition of sequences and series',
            'The nth term of a sequence and series',
            'Arithmetic progression (AP)'
          ]
        },
        {
          name: 'Sequences and Series II',
          learningOutcome: 'Students should be able to work with geometric progression and solve problems involving both AP and GP, including convergent and divergent series.',
          knowledge: [
            'Geometric progression (GP)',
            'Solving problems on AP and GP',
            'Convergent and divergent geometric progressions, sum to infinity'
          ]
        },
        {
          name: 'Functions I',
          learningOutcome: 'Students should be able to define a function and identify its various types.',
          knowledge: [
            'Definition of a function',
            'Types of function: one-to-one, onto, inverse, identity, constant, circular'
          ]
        },
        {
          name: 'Functions II',
          learningOutcome: 'Students should be able to work with logarithmic and exponential functions and apply function concepts to solve problems.',
          knowledge: [
            'Logarithmic function',
            'Exponential functions',
            'Application of functions and solutions to problems on functions'
          ]
        },
        {
          name: 'Vectors in Two Dimensions I',
          learningOutcome: 'Students should be able to identify scalars and vectors and perform basic vector operations.',
          knowledge: [
            'Scalars and vectors — zero vectors, negative vectors',
            'Vector addition and subtraction',
            'Scalar multiplication of vectors',
            'Magnitude and direction of vectors, unit vector'
          ]
        },
        {
          name: 'Vectors in Two Dimensions II',
          learningOutcome: 'Students should be able to apply the triangle and parallelogram laws of vectors and resolve vectors in given directions.',
          knowledge: [
            'Triangle law of vectors',
            'Parallelogram law of vectors',
            'Resolution of vectors'
          ]
        },
        {
          name: 'Vectors in Two Dimensions III',
          learningOutcome: 'Students should be able to define and apply the scalar (dot) product of vectors in geometry and trigonometry.',
          knowledge: [
            'Scalar (dot) product',
            'Application of scalar (dot) product'
          ]
        },
        {
          name: 'Measure of Location I',
          learningOutcome: 'Students should be able to determine the mean, mode, and median of grouped data.',
          knowledge: [
            'Mean, mode, median (for grouped data)'
          ]
        },
        {
          name: 'Measure of Location II',
          learningOutcome: 'Students should be able to determine the decile, percentile, and quartile of a set of data.',
          knowledge: [
            'Decile',
            'Percentile',
            'Quartile'
          ]
        },
        {
          name: 'Measure of Dispersion I',
          learningOutcome: 'Students should be able to determine the range and inter-quartile range of a set of data.',
          knowledge: [
            'Range',
            'Inter-quartiles'
          ]
        },
        {
          name: 'Measure of Dispersion II',
          learningOutcome: 'Students should be able to determine the mean deviation, standard deviation, and coefficient of variation of a set of data.',
          knowledge: [
            'Mean deviation',
            'Standard deviation',
            'Coefficient of variation'
          ]
        },
        // ===== THIRD TERM =====
        {
          name: 'Linear Inequalities I',
          learningOutcome: 'Students should be able to solve linear inequalities in one and two variables.',
          knowledge: [
            'Linear inequalities in one variable',
            'Linear inequalities in two variables'
          ]
        },
        {
          name: 'Linear Inequalities II',
          learningOutcome: 'Students should be able to graph linear inequalities in two variables and identify the region that satisfies given inequalities.',
          knowledge: [
            'Graphs of linear inequalities in two variables',
            'Region that satisfies linear inequalities'
          ]
        },
        {
          name: 'Calculating and Processing Devices I',
          learningOutcome: 'Students should be able to use calculating devices such as the abacus and solve problems on the decimal and binary number systems.',
          knowledge: [
            'Abacus',
            'Decimal and binary systems'
          ]
        },
        {
          name: 'Calculating and Processing Devices II',
          learningOutcome: 'Students should be able to draw and apply flow charts.',
          knowledge: [
            'Flow charts',
            'Application of flow charts'
          ]
        },
        {
          name: 'Operations Research',
          learningOutcome: 'Students should be able to define operations research and describe its history and nature.',
          knowledge: [
            'Definition of operations research',
            'History and nature of operations research'
          ]
        },
        {
          name: 'Models I',
          learningOutcome: 'Students should be able to distinguish between the models used in operations research, including linear programming, transportation, and assignment models.',
          knowledge: [
            'Models of operations research',
            'Linear programming models',
            'Transportation models',
            'Assignment models'
          ]
        },
        {
          name: 'Models II',
          learningOutcome: 'Students should be able to apply operations research models to solve practical problems.',
          knowledge: [
            'Practical application of models of operations research'
          ]
        },
        {
          name: 'Binary Operations I',
          learningOutcome: 'Students should be able to define binary operations on sets and apply the associative, commutative, and distributive laws.',
          knowledge: [
            'Definition of binary operation',
            'Laws of binary operation: associative, commutative, distributive'
          ]
        },
        {
          name: 'Binary Operations II',
          learningOutcome: 'Students should be able to apply the laws of complementation, and identify identity elements and inverses of elements under binary operations.',
          knowledge: [
            'Laws of complementation as in sets',
            'Identity elements',
            'Inverse of an element'
          ]
        },
        {
          name: 'Binary Operations III',
          learningOutcome: 'Students should be able to construct multiplication tables for given binary operations on sets.',
          knowledge: [
            'Multiplication tables of binary operations'
          ]
        }
      ]
    }
  ]
};
