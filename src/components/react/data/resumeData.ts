import type { TimelineItem, ResumeStats } from "../types/resumen";

export const timelineData: TimelineItem[] = [
  // EXPERIENCIA PROFESIONAL
  {
    id: "exp1",
    type: "experience",
    title: "Desarrollador Frontend",
    company: "Freelance",
    location: "Puebla, México",
    period: "2023 - Presente",
    description: [
      "Desarrollo de aplicaciones web modernas usando React, Next.js y TypeScript",
      "Implementación de diseños responsivos con Tailwind CSS y optimización de performance",
      "Colaboración directa con clientes para definir requerimientos y entregar soluciones",
      "Desarrollo de aplicaciones móviles con React Native y Expo",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Expo",
      "Supabase",
    ],
    isActive: true,
    achievements: [
      "Entrega exitosa de 5+ proyectos web y móviles",
      "Reducción del 40% en tiempo de carga de aplicaciones",
      "Implementación de arquitecturas escalables y mantenibles",
    ],
  },
  {
    id: "exp2",
    type: "experience",
    title: "Desarrollador de Software Junior",
    company: "Empresa de Tecnología Local",
    location: "Puebla, México",
    period: "2022 - 2023",
    description: [
      "Desarrollo y mantenimiento de sistemas web internos",
      "Implementación de CRUDs con control de acceso y autenticación",
      "Colaboración en equipo usando metodologías ágiles (Scrum)",
      "Soporte técnico y resolución de incidencias",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    achievements: [
      "Mejora del 30% en la eficiencia de procesos internos",
      "Reducción significativa de errores en sistemas existentes",
    ],
  },

  // EDUCACIÓN
  {
    id: "edu1",
    type: "education",
    title: "Ingeniería en Sistemas Computacionales",
    company: "Instituto Tecnológico de Puebla",
    location: "Puebla, México",
    period: "2018 - 2022",
    description: [
      "Especialización en desarrollo de software y programación",
      "Fundamentos de algoritmos, estructuras de datos y arquitectura de software",
      "Desarrollo de proyectos web y aplicaciones de escritorio",
      "Bases de datos relacionales y no relacionales",
    ],
    technologies: ["Java", "C++", "Python", "MySQL", "Oracle"],
    achievements: [
      "Titulado con mención honorífica",
      "Proyecto de tesis: Sistema de gestión académica",
    ],
  },
  {
    id: "edu2",
    type: "education",
    title: "Curso Avanzado de React y Ecosistema",
    company: "Platzi",
    location: "Online",
    period: "2023",
    description: [
      "Patrones avanzados de React y optimización de componentes",
      "State management con Redux, Zustand y Context API",
      "Testing con Jest y React Testing Library",
      "Deployment y CI/CD para aplicaciones React",
    ],
    technologies: [
      "React",
      "Redux",
      "Zustand",
      "Jest",
      "Testing Library",
      "Vite",
    ],
    link: "https://platzi.com/cursos/react-avanzado/",
  },

  // CERTIFICACIONES
  {
    id: "cert1",
    type: "certification",
    title: "React Developer Certification",
    company: "Meta (Facebook)",
    location: "Online",
    period: "2023",
    description: [
      "Certificación oficial de Meta para desarrollo con React",
      "Desarrollo de aplicaciones complejas con React",
      "Mejores prácticas de desarrollo y patrones de diseño",
      "Optimización de performance y accesibilidad",
    ],
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    link: "https://www.coursera.org/professional-certificates/meta-react-native",
    achievements: [
      "Certificación con calificación sobresaliente",
      "Proyecto final: E-commerce completo con React",
    ],
  },
  {
    id: "cert2",
    type: "certification",
    title: "JavaScript Algorithms and Data Structures",
    company: "freeCodeCamp",
    location: "Online",
    period: "2022",
    description: [
      "Fundamentos de algoritmos y estructuras de datos en JavaScript",
      "Programación funcional y programación orientada a objetos",
      "Resolución de problemas complejos y optimización de código",
      "Implementación de algoritmos de búsqueda y ordenamiento",
    ],
    technologies: ["JavaScript", "ES6+", "Node.js"],
    link: "https://www.freecodecamp.org/certification/usuario/javascript-algorithms-and-data-structures",
    achievements: [
      "300+ horas de programación práctica",
      "5 proyectos certificados completados",
    ],
  },
];

// Estadísticas calculadas automáticamente o configuradas manualmente
export const resumeStats: ResumeStats = {
  yearsExperience: 2,
  projectsCompleted: 8,
  technologiesMastered: 12,
  certifications: 3,
};
