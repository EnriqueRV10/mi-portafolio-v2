import { useState, useMemo } from "react";
import type { ResumeFilter } from "../types/resumen";

export function useFilter<T extends { type: string }>(
  items: T[],
  initialFilter: ResumeFilter = "all",
) {
  const [activeFilter, setActiveFilter] = useState<ResumeFilter>(initialFilter);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return items;
    }
    return items.filter((item) => item.type === activeFilter);
  }, [items, activeFilter]);

  const getItemCount = (filter: ResumeFilter): number => {
    if (filter === "all") {
      return items.length;
    }
    return items.filter((item) => item.type === filter).length;
  };

  return {
    activeFilter,
    setActiveFilter,
    filteredItems,
    getItemCount,
  };
}
