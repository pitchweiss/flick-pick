import { FC, useEffect, useRef } from "react";

import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { TMovieDto } from "../../types/dto/movie.dto";
import { formatDate } from "../../utils/formatDate";

interface IMovieCardProps {
  movie: TMovieDto;
  isActive: boolean;
  isFavorite: boolean;
}

const MovieCard: FC<IMovieCardProps> = ({ movie, isActive, isFavorite }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef?.current.focus();
    }
  }, [isActive]);
  return (
    <div
      className={`rounded-lg shadow-lg relative ${
        isActive ? "border-2 border-white" : ""
      }`}
      tabIndex={0}
      ref={cardRef}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-off-black/60" />
      <div className="h-[12.5%] absolute top-0 w-full bg-gradient-to-b from-off-black to-off-black/80 rounded-t-lg border-1 border-light-gray">
        <div className="flex items-center justify-center w-full h-full">
          <h2 className="font-semibold text-center text-md text-off-white">
            {movie.title}
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-row items-center justify-between w-full px-2 pb-2">
        <p className="text-off-white">
          Released:{" "}
          {movie.release_date ? formatDate(movie.release_date) : "N/A"}
        </p>
        {isFavorite ? (
          <SolidHeartIcon className="w-6 h-6 text-red-600" />
        ) : (
          <OutlineHeartIcon className="w-6 h-6 text-red-600" />
        )}
      </div>
    </div>
  );
};
export default MovieCard;
