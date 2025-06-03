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

const contadores = document.querySelectorAll(" .contador");
<<<<<<< HEAD
const tempoobjetivo1 = new date("2025-12-19T00:00:00");


contadores(0); textcontent = calculatempo(tempoobjetivo); 

function calculatempo(tempoobjetivo1);
=======
const tempoObjetivo1 = new date("2025-12-19T00:00:00");
>>>>>>> 63a9b09c2f6f6d97e8e7b41a347dfb75186c029d
let tempoatual = new date();
let tempofinal =tempoobjetivo-tempoatual;
let segundos = math.floor( tempofinal /1000); 
let minutos = math.floor( segundos /60);
let horas = math.floor(minutos /60);
let dias = math.floor(horas /60);

<<<<<<< HEAD
=======
contadores(0); textcontent = tempoObjetivo1 - tempoatual;
>>>>>>> 63a9b09c2f6f6d97e8e7b41a347dfb75186c029d

seundos *= 60;
minutos *= 60;
horas *= 24;

return(dias + "dias" + horas +" horas " + minutos  +" minutos"  +segumdos + "segundos");


    

