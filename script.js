//PEGANDO ELEMENTOS ID DO HTML
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

//FUNÇAO PARA PEGAR HORA, MINUTOS E SEGUNDOS

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    // CONDICOES PARA ACRESCENTAR UM ZERO NA FRENTE SE MENOR QUE 10
    if (h < 10){
        h = '0' + h;
    }

    if (min < 10){
        min = '0' + min;
    }

    if (seg < 10){
        seg = '0' + seg;
    }

    // TRANSFORMAR EM TEXTO 
    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = seg;


})