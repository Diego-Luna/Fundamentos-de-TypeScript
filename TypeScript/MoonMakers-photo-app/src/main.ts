import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, "Luna", "Diego", true);
const album = new Album(10, "MoonMakers Pictures");
const picture = new Picture(1, "TypeScript - Hello World", "2021-7", PhotoOrientation.Landscape);

// creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log("user: ", user);
