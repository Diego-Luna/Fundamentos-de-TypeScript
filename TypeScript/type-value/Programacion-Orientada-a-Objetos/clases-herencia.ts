export { };

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// SuperClase, para controlar las instancias creaas
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }
  // set id(id: number) { //Error con -> readonly
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

}

// get y set

// clases
class Picture extends Item {

  public static photoOrientation = PhotoOrientation;

  private _orientation: PhotoOrientation;
  // propiedades
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    // le pasamos el constructor de la super clase
    super(id, title);
    // this._id = id;
    // this._title = title;
    this._orientation = orientation;
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


class Album extends Item {

  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this.pictures = [];
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

// picture.id = 100;  // Error, value private y readonly
picture.title = "another title";
album.title = "personal Activities";
console.log("album: ", album);

// const item = new Item(1, "Teste title"); // Error
// console.log(item);


// Probar el miembro estatico
console.log("photoOrientation: ", Picture.photoOrientation.Landscape);


