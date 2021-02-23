// al click del pulsante genera
var element = document.getElementById('genera');
element.addEventListener('click',
function() {

  // dichiaro e assegno valore alle variabili principali
  var nomePasseggero = document.getElementById('nome-utente').value;
  var km = document.getElementById('kilometri').value;
  var etaPasseggero = document.getElementById('fascia-eta').value;
  var prezzoBiglietto = km * 0.21;
  var messaggio = 'Tariffa standard'

  if (etaPasseggero == 'minorenne') {
    prezzoBiglietto -= prezzoBiglietto * 0.2;
    messaggio = 'Sconto minorenni'

  } else if (etaPasseggero == 'over65') {
    prezzoBiglietto -= prezzoBiglietto * 0.4;
    messaggio = 'Sconto silver'
  }

  // stampo nel biglietto
  document.getElementById('nome').innerHTML = nomePasseggero;

  document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 50 ) + 1;

  document.getElementById('codice').innerHTML = Math.floor(Math.random() * (100000 - 90000) ) + 1;

  document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2) + ' €';

  document.getElementById('offerta').innerHTML = messaggio;

  // faccio apparire il biglietto
  document.getElementById('box-biglietto').className = 'show';
});

// al click del pulsante annulla
var annulla = document.getElementById('annulla');
annulla.addEventListener('click',
function() {

  // svuoto i campi del biglietto
  document.getElementById('nome').innerHTML = ' ';

  document.getElementById('carrozza').innerHTML = ' ';

  document.getElementById('codice').innerHTML = ' ';

  document.getElementById('costo').innerHTML = ' ';

  document.getElementById('offerta').innerHTML = ' ';

  document.getElementById('nome-utente').value = ' ';

  document.getElementById('kilometri').value =  ' ';

  document.getElementById('fascia-eta').value = ' ';

  // scompare biglietto
  document.getElementById('box-biglietto').className = 'hidden';

});





