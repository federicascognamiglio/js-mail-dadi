// DATI
const authorizedEmail = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com"];
const generatedEmail = prompt("Inserisci la tua email");

// ESECUZIONE LOGICA
let message;
for (let i = 0; i < authorizedEmail.length; i++) {
    const curEmail = authorizedEmail[i];
    if (curEmail === generatedEmail) {
        message = "Access Granted";
    }
    // } else {
    //     message = "Access Denied";
    // }
}

console.log(message);
