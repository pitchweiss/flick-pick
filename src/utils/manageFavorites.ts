const checkIsFavorite = (movieId: number): boolean => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(movieId);
};

const addToFavorites = (movieId: number): void => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(movieId)) {
    favorites = favorites.filter((id) => id !== movieId);
  } else {
    favorites = [...favorites, movieId];
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export { addToFavorites, checkIsFavorite };
