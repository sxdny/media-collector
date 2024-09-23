import { Movie } from "./Media";

export interface addMovieForm {
  movies: Movie[],
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export interface moviesTable {
  movies: Movie[]
}