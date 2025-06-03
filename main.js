const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const contadores = document.querySelectorAll(" contador");
const tempoobjetivo1 = new.date("2025-12-19T00:00:");
let tempoatual = new.date();

contadores(0); textcontent = tempoobjetivo1 - tempoatual;
