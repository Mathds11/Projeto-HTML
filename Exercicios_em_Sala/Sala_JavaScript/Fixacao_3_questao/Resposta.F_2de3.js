let v1 = document.getElementById('valor1');
let v2 = document.getElementById('valor2');
let v3 = document.getElementById('valor3');
let maior = document.getElementById('exibir')

function BtFuncao(){
    let i = 0;
    i = Math.max(v1.value, v2.value, v3.value);
    maior.innerHTML = 'Maior valor é: ' + i;
}