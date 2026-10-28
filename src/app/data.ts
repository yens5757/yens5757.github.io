// ============================================================
// data.ts — all site content. Edit here; the components only lay it out.
// ============================================================
import { IconName } from './icon.component';

export interface Entry {
  title: string;
  org: string;
  when: string;
  points: string[];
  tags?: string[];
  current?: boolean;
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
  title: 'Software Engineer · Computer Science at Monash University',
  status: 'Open to graduate software engineering roles',
  lead:
    "Final-year Computer Science student (Advanced Computer Science major) graduating in December 2026. " +
    "I've shipped frontend and security fixes as a software engineering intern at Culture Amp, built " +
    'full-stack and machine-learning features in student teams, and I enjoy projects that turn messy ' +
    'real-world data into something people can use.',
  facts: [
    { icon: 'pin' as IconName, text: 'Melbourne, Australia' },
    { icon: 'cap' as IconName, text: 'Graduating Dec 2026' },
    { icon: 'chat' as IconName, text: 'English · Cantonese · Mandarin' },
  ],
  email: 'chikitlee2001@gmail.com',
  linkedin: 'https://linkedin.com/in/aikenlee',
  github: 'https://github.com/yens5757',
  resume: 'resume.pdf',
  photo: 'photo.jpg',
};

export const WORK: Entry[] = [
  {
    title: 'Software Engineer Intern', org: 'Culture Amp', when: 'Nov 2025 – Feb 2026',
    points: [
      'Migrated React components across repositories.',
      'Found and fixed a script-injection security vulnerability.',
      'Resolved Tailwind CSS layering conflicts.',
    ],
    tags: ['React', 'Tailwind CSS', 'Web security'],
  },
  {
    title: 'Programming Bootcamp Tutor', org: 'Monash University', when: 'Jul 2025',
    points: [
      'Led group sessions on Python fundamentals and guided students through programming tasks.',
      'Helped students debug their code and learn basic data structures and algorithms.',
    ],
    tags: ['Python', 'Teaching'],
  },
];

export const TEAMS: Entry[] = [
  {
    title: 'Machine Learning Team Member', org: 'Monash DeepNeuron', when: 'Mar 2026 – Present', current: true,
    points: ["Rebuilt the team's fingerspelling recognition model, reaching 97.4% validation accuracy."],
    tags: ['Machine learning', 'Python'],
  },
  {
    title: 'Software Developer', org: 'Connect3', when: 'Oct 2025 – Mar 2026',
    points: [
      'Built features in Next.js and TypeScript with Tailwind CSS and shadcn/ui.',
      'Implemented semantic search using OpenAI embeddings stored in Supabase Postgres with pgvector.',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'pgvector', 'OpenAI API'],
  },
  {
    title: 'Software Developer', org: 'Monash Nova Rover', when: 'Aug 2025 – Present', current: true,
    points: [
      "Extended the team's internal software GUI in TypeScript and React, used by over 100 team members.",
      'Built camera configuration management and integrated new camera sensors with ROS 2.',
      'Helped migrate the rover simulation from Gazebo to Unity (C#) for better graphics, physics and performance.',
    ],
    tags: ['TypeScript', 'React', 'ROS 2', 'Unity', 'C#'],
  },
  {
    title: 'Education Officer', org: 'Monash Assistive Tech Team', when: 'Jul 2025 – Nov 2025',
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
    links: [{ label: 'Code', href: 'https://github.com/yens5757/order-flow-watch', icon: 'github' }],
  },
  {
    name: 'AXON', kicker: 'Hackathon · Mar 2025', icon: 'trophy',
    summary: 'Led a team of six to build an AI study-roadmap generator in 48 hours. Placed 3rd for the First Timers Prize at UniHack.',
    tags: ['React', 'React Flow', 'Node.js', 'LangFlow'],
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/axon-learning', icon: 'ext' }],
  },
  {
    name: 'Med Track', kicker: 'Mobile · Jun 2026', icon: 'phone',
    summary: 'Android medication tracker with separate patient and clinician roles.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'Gemini API'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/MedTrack', icon: 'github' }],
  },
  {
    name: 'KVis', kicker: 'Systems · Feb 2025', icon: 'database',
    summary: 'An in-memory database compatible with the Redis protocol: key expiry, snapshot persistence, master–replica replication and asynchronous client handling.',
    tags: ['Python', 'asyncio', 'Networking'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/kvis', icon: 'github' }],
  },
  {
    name: 'Driver Tracker', kicker: 'Full-stack · Nov 2024', icon: 'layers',
    summary: 'Driver and package management system with REST APIs, real-time status updates and third-party API integrations, deployed on AWS.',
    tags: ['Angular', 'Node.js / Express', 'MongoDB', 'Socket.io', 'AWS'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/driver-tracker', icon: 'github' }],
  },
  {
    name: 'Ray Vanguard', kicker: 'Game · Jun 2024', icon: 'game',
    summary: '2D arcade space shooter with an upgrade shop, structured with object-oriented design patterns and a custom game loop.',
    tags: ['C#', 'SplashKit', 'OOP'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/ray-vanguard', icon: 'github' }],
  },
  {
    name: 'Algo Visualizer', kicker: 'Algorithms · Oct 2023', icon: 'route',
    summary: 'Animates BFS, DFS and A* pathfinding step by step on a 2D grid.',
    tags: ['Python', 'pygame'],
    links: [{ label: 'Code', href: 'https://github.com/yens5757/algo-visualizer', icon: 'github' }],
  },
];

export const EDUCATION: Entry[] = [
  {
    title: 'Bachelor of Computer Science — Advanced Computer Science', org: 'Monash University', when: 'Jul 2024 – Dec 2026',
    points: [
      'Transferred from Swinburne with 11 of 12 units credited.',
      'Coursework: Data Structures & Algorithms, Databases, Web Development, Discrete & Continuous Mathematics.',
      'Member of the Monash Algorithms & Problem Solving Club.',
    ],
  },
  {
    title: 'Bachelor of Computer Science — Artificial Intelligence', org: 'Swinburne University of Technology', when: 'Feb 2023 – Jul 2024',
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
  { group: 'Languages', icon: 'code', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C#', 'Kotlin', 'C++', 'Ruby'] },
  { group: 'Frontend', icon: 'layers', items: ['React', 'Angular', 'Next.js', 'Tailwind CSS', 'Jetpack Compose'] },
  { group: 'Backend & data', icon: 'database', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'DuckDB', 'Redis', 'REST APIs'] },
  { group: 'Tools & platforms', icon: 'wrench', items: ['Git', 'GitHub Actions', 'AWS', 'Supabase', 'ROS 2', 'Unity'] },
];
