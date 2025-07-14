import React from "react";
import type { TimelineItem as TimelineItemType } from "./types/resumen";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const getIcon = (type: TimelineItemType["type"]) => {
    switch (type) {
      case "experience":
        return (
          <svg
            className="w-3 h-3 lg:w-4 lg:h-4"
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
      case "education":
        return (
          <svg
            className="w-3 h-3 lg:w-4 lg:h-4"
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
      case "certification":
        return (
          <svg
            className="w-3 h-3 lg:w-4 lg:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeColor = (type: TimelineItemType["type"]) => {
    switch (type) {
      case "experience":
        return "from-emerald-500 to-emerald-400";
      case "education":
        return "from-blue-500 to-blue-400";
      case "certification":
        return "from-purple-500 to-purple-400";
      default:
        return "from-emerald-500 to-emerald-400";
    }
  };

  const getTypeBadge = (type: TimelineItemType["type"]) => {
    switch (type) {
      case "experience":
        return {
          text: "Experiencia",
          color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        };
      case "education":
        return {
          text: "Educación",
          color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        };
      case "certification":
        return {
          text: "Certificación",
          color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        };
      default:
        return {
          text: "Experiencia",
          color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        };
    }
  };

  const badge = getTypeBadge(item.type);

  return (
    <div className="relative flex items-start group">
      {/* Icono del timeline - oculto en móviles */}
      <div
        className={`hidden md:flex absolute left-4 lg:left-6 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full items-center justify-center text-white z-10 group-hover:scale-110 transition-transform shadow-lg`}
      >
        {getIcon(item.type)}
      </div>

      {/* Contenido */}
      <div className="w-full md:ml-12 lg:ml-16 bg-neutral-800 rounded-lg p-4 lg:p-6 hover:bg-neutral-750 transition-all duration-300 border border-neutral-700 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 lg:mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {/* Icono móvil */}
              <div
                className={`md:hidden flex w-4 h-4 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full items-center justify-center text-white`}
              >
                {getIcon(item.type)}
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              {item.isActive && (
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-500/30">
                  Actual
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm lg:text-base text-neutral-300">
              <span className="font-medium text-emerald-400">
                {item.company}
              </span>
              <span className="hidden sm:inline text-neutral-500">•</span>
              <span className="text-neutral-400">{item.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
            <span className="text-sm lg:text-base text-neutral-400 font-medium">
              {item.period}
            </span>
            <span className={`text-xs px-2 py-1 rounded border ${badge.color}`}>
              {badge.text}
            </span>
          </div>
        </div>

        {/* Descripción */}
        <div className="space-y-2 mb-4">
          {item.description.map((desc, descIndex) => (
            <div key={descIndex} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm lg:text-base text-neutral-300 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Logros (si existen) */}
        {item.achievements && item.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">
              Logros destacados:
            </h4>
            <div className="space-y-1">
              {item.achievements.map((achievement, achIndex) => (
                <div key={achIndex} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tecnologías */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 lg:py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Enlace (si existe) */}
        {item.link && (
          <div className="pt-2 border-t border-neutral-700">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Ver más información</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
