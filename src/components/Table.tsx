import { Movie } from "../modules/Media";
import { moviesTable } from "../modules/types";

const testMovie = Movie.create();

const ShowMoviesTable: React.FC<moviesTable> = ({ movies }) => {
 
  const tableHeaders = Object.keys(testMovie).map((key) => {
    return key;
  });

  function handleEditButton(movieId : string) {
    // Abrir un popup

    const movieToEdit = movies.filter((movie) => movie.id === movieId);
  }

  function handleDeleteButton(movieId : string) {

  }

  return (
    <>
      {movies.length > 0 ? (
        <div>
          <table className="table-fixed max-h-16 m-5 text-sm self-auto">
          <thead className="bg-neutral-300">
            <tr className="text-left h-12">
              {tableHeaders.map((header) => (
                <th className="h-12 border border-black py-2 px-3" key={header}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
              <th className="h-12 border border-black py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody className="h-12">
            {movies.map((movie, index) => (
              <tr className="h-12" key={index}>
                {tableHeaders.map((header) => (
                  <td className="h-12 border border-black py-2 px-3" key={header}>
                    {movie[header as keyof typeof movie]}
                  </td>
                ))}
                <td className="border border-black py-2 px-3">
                  <div className="flex justify-between gap-2">
                    <button onClick={() => handleEditButton(movie.id)}>Edit</button>
                    <button onClick={() => handleDeleteButton(movie.id)} className="text-red-500">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <dialog>
          <p>Pop up dialogo xdddd</p>
          <button onClick={console.log}>Close</button>
        </dialog>
        
        </div>
        
      ) : (
        <div className="flex gap-1 m-5">
        <p className="text-lg">
          There are no movies.
        </p>
        <p className="text-lg text-blue-500">
          Create a new one with the form.
        </p>
        </div>
      )}
    </>
  );
};

export default ShowMoviesTable;
