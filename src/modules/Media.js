class Media {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
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

  get name() {
    return this._name;
  }

  
}