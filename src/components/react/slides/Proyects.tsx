import React from "react";
import SlideBase from "../SlideBase";

function Proyects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "Panel administrativo completo con React y TypeScript",
      tech: ["React", "TypeScript", "Tailwind"],
      status: "Completado",
      image: "🛒",
    },
    {
      title: "Portfolio Personal",
      description: "Sitio web responsive con animaciones avanzadas",
      tech: ["Astro", "React", "CSS"],
      status: "En desarrollo",
      image: "💼",
    },
    {
      title: "App de Tareas",
      description: "Aplicación de productividad con estado global",
      tech: ["React", "Redux", "Node.js"],
      status: "Completado",
      image: "✅",
    },
  ];

  return (
    <SlideBase title="Proyectos" subtitle="Algunos trabajos que he realizado">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-colors group"
          >
            <div className="text-4xl mb-4">{project.image}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  project.status === "Completado"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {project.status}
              </span>
              <button className="text-emerald-500 hover:text-emerald-400 transition-colors group-hover:translate-x-1 transform duration-200">
                Ver más →
              </button>
            </div>
          </div>
        ))}
      </div>
    </SlideBase>
  );
}

export default Proyects;
