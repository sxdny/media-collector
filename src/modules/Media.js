class Media {
  constructor(name) {
    this._id = this.generateId();
    this._name = name;
  }

  get name() {
    return this._name;
  }

  generateId() {
    const className = this.constructor.name.toLowerCase().charAt(0);
    if (!Media.idCounters) {
      Media.idCounters = {};
    }
    if (!Media.idCounters[className]) {
      Media.idCounters[className] = 1;
    } else {
      Media.idCounters[className]++;
    }
    return `${className}${Media.idCounters[className]}`;
  }
}

class Movie extends Media {
  constructor(name, director) {
    super(name);
    this._director = director;
    this._plot = [];
    this._genres = [];
    this._poster = "";
    this._duration = 0;
    this._scoring = 0;
    this._reviews = []; // Crear un objeto Review y tal
  }

  get movieId() {
    return this._id;
  }

  get director() {
    return this._director;
  }

  get plot() {
    return this._plot;
  }

  get genres() {
    return this._genres;
  }

  get posterUrl() {
    return this._poster;
  }

  get duration() {
    return this._duration;
  }

  get scoring() {
    return this._scoring;
  }

  get reviews() {
    return this._reviews;
  }

  set director(newDirector) {
    this._director = newDirector;
  }

  set plot(newCharacter) {
    this._plot.push(newCharacter);
  }

  set genres(newGenre) {
    this._genres.push(newGenre);
  }

  set poster(newPosterUrl) {
    this._poster = newPosterUrl;
  }

  set duration(newDuration) {
    this._duration = newDuration;
  }

  set scoring(newScoring) {
    this._scoring = newScoring;
  }

  set addReview(newReview) {
    this._reviews.push(newReview);
  }

}

export { Movie };