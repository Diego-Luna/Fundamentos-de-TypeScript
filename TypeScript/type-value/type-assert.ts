export { };
// <> // Angle Bracket syntax
let username: any;
username = "luna Lopez"

// tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ?
  `Welcome ${username}` :
  'Username is too short';

console.log("message ", message);

let usernameWithId: any = "Diego 1";
// Como obtener el Username?

username = (<string>usernameWithId).substring(0, 5);

console.log("user name only ", username);

// Sintaxis "as"

message = (username as string).length > 5 ?
  `Welcome ${username}` :
  'Username is too short';

let helloUser: any;

helloUser = "Hello Luna";
username = (helloUser as string).substring(6);

console.log("username ", username);
