/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/
/*
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//FUNZIONI utili per il programma

//Funzione per generare numero random
function randomNumber( min, max) {
 return parseInt(Math.random() * (max - min) + min + 1) ;
}
//Funzione per cercare un elemento in un array
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


//Faccio scegliere la difficoltà per giocare
do {
var sceltaUtente = parseInt(prompt('Seleziona la difficoltà: 0 , 1 , 2'));
} while ( sceltaUtente != 0 && sceltaUtente != 1 && sceltaUtente != 2);
//Uso lo switch per impostare la difficoltà e cambiare il range di numeri random
var maxBombe;
switch (sceltaUtente) {
  case 0:
    maxBombe = 100;
    break;
  case 1:
    maxBombe = 80;
    break;
  default:
    maxBombe = 50;
}

//Array vuoti per numeri random e numeri inseriti dall'utente
var numbersRandom = [];
var numeriUtente = [];
//Inizializzo un ciclo while per stampare 16 numeri random
while (numbersRandom.length < 16) {
  var numberRandom = randomNumber(1, maxBombe);
  //Evoco la mia funzione isInArray per non ripetere un numero
  var finding = isInArray( numbersRandom, numberRandom);
  if ( finding == false ) {
    numbersRandom.push(numberRandom);
  }
}
//Stampo i numeri random generati in console
console.log( numbersRandom );

//Creo delle variabili utili per il ciclo while del gioco
var numeroUtente;
var tentativi = maxBombe - 16;
var found = false;
//Inizializzo il ciclo
while ( numeriUtente.length < tentativi && found == false ) {
//Chiedo all'utente un numero in base al livello di difficoltà che ha scelto
if (maxBombe == 80) {
  var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 80'));
} else if ( maxBombe == 50 ) {
  var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 50'));
} else {
  var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
}
//Nel caso l'utente digiti una parola
if (isNaN(numeroUtente)) {
  alert('Inserici un numero!! non una parola')
}

var foundNumber = isInArray(numeriUtente, numeroUtente);
  //Se l'utente digita un numero che si trova nell'array allora l'utente ha perso
  if (isInArray(numbersRandom, numeroUtente) == true && foundNumber == false  ) {
    found = true;
    alert('hai preso la mina! hai perso.');
  }//Se digita lo stesso numero gli faccio inserire un altro numero
  else if (foundNumber == true ) {
    alert('Hai digitato lo stesso numero, inseriscine un altro!');
  }//Altrimenti il gioco continua
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
