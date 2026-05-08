// src/data/about.ts

export interface AboutBio {
  text: string;
}

export interface ExperienceItem {
  role: string;
  timeframe: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  description?: string;
}

export interface InterestItem {
  name: string;
  icon: string;
  description: string;
}

export const ABOUT_BIO: AboutBio = {
  text:
    "Dagim Tesfaye is a Full-Stack Developer & UI Engineer with 3+ years of experience building clean, performant, and accessible web applications. Based in Ethiopia, he specializes in modern JavaScript/TypeScript ecosystems including React, Node.js, and Tailwind CSS.\n\nWith a BSc in Computer Science from Addis Ababa Science and Technology University, Dagim combines academic foundations with hands-on experience delivering production-grade software. His approach centers on turning complex problems into simple, elegant solutions — prioritizing user experience, code quality, and performance at every layer.\n\nWhen he's not crafting digital experiences, Dagim contributes to open source projects, writes about web development, and explores the intersection of technology and design.",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Freelance Full-Stack Developer",
    timeframe: "2023–Present",
    description:
      "Delivering end-to-end web solutions for diverse clients, from startups to established businesses.",
    highlights: [
      "Built responsive web applications using React, TypeScript, and Tailwind CSS",
      "Designed and implemented RESTful APIs with Node.js and Express",
      "Managed project lifecycles from requirements gathering to deployment",
      "Achieved 95%+ client satisfaction rate through iterative feedback",
    ],
  },
  {
    role: "Open Source Contributor",
    timeframe: "2022–Present",
    description:
      "Actively contributing to community-driven projects and developer tools.",
    highlights: [
      "Contributed bug fixes and feature improvements to open source repositories",
      "Collaborated with distributed teams on code review and feature design",
      "Published reusable components and utility libraries",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "BSc in Computer Science",
    school: "Addis Ababa Science and Technology University",
    description:
      "Focused on software engineering, algorithms, and data structures.",
  },
];

export const INTERESTS: InterestItem[] = [
  {
    name: "Photography / Visual Arts",
    icon: "Camera",
    description: "Capturing moments and finding beauty in everyday scenes",
  },
  {
    name: "Open Source Contribution",
    icon: "Code2",
    description: "Giving back to the developer community",
  },
  {
    name: "Tech Blogging / Writing",
    icon: "PenTool",
    description: "Sharing knowledge and experiences through writing",
  },
  {
    name: "Music / Production",
    icon: "Music",
    description: "Exploring sound design and music creation",
  },
  {
    name: "Gaming",
    icon: "Gamepad2",
    description: "Strategy and story-driven games",
  },
  {
    name: "Fitness / Sports",
    icon: "Dumbbell",
    description: "Staying active and disciplined",
  },
  {
    name: "Travel",
    icon: "Globe",
    description: "Exploring new cultures and perspectives",
  },
  {
    name: "Reading",
    icon: "BookOpen",
    description: "Constant learner across tech and fiction",
  },
];

export const ABOUT_TECH_IDS = [1, 2, 3, 4, 5, 6, 7, 9, 11, 12] as const;
