export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner";

export type SkillItem = {
  id: number;
  name: string;
  icon: string;
  level: SkillLevel;
  experience: string;
};

export const skills: SkillItem[] = [
  {
    id: 1,
    name: "JavaScript",
    icon: "FileCode",
    level: "Expert",
    experience: "3+ years",
  },
  {
    id: 2,
    name: "React",
    icon: "Code2",
    level: "Expert",
    experience: "4+ years",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: "FileType",
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 4,
    name: "Next.js",
    icon: "Zap",
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "Palette",
    level: "Expert",
    experience: "3+ years",
  },
  {
    id: 6,
    name: "Node.js",
    icon: "Server",
    level: "Intermediate",
    experience: "2+ years",
  },
  {
    id: 7,
    name: "Express.js",
    icon: "Server",
    level: "Intermediate",
    experience: "1+ year",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "Database",
    level: "Beginner",
    experience: "1+ year",
  },
  {
    id: 9,
    name: "Git & GitHub",
    icon: "GitBranch",
    level: "Advanced",
    experience: "4+ years",
  },
  {
    id: 10,
    name: "Docker",
    icon: "Package",
    level: "Beginner",
    experience: "6+ months",
  },
  {
    id: 11,
    name: "Postman",
    icon: "Send",
    level: "Intermediate",
    experience: "1+ year",
  },
  {
    id: 12,
    name: "Figma",
    icon: "PenTool",
    level: "Intermediate",
    experience: "1+ year",
  },
  {
    id: 14,
    name: "Redux",
    icon: "Database",
    level: "Advanced",
    experience: "2+ years",
  },
];
