// --- object ---

// Tipo explicito
let user: object;
user = {} // object
user = {
  id: 1,
  username: "Luna",
  firstame: "Diego",
  isPro: true
}

console.log("user", user);

// Object vs object (clase JS vs tipo TS)

const myObject = {
  id: 1,
  username: "Luna",
  firstame: "Diego",
  isPro: true
}

const isInstance = myObject instanceof Object; // Clase Object JS
console.log("isInstance ", isInstance);

console.log("myObject.name ", myObject.username);
