// src/pages/WatchList.jsx
import React from "react";
import WatchCard from "../components/WatchCard";
import { useWatches } from "../hooks/useWatches";
import useFavorites from "../hooks/useFavorites";

export default function WatchList() {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { watches } = useWatches();         
  const toggleFavorite = (watch) => {;
    if (isFavorite(watch.id)) {
      removeFavorite(watch.id);
    } else {
      addFavorite(watch);
    }    
  };

  return (
    <div className="watch-list">
      {watches.map((watch) => (
        <WatchCard
          key={watch.id}
          watch={watch}
          isFavorite={isFavorite(watch.id)}
          onToggleFavorite={() => toggleFavorite(watch)}
        />
      ))}
    </div>
  );
}
