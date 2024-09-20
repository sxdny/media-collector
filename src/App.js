import './App.css';

import { useState } from 'react';
import { Movie } from './modules/Media';

function App() {

  const [movies, setMovies] = useState([]);

  let movieItems = [];

  function editMovie() {
    // Activamos el form para editar xd
    document.getElementById('editMovieForm').classList.remove('disabled');

    // rehabilitamos los botones
    document.getElementById('editMovieName').disabled = false;
    document.getElementById('editMovieDirector').disabled = false;
    document.getElementById('editMovieButton').disabled = false;

    // rellenamos los inputs con el contenido de la película a editar
    console.log(this);
  }

  function deleteMovie() {
    
  }

  for (let i = 0; i < movies.length; i++) {
    movieItems.push(
      <tr key={movies[i]._id}>
        <td>
          {movies[i]._id}
        </td>
        <td>
          {movies[i]._name}
        </td>
        <td>
          {movies[i]._director}
        </td>
        <td>
          {movies[i]._duration}
        </td>
        <td className='actionButtons'>
          <button onClick={editMovie} id='edit' key={movies[i]._id + "edit"}>Edit</button>
          <button onClick={deleteMovie} id='deleteMovieButton' key={movies[i]._id + "delete"}>Delete</button>
        </td>
      </tr>
    )
  }

  function handleEditForm() {
    alert("edit form!")
  }

  function handleForm() {

    const nameInput = document.getElementById('movieName');
    const directorInput = document.getElementById('movieDirector');
    const errorMessage = document.getElementById('errorMessage');

    if (nameInput.value !== "" && directorInput.value !== "") {
      errorMessage.style.display = "none";

      // Creamos un nuevo objeto Movie
      const newMovie = new Movie(nameInput.value, directorInput.value);

      setMovies([...movies, newMovie]);

      console.log(movies);

      nameInput.value = "";
      directorInput.value = "";

    } else {
      console.log(Error("Por favor, rellene todos los campos."));
      errorMessage.style.display = "block";
      errorMessage.innerText = 'Por favor, rellene todos los campos';
    }
  }

  return (
    <div className="App">
      <div>
        <h2>Movies</h2>
        <p>A list of all the movies created:</p>
      </div>

      {
        movies.length > 0 ? (
          <table border="border">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Director</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movieItems}
            </tbody>
          </table>
        ) : (
          <p> There are no movies. Create a new one down below. </p>
        )}

      <div className='forms'>
        <div className='createMovieForm'>
          <h3>Create a movie</h3>
          <form action=".">
            <div>
              <label htmlFor="">Name of the movie:</label>
              <input type="text" name="movieName" id="movieName" />
            </div>
            <div>
              <label htmlFor="">Director:</label>
              <input type="text" name="movieDirector" id="movieDirector" />
            </div>
          </form>

          <p id='errorMessage'></p>

          <button onClick={handleForm} id='addMovieButton'>Add Movie</button>
        </div>

        <div id='editMovieForm' className='editMovieForm disabled'>
          <h3>Edit a movie</h3>
          <form action=".">
            <div>
              <label htmlFor="">Name of the movie:</label>
              <input disabled type="text" name="movieName" id="editMovieName" />
            </div>
            <div>
              <label htmlFor="">Director:</label>
              <input disabled type="text" name="movieDirector" id="editMovieDirector" />
            </div>
          </form>

          <p id='errorMessage'></p>

          <button disabled onClick={handleEditForm} id='editMovieButton'>Edit Movie</button>
        </div>

      </div>

    </div>

  );
}

export default App;
