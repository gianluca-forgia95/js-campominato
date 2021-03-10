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
//Funzione per cercare in un array
function isInArray(array, item) {
  var i = 0;
  var risultato = false;
  while (i < array.length && risultato == false) {
    if (array[i] == item) {
      risultato = true;
    }
    i++;
  }
  return risultato;
}


//Creo un array vuoto per i numeri generati dal computer randomici
var numbersRandom = [];
//Creo un array vuoto per i numeri generati dall'utente
var numeriUtente = [];
//Inizializzo un ciclo while per stampare 16 numeri
while (numbersRandom.length < 16) {
  var numberRandom = randomNumber(1,100);
  //Evoco la mia funzione isInArray per non ripetere un numero
  var finding = isInArray( numbersRandom, numberRandom);
  if ( finding == false ) {
    numbersRandom.push(numberRandom);
  }
}
console.log( numbersRandom );
//Inizio ad interagire con l'utente
//Creo delle variabili
var numeroUtente;
var tentativi = 84;
var found = false;


while ( numeriUtente.length < tentativi && found == false ) {
//Chiedo all'utente un numero da 1 a 100
var numeroUtente = parseInt(prompt('Inserisci un numero tra 0 e 100'));

var foundNumber = isInArray(numeriUtente, numeroUtente);
  //Se l'utente digita un numero che si trova nell'array allora l'utente ha perso
  if (isInArray(numbersRandom, numeroUtente) == true && foundNumber == false  ) {
    found = true;
    alert('hai preso la mina! hai perso.');

  }
  else if (foundNumber == true ) {
    alert('Hai digitato lo stesso numero, ricomincia');
  }
   else  {
   numeriUtente.push(numeroUtente);
  }



 //Condizione per la vittoria
 if ( numeriUtente.length == tentativi ) {
   alert('Hai vinto!! Congratulazioni');
 }

 }
 //Stampo il punteggio in console
 console.log( 'il tuo punteggio è: ' + numeriUtente.length );
