import { useState, useEffect } from "react";

interface UseDownloadCVResult {
  isDownloading: boolean;
  isAvailable: boolean;
  isChecking: boolean;
  downloadCV: () => Promise<void>;
  error: string | null;
}

export function useDownloadCV(): UseDownloadCVResult {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Configuración del CV
  const CV_CONFIG = {
    url: "/cv/Sergio_Rivera_CV.pdf",
    filename: "Sergio_Rivera_CV.pdf",
    // Para desarrollo local, puedes forzar disponibilidad
    forceAvailable: false, // Cambiar a true para testing sin archivo
  };

  // Verificar disponibilidad del CV al cargar el componente
  useEffect(() => {
    const checkCVAvailability = async () => {
      if (CV_CONFIG.forceAvailable) {
        setIsAvailable(true);
        setIsChecking(false);
        return;
      }

      try {
        const response = await fetch(CV_CONFIG.url, {
          method: "HEAD",
          cache: "no-cache", // Evitar cache en verificación
        });

        setIsAvailable(response.ok);
      } catch (err) {
        console.log("CV no disponible:", err);
        setIsAvailable(false);
      } finally {
        setIsChecking(false);
      }
    };

    checkCVAvailability();
  }, []);

  const downloadCV = async (): Promise<void> => {
    if (!isAvailable) {
      setError("CV no disponible aún");
      return;
    }

    setIsDownloading(true);
    setError(null);

    try {
      // En Netlify, podemos hacer descarga directa sin verificación adicional
      // ya que verificamos disponibilidad al cargar

      const link = document.createElement("a");
      link.href = CV_CONFIG.url;
      link.download = CV_CONFIG.filename;
      link.setAttribute("target", "_blank");

      // Agregar al DOM temporalmente y hacer click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error descargando CV:", err);
      setError("Error al descargar el CV. Intenta de nuevo.");
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    isDownloading,
    isAvailable,
    isChecking,
    downloadCV,
    error,
  };
}
