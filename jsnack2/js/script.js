// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// Creo un array vuoto
const oddNumber = [];

// Creo un ciclo che chiederà per 6 volte un numero all'utente
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    // Verifico se il numero è dispari. Se lo è lo pusho nell'array vuoto
    console.log(userNumber);
    if (userNumber % 2 != 0) {
        oddNumber.push(userNumber);
    }
}

// Stampo in console il risultato
console.log(oddNumber);