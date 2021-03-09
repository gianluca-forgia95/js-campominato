/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/
//Funzione per generare numero random

function randomNumber( min, max) {
 return parseInt(Math.random() * (max - min) + min + 1) ;
}


//Creo un array vuoto per i numeri generati dal computer
var numbers = [];


//Utilizzo il ciclo while per generare 16 numeri random
i = 0;
while ( i < 16) {
  numbers.push(randomNumber(1,30));
   console.log( numbers[i]);
   i++;
}
