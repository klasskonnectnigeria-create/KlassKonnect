// SS2 Computer Hardware and GSM Repairs — First and Second Term
// Source: schemeofwork.com "NERDC Curriculum Scheme of Work for Computer Hardware and GSM Repairs"
// URL: https://schemeofwork.com/nerdc-curriculum-scheme-of-work-for-computer-hardware-and-gsm-repairs/
// This source references the older/legacy NERDC curriculum framework and does not claim NESRI 2025
// compliance -> curriculumVersion: legacy.
// Not verified against the official NERDC portal (login-gated / robots-disallowed).
// Administrative weeks (Mid-Term Tests and Assignments, Revision, Examination) are excluded from
// both terms.
// The source itself does not include a Third Term for SS2 (the SS2 breakdown on this page only
// covers First and Second Term) -> Third Term is omitted here, not excluded for lack of content.
// This is the standalone new "Computer Hardware and GSM Repairs" trade subject (one of the 6 NESRI
// 2025 / WAEC-reform trade subjects) and is intentionally separate from the pre-existing legacy
// "GSM Maintenance and Repairs" subject already live at SS2 (theme id 274) — that subject is
// untouched by this import.

export const curriculumData = {
  subject: 'Computer Hardware and GSM Repairs',
  grade: 'SS2',
  curriculumVersion: 'legacy',
  themes: [
    {
      name: 'SS2 Computer Hardware and GSM Repairs',
      topics: [
        // ---------------- FIRST TERM: Introduction to Mobile Phone Technology & GSM Basics ----------------
        {
          name: 'Evolution of Mobile Telecommunication',
          learningOutcome: 'Trace the evolution of mobile telecommunication from 1G to 5G and understand GSM and CDMA technologies.',
          knowledge: [
            'Evolution of mobile telecommunication from 1G to 5G',
            'Understanding GSM and CDMA',
            'Impact of mobile phones on society'
          ]
        },
        {
          name: 'Types of Mobile Phones',
          learningOutcome: 'Differentiate between feature phones and smartphones and identify key brands and operating systems.',
          knowledge: [
            'Feature phones vs. smartphones',
            'Key brands and operating systems (Android, iOS)',
            'Comparison of Android vs. iOS features'
          ]
        },
        {
          name: 'Major Components of a Smartphone',
          learningOutcome: 'Identify and describe the major internal components of a smartphone.',
          knowledge: [
            'Display, battery, and logic board',
            'Cameras, speakers, and microphones',
            'Use of teardown references to study disassembled phone models'
          ]
        },
        {
          name: 'Smartphone Hardware: Input/Output',
          learningOutcome: 'Understand the function of smartphone buttons, touchscreens, and sensors, and practise replacing a physical button component.',
          knowledge: [
            'Buttons and touchscreens',
            'Sensors: proximity, accelerometer, gyroscope',
            'Practical replacement of a physical home button/fingerprint scanner'
          ]
        },
        {
          name: 'Smartphone Storage and Memory',
          learningOutcome: 'Differentiate between RAM and internal storage and understand expandable storage options.',
          knowledge: [
            'RAM vs. internal storage',
            'Expandable storage (MicroSD)',
            'Checking phone storage settings; inserting SIM and MicroSD cards'
          ]
        },
        {
          name: 'Mobile Phone Batteries',
          learningOutcome: 'Identify mobile phone battery types, explain battery capacity, and demonstrate safe handling and removal.',
          knowledge: [
            'Battery types: Li-Ion, Li-Po',
            'Battery capacity (mAh)',
            'Safe handling and safe battery removal techniques'
          ]
        },
        {
          name: 'Introduction to GSM Technology',
          learningOutcome: 'Define GSM and describe its architecture and the function of SIM cards.',
          knowledge: [
            'GSM architecture: BTS, BSC, MSC',
            'SIM cards and their function',
            'Types of SIM cards: Standard, Micro, Nano; use of a SIM cutter'
          ]
        },
        {
          name: 'Mobile Network Services',
          learningOutcome: 'Explain voice calls, SMS, MMS, and data services and configure basic internet APN settings.',
          knowledge: [
            'Voice calls, SMS, and MMS',
            'Data services and how data plans work',
            'Configuring internet APN settings on a phone'
          ]
        },
        {
          name: 'Safety in Phone Repair',
          learningOutcome: 'Identify hazards in phone repair work and use appropriate safety gear and workspace organization.',
          knowledge: [
            'Hazards: battery explosion, electrostatic discharge (ESD)',
            'Use of ESD mats and straps',
            'Proper workspace organization'
          ]
        },
        // ---------------- SECOND TERM: Basic Mobile Phone Hardware Repair ----------------
        {
          name: 'Repair Tools and Equipment',
          learningOutcome: 'Identify and use specialized mobile phone repair tools and set up a basic repair toolkit.',
          knowledge: [
            'Spudgers, tweezers, and screwdriver sets',
            'Suction cups and heat guns',
            'Setting up a basic phone repair toolkit'
          ]
        },
        {
          name: 'Disassembly and Assembly Techniques',
          learningOutcome: 'Safely open a mobile phone and handle internal components carefully, disassembling and reassembling a phone.',
          knowledge: [
            'Steps to safely open a mobile phone',
            'Careful handling of internal components',
            'Major practical: disassembling and reassembling a feature phone or practice smartphone kit'
          ]
        },
        {
          name: 'Screen and Digitizer Replacement',
          learningOutcome: 'Differentiate between LCD, OLED, and digitizer components and understand the cracked-screen repair process.',
          knowledge: [
            'LCD vs. OLED vs. digitizer',
            'Repair process for cracked screens',
            'Major practical: removing and replacing a screen on a practice phone model'
          ]
        },
        {
          name: 'Battery Replacement',
          learningOutcome: 'Safely remove and replace a phone battery, understanding adhesive use.',
          knowledge: [
            'Safe battery removal and replacement',
            'Adhesive use in battery replacement',
            'Major practical: replacing a battery on a practice phone'
          ]
        },
        {
          name: 'Charging Port and Speaker Replacement',
          learningOutcome: 'Diagnose charging and audio faults and replace a charging port and speaker.',
          knowledge: [
            'Diagnosing charging and audio faults',
            'Replacing a charging port',
            'Major practical: replacing a charging port and speaker on a practice phone'
          ]
        },
        {
          name: 'Camera and Button Replacement',
          learningOutcome: 'Diagnose faulty cameras and buttons and perform their replacement.',
          knowledge: [
            'Diagnosing faulty cameras and buttons',
            'Major practical: replacing rear/front cameras and side buttons'
          ]
        },
        {
          name: 'Introduction to Software Flashing',
          learningOutcome: 'Define firmware and flashing and become familiar with common flashing tools.',
          knowledge: [
            'Definition of firmware and flashing',
            'Flashing tools: SP Flash Tool, Odin',
            'Teacher demonstration of flashing firmware on a test Android phone'
          ]
        },
        {
          name: 'Common Hardware Faults and Troubleshooting I',
          learningOutcome: 'Troubleshoot common mobile hardware issues such as no power, not charging, and no display.',
          knowledge: [
            'No power faults',
            'Not charging faults',
            'No display faults; simulated diagnosis of unplugged battery ribbon cable'
          ]
        },
        {
          name: 'Common Hardware Faults and Troubleshooting II',
          learningOutcome: 'Troubleshoot network, sound, and camera faults using continuity testing with a multimeter.',
          knowledge: [
            'No network and poor sound faults',
            'Faulty camera troubleshooting',
            'Using a multimeter to test continuity on flex cables; diagnosing a "No SIM" error'
          ]
        }
      ]
    }
  ]
};
