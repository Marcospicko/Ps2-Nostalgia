'use strict';

//  FUNÇÃO LOCAL OU ANINHADA
const avaliacao = function avaliacao() {
  function mensagem() {
    let numero = Number(window.prompt('Digite uma nota pelo design do nosso site !'));
    return numero;
  }
  window.alert('Obrigado pela nota ' + mensagem() + ' estamos sempre procurando ' +
    'melhorar para que possamos ter notas maiores do que vc nos deu');
}
avaliacao();

// Uso de seletores CSS - id, classe e tag
function alterarCorTitulo() {
  $('#btn').on("click", botao)

  function botao() {
    $('th').css({
      'color': 'blue'
    })
  }
}

function alterarCorTexto() {
  $('.btn2').on("click", botao)

  function botao() {
    $('td').css({
      'color': 'red'
    })
  }
}
