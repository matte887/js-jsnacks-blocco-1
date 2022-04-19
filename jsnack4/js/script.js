// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo un numero di 4 cifre all'utente
const userNum = prompt("Scrivi un numero di 4 cifre");
console.log(userNum);

// Creo un ciclo che somma i componenti della stringa appena creata
let result = 0;
for (let i = 0; i < userNum.length; i++) {
    result += parseInt(userNum[i]); 
    console.log(i, typeof(i));   
}

console.log("La somma dei numeri inseriti è: ", result);