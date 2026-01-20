export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const defaultProjects: Project[] = [
  {
    title: "Food Ordering Systm",
    description: "A simple food ordering system built with Python",
    link: "https://www.google.com",
    tags: ["Python", "CSS"],
  },
  {
    title: "Study Buddy",
    description: "A tiny productivity app for organizing study sessions.",
    link: "https://example.com",
    tags: ["TypeScript", "Vite"],
  },
  {
    title: "Pixel Planner",
    description: "A pixel-art inspired task board for creative teams.",
    link: "https://example.com",
    tags: ["Design", "UI"],
  },
];

export const projectsData: Project[] = [
  ...defaultProjects,
];
