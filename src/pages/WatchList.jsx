import React, { useState, useEffect } from "react";
import WatchCard from "../components/WatchCard";
import { useWatches } from "../hooks/useWatches";
import useFavorites from "../hooks/useFavorites";
import useFilters from "../hooks/useFilters"; 
import FiltersSidebar from "../components/FilterSideBar";

const ITEMS_PER_PAGE = 9;

export default function WatchList() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { watches, loading, error } = useWatches();
  const [ currentPage, setCurrentPage ] = useState(1);   
  const { filteredWatches, toggleFilter, selectedBrands, selectedPrices, selectedColors, 
    showFavoritesOnly, setShowFavoritesOnly
  } = useFilters(watches, favorites);

  useEffect(() => {
    setCurrentPage(1); 
  }, [filteredWatches]);
    
  const toggleFavorite = (watch) => {;
    isFavorite(watch.id) ? removeFavorite(watch.id) : addFavorite(watch);
  };

  if (loading) {
    return <p style={{ padding: "2rem", textAlign: "center" }}>Cargando relojes…</p>;
  }
  if (error) {
    return <p style={{ padding: "2rem", textAlign: "center", color: "red" }}>
      Error al cargar: {error}
    </p>;
  }

  const totalPages = Math.ceil(filteredWatches.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedWatches = filteredWatches.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="main-content">
      <FiltersSidebar 
        selectedBrands={selectedBrands}
        selectedColors={selectedColors}
        selectedPrices={selectedPrices}
        toggleFilter={toggleFilter}
        setShowFavoritesOnly={setShowFavoritesOnly}
        showFavoritesOnly={showFavoritesOnly}
      />  
      <div className="watch-list-wrapper">
        <div className="watch-list">
          {paginatedWatches.map((watch) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              isFavorite={isFavorite(watch.id)}
              onToggleFavorite={() => toggleFavorite(watch)}
            />
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
            «
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
            »
          </button>
        </div>
      </div>
    </main>    
  );
}
