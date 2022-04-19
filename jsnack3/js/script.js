// Calcola la somma e la media dei primi 10 numeri.

// Creo una variabile e gli do valore 0 (altrimenti la somma non sarà definita)
let result = 0;
// Creo un ciclo che conta da 1 a 10
for (let i = 1; i <= 10; i++) {
    // Ad ogni ciclo aggiungo i
    result += i;
}

// Stampo il risultato
console.log(result);

// Calcolo la media
const mean = result / 10;
console.log(mean);