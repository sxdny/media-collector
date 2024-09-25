import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type MovieID = string; // Para no cambiarlo en todos los lugares

export interface Movie {
  name: string;
  director: string;
}

export interface MovieState extends Movie {
  id: MovieID; // Propiedad solo relevante para la gestión
}

const initialState: MovieState[] = [
  {
    id: "1",
    name: "Spiderman",
    director: "Sidney Silva"
  }
];

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    deleteMovieById: (state, action: PayloadAction<MovieID>) => {
      const id = action.payload;
      return state.filter((movie) => movie.id !== id)
    }
  },
});

export default moviesSlice.reducer;

export const {deleteMovieById} = moviesSlice.actions;

// Las actions son las funciones digamos que estan dentro
// del --> reducers: { actions } 
