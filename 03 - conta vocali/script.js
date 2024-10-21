/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function typeVowels(string) {
  const vowels = "aeiou";
  let countVowels = 0;
  let foundVowels = [];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      countVowels++;
      foundVowels.push(string[i]);
    }
  }

  return { countVowels, foundVowels };
}

// Invoca la funzione qui e stampa il risultato in console
const result = typeVowels(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(`Numero di vocali: ${result.countVowels}`);
console.log(`Vocali trovate: ${result.foundVowels}`);
