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
// 2 - Genero 16 numeri casuali (bombe) nel range di numeri del livello di difficoltà scelto: 1 - gameMaxRange -> Level_1: 1-100; Level_2: 1-81; Level_3: 1-49
// 3 - Creo variabile con i tentativi andati a buon fine = gameMaxRange - numero bombe generate (16)





