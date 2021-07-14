// --- Array ---

// []

// Tipo explicito

let users: string[];
users = ["tacos", "pizza", "hamburguesa"];
// users = [1, true, "Hola"] // Error

// Tipo inferido

let otherUsers = ["tacos", "pizza", "hamburguesa"];
// users = [1, true, "Hola"] // Error

// Array<Tipo>

let pictureTitle: Array<string>;
pictureTitle = ['landscape'];


//  Accediendo a los valores en un Array

console.log("first user: ", users[0]);
console.log("pictureTitle: ", pictureTitle[0]);

// propiedades en Array
console.log("users.length", users.length);

// useo de funciones en Arrays
users.push("sushi");
users.sort();
console.log("Users: ",users);
