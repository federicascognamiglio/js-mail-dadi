// DATI
const numPlayer = Math.floor(Math.random()* 10) +1;
const numComputer = Math.floor(Math.random()* 10) +1;

console.log(numPlayer, numComputer);


// ESECUZIONE LOGICA
let message;
if (numPlayer > numComputer) {
    message = "Hai vinto! :)"
} else if (numPlayer < numComputer) {
    message = "Hai perso! :("
} else {
    message = "Pareggio! :|"
}

console.log(message);
