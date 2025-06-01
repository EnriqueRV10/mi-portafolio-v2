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
      className={`min-h-[90vh] lg:h-[90vh] w-full flex flex-col justify-start lg:justify-center px-4 sm:px-8 pb-16 pt-6 overflow-y-auto ${className}`}
    >
      {/* Header del slide */}
      {(title || subtitle) && (
        <div className="mb-4 lg:mb-6 flex-shrink-0">
          {title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 lg:mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col justify-start lg:justify-center-safe">
        {children}
      </div>
    </div>
  );
}
