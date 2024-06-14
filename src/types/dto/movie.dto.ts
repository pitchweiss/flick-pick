import { TRating } from "../rating.type";

export type TMovieDto = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  video: boolean;
  ratings: TRating[];
  release_date?: string;
};
