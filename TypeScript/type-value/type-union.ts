//  10, "10"

// let idUserUnion: number | string;
// idUserUnion = 10;
// idUserUnion = "10";

// // buscar username dado un ID
// function getUSerNameById(id: number | string) {
//   // logica de negocio, find the user
//   return "Luna";
// }


// getUSerNameById(20);
// getUSerNameById("20");




// Alisas de tipos: TS

type IdUSer = number | string;
type UserName = string;


let idUserUnion: IdUSer;
idUserUnion = 10;
idUserUnion = "10";

// buscar username dado un ID
function getUSerNameById(id: IdUSer): UserName {
  // logica de negocio, find the user
  return "Luna";
}

getUSerNameById(20);
getUSerNameById("20");

// Tipos Literales
//  100x100, 500x500, 1000x1000
type SquareSize = "100x100" | "500x500" | "1000x1000";
// let smallPicture: SquareSize = "200x200"; Error
let smallPicture: SquareSize = "100x100";
let mediumPicture: SquareSize = "500x500";




enum PicturesSizes {
  small = '75x75',
  medium = '240x180',
  large = '500x375',
  extraLarge = '1024x768',
  superLarge = '3072x2304'
}

const picturaSmall: PicturesSizes = PicturesSizes.small;

type PhotoSizesType = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304'

const medium: PhotoSizesType = '240x180';
