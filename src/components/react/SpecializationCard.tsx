import React, { useState, useEffect, useRef } from "react";
import type { SpecializationArea } from "./types/skills";
import { getSkillIcon } from "./data/skillsData";

interface SpecializationCardProps {
  area: SpecializationArea;
  index: number;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({
  area,
  index,
}) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para animación al entrar en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mapeo de iconos de especialización a iconos SVG
  const getSpecializationIcon = (areaId: string, fallbackIcon: string) => {
    const specializationIconMap: { [key: string]: string } = {
      "frontend-dev": "frontend",
      "mobile-dev": "mobile",
      "responsive-design": "design",
      performance: "tools",
      "full-stack": "all",
      "modern-tools": "tools",
    };

    const iconKey = specializationIconMap[areaId];
    return getSkillIcon(iconKey, {
      fallbackEmoji: fallbackIcon,
      size: "w-6 h-6",
      className: "text-emerald-400",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`group relative p-6 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg border border-neutral-700 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${area.highlight ? "ring-1 ring-emerald-500/30" : ""}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Icono y título */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
          {getSpecializationIcon(area.id, area.icon)}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
            {area.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {area.description}
          </p>
        </div>
      </div>

      {/* Lista de skills */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-neutral-300">
          Tecnologías principales:
        </h4>
        <div className="flex flex-wrap gap-2">
          {area.skills.map((skill, skillIndex) => (
            <span
              key={skill}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
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
