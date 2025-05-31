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
      className={`h-[90vh] w-full flex flex-col justify-center px-8 pb-16 pt-6 ${className}`}
    >
      {/* Header del slide */}
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-neutral-400">{subtitle}</p>
          )}
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col justify-center-safe">{children}</div>
    </div>
  );
}
