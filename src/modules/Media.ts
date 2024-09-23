var nOfMovies = 0;

export interface Media {
  name: string,
}

export class Movie implements Media {
  id: string = this.generateMovieId();
  name: string;
  director: string;

  private constructor(name: string, director: string) {
    this.name = name;
    this.director = director;
  }

  public static create(defaultValues?: Partial<Movie>): Movie {
    const defaultName = "Default Movie Name";
    const defaultDirector = "Default Director";

    const name = defaultValues?.name || defaultName;
    const director = defaultValues?.director || defaultDirector;

    return new Movie(name, director);

  }

  public generateMovieId() {
    const id = "movie-n-" + nOfMovies;
    nOfMovies++;
    return id;
  }

  static getKeys() {
    return Object.keys(Movie.create());
  }
}