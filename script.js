function tocaSom(classElementoAudio) {
    document.querySelector(classElementoAudio).play();
}


var listaDeBotoes = document.querySelectorAll(".botão");



for(let i = 0; i < listaDeBotoes.length; i++) {

    //selecionar o elemento dentro da lista gerada pelo querySelectorAll
    const botao = listaDeBotoes[i];
    //pegar o nome do efeito que está na classe (a segunda classe do elemento)
    const efeitoSonoro = listaDeBotoes[i].classList[1];
    //adicionar o nome do efeito pego na classe e completar a classe do audio com ele
    const classAudio = `.som_${efeitoSonoro}`;

    //reproduzir o audio com aquele nome
    botao.onclick = function () {
        tocaSom(classAudio);

        document.querySelector(classAudio).onplaying = function() {
            listaDeBotoes[i].classList.add("botão-desativado");
            console.log(listaDeBotoes[i]);
        }
        
        document.querySelector(classAudio).onended = function() {
            listaDeBotoes[i].classList.remove("botão-desativado");
        }
    } //ele "guarda" essa função no onclick para usar quando ativado
}



// let instumento = listaDeBotoes[2].classList[1];
// console.log(instumento)

// const classAudio = `.som_${instumento}`
// console.log(classAudio)



//criar uma rotina no código - acessando cada elemento