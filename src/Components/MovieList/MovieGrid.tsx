import { FC } from "react";
import { TMovieDto } from "../../types/dto/movie.dto";
import MovieCard from "./MovieCard";

interface IMovieGridProps {
  movies: TMovieDto[];
}

const MovieGrid: FC<IMovieGridProps> = ({ movies }: IMovieGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
