import React from "react";
import SlideBase from "../SlideBase";

interface HomeProps {
  navigateToSlide: (slideId: string) => void;
}

function Home({ navigateToSlide }: HomeProps) {
  return (
    <SlideBase title="" subtitle="">
      <div className="space-y-8">
        <div className="text-6xl font-bold">
          <span className="text-white">¡Hola! Soy </span>
          <span className="text-emerald-500">Sergio Enrique</span>
          <p className="text-xl md:text-2xl text-neutral-400 mt-2">
            Desarrollador Frontend
          </p>
        </div>

        <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed">
          Transformando ideas en experiencias digitales con código limpio y
          creatividad.
        </p>

        <div className="flex gap-4 pt-8">
          <button
            onClick={() => navigateToSlide("proyects")}
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Proyectos
          </button>
          <button className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors">
            Descargar CV
          </button>
        </div>
      </div>
    </SlideBase>
  );
}

export default Home;
