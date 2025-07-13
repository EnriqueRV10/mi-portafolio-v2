// components/react/slides/ProjectDetailsSlide.tsx
import React from "react";
import SlideBase from "../SlideBase";
import ProjectLinks from "../ProjectLinks";
import type { Project } from "../types";

interface ProjectDetailsSlideProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailsSlide: React.FC<ProjectDetailsSlideProps> = ({
  project,
  onBack,
}) => {
  if (!project.details) {
    return (
      <SlideBase title="Error" subtitle="Detalles no disponibles">
        <div className="text-center">
          <p className="text-neutral-400 mb-6">
            Los detalles de este proyecto no están disponibles.
          </p>
          <button
            onClick={onBack}
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Volver a Proyectos
          </button>
        </div>
      </SlideBase>
    );
  }

  const { details } = project;

  return (
    <SlideBase
      title={project.title}
      subtitle={project.description}
      className="lg:justify-start"
    >
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Header con botón de regreso y enlaces */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-700">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors self-start"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a Proyectos
          </button>

          <ProjectLinks links={project.links} className="sm:flex-row-reverse" />
        </div>

        {/* Metadata del proyecto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-800 rounded-lg p-4 text-center">
            <div className="text-emerald-500 font-bold text-lg">
              {project.status}
            </div>
            <div className="text-neutral-400 text-sm">Estado</div>
          </div>

          {details.timeline && (
            <div className="bg-neutral-800 rounded-lg p-4 text-center">
              <div className="text-emerald-500 font-bold text-lg">
                {details.timeline}
              </div>
              <div className="text-neutral-400 text-sm">Duración</div>
            </div>
          )}

          {details.teamSize && (
            <div className="bg-neutral-800 rounded-lg p-4 text-center">
              <div className="text-emerald-500 font-bold text-lg">
                {details.teamSize}
              </div>
              <div className="text-neutral-400 text-sm">Equipo</div>
            </div>
          )}

          <div className="bg-neutral-800 rounded-lg p-4 text-center">
            <div className="text-emerald-500 font-bold text-lg">
              {project.tech.length}
            </div>
            <div className="text-neutral-400 text-sm">Tecnologías</div>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            Tecnologías Utilizadas
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-lg border border-emerald-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Descripción general */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            Descripción General
          </h3>
          <p className="text-neutral-300 leading-relaxed">{details.overview}</p>
        </div>

        {/* Características principales */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            Características Principales
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {details.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-neutral-800 rounded-lg"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desafíos (opcional) */}
        {details.challenges && details.challenges.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              Desafíos Técnicos
            </h3>
            <div className="space-y-2">
              {details.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-300 text-sm">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aprendizajes (opcional) */}
        {details.learnings && details.learnings.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              Aprendizajes Clave
            </h3>
            <div className="space-y-2">
              {details.learnings.map((learning, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-300 text-sm">{learning}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botón de acción al final */}
        <div className="pt-6 border-t border-neutral-700">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {project.links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                {link.label || `Ver ${link.type}`}
              </a>
            ))}
          </div>
        </div>
      </div>
    </SlideBase>
  );
};

export default ProjectDetailsSlide;
