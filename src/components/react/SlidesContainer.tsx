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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Manejar navegación por teclado
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

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

        {/* Contenido del slide */}
        <div className="h-full w-full transition-all duration-700 ease-in-out">
          {slides[current].component}
        </div>

        {/* Navegación inferior */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-10">
          {/* Botón anterior */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors group"
            aria-label="Slide anterior"
          >
            <svg
              className="w-5 h-5 text-emerald-500 group-hover:text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Indicadores de slides */}
          <div className="flex gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(index)}
                className={`group relative ${
                  index === current ? "w-8 h-3" : "w-3 h-3"
                } rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-emerald-500"
                    : "bg-neutral-600 hover:bg-neutral-500"
                }`}
                aria-label={`Ir a ${slide.title}`}
              >
                {/* Tooltip */}
                <span
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-neutral-800 text-white text-xs py-1 px-2 rounded 
                               opacity-0 group-hover:opacity-100 transition-opacity 
                               whitespace-nowrap pointer-events-none"
                >
                  {slide.title}
                </span>
              </button>
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors group"
            aria-label="Siguiente slide"
          >
            <svg
              className="w-5 h-5 text-emerald-500 group-hover:text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicador de navegación por teclado */}
        <div className="absolute bottom-20 right-8 text-neutral-500 text-xs">
          Use ← → para navegar
        </div>
      </div>
    </div>
  );
}
