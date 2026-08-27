// SS3 Mathematics — First and Second Term
// Source: SchemeofWork.com
// URL: https://schemeofwork.com/mathematics-scheme-of-work-for-ss-3-federal/
// Source page does not explicitly claim 2025 NESRI reform compliance.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examination) are excluded.
// NOTE: This source has no Third Term section at all — only First and Second Term.
// This is consistent with other sources describing SS3 Mathematics: the Third Term is
// dedicated to WASSCE exam revision rather than new syllabus content, so First + Second
// Term (15 topics total) represents complete coverage for this subject at this grade,
// not a partial-term gap.
// This file recreates content already live in the database (15 topics, verified 2026-08-27)
// whose original source file backup was missing from the repo.

export const curriculumData = {
  subject: 'Mathematics',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Mathematics',
      topics: [
        {
          name: 'Matrices I',
          learningOutcome: 'Define a matrix, identify its notation and types, and perform addition, subtraction, and scalar multiplication of matrices.',
          knowledge: [
            'Definition of a matrix',
            'Order and notation of a matrix',
            'Types of matrices (null, unit, etc.)',
            'Addition and subtraction of matrices',
            'Scalar multiplication of 2×2 and 3×3 matrices'
          ]
        },
        {
          name: 'Matrices II',
          learningOutcome: 'Find the transpose and determinant of a matrix, solve simultaneous equations using determinants, and find the inverse of a 2×2 matrix.',
          knowledge: [
            'Transpose of a matrix',
            'Determinant of a 2×2 and 3×3 matrix',
            'Solving simultaneous equations using the determinant method (two and three unknowns)',
            'Inverse of a 2×2 matrix'
          ]
        },
        {
          name: 'Arithmetic of Finance',
          learningOutcome: 'Calculate compound interest and depreciation, and determine annuity.',
          knowledge: [
            'Revision of simple interest',
            'Compound interest including arithmetic of finance',
            'Definition and calculation of depreciation',
            'Definition and determination of annuity'
          ]
        },
        {
          name: 'Arithmetic of Finance II',
          learningOutcome: 'Compute amortization and solve capital market problems involving bonds, shares, rates, and taxes.',
          knowledge: [
            'Definition and computation of amortization',
            'Solving problems in the capital market: bonds and debentures, shares, rates, income tax, and value added tax'
          ]
        },
        {
          name: 'Application of Linear and Quadratic Equations',
          learningOutcome: 'Solve word problems involving simultaneous linear and quadratic equations, including applications to the capital market.',
          knowledge: [
            'Revision of solving simultaneous linear and quadratic equations',
            'Word problems on linear equations',
            'Word problems on simultaneous linear equations',
            'Word problems on simultaneous equations (one linear, one quadratic)',
            'Application to the capital market'
          ]
        },
        {
          name: 'Trigonometry',
          learningOutcome: 'Construct and interpret the graphs of sine and cosine functions for 0° to 360°.',
          knowledge: [
            'Graph of trigonometric functions (sine and cosine, 0° ≤ x ≤ 360°)',
            'Interpretation of graphs of trigonometric functions'
          ]
        },
        {
          name: 'Surface Area and Volume of a Sphere',
          learningOutcome: 'Calculate the volume and surface area of a sphere and hemisphere.',
          knowledge: [
            'Volume of a sphere',
            'Surface area of a sphere',
            'Volume of a hemisphere',
            'Surface area of a hemisphere'
          ]
        },
        {
          name: 'The Earth as a Sphere',
          learningOutcome: 'Identify longitude, latitude, and the great and small circles of the earth, and solve related distance problems.',
          knowledge: [
            'Describing the earth as a sphere: longitude, latitude, equator, poles, small and great circles',
            'Distance along the great circle',
            'Radius of a parallel of latitude',
            'Distance along a parallel of latitude',
            'Mathematical problems on the earth as a sphere'
          ]
        },
        {
          name: 'Coordinate Geometry I',
          learningOutcome: 'Plot points on the Cartesian plane, draw linear graphs, and find the distance and midpoint between two points.',
          knowledge: [
            'Identification of Cartesian rectangular coordinates (x, y)',
            'Drawing and interpretation of a linear graph',
            'Distance between two points',
            'Midpoint of the line joining two points',
            'Practical application of coordinate geometry'
          ]
        },
        {
          name: 'Coordinate Geometry II',
          learningOutcome: 'Determine the gradient and equation of a straight line and the angle between two intersecting lines.',
          knowledge: [
            'Gradient of a straight line and y-intercept',
            'Equation of a straight line',
            'Angle between two intersecting lines',
            'Conditions for parallel and perpendicular lines',
            'Practical application of coordinate geometry'
          ]
        },
        {
          name: 'Differentiation I',
          learningOutcome: 'Differentiate functions from first principles and apply standard derivative rules to polynomials.',
          knowledge: [
            'Meaning of differentiation and the derived function',
            'Differentiation from first principles',
            'General technique of differentiation',
            'Standard derivatives',
            'Differentiation of polynomials',
            'Sum and difference rules of differentiation',
            'Differentiation of trigonometric functions'
          ]
        },
        {
          name: 'Differentiation II',
          learningOutcome: 'Apply the product, quotient, and function-of-function rules of differentiation, and use differentiation to find maxima, minima, velocity, and acceleration.',
          knowledge: [
            'Rules of differentiation: sum, difference, product, quotient, function-of-function',
            'Application of differentiation to maximum and minimum points',
            'Application to acceleration, velocity, and rate of change'
          ]
        },
        {
          name: 'Integration I',
          learningOutcome: 'Explain integration as the reverse of differentiation and integrate algebraic functions using substitution.',
          knowledge: [
            'Integration as anti-differentiation',
            'Techniques of integration (standard integrals)',
            'Integration of algebraic functions',
            'Special integrals',
            'Integration by substitution'
          ]
        },
        {
          name: 'Integration II',
          learningOutcome: 'Integrate trigonometric functions and apply integration to find the area under a curve.',
          knowledge: [
            'Integration of trigonometric functions',
            'Integration by parts',
            'Integration by partial fractions',
            'Application of integration: Simpson\'s rule for area under a curve',
            'Integration of exponential functions'
          ]
        },
        {
          name: 'Logarithms',
          learningOutcome: 'Apply the laws of logarithms and use logarithm tables to solve calculation problems.',
          knowledge: [
            'Revision of laws of indices',
            'Revision of using logarithm tables to calculate the logarithm of numbers',
            'Theory of logarithms',
            'Rules connecting logarithms: log(pq) = log p + log q, log(p/q) = log p − log q, logₐxⁿ = n·logₐx'
          ]
        }
      ]
    }
  ]
};
