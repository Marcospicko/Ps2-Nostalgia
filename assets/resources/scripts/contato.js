'use strict';

 function retornos() {
  const telefone = document.getElementById('telefone');
  const nome = document.getElementById('nome');
  const assunto = document.getElementById('assunto');
  const descricao = document.getElementById('descricao');

  if (telefone.value.length === 0 || assunto.value.length === 0  ||  nome.value.length === 0||  descricao.value.length === 0) {
    window.alert('Preencha todos os campos   para poder mandar sua mensagem !');

  } else if (!(telefone.value.length=== 0 && texto.value.length=== 0 && assunto.value.length=== 0)){
    window.open('finalizar-contato.html');
  }
}

const pararAlert = setTimeout(function() {
 alert('você tem 1 minuto para preencher o formulário caso ' +
       ' contrario sua página será recarregada ');
      }, 1000);


setInterval(function() {
  clearInterval(pararAlert);
}, 1000);

const pararContagem = setInterval(function() {
    window.location.href = 'contatos.html';
}, 60000);

setInterval(function() {
 clearInterval(pararContagem);

}, 60000);

//  Evento de mouseover
function descobertaDeElementos() {
  const x = document.getElementsByTagName('input');
  document.getElementById('demo').innerHTML = x.length +
  ' são eles o campo ASSUNTO, TELEFONE , DESCRIÇÃO , DATA , NOME COMPLETO .';

}

$("img").error(function()
{
  $(this).hide();
})

// LocalStorage ou SessionStorage
function salvarForm(){
  if (localStorage.contador) {
     localStorage.contador = Number(localStorage.contador)+1;
  } else {
     localStorage.cont = 1;
  }
  
  let  cad = document.getElementById('nome').value+ ','
   +document.getElementById('assunto').value +','+
  document.getElementById('telefone').value+ ' ,' + 
  document.getElementById('descricao').value+ ' ,' +
  document.getElementById('selecionar-data').value;
  localStorage.setItem("cad_"+localStorage.cont,cad);
  localStorage.setItem("cad_Json",JSON.stringify(cad));
} 

  function listarCadastros () {
    const p=document.getElementById('cadastros');
    const pJSON=document.getElementById('cadastrosJSON');
    const dados=localStorage.getItem('cad_1');
    const dadosJSON = JSON.parse(localStorage.getItem('cad_Json'));
    p.innerText=dados;
    pJSON.innerText=dadosJSON;
    
  }

function conferir(event) {
  const telefone = document.getElementById('telefone');
  const nome = document.getElementById('nome');
  const assunto = document.getElementById('assunto');
  const descricao = document.getElementById('descricao');

  if (telefone.value.length === 0 || assunto.value.length === 0  ||  nome.value.length === 0||  descricao.value.length === 0) {
    event.preventDefault()
    window.alert('Preencha todos os campos   para poder mandar sua mensagem !');

  } else if (!(telefone.value.length=== 0 && texto.value.length=== 0 && assunto.value.length=== 0)){
    window.open('finalizar-contato.html');
  }
}
