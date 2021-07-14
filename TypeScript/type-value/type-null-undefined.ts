// --- Null ---

// Explicita
let nullVaribale: null;
nullVaribale = null
// nullVaribale = 1; // Error

let otherVarible = null;
otherVarible = "Test";

console.log("nullVaribale: " + nullVaribale);
console.log("otherVarible: " + otherVarible);

// --- Undefined ---

let undefinedVarible: undefined = undefined;
// undefinedVarible = "test"; // Error

let otherUndefined = undefined;
otherUndefined = 1;

console.log("undefinedVarible " + undefinedVarible);
console.log("otherUndefined " + otherUndefined);

// --- Null y Undefined: como subtipos ---

//  tsc --watch src/type-null-undefined.ts --strictNullChecks
//  Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error

let albumName: string;
// albumName = null;
// albumName = undefined;
