// SS2 Fashion Design and Garment Making — First and Second Term
// Source: schemeofwork.com "NERDC Curriculum Scheme of Work for Fashion Design and Garment Making"
// URL: https://schemeofwork.com/nerdc-curriculum-scheme-of-work-for-fashion-design-and-garment-making/
// This source does not explicitly claim NESRI 2025 compliance (it labels itself the
// "Federal Government Approved New National Curriculum by NERDC" with no NESRI/2025 reform
// language) -> curriculumVersion: legacy.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Weeks 11-13, "Examinations") are excluded from both terms.
// The source page's SS2 section (titled "...SSS2") only contains First Term and Second
// Term — it proceeds directly from SS2 Second Term into a combined SS3 First & Second Term
// section, with no standalone SS2 Third Term content anywhere on the page — so Third Term is
// omitted here rather than represented with placeholder topics. This matches the same
// omission pattern already documented for SS1 Fashion Design and Garment Making from this
// same source page.

export const curriculumData = {
  subject: 'Fashion Design and Garment Making',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Fashion Design and Garment Making',
      topics: [
        // ---------------- FIRST TERM: Pattern Drafting & Intermediate Garments ----------------
        {
          name: 'Pattern Drafting Tools and Symbols',
          learningOutcome: 'Identify pattern drafting tools and interpret common pattern symbols used in garment construction.',
          knowledge: [
            'Pattern drafting tools: L-square, hip curve, tracing wheel, etc.',
            'Pattern symbols: grainline, cutting line, dart, notch',
            'Drawing and identifying symbols on paper'
          ]
        },
        {
          name: 'Basic Block Creation: Bodice Block',
          learningOutcome: 'Draft a basic bodice block to personal measurements and understand the concept of ease in pattern making.',
          knowledge: [
            'Drafting a basic bodice block (front and back) to personal measurements',
            'The concept of ease in pattern drafting',
            'Drafting the block on pattern paper (manila paper) and cutting out the paper pattern'
          ]
        },
        {
          name: 'Basic Block Creation: Skirt Block',
          learningOutcome: 'Draft a basic straight skirt block to personal measurements and produce a paper pattern from it.',
          knowledge: [
            'Drafting a basic straight skirt block (front and back) to personal measurements',
            'Drafting the skirt block on pattern paper',
            'Cutting out the paper pattern'
          ]
        },
        {
          name: 'Pattern Adaptation: Adding Seam Allowance',
          learningOutcome: 'Define seam allowance and demonstrate adding consistent seam allowance to a drafted paper pattern.',
          knowledge: [
            'Definition of seam allowance',
            'Adding consistent seam allowance to a paper pattern',
            'Adding seam allowance (e.g., 1.5cm) to the drafted bodice and skirt blocks'
          ]
        },
        {
          name: 'From Pattern to Garment: Cutting Fabric',
          learningOutcome: 'Prepare fabric for cutting and lay out and cut pattern pieces accurately following the grainline.',
          knowledge: [
            'Preparing fabric for cutting: straightening and pressing',
            'Laying pattern pieces on fabric following the grainline',
            'Pinning and cutting fabric accurately using the adapted blocks (calico/muslin or cheap cotton)'
          ]
        },
        {
          name: 'Constructing a Fitted Bodice',
          learningOutcome: 'Assemble a fitted bodice by joining shoulder and side seams, setting in sleeves, and attaching a neckline facing.',
          knowledge: [
            'Joining shoulder and side seams',
            'Setting in sleeves (if block includes)',
            'Attaching a neckline facing; constructing the calico bodice with precision'
          ]
        },
        {
          name: 'Constructing a Straight Skirt',
          learningOutcome: 'Assemble a straight skirt by joining side seams, inserting a zip, and attaching a waistband.',
          knowledge: [
            'Joining side seams',
            'Inserting a zip (concealed or lapped)',
            'Attaching a waistband; constructing the calico skirt'
          ]
        },
        {
          name: 'Fitting and Alterations',
          learningOutcome: 'Conduct a fitting session, identify common fitting problems, and perform basic alterations on a garment.',
          knowledge: [
            'Conducting a fitting session',
            'Identifying common fitting problems: too tight, too loose',
            'Performing basic alterations on the calico garment (fitting on peers or mannequins)'
          ]
        },
        {
          name: 'Introduction to Principles of Design',
          learningOutcome: 'Identify the principles of design and analyze their application in various garments.',
          knowledge: [
            'Principles of design: balance, proportion, emphasis, rhythm, harmony',
            'Analyzing the use of design principles in various garments',
            'Finding images that illustrate each principle'
          ]
        },
        {
          name: 'Revision and Project: Fitted Calico Bodice and Skirt',
          learningOutcome: 'Revise First Term topics and present a completed, portfolio-assessed fitted calico bodice and skirt.',
          knowledge: [
            'Revision of all First Term topics',
            'Presenting the fitted calico bodice and skirt as a project',
            'Portfolio assessment of the entire process from drafting to finished toile'
          ]
        },
        // ---------------- SECOND TERM: Construction of Full Garments ----------------
        {
          name: 'Garment Styles: Sleeves',
          learningOutcome: 'Identify different sleeve styles and adapt the basic bodice block to draft and attach a new sleeve design.',
          knowledge: [
            'Sleeve styles: set-in, raglan, kimono',
            'Drafting and attaching a simple puff sleeve or bell sleeve',
            'Adapting the basic bodice block to create a new sleeve design; creating a sleeve sample'
          ]
        },
        {
          name: 'Garment Styles: Necklines',
          learningOutcome: 'Identify different neckline styles and adapt the basic bodice block to draft and finish a new neckline.',
          knowledge: [
            'Neckline styles: round, V-neck, square, cowl',
            'Drafting and finishing a simple V-neck or round neck with facing/bias binding',
            'Adapting the basic bodice block to create a new neckline; creating a neckline sample'
          ]
        },
        {
          name: 'Garment Styles: Skirts',
          learningOutcome: 'Identify different skirt styles and adapt the basic skirt block to draft an A-line pattern.',
          knowledge: [
            'Skirt styles: A-line, circle, flared, gathered',
            'Drafting an A-line skirt from the basic block',
            'Adapting the basic skirt block to create an A-line pattern'
          ]
        },
        {
          name: 'Project: Simple Dress/Shirt',
          learningOutcome: 'Choose a simple dress or shirt pattern, plan its construction, and cut it out in fashion fabric.',
          knowledge: [
            'Choosing a simple dress or shirt pattern (commercial or self-drafted)',
            'Planning the construction process',
            'Cutting out the garment in fashion fabric'
          ]
        },
        {
          name: 'Project Construction I',
          learningOutcome: 'Assemble the main parts of a garment with accurate seam matching under supervised construction.',
          knowledge: [
            'Assembling the main parts of the garment (bodice, sleeves, skirt if dress)',
            'Focusing on accurate seam matching',
            'Supervised construction in class'
          ]
        },
        {
          name: 'Project Construction II: Fastenings',
          learningOutcome: 'Insert fastenings such as zippers, button plackets, and buttons neatly into a garment.',
          knowledge: [
            'Inserting a zipper or making a button placket',
            'Attaching buttons or other fastenings',
            'Practicing for neatness'
          ]
        },
        {
          name: 'Project Construction III: Finishing',
          learningOutcome: 'Complete a garment by attaching final closures, hemming, pressing, and applying quality control checks.',
          knowledge: [
            'Attaching final closures',
            'Hemming the garment and giving a final press',
            'Applying quality control checks and final touches'
          ]
        },
        {
          name: 'Fabric Decoration I: Appliqué and Smocking',
          learningOutcome: 'Define appliqué and smocking and demonstrate basic techniques for both.',
          knowledge: [
            'Definition of appliqué and smocking',
            'Basic techniques for appliqué and smocking',
            'Creating small decorated samples using these techniques'
          ]
        },
        {
          name: 'Fabric Decoration II: Embroidery and Beadwork',
          learningOutcome: 'Identify basic embroidery stitches and demonstrate simple bead application on fabric.',
          knowledge: [
            'Basic embroidery stitches: stem, chain, satin',
            'Simple bead application',
            'Creating a small embroidered or beaded motif'
          ]
        },
        {
          name: 'Revision and Fashion Illustration Basics',
          learningOutcome: 'Revise Second Term topics and practice basic fashion croquis and figure proportions for garment drawing.',
          knowledge: [
            'Revision of all Second Term topics',
            'Basic fashion croquis (9-head figure) and drawing garments on the body',
            'Practicing basic figure proportions and simple garments'
          ]
        }
      ]
    }
  ]
};
