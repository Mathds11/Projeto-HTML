/* Resp Questionario 1
let n = document.querySelector('#valor');
let botao = document.querySelector('#bt')
let resultado = document.querySelector('#r');

function btFuncao(){
    if(parseFloat(n.value) >= 20 && parseFloat(n.value) <= 90){
        resultado.innerHTML = 'Valor está entre 20 e 90';
    }else{
        resultado.innerHTML = 'Valor não está entre 20 e 90';
    }
};
*/
/* Resp Questionario 2
let n = document.querySelector('#valor');
let botao = document.querySelector('#bt')
let resultado = document.querySelector('#r');

function btFuncao(){
    if(parseFloat(n.value) > 20){
        resultado.innerHTML = n.value/2;
    };
};
*/
/* Resp Questionario 3
uf.onchange = function(){
    switch(this.value){
            case 'RJ' : natural.innerHTML = 'Carioca'; break;
            case 'SP' : natural.innerHTML = 'Paulista'; break;
            case 'MG' : natural.innerHTML = 'Mineiro'; break;
            default : natural.innerHTML = 'Outros estados';
    }
};
*/
/* Resp Questionario 4
let n = document.querySelector('#valor');
let botao = document.querySelector('#bt')
let resultado = document.querySelector('#r');

function btFuncao(){
    if(parseFloat(n.value)%5 > 0){
        resultado.innerHTML = 'Não é divisivel por 5';
    }else{
        resultado.innerHTML = 'É divisivel por 5';
    }
};
*/
let n = document.querySelector('#valor');
let botao = document.querySelector('#bt')
let resultado = document.querySelector('#r');

function btFuncao(){
    let i = 0
    while(parseFloat(n.value) > 4){
        i = n + i;
        resultado.innerHTML = 'Valor é: ' + i;
        i++;
        n = 0
    };
}