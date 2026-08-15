import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Manual curriculum structure extracted from PDF
// This will be updated with actual PDF parsing later
export const curriculumData = {
  subject: 'Mathematics',
  grade: 'Primary 4',
  themes: [
    {
      name: 'NUMBER NUMERATION',
      topics: [
        {
          name: 'Whole Numbers',
          learningOutcome: 'Add, subtract, count and write whole numbers up to millions and find the LCM and HCF of 2-digit numbers.',
          focalCompetency: 'Counting up to one million and in groups of 5\'s, 7\'s 12\'s and 60\'s.',
          knowledge: [
            'Counting up to one million',
            'Counting in 5\'s, 7\'s, 12\'s and 60\'s'
          ],
          skills: [
            'Counting in groups',
            'Converting seconds into minutes and hours'
          ],
          competencies: 'Information literacy, pupils use information accurately and creatively while using counters or counting blocks to count one million and in 5\'s, 7\'s, 12\'s and 60\'s.',
          values: 'Honesty as pupils are sincere and honest with each number counted for each group.',
          learningActivities: [
            'Use counters or counting blocks to count in tens, hundreds and thousands up to one million',
            'In groups, count in bundle of 5\'s, count weeks of the month, month and year, dozens in 120 etc.',
            'Count numbers of seconds into minutes and hours.'
          ],
          resources: ['Sticks', 'Bottle covers', 'Calendars', 'Cartons of drinks', 'Multimedia applications', 'Counting blocks'],
          evaluationGuide: [
            'Count numbers up to one million',
            'Display counting skills in bundles of 5, 7, 12 etc',
            'Determine number of days in a week, weeks in the month using the calendar',
            'Convert seconds into minutes, vice versa'
          ]
        },
        {
          name: 'Whole Numbers (Contd.)',
          learningOutcome: 'Add, subtract, count and write whole numbers up to millions and find the LCM and HCF of 2-digit numbers.',
          focalCompetency: 'Determining the correct place values of numbers, writing in Roman Numerals numbers up to 1000=M and Solving Quantitative aptitude.',
          knowledge: [
            'Place value of digits',
            'Ordering of whole numbers',
            'Roman numerals',
            'Quantitative reasoning'
          ],
          skills: [
            'Expanding numbers',
            'Generating and solving quantitative aptitude problems on place values and roman numerals'
          ],
          competencies: 'ICT and Digital Competencies as pupils use digital technologies tools to enhance learning while watching technologies on techniques of obtaining roman numerals.',
          values: 'Critical Thinking as pupils interpret information and draw conclusions based on available numbers while expanding numbers and place them appropriately using Th, H, T, U.',
          learningActivities: [
            'Use number blocks, cards or place values bingo to build numbers',
            'Write the built numbers in standard form e.g. 45, 127, 945 etc.',
            'In group, use place value chats to explain expanded number forms e.g 45 = 40+50+6 by using H, T , U.',
            'Order numbers based on their values in ascending or descending order',
            'Watch short videos on the techniques of obtaining roman numerals and write roman numerals up to 1000',
            'Generate quantitative aptitude on place values and roman numerals and solve them'
          ],
          resources: ['Place value charts', 'Number charts', 'Flash cards', 'Multimedia applications', 'Applications', 'Roman numeral charts', 'Number cards/blocks', 'Place values Bingos'],
          evaluationGuide: [
            'Write the place value of a given four-digit numbers',
            'Order whole numbers up to four-digit numbers',
            'Express numbers in roman numerals and vice-versa',
            'Solve quantitative aptitude problems on place values and roman numerals'
          ]
        },
        {
          name: 'Fractions',
          learningOutcome: 'Differentiate types of fractions and solve fraction related problems.',
          focalCompetency: 'Solving fraction-related problems in everyday life.',
          knowledge: [
            'Proper fractions',
            'Improper fractions',
            'Mixed numbers',
            'Decimal fractions',
            'Equivalent fractions',
            'Quantitative reasoning'
          ],
          skills: [
            'Describing proper and improper fractions using a real-life situation'
          ],
          competencies: 'ICT and Digital Competencies as pupils assess, retrieve and exchange information via internet on the difference between proper and improper fractions.',
          values: 'Perseverance as pupils are tenacious and eager to learn ways of solving fraction-related problems.',
          learningActivities: [
            'Search the internet for the difference between proper and improper fractions and use objects, charts and plane shapes explain them.',
            'Change improper fractions into mixed numbers. E.g. 2/2 = 1 1/2',
            'Use place value chart to convert fractions into decimals',
            'Use fractional charts to illustrate equivalent fractions'
          ],
          resources: ['Objects', 'Plane shapes', 'Chart', 'Fractional charts', 'Place value chart'],
          evaluationGuide: [
            'Differentiate between proper and improper fractions',
            'Convert improper fractions to mixed numbers',
            'Convert fractions into decimals',
            'Write equivalent fractions for a given fraction',
            'Solve exercises on quantitative aptitude'
          ]
        }
      ]
    },
    {
      name: 'BASIC OPERATIONS',
      topics: [
        {
          name: 'Addition and Subtraction',
          learningOutcome: 'Add, subtract, multiply, divide numbers, decimals and differentiate types of fractions.',
          focalCompetency: 'Adding and subtracting three 4-digit numbers.',
          knowledge: [
            'Addition and subtraction of whole numbers',
            'Addition and subtraction of three 4-digit numbers',
            'Carry out addition and subtraction in everyday life activities',
            'Quantitative reasoning on addition and subtraction of 4-digit whole numbers'
          ],
          skills: [
            'Solving addition and subtraction related problems in everyday life'
          ],
          competencies: 'Collaboration as pupils exercise flexibility and willingness to be helpful in making necessary compromises to accomplish a common goal while working in groups to solve addition and subtraction related problems.',
          values: 'Accountability as pupils take responsibility for their actions, accept their duties while on group task to solve addition and subtraction related problems.',
          learningActivities: [
            'In groups, use number cards, number tiles, number blocks, counting cubes digit cards etc. to: a dd 4-digit numbers with or without remainder',
            'Subtract 4-digit numbers with or without remainder',
            'Add and subtract three 4-digit numbers involving everyday life activities',
            'Solve quantitative aptitude problems involving addition and subtraction of whole numbers in 4-digits'
          ],
          resources: ['Charts', 'Flash cards', 'Cardboard', 'Multimedia applications', 'number cards', 'number tiles', 'number blocks', 'counting cubes', 'digit cards etc.'],
          evaluationGuide: [
            'Add 4-digit numbers with or without remainder',
            'Subtract 4-digit numbers with or without remainder',
            'Solve accurately addition and subtract related problem in everyday life activities',
            'Solve quantitative aptitude problems involving addition and subtraction of whole numbers'
          ]
        }
      ]
    },
    {
      name: 'MENSURATION',
      topics: [
        {
          name: 'Money (1)',
          learningOutcome: 'Solve logical problems involving money, mensuration problems relating to length, weight, capacity, time, area etc. as well as addition and subtraction in open sentences.',
          focalCompetency: 'Solving monetary and measurement problems',
          knowledge: [
            'Nigerian currency',
            'Money transactions',
            'Making change',
            'Quantitative reasoning involving money'
          ],
          skills: [
            'Solving money-related problems in everyday life'
          ],
          competencies: 'ICT and Digital Competencies',
          values: 'Honesty and integrity in financial transactions',
          learningActivities: [
            'Calculate costs of items',
            'Make change from transactions',
            'Solve money word problems'
          ],
          resources: ['Money materials', 'Play money', 'Shopping scenarios'],
          evaluationGuide: [
            'Solve money-related problems',
            'Make correct change',
            'Complete quantitative reasoning on money'
          ]
        }
      ]
    },
    {
      name: 'GEOMETRY',
      topics: [
        {
          name: 'Plane Shapes',
          learningOutcome: 'Locate lines of symmetry, cardinal points and identify the differences between 2-D and 3-D objects.',
          focalCompetency: 'Identifying plane shapes and their properties',
          knowledge: [
            'Properties of plane shapes',
            'Lines of symmetry',
            'Cardinal points',
            '2-D vs 3-D objects'
          ],
          skills: [
            'Identifying and drawing plane shapes'
          ],
          competencies: 'Spatial reasoning',
          values: 'Precision and accuracy',
          learningActivities: [
            'Draw and identify plane shapes',
            'Find lines of symmetry',
            'Classify 2-D and 3-D objects'
          ],
          resources: ['Geoboards', 'Shape templates', 'Grid paper'],
          evaluationGuide: [
            'Identify plane shapes',
            'Draw lines of symmetry',
            'Differentiate 2-D and 3-D objects'
          ]
        }
      ]
    },
    {
      name: 'EVERYDAY STATISTICS',
      topics: [
        {
          name: 'Bar Graphs',
          learningOutcome: 'Present, read and interpret information from bar graphs.',
          focalCompetency: 'Reading and interpreting bar graphs',
          knowledge: [
            'Bar graph construction',
            'Reading bar graphs',
            'Interpreting data from bar graphs'
          ],
          skills: [
            'Creating and analyzing bar graphs'
          ],
          competencies: 'Data literacy',
          values: 'Accuracy in data representation',
          learningActivities: [
            'Collect and organize data',
            'Create bar graphs',
            'Interpret and analyze graphs'
          ],
          resources: ['Graph paper', 'Rulers', 'Data sets'],
          evaluationGuide: [
            'Create accurate bar graphs',
            'Read and interpret bar graph data',
            'Answer questions based on graphs'
          ]
        }
      ]
    }
  ]
};

export function getCurriculumData() {
  return curriculumData;
}

export function getTheme(themeName) {
  return curriculumData.themes.find(t => t.name === themeName);
}

export function getTopic(themeName, topicName) {
  const theme = getTheme(themeName);
  if (!theme) return null;
  return theme.topics.find(t => t.name === topicName);
}
