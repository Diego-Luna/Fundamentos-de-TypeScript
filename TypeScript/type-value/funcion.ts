// Crear una fotografia
// function createPicture(tiitle, data, size) {
//   // tiitle // tipo any

// }

type SquareSizes = "100x100" | "500x500" | "1000x1000"

// Usamos TypeScript
// function createPictureTypeScript(tiitle: string, data: string, size: SquareSizes) {

//   // sse crea la fotografia
//   console.log("create picture using", tiitle, data, size);
// }


// createPictureTypeScript("my birthday", "2020-02-10", "500x500");

// createPictureTypeScript("Mexico Trip", "2020-3");

// parametros opcionales

function createPictureTypeScript(tiitle?: string, data?: string, size?: SquareSizes) {

  // sse crea la fotografia
  console.log("create picture using: ", tiitle, data, size);
}

createPictureTypeScript("my birthday", "2020-02-10", "500x500");

createPictureTypeScript("Canada Trip", "2020-3");
createPictureTypeScript();

// fat arrow
let createPic = (tiitle: string, data: string, size: SquareSizes): object => {
  return {
    tiitle,
    data,
    size
  }
};


const picture = createPic("MoonMakers session", "2020-03-19", "100x100");

console.log("picture: ", picture);


// tipo de retorno con TypeScript

function handleErrorTypeScript(code: number, message: string): never | string {
  // procesamiento del codigo, mesaje
  if (message === "error") {
    throw new Error(`${message}. Code Error: ${code} `);

  } else {
    return "An error has occurred";
  }
}

try {
  let result = handleErrorTypeScript(200, "ok"); // String
  console.log("result", result);

  result = handleErrorTypeScript(404, "error");  // never
  console.log("result", result);

} catch (error) {

}
