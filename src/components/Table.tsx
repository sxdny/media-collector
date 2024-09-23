import { Movie } from "../modules/Media";
import { moviesTable } from "../modules/types";

const testMovie = Movie.create();

const ShowMoviesTable: React.FC<moviesTable> = ({ movies }) => {
  // Contamos las propiedades del objeto Movies
  // Esto me sirve para que si en un futuro añado
  // o quito propiedades, no tengo que cambiarlo
  // aquí tambien sabes


  console.log(Object.keys(testMovie));

  const tableHeaders = Object.keys(testMovie).map((key) => {
    return key;
  });

  return (
    <>
      {movies.length > 0 ? (
        <table className="m-5">
          <thead className="bg-neutral-300">
            <tr>
              {tableHeaders.map((header) => (
                <th className="border border-black py-2 px-3" key={header}>
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                {tableHeaders.map((header) => (
                  <td className="border border-black py-2 px-3" key={header}>
                    {movie[header as keyof typeof movie]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="bg-gray-700 text-gray-300 p-2 m-5 border border-gray-300 rounded text-sm">
          There are no movies...
        </p>
      )}
    </>
  );
};

export default ShowMoviesTable;
