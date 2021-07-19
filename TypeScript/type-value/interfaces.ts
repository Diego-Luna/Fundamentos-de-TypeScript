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