const form = document.getElementById ('form');
const saldo = document.getElementById ('saldo');
const saque = document.getElementById ('saque');
const acerto = document.getElementById ('saquerealizado');
const erro = document.getElementById ('erro');

function sacandoDinheiro(saldo, saque){
    return saldo > saque;
}

form.addEventListener ('submit', function(e){
    e.preventDefault();

    let validarform = sacandoDinheiro(saldo.ariaValueMax, saque.value)
    if(validarform){
        acerto.style.display = 'block';
        saldo.value= '';
        saque.value= '';
    } 
})

saque.addEventListener('keyup', function(e){
    let validarform = sacandoDinheiro(saldo.valueAsNumber, saque.valueAsNumber)
    if (!validarform){
        erro.style.display = 'block';
        acerto.style.display = 'none';
    } else {
        erro.style.display = 'none';
    }
    
})