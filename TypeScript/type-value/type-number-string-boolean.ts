// --- Number ---
// --- explicito
let phone: number;

phone = 1;
phone = 5423456789;
// phone =  "hola"; // Error por tipo de dato

// --- inferido

let phoneNumber = 5423456789;
phone = 1;
// phone =  "hola"; // Error por tipo de dato

// valor hexadicimal
let hex: number = 0xf00d;

// valor binario
let binary: number = 0b1010;

// valor octal
let octal: number = 0o744;


// --- Boolean ---

// --- explicito

let isPro: boolean;
isPro = true;
// isPro = 74; // Error por tipo de dato

// --- inferido
let isProUser = true;
isProUser = false;


// --- String ---

// --- explicito

let username: string = "Luna";
username = 'Diego';

// Template String
// uso de back-tick `
let userInfo: string;
userInfo = `
  User info:
  username: ${username}
  firstName: ${username + "luna"}
  phone: ${phone}
  isPro: ${isPro}
`

console.log('userInfo', userInfo);
