import React from "react";
import SlideBase from "../SlideBase";

function About() {
  return (
    <SlideBase
      title="Sobre Mí"
      subtitle="Conoce mi historia y pasión por el desarrollo"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-neutral-300 leading-relaxed">
            Soy un desarrollador frontend apasionado por crear experiencias
            digitales que marquen la diferencia. Me especializo en transformar
            ideas complejas en interfaces simples y elegantes.
          </p>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Con experiencia en tecnologías modernas como React, TypeScript y
            frameworks CSS, me enfoco en escribir código limpio y mantenible.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center p-4 bg-neutral-800 rounded-lg">
              <div className="text-2xl font-bold text-emerald-500">3+</div>
              <div className="text-sm text-neutral-400">
                Años de experiencia
              </div>
            </div>
            <div className="text-center p-4 bg-neutral-800 rounded-lg">
              <div className="text-2xl font-bold text-emerald-500">50+</div>
              <div className="text-sm text-neutral-400">
                Proyectos completados
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">
            ¿Por qué elegirme?
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-neutral-300">
                Código limpio y escalable
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-neutral-300">
                Diseños responsive y modernos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-neutral-300">
                Entrega puntual de proyectos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-neutral-300">
                Comunicación clara y constante
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SlideBase>
  );
}

export default About;
