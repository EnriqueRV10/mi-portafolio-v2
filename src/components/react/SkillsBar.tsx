import React, { useState, useEffect, useRef } from "react";
import type { Skill } from "./types/skills";
import {
  getSkillIconWithBrandColor,
  getSkillIconWithCategoryColor,
} from "./data/skillsData";

interface SkillBarProps {
  skill: Skill;
  index: number;
  isVisible?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  index,
  isVisible = true,
}) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para animación al entrar en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Animación con delay escalonado
          setTimeout(() => {
            setAnimatedLevel(skill.level);
          }, index * 100);
        }
      },
      { threshold: 0.3 },
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level, index, isInView]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: "from-emerald-500 to-emerald-400",
        text: "text-emerald-400",
        border: "border-emerald-500/30",
        glow: "shadow-emerald-500/20",
      },
      blue: {
        bg: "from-blue-500 to-blue-400",
        text: "text-blue-400",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/20",
      },
      purple: {
        bg: "from-purple-500 to-purple-400",
        text: "text-purple-400",
        border: "border-purple-500/30",
        glow: "shadow-purple-500/20",
      },
      orange: {
        bg: "from-orange-500 to-orange-400",
        text: "text-orange-400",
        border: "border-orange-500/30",
        glow: "shadow-orange-500/20",
      },
      pink: {
        bg: "from-pink-500 to-pink-400",
        text: "text-pink-400",
        border: "border-pink-500/30",
        glow: "shadow-pink-500/20",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  const colors = getColorClasses(skill.category.color);

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Experto";
    if (level >= 80) return "Avanzado";
    if (level >= 70) return "Intermedio";
    if (level >= 60) return "Competente";
    return "Básico";
  };

  return (
    <div
      ref={skillRef}
      className={`group p-4 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-opacity-50 transition-all duration-300 hover:${colors.glow} hover:shadow-lg ${
        skill.category.color === "emerald"
          ? "hover:border-emerald-500/50"
          : skill.category.color === "blue"
            ? "hover:border-blue-500/50"
            : skill.category.color === "purple"
              ? "hover:border-purple-500/50"
              : skill.category.color === "orange"
                ? "hover:border-orange-500/50"
                : "hover:border-pink-500/50"
      }`}
    >
      {/* Header con icono y nombre */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8">
            {/* Usar icono con color de marca para mejor autenticidad */}
            {getSkillIconWithBrandColor(skill.id, skill.icon)}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg group-hover:text-emerald-300 transition-colors">
              {skill.name}
            </h3>
            <span className={`text-xs font-medium ${colors.text}`}>
              {getLevelLabel(skill.level)}
            </span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col items-end gap-1">
          <span className={`text-sm font-bold ${colors.text}`}>
            {skill.level}%
          </span>
          {skill.certification && (
            <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full border border-yellow-500/30">
              Certificado
            </span>
          )}
        </div>
      </div>

      {/* Descripción */}
      {skill.description && (
        <p className="text-neutral-400 text-sm mb-3 leading-relaxed">
          {skill.description}
        </p>
      )}

      {/* Barra de progreso */}
      <div className="mb-3">
        <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${colors.bg} rounded-full transition-all duration-1000 ease-out transform origin-left`}
            style={{
              width: `${animatedLevel}%`,
              transform: isInView ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
            }}
          />
        </div>
      </div>

      {/* Metadatos */}
      <div className="flex justify-between items-center text-xs text-neutral-500">
        <div className="flex gap-4">
          {skill.yearsExperience && (
            <span>
              {skill.yearsExperience} año
              {skill.yearsExperience !== 1 ? "s" : ""}
            </span>
          )}
          {skill.projects && (
            <span>
              {skill.projects} proyecto{skill.projects !== 1 ? "s" : ""}
            </span>
          )}
        </div>
        <span
          className={`px-2 py-1 rounded ${colors.border} ${colors.text} text-xs`}
        >
          {skill.category.name}
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
