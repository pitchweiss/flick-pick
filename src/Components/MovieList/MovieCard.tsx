import { FC, useState } from "react";
import { addToFavorites, checkIsFavorite } from "../../utils/manageFavorites";

import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { TMovieDto } from "../../types/dto/movie.dto";

interface IMovieCardProps {
  movie: TMovieDto;
}

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(checkIsFavorite(movie.id));

  const toggleFavorite = () => {
    addToFavorites(movie.id);
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="rounded-lg shadow-lg relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-off-black/60" />
      <div className="h-[12.5%] absolute top-0 w-full bg-gradient-to-b from-off-black to-off-black/80 rounded-t-lg border-1 border-light-gray">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-md font-semibold text-off-white text-center">
            {movie.title}
          </h2>
          <h3 className="text-xs text-off-white">{"(2024)"}</h3>
          {/** TODO:
           * Check where can we get the release year from
           */}
        </div>
      </div>
      <button
        onClick={toggleFavorite}
        className="absolute bottom-0 right-0 p-2 text-light-gray"
      >
        {isFavorite ? (
          <SolidHeartIcon className="h-6 w-6 text-red-600" />
        ) : (
          <OutlineHeartIcon className="h-6 w-6 text-red-600" />
        )}
      </button>
    </div>
  );
};
export default MovieCard;
