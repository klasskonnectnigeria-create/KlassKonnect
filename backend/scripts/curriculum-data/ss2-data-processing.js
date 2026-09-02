// SS2 Data Processing — First Term, Second Term and Third Term
// Source: SchemeofWork.com — "Data Processing Scheme of Work for SS 2 Federal"
// URL: https://schemeofwork.com/data-processing-scheme-of-work-for-ss-2-federal/
// Page identifies itself as "Nigeria Senior Secondary Technology Curriculum. SS 2 Data
// Processing Scheme of Work Federal" — no NERDC/NESRI 2025 compliance claim is made
// anywhere on the page, so 'legacy' is used per the versioning rule.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Revision and Examination at the end of each term) are excluded:
// First Term Weeks 13-14, Second Term Weeks 11-12, Third Term Weeks 12-13.
// Several consecutive weeks share a broader umbrella topic in the source (e.g. "Normal
// Forms" across First Term Weeks 4-5, "Relational Model" across First Term Weeks 8-11,
// "Internet" across Second Term Weeks 1-3, "Graphic Packages"/"Object Transformation"/
// "Working With Layout" across various Third Term weeks, "Maintenance Of Computer(s)"
// across Third Term Weeks 10-11) but each week carries distinct sub-content per the
// source's WEEK/TOPIC-CONTENT/ACTIVITIES table, so each week is kept as its own topic.

export const curriculumData = {
  subject: 'Data Processing',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Data Processing',
      topics: [
        // ---- First Term ----
        {
          name: 'Data Models: Definition and Types',
          learningOutcome: 'Define a data model, describe modeling concepts, and give examples of data models used in database design.',
          knowledge: [
            'Definition of a data model',
            'Discussion of modeling concepts',
            'Examples of data models'
          ]
        },
        {
          name: 'Data Modeling: Tables, Forms, Queries and Reports',
          learningOutcome: 'Demonstrate the creation of tables, forms, queries and reports as components of data modeling.',
          knowledge: [
            'Creation of tables in a database',
            'Creation of forms, queries and reports'
          ]
        },
        {
          name: 'Data Modeling: Significance and Examples',
          learningOutcome: 'Explain the significance of data modeling and participate in practical classroom activities illustrating it.',
          knowledge: [
            'Explanation of the significance of data modeling',
            'Participation in classroom activities demonstrating data modeling'
          ]
        },
        {
          name: 'Normal Forms: First, Second and Third Normal Forms',
          learningOutcome: 'Explain the first, second and third normal forms and demonstrate creating tables that satisfy each normal form, solving related problems.',
          knowledge: [
            'Explanation of first, second and third normal forms',
            'Demonstration of table creation in each normal form',
            'Solving of problems relating to normal forms'
          ]
        },
        {
          name: 'Normal Forms: Determinants and Foreign Keys',
          learningOutcome: 'Explain determinants in normalization and differentiate between primary keys and foreign keys.',
          knowledge: [
            'Explanation of determinants',
            'Differentiation between primary keys and foreign keys'
          ]
        },
        {
          name: 'Entity-Relationship Model: Entities, Attributes and Relationships',
          learningOutcome: 'Illustrate the entity-relationship model using diagrams showing entities, attributes and relationships.',
          knowledge: [
            'Illustration of the ER model with diagrams',
            'Identification of entities, attributes and relationships with examples'
          ]
        },
        {
          name: 'Entity-Relationship Model: Connectivity and Cardinality',
          learningOutcome: 'Discuss additional features of the entity-relationship model, including connectivity and cardinality.',
          knowledge: [
            'Discussion of connectivity features of the ER model',
            'Discussion of cardinality features of the ER model'
          ]
        },
        {
          name: 'Relational Model: Creating and Modifying Relations Using SQL',
          learningOutcome: 'Demonstrate the use of SQL to create and modify relations in a relational database.',
          knowledge: [
            'Demonstration of SQL statements for creating relations',
            'Demonstration of SQL statements for modifying relations'
          ]
        },
        {
          name: 'Relational Model: Integrity Constraints',
          learningOutcome: 'State and explain the integrity constraints used in relational databases, including not null, unique, primary key, foreign key and check constraints.',
          knowledge: [
            'Statement of not null and unique constraints',
            'Statement of primary key and foreign key constraints',
            'Statement of check constraints'
          ]
        },
        {
          name: 'Relational Model: Enforcing Integrity Constraints',
          learningOutcome: 'Demonstrate SQL methods for enforcing integrity constraints, such as the "no action" referential option.',
          knowledge: [
            'Demonstration of SQL enforcement of integrity constraints',
            'Explanation of the "no action" referential integrity option'
          ]
        },
        {
          name: 'Relational Model: Querying Relational Data',
          learningOutcome: 'Explain how SQL queries are used to retrieve data from relations and demonstrate the use of the "create view" statement.',
          knowledge: [
            'Explanation of SQL queries on relational data',
            'Demonstration of the "create view" statement'
          ]
        },
        {
          name: 'File Organization: Methods and Characteristics',
          learningOutcome: 'Define file organization and explain the characteristics of heap, sequential, hash and B-tree file structures.',
          knowledge: [
            'Definition of file organization',
            'Explanation of heap file structure',
            'Explanation of sequential, hash and B-tree file structures'
          ]
        },
        // ---- Second Term ----
        {
          name: 'Internet: Definition, Browsers and Benefits',
          learningOutcome: 'Define the internet, list common web browsers and discuss the benefits of internet use.',
          knowledge: [
            'Definition of the internet',
            'Listing of browsers such as Opera and Firefox',
            'Discussion of the benefits of the internet'
          ]
        },
        {
          name: 'Internet: Connection Requirements, Security and Abuses',
          learningOutcome: 'Name the requirements for internet connection and discuss internet security tools and common abuses of the internet.',
          knowledge: [
            'Naming of internet connection requirements',
            'Discussion of security tools such as AVG and Avast',
            'Discussion of abuses of the internet'
          ]
        },
        {
          name: 'Internet: Searching, Downloading and Copying',
          learningOutcome: 'Demonstrate web browsing, searching for information, downloading and copying files from the internet.',
          knowledge: [
            'Demonstration of web browsing and searching',
            'Demonstration of downloading and copying files'
          ]
        },
        {
          name: 'Presentation Package: Meaning, Uses and Toolbar Identification',
          learningOutcome: 'Define a presentation package, explain its uses and identify its toolbars, such as those in PowerPoint.',
          knowledge: [
            'Definition of a presentation package',
            'Explanation of the uses of presentation packages',
            'Identification of toolbars in PowerPoint'
          ]
        },
        {
          name: 'Creating a Presentation: Inserting Slides and Applying Design',
          learningOutcome: 'Insert slides into a presentation and apply design templates and color schemes.',
          knowledge: [
            'Insertion of slides into a presentation',
            'Application of design templates and color schemes',
            'Application of animation schemes'
          ]
        },
        {
          name: 'Modifying Slides: Formatting Text and Animation',
          learningOutcome: 'Format slide text style, size and color, and apply entrance and exit animation effects to slide objects.',
          knowledge: [
            'Formatting of text style, size and color',
            'Application of entrance and exit animation effects'
          ]
        },
        {
          name: 'Finalizing a Presentation: Saving, Timing, Transitions and Slide Show',
          learningOutcome: 'Save a presentation, set slide timing and transitions, and run automatic and manual slide shows.',
          knowledge: [
            'Saving of a presentation file',
            'Setting of timing and transitions between slides',
            'Running of automatic and manual slide shows'
          ]
        },
        {
          name: 'Web Design Packages: Meaning and Uses',
          learningOutcome: 'Define web design packages and explain their uses in creating web content.',
          knowledge: [
            'Definition of web design packages',
            'Explanation of the purposes of web design packages'
          ]
        },
        {
          name: 'Web Design Packages: Components and Examples',
          learningOutcome: 'List examples of web design packages and identify their components.',
          knowledge: [
            'Listing of examples such as Serif Web Plus and Dream Weaver',
            'Identification of components of web design packages'
          ]
        },
        {
          name: 'Creating Websites: Adding Text, Images, Links and Tables',
          learningOutcome: 'Create a simple web page, adding text, images, links and tables using an available web design tool.',
          knowledge: [
            'Guided creation of a simple web page',
            'Addition of text, images, links and tables to a web page'
          ]
        },
        // ---- Third Term ----
        {
          name: 'Graphic Packages: Meaning and Uses',
          learningOutcome: 'Define graphic software packages and outline their uses.',
          knowledge: [
            'Definition of graphic software packages',
            'Outline of the uses of graphic packages'
          ]
        },
        {
          name: 'Graphic Packages: Examples and Components',
          learningOutcome: 'List examples of graphic packages and identify their components.',
          knowledge: [
            'Listing of examples such as CorelDraw, Photoshop and Paint',
            'Identification of components of graphic packages'
          ]
        },
        {
          name: 'CorelDraw Environment: Component Uses',
          learningOutcome: 'Explore the CorelDraw environment, identifying the uses of its menu options such as file, edit, view, arrange, layout and effects.',
          knowledge: [
            'Exploration of the file and edit menu options',
            'Exploration of the view, arrange, layout and effects menu options'
          ]
        },
        {
          name: 'Object Transformation: Stretching, Scaling and Rotating',
          learningOutcome: 'Define object transformation and demonstrate stretching, scaling and rotating objects in a graphic package.',
          knowledge: [
            'Definition of object transformation',
            'Demonstration of stretching and scaling of objects',
            'Demonstration of rotating objects'
          ]
        },
        {
          name: 'Object Transformation: Shaping, Text Kerning and Color Filling',
          learningOutcome: 'Perform shaping, text kerning and color-filling operations on drawn objects.',
          knowledge: [
            'Demonstration of shaping of objects',
            'Demonstration of text kerning',
            'Demonstration of color filling'
          ]
        },
        {
          name: 'Object Editing and Arrangement: Duplication, Movement, Grouping and Alignment',
          learningOutcome: 'Duplicate, move, group and align objects within a graphic package.',
          knowledge: [
            'Duplication and movement of objects',
            'Grouping and alignment of objects'
          ]
        },
        {
          name: 'Object Editing and Arrangement: Envelope and Blending',
          learningOutcome: 'Demonstrate the envelope effect and blending of multiple objects in a graphic package.',
          knowledge: [
            'Demonstration of the envelope effect on objects',
            'Demonstration of blending of multiple objects'
          ]
        },
        {
          name: 'Working With Layout: Page, Background, Border and Guidelines',
          learningOutcome: 'Create drawing pages with backgrounds, borders and guidelines in a graphic package.',
          knowledge: [
            'Creation of drawing pages',
            'Creation of backgrounds, borders and guidelines'
          ]
        },
        {
          name: 'Working With Layout: Importing Images and Adding Artistic Text',
          learningOutcome: 'Import images from other packages and add artistic text elements to a layout.',
          knowledge: [
            'Importing of images from other packages',
            'Addition of artistic text elements'
          ]
        },
        {
          name: 'Maintenance of Computer: General Cleaning and Basic Procedures',
          learningOutcome: 'Explain general computer maintenance procedures, including dust removal and basic cleaning techniques.',
          knowledge: [
            'Explanation of dust removal techniques',
            'Explanation of basic computer maintenance procedures'
          ]
        },
        {
          name: 'Maintenance of Computers: Battery Charging and DVD Lens Cleaning',
          learningOutcome: 'Demonstrate battery replacement/charging procedures and cleaning of a DVD/optical drive lens.',
          knowledge: [
            'Demonstration of battery replacement and charging',
            'Demonstration of DVD lens cleaning'
          ]
        }
      ]
    }
  ]
};
