/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greet = (name) => {
    const now = new Date()
    const currentHours = now.getHours();
    
    let greet;
    if(currentHours <= 13){
        greet = 'Buongiorno'
    }else if(currentHours <= 17){
        greet = 'Buon pomeriggio'
    }else{
        greet = 'Buonasera'
    }

    return `${greet} ${name}`
}
// Invoca la funzione qui e stampa il risultato in console
console.log(greet("Dario"))
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.