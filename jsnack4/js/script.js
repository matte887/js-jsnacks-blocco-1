// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo un numero di 4 cifre all'utente
const userNum = prompt("Scrivi un numero di 4 cifre");
console.log(userNum);

// Divido la stringa in singoli caratteri (ancora non sono considerati come numeri)
const myArray = userNum.split("");
console.log(myArray);

// Sommo i numeri dell'array
// let result = 0;
// for (let i = 0; i < myArray.length; i++) {
//     result += +myArray[i];    
// }

// console.log(result);

const result = parseInt(myArray[0]) + parseInt(myArray[1]) + parseInt(myArray[2]) + parseInt(myArray[3]);
console.log(result);
