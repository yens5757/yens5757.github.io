// ============================================================
// data.ts — all site content. Edit here; the components only lay it out.
// ============================================================
import { IconName } from './icon.component';

export interface Entry {
  title: string;
  org: string;
  when: string;
  points: string[];
  where?: string;
  url?: string;
  tags?: string[];
  current?: boolean;
  upcoming?: boolean;
}

export interface Project {
  name: string;
  kicker: string;
  summary: string;
  tags: string[];
  icon: IconName;
  links: { label: string; href: string; icon: IconName }[];
  featured?: boolean;
  stats?: string[];
}

export const PROFILE = {
  name: 'Aiken Lee',
  title: 'Computer Science at Monash University',
  status: 'Open to graduate opportunities',
  lead:
    'Final-year Computer Science student at Monash University, graduating in December 2026. ' +
    'Incoming Strategy and Product Intern at Jane Street in Hong Kong, and previously a Software Engineer ' +
    'Intern at Culture Amp. I build full-stack products and data pipelines, and I enjoy turning messy ' +
    'real-world data, from markets to everyday apps, into something people can use.',
  facts: [
    { icon: 'pin' as IconName, text: 'Melbourne, Australia' },
    { icon: 'cap' as IconName, text: 'Graduating Dec 2026' },
    { icon: 'chat' as IconName, text: 'English · Cantonese · Mandarin' },
  ],
  email: 'chikitlee2001@gmail.com',
  linkedin: 'https://linkedin.com/in/aikenlee',
  github: 'https://github.com/yens5757',
  resume: 'resume.pdf',
};

export const WORK: Entry[] = [
  {
    title: 'Strategy and Product Intern', org: 'Jane Street', where: 'Hong Kong',
    when: 'Nov 2026 – Feb 2027', upcoming: true, points: [],
  },
  {
    title: 'Software Engineer Intern', org: 'Culture Amp', where: 'Melbourne', when: 'Nov 2025 – Feb 2026',
    points: [
      'Migrated internal React components across unmaintained repos, coordinating visual changes with designers.',
      'Resolved dependency and Tailwind layering conflicts to improve build stability and fix styling issues.',
      'Identified and resolved production issues, including data duplication and a potential script-injection vulnerability.',
      'Reworked non-standard code to company standards to improve maintainability and consistency.',
    ],
    tags: ['React', 'Tailwind CSS', 'Web security'],
  },
  {
    title: 'Software Developer', org: 'Connect3', url: 'https://connect3.app', where: 'Melbourne', when: 'Oct 2025 – Mar 2026',
    points: [
      'Built the frontend in Next.js and TypeScript with Tailwind and shadcn/ui, including core UI components and interactions.',
      'Helped design the database on Supabase Postgres, using pgvector and OpenAI embeddings for semantic search.',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'OpenAI API'],
  },
  {
    title: 'Programming Bootcamp Tutor', org: 'Monash University', where: 'Melbourne', when: 'Jul 2025',
    points: [
      'Led group sessions on Python fundamentals and guided students through programming tasks.',
      'Helped students debug their code and learn basic data structures and algorithms.',
    ],
    tags: ['Python', 'Teaching'],
  },
];

export const TEAMS: Entry[] = [
  {
    title: 'Machine Learning Team Member', org: 'Monash DeepNeuron', where: 'Melbourne', when: 'Mar 2026 – Aug 2026',
    points: [
      'Responsible for the model pipeline of SignAI, which translates Australian Sign Language (Auslan) to English.',
      'Trained an Auslan fingerspelling classifier to 97.4% validation accuracy, cutting error by ~60% over the baseline.',
    ],
    tags: ['Machine learning', 'Python'],
  },
  {
    title: 'Software Team Member', org: 'Monash Nova Rover', where: 'Melbourne', when: 'Aug 2025 – Jul 2026',
    points: [
      'Extended the internal GUI using TypeScript and React, and built a camera configuration management feature.',
      'Helped migrate the simulation environment from Gazebo to Unity, developing C# scripts, rover models and terrain.',
    ],
    tags: ['TypeScript', 'React', 'Unity', 'C#'],
  },
  {
    title: 'Education Officer', org: 'Monash Assistive Tech Team', where: 'Melbourne', when: 'Jul 2025 – Nov 2025',
    points: [
      'Ran programming and Unity workshops on campus and with external organisations.',
      'Delivered STEM workshops for children from disadvantaged backgrounds.',
    ],
    tags: ['Teaching', 'Unity'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Order Flow Watch', kicker: 'Featured · Oct 2026', icon: 'chart', featured: true,
    summary:
      'Do retail brokers that get paid for routing customer orders give those customers worse prices? ' +
      'An automated pipeline that collects new SEC Rule 605 and 606 disclosures every week, analyses ' +
      'millions of rows with SQL and statistical tests, and publishes an interactive website explaining ' +
      'the results to non-experts.',
    stats: ['Weekly automated refresh', '4M+ rows a month', 'SQL + permutation tests'],
    tags: ['Python', 'DuckDB / SQL', 'React', 'TypeScript', 'GitHub Actions'],
    links: [
      { label: 'Live site', href: 'https://yens5757.github.io/order-flow-watch/', icon: 'ext' },
      { label: 'Code', href: 'https://github.com/yens5757/order-flow-watch', icon: 'github' },
    ],
  },
  {
    name: 'TaskFlow', kicker: 'Team lead · Aug 2026 – Present', icon: 'layers', featured: true,
    summary:
      'A full-stack event and task management dashboard for Monash Squash Club, integrating the Humanitix API ' +
      'with PostgreSQL. I led a team of 5 through planning, requirements gathering and client feedback, and cut ' +
      'page load times by ~85% by moving non-blocking database writes out of the request path.',
    stats: ['~85% faster page loads', 'Team of 5 · real client', 'Humanitix API integration'],
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Drizzle ORM'],
    links: [
      { label: 'Live site', href: 'https://task-flow-liard-eight.vercel.app/', icon: 'ext' },
      { label: 'GitLab', href: 'https://gitlab.com/jguu0036/fit3162-event-planner', icon: 'code' },
    ],
  },
  {
    name: 'Med Track', kicker: 'Mobile · Mar – Jun 2026', icon: 'phone',
    summary: 'Android medication tracker using MVVM and Room persistence. Integrates Google Gemini and the OpenFDA API, with separate patient and clinician roles and SQL-computed statistics.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Gemini API', 'OpenFDA'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/MedTrack', icon: 'github' }],
  },
  {
    name: 'KVis', kicker: 'Systems · Dec 2024 – Feb 2025', icon: 'database',
    summary: 'Redis-compatible key-value server: key expiry, RDB snapshot loading, primary–replica replication with a PSYNC handshake and offset-based WAIT, and a streaming RESP parser that handles 256 MB writes in 1.2 s.',
    tags: ['Python', 'asyncio', 'TCP', 'Redis protocol'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/kvis', icon: 'github' }],
  },
  {
    name: 'Driver Tracker', kicker: 'Full-stack · Sep – Nov 2024', icon: 'route',
    summary: 'Driver and package management system deployed on AWS, with REST APIs, status filtering, form validation and Google Gemini for driver assistance.',
    tags: ['Angular', 'Node.js / Express', 'MongoDB', 'AWS', 'Gemini API'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/driver-tracker', icon: 'github' }],
  },
  {
    name: 'AXON', kicker: 'Hackathon · Mar 2025', icon: 'trophy',
    summary: 'Led a 6-person team to build an AI study-roadmap generator in 48 hours, placing 3rd in the First Timers Prize at UniHack.',
    tags: ['React', 'React Flow', 'Node.js', 'LangFlow'],
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/axon-learning', icon: 'ext' }],
  },
  {
    name: 'Ray Vanguard', kicker: 'Game · Jun 2024', icon: 'game',
    summary: '2D arcade space shooter with an upgrade shop, structured with object-oriented design patterns and a custom game loop.',
    tags: ['C#', 'SplashKit', 'OOP'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/ray-vanguard', icon: 'github' }],
  },
  {
    name: 'Algo Visualizer', kicker: 'Algorithms · Oct 2023', icon: 'code',
    summary: 'Animates BFS, DFS and A* pathfinding step by step on a 2D grid.',
    tags: ['Python', 'pygame'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/algo-visualizer', icon: 'github' }],
  },
];

export const EDUCATION: Entry[] = [
  {
    title: 'Bachelor of Computer Science', org: 'Monash University', where: 'Melbourne', when: 'Jun 2024 – Dec 2026',
    points: [
      'GPA 3.5 / 4.0.',
      'Transferred from Swinburne with 11 of 12 units credited.',
      'Coursework: Data Structures & Algorithms, Databases, Web Development, Discrete & Continuous Mathematics.',
    ],
  },
  {
    title: 'Bachelor of Computer Science', org: 'Swinburne University of Technology', where: 'Melbourne', when: 'Feb 2023 – Jul 2024',
    points: [
      'Swinburne International Excellence Scholarship.',
      'Coursework: Object-Oriented Programming, Cloud Computing, Networking & Systems, Introduction to AI.',
    ],
  },
];

export const AWARDS = [
  { what: '3rd place, First Timers Prize', where: 'UniHack 2025' },
  { what: 'International Excellence Scholarship', where: 'Swinburne University of Technology' },
  { what: "Ravi's Study Program", where: 'Intensive data structures & algorithms program, Nov 2024 – Feb 2025' },
  { what: 'Complete C# Unity Game Developer 2D & 3D', where: 'Udemy, 2022' },
];

export const SKILLS: { group: string; icon: IconName; items: string[] }[] = [
  { group: 'Languages', icon: 'code', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C#', 'C++', 'Kotlin', 'Java', 'Ruby'] },
  { group: 'Frameworks & libraries', icon: 'layers', items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Node.js', 'Express', 'Jetpack Compose', 'asyncio'] },
  { group: 'Databases & cloud', icon: 'database', items: ['PostgreSQL', 'Supabase', 'pgvector', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'DuckDB', 'AWS', 'Azure'] },
  { group: 'Practices & tools', icon: 'wrench', items: ['Data structures & algorithms', 'OOP', 'Functional programming', 'REST APIs', 'Unit testing', 'Git', 'GitHub Actions', 'Linux (NixOS)', 'Jira'] },
];
