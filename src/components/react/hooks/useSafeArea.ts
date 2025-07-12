// src/hooks/useSafeArea.ts

import { useState, useEffect } from "react";

interface SafeAreaInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export function useSafeArea(): SafeAreaInsets {
  const [safeArea, setSafeArea] = useState<SafeAreaInsets>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    const updateSafeArea = () => {
      const computedStyle = getComputedStyle(document.documentElement);

      setSafeArea({
        top:
          parseInt(
            computedStyle
              .getPropertyValue("--safe-area-inset-top")
              .replace("px", ""),
          ) || 0,
        right:
          parseInt(
            computedStyle
              .getPropertyValue("--safe-area-inset-right")
              .replace("px", ""),
          ) || 0,
        bottom:
          parseInt(
            computedStyle
              .getPropertyValue("--safe-area-inset-bottom")
              .replace("px", ""),
          ) || 0,
        left:
          parseInt(
            computedStyle
              .getPropertyValue("--safe-area-inset-left")
              .replace("px", ""),
          ) || 0,
      });
    };

    updateSafeArea();
    window.addEventListener("resize", updateSafeArea);
    window.addEventListener("orientationchange", updateSafeArea);

    return () => {
      window.removeEventListener("resize", updateSafeArea);
      window.removeEventListener("orientationchange", updateSafeArea);
    };
  }, []);

  return safeArea;
}
