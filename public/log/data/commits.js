// ============================================================
// commits.js — your life as a git history.
// branch keys must match the --<name> color vars in css/theme.css
// Order oldest → newest; the feed renders newest first.
//
// Timing fields (all optional):
//   end:     "Mon YYYY"  → a finished span; shows "start → end" + a duration pill
//   ongoing: true        → still happening; shows "start → present" + a live chip
//   dur:     "48h"       → override the auto pill (e.g. a hackathon)
//   (none of the above)  → a single point-in-time event (e.g. a shipped project)
//
// Projects use a single `date` = when they were finished/shipped.
// ============================================================

export const BRANCHES = {
  school:   { label: "school",       color: "var(--school)" },
  work:     { label: "work",         color: "var(--work)" },
  projects: { label: "projects",     color: "var(--projects)" },
  student:  { label: "student-team", color: "var(--student)" },
  learning: { label: "learning",     color: "var(--learning)" },
  main:     { label: "main",         color: "var(--accent)" },
};

export const COMMITS = [
  { branch: "learning", hash: "c0de7a2", date: "Oct 2022", dur: "course", msg: "Complete C# Unity Game Developer (Udemy)",
    add: ["Unity + C# foundations", "OOP & event-driven design", "singleton & factory patterns"], del: [] },

  { branch: "school",   hash: "8e2c5b0", date: "Feb 2023", end: "Jul 2024", msg: "Started Bachelor of CS @ Swinburne",
    add: ["Swinburne International Excellence Scholarship"], del: [] },

  { branch: "projects", hash: "a1607b5", date: "Oct 2023", msg: "Algo Visualizer",
    add: ["Animates BFS / DFS / A* pathfinding on a 2D grid", "Python · CLI + GUI"],
    del: [], url: "https://github.com/yens5757/algo-visualizer" },

  { branch: "projects", hash: "fa5e1d0", date: "Jun 2024", msg: "Ray Vanguard",
    add: ["2D arcade space shooter with an upgrade shop", "C# · SplashKit"],
    del: [], url: "https://github.com/yens5757/ray-vanguard" },

  { branch: "school",   hash: "a01f3e2", date: "Jun 2024", ongoing: true, msg: "Transferred to CS @ Monash",
    add: ["GPA 3.5 / 4.0", "major: Advanced Computer Science"], del: ["Swinburne"] },

  { branch: "projects", hash: "7d2b9c4", date: "Nov 2024", msg: "Driver Tracker",
    add: ["Full-stack driver dispatch + task allocation system", "Angular · Node/Express · MongoDB · Socket.io · AWS"],
    del: [], url: "https://github.com/yens5757/driver-tracker" },

  { branch: "learning", hash: "5a71b09", date: "Nov 2024", end: "Feb 2025", msg: "Graduated Ravi's Study Program",
    add: ["intensive DSA + coding efficiency", "industry best-practice insights", "networked with Big Tech engineers"], del: [] },

  { branch: "projects", hash: "b6f0d33", date: "Feb 2025", msg: "KVis",
    add: ["A Redis clone with replication + snapshot persistence", "Python · asyncio · RESP protocol"],
    del: [], url: "https://github.com/yens5757/kvis" },

  { branch: "projects", hash: "3c8a1f0", date: "Mar 2025", msg: "AXON",
    add: ["Study-roadmap generator — 3rd, First Timers Prize @ UniHack (48h)", "React · React Flow · LangFlow"],
    del: [], url: "https://devpost.com/software/axon-learning" },

  { branch: "student",  hash: "e4d7a91", date: "Jul 2025", end: "Nov 2025", msg: "Education Officer @ Monash Assistive Tech",
    add: ["taught programming + Unity workshops", "reached kids from disadvantaged backgrounds"], del: [] },

  { branch: "student",  hash: "5a1d8f9", date: "Aug 2025", end: "Jul 2026", msg: "Software team @ Monash Nova Rover",
    add: ["extended the GUI in TypeScript + React", "camera config management feature", "Gazebo → Unity sim migration (C#)"],
    del: [] },

  { branch: "work",     hash: "f44a1b8", date: "Oct 2025", end: "Mar 2026", msg: "Software Developer @ Connect3",
    add: ["Next.js + TypeScript, Tailwind, shadcn/ui", "Supabase Postgres + pgvector", "OpenAI-embedding semantic search"],
    del: [] },

  { branch: "work",     hash: "2c8e6a1", date: "Nov 2025", end: "Feb 2026", msg: "Software Engineer Intern @ Culture Amp",
    add: ["migrated React components across repos", "fixed a script-injection vuln", "untangled Tailwind layering conflicts"],
    del: [] },

  { branch: "student",  hash: "9c1e7a2", date: "Mar 2026", end: "Aug 2026", msg: "ML team member @ DeepNeuron",
    add: ["rebuilt the fingerspelling model", "97.4% validation accuracy"], del: ["the old fingerspelling model"] },

  { branch: "projects", hash: "1f6b0ad", date: "Jun 2026", msg: "Med Track",
    add: ["Medication tracker with patient + clinician roles", "Kotlin · Jetpack Compose · Room · Retrofit · Gemini"],
    del: [], url: "https://github.com/yens5757/MedTrack" },

  { branch: "projects", hash: "6b2f0e4", date: "Aug 2026", ongoing: true, msg: "TaskFlow",
    add: ["Event + task dashboard for Monash Squash Club, integrating the Humanitix API with PostgreSQL",
          "Led a team of 5; cut page load times ~85%", "Next.js · TypeScript · PostgreSQL · Drizzle"],
    del: [], url: "https://gitlab.com/jguu0036/fit3162-event-planner" },

  { branch: "projects", hash: "d4e91c7", date: "Oct 2026", msg: "Order Flow Watch",
    add: ["Do brokers paid for order flow give worse fills? Joins SEC Rule 605 + 606 disclosures",
          "Weekly automated pipeline: Python · DuckDB/SQL · React + TypeScript · GitHub Actions"],
    del: [], url: "https://yens5757.github.io/order-flow-watch/" },

  { branch: "work",     hash: "a7c3d58", date: "Nov 2026", end: "Feb 2027", msg: "Incoming Strategy and Product Intern @ Jane Street",
    add: ["Hong Kong"], del: [] },

  { branch: "main",    hash: "HEAD",    date: "Dec 2026", msg: "Graduating",
    add: ["open for grad role"], del: [] },
];
