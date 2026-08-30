// SS3 Blocklaying, Bricklaying and Concreting — First & Second Term
// Source: SchemeofWork.com Osun State affiliate — "Building Construction Scheme of Work
// SSS3 Osun State"
// URL: https://osun.schemeofwork.com/building-construction-scheme-of-work-sss3-osun-state/
//
// IMPORTANT — SCOPE APPROXIMATION: the tracked catalogue subject is specifically
// "Blocklaying, Bricklaying and Concreting", but the only source found for this slot is a
// broader "Building Construction" scheme that also covers plumbing, drainage, floor
// finishes, and landscaping — topics outside blocklaying/bricklaying/concreting narrowly
// defined. This is used as the closest available approximation rather than an exact match;
// a source specific to blocklaying/bricklaying/concreting alone was not found.
//
// Source does not claim NESRI-2025 compliance; this subject also predates the reform, so
// 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision of SS1-2 Work/Welcome Test, Mid-Term Break, Revision,
// Examination, Mock Examination Revision/Revision WAEC) excluded. First Term's brief
// unlabeled "Drainage installation" content block was merged into the richer Weeks 8-10
// Drainage topic that immediately follows it, since both appear to cover the same subject
// continuously. A short, fragmentary "Project Proposal/Project Writing" note attached to
// the Gates row had no standalone content and was folded into the Gates topic rather than
// treated as a separate topic.
// Only First and Second Term were available on this source; Third Term not found.

export const curriculumData = {
  subject: 'Blocklaying, Bricklaying and Concreting',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Blocklaying, Bricklaying and Concreting',
      topics: [
        // ---- First Term ----
        {
          name: 'Staircases',
          learningOutcome: 'Explain the definition, types, and parts of stairs, and describe the construction of timber, concrete, and metal stairs including formwork, reinforcement, and balustrade fixing.',
          knowledge: [
            'Definition and types of stairs',
            'Parts and functional requirements of stair construction',
            'Setting out and layout of timber stairs',
            'Timber stair construction and common defects',
            'Concrete stair construction: formwork and reinforcement placement',
            'Fixing of balustrade and functional characteristics of balustrade materials',
            'Construction of metal stairs'
          ]
        },
        {
          name: 'Wall Finishes: Plastering',
          learningOutcome: 'Define plastering, identify the tools and materials required, and describe how to prepare a surface and apply plaster.',
          knowledge: [
            'Definition of plastering and properties of mortar',
            'Reasons for applying plaster on internal surfaces',
            'Tools and requirements for standard plastering',
            'Preparing the background to receive plastering',
            'Plastering process, sequence, and plasterboard lathing'
          ]
        },
        {
          name: 'Drainage: Principles, Materials and Construction',
          learningOutcome: 'Explain the principles and types of drainage systems, describe methods of laying and testing drains, and demonstrate the construction of inspection chambers, septic tanks, and soakaways.',
          knowledge: [
            'Principles and types of drainage schemes',
            'Factors for selecting a type of drainage scheme',
            'Materials for a drainage system and methods of joining pipes',
            'Functions of traps and inspection chambers',
            'Protection against flooding',
            'Methods of laying, bedding, and testing drains',
            'Functions of soakaway and cesspool',
            'Construction of manholes and septic tanks'
          ]
        },
        {
          name: 'Plumbing System of Pipe Works',
          learningOutcome: 'Define plumbing, identify materials for domestic plumbing, and explain one-pipe, two-pipe, and single-stack systems.',
          knowledge: [
            'Definition of plumbing',
            'Materials for domestic plumbing',
            'One-pipe system',
            'Two-pipe system',
            'Single-stack system'
          ]
        },

        // ---- Second Term ----
        {
          name: 'Fence and Fencing',
          learningOutcome: 'Define fencing and its erection process, list types of fences and boundary walls, and identify materials used for their construction.',
          knowledge: [
            'Types of fencing and boundary walls',
            'Materials of fencing',
            'Construction of fencing'
          ]
        },
        {
          name: 'Access: Site Roads',
          learningOutcome: 'Define access in a construction site and describe how to prepare and construct a temporary access road.',
          knowledge: [
            'Definition of access in the construction site',
            'Preparing a temporary access road',
            'Construction techniques for temporary roads within and around a site'
          ]
        },
        {
          name: 'Gates',
          learningOutcome: 'Define gates in relation to building construction, identify types and materials of gates, and describe their production, fixing, and maintenance.',
          knowledge: [
            'Definition of gates',
            'Types of gates and their classification',
            'Materials for gates',
            'Production, fixing, and maintenance of gates'
          ]
        },
        {
          name: 'Floor Finishes',
          learningOutcome: 'Identify types of floor finishes and their materials, describe the procedures for laying them, and explain their advantages and disadvantages.',
          knowledge: [
            'Types of floor finishes',
            'Materials for floor finishes',
            'Procedures for laying floor finishes',
            'Advantages and disadvantages of types of floor finish',
            'Factors to consider when selecting a floor finish'
          ]
        },
        {
          name: 'Landscaping Work',
          learningOutcome: 'Identify materials for landscaping, interpret site and floor plans, and select tools and equipment for earthmoving.',
          knowledge: [
            'Materials for landscaping',
            'Interpreting plans and other perimeter drawings',
            'Tools and equipment for earthmoving',
            'Cutting, filling, and ramming undulating terrain',
            'Laying kerbs and interlocking bricks'
          ]
        }
      ]
    }
  ]
};
