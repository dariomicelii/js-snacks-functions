/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array 
contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const filterWordsByInitials = (words, initial) => {
    const result = [];

    words.forEach((word) => {
        if(word[0] === initial){
            result.push(word);
        }
    });
    return result
};

console.log(filterWordsByInitials(names, 'A'));

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]