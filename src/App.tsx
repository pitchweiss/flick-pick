import "./App.css";

import { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import MovieGrid from "./Components/MovieList/MovieGrid";
import allMovies from "./assets/movies.json";
import { TMovieDto } from "./types/dto/movie.dto";
import { filterAndSortMovies } from "./utils/filterAndSortMovies";

function App() {
  const [movies, setMovies] = useState<TMovieDto[]>([]);

  useEffect(() => {
    const uniqueMovies = filterAndSortMovies(allMovies as TMovieDto[]);
    setMovies(uniqueMovies);
  }, []);

  return (
    <>
      <Header />
      <MainContent>
        <MovieGrid movies={movies} />
      </MainContent>
    </>
  );
}

export default App;
