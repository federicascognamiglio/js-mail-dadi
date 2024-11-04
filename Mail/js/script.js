// DATI
const authorizedEmail = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com"];
const generatedEmail = prompt("Inserisci la tua email");

// ESECUZIONE LOGICA
let check;
for (let i = 0; i < authorizedEmail.length; i++) {
    const curEmail = authorizedEmail[i];
    const emailCheck = curEmail === generatedEmail;
    if (emailCheck === true) {
        check = true;
    }
}

if (check == true) {
    console.log("L'email ha accesso");
} else {
    console.log("L'email non ha accesso");
}