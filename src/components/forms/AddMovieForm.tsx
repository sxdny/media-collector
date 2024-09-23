import { useState } from "react";
import { addMovieForm } from "../../modules/types";
import { Movie } from "../../modules/Media";

const AddMovieForm: React.FC<addMovieForm> = ({ movies, setMovies }) => {
  const [name, setName] = useState<string>("");
  const [director, setDirector] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMovie = Movie.create({name, director});

    setMovies([...movies, newMovie]);
  };

  return (
    <>
      <header>
        <h3>Add a movie</h3>
        <p>Use this form to add a new movie.</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name of the movie:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Director:</label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <p>Error message...</p>
        <button type="submit">Add movie</button>
      </form>
    </>
  );
};

export default AddMovieForm;
