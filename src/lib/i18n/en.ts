import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Unmaze — Help for Children with Dyslexia',
    description:
      'Unmaze is an educational gaming platform for children aged 5-12 with learning differences. Training tools for dyslexia, dyscalculia, and ADHD.',
  },
  nav: {
    home: 'home',
    about: 'about',
    conditions: 'conditions',
    test: 'tests',
    blog: 'blog',
    faq: 'FAQ',
    contact: 'contact us',
  },
  hero: {
    greeting: "hi, we're",
    brand: 'unmaze',
    subtitle: 'an app that helps children with dyslexia',
    cta: 'Download app',
    ctaSecondary: 'Learn more',
    trust: 'Free · No ads · Ages 5–12',
  },
  features: {
    heading: 'is:',
    items: [
      {
        title: 'Game-Based Exercises',
        description:
          'Children complete tasks level by level. The game format keeps learning engaging, while the achievement system shifts focus from success to the process.',
      },
      {
        title: 'Progress Tracking',
        description:
          'Essential for adjusting teaching methods and finding an individual approach for each child. In unmaze you can track detailed dynamics and progress.',
      },
      {
        title: 'Parent Support',
        description:
          'Being a parent is a daily effort. We know you need help. We share how to interact with your child, support yourself, and maintain your resources.',
      },
      {
        title: 'Speech Therapist Alternative',
        description:
          'Regular sessions with a speech therapist take time. Unmaze is an effective alternative, as the app was developed with the participation of doctors.',
      },
    ],
  },
  conditions: {
    heading: 'how to detect learning differences in a child?',
    dyslexia: {
      label: 'dyslexia',
      signsHeading: 'Signs of Dyslexia',
      description:
        'Dyslexia is not a disease but a learning difference. Here are signs to look out for:',
      symptoms: [
        'expresses thoughts well but reads and writes with errors',
        'considered lazy and inattentive',
        'talented in art, music, sports',
        'learns best through hands-on experience and observation',
        'has difficulty grasping the meaning of what was read',
        'writing and reading show repetitions, additions, transpositions, omissions, and substitutions of letters and words',
        'speaks with hesitations',
        'does not finish sentences',
        'illegible and inconsistent handwriting',
      ],
      learnMore: 'Learn more about dyslexia',
    },
    dyscalculia: {
      label: 'dyscalculia',
      signsHeading: 'Signs of Dyscalculia',
      description:
        'Dyscalculia is difficulty with numbers and math. A child may be bright but struggle with arithmetic:',
      symptoms: [
        'confuses similar-looking digits (6 and 9, 3 and 8)',
        'struggles to memorize multiplication tables',
        'cannot tell time on an analog clock',
        'confuses "more" and "less"',
        'difficulty with mental arithmetic',
        'does not understand the connection between a number and quantity',
        'avoids games involving numbers',
        'problems with spatial orientation (left/right)',
        'difficulty with sequences (days of the week, months)',
      ],
      learnMore: 'Learn more about dyscalculia',
    },
    adhd: {
      label: 'ADHD',
      signsHeading: 'Signs of ADHD',
      description:
        'ADHD is not bad behavior but a brain difference. Watch for the following signs:',
      symptoms: [
        'cannot focus on one task for more than a few minutes',
        'easily distracted by sounds and stimuli',
        'forgets instructions and assignments',
        'cannot wait for their turn',
        'constantly moving, fidgeting',
        'interrupts conversations',
        'frequently loses things',
        'difficulty organizing activities',
        'makes impulsive decisions',
      ],
      learnMore: 'Learn more about ADHD',
    },
    alphabetTitle: 'How do dyslexics see?',
    alphabetHint: 'hover over a letter to find out',
    cta: 'Take the test',
  },
  conditionPages: {
    dyslexia: {
      meta: {
        title: 'Dyslexia in Children — Signs, Diagnosis & Help | Unmaze',
        description:
          'What is dyslexia, how to recognize it in a child, and how Unmaze can help. Signs, correction methods, and support for parents.',
      },
      heading: 'dyslexia in children',
      whatIs: {
        heading: 'What is dyslexia?',
        text: 'Dyslexia is a specific learning difference that affects reading and writing abilities while overall learning capacity remains intact. A child with dyslexia can be intellectually developed, creative, and talented, yet experience significant difficulties recognizing letters, syllables, and words. It is not laziness or the result of poor teaching — it is a brain difference found in 5-10% of children.',
      },
      signs: {
        heading: 'How to recognize dyslexia?',
        items: [
          'The child reads slowly and with errors, despite understanding spoken language well',
          'Confuses similar-looking letters: b/d, p/q, m/w',
          'Skips, rearranges, or adds letters when reading and writing',
          'Has trouble memorizing sight words',
          'Avoids reading aloud and reading-related tasks',
          'Often loses their place when reading text',
          'Expresses thoughts well orally but makes many errors in writing',
          'Handwriting is illegible and changes from day to day',
          'Talented in other areas: drawing, sports, music, building',
        ],
      },
      howHelps: {
        heading: 'How does Unmaze help with dyslexia?',
        text: 'Unmaze offers exercises developed in collaboration with speech therapists and learning specialists. The program adapts to each child\'s level and gradually increases difficulty.',
        items: [
          'Letter and sound recognition exercises',
          'Syllable and whole-word reading practice',
          'Reading comprehension tasks',
          'Progress tracking and identifying weak spots',
          'Game format to maintain motivation',
        ],
      },
      cta: 'Download app',
    },
    dyscalculia: {
      meta: {
        title: 'Dyscalculia in Children — Signs, Diagnosis & Help | Unmaze',
        description:
          'What is dyscalculia, how to recognize it in a child, and how Unmaze can help. Signs, correction methods, and support for parents.',
      },
      heading: 'dyscalculia in children',
      whatIs: {
        heading: 'What is dyscalculia?',
        text: 'Dyscalculia is a specific learning difference that affects the ability to learn mathematics. A child with dyscalculia can be intellectually developed but experience significant difficulties with numbers, arithmetic, and mathematical concepts. It is not laziness or the result of poor teaching — it is a brain difference found in 3-7% of children.',
      },
      signs: {
        heading: 'How to recognize dyscalculia?',
        items: [
          'Confuses similar-looking digits: 6 and 9, 3 and 8',
          'Struggles to memorize multiplication tables even after repeated practice',
          'Cannot tell time on an analog clock',
          'Confuses "more" and "less", "before" and "after"',
          'Counts on fingers even in later grades',
          'Does not understand the connection between a number and quantity of objects',
          'Difficulty with money — cannot calculate change',
          'Problems with spatial orientation: left/right, up/down',
          'Avoids board games with numbers and scorekeeping',
        ],
      },
      howHelps: {
        heading: 'How does Unmaze help with dyscalculia?',
        text: 'Unmaze uses visual and game-based methods to develop number sense. Exercises are designed with the specific needs of children with dyscalculia in mind.',
        items: [
          'Visual exercises for understanding quantity',
          'Number comparison and sequencing games',
          'Basic arithmetic practice in game format',
          'Spatial reasoning tasks',
          'Gradual difficulty increase adapted to the child',
        ],
      },
      cta: 'Download app',
    },
    adhd: {
      meta: {
        title: 'ADHD in Children — Signs, Diagnosis & Help | Unmaze',
        description:
          'What is ADHD, how to recognize it in a child, and how Unmaze can help. Signs, support methods, and help for parents.',
      },
      heading: 'ADHD in children',
      whatIs: {
        heading: 'What is ADHD?',
        text: 'ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental condition that affects a child\'s ability to concentrate, control impulses, and regulate activity levels. ADHD is not related to intelligence — many children with ADHD are very smart and talented. It is one of the most common childhood conditions, found in 5-8% of school-age children.',
      },
      signs: {
        heading: 'How to recognize ADHD?',
        items: [
          'Cannot focus on one task for more than a few minutes',
          'Constantly moving, fidgeting, cannot sit still',
          'Easily distracted by sounds, objects, and thoughts',
          'Forgets instructions, assignments, and belongings',
          'Interrupts others, answers before hearing the full question',
          'Cannot wait their turn in games and conversations',
          'Difficulty with organization: mixes up order of actions',
          'Makes impulsive decisions without considering consequences',
          'Easily switches between tasks but struggles to finish them',
        ],
      },
      howHelps: {
        heading: 'How does Unmaze help with ADHD?',
        text: 'Unmaze is designed with the attention needs of children with ADHD in mind. Short exercises, vivid feedback, and gamification help maintain focus.',
        items: [
          'Short 3-5 minute sessions adapted to attention span',
          'Instant feedback and rewards for every step',
          'Visual timers and clear instructions',
          'Gamification: levels, achievements, streaks',
          'Flexible pace — the child controls the speed',
        ],
      },
      cta: 'Download app',
    },
  },
  videos: {
    items: ['Progress', 'Game Catalog', 'Game', 'Error', 'Control', 'Articles'],
    placeholder: 'video coming soon',
  },
  guide: {
    heading:
      'if you took the test and received a positive result, you probably have many questions, the main one being — what to do next',
    subtext: 'we created a ',
    linkText: 'guide for parents',
    subtextEnd: ' that will answer all your questions',
    cta: 'Read guide',
  },
  faq: {
    heading: 'FAQ',
    items: [
      {
        question: 'Does Unmaze really help with dyslexia correction?',
        answer:
          'Unmaze was developed with the participation of speech therapists and learning specialists. Exercises are based on scientific methods of dyslexia correction and adapt to each child\'s level.',
      },
      {
        question: 'How do the game mechanics work?',
        answer:
          'Children complete tasks level by level. The game format keeps learning engaging, while the achievement system motivates continued practice.',
      },
      {
        question: 'What progress tracking metrics are available?',
        answer:
          'You can track dynamics for each type of exercise, completion speed, error rate, and overall progress over a selected period.',
      },
      {
        question: 'Is the app free?',
        answer:
          'Basic features are free. A premium subscription unlocks AI features: adaptive programs, progress analysis, and personalized recommendations.',
      },
    ],
  },
  blog: {
    heading: 'Blog',
    description: 'Articles about dyslexia, dyscalculia, and ADHD. Tips for parents and specialists.',
    readMore: 'Read more',
    previewHeading: 'read our articles:',
  },
  footer: {
    contact: 'Contact us',
    businessEmail: 'business inquiries',
    email: 'manager@unmaze.ru',
    callUs: 'call us',
    phone: '+972 51 242 66 14',
    rights: '© 2026 Unmaze. All rights reserved.',
    privacy: 'Privacy Policy',
    collaboration: 'collaboration',
  },
  tests: {
    heading: 'Screening Tests',
    description: 'Choose a test to assess your child. These tests are not a diagnosis — they help identify areas that may need professional attention.',
    items: [
      {
        key: 'dyslexia',
        title: 'Dyslexia',
        subtitle: 'Reading & Writing',
        description: 'Assess difficulties with reading, writing, and text comprehension. Ages 5–12.',
      },
      {
        key: 'dyscalculia',
        title: 'Dyscalculia',
        subtitle: 'Numbers & Math',
        description: 'Assess difficulties with numbers, arithmetic, and mathematical thinking. Ages 5–12.',
      },
      {
        key: 'adhd',
        title: 'ADHD',
        subtitle: 'Attention & Focus',
        description: 'Assess difficulties with concentration, impulsivity, and hyperactivity. Ages 5–12.',
      },
    ],
  },
  test: {
    heading: 'Dyslexia Screening Test',
    description:
      "Answer the questions below to assess your child's risk of dyslexia. This test is not a diagnosis.",
    next: 'Next',
    prev: 'Back',
    submit: 'Get results',
    restart: 'Retake test',
    result: {
      low: 'Low risk of dyslexia',
      medium: 'Medium risk — we recommend consulting a specialist',
      high: 'High risk — please consult a specialist',
    },
    scale: {
      disagree: 'Disagree',
      agree: 'Agree',
    },
  },
  languageSwitcher: {
    ru: 'Рус',
    en: 'Eng',
    he: 'עבר',
  },
}
