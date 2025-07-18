// components/react/slides/Skills.tsx
import React, { useState } from "react";
import SlideBase from "../SlideBase";
import SkillBar from "../SkillsBar";
import SpecializationCard from "../SpecializationCard";
import { useFilter } from "../hooks/useFilter";
import {
  skills,
  skillCategories,
  specializationAreas,
  getSkillIcon,
  getSkillIconWithCategoryColor,
} from "../data/skillsData";

function Skills() {
  const { activeFilter, setActiveFilter, filteredItems } = useFilter(
    skills,
    "all",
  );
  const [viewMode, setViewMode] = useState<"skills" | "specializations">(
    "skills",
  );

  // Configuración de filtros con iconos SVG
  const filterOptions = [
    {
      id: "all",
      label: "Todas",
      icon: getSkillIcon("all", { fallbackEmoji: "🎯" }),
      count: skills.length,
    },
    ...skillCategories.map((cat) => ({
      id: cat.id,
      label: cat.name,
      icon: getSkillIconWithCategoryColor(cat.id, cat.color, cat.icon),
      count: skills.filter((skill) => skill.category.id === cat.id).length,
    })),
  ];

  // Estadísticas de habilidades
  const skillStats = {
    total: skills.length,
    expert: skills.filter((s) => s.level >= 90).length,
    advanced: skills.filter((s) => s.level >= 80 && s.level < 90).length,
    certifications: skills.filter((s) => s.certification).length,
    totalProjects: skills.reduce(
      (acc, skill) => acc + (skill.projects || 0),
      0,
    ),
    avgExperience:
      Math.round(
        (skills.reduce((acc, skill) => acc + (skill.yearsExperience || 0), 0) /
          skills.length) *
          10,
      ) / 10,
  };

  return (
    <SlideBase
      title="Habilidades"
      subtitle="Tecnologías y herramientas que domino"
      className="lg:justify-start"
    >
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* Selector de vista */}
        <div className="flex justify-center">
          <div className="flex bg-neutral-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("skills")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-2 ${
                viewMode === "skills"
                  ? "text-white bg-emerald-500 shadow-lg"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-700"
              }`}
            >
              <span className="flex items-center">
                {getSkillIcon("skills", {
                  fallbackEmoji: "📊",
                  size: "w-4 h-4",
                })}
              </span>
              <span>Habilidades Técnicas</span>
            </button>
            <button
              onClick={() => setViewMode("specializations")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-2 ${
                viewMode === "specializations"
                  ? "text-white bg-emerald-500 shadow-lg"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-700"
              }`}
            >
              <span className="flex items-center">
                {getSkillIcon("specializations", {
                  fallbackEmoji: "🎯",
                  size: "w-4 h-4",
                })}
              </span>
              <span>Especializaciones</span>
            </button>
          </div>
        </div>

        {/* Vista de Habilidades Técnicas */}
        {viewMode === "skills" && (
          <div className="space-y-6">
            {/* Filtros de categoría */}
            <div className="flex justify-center">
              <div className="flex bg-neutral-800 rounded-lg p-1 overflow-x-auto">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                      activeFilter === option.id
                        ? "text-white bg-emerald-500 shadow-lg"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-700"
                    }`}
                  >
                    <span className="flex items-center">{option.icon}</span>
                    <span>{option.label}</span>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        activeFilter === option.id
                          ? "bg-white/20"
                          : "bg-neutral-600"
                      }`}
                    >
                      {option.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de habilidades */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((skill, index) => (
                  <SkillBar key={skill.id} skill={skill} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-6xl mb-4 flex justify-center">
                    {getSkillIcon("search", {
                      fallbackEmoji: "🔍",
                      size: "w-16 h-16",
                      className: "text-neutral-500",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No hay habilidades en esta categoría
                  </h3>
                  <p className="text-neutral-400 mb-4">
                    Intenta con otra categoría o vuelve a "Todas"
                  </p>
                  <button
                    onClick={() => setActiveFilter("all")}
                    className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Ver todas las habilidades
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Vista de Especializaciones */}
        {viewMode === "specializations" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Áreas de Especialización
              </h3>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Estas son mis principales áreas de expertise donde combino
                múltiples tecnologías para crear soluciones completas y de alta
                calidad.
              </p>
            </div>

            {/* Grid de especializaciones */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializationAreas.map((area, index) => (
                <SpecializationCard key={area.id} area={area} index={index} />
              ))}
            </div>

            {/* Llamada a la acción */}
            <div className="text-center pt-8 border-t border-neutral-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                ¿Interesado en trabajar juntos?
              </h4>
              <p className="text-neutral-400 mb-6 max-w-lg mx-auto">
                Estoy siempre aprendiendo nuevas tecnologías y mejorando mis
                habilidades. Si tienes un proyecto interesante, hablemos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setViewMode("skills")}
                  className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Ver Habilidades Técnicas
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sección de crecimiento continuo */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex items-center text-emerald-400">
              {getSkillIcon("growth", {
                fallbackEmoji: "🚀",
                size: "w-8 h-8",
              })}
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Aprendizaje Continuo
              </h3>
              <p className="text-neutral-300 mb-4">
                El desarrollo web evoluciona constantemente, y yo también.
                Actualmente estoy explorando nuevas tecnologías y perfeccionando
                mis habilidades existentes.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Three.js",
                  "Framer Motion",
                  "Prisma",
                  "GraphQL",
                  "Docker",
                  "Testing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

export default Skills;
