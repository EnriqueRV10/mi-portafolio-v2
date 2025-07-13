// types/index.ts

export interface ProjectLink {
  type: "github" | "live" | "demo" | "download";
  url: string;
  label?: string;
}

export interface ProjectDetails {
  overview: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
  screenshots?: string[];
  timeline?: string;
  teamSize?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: "Completado" | "En desarrollo" | "Pausado";
  image: string;
  category?: "web" | "mobile" | "desktop" | "api";
  links?: ProjectLink[];
  hasDetails?: boolean;
  details?: ProjectDetails;
  featured?: boolean;
}

export type ProjectCategory = "all" | "web" | "mobile" | "desktop" | "api";
