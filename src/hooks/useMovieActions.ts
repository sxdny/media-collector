import { deleteMovieById, MovieID } from "../store/movies/slice";
import { useAppDispatch } from "./store";

export const useMovieActions = () => {
  
  const dispatch = useAppDispatch();

  const removeMovie = (id: MovieID) => {
    dispatch(deleteMovieById(id))
  }

  return removeMovie
}