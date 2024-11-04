# BRIEF
## MAIL
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!

### DATI
- Elenco di email con accesso concesso
- Email generata da utente

### ESECUZIONE LOGICA
1. **PER OGNI** email contenuta nell'elenco, confronto con email genrata dall'utente
2. **SE** l'email genrata dall'utente = email contenuta nell'elenco
    stampo messaggio "Accesso concesso"
    **ALTRIMENTI** stampo messaggio "Accesso non concesso".


## DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

### DATI
- Numero generato per giocatore
- Numero generato pe computer

### ESECUZIONE LOGICA 

1. **SE** numero giocatore > numero computer
    Giocatore vince
    **ALTRIMENTI SE** Computer vince
    **ALTRIMENTI** Pareggio

