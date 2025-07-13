import { useState } from "react";
import SlideBase from "../SlideBase";
import ProjectLinks from "../ProjectLinks";
import ProjectDetailsSlide from "./ProjectDetailsSlide";
import { projectsData } from "../data/projectsData";
import type { Project, ProjectCategory } from "../types";

function Proyects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectCategory>("all");

  // Filtrar proyectos
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  // Categorías disponibles
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "Todos" },
    { id: "mobile", label: "Móvil" },
    { id: "web", label: "Web" },
    // { id: "desktop", label: "Desktop" },
    // { id: "api", label: "API" },
  ];

  const handleViewDetails = (project: Project) => {
    if (project.hasDetails) {
      setSelectedProject(project);
    }
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // Si hay un proyecto seleccionado, mostrar sus detalles
  if (selectedProject) {
    return (
      <ProjectDetailsSlide
        project={selectedProject}
        onBack={handleBackToProjects}
      />
    );
  }

  // Vista principal de proyectos
  return (
    <SlideBase title="Proyectos" subtitle="Algunos trabajos que he realizado">
      <div className="space-y-6">
        {/* Filtros de categoría */}
        <div className="flex justify-center">
          <div className="flex bg-neutral-800 rounded-lg p-1 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === category.id
                    ? "text-white bg-emerald-500"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Badge de proyecto destacado */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                  Destacado
                </div>
              )}

              {/* Emoji del proyecto */}
              <div className="text-4xl mb-4">{project.image}</div>

              {/* Título y descripción */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Estado del proyecto */}
              <div className="mb-4">
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    project.status === "Completado"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : project.status === "En desarrollo"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Enlaces y acciones */}
              <ProjectLinks
                links={project.links}
                hasDetails={project.hasDetails}
                onViewDetails={() => handleViewDetails(project)}
                className="mt-auto"
              />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay proyectos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-neutral-400">
              Prueba con otra categoría o vuelve a "Todos"
            </p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Ver todos los proyectos
            </button>
          </div>
        )}
      </div>
    </SlideBase>
  );
}

export default Proyects;
