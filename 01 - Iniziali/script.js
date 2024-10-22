/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo 
un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names)

// Dichiara la funzione qui.
function getFirstLetter(words){
    const result = [];
    words.forEach((word) => {
        const firstLetter = word[0];
        result.push(firstLetter);
    });
    return result
}


const result = getFirstLetter(names)
console.log(result)

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]