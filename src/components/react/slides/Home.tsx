// components/react/slides/Home.tsx
import React, { useState, useEffect } from "react";
import SlideBase from "../SlideBase";
import ProfileImage from "../ProfileImage";
import { useDownloadCV } from "../hooks/useDownloadCV";

interface HomeProps {
  navigateToSlide: (slideId: string) => void;
}

function Home({ navigateToSlide }: HomeProps) {
  const { isDownloading, isAvailable, isChecking, downloadCV, error } =
    useDownloadCV();
  const [showError, setShowError] = useState(false);

  // Efecto para mostrar/ocultar errores
  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleDownloadCV = async () => {
    await downloadCV();
  };

  return (
    <SlideBase title="" subtitle="">
      <div className="space-y-8 lg:space-y-12">
        {/* Sección de perfil móvil */}
        <div className="lg:hidden flex flex-col items-center space-y-6">
          <ProfileImage size="lg" showSocialLinks={true} />

          {/* Info básica móvil */}
          <div className="text-center space-y-2">
            <h2 className="text-xl text-emerald-500 font-semibold">
              Desarrollador Frontend
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 text-neutral-400">
              <span className="flex items-center justify-center gap-1">
                📧 sergioenrique.riverav@gmail.com
              </span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="flex items-center justify-center gap-1">
                📍 Puebla, México
              </span>
            </div>
          </div>
        </div>

        {/* Título principal */}
        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">¡Hola! Soy </span>
            <span className="text-emerald-500 bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent">
              Sergio Enrique
            </span>
          </div>

          {/* Subtítulo solo visible en desktop (móvil ya lo tiene arriba) */}
          <div className="hidden lg:block">
            <p className="text-xl md:text-2xl text-neutral-400 mt-4 font-medium">
              Desarrollador Frontend
            </p>
          </div>
        </div>

        {/* Descripción */}
        <div className="text-center lg:text-left">
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Transformando ideas en experiencias digitales con código limpio,
            creatividad y las mejores prácticas de desarrollo moderno.
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button
            onClick={() => navigateToSlide("proyects")}
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transform"
          >
            Ver Proyectos
          </button>
          {/* 
          <button
            onClick={handleDownloadCV}
            disabled={isDownloading || isChecking}
            className={`border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              isAvailable
                ? "border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black hover:shadow-lg hover:shadow-emerald-500/25"
                : "border-neutral-600 text-neutral-400 cursor-not-allowed"
            } ${isDownloading || isChecking ? "opacity-75" : ""}`}
          >
            {isChecking ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Verificando...
              </>
            ) : isDownloading ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2v4m0 12v4m8.485-8.485l-2.829 2.829M5.757 5.757L2.93 2.93m0 18.142l2.828-2.829m12.728 0l2.829 2.829M20 12h-4M8 12H4"
                  />
                </svg>
                Descargando...
              </>
            ) : isAvailable ? (
              <>
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
              </>
            ) : (
              <>
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                CV Próximamente
              </>
            )}
          </button> */}
        </div>

        {/* Notificación de error */}
        {showError && error && (
          <div className="fixed bottom-20 left-4 right-4 lg:left-8 lg:right-auto lg:max-w-md bg-red-500/10 border border-red-500/50 rounded-lg p-4 backdrop-blur-md z-50 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          </div>
        )}
      </div>
    </SlideBase>
  );
}

export default Home;
