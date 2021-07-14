// --- Any ---

// Tipo explicito
let idUser: any; // acepta cual quier tipo de dato
idUser = 1 // number
idUser = "1" // string

console.log("idUSer", idUser);

// tipo inferido
let otherID; //any

otherID = 1 // number
otherID = "1" // string
console.log("otherID", otherID);

let surprise: any = "hello typescript";

const res = surprise.substring(6);
console.log("res", res);
