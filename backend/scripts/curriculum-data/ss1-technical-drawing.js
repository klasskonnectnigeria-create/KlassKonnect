// SS1 Technical Drawing — First, Second & Third Term
// Source: SchemeofWork.com "Technical Drawing Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/technical-drawing-scheme-of-work-for-ss-1-federal/
// Presented as the Federal Capital Territory Senior Secondary Technology Syllabus; no explicit
// NESRI 2025 compliance statement on the page, so treated as 'legacy'.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision, Examination) are excluded from all three terms.
// Several consecutive weeks share a broader umbrella topic (e.g. "Lines and Line Work",
// "Angles and Triangles", "Circle and Triangles", "Quadrilaterals", "Polygons", "Enlargement
// and Reduction", "Equal Areas of Similar Figures", "Tangents and Tangency", "True Length and
// Surface Development", "Isometric Drawing") — these are kept as separate topics per week per
// the sourcing convention, with the shared relationship noted in the learningOutcome text.

export const curriculumData = {
  subject: 'Technical Drawing',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Technical Drawing',
      topics: [
        // ---- First Term ----
        {
          name: 'Drawing Materials and Equipment',
          learningOutcome: 'Define technical drawing and identify the common drawing instruments and equipment and their uses.',
          knowledge: [
            'Definition of technical drawing',
            'Identification and uses of drawing methods and equipment',
            'Protractor, compasses, set-squares, tee-square and drawing board'
          ]
        },
        {
          name: 'Board Practice',
          learningOutcome: 'Demonstrate correct techniques for setting up a drawing sheet on a board and produce freehand lettering.',
          knowledge: [
            'Techniques for fixing drawing sheets to a board',
            'Drawing of border lines and title blocks',
            'Freehand lettering in upper and lower case'
          ]
        },
        {
          name: 'Safe Working Habits',
          learningOutcome: 'Apply safe practices when using and caring for drawing instruments in a well-organised workspace.',
          knowledge: [
            'Safe use and care of drawing instruments',
            'Clean working habits',
            'Proper lighting and ventilation in the drawing room'
          ]
        },
        {
          name: 'Lines and Line Work I',
          learningOutcome: 'Identify the different types of lines used in technical drawing and their conventional uses; this is the first of two weeks sharing this broader topic.',
          knowledge: [
            'Types and uses of lines: thin continuous, thick continuous, thin long-chain, thick long-chain',
            'Drawing of parallel and unchanged lines'
          ]
        },
        {
          name: 'Lines and Line Work II',
          learningOutcome: 'Apply geometric construction methods to bisect and divide straight lines, continuing from the first week on Lines and Line Work.',
          knowledge: [
            'Bisection of lines',
            'Division of lines into equal and proportional parts'
          ]
        },
        {
          name: 'Angles and Triangles I',
          learningOutcome: 'Classify types of angles and construct and divide them accurately; the first of two weeks sharing this broader topic.',
          knowledge: [
            'Types of angles: acute, obtuse, reflex',
            'Construction of angles',
            'Division/bisection of angles'
          ]
        },
        {
          name: 'Angles and Triangles II',
          learningOutcome: 'Classify and construct different types of triangles, continuing from the first week on Angles and Triangles.',
          knowledge: [
            'Types of triangles: isosceles, equilateral, scalene, right-angled',
            'Construction of the various types of triangles'
          ]
        },
        {
          name: 'Circle and Triangles I',
          learningOutcome: 'Define a circle and identify its parts; the first of two weeks sharing this broader topic.',
          knowledge: [
            'Definition of a circle',
            'Parts of a circle: chord, tangent, sector, quadrant, radius'
          ]
        },
        {
          name: 'Circle and Triangles II',
          learningOutcome: 'Construct triangles that are inscribed in, circumscribed about, and ascribed to circles, continuing from the first week on Circle and Triangles.',
          knowledge: [
            'Inscription of triangles in circles',
            'Circumscription of triangles about circles',
            'Ascription of triangles'
          ]
        },
        {
          name: 'Quadrilaterals I',
          learningOutcome: 'Define quadrilaterals and identify the properties of the different types; the first of two weeks sharing this broader topic.',
          knowledge: [
            'Definition of quadrilaterals',
            'Types of quadrilaterals: square, rectangle, kite, parallelogram',
            'Properties of quadrilaterals'
          ]
        },
        {
          name: 'Quadrilaterals II',
          learningOutcome: 'Construct the various types of quadrilaterals accurately, continuing from the first week on Quadrilaterals.',
          knowledge: [
            'Construction of squares and rectangles',
            'Construction of kites and parallelograms'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Polygons I',
          learningOutcome: 'Define polygons and identify the types and properties of regular and irregular polygons; the first of two weeks sharing this broader topic.',
          knowledge: [
            'Definition of polygons',
            'Types of polygons: regular and irregular',
            'Properties of polygons: pentagon, hexagon, heptagon'
          ]
        },
        {
          name: 'Polygons II',
          learningOutcome: 'Construct regular polygons using different construction methods, continuing from the first week on Polygons.',
          knowledge: [
            'Construction of polygons using the square method',
            'Construction of polygons using the circle method',
            'Construction of polygons using the diagonal method'
          ]
        },
        {
          name: 'Scales and Uses',
          learningOutcome: 'Construct and read plain and diagonal scales for accurate representation of measurements in drawing.',
          knowledge: [
            'Construction of plain scales',
            'Construction of diagonal scales',
            'Reading of scales'
          ]
        },
        {
          name: 'Enlargement and Reduction I',
          learningOutcome: 'Explain the concept of enlargement and reduction and apply it to plane figures; the first of two weeks sharing this broader topic.',
          knowledge: [
            'Concept of enlargement and reduction',
            'Application of enlargement and reduction to plane figures'
          ]
        },
        {
          name: 'Enlargement and Reduction II',
          learningOutcome: 'Apply enlargement and reduction methods to regular and irregular plane figures, continuing from the first week on Enlargement and Reduction.',
          knowledge: [
            'Enlargement and reduction of triangles',
            'Enlargement and reduction of quadrilaterals and polygons'
          ]
        },
        {
          name: 'Equal Areas of Similar Figures I',
          learningOutcome: 'State and explain the theorems relating to equal areas of similar figures; the first of two weeks sharing this broader topic.',
          knowledge: [
            'Theorems of equal areas of similar figures'
          ]
        },
        {
          name: 'Equal Areas of Similar Figures II',
          learningOutcome: 'Construct plane figures with equal areas, continuing from the first week on Equal Areas of Similar Figures.',
          knowledge: [
            'Construction of plane figures with equal areas'
          ]
        },
        {
          name: 'Tangents and Tangency I',
          learningOutcome: 'Explain the principles of tangents and tangency and construct tangents to circles; the first of two weeks sharing this broader topic.',
          knowledge: [
            'Principles and applications of tangents and tangency',
            'Construction of tangents to circles'
          ]
        },
        {
          name: 'Tangents and Tangency II',
          learningOutcome: 'Construct tangency involving arcs, continuing from the first week on Tangents and Tangency.',
          knowledge: [
            'Construction of internal tangency involving arcs',
            'Construction of external tangency involving arcs'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Special Curves',
          learningOutcome: 'Define locus and construct special curves such as the ellipse, cycloid and trochoid.',
          knowledge: [
            'Definition of locus',
            'Construction of the ellipse',
            'Construction of the cycloid and trochoid'
          ]
        },
        {
          name: 'True Length and Surface Development I',
          learningOutcome: 'Explain the meaning and applications of true length and determine true lengths of lines; the first of three weeks sharing this broader topic.',
          knowledge: [
            'Meaning and applications of true length and surface development',
            'Determining true lengths of lines'
          ]
        },
        {
          name: 'True Length and Surface Development II',
          learningOutcome: 'Develop the surfaces of full and truncated solids, continuing from the first week on True Length and Surface Development.',
          knowledge: [
            'Surface development of full solids: cones, pyramids, prisms, cylinders',
            'Surface development of truncated solids'
          ]
        },
        {
          name: 'True Length and Surface Development III',
          learningOutcome: 'Produce models of geometrical solids using surface development techniques, continuing from the earlier weeks on True Length and Surface Development.',
          knowledge: [
            'Production of models of geometrical solids from developed surfaces'
          ]
        },
        {
          name: 'Methods of Dimensioning',
          learningOutcome: 'Apply correct dimensioning methods to circles, arcs, chamfers and vertical, horizontal and angular shapes.',
          knowledge: [
            'Dimensioning of circles and arcs',
            'Dimensioning of chamfers',
            'Dimensioning of vertical, horizontal and angular shapes'
          ]
        },
        {
          name: 'Isometric Drawing I',
          learningOutcome: 'Explain the concept of isometric drawing and identify the isometric axis; the first of three weeks sharing this broader topic.',
          knowledge: [
            'Concept of isometric drawing',
            'The isometric axis',
            'Definition of three-dimensional drawing'
          ]
        },
        {
          name: 'Isometric Drawing II',
          learningOutcome: 'Construct isometric squares, rectangles and circles, continuing from the first week on Isometric Drawing.',
          knowledge: [
            'Construction of isometric squares and rectangles',
            'Construction of isometric circles'
          ]
        },
        {
          name: 'Isometric Drawing III',
          learningOutcome: 'Construct simple blocks in isometric projection, continuing from the earlier weeks on Isometric Drawing.',
          knowledge: [
            'Construction of simple blocks in isometric projection'
          ]
        },
        {
          name: 'Oblique Drawing',
          learningOutcome: 'Explain the meaning of oblique drawing and draw shapes and geometrical solids using the cabinet and cavalier methods.',
          knowledge: [
            'Meaning of oblique drawing',
            'Drawing of shapes and geometrical solids using the cabinet method',
            'Drawing of shapes and geometrical solids using the cavalier method'
          ]
        },
        {
          name: 'Introduction to Computer Graphics',
          learningOutcome: 'Explain the use of computers for lettering, drawing and figure manipulation in technical drawing.',
          knowledge: [
            'Use of computers for lettering',
            'Use of computers for drawing',
            'Use of computers for figure manipulation'
          ]
        }
      ]
    }
  ]
};
