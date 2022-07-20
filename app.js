
function imc(){
    let alt = parseFloat(document.querySelector('input.alt').value);
    let peso = parseFloat(document.querySelector('input.peso').value);
    
    let calcIMC = peso / (alt * alt);

    let resultado = document.querySelector('div.resultado');

    resultado.innerHTML = `<p>Seu IMC é <strong>${calcIMC.toFixed(1)}<strong></p>`;
};