// SS2 Further Mathematics — First, Second, and Third Term
// Source: schemeofwork.com "Further Maths Scheme of Work for SS2 Federal"
// URL: https://schemeofwork.com/further-maths-scheme-of-work-for-ss2-federal/
// This source does not claim compliance with the new NERDC/NESRI (Sept 2025) curriculum reform,
// so it is tagged as 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revisions, Examinations) are excluded.
// Where several consecutive weeks share one broad topic umbrella (e.g. "Polynomials",
// "Differentiation", "Dynamics"), each week is kept as its own topic per the sourcing rules,
// with the shared-umbrella relationship noted in the learningOutcome text.

export const curriculumData = {
  subject: 'Further Mathematics',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Further Mathematics',
      topics: [
        // ---- First Term ----
        {
          name: 'Roots of Quadratic Equations I',
          learningOutcome: 'Find the sum and product of the roots of a quadratic equation, form a quadratic equation given the sum and product of its roots, and state the conditions for a quadratic equation to have equal, real, or complex (no real) roots.',
          knowledge: [
            'Sum and product of roots of a quadratic equation',
            'Forming a quadratic equation given the sum and product of its roots',
            'Condition for equal roots (b^2 = 4ac)',
            'Condition for real roots (b^2 > 4ac)',
            'Condition for no real (complex) roots (b^2 < 4ac)'
          ]
        },
        {
          name: 'Roots of Quadratic Equations II',
          learningOutcome: 'Apply the conditions under which a given line intersects, is tangent to, or does not intersect a curve, and solve further problems on roots of quadratic equations.',
          knowledge: [
            'Conditions for a given line to intersect a curve',
            'Conditions for a given line to be tangent to a curve',
            'Conditions for a given line not to intersect a curve',
            'Solving problems on roots of quadratic equations'
          ]
        },
        {
          name: 'Polynomials I: Definition and Operations',
          learningOutcome: 'Define a polynomial, perform addition, subtraction, and multiplication of polynomials, and divide a polynomial by a polynomial of lesser degree. This is the first of three linked weeks on polynomials.',
          knowledge: [
            'Definition of a polynomial',
            'Addition of polynomials',
            'Subtraction of polynomials',
            'Multiplication of polynomials',
            'Division of a polynomial by a polynomial of lesser degree'
          ]
        },
        {
          name: 'Polynomials II: Remainder and Factor Theorem',
          learningOutcome: 'Apply the remainder theorem and factor theorem to find remainders and factorize polynomials. Second of three linked weeks on polynomials.',
          knowledge: [
            'Remainder theorem',
            'Factor theorem',
            'Factorization of polynomials'
          ]
        },
        {
          name: 'Polynomials III: Roots of Cubic Equations',
          learningOutcome: 'Determine the sum of roots, sum of products of pairs of roots, and product of roots of a cubic equation ax^3+bx^2+cx+d=0. Third of three linked weeks on polynomials.',
          knowledge: [
            'Sum of roots of a cubic equation: alpha+beta+gamma = -b/a',
            'Sum of products of two roots: alpha*beta + alpha*gamma + beta*gamma = c/a',
            'Product of roots: alpha*beta*gamma = -d/a',
            'Solving problems on roots of a cubic equation'
          ]
        },
        {
          name: 'Probability I',
          learningOutcome: 'Explain the classical, frequential, and axiomatic approaches to probability, and identify sample space and event space. First of two linked weeks on probability.',
          knowledge: [
            'Classical approach to probability',
            'Frequential approach to probability',
            'Axiomatic approach to probability',
            'Sample space and event space',
            'Mutually exclusive, independent, and conditional events'
          ]
        },
        {
          name: 'Probability II: Conditional Probability',
          learningOutcome: 'Solve problems on conditional probability and construct and use probability trees. Second of two linked weeks on probability.',
          knowledge: [
            'Conditional probability',
            'Probability trees'
          ]
        },
        {
          name: 'Vectors in Three Dimensions I: Scalar Product',
          learningOutcome: 'Compute the scalar (dot) product of vectors in three dimensions and apply it to solve problems. First of two linked weeks on three-dimensional vectors.',
          knowledge: [
            'Scalar product of vectors in three dimensions',
            'Application of scalar product'
          ]
        },
        {
          name: 'Vectors in Three Dimensions II: Cross Product',
          learningOutcome: 'Compute the vector (cross) product of vectors in three dimensions and apply it to solve problems. Second of two linked weeks on three-dimensional vectors.',
          knowledge: [
            'Vector (cross) product of vectors in three dimensions',
            'Application of cross product'
          ]
        },
        {
          name: 'Logical Reasoning I',
          learningOutcome: 'Identify the fundamental issues and definitions involved in intelligent systems and describe how the world is modelled logically. First of two linked weeks on logical reasoning.',
          knowledge: [
            'Fundamental issues in intelligent systems',
            'Fundamental definitions',
            'Modelling the world'
          ]
        },
        {
          name: 'Logical Reasoning II: Propositional and Predicate Logic',
          learningOutcome: 'Explain propositional and predicate logical resolution and describe the basics of theorem proving. Second of two linked weeks on logical reasoning.',
          knowledge: [
            'Introduction to propositional logical resolution',
            'Introduction to predicate logical resolution',
            'Introduction to theorem proving'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Differentiation I: Limits and First Principles',
          learningOutcome: 'Evaluate the limit of a function at a given value and differentiate polynomials from first principles. First of five linked weeks on differentiation.',
          knowledge: [
            'Limits of a function',
            'Differentiation from first principle',
            'Differentiation of polynomials'
          ]
        },
        {
          name: 'Differentiation II: Transcendental Functions',
          learningOutcome: 'Differentiate transcendental functions such as sin x, e^ax, and log 3x. Second of five linked weeks on differentiation.',
          knowledge: [
            'Differentiation of transcendental functions (e.g. sin x, e^ax, log 3x)'
          ]
        },
        {
          name: 'Differentiation III: Product, Quotient, and Function of a Function Rules',
          learningOutcome: 'Apply the product rule, quotient rule, and function-of-a-function (chain) rule of differentiation. Third of five linked weeks on differentiation.',
          knowledge: [
            'Rules of differentiation',
            'Product rule',
            'Quotient rule',
            'Function of a function (chain rule)'
          ]
        },
        {
          name: 'Differentiation IV: Applications',
          learningOutcome: 'Apply differentiation to find rate of change, gradient of a function, maximum and minimum values (optimization), and equations of motion. Fourth of five linked weeks on differentiation.',
          knowledge: [
            'Rate of change',
            'Gradient of a function',
            'Maximum and minimum values (optimization)',
            'Equation of motion'
          ]
        },
        {
          name: 'Differentiation V: Higher Derivatives and Implicit Functions',
          learningOutcome: 'Find higher derivatives of a function and differentiate implicit functions. Fifth of five linked weeks on differentiation.',
          knowledge: [
            'Higher derivatives',
            'Differentiation of implicit functions'
          ]
        },
        {
          name: 'Binomial Expansion I: Pascal’s Triangle',
          learningOutcome: 'Construct the Pascal’s triangle and use it to write the binomial expansion of (a+b)^n for positive integer, negative integer, or fractional values of n. First of two linked weeks on binomial expansion.',
          knowledge: [
            'Pascal’s triangle',
            'Binomial expansion of (a+b)^n for positive integer n',
            'Binomial expansion of (a+b)^n for negative integer n',
            'Binomial expansion of (a+b)^n for fractional n'
          ]
        },
        {
          name: 'Binomial Expansion II: nth Term and Applications',
          learningOutcome: 'Find the nth term of a binomial expansion and apply binomial expansion to positive, negative, and fractional powers. Second of two linked weeks on binomial expansion.',
          knowledge: [
            'Finding the nth term of a binomial expansion',
            'Application of binomial expansion',
            'Extension to negative and fractional powers'
          ]
        },
        {
          name: 'Conic Sections: The Circle I',
          learningOutcome: 'Define a circle as a conic section and find the equation of a circle given its centre and radius. First of three linked weeks on the circle as a conic section.',
          knowledge: [
            'Definition of a circle as a conic section',
            'Equation of a circle given centre and radius'
          ]
        },
        {
          name: 'Conic Sections: The Circle II',
          learningOutcome: 'Determine the general equation of a circle, find its centre and radius, find the equation of a circle given the endpoints of a diameter, and find the equation of a circle passing through three points. Second of three linked weeks on the circle as a conic section.',
          knowledge: [
            'General equation of a circle',
            'Finding centre and radius of a given circle',
            'Equation of a circle given the endpoints of a diameter',
            'Equation of a circle passing through three points'
          ]
        },
        {
          name: 'Conic Sections: The Circle III',
          learningOutcome: 'Find the equation of a tangent to a circle and the length of a tangent to a circle. Third of three linked weeks on the circle as a conic section.',
          knowledge: [
            'Equation of a tangent to a circle',
            'Length of a tangent to a circle'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Trigonometric Functions I',
          learningOutcome: 'Identify the six trigonometric functions (sine, cosine, tangent, secant, cosecant, cotangent) of angles of any magnitude, state their range and domain, and sketch their graphs with emphasis on amplitude and periodicity. First of three linked weeks on trigonometric functions.',
          knowledge: [
            'Six trigonometric functions of angles of any magnitude',
            'Range and domain of trigonometric functions',
            'Graphs of trigonometric ratios: amplitude and periodicity'
          ]
        },
        {
          name: 'Trigonometric Functions II: Graph Relationships and Inverses',
          learningOutcome: 'Explain the relationship between graphs of trigonometric ratios (e.g. sin x and sin 2x), sketch graphs such as y = a sin(bx) + c, and sketch graphs of inverse trigonometric ratios. Second of three linked weeks on trigonometric functions.',
          knowledge: [
            'Relationship between graphs of trigonometric ratios (e.g. sin x and sin 2x)',
            'Graphs of y = a sin(bx) + c, y = a cos(bx) + c, y = a tan(bx) + c',
            'Graphs of inverse trigonometric ratios'
          ]
        },
        {
          name: 'Trigonometric Functions III: Equations and Identities',
          learningOutcome: 'Solve simple equations involving the six trigonometric functions and prove simple trigonometric identities such as sin^2 x + cos^2 x = 1 and sec^2 x = 1 + tan^2 x. Third of three linked weeks on trigonometric functions.',
          knowledge: [
            'Solution of simple equations involving trigonometric functions',
            'Proof of trigonometric identities (e.g. sin^2 x + cos^2 x = 1, sec^2 x = 1 + tan^2 x)'
          ]
        },
        {
          name: 'Permutations and Combinations I',
          learningOutcome: 'Solve problems on permutation, cyclic permutation, and arrangement of identical objects. First of two linked weeks on permutations and combinations.',
          knowledge: [
            'Permutation (arrangement)',
            'Cyclic permutation',
            'Arrangement of identical objects'
          ]
        },
        {
          name: 'Permutations and Combinations II: Repetitions and Combination',
          learningOutcome: 'Solve problems on arrangements where repetitions are allowed and apply combination (selection), including conditional arrangement/selection and probability problems involving arrangement and selection. Second of two linked weeks on permutations and combinations.',
          knowledge: [
            'Arrangements in which repetitions are allowed',
            'Introduction to combination (selection)',
            'Conditional arrangements and selection',
            'Probability problems involving arrangement and selection'
          ]
        },
        {
          name: 'Dynamics I: Newton’s Laws of Motion',
          learningOutcome: 'State Newton’s laws of motion and apply them to solve problems, including motion along an inclined plane. First of three linked weeks on dynamics.',
          knowledge: [
            'Newton’s laws of motion',
            'Motion along an inclined plane'
          ]
        },
        {
          name: 'Dynamics II: Connected Particles, Work, Energy, and Momentum',
          learningOutcome: 'Solve problems involving the motion of connected particles, work, energy and power, and impulse and momentum. Second of three linked weeks on dynamics.',
          knowledge: [
            'Motion of connected particles',
            'Work, energy, and power',
            'Impulse and momentum'
          ]
        },
        {
          name: 'Dynamics III: Projectiles',
          learningOutcome: 'Solve problems on projectiles, trajectory of projectiles, and projection along an inclined plane. Third of three linked weeks on dynamics.',
          knowledge: [
            'Projectiles',
            'Trajectory of projectiles',
            'Projection along an inclined plane'
          ]
        },
        {
          name: 'Inventory Model',
          learningOutcome: 'Explain the concept of inventory, define key inventory terms, and compute the economic order quantity (EOQ) using holding and ordering costs.',
          knowledge: [
            'Concept of inventory',
            'Definitions of important terms in inventory',
            'Holding list',
            'Ordering list',
            'Computation of optimal (economic) order quantity (EOQ model)'
          ]
        },
        {
          name: 'Replacement Model',
          learningOutcome: 'Explain the concept of replacement and distinguish between individual replacement of items that fail suddenly and replacement of items that wear out gradually.',
          knowledge: [
            'Concept of replacement',
            'Individual replacement of sudden-failure items',
            'Replacement of items that wear out gradually'
          ]
        }
      ]
    }
  ]
};
