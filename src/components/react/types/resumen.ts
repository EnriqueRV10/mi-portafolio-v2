export interface TimelineItem {
  id: string;
  type: "experience" | "education" | "certification";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  isActive?: boolean;
  achievements?: string[];
  link?: string;
}

export interface ResumeStats {
  yearsExperience: number;
  projectsCompleted: number;
  technologiesMastered: number;
  certifications: number;
}

export type ResumeFilter = "all" | "experience" | "education" | "certification";
