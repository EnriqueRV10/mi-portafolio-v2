// components/react/slides/Resume.tsx
import React from "react";
import SlideBase from "../SlideBase";
import TimelineItem from "../TimelineItem";
import { useFilter } from "../hooks/useFilter";
import { timelineData, resumeStats } from "../data/resumeData";
import type { ResumeFilter } from "../types/resumen";

function Resume() {
  const { activeFilter, setActiveFilter, filteredItems, getItemCount } =
    useFilter(timelineData);

  // Configuración de filtros
  const filterOptions: { id: ResumeFilter; label: string; icon: string }[] = [
    { id: "all", label: "Todo", icon: "📋" },
    { id: "experience", label: "Experiencia", icon: "💼" },
    { id: "education", label: "Educación", icon: "🎓" },
    { id: "certification", label: "Certificaciones", icon: "🏆" },
  ];

  return (
    <SlideBase
      title="Experiencia"
      subtitle="Mi trayectoria profesional y educativa"
      className="lg:justify-start"
    >
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Estadísticas principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
          <div className="text-center p-3 lg:p-4 bg-neutral-800 rounded-lg">
            <div className="text-xl lg:text-2xl font-bold text-emerald-500">
              {resumeStats.yearsExperience}+
            </div>
            <div className="text-xs lg:text-sm text-neutral-400">
              Años de experiencia
            </div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-neutral-800 rounded-lg">
            <div className="text-xl lg:text-2xl font-bold text-emerald-500">
              {resumeStats.projectsCompleted}+
            </div>
            <div className="text-xs lg:text-sm text-neutral-400">
              Proyectos completados
            </div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-neutral-800 rounded-lg">
            <div className="text-xl lg:text-2xl font-bold text-emerald-500">
              {resumeStats.technologiesMastered}+
            </div>
            <div className="text-xs lg:text-sm text-neutral-400">
              Tecnologías dominadas
            </div>
          </div>
          <div className="text-center p-3 lg:p-4 bg-neutral-800 rounded-lg">
            <div className="text-xl lg:text-2xl font-bold text-emerald-500">
              {resumeStats.certifications}+
            </div>
            <div className="text-xs lg:text-sm text-neutral-400">
              Certificaciones
            </div>
          </div>
        </div>

        {/* Filtros funcionales */}
        <div className="flex justify-center">
          <div className="flex bg-neutral-800 rounded-lg p-1 overflow-x-auto">
            {filterOptions.map((option) => {
              const count = getItemCount(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                    activeFilter === option.id
                      ? "text-white bg-emerald-500 shadow-lg"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-700"
                  }`}
                >
                  <span>{option.icon}</span>
                  <span>{option.label}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeFilter === option.id
                        ? "bg-white/20"
                        : "bg-neutral-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline mejorado */}
        <div className="relative">
          {/* Línea vertical del timeline - oculta en móviles */}
          <div className="hidden md:block absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent opacity-80"></div>

          {/* Items del timeline filtrados */}
          <div className="space-y-4 lg:space-y-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No hay elementos en esta categoría
                </h3>
                <p className="text-neutral-400 mb-4">
                  Intenta con otra categoría o vuelve a "Todo"
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Ver todo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sección de descarga de CV */}
        <div className="pt-8 border-t border-neutral-700 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            ¿Interesado en mi perfil?
          </h3>
          <p className="text-neutral-400 mb-6">
            Descarga mi CV completo para ver todos los detalles de mi
            experiencia y formación.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Descargar CV
          </button>
        </div>
      </div>
    </SlideBase>
  );
}

export default Resume;
