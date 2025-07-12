import React, { useState } from "react";
import SlideBase from "../SlideBase";

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  asunto?: string;
  mensaje?: string;
}

// Componente para iconos sociales
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/tu-usuario",
    icon: (
      <svg
        className="w-6 h-6 text-neutral-400 hover:text-white transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  // Agregar más enlaces sociales según necesites
];

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Función para codificar datos del formulario
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es requerido";
    } else if (!emailRegex.test(formData.correo)) {
      newErrors.correo = "El formato del correo no es válido";
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es requerido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Envío a Netlify Forms con la estructura correcta
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact", // CRÍTICO: Debe coincidir con el name del formulario HTML
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          correo: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SlideBase
      id="contacto"
      title="Contacto"
      subtitle="¿Tienes un proyecto en mente? Hablemos."
    >
      {/* Contenedor condicional para responsive layout */}
      <div className="w-full">
        {/* Layout móvil: Grid con información de contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start md:hidden">
          {/* Información de contacto - VISIBLE solo en móviles */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6 order-2 lg:order-1">
            {/* Texto de plataformas */}
            <p className="text-base lg:text-lg text-neutral-400 leading-relaxed font-semibold text-center">
              Me puedes encontrar en las siguientes plataformas:
            </p>

            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="transform hover:scale-110 transition-transform duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Card de información adicional */}
            <div className="mt-8 p-4 bg-neutral-800 rounded-lg border border-neutral-700">
              <h4 className="text-white font-semibold mb-3">
                Información de contacto
              </h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>📧 sergioenrique.riverav@gmail.com</p>
                <p>📍 Puebla, Puebla, México</p>
                <p>⏰ Tiempo de respuesta: 24-48 horas</p>
              </div>
            </div>
          </div>

          {/* Formulario en móviles */}
          <div className="lg:col-span-2 space-y-4 order-1 lg:order-2 text-neutral-300">
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Correo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className={`w-full px-3 py-2 bg-transparent border-b-2 focus:outline-none transition-colors ${
                      errors.nombre
                        ? "border-red-500 focus:border-red-400"
                        : "border-neutral-600 focus:border-emerald-500"
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="tu@correo.com"
                    className={`w-full px-3 py-2 bg-transparent border-b-2 focus:outline-none transition-colors ${
                      errors.correo
                        ? "border-red-500 focus:border-red-400"
                        : "border-neutral-600 focus:border-emerald-500"
                    }`}
                  />
                  {errors.correo && (
                    <p className="text-red-400 text-xs mt-1">{errors.correo}</p>
                  )}
                </div>
              </div>

              {/* Teléfono y Asunto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono"
                    className="w-full px-3 py-2 bg-transparent border-b-2 border-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="asunto"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    placeholder="Asunto del mensaje"
                    className={`w-full px-3 py-2 bg-transparent border-b-2 focus:outline-none transition-colors ${
                      errors.asunto
                        ? "border-red-500 focus:border-red-400"
                        : "border-neutral-600 focus:border-emerald-500"
                    }`}
                  />
                  {errors.asunto && (
                    <p className="text-red-400 text-xs mt-1">{errors.asunto}</p>
                  )}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-neutral-300 mb-1"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  className={`w-full px-3 py-2 bg-transparent border-2 rounded focus:outline-none transition-colors resize-none ${
                    errors.mensaje
                      ? "border-red-500 focus:border-red-400"
                      : "border-neutral-600 focus:border-emerald-500"
                  }`}
                />
                {errors.mensaje && (
                  <p className="text-red-400 text-xs mt-1">{errors.mensaje}</p>
                )}
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitting
                    ? "bg-neutral-600 text-neutral-400 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-lg hover:shadow-emerald-500/25"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>

        {/* Layout desktop: Formulario centrado sin información de contacto */}
        <div className="hidden md:flex md:justify-center">
          <div className="w-full max-w-2xl space-y-4 text-neutral-300">
            {/* Mensaje de estado */}
            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <p className="text-green-400 font-medium">
                  ¡Mensaje enviado exitosamente! Te responderé pronto.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
                <p className="text-red-400 font-medium">
                  Error al enviar el mensaje. Por favor, intenta de nuevo.
                </p>
              </div>
            )}

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Correo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre-desktop"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre-desktop"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className={`w-full px-3 py-2 bg-transparent border-b-2 focus:outline-none transition-colors ${
                      errors.nombre
                        ? "border-red-500 focus:border-red-400"
                        : "border-neutral-600 focus:border-emerald-500"
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="correo-desktop"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo-desktop"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="tu@correo.com"
                    className={`w-full px-3 py-2 bg-transparent border-b-2 focus:outline-none transition-colors ${
                      errors.correo
                        ? "border-red-500 focus:border-red-400"
                        : "border-neutral-600 focus:border-emerald-500"
                    }`}
                  />
                  {errors.correo && (
                    <p className="text-red-400 text-xs mt-1">{errors.correo}</p>
                  )}
                </div>
              </div>

              {/* Teléfono y Asunto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="telefono-desktop"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="telefono-desktop"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono"
                    className="w-full px-3 py-2 bg-transparent border-b-2 border-neutral-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="asunto-desktop"
                    className="block text-sm font-medium text-neutral-300 mb-1"
                  >
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="asunto-desktop"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    placeholder="Asunto del mensaje"
                    className={`w-full px-3 py-2 bg-transparent border-b-2 focus:outline-none transition-colors ${
                      errors.asunto
                        ? "border-red-500 focus:border-red-400"
                        : "border-neutral-600 focus:border-emerald-500"
                    }`}
                  />
                  {errors.asunto && (
                    <p className="text-red-400 text-xs mt-1">{errors.asunto}</p>
                  )}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje-desktop"
                  className="block text-sm font-medium text-neutral-300 mb-1"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje-desktop"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  className={`w-full px-3 py-2 bg-transparent border-2 rounded focus:outline-none transition-colors resize-none ${
                    errors.mensaje
                      ? "border-red-500 focus:border-red-400"
                      : "border-neutral-600 focus:border-emerald-500"
                  }`}
                />
                {errors.mensaje && (
                  <p className="text-red-400 text-xs mt-1">{errors.mensaje}</p>
                )}
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitting
                    ? "bg-neutral-600 text-neutral-400 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-lg hover:shadow-emerald-500/25"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

export default Contact;
