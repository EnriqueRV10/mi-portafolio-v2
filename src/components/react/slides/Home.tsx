import React from "react";
import SlideBase from "../SlideBase";

function Home() {
  return (
    <SlideBase title="¡Hola! Soy" subtitle="Desarrollador Frontend">
      <div className="space-y-8">
        <div className="text-6xl font-bold">
          <span className="text-white">Sergio</span>
          <span className="text-emerald-500"> Enrique</span>
        </div>

        <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed">
          Creo experiencias web hermosas y funcionales. Especializado en React,
          JavaScript y tecnologías modernas.
        </p>

        <div className="flex gap-4 pt-8">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
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
