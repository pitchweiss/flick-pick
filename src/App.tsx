import "./App.css";

import { useEffect, useMemo, useState } from "react";

import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import MovieGrid from "./Components/MovieList/MovieGrid";
import allMovies from "./assets/movies.json";
import { TMovieDto } from "./types/dto/movie.dto";
import { filterAndSortMovies } from "./utils/filterAndSortMovies";

function App() {
  const [movies, setMovies] = useState<TMovieDto[]>([]);

  const uniqueMovies = useMemo(
    () => filterAndSortMovies(allMovies as TMovieDto[]),
    [allMovies]
  );

  useEffect(() => {
    setMovies(uniqueMovies);
  }, [uniqueMovies]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
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
