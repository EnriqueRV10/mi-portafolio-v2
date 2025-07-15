export interface Skill {
  id: string;
  name: string;
  level: number;
  category: SkillCategory;
  icon?: string;
  color?: string;
  description?: string;
  yearsExperience?: number;
  projects?: number;
  certification?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface SpecializationArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
  highlight?: boolean;
}

export type SkillFilter = "all" | string;
