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


// Chiedo all'utente di scegliere il livello di difficoltà da 1 a 3
const userLevel = prompt('Inserisci un livello di difficoltà da 1 a 3');
console.log('userLevel scelto da utente: ', userLevel);

let gameMaxRange;

switch (userLevel) {
    case '1':
        gameMaxRange = 100;
        break;
    case '2':
        gameMaxRange = 81;
        break;
    case '3':
        gameMaxRange = 49;
        break;
    default:
        gameMaxRange = 49;
        break;
}

console.log('gameMaxRange: ', gameMaxRange);

// 2 - Genero 16 numeri casuali (bombe) nel range di numeri del livello di difficoltà scelto: 1 - gameMaxRange -> Level_1: 1-100; Level_2: 1-81; Level_3: 1-49
const bombsNumber = 16;

const bombsGenerated = [];

while (bombsGenerated.length < bombsNumber) {
    const rndNumberBomb = getRndInteger(1, gameMaxRange);

    if (!bombsGenerated.includes(rndNumberBomb)) {
        bombsGenerated.push(rndNumberBomb);
    }
}

console.log('bombsGenerated dopo while: ', bombsGenerated);





// -----------------------
// FUNCTIONS
// -----------------------


// Genera un numero a caso tra min e max inclusi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }