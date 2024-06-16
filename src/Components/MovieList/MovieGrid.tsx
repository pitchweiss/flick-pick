import { FC, useEffect, useState } from "react";
import { addToFavorites, checkIsFavorite } from "../../utils/manageFavorites";

import { TMovieDto } from "../../types/dto/movie.dto";
import MovieCard from "./MovieCard";

interface IMovieGridProps {
  movies: TMovieDto[];
}

const MovieGrid: FC<IMovieGridProps> = ({ movies }: IMovieGridProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [favorites, setFavorites] = useState<number[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prevIndex) =>
          Math.min(prevIndex + 1, movies.length - 1)
        );
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === "ArrowDown") {
        if (activeIndex === -1) setActiveIndex(0);
        if (activeIndex !== -1 && activeIndex < movies.length - 4) {
          setActiveIndex((prevIndex) => prevIndex + 4);
        }
      } else if (e.key === "ArrowUp") {
        if (activeIndex !== -1 && activeIndex >= 4) {
          setActiveIndex((prevIndex) => prevIndex - 4);
        }
      } else if (e.key === "Enter" && activeIndex >= 0) {
        addToFavorites(movies[activeIndex].id);
        setFavorites((prevFavorites) => [
          ...prevFavorites,
          movies[activeIndex].id,
        ]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, favorites, movies]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isActive={index === activeIndex}
          isFavorite={checkIsFavorite(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
