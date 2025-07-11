import React from "react";
import SlideBase from "../SlideBase";

function About() {
  return (
    <SlideBase title="Sobre Mí" subtitle="Conoce un poco más sobre mí">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* Main content - takes full width on mobile, 2 cols on desktop */}
        <div className="space-y-4 lg:space-y-6 lg:col-span-2 order-2 lg:order-1">
          <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
            👋 Hola, soy Enrique, desarrollador de software con formación en
            ingeniería en computación y una fuerte orientación al desarrollo
            full-stack. Actualmente enfocado en frontend con tecnologías
            modernas como React, Next.js, Tailwind CSS, Zustand y TanStack
            Query, aplico buenas prácticas para construir interfaces limpias,
            funcionales y escalables.
          </p>
          <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
            Durante mi trayectoria he desarrollado desde CRUDs con control de
            acceso hasta apps móviles internas con React Native. También tengo
            experiencia liderando proyectos de emprendimiento digital, buscando
            soluciones tecnológicas reales para negocios como clínicas dentales
            y escuelas.
          </p>
          <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
            Me apasiona transformar ideas en productos funcionales, y siempre
            estoy en busca de mejorar tanto el código como la experiencia de
            usuario.
          </p>

          {/* Stats - horizontal on mobile, grid on desktop */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4 pt-4 lg:pt-6 lg:mb-12">
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
