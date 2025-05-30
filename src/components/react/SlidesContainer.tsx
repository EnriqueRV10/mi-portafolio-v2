import React from "react";
import { useState } from "react";

import Home from "./slides/Home";
import About from "./slides/About";
import Proyects from "./slides/Proyects";
import Resume from "./slides/Resume";
import Services from "./slides/Services";
import Skills from "./slides/Skills";
import Contact from "./slides/Contact";

const slides = [
  { id: "home", title: "Inicio", component: <Home /> },
  { id: "about", title: "Acerca", component: <About /> },
  { id: "proyects", title: "Proyectos", component: <Proyects /> },
  { id: "resume", title: "CV", component: <Resume /> },
  { id: "services", title: "Servicios", component: <Services /> },
  { id: "skills", title: "Habilidades", component: <Skills /> },
  { id: "contact", title: "Contacto", component: <Contact /> },
];

export default function SlidesContainer() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = (newIndex: number) => {
    if (isTransitioning || newIndex === current) return;

    setIsTransitioning(true);

    // Después de la animación de fade out, cambiar el slide
    setTimeout(() => {
      setCurrent(newIndex);
      // Pequeño delay para permitir que el nuevo contenido se renderice
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Duración del fade out
  };

  const nextSlide = () => {
    const newIndex = (current + 1) % slides.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
  };

  // Manejar navegación por teclado
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [current, isTransitioning]);

  return (
    <div className="flex-1 bg-stone-900 rounded-3xl overflow-hidden">
      {/* Área principal de contenido */}
      <div className="h-full w-full relative overflow-hidden">
        {/* Indicador de slide actual */}
        <div className="absolute top-8 right-8 z-20">
          <span className="text-emerald-500 font-mono text-sm">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Contenido del slide con efecto fade */}
        <div
          className={`h-full w-full transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {slides[current].component}
        </div>

        {/* Navbar inferior */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-neutral-800/90 backdrop-blur-sm border-2 border-neutral-700 rounded-full px-6 py-3">
            <div className="flex items-center gap-4">
              {slides.map((slide, index) => {
                const getIcon = (slideId: string) => {
                  switch (slideId) {
                    case "home":
                      return (
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
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      );
                    case "about":
                      return (
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      );
                    case "proyects":
                      return (
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
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      );
                    case "resume":
                      return (
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      );
                    case "services":
                      return (
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
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      );
                    case "skills":
                      return (
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
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      );
                    case "contact":
                      return (
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
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      );
                    default:
                      return (
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      );
                  }
                };

                return (
                  <button
                    key={slide.id}
                    onClick={() => changeSlide(index)}
                    disabled={isTransitioning}
                    className={`group relative p-3 rounded-full transition-all duration-300 ${
                      isTransitioning
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer hover:bg-neutral-700"
                    } ${
                      index === current
                        ? "bg-emerald-500 text-neutral-900"
                        : "text-neutral-400 hover:text-emerald-400"
                    }`}
                    aria-label={`Ir a ${slide.title}`}
                  >
                    {getIcon(slide.id)}

                    {/* Tooltip */}
                    <span
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                                 bg-neutral-900 text-white text-xs py-2 px-3 rounded-lg
                                 opacity-0 group-hover:opacity-100 transition-opacity 
                                 whitespace-nowrap pointer-events-none border border-neutral-700
                                 before:content-[''] before:absolute before:top-full before:left-1/2 
                                 before:transform before:-translate-x-1/2 before:border-4 
                                 before:border-transparent before:border-t-neutral-900"
                    >
                      {slide.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Indicador de navegación por teclado */}
        <div className="absolute bottom-20 right-8 text-neutral-500 text-xs">
          Use ← → para navegar
        </div>
      </div>
    </div>
  );
}
