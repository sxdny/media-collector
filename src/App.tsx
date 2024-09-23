import { useState, useEffect } from "react";
import { Movie } from "./modules/Media";

import AddMovieForm from "./components/forms/AddMovieForm";
import ShowMoviesTable from "./components/Table";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  
  useEffect(() => {
    console.log("Movies updated:", movies);
    movies.map((movie) => {
      console.log(movie);
    })
  }, [movies]);

  return (
    <>
      <ShowMoviesTable movies={movies}></ShowMoviesTable>
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
}

export default App;
