import React from "react";
import SlideBase from "../SlideBase";

function Skills() {
  const skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "Tailwind CSS", level: 90, category: "Styling" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
  ];

  return (
    <SlideBase
      title="Habilidades"
      subtitle="Tecnologías y herramientas que domino"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-emerald-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">
            Áreas de Especialización
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-800 rounded-lg text-center">
              <div className="text-emerald-500 text-2xl mb-2">⚛️</div>
              <div className="text-white font-medium">Frontend</div>
              <div className="text-neutral-400 text-sm">
                React, Vue, Angular
              </div>
            </div>
            <div className="p-4 bg-neutral-800 rounded-lg text-center">
              <div className="text-emerald-500 text-2xl mb-2">🎨</div>
              <div className="text-white font-medium">UI/UX</div>
              <div className="text-neutral-400 text-sm">
                Figma, Design Systems
              </div>
            </div>
            <div className="p-4 bg-neutral-800 rounded-lg text-center">
              <div className="text-emerald-500 text-2xl mb-2">📱</div>
              <div className="text-white font-medium">Responsive</div>
              <div className="text-neutral-400 text-sm">
                Mobile First Design
              </div>
            </div>
            <div className="p-4 bg-neutral-800 rounded-lg text-center">
              <div className="text-emerald-500 text-2xl mb-2">⚡</div>
              <div className="text-white font-medium">Performance</div>
              <div className="text-neutral-400 text-sm">Optimización Web</div>
            </div>
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

export default Skills;
