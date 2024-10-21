/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

//! Funzione classica
const word1 = 'javascript';
vocaliList = ["a", "e", "i", "o", "u"];
newArray = [];
// Dichiara la funzione qui.
function vocali (word) {
for (let i = 0; i < word.length; i++){
    if (vocaliList.includes(word[i])){
        newArray.push(word[i])
    }
}
console.log(newArray.length)
return newArray.length
}

vocali(word)

//! Arrow function (?)
const word2 = 'javascript';
vocaliList = ["a", "e", "i", "o", "u"];
newArray = [];
// Dichiara la funzione qui.
let vocali = (word) => {
for (let i = 0; i < word.length; i++){
    if (vocaliList.includes(word[i])){
        newArray.push(word[i])
    }
}
console.log(newArray.length)
return newArray.length
}

vocali(word)


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)


