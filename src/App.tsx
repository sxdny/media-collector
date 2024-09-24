import { useState, useEffect } from "react";
import { Movie } from "./modules/Media";

import AddMovieForm from "./components/forms/movies/AddMovieForm";
import ShowMoviesTable from "./components/Table";


function App() {
  
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <main className="h-screen flex justify-between">
      <ShowMoviesTable movies={movies}></ShowMoviesTable>
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

export default App;
