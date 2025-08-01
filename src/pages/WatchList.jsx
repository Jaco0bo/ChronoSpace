// src/pages/WatchList.jsx
import React from "react";
import { useState } from "react";
import WatchCard from "../components/WatchCard";
import { useWatches } from "../hooks/useWatches";
import useFavorites from "../hooks/useFavorites";

const ITEMS_PER_PAGE = 9;

export default function WatchList() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { watches } = useWatches();
  const [ currentPage, setCurrentPage ] = useState(1);       
  const toggleFavorite = (watch) => {;
    if (isFavorite(watch.id)) {
      removeFavorite(watch.id);
    } else {
      addFavorite(watch);
    }    
  };

  const totalPages = Math.ceil(watches.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedWatches = watches.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (  
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
  );
}
