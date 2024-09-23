import { Movie } from "../modules/Media";
import { moviesTable } from "../modules/types";

const ShowMoviesTable: React.FC<moviesTable> = ({ movies }) => {
  // Contamos las propiedades del objeto Movies
  // Esto me sirve para que si en un futuro añado
  // o quito propiedades, no tengo que cambiarlo
  // aquí tambien sabes

  const testMovie = Movie.create();
  const movieKeysLength = Movie.getKeys().length;

  console.log(Object.keys(testMovie));

  const tableHeaders = Object.keys(testMovie).map((key) => {
    return key;
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
          
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default ShowMoviesTable;
