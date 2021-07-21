export { };

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// clases
class Picture {

  private id: number;
  private title: string;
  private orientation: PhotoOrientation;
  // propiedades
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[
      id: ${this.id}, 
      title: ${this.title}, 
      orientation: ${this.orientation}, 
    ]`
  };
}


class Album {

  private id: number;
  private title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
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

// picture.id = 100;  // Error, value private 
// picture.title = "another title";   // Error, value private 
// album.title = "personal Activities";   // Error, value private 
console.log("album: ", album);

