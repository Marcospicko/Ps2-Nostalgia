'use strict';


// Uso de seletores CSS - id, classe e tag
 $('p').fadeOut("1000").fadeIn("1000");

const game = function game(event) {
  const x = event.charCode || event.keyCode;
  if (x === 111 || x === 79) {
    window.open('campeao.html');
  } else if (x === 65 || x === 97) {
    window.open('game-over.html');
  } else if (x === 101 || x === 69) {
    window.open('game-over.html');
  } else if (x === 105 || x === 73) {
    window.open('game-over.html');
  } else if (x === 117 || x === 85) {
    window.open('game-over.html');
  }
}

/**  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_charcode 
 para saber qual o unicod usar usei este link para combinar com a ideia do jogo online  */
function focusFunction() {
  document.getElementById('myInput').style.background = 'green';
}

function blurFunction() {
  document.getElementById('myInput').style.background = 'blue';
}

// seta Gorda 
/* const jogos = (jogos, capinha) => {
  return jogos +  capinha;
}
console.log(jogos(1, 4)); */

const soma = (jogos, capinha) => jogos + capinha;
console.log('R$' + soma(1, 4) + ',00');

function modifique() {
  document.getElementById("modificar").innerHTML = "NÃO É A VOGAL LETRA ** E **";
}
