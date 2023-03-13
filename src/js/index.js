/* 
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento html dos botões
    
    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão clicado como se estivesse selecionada

    - passo 5 - esconder a imagem ativa de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

// - passo 1 - dar um jeito de pegar o elemento html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
//const botao1 = document.getElementById('botao1') // Poderia criar um id pra cada botao no html e criar uma const com o id para inserir o elemento em js 
//botao1.addEventListener('click', () => {
//    console.log('clicou no botao 1');
//}) 
// seria possivel fazer assim, só repetir as 6x criando ids pra cada botão, porém inviável, por ser repetitivo

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
      //  - passo 3 - desmarcar o botão selecionado anterior
      desativarBotaoSelecionado();

     // - passo 4 - marcar o botão clicado como se estivesse selecionada
      selecionarBotaoCarrossel(botao);  
     
     // - passo 5 - esconder a imagem ativa de fundo anterior
      esconderImagemAtiva();
      
     // - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
     mostrarImagemDeFundo(indice);
    })
})


function mostrarImagemDeFundo(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
 // Para refatorar os códigos simplificando, e transformando em funções, clicar com botão direito no código, e escolher refatorar, criar função no escopo global, igual o que foi feito no passo 3, 5 e 6