import './App.css';

import { useState } from 'react';
import { Movie } from './modules/Media';

function App() {

  const [movies, setMovies] = useState([]);

  let movieItems = [];
  let movieEditingId = 0;

  function editMovie(movieId) {
    movieEditingId = movieId; // para el form de editar

    document.getElementById('editMovieForm').classList.remove('disabled');
    document.getElementById('editMovieName').disabled = false;
    document.getElementById('editMovieDirector').disabled = false;
    document.getElementById('editMovieButton').disabled = false;
    
    movies.forEach(movie => {
      if (movie._id === movieId) {
        document.getElementById('editMovieName').value = movie._name;
        document.getElementById('editMovieDirector').value = movie._director;
      }      
    })
  }
 
  function deleteMovie(movieId) {
    const updatedMovies = movies.filter(movie => movie._id !== movieId);
    setMovies(updatedMovies);
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
          <button onClick={() => editMovie(movies[i]._id)} id='edit'>Edit</button>
          <button onClick={() => deleteMovie(movies[i]._id)} id='deleteMovieButton'>Delete</button>
        </td>
      </tr>
    )
  }

  function handleEditForm() {
    const nameInputEdit = document.getElementById('editMovieName');
    const directorInputEdit = document.getElementById('editMovieDirector');
    const editMovieButton = document.getElementById('editMovieButton');

    console.log(nameInputEdit.value, directorInputEdit.value);

    if (nameInputEdit.value !== '' && directorInputEdit.value !== '') {
      console.log("Id que se está editando:");
      console.log(movieEditingId);

      const newMovie = movies.find(movie => movie._id === movieEditingId);
      console.log("Película a editar:")
      console.log(newMovie);
      newMovie._name = nameInputEdit.value;
      newMovie._director = directorInputEdit.value;

      const newMovies = movies.map(movie =>
        movie._id === movieEditingId ? { ...movie, ...newMovie } : movie
      );
      console.log("Peliculas actualizadas:", newMovies);
      setMovies(newMovies);

      nameInputEdit.value = "";
      directorInputEdit.value = "";
      nameInputEdit.disabled = true;
      directorInputEdit.disabled = true;
      editMovieButton.disabled = true;
      document.getElementById('editMovieForm').classList.add('disabled');


    } else {
      console.log("Introduzca texto para poder cambiar los valores.")
    }
  }

  function handleForm() {

    const nameInput = document.getElementById('movieName');
    const directorInput = document.getElementById('movieDirector');
    const errorMessage = document.getElementById('errorMessage');

    if (nameInput.value !== "" && directorInput.value !== "") {
      errorMessage.style.display = "none";

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

          <button onClick={handleEditForm} id='editMovieButton'>Edit Movie</button>
        </div>

      </div>

    </div>

  );
}

export default App;
