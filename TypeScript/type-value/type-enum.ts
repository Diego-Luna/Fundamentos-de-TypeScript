// --- Enum ---

// orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panomara = 3;

enum PhotoOrientation {
  landscape = 0,
  portrait = 1,
  square = 2,
  panomara = 3
}

const landscape: PhotoOrientation = PhotoOrientation.landscape
console.log("landscape ", landscape);
console.log("landscape ", PhotoOrientation[landscape]);


enum PictureOrientation{
  landscape = 10,
  portrait,       //11
  square,         //12
  panomara        //13
}

console.log("portrait ", PictureOrientation.portrait);


enum Country{
    Bolivia = "bol",
    Colombia = "col",
    Mexico = "mex",
    EEUU = "usa",
    España = "esp"
}

const country: Country = Country.Colombia
console.log("country ", country);
