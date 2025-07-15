import { useState, useMemo } from "react";

export function useFilter<
  T extends { type?: string; category?: { id: string } },
>(items: T[], initialFilter: string = "all") {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return items;
    }
    return items.filter((item) => {
      // Para Resume: usar item.type
      if (item.type) {
        return item.type === activeFilter;
      }
      // Para Skills: usar item.category.id
      if (item.category?.id) {
        return item.category.id === activeFilter;
      }
      return false;
    });
  }, [items, activeFilter]);

  const getItemCount = (filter: string): number => {
    if (filter === "all") {
      return items.length;
    }
    return items.filter((item) => {
      if (item.type) {
        return item.type === filter;
      }
      if (item.category?.id) {
        return item.category.id === filter;
      }
      return false;
    }).length;
  };

  return {
    activeFilter,
    setActiveFilter,
    filteredItems,
    getItemCount,
  };
}
