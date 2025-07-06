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
      // Envío a Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
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
        setErrors({});
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tu-perfil", // Reemplaza con tu URL real
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 256 256"
        >
          <path
            fill="#10b981"
            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/tu-usuario", // Reemplaza con tu URL real
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 256 250"
        >
          <path
            fill="#10b981"
            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0"
          />
        </svg>
      ),
    },
  ];

  return (
    <SlideBase
      title="Contacto"
      subtitle="¿Tienes una idea interesante? Hablemos."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* Información de contacto */}
        <div className="lg:col-span-1 space-y-4 lg:space-y-6 order-2 lg:order-1">
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

          {/* Información adicional */}
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

        {/* Formulario */}
        <div className="lg:col-span-2 space-y-4 order-1 lg:order-2 text-neutral-300">
          {/* Nota: El formulario oculto para Netlify debe estar en tu HTML estático */}

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

          {/* Formulario principal controlado por React */}
          <div className="w-full space-y-6 rounded-lg p-5">
            {/* Campo oculto para protección contra spam */}
            <input type="hidden" name="bot-field" />

            {/* Nombre y Correo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-neutral-300 mb-1"
                >
                  Nombre *
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
                  placeholder="Tu correo electrónico"
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
                  className="w-full px-3 py-2 bg-transparent border-b-2 border-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors"
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
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
                className={`w-full px-3 py-2 bg-transparent border-b-2 focus:outline-none transition-colors resize-none ${
                  errors.mensaje
                    ? "border-red-500 focus:border-red-400"
                    : "border-neutral-600 focus:border-emerald-500"
                }`}
              />
              {errors.mensaje && (
                <p className="text-red-400 text-xs mt-1">{errors.mensaje}</p>
              )}
              <p className="text-xs text-neutral-500 mt-1">
                Mínimo 10 caracteres ({formData.mensaje.length}/10)
              </p>
            </div>

            {/* Botón de envío */}
            <div className="pt-4 w-full max-w-xs mx-auto">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-200 ${
                  isSubmitting
                    ? "bg-neutral-600 text-neutral-400 cursor-not-allowed"
                    : "bg-emerald-500 text-neutral-900 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

export default Contact;
