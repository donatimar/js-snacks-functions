/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterLetter(array, letter) {
  console.log("Array:", array);
  console.log("Lettera:", letter);

  return array.filter(function (word) {
    const startLetter = word.indexOf(letter) === 0;
    console.log(`Verifico se ${word} inizia con ${letter}:`, startLetter);
    return startLetter;
  });
}

// Invoca la funzione qui e stampa il risultato in console
const result = filterLetter(names, "A");

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log("Risultato:", result);
