import {
  Table, 
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import { Button } from "./ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

import { useAppSelector } from "../hooks/store";
import { useMovieActions } from "../hooks/useMovieActions";

export function MoviesTable() {

  const movies = useAppSelector((state) => state.movies);
  
  const removeMovie = useMovieActions();

  return (
    <Table>
      <TableCaption>A list of all the movies.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Director</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead className="w-[100px]">Stars</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {movies.map((movie) => (
            <TableRow>
              <TableCell className="font-medium">{movie.name}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>Action</TableCell>
              <TableCell className="text-right">5</TableCell>
              <TableCell className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" size="icon">
                  <Pencil1Icon></Pencil1Icon>
                </Button>
                <Button onClick={() => removeMovie(movie.id)} variant="outline" size="icon">
                  <TrashIcon></TrashIcon>
                </Button>
              </TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
