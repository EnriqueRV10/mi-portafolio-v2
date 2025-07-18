import React from "react";
import type { Skill, SkillCategory, SpecializationArea } from "../types/skills";

// Mapa de contenido SVG (solo paths y contenido interno)
export const skillIconPaths = {
  // Iconos de categorías
  frontend:
    "M12 14L8 10L9.5 8.5L12 11L14.5 8.5L16 10L12 14ZM12 18L8 22L9.5 23.5L12 21L14.5 23.5L16 22L12 18ZM12 6L16 2L14.5 0.5L12 3L9.5 0.5L8 2L12 6Z",
  mobile:
    "M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 18H7V6H17V18Z",
  backend:
    "M4 6H20V16H4V6M20 18A2 2 0 0 0 22 16V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V16A2 2 0 0 0 4 18H11V20H8V22H16V20H13V18H20Z",
  tools:
    "M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z",
  design:
    "M9.4 16.6L4.8 12L12 4.8L16.6 9.4L9.4 16.6ZM12 1L3 10L12 19L21 10L12 1ZM12 7.5C10.6 7.5 9.5 8.6 9.5 10S10.6 12.5 12 12.5S14.5 11.4 14.5 10S13.4 7.5 12 7.5Z",

  // Iconos de skills específicos
  react:
    "M12 10.11C13.03 10.11 13.87 10.95 13.87 12C13.87 13.05 13.03 13.89 12 13.89C10.97 13.89 10.13 13.05 10.13 12C10.13 10.95 10.97 10.11 12 10.11M7.37 20C8.04 20.3 9.23 19.82 10.5 18.68C9.23 17.54 8.04 16.76 7.37 17.06C6.93 17.26 6.93 18.74 7.37 20M16.63 4C15.96 3.7 14.77 4.18 13.5 5.32C14.77 6.46 15.96 7.24 16.63 6.94C17.07 6.74 17.07 5.26 16.63 4M12 5.5C11 5.5 10.04 5.58 9.13 5.73C8.22 6.5 7.37 7.5 6.63 8.64C6.5 9.55 6.5 10.45 6.63 11.36C7.37 12.5 8.22 13.5 9.13 14.27C10.04 14.42 11 14.5 12 14.5C13 14.5 13.96 14.42 14.87 14.27C15.78 13.5 16.63 12.5 17.37 11.36C17.5 10.45 17.5 9.55 17.37 8.64C16.63 7.5 15.78 6.5 14.87 5.73C13.96 5.58 13 5.5 12 5.5M12 3C17.5 3 22 6.58 22 11C22 15.42 17.5 19 12 19C6.5 19 2 15.42 2 11C2 6.58 6.5 3 12 3Z",
  nextjs:
    "M11.572 0C5.202 0 0 5.202 0 11.572C0 18.001 5.202 23.144 11.572 23.144C17.942 23.144 23.144 18.001 23.144 11.572C23.144 5.202 17.942 0 11.572 0ZM18.308 19.942C17.827 20.646 16.930 20.646 16.449 19.942L8.045 7.375H10.078L17.379 18.659L18.308 19.942ZM19.942 18.308L13.484 8.045H15.517L20.354 16.275C20.717 17.171 20.717 18.067 19.942 18.308ZM4.572 11.572C4.572 7.734 7.734 4.572 11.572 4.572C12.468 4.572 13.304 4.754 14.080 5.058L4.932 18.067C4.689 16.870 4.572 14.281 4.572 11.572Z",
  typescript:
    "M1.125 0C.502 0 0 .502 0 1.125V22.875C0 23.498.502 24 1.125 24H22.875C23.498 24 24 23.498 24 22.875V1.125C24 .502 23.498 0 22.875 0H1.125ZM9.75 8.625H7.125V6.75H15.375V8.625H12.75V17.25H9.75V8.625ZM15.75 10.125H18.375C18.996 10.125 19.5 10.629 19.5 11.25V12.375C19.5 12.996 18.996 13.5 18.375 13.5H17.25V15.375H19.5V17.25H15.75V10.125Z",
  javascript:
    "M3 3H21V21H3V3M7.73 18.04C8.13 18.89 8.92 19.59 10.27 19.59C11.77 19.59 12.8 18.79 12.8 17.04V11.26H11.1V17C11.1 17.86 10.75 18.08 10.2 18.08C9.62 18.08 9.38 17.68 9.11 17.21L7.73 18.04M13.71 17.86C14.21 18.84 15.22 19.59 16.8 19.59C18.4 19.59 19.6 18.76 19.6 17.23C19.6 15.82 18.79 15.19 17.35 14.57L16.93 14.39C16.2 14.08 15.89 13.87 15.89 13.42C15.89 13.01 16.2 12.74 16.7 12.74C17.18 12.74 17.5 12.99 17.79 13.42L19.1 12.5C18.55 11.54 17.77 11.17 16.7 11.17C15.19 11.17 14.22 12.13 14.22 13.45C14.22 14.78 15.03 15.43 16.25 15.95L16.67 16.13C17.45 16.47 17.91 16.68 17.91 17.26C17.91 17.74 17.46 18.09 16.76 18.09C15.93 18.09 15.45 17.66 15.09 17.06L13.71 17.86Z",
  tailwind:
    "M12.001 4.8C9.349 4.8 7.35 5.69 6.001 7.8C7.35 6.9 8.85 6.6 10.501 7.05C11.451 7.295 12.118 8.013 12.851 8.799C14.001 10.052 15.349 11.4 18.001 11.4C20.651 11.4 22.651 10.51 24.001 8.4C22.651 9.3 21.151 9.6 19.501 9.15C18.551 8.905 17.884 8.187 17.151 7.401C16.001 6.148 14.651 4.8 12.001 4.8ZM6.001 11.4C3.349 11.4 1.349 12.29 0.001 14.4C1.349 13.5 2.849 13.2 4.501 13.65C5.451 13.895 6.118 14.613 6.851 15.399C8.001 16.652 9.349 18 12.001 18C14.651 18 16.651 17.11 18.001 15C16.651 15.9 15.151 16.2 13.501 15.75C12.551 15.505 11.884 14.787 11.151 14.001C10.001 12.748 8.651 11.4 6.001 11.4Z",
  css: "M5 3L4.35 6.34H17.94L17.5 8.5H3.92L3.26 11.83H16.85L16.09 15.64L10.61 17.45L5.86 15.64L6.19 14H2.85L2.06 18L9.91 21L18.96 18L20.16 11.97L20.4 10.76L21.94 3H5Z",
  html: "M12 17.56L16.07 16.43L16.62 10.33H9.38L9.2 8.3H16.8L17 6.31H7L7.56 12.32H14.45L14.22 14.9L12 15.5L9.78 14.9L9.64 13.24H7.64L7.93 16.43L12 17.56M4.07 3H19.93L18.5 19.2L12 21L5.5 19.2L4.07 3Z",

  // React Native
  reactnative:
    "M12 13.5C10.62 13.5 9.5 12.38 9.5 11S10.62 8.5 12 8.5S14.5 9.62 14.5 11S13.38 13.5 12 13.5M12 7.5C10.07 7.5 8.5 9.07 8.5 11S10.07 14.5 12 14.5S15.5 12.93 15.5 11S13.93 7.5 12 7.5M12 2A9 9 0 0 0 3 11A9 9 0 0 0 12 20A9 9 0 0 0 21 11A9 9 0 0 0 12 2M12 18C8.69 18 6 15.31 6 12S8.69 6 12 6S18 8.69 18 12S15.31 18 12 18Z",

  // Herramientas
  nodejs:
    "M12 1.85c-.27 0-.55.07-.78.2L5.54 4.72c-.44.25-.72.71-.72 1.21v12.14c0 .5.28.96.72 1.21l5.68 2.67c.23.13.51.2.78.2.27 0 .55-.07.78-.2l5.68-2.67c.44-.25.72-.71.72-1.21V5.93c0-.5-.28-.96-.72-1.21L12.78 2.05c-.23-.13-.51-.2-.78-.2z",
  git: "M2.6 10.59L8.38 4.8L10.07 6.5C9.83 7.35 10.22 8.28 11 8.73V14.27C10.22 14.72 9.83 15.65 10.07 16.5L8.38 18.2L2.6 12.41C1.93 11.75 1.93 10.76 2.6 10.59M21.4 10.59C22.08 11.26 22.08 12.25 21.4 12.92L15.62 18.71L14.5 17.59C14.22 16.79 13.46 16.2 12.5 16.2C11.54 16.2 10.78 16.79 10.5 17.59L9.38 18.71L3.6 12.92C2.93 12.25 2.93 11.26 3.6 10.59L9.38 4.8L10.5 5.92C10.78 6.72 11.54 7.31 12.5 7.31C13.46 7.31 14.22 6.72 14.5 5.92L15.62 4.8L21.4 10.59Z",
  github:
    "M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.630 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.300 24 12C24 5.373 18.627 0 12 0Z",
  vscode:
    "M23.15 2.587L18.21.21A1.494 1.494 0 0 0 16.672.472L5.8 11.183.668 6.395A1.049 1.049 0 0 0 .267 6.183L-.059 6.412A1.05 1.05 0 0 0-.059 7.708L4.619 12L-.059 16.292A1.05 1.05 0 0 0 .267 17.817L.668 18.046A1.049 1.049 0 0 0 1.8 17.605L6.935 12.817L17.807 23.528A1.494 1.494 0 0 0 18.21 23.79L23.15 21.413A1.494 1.494 0 0 0 24 20.067V3.933A1.494 1.494 0 0 0 23.15 2.587Z",
  figma:
    "M15.852 8.981H19.59C20.985 8.981 22.113 7.853 22.113 6.458S20.985 3.935 19.59 3.935H15.852V8.981ZM15.852 13.117H19.59C20.985 13.117 22.113 11.989 22.113 10.594S20.985 8.071 19.59 8.071H15.852V13.117ZM9.474 13.117C10.869 13.117 11.997 11.989 11.997 10.594S10.869 9.466 9.474 9.466S7.951 10.594 7.951 11.989S9.079 13.117 9.474 13.117ZM1.886 10.594C1.886 11.989 3.014 13.117 4.409 13.117H8.147V8.071H4.409C3.014 8.071 1.886 9.199 1.886 10.594ZM8.147 3.935H4.409C3.014 3.935 1.886 5.063 1.886 6.458S3.014 8.981 4.409 8.981H8.147V3.935ZM8.147 17.253C8.147 18.648 9.275 19.776 10.67 19.776S13.193 18.648 13.193 17.253V13.515H10.67C9.275 13.515 8.147 14.643 8.147 16.038V17.253Z",
  npm: "M1.763 0C.786 0 0 .786 0 1.763V22.237C0 23.214.786 24 1.763 24H22.237C23.214 24 24 23.214 24 22.237V1.763C24 .786 23.214 0 22.237 0H1.763ZM5.13 5.323L13.837 5.323V9.17H9.991V13.837H13.837V18.677H5.13V5.323Z",
  netlify:
    "M19.001 12.983c-1.396 0-2.526-1.13-2.526-2.526s1.13-2.526 2.526-2.526 2.526 1.13 2.526 2.526-1.13 2.526-2.526 2.526zm-7.001 0c-1.396 0-2.526-1.13-2.526-2.526s1.13-2.526 2.526-2.526 2.526 1.13 2.526 2.526-1.13 2.526-2.526 2.526zm-7.001 0c-1.396 0-2.526-1.13-2.526-2.526s1.13-2.526 2.526-2.526 2.526 1.13 2.526 2.526-1.13 2.526-2.526 2.526z",

  // Iconos de UI
  all: "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z",
  skills:
    "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17Z",
  specializations:
    "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z",
  search:
    "M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z",
  growth:
    "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM2.2 16.06L3.88 17.74L4.96 16.66L5.5 17.2L3.88 18.82L1.5 16.44L2.2 16.06ZM8 20.5L9.68 22.18L8.6 23.26L9.14 23.8L7.52 25.42L5.14 23.04L5.84 22.66L8 20.5Z",
};

// Función helper para obtener iconos SVG con opciones de personalización
export const getSkillIcon = (
  iconKey: string,
  options?: {
    fallbackEmoji?: string;
    size?: string;
    color?: string;
    className?: string;
  },
) => {
  const path = skillIconPaths[iconKey as keyof typeof skillIconPaths];

  if (path) {
    const {
      size = "w-5 h-5",
      color = "currentColor",
      className = "",
      fallbackEmoji = "🔧",
    } = options || {};

    return (
      <svg className={`${size} ${className}`} viewBox="0 0 24 24" fill={color}>
        <path d={path} />
      </svg>
    );
  }

  return <span className="text-base">{options?.fallbackEmoji || "🔧"}</span>;
};

// Función helper específica para iconos de skills con colores por categoría
export const getSkillIconWithCategoryColor = (
  iconKey: string,
  categoryColor: string,
  fallbackEmoji?: string,
) => {
  const colorMap = {
    emerald: "text-emerald-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    pink: "text-pink-500",
  };

  const textColor =
    colorMap[categoryColor as keyof typeof colorMap] || "text-current";

  return getSkillIcon(iconKey, {
    fallbackEmoji,
    className: textColor,
  });
};

// Colores específicos para cada tecnología (opcional)
export const skillColors = {
  react: "#61DAFB",
  nextjs: "#000000",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  tailwind: "#06B6D4",
  css: "#1572B6",
  html: "#E34F26",
  nodejs: "#339933",
  git: "#F05032",
  github: "#181717",
  vscode: "#007ACC",
  npm: "#CB3837",
  netlify: "#00C7B7",
  figma: "#F24E1E",
  // ... más colores
};

// Función para obtener icono con color específico de la tecnología
export const getSkillIconWithBrandColor = (
  iconKey: string,
  fallbackEmoji?: string,
) => {
  const brandColor = skillColors[iconKey as keyof typeof skillColors];

  return getSkillIcon(iconKey, {
    fallbackEmoji,
    color: brandColor || "currentColor",
  });
};

// Categorías de habilidades con iconos SVG
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "⚛️", // Mantenemos emoji como fallback
    color: "emerald",
    description: "Tecnologías de interfaz de usuario",
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "📱", // Mantenemos emoji como fallback
    color: "blue",
    description: "Desarrollo de aplicaciones móviles",
  },
  {
    id: "backend",
    name: "Backend",
    icon: "🖥️", // Mantenemos emoji como fallback
    color: "purple",
    description: "Tecnologías del lado del servidor",
  },
  {
    id: "tools",
    name: "Herramientas",
    icon: "🛠️", // Mantenemos emoji como fallback
    color: "orange",
    description: "Herramientas de desarrollo y productividad",
  },
  {
    id: "design",
    name: "Diseño",
    icon: "🎨", // Mantenemos emoji como fallback
    color: "pink",
    description: "Herramientas de diseño y prototipado",
  },
];

// Habilidades técnicas detalladas
export const skills: Skill[] = [
  // FRONTEND
  {
    id: "react",
    name: "React",
    level: 90,
    category: skillCategories[0],
    icon: "⚛️", // Mantenemos emoji como fallback
    description: "Desarrollo de aplicaciones web modernas",
    yearsExperience: 2,
    projects: 8,
    certification: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    level: 85,
    category: skillCategories[0],
    icon: "🔺", // Mantenemos emoji como fallback
    description: "Framework de React para producción",
    yearsExperience: 1.5,
    projects: 5,
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: 88,
    category: skillCategories[0],
    icon: "📘", // Mantenemos emoji como fallback
    description: "JavaScript tipado para aplicaciones escalables",
    yearsExperience: 2,
    projects: 6,
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: 95,
    category: skillCategories[0],
    icon: "🟨", // Mantenemos emoji como fallback
    description: "Lenguaje base del desarrollo web",
    yearsExperience: 3,
    projects: 10,
    certification: true,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    level: 92,
    category: skillCategories[0],
    icon: "🎨", // Mantenemos emoji como fallback
    description: "Framework de CSS utilitario",
    yearsExperience: 2,
    projects: 7,
  },
  {
    id: "css",
    name: "CSS",
    level: 90,
    category: skillCategories[0],
    icon: "🎨", // Mantenemos emoji como fallback
    description: "Hojas de estilo en cascada",
    yearsExperience: 3,
    projects: 10,
  },
  {
    id: "html",
    name: "HTML",
    level: 95,
    category: skillCategories[0],
    icon: "🌐", // Mantenemos emoji como fallback
    description: "Lenguaje de marcado de hipertexto",
    yearsExperience: 3,
    projects: 10,
  },

  // MOBILE
  {
    id: "reactnative",
    name: "React Native",
    level: 75,
    category: skillCategories[1],
    icon: "📱", // Mantenemos emoji como fallback
    description: "Desarrollo de apps móviles multiplataforma",
    yearsExperience: 1,
    projects: 3,
  },

  // BACKEND
  {
    id: "nodejs",
    name: "Node.js",
    level: 70,
    category: skillCategories[2],
    icon: "🖥️", // Mantenemos emoji como fallback
    description: "Entorno de ejecución de JavaScript del lado del servidor",
    yearsExperience: 1,
    projects: 3,
  },

  // TOOLS
  {
    id: "git",
    name: "Git",
    level: 85,
    category: skillCategories[3],
    icon: "🔧", // Mantenemos emoji como fallback
    description: "Sistema de control de versiones distribuido",
    yearsExperience: 2,
    projects: 10,
  },
  {
    id: "github",
    name: "GitHub",
    level: 80,
    category: skillCategories[3],
    icon: "🐙", // Mantenemos emoji como fallback
    description: "Plataforma de desarrollo colaborativo",
    yearsExperience: 2,
    projects: 8,
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    level: 90,
    category: skillCategories[3],
    icon: "💻", // Mantenemos emoji como fallback
    description: "Editor de código fuente",
    yearsExperience: 3,
    projects: 10,
  },
  {
    id: "npm",
    name: "NPM",
    level: 85,
    category: skillCategories[3],
    icon: "📦", // Mantenemos emoji como fallback
    description: "Gestores de paquetes de Node.js",
    yearsExperience: 3,
    projects: 10,
  },
  {
    id: "netlify",
    name: "Netlify",
    level: 80,
    category: skillCategories[3],
    icon: "🚀", // Mantenemos emoji como fallback
    description: "Plataforma de despliegue y hosting",
    yearsExperience: 1,
    projects: 4,
  },

  // DESIGN
  {
    id: "figma",
    name: "Figma",
    level: 70,
    category: skillCategories[4],
    icon: "🎨", // Mantenemos emoji como fallback
    description: "Herramienta de diseño y prototipado",
    yearsExperience: 1,
    projects: 5,
  },
];

// Áreas de especialización
export const specializationAreas: SpecializationArea[] = [
  {
    id: "frontend-dev",
    title: "Desarrollo Frontend",
    icon: "⚛️",
    description: "Interfaces modernas y experiencias de usuario excepcionales",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlight: true,
  },
  {
    id: "mobile-dev",
    title: "Desarrollo Móvil",
    icon: "📱",
    description: "Apps nativas multiplataforma con React Native",
    skills: ["React Native", "Expo", "JavaScript", "Firebase"],
    highlight: true,
  },
  {
    id: "responsive-design",
    title: "Diseño Responsive",
    icon: "📐",
    description: "Diseños que se adaptan perfectamente a cualquier dispositivo",
    skills: ["CSS", "Tailwind", "Mobile First", "Flexbox/Grid"],
  },
  {
    id: "performance",
    title: "Optimización",
    icon: "⚡",
    description: "Aplicaciones rápidas y optimizadas para el mejor rendimiento",
    skills: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "SEO"],
  },
  {
    id: "full-stack",
    title: "Full Stack",
    icon: "🎯",
    description: "Desarrollo completo desde frontend hasta backend",
    skills: ["React", "Node.js", "Databases", "APIs"],
  },
  {
    id: "modern-tools",
    title: "Herramientas Modernas",
    icon: "🛠️",
    description: "Stack de desarrollo actualizado y mejores prácticas",
    skills: ["Git", "NPM", "Vite", "ESLint", "Prettier"],
  },
];
