// --- Null ---
// Explicita
var nullVaribale;
nullVaribale = null;
// nullVaribale = 1; // Error
var otherVarible = null;
otherVarible = "Test";
console.log("nullVaribale: " + nullVaribale);
console.log("otherVarible: " + otherVarible);
// --- Undefined ---
var undefinedVarible = undefined;
// undefinedVarible = "test"; // Error
var otherUndefined = undefined;
otherUndefined = 1;
console.log("undefinedVarible " + undefinedVarible);
console.log("otherUndefined " + otherUndefined);
// --- Null y Undefined: como subtipos ---
//  Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
var albumName;
albumName = null;
albumName = undefined;
