import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (watch) => {
    setFavorites((prevFavorites) => [...prevFavorites, watch]);
  };

  const removeFavorite = (watchId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((watch) => watch.id !== watchId)
    );
  };
  
  const isFavorite = (watchId) => {
    return favorites.some((watch) => watch.id === watchId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite};
}