import type { Project } from "@/types/project";

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Portföy Web",
    description: "React + TS + Tailwind + shadcn ile kişisel site.",
    year: 2024,
    tech: ["react", "ts", "tailwind"],
    demoUrl: "#",
    repoUrl: "#",
    stars: 12,
  },
  {
    id: "2",
    title: "Admin Panel Mini",
    description: "Cards, Table, Dialog, Toast ile UI denemeleri.",
    year: 2025,
    tech: ["react", "tailwind"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "3",
    title: "Node API",
    description: "Express + REST; frontend yok.",
    year: 2023,
    tech: ["node"],
    repoUrl: "#",
  },
  {
    id: "4",
    title: "TS Utilities",
    description: "TypeScript yardımcı fonksiyon paketi.",
    year: 2024,
    tech: ["ts"],
    repoUrl: "#",
    stars: 5,
  },
  {
    id: "5",
    title: "Blog Tema",
    description: "MDX destekli blog teması (React Router).",
    year: 2024,
    tech: ["react", "ts"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "6",
    title: "Chart Kit",
    description: "Recharts ile hazır grafik kartları (Line/Bar/Pie).",
    year: 2025,
    tech: ["ts", "tailwind"],
    repoUrl: "#",
  },
  {
    id: "7",
    title: "Auth Starter",
    description: "JWT + Refresh token örneği (Node tabanlı).",
    year: 2023,
    tech: ["node", "ts"],
    repoUrl: "#",
  },
  {
    id: "8",
    title: "Landing Page",
    description: "Hero, features, pricing; tamamen Tailwind.",
    year: 2024,
    tech: ["tailwind"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export async function getProjects(): Promise<Project[]> {
  return new Promise((resolve) => setTimeout(() => resolve(mockProjects), 250));
}
