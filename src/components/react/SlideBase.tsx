import React from "react";

interface SlideBaseProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function SlideBase({
  children,
  title,
  subtitle,
  className = "",
}: SlideBaseProps) {
  return (
    <div
      className={`min-h-[90vh] w-full flex flex-col px-4 sm:px-8 pb-16 pt-6 ${className}`}
    >
      {/* Header del slide - Siempre visible y posicionado correctamente */}
      {(title || subtitle) && (
        <div className="flex-shrink-0 mb-4 lg:mb-6">
          {title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-4 leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Contenido principal con scroll natural */}
      <div className="flex-1 flex flex-col justify-start lg:justify-center overflow-visible">
        <div className="w-full">{children}</div>

        {/* Gradiente inferior solo cuando hay scroll */}
        <div
          className="fixed bottom-0 left-0 w-full h-16 pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, #1c1917 20%, transparent)",
            borderBottomLeftRadius: "1.5rem",
            borderBottomRightRadius: "1.5rem",
          }}
        ></div>
      </div>
    </div>
  );
}
