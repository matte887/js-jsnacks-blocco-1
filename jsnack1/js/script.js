// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedere 2 parole all'utente
const firstWord = prompt("Scrivi una parola");
const secondWord = prompt("Scrivi un'altra parola");

// Estrapolare la lunghezza delle parole inserite
const firstWordLenght = firstWord.length;
const secondWordLenght = secondWord.length;

// Controllo
console.log(`Prima parola: ${firstWord} (${firstWordLenght})`);
console.log(`Seconda parola: ${secondWord} (${secondWordLenght})`);

// Verificare quale delle due è più lunga e stampare il risultato in pagina
let result;
if (firstWordLenght > secondWordLenght) {
    result = `${secondWord}, ${firstWord}`
} else if (secondWordLenght > firstWordLenght) {
    result = `${firstWord}, ${secondWord}`;
} else {
    result = "Le parole hanno uguale lunghezza";
}

console.log(result);
document.getElementById("result").innerHTML = result;

