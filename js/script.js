// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.


// FASE PREPARATORIA
// 1 - Chiedo all'utente di scegliere il livello di difficoltà da 1 a 3
// 2 - Genero 16 numeri casuali (bombe) nel range di numeri del livello di difficoltà scelto. Range: 1 - gameMaxRange -> Level_1: 1-100; Level_2: 1-81; Level_3: 1-49
// 3 - Creo variabile con i tentativi andati a buon fine = gameMaxRange - numero bombe generate (16)


// FASE LOGICA
// Finchè il gioco non finisce: 
// Chiedo all'utente di inserire un numero alla volta
// - SE il numero corrisponde a una bomba -> finisce il gioco e comunico 'Hai perso' + 'punteggio (= tentativi senza aver calpestato una bomba)'
    // - ALTRIMENTI il numero non corrisponde a una bomba
        // Pusho il numero nell'array dei tentativi andati a buon fine controllando che quel numero non sia già presente
        // SE il numero di tentativi === al numero di tentativi massimi possibili -> Finisce il gioco con messaggio all'utente 'Hai vinto'


// 1 - Chiedo all'utente di scegliere il livello di difficoltà da 1 a 3
let userLevel = prompt('Inserisci un livello di difficoltà da 1 a 3');
// FINCHE' non viene inserito un numero tra 1 e 3 continuo a chiedere di inserire il numero
while (userLevel < 1 || userLevel > 3) {
    userLevel = prompt('Inserisci un livello di difficoltà da 1 a 3');
}

let gameMaxRange;

switch (userLevel) {
    case '1':
        gameMaxRange = 100;
        break;
    case '2':
        gameMaxRange = 81;
        break;
    case '3':
        gameMaxRange = 49;  // For Test set: gameMaxRange = 5; bombsNumber = 1;
        break;
}


// 2 - Invoco la funzione genRndNumbersArray() per generare un array senza doppioni con 16 numeri casuali (bombe) nel range di numeri del livello di difficoltà scelto: 1 - gameMaxRange -> Level_1: 1-100; Level_2: 1-81; Level_3: 1-49
const bombsNumber = 16; // For Test set: bombsNumber = 1; gameMaxRange = 5;
const bombsGenerated = genRndNumbersArray(bombsNumber, 1, gameMaxRange);

// DEBUG: Numeri Bomba
console.log('Bombe generate: ', bombsGenerated);


// 3 - Creo variabile con il numero max di tentativi = gameMaxRange - numero bombe generate (16)
let maxAttempts = gameMaxRange - bombsNumber;


// Finchè il gioco non finisce:
let isFinished = false;
let userAttempts = [];

while (!isFinished) {
// Chiedo all'utente di inserire un numero alla volta compreso tra 1 e il gameMaxRange
let userNumber = parseInt( prompt(`Inserisci un numero tra 1 e ${gameMaxRange} stando attento a non calpestare bombe`) );

// - SE il numero corrisponde a una bomba -> finisce il gioco e comunico 'Hai perso' + 'punteggio (= tentativi senza aver calpestato una bomba)'
if (bombsGenerated.includes(userNumber)) {
    alert(`Hai perso! Punteggio: ${userAttempts.length}`);
    isFinished = true;
// - ALTRIMENTI il numero non corrisponde a una bomba e SE il numero non è ancora presente nell'array dei tentativi andati a buon fine -> ce lo pusho
} else if (!userAttempts.includes(userNumber)) {
        userAttempts.push(userNumber);
        // SE il numero di tentativi === al numero di tentativi massimi possibili -> Finisce il gioco con messaggio all'utente 'Hai vinto'
        if (userAttempts.length === maxAttempts) {
            alert(`Hai vinto! Punteggio: ${userAttempts.length}`);        
            isFinished = true;
        }
    }
}


// -----------------------
// FUNCTIONS
// -----------------------


// Genera un array di un numero dato di elementi 'howManyNumbers' in cui ogni elemento è un numero random estratto da un range di numeri stabilito
// L'array che risulta non ha duplicati
// howManyNumbers -> quanti numeri generare
// minNumber -> il numero minimo del range da cui generare il numero casuale
// maxNumber -> il numero massimo del range da cui generare il numero casuale
// return: array con i numeri generati
function genRndNumbersArray(howManyNumbers, minNumber, maxNumber) {
    const randomNumbersArray = [];
    
    while (randomNumbersArray.length < howManyNumbers) {
        const rndNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) ) + minNumber;
    
        if (!randomNumbersArray.includes(rndNumber)) {
            randomNumbersArray.push(rndNumber);
        }
    }
    
    return randomNumbersArray;
}