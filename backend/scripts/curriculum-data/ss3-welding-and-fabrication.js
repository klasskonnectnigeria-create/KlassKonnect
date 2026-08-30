// SS3 Welding and Fabrication — First Term (full) and Second Term (partial, thin source)
// Source: SchemeofWork.com "Fabrication and Welding Scheme of Work SSS3"
// URL: https://schemeofwork.com/fabrication-and-welding-scheme-of-work-sss3
// Source does not claim NESRI-2025 compliance, so 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid-term Break, Revision and Projects, Examination, and the
// Second Term Week 1 "Welcome test/Revision") are excluded. First Term Week 1's title
// reads "Welcome test/Environmental Health" but its actual content is substantive
// (structural steel section identification), so it is retained and renamed below.
// Second Term content on this source is thin — it ends abruptly at Week 5 with no
// further weeks published, and no Third Term section exists on the page at all, so
// Third Term is omitted entirely per the omission rule.

export const curriculumData = {
  subject: 'Welding and Fabrication',
  grade: 'SS3',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS3 Welding and Fabrication',
      topics: [
        // ---- First Term ----
        {
          name: 'Structural Steel Sections',
          learningOutcome: 'Define structural steel sections, identify and state the types of steel sections, and sketch various types of structural steel sections.',
          knowledge: [
            'Definition of structural steel sections',
            'Types of steel sections',
            'Sketching of structural steel sections'
          ]
        },
        {
          name: 'Principles of Selection of Materials',
          learningOutcome: 'Identify materials for specific jobs, determine the cost of materials, and select the appropriate material for a given task.',
          knowledge: [
            'Materials for specific jobs',
            'Determining the cost of materials',
            'Factors for selecting appropriate materials'
          ]
        },
        {
          name: 'Welding of Dissimilar Metals',
          learningOutcome: 'Identify dissimilar metals and weld components made of different metal types together.',
          knowledge: [
            'Identification of dissimilar metals (stainless steel, aluminum, copper, mild steel)',
            'Welding procedures for joining dissimilar metals'
          ]
        },
        {
          name: 'Pipe Fittings and Pipe Welding',
          learningOutcome: 'Identify pipe types, measure pipes correctly, prepare pipe edges, set and tag pipes, bend pipes to the correct angle, and weld pipes together.',
          knowledge: [
            'Types of pipes',
            'Measuring pipes using vernier calipers and slide rules',
            'Pipe edge preparation, setting, tagging, and bending',
            'Welding pipes together'
          ]
        },
        {
          name: 'Forging Processes',
          learningOutcome: 'Identify and explain forging processes and differentiate between upsetting and drawing down operations.',
          knowledge: [
            'Forging processes',
            'Difference between upsetting and drawing down',
            'Use of furnaces, bellows, fullers, swages, flatters, tongs, and anvils'
          ]
        },
        {
          name: 'Edge Preparation',
          learningOutcome: 'State the purpose of edge preparation, describe the edge preparation procedure, and prepare edges prior to welding.',
          knowledge: [
            'Purpose of edge preparation',
            'Edge preparation procedure',
            'Preparing workpiece edges prior to welding'
          ]
        },
        {
          name: 'Surface Finishing',
          learningOutcome: 'Identify surface finishing processes, describe sheradizing and cladding, and differentiate between painting and galvanizing.',
          knowledge: [
            'Surface finishing processes',
            'Sheradizing and cladding',
            'Difference between painting and galvanizing'
          ]
        },
        {
          name: 'Equipment Faults and Troubleshooting',
          learningOutcome: 'Detect faults on welding and fabrication equipment, remove and replace faulty components, and troubleshoot equipment faults.',
          knowledge: [
            'Fault detection on welding equipment',
            'Removing and replacing faulty components',
            'Troubleshooting procedures'
          ]
        },
        {
          name: 'Entrepreneurship',
          learningOutcome: 'Define entrepreneurship, explain the roles of an employer and employee, and explain small, medium, and large-scale enterprises.',
          knowledge: [
            'Definition of entrepreneurship',
            'Roles of employer and employee',
            'Small, medium, and large-scale enterprises'
          ]
        },
        {
          name: 'Excursion/Field Trip: Industrial Machines and Equipment',
          learningOutcome: 'Observe machine and equipment operations in industrial welding and fabrication settings.',
          knowledge: [
            'Observation of industrial welding and fabrication machinery and equipment in operation'
          ]
        },
        // ---- Second Term (thin source: ends at Week 5) ----
        {
          name: 'Defects in Welding',
          learningOutcome: 'Identify common defects in welding surfaces, mention their possible causes, state precautions, and discuss remedies for correcting such defects.',
          knowledge: [
            'Poor appearance of welded surface, incomplete penetration, undercut, arc blow',
            'Pin holes, porous weld, crack weld, distortion and warping',
            'Spatter in weld, brittle weld, slag in weld, distortion and stress in welding',
            'Precautions and remedies for weld defects'
          ]
        },
        {
          name: 'Welding Test',
          learningOutcome: 'Define welding test, state the various types of welding tests available, detect a defective weld, and discuss non-destructive testing methods.',
          knowledge: [
            'Definition and types of welding tests',
            'Detecting defective welds not indicated by visual inspection',
            'Non-destructive testing: X-ray, ultrasound inspection, dye penetrant test, magnetic particle inspection',
            'Destructive testing approaches'
          ]
        }
      ]
    }
  ]
};
