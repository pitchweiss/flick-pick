import { FC, useState } from "react";
import { addToFavorites, checkIsFavorite } from "../../utils/manageFavorites";

import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { TMovieDto } from "../../types/dto/movie.dto";
import { formatDate } from "../../utils/formatDate";

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
    <div className="relative rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-off-black/60" />
      <div className="h-[12.5%] absolute top-0 w-full bg-gradient-to-b from-off-black to-off-black/80 rounded-t-lg border-1 border-light-gray">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="font-semibold text-center text-md text-off-white">
            {movie.title}
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-row items-center justify-between w-full">
        <p className="p-2 text-off-white">
          Released:{" "}
          {movie.release_date ? formatDate(movie.release_date) : "N/A"}
        </p>
        <button onClick={toggleFavorite} className="p-2 text-light-gray">
          {isFavorite ? (
            <SolidHeartIcon className="w-6 h-6 text-red-600" />
          ) : (
            <OutlineHeartIcon className="w-6 h-6 text-red-600" />
          )}
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
