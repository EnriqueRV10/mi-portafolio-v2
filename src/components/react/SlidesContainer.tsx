import React from "react";
import { useState } from "react";

import Home from "../slides/Home";
import About from "../slides/About";
import Proyects from "../slides/Proyects";
import Resume from "../slides/Resume";
import Services from "../slides/Services";
import Skills from "../slides/Skills";
import Contact from "../slides/Contact";

const slides = [
  { id: "home", component: <Home /> },
  { id: "about", component: <About /> },
  { id: "proyects", component: <Proyects /> },
  { id: "resume", component: <Resume /> },
  { id: "services", component: <Services /> },
  { id: "skills", component: <Skills /> },
  { id: "contact", component: <Contact /> },
];

export default function SlidesContainer() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      <div className="transition-all duration-500 w-full h-full">
        {slides[current].component}
      </div>
    </div>
  );
}
