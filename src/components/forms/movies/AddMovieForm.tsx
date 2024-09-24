import { useState } from "react";
import { addMovieForm } from "../../../modules/types";
import { Movie } from "../../../modules/Media";

const AddMovieForm: React.FC<addMovieForm> = ({ movies, setMovies }) => {
  const [name, setName] = useState<string>("");
  const [director, setDirector] = useState<string>("");

  function clearInputs() {
    setName('');
    setDirector('');
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMovie = Movie.create({ name, director });

    setMovies([...movies, newMovie]);

    clearInputs();
  };

  return (
    <div className="flex flex-col m-5">
      <header className="flex flex-col">
        <h3 className="text-4xl font-semibold">Add a movie</h3>
        <p className="text-xl text-slate-600">
          Use this form to add a new movie.
        </p>
      </header>
      <form
        className="flex flex-col rounded my-3 gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="text-slate-700" htmlFor="">
            Name of the movie:
          </label>
          <input
            className="border text-sm rounded text-slate-700 px-2 py-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-700" htmlFor="">
            Director:
          </label>
          <input
            className="border text-sm rounded text-slate-700 px-2 py-1"
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            onSubmitCapture={(e) => console.log("On Submit")}
          />
        </div>
        <button
          className="w-96 bg-blue-700 text-white border border-blue-500 py-3 rounded"
          type="submit"
        >
          Add movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
