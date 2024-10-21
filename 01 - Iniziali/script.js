/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function nameInitials(array) {
  const initials = []; //
  for (let i = 0; i < array.length; i++) {
    console.log("Nome:", array[i]);
    console.log("Iniziale:", array[i][0]);
    initials.push(array[i][0]);
  }
  return initials;
}

// Invoca la funzione qui e stampa il risultato in console
const result = nameInitials(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log("Risultato finale:", result); // Stampa il risultato finale in console
