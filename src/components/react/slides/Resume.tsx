import React from "react";
import SlideBase from "../SlideBase";

interface TimelineItem {
  id: string;
  type: "experience" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  isActive?: boolean;
}

function Resume() {
  const timelineData: TimelineItem[] = [
    {
      id: "exp1",
      type: "experience",
      title: "Frontend Developer",
      company: "Tech Solutions Inc",
      location: "Puebla, México",
      period: "2023 - Presente",
      description: [
        "Desarrollo de aplicaciones web modernas usando React y TypeScript",
        "Implementación de diseños responsivos y optimización de performance",
        "Colaboración en equipo usando metodologías ágiles",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
      isActive: true,
    },
    {
      id: "exp2",
      type: "experience",
      title: "Junior Frontend Developer",
      company: "Digital Agency",
      location: "Puebla, México",
      period: "2022 - 2023",
      description: [
        "Desarrollo de sitios web corporativos y landing pages",
        "Mantenimiento y mejora de proyectos existentes",
        "Aprendizaje de mejores prácticas en desarrollo frontend",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: "edu1",
      type: "education",
      title: "Ingeniería en Sistemas Computacionales",
      company: "Instituto Tecnológico de Puebla",
      location: "Puebla, México",
      period: "2018 - 2022",
      description: [
        "Especialización en desarrollo de software y programación",
        "Proyectos de desarrollo web y aplicaciones móviles",
        "Fundamentos de bases de datos y arquitectura de software",
      ],
    },
    {
      id: "edu2",
      type: "education",
      title: "Curso React Avanzado",
      company: "Platzi",
      location: "Online",
      period: "2023",
      description: [
        "Patrones avanzados de React y optimización",
        "State management con Redux y Context API",
        "Testing y deployment de aplicaciones React",
      ],
      technologies: ["React", "Redux", "Jest", "Testing Library"],
    },
  ];

  const getIcon = (type: "experience" | "education") => {
    if (type === "experience") {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z"
          />
        </svg>
      );
    }
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    );
  };

  return (
    <SlideBase
      title="Experiencia"
      subtitle="Mi trayectoria profesional y educativa"
    >
      <div className="mx-auto">
        {/* Tabs para filtrar */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-neutral-800 rounded-lg p-1">
            <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md transition-colors">
              Todo
            </button>
            <button className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Experiencia
            </button>
            <button className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Educación
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical del timeline - oculta en móviles */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent"></div>

          {/* Items del timeline */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative flex items-start group">
                {/* Icono del timeline - oculto en móviles */}
                <div className="hidden md:flex absolute left-6 w-5 h-5 bg-emerald-500 rounded-full items-center justify-center text-neutral-900 z-10 group-hover:scale-110 transition-transform">
                  {getIcon(item.type)}
                </div>

                {/* Contenido */}
                <div className="w-full md:ml-16 bg-neutral-800 rounded-lg p-6 hover:bg-neutral-750 transition-colors border border-neutral-700 hover:border-emerald-500/30">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {/* Icono móvil */}
                        <div className="md:hidden flex w-5 h-5 bg-emerald-500 rounded-full items-center justify-center text-neutral-900">
                          {getIcon(item.type)}
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        {item.isActive && (
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                            Actual
                          </span>
                        )}
                      </div>
                      <p className="text-emerald-400 font-medium">
                        {item.company}
                      </p>
                      <p className="text-neutral-400 text-sm">
                        {item.location}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-block px-3 py-1 bg-neutral-700 text-neutral-300 text-sm rounded-full">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <div className="space-y-2 mb-4">
                    {item.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tecnologías */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-neutral-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-500">1+</div>
            <div className="text-sm text-neutral-400">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-500">5+</div>
            <div className="text-sm text-neutral-400">
              Proyectos completados
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-500">10+</div>
            <div className="text-sm text-neutral-400">
              Tecnologías dominadas
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-500">2+</div>
            <div className="text-sm text-neutral-400">Certificaciones</div>
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

export default Resume;
