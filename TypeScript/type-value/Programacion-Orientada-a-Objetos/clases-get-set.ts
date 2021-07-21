export { };

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// get y set

// clases
class Picture {

  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;
  // propiedades
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._id;
  }
  set orientation(o: PhotoOrientation) {
    this._orientation = o;
  }

  // Comportamiento
  public toString() {
    return `[
      id: ${this._id}, 
      title: ${this._title}, 
      orientation: ${this._orientation}, 
    ]`
  };
}


class Album {

  private _id: number;
  private _title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this.pictures = [];
  }

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(1, "MoonMakers session", PhotoOrientation.Square);
album.addPicture(picture);

console.log("album: ", album);

// Accediendo a los miembros publicos
console.log("picture.id: ", picture.id);

picture.id = 100;  // Error, value private 
picture.title = "another title";   // Error, value private 
album.title = "personal Activities";   // Error, value private 
console.log("album: ", album);

