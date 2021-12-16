'use strict';

// Manipulação do CSS via função css() e addClass()/removeClass()
$(document).ready(function(){
  $("button").click(function(){
    $(":input").removeClass("alterarCor");
  });
});

function botaoPesquisa() {
 const texto = window.document.getElementById('text1');

  if (texto.value === '' ) {
      window.alert('[ERROR] você não digitou  nada para fazer a pesquisa !');
  }
} 
c
// caixa de dialagos
window.confirm('Deseja entrar no site e baixar os jogos mais marcantes do playstation 2 ?');
let nome = window.prompt('Digite seu nome: ');
  if(nome.length >1) {
    window.alert('olá ' + nome.toUpperCase() + ' seja BEM VINDO ao site mais marcante do '+
     ' Brasil ! ');
    }
  else {
    window.alert('olá ' +' seja BEM VINDO ao site mais marcante do Brasil ! ');
}

 // Evento de movimento do mouse
 function bigImg(x) {
  x.style.height = '300px';
  x.style.width = '450px'                                                                          ;
} 

 function normalImg(x) {
  x.style.height = '300px';
  x.style.width = '400px';
}

 // querySelector()
 function textoFunção() {
  const alteracao = document.querySelector('#alterarTexto');
  alteracao.innerHTML = 'O PS2 é o console mais vendido na história, mas seu hardware, '+
                        'embora tenha certas similaridades com o DualSense do PS5, não conta'+
                        ' com certas tecnologias, como controles sem fio. Mas isso está prestes'+
                        ' a mudar com a campanha de financiamento coletivo da Retro Fighters,'+
                         ' que criou um controle wireless para o console, '+
                         'que também é compatível com o PS1.';
  alteracao.style.color = 'black';
}     
  
//  função addEventListener 
document.getElementById('apertar').addEventListener('click', function() {
window.open('https://www.youtube.com/watch?v=lgPJbhB1r1M');
});

// Clique novidades
const clicandoNovidades = function clicandoNovidades() {
array = ['                                  PES 2023 \n',
         '                                  NEED FOR SPEED O GRANDE\n', 
         '                                  CAÇADOR FINAL\n',
         '                                  A ERA DA ESTINÇÃO\n'
        ]

    window.alert('ESTES SÃO OS JOGOS QUE VC VERÁ DAQUI 2 ANOS EM NOSSO SITE:\n\n\n ' + 
                  array.map(function(s){return s;}))
}
clicandoNovidades();
  
  function botaoJogos2023()
{
    const jogos =  [ 'PES 2023 ','JACK 3 ','FANTASSY FINAL ', 'RESIDENTE EVIL 6 ROUND ',+
                     'THE KING OF PERSIA' ]

    for (const jogosNovos of jogos) {
    window.alert(jogosNovos) 
    /* document.write(jogosNovos+"<br/>") */
  }
}

 function alterarTexto() {
document.getElementById('divNova').classList.add('style');
}

//  Função construtora classe
const Dvd = function Dvd(nomeJogo,marca, quantidadeDeJogos) {
this.nomeJogo = nomeJogo;
this.marca = marca;
this.quantidadeDeJogos = quantidadeDeJogos;
}

 let newDVD = new Dvd('Crash Racing', 'Multilaser', 2);
 console.log(newDVD);

// Manipulação de elemento de listagem, como checkbox, radio ou select
$("#marcacao").change( function(){
  window.alert("Seu voto foi salvo em nossos Banco de Dados , obrigado por votar !");
  
});

$("#marcacao2").change( function(){
  window.alert("Seu voto foi salvo em nossos Banco de Dados , obrigado por votar !");
  
});
