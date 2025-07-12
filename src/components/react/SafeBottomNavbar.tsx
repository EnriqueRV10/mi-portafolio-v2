// src/components/react/SafeBottomNavbar.tsx

import React from "react";
import { useSafeArea } from "../react/hooks/useSafeArea";

interface SafeBottomNavbarProps {
  children: React.ReactNode;
  className?: string;
}

export default function SafeBottomNavbar({
  children,
  className = "",
}: SafeBottomNavbarProps) {
  const safeArea = useSafeArea();

  // Calcular posición dinámica basada en safe area
  const bottomOffset = Math.max(32, safeArea.bottom + 12); // Mínimo 32px (2rem)

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 navbar-safe-bottom ${className}`}
      style={{
        bottom: `${bottomOffset}px`,
      }}
    >
      {children}
    </div>
  );
}
