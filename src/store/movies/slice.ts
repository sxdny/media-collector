import { createSlice } from "@reduxjs/toolkit";

export interface Movie {
  name: string;
  director: string;
}

export interface MovieState extends Movie {
  id: string;
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
  reducers: {},
});

export default moviesSlice.reducer;
