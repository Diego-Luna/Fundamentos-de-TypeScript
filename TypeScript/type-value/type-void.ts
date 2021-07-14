// --- Void ---

// Tipo explicito

function showInfo(user: any): void {
  console.log("User Info", user.id, user.username, user.firstName);
}

showInfo({
  id: 1, username: "Luna", firstName: "Diego"
});

// tipo inferido
function showFormattedInfo(user: any) {
  console.log("User Info", `
  id: ${user.id},
  username: ${user.username},
  firstName: ${user.firstName},
  ` );
}

showFormattedInfo({
  id: 1, username: "Luna", firstName: "Diego"
});

// tipo void, como tipo de dato en varibales
let unusable: void;
// unusable = null;
unusable = undefined;


// --- Never ---

function handleError(code: number, message: string): never {

  // process your code here
  // Generamos un mensaje

  throw new Error(`${message}. Code ${code}`)

}

try {
  handleError(404, "Not Found");
} catch (error) {

}

function sumNumbers(limit: number): never {
  let suma = 0;
  while (true) {
    suma++;
  }
}

// ciclo infinito el programa nunca termina
sumNumbers(10);