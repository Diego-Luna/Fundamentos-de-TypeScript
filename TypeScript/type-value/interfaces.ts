// Funcion para mostrar una fotografia

export { };

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// definimos una interfas

interface Picture {
  title: string;
  data: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(`[ title: ${picture.title}, date: ${picture.data}, orientation: ${picture.orientation} ]`);

}

let myPic = {
  title: "Test Title",
  data: "2020-03",
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic);
showPicture({
  title: "Hello word",
  data: "2021-03",
  orientation: PhotoOrientation.Square,
  // extra: "test", // Error
});

// definimos una interfas, con valores opcionales

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: "Default", data: "2020-03" };
  if (config.title) {
    pic.title = config.title
  }
  if (config.date) {
    pic.data = config.date;
  }
  return pic;
}

let picture = generatePicture({

});

console.log("picture: ", picture);
picture = generatePicture({ title: "Travel Pic", date: "2021-05" });
console.log("picture: ", picture);

//  interface:  Usuario

interface User {
  readonly id: number; // readonly, solo lectura
  username: string;
  isPro: boolean;
}

let user: User;
user = {
  id: 10,
  username: "Diego",
  isPro: true,
}

console.log("user: ", user);
user.username = "Luna";
console.log("user: ", user);
// user.id = 12; // Error

