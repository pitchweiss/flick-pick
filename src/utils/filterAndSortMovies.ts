import { TMovieDto } from "../types/dto/movie.dto";

export function filterAndSortMovies(movies: TMovieDto[]): TMovieDto[] {
  return movies
    .filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    )
    .sort((a, b) => a.title.localeCompare(b.title));
}
