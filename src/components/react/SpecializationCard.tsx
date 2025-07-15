// components/react/SpecializationCard.tsx
import React from "react";
import type { SpecializationArea } from "./types/skills";

interface SpecializationCardProps {
  area: SpecializationArea;
  index: number;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({
  area,
  index,
}) => {
  return (
    <div
      className={`group p-6 rounded-lg transition-all duration-300 hover:scale-105 transform hover:shadow-xl ${
        area.highlight
          ? "bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-2 border-emerald-500/30 hover:border-emerald-500/50"
          : "bg-neutral-800 border border-neutral-700 hover:border-emerald-500/30"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${
              area.highlight ? "animate-pulse" : ""
            }`}
          >
            {area.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg group-hover:text-emerald-300 transition-colors">
              {area.title}
            </h3>
            {area.highlight && (
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/30">
                Especialidad
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
        {area.description}
      </p>

      {/* Skills relacionadas */}
      <div className="space-y-2">
        <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">
          Tecnologías principales
        </h4>
        <div className="flex flex-wrap gap-2">
          {area.skills.map((skill, skillIndex) => (
            <span
              key={skill}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                area.highlight
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Indicador de especialidad destacada */}
      {area.highlight && (
        <div className="mt-4 pt-4 border-t border-emerald-500/20">
          <div className="flex items-center gap-2 text-emerald-400">
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-xs font-medium">
              Área de mayor experiencia
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecializationCard;
