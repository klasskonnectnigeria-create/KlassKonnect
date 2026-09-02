// SS1 Dyeing and Bleaching — First Term, Second Term and Third Term
// Source: SchemeofWork.com — "Dying and Bleaching Scheme of Work for SS 1 Federal"
// URL: https://schemeofwork.com/dying-and-bleaching-scheme-of-work-for-ss-1-federal/
// Page describes itself as "Nigeria Senior Secondary Syllabus Trade Subject. Federal Dying
// and Bleaching Scheme of Work for SS 1" — does not claim NESRI-2025 compliance, so
// 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Raw HTML was fetched and parsed directly (not just summarized) to confirm the WEEK /
// TOPIC-CONTENT / ACTIVITIES table structure and content for all three terms.
// Administrative weeks (Revision and Examination at the end of each term) are excluded.
// Several consecutive weeks share one set of activities/objectives under a single umbrella
// topic in the source (e.g. Weeks 8-10 "Practicals on Tie and Dye / Project Work on Each of
// the Techniques Discussed" in Second Term, and Weeks 1-2, 3-4, 5-6, 7-8, 9-10 in Third
// Term) — these are kept as separate topics per week (not collapsed), with the
// shared-objective relationship noted in the learningOutcome text rather than inventing
// distinct objectives per week.

export const curriculumData = {
  subject: 'Dyeing and Bleaching',
  grade: 'SS1',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS1 Dyeing and Bleaching',
      topics: [
        // ---- First Term ----
        {
          name: 'Colour Theory: Introduction to Colour Scheme',
          learningOutcome: 'Explain colour theory, including how primary colours are mixed to form secondary and tertiary colours, and draw a colour chart to illustrate the scheme.',
          knowledge: [
            'Primary colour and formation of secondary colours',
            'Process of mixing the tertiary colours',
            'Drawing a chart to illustrate the colour scheme'
          ]
        },
        {
          name: 'Colour Scheme (Practical)',
          learningOutcome: 'Demonstrate practical mixing of secondary and tertiary colours using poster colours.',
          knowledge: [
            'Mixing red, yellow and blue poster colours',
            'Producing secondary and tertiary colours through practical mixing'
          ]
        },
        {
          name: 'Formation of Motif: Introduction to Creation and Formation of Motif',
          learningOutcome: 'Cut a stencil, design, or format area to create a motif.',
          knowledge: [
            'Meaning and purpose of a motif or format area',
            'Cutting a stencil to create a design',
            'Producing a similar motif/design work'
          ]
        },
        {
          name: 'Formation of Traditional African Motif',
          learningOutcome: 'Create a traditional or stylised African motif (e.g. animal, foliage forms) on a cardboard stencil.',
          knowledge: [
            'Traditional/local motifs in animal form (bed, hen, crocodile etc.)',
            'Stylised motif in foliage form',
            'Producing a motif on cardboard to form a stencil'
          ]
        },
        {
          name: 'Creation of Patterns',
          learningOutcome: 'Produce an arranged pattern using a cut motif stencil, poster colour, and textile material.',
          knowledge: [
            'Using the motif stencil already cut to produce a pattern',
            'Applying poster colour and textile material through dabbing',
            'Emphasis on the arrangement of the pattern'
          ]
        },
        {
          name: 'Introduction to Tie and Dye',
          learningOutcome: 'Explain the meaning of tie and dye, identify types of reactive dyes, binding agents, and materials used in the process.',
          knowledge: [
            'Meaning of tie and dye',
            'Types of reactive dye: vat dye (indanthrene), indigo, dylon',
            'Binding agents: table salt, caustic soda, sodium hydrosulphate',
            'Materials: plastic spoons, plastic basin, raffia twine etc.'
          ]
        },
        {
          name: 'Tie and Dye: A Theoretical Approach',
          learningOutcome: 'Explain the various techniques and processes involved in tie and dye using 100% cotton textile material.',
          knowledge: [
            'Techniques: folding, knotting, pleating, stitching, twisting, marbling, wick folding, and sewing-stick assisted pattern',
            'Preparing dye bath with caustic soda and sodium hydrosulphate',
            'Leaving cloth in the dye bath for about 20 minutes, then washing with cold water and spreading to dry away from direct sun'
          ]
        },
        {
          name: 'Tie and Dye (Practical)',
          learningOutcome: 'Produce a tie and dye piece using the materials and techniques studied, under teacher guidance.',
          knowledge: [
            'Practical execution of tie and dye using the discussed materials',
            'Teacher-guided production process'
          ]
        },
        {
          name: 'Introduction to Plain Dyeing of Fabric',
          learningOutcome: 'Explain the difference between tie dyeing and plain dyeing, and how different fabrics absorb dye.',
          knowledge: [
            'Cotton materials absorb dye very well',
            'Other reactive dyes work with selected materials',
            'Difference between tie dyeing and plain dyeing',
            'Preparing materials for plain dyeing'
          ]
        },
        {
          name: 'Plain Dyeing',
          learningOutcome: 'Prepare materials and carry out the plain dyeing process.',
          knowledge: [
            'Preparation of materials for plain dyeing',
            'Practical application of the plain dyeing process'
          ]
        },
        {
          name: 'Plain Dyeing (Another Colour)',
          learningOutcome: 'Carry out plain dyeing using a second, darker colour superimposed over a lighter colour.',
          knowledge: [
            'Process of plain dyeing in another colour',
            'How a darker colour superimposes a lighter colour'
          ]
        },
        {
          name: 'Exhibition of Works',
          learningOutcome: 'Fabricate exhibition stands and display completed dyeing and bleaching works.',
          knowledge: [
            'Fabricating exhibition stands',
            'Displaying completed student works'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Safety Precautions in Dyeing',
          learningOutcome: 'Explain safety precautions to observe during dyeing, including the use of protective equipment.',
          knowledge: [
            'Use of nose and mouth mask',
            'Danger of inhaling chemical fumes',
            'Use of nose mask and hand gloves when dyeing'
          ]
        },
        {
          name: 'Sourcing of Materials and Labeling of Chemicals',
          learningOutcome: 'Label chemicals and dye materials correctly and handle hot water and chemicals with care.',
          knowledge: [
            'Labeling chemicals and dye stuff colours',
            'Nose and mouth mask, apron, rubber, hand glove',
            'Handling hot water and chemicals with care'
          ]
        },
        {
          name: 'Safety Tips After Dyeing',
          learningOutcome: 'Apply post-dyeing safety practices such as cleaning the work area and washing hands.',
          knowledge: [
            'Cleaning up the work area',
            'Washing hands and rubbing grease/pomade after dyeing',
            'Protecting hands from direct contact'
          ]
        },
        {
          name: 'Techniques of Tie and Dye: Folding Method',
          learningOutcome: 'Fold cloth in a right-angle form and use sticks to divide it to create a pattern.',
          knowledge: [
            'Folding method: folding in right-angle form',
            'Using sticks to divide the cloth in the middle to give a pattern'
          ]
        },
        {
          name: 'Marbling Method (Squeezing Method)',
          learningOutcome: 'Produce a marbling pattern by squeezing cloth into a ball before applying colour.',
          knowledge: [
            'Marbling by squeezing cloth into a ball',
            'Applying colour to the squeezed cloth'
          ]
        },
        {
          name: 'Marbling by Twisting and Splashing in Two Colours',
          learningOutcome: 'Produce a marbling pattern by twisting cotton cloth and splashing two colours in a well-spaced form.',
          knowledge: [
            'Twisting cotton cloth on the floor',
            'Splashing colour in a well-spaced form using two colours'
          ]
        },
        {
          name: 'Bolting Method',
          learningOutcome: 'Explain the meaning of bolting and fold cloth using crossed pieces of iron or wood to create a pattern.',
          knowledge: [
            'Meaning of bolting',
            'Crossing of iron or wood in the dye process',
            'Folding cloth and placing wood in a desired pattern form'
          ]
        },
        {
          name: 'Practicals on Tie and Dye: Project Work (Week 8)',
          learningOutcome: 'Carry out practical project work applying each of the tie and dye techniques discussed in the term (this topic shares its objectives and activities with the two following weeks).',
          knowledge: [
            'Preparing materials and boiling water for the practical',
            'Forming the desired design',
            'Cleaning up the work area and spreading cloth away from direct sun'
          ]
        },
        {
          name: 'Practicals on Tie and Dye: Project Work (Week 9)',
          learningOutcome: 'Continue practical project work applying each of the tie and dye techniques discussed in the term (this topic shares its objectives and activities with the adjacent weeks).',
          knowledge: [
            'Preparing materials and boiling water for the practical',
            'Forming the desired design',
            'Cleaning up the work area and spreading cloth away from direct sun'
          ]
        },
        {
          name: 'Practicals on Tie and Dye: Project Work (Week 10)',
          learningOutcome: 'Complete practical project work applying each of the tie and dye techniques discussed in the term (this topic shares its objectives and activities with the two preceding weeks).',
          knowledge: [
            'Preparing materials and boiling water for the practical',
            'Forming the desired design',
            'Cleaning up the work area and spreading cloth away from direct sun'
          ]
        },
        {
          name: 'Exhibition: Arranging and Displaying Works (Week 11)',
          learningOutcome: 'Arrange, iron, and display completed tie and dye works (this topic shares its objectives and activities with the following week).',
          knowledge: [
            'Gathering and arranging materials/cloths',
            'Ironing the cloths',
            'Arranging cloths on shelves/stands for display'
          ]
        },
        {
          name: 'Exhibition: Arranging and Displaying Works (Week 12)',
          learningOutcome: 'Continue arranging, ironing, and displaying completed tie and dye works (this topic shares its objectives and activities with the preceding week).',
          knowledge: [
            'Gathering and arranging materials/cloths',
            'Ironing the cloths',
            'Arranging cloths on shelves/stands for display'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Techniques of Tie and Dye: Need for Variety (Week 1)',
          learningOutcome: 'Explain the need for knowing and applying a variety of tie and dye techniques (this topic shares its objectives with the following week).',
          knowledge: [
            'Demonstration of various techniques in tie and dye',
            'The need for knowing the various techniques in tie and dye'
          ]
        },
        {
          name: 'Techniques of Tie and Dye: Need for Variety (Week 2)',
          learningOutcome: 'Continue exploring the need for knowing and applying a variety of tie and dye techniques (this topic shares its objectives with the preceding week).',
          knowledge: [
            'Demonstration of various techniques in tie and dye',
            'The need for knowing the various techniques in tie and dye'
          ]
        },
        {
          name: 'Titique: Technique of Tie and Dye (Week 3)',
          learningOutcome: 'Explain the processes and materials involved in the titique method of tie and dye (this topic shares its objectives with the following week).',
          knowledge: [
            'Processes involved in the titique method of tie and dye',
            'Materials involved in the titique technique'
          ]
        },
        {
          name: 'Titique: Technique of Tie and Dye (Week 4)',
          learningOutcome: 'Continue practising the titique method of tie and dye (this topic shares its objectives with the preceding week).',
          knowledge: [
            'Processes involved in the titique method of tie and dye',
            'Materials involved in the titique technique'
          ]
        },
        {
          name: 'Circle Design (Week 5)',
          learningOutcome: 'Explain and demonstrate the process and materials involved in creating circle designs on tie and dye (this topic shares its objectives with the following week).',
          knowledge: [
            'Process involved in creating circles on tie and dye',
            'Materials involved in circle design'
          ]
        },
        {
          name: 'Circle Design (Week 6)',
          learningOutcome: 'Continue practising the process of creating circle designs on tie and dye (this topic shares its objectives with the preceding week).',
          knowledge: [
            'Process involved in creating circles on tie and dye',
            'Materials involved in circle design'
          ]
        },
        {
          name: 'Stick and Folding Method (Week 7)',
          learningOutcome: 'Explain the need for and demonstrate the stick and folding method of pattern-making (this topic shares its objectives with the following week).',
          knowledge: [
            'Process involved in the stick and folding method',
            'Need for the stick and folding method'
          ]
        },
        {
          name: 'Stick and Folding Method (Week 8)',
          learningOutcome: 'Continue practising the stick and folding method of pattern-making (this topic shares its objectives with the preceding week).',
          knowledge: [
            'Process involved in the stick and folding method',
            'Need for the stick and folding method'
          ]
        },
        {
          name: 'Project Work on Techniques of Tie and Dye (Week 9)',
          learningOutcome: 'Execute practical project work covering each of the tie and dye techniques discussed during the term, under supervision (this topic shares its objectives with the following week).',
          knowledge: [
            'Arranging materials required for the practical works',
            'Executing practical works on each technique discussed under supervision'
          ]
        },
        {
          name: 'Project Work on Techniques of Tie and Dye (Week 10)',
          learningOutcome: 'Complete practical project work covering each of the tie and dye techniques discussed during the term, under supervision (this topic shares its objectives with the preceding week).',
          knowledge: [
            'Arranging materials required for the practical works',
            'Executing practical works on each technique discussed under supervision'
          ]
        },
        {
          name: 'Exhibition of Works',
          learningOutcome: 'Mount and exhibit completed art works, inviting the school community to view them.',
          knowledge: [
            'Need for exhibition of works produced',
            'Mounting the works produced',
            'Inviting the principal, staff, and students to witness the works'
          ]
        }
      ]
    }
  ]
};
