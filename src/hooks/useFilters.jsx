import { useState, useMemo } from "react";

export default function useFilters(watches) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleFilter = (filterType, value) => {
    const updater = (prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

    if (filterType === "brand") setSelectedBrands(updater);
    else if (filterType === "price") setSelectedPrices(updater);
    else if (filterType === "color") setSelectedColors(updater);
  };

  const filteredWatches = useMemo(() => {
    return watches.filter((watch) => {
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(watch.brand);

      const matchPrice =
        selectedPrices.length === 0 ||
        selectedPrices.some((range) => {
          if (range === "15-35") return watch.price >= 15 && watch.price <= 35;
          if (range === "2000-7500") return watch.price >= 2000 && watch.price <= 7500;
          if (range === "7501-15000") return watch.price > 7501 && watch.price <= 15000;
          if (range === "15001-40000") return watch.price > 15001 && watch.price <= 40000;
          if (range === ">40000") return watch.price > 40000;
          return false;
        });

      const matchColor =
        selectedColors.length === 0 || 
        selectedColors.some((color) => {
          if (color === "Negro") return watch.color === "Black";
          if (color === "Blanco") return watch.color === "White";
          if (color === "Gris") return ( watch.color === "Grey" || watch.color === "Titanium");
          if (color === "Plateado") return watch.color === "Silver";
          if (color === "Dorado") return watch.color === "Gold";
          if (color === "Azul") return watch.color === "Blue";
          if (color === "Verde") return watch.color === "Green";
          if (color === "Rosado") return watch.color === "Rose Gold";
          return false;
        });

      return matchBrand && matchPrice && matchColor;
    });
  }, [watches, selectedBrands, selectedPrices, selectedColors]);

  return {
    filteredWatches,
    toggleFilter,
    selectedBrands,
    selectedPrices,
    selectedColors,
  };
}
