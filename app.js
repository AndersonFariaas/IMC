
function imc(){
    let alt = document.querySelector('input.alt').value;
    let peso = document.querySelector('input.peso').value;
    
    let calcIMC = parseFloat(peso / (alt * alt));

    let resultado = document.querySelector('div.resultado');

    resultado.innerHTML = `<p>Seu IMC é <strong>${calcIMC.toFixed(1)}<strong></p>`;
};