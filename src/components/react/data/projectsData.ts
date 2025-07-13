// data/projectsData.ts
import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "bio-collector",
    title: "Bio Collector",
    description:
      "Aplicación móvil de captura de datos biológicos y digitalización de proceso de herborización",
    tech: ["React Native", "JavaScript", "Tailwind"],
    status: "Completado",
    image: "🌱",
    category: "mobile",
    featured: true,
    hasDetails: true,
    links: [
      {
        type: "github",
        url: "https://github.com/tu-usuario/bio-collector",
        label: "Ver código",
      },
      {
        type: "demo",
        url: "https://demo.bio-collector.com",
        label: "Demo en vivo",
      },
    ],
    details: {
      overview:
        "Bio Collector es una aplicación móvil diseñada para naturalistas y biólogos que facilita el proceso de captura y catalogación de especímenes biológicos en campo, digitalizando el tradicional proceso de herborización.",
      features: [
        "Captura de datos GPS automática",
        "Fotografía integrada con metadatos",
        "Formularios dinámicos de clasificación",
        "Sincronización offline/online",
        "Exportación de datos a múltiples formatos",
        "Base de datos local robusta",
      ],
      challenges: [
        "Optimización para uso en campo sin conectividad",
        "Integración con sensores del dispositivo",
        "Manejo eficiente de imágenes de alta resolución",
      ],
      learnings: [
        "Gestión de estado offline-first",
        "Optimización de rendimiento en React Native",
        "Diseño UX para condiciones adversas",
      ],
      timeline: "3 meses",
      teamSize: 2,
    },
  },
  {
    id: "academia-freinet",
    title: "Academia Freinet Admin",
    description:
      "Aplicación móvil para gestionar usuarios, horarios, pagos y asistencias a cursos de natación",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    status: "Completado",
    image: "🏊",
    category: "mobile",
    featured: true,
    hasDetails: false, // Este proyecto no tendrá detalles expandidos
    links: [
      {
        type: "github",
        url: "https://github.com/tu-usuario/academia-freinet",
        label: "Ver repositorio",
      },
    ],
  },
  // Ejemplo de proyecto adicional sin detalles
  {
    id: "portfolio-web",
    title: "Portfolio Personal",
    description:
      "Sitio web personal desarrollado con Astro y React, featuring sistema de slides interactivo",
    tech: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    status: "En desarrollo",
    image: "💼",
    category: "web",
    hasDetails: false,
    links: [
      {
        type: "live",
        url: "https://tu-portfolio.com",
        label: "Ver sitio",
      },
      {
        type: "github",
        url: "https://github.com/tu-usuario/portfolio",
        label: "Código fuente",
      },
    ],
  },
];
