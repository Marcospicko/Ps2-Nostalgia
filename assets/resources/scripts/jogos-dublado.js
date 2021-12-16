'use strict';

// usa as marcaçoes feita no radio em uma array  (não feita)


// declaração anonima
const baixandoJogos = function() {
  window.alert('Bom aproveito , baixe os melhores jogos  que marcaram sua vida');
}

//  return
function cliqueEmImagens() {
  return window.alert('Por favor para fazer o download clique no texto ao lado da imagem');
}

// função auto executavel
(function() {
  const anoAtual = 2021;

  const anoNascimento = anoAtual - window.prompt('Digite o ano que vc nasceu para que possamos '+
   'saber se vc tem mais de 10 anos de idade para poder baixar jogos neste site !');

  if (anoNascimento > 10) {
    window.alert('Beleza coleguinha você esta apto para baixar os jogos neste site !');
  } else if (anoNascimento < 10 || anoNascimento === 0) {
    window.alert('aaaaa que pena que você não tem idade suficientea  a idade mínima para '+
                'entrar neste site é 10 anos, mas não fique triste vamos te lelet para um '+
                'site aonde você  pode assitir desenhos para sua idade ');

    window.open('https://www.youtube.com/watch?v=Fn9adh4HWUU');
  }
}());

//  Evento de carregamento do documento - onload
 function checkCookies() {
  if (navigator.cookieEnabled === true) {
    window.alert('Cookies são permitidos');
  } else {
    window.alert('Cookies não são permitidos');
  }
}

//  getElementsByName
const btn = document.getElementById('botao');

btn.addEventListener('click', () => {
  const contagem = document.getElementsByName('avaliar');
  contagem.forEach((avaliar) => {
   if (avaliar.checked) {
     window.alert('O jogo que vc escolheu no caso: ' + avaliar.value + 
     ' será contabilizado nos votos');
    }
  })
}); 

// Efeitos fade ou slide
$('#toggle-sliding').click(function() {
	$('form').slideToggle('slow');
  });
  