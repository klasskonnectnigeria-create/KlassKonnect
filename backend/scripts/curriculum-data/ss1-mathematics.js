// SS1 Mathematics — First, Second, and Third Term
// Source: SchemeofWork.com "Mathematics Scheme of work for SS 1 Federal"
// URL: https://schemeofwork.com/mathematics-scheme-of-work-for-ss-1-federal/
// This source does not claim NESRI 2025 compliance — it is the standard Federal scheme of work.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examination) are excluded.

export const curriculumData = {
  subject: 'Mathematics',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Mathematics',
      topics: [
        // ===== FIRST TERM =====
        {
          name: 'Number Bases (I)',
          learningOutcome: 'Students should be able to identify number bases other than base 10 and convert numbers between bases.',
          knowledge: [
            'Decimal base (base 10) and other bases — e.g. base 2 (binary), base 7 (days of the week)',
            'Conversion from base 10 to other bases and from other bases to base 10'
          ]
        },
        {
          name: 'Number Bases (II)',
          learningOutcome: 'Students should be able to perform arithmetic operations in various number bases and apply base systems to computing.',
          knowledge: [
            'Addition, subtraction, multiplication, and division of numbers in various bases',
            'Conversion of decimal fractions in one base to base 10',
            'Application of number base system to computer programming'
          ]
        },
        {
          name: 'Modular Arithmetic',
          learningOutcome: 'Students should be able to define modular arithmetic, perform its operations, and apply it to real-life situations.',
          knowledge: [
            'Revision of addition, subtraction, multiplication, and division of integers',
            'Concept of modular arithmetic',
            'Addition, subtraction, and multiplication in modular arithmetic',
            'Application to real-life situations — shift duty, menstrual chart, market days'
          ]
        },
        {
          name: 'Indices',
          learningOutcome: 'Students should be able to apply the laws of indices and solve simple indicial equations.',
          knowledge: [
            'Laws of indices and their applications',
            'Application of indices to simple indicial/exponential equations'
          ]
        },
        {
          name: 'Standard Form (A × 10ⁿ)',
          learningOutcome: 'Students should be able to convert numbers to and from standard form and perform arithmetic on numbers in standard form.',
          knowledge: [
            'Writing numbers in index form',
            'Adding, subtracting, multiplying, and dividing numbers in standard form',
            'Square roots of numbers in standard form'
          ]
        },
        {
          name: 'Logarithms (I)',
          learningOutcome: 'Students should be able to deduce logarithms from indices, define logarithm, and plot the graph of y = 10ˣ.',
          knowledge: [
            'Deducing logarithm from indices and standard form',
            'Definition of logarithm',
            'Graph of y = 10ˣ'
          ]
        },
        {
          name: 'Logarithms (II)',
          learningOutcome: 'Students should be able to use logarithm and antilogarithm tables for multiplication and division.',
          knowledge: [
            'Calculations involving multiplication and division using logarithm tables'
          ]
        },
        {
          name: 'Logarithms (III)',
          learningOutcome: 'Students should be able to use logarithm tables for powers and roots and apply them to real-life and capital market problems.',
          knowledge: [
            'Calculations involving powers and roots using logarithm tables',
            'Solving practical problems using logarithm tables relating to the capital market',
            'Concept of capital market operation'
          ]
        },
        {
          name: 'Definition of Sets',
          learningOutcome: 'Students should be able to define sets, use set notation, and identify types of sets.',
          knowledge: [
            'Set notation — listing/roster method, rule method, set builder notation',
            'Types of sets — universal, empty, finite, infinite, subset, disjoint, power set'
          ]
        },
        {
          name: 'Set Operations',
          learningOutcome: 'Students should be able to carry out set operations and apply Venn diagrams to real-life problems.',
          knowledge: [
            'Union, intersection, and complement of sets',
            'Venn diagrams — drawing, interpretation, and application up to 3 sets'
          ]
        },
        {
          name: 'Simple Equations',
          learningOutcome: 'Students should be able to change the subject of a formula and carry out substitution.',
          knowledge: [
            'Change of subject of formulae',
            'Formulae involving brackets, roots, and powers',
            'Subject of formula and substitution'
          ]
        },
        {
          name: 'Simple Equations and Variations',
          learningOutcome: 'Students should be able to solve simultaneous linear equations and problems involving all types of variation.',
          knowledge: [
            'Revision of simultaneous linear equations in two unknowns',
            'Types and application of variation'
          ]
        },
        // ===== SECOND TERM =====
        {
          name: 'Factorisation of Quadratic Expressions',
          learningOutcome: 'Students should be able to factorize quadratic expressions of various forms and solve quadratic equations by factorization.',
          knowledge: [
            'Factorising ax² + bx + c, ax² − bx + c, ax² + bx − c, ax² − bx − c',
            'Solving quadratic equations of the form ax² + bx + c = 0 using factorization'
          ]
        },
        {
          name: 'Approximation',
          learningOutcome: 'Students should be able to round numbers to significant figures and decimal places and calculate percentage error.',
          knowledge: [
            'Rounding up and down to significant figures, decimal places, and nearest whole numbers',
            'Application of approximation to everyday life',
            'Percentage error'
          ]
        },
        {
          name: 'Quadratic Equations (III) — Graphical Solutions',
          learningOutcome: 'Students should be able to plot quadratic and linear graphs and use them to solve equations.',
          knowledge: [
            'Plotting graphs of quadratic and linear functions',
            'Using a plotted curve to find solutions of equations',
            'Finding gradient, maximum, and minimum values of a curve',
            'Solving quadratic and linear equations graphically',
            'Word problems leading to quadratic equations'
          ]
        },
        {
          name: 'Logical Reasoning (I)',
          learningOutcome: 'Students should be able to identify simple and compound statements and negate simple statements.',
          knowledge: [
            'Meaning of simple statement — open/closed, true/false',
            'Negation of simple statements',
            'Compound statements — conjunction, disjunction, implication, bi-implication'
          ]
        },
        {
          name: 'Logical Reasoning (II)',
          learningOutcome: 'Students should be able to identify logical operations, their symbols, and construct truth value tables.',
          knowledge: [
            'Logical operations and symbols',
            'Truth value tables for compound statements, negation, conditional, and biconditional statements'
          ]
        },
        {
          name: 'Mensuration of Solid Shapes (I) — Arcs and Sectors',
          learningOutcome: 'Students should be able to find the length of arcs and the area of sectors and segments.',
          knowledge: [
            'Length of arc of a circle — practical demonstration and formula',
            'Revision of plane shapes — perimeter of sector and segment',
            'Area of sector and segment'
          ]
        },
        {
          name: 'Mensuration of Solid Shapes (II) — Surface Area',
          learningOutcome: 'Students should be able to relate sectors to cones and find the surface area of common solids.',
          knowledge: [
            'Relationship between the sector of a circle and the surface area of a cone',
            'Surface area of solids — cube, cuboid, cylinder, cone, prism, pyramid'
          ]
        },
        {
          name: 'Mensuration of Solid Shapes (III) — Volume',
          learningOutcome: 'Students should be able to find the volume of common solids and compound shapes.',
          knowledge: [
            'Volume of solids — cube, cuboid, cylinder, cone, prism, pyramid, frustum of cone and pyramid',
            'Surface area and volume of compound shapes'
          ]
        },
        {
          name: 'Construction (I)',
          learningOutcome: 'Students should be able to construct and bisect lines and angles, and construct triangles and quadrilaterals.',
          knowledge: [
            'Lines, line segments, and bisection of a line segment',
            'Construction and bisection of angles',
            'Construction of triangles',
            'Construction of quadrilaterals'
          ]
        },
        {
          name: 'Locus of Moving Points',
          learningOutcome: 'Students should be able to construct the locus of points equidistant from lines and points.',
          knowledge: [
            'Locus equidistant from two intersecting straight lines',
            'Locus equidistant from two points',
            'Locus equidistant from a fixed point',
            'Construction of locus equidistant from a given straight line'
          ]
        },
        // ===== THIRD TERM =====
        {
          name: 'Deductive Proofs (I) — Triangle Properties',
          learningOutcome: 'Students should be able to prove that the sum of angles in a triangle is 180° and the exterior angle theorem.',
          knowledge: [
            'Types and properties of triangles',
            'Proof that the sum of angles in a triangle is 180°',
            'Proof that the exterior angle equals the sum of the two interior opposite angles'
          ]
        },
        {
          name: 'Deductive Proofs (II) — Similar and Congruent Triangles',
          learningOutcome: 'Students should be able to prove properties of similar, congruent, isosceles, and equilateral triangles.',
          knowledge: [
            'Similar and congruent triangles',
            'Isosceles and equilateral triangles'
          ]
        },
        {
          name: 'Deductive Proofs (III) — Parallelograms',
          learningOutcome: 'Students should be able to prove properties of parallelograms and apply the intercept theorem.',
          knowledge: [
            'Properties of parallelograms and related quadrilaterals',
            'Intercept theorem',
            'Parallelograms on the same base and between the same parallels are equal in area'
          ]
        },
        {
          name: 'Polygon Types',
          learningOutcome: 'Students should be able to calculate the sum of interior and exterior angles of any polygon.',
          knowledge: [
            'Sum of interior angles of any n-sided polygon',
            'Sum of exterior angles of any polygon',
            'Problem solving on polygons'
          ]
        },
        {
          name: 'Trigonometry (I) — Basic Ratios',
          learningOutcome: 'Students should be able to derive and apply trigonometric ratios of 30°, 45°, and 60°.',
          knowledge: [
            'Basic trigonometric ratios — sine, cosine, tangent of right-angled triangles',
            'Trigonometric ratios of special angles 30°, 45°, 60°',
            'Deriving trigonometric ratios of 30°, 45°, 60°'
          ]
        },
        {
          name: 'Trigonometry (II) — Problem Solving',
          learningOutcome: 'Students should be able to solve problems involving sine, cosine, and tangent without calculating aids.',
          knowledge: [
            'Solving problems using sine, cosine, and tangent of right-angled triangles',
            'Application of trigonometric ratios of 45°, 30°, 60° without calculating aids'
          ]
        },
        {
          name: 'Trigonometry (III) — Graphs of Sine and Cosine',
          learningOutcome: 'Students should be able to draw graphs of sine and cosine for 0° to 360°.',
          knowledge: [
            'Trigonometric ratios related to the unit circle',
            'Graph of sine from 0° to 360°',
            'Graph of cosine from 0° to 360°'
          ]
        },
        {
          name: 'Statistics — Data Collection and Presentation',
          learningOutcome: 'Students should be able to construct frequency tables and distinguish bar charts from histograms.',
          knowledge: [
            'Revision of collection, tabulation, and presentation of data',
            'Construction of frequency tables',
            'Bar charts and histograms — differences between them'
          ]
        },
        {
          name: 'Statistics (II) — Pie Charts',
          learningOutcome: 'Students should be able to calculate sectoral angles and draw and interpret pie charts.',
          knowledge: [
            'Calculating the sectoral component of a pie chart',
            'Drawing pie charts correctly',
            'Interpreting pie charts and bar charts'
          ]
        },
        {
          name: 'Statistics (III) — Grouped Data and Histograms',
          learningOutcome: 'Students should be able to draw histograms from grouped data and estimate the mode.',
          knowledge: [
            'Drawing histograms',
            'Estimation of mode from histogram'
          ]
        },
        {
          name: 'Statistics — Frequency Polygon',
          learningOutcome: 'Students should be able to construct a frequency polygon of a given distribution.',
          knowledge: [
            'Construction of frequency polygon of a given distribution'
          ]
        }
      ]
    }
  ]
};
