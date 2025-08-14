export type Tech = "react" | "ts" | "tailwind" | "node" | "other";

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  tech: Tech[];
  repoUrl?: string;
  demoUrl?: string;
  stars?: number;
}
