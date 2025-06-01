import React from "react";
import SlideBase from "../SlideBase";

function About() {
  return (
    <SlideBase title="Sobre Mí" subtitle="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* Main content - takes full width on mobile, 2 cols on desktop */}
        <div className="space-y-4 lg:space-y-6 lg:col-span-2 order-2 lg:order-1">
          <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
            Soy un desarrollador frontend apasionado por crear experiencias
            digitales que marquen la diferencia. Mi enfoque combina código
            limpio, diseño moderno y performance óptima para crear productos
            digitales que los usuarios amen.
          </p>

          <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
            Con experiencia en tecnologías modernas como React, React Native,
            Astro, me enfoco en escribir código limpio y mantenible. Siempre
            busco aprender para mejorar en mi área y estar al tanto de las
            últimas tendencias.
          </p>

          <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
            ¿Buscas un desarrollador frontend comprometido con entregar
            resultados de calidad? ¡No busques más!
          </p>

          {/* Stats - horizontal on mobile, grid on desktop */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4 pt-4 lg:pt-6">
            <div className="text-center p-3 lg:p-4 bg-neutral-800 rounded-lg">
              <div className="text-xl lg:text-2xl font-bold text-emerald-500">
                1+
              </div>
              <div className="text-xs lg:text-sm text-neutral-400">
                Años de experiencia
              </div>
            </div>
            <div className="text-center p-3 lg:p-4 bg-neutral-800 rounded-lg">
              <div className="text-xl lg:text-2xl font-bold text-emerald-500">
                2+
              </div>
              <div className="text-xs lg:text-sm text-neutral-400">
                Proyectos completados
              </div>
            </div>
          </div>
        </div>

        {/* Why choose me section - shows first on mobile, second on desktop */}
        <div className="space-y-4 order-1 lg:order-2">
          <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">
            ¿Por qué elegirme?
          </h3>
          <ul className="space-y-2 lg:space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
              <span className="text-sm lg:text-base text-neutral-300">
                Código limpio y escalable
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
              <span className="text-sm lg:text-base text-neutral-300">
                Diseños responsive y modernos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
              <span className="text-sm lg:text-base text-neutral-300">
                Entrega puntual de proyectos
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
              <span className="text-sm lg:text-base text-neutral-300">
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
