// --- tuple ---

let userTuple: [number, string];

userTuple = [1, "Hola"]

console.log("userTuple ", userTuple);
console.log("UserName ", userTuple[1].length);
console.log("id ", userTuple[0]);

// tuple con varios valores

// id, username, isPro
let userInfoTuple: [number, string, boolean];
userInfoTuple = [2, "luna", true];
console.log("userInfoTuple ", userInfoTuple);

//  Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, "Piper"]); //posision 0
array.push([2, "Hazel"]); //posision 1
array.push([3, "Chase"]); //posision 2

console.log("array ", array);

// uso de funciones Array
//  Chase -> Chase01

array[2][1] = array[2][1].concat("01"); //Chase01

console.log("array ", array);
