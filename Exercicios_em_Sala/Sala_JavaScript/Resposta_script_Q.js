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
/* Rep Questionario 5 Não finalizado*/
let resultado = document.querySelector('#r');
let n1 = 0;

function btFuncao(){
    let i = 0;
    while(parseFloat(n1) >= 0){
        n1 = parseInt(prompt('Informe o valor: '));
        if(n1 < 0){
            break;
        }else{
        i += n1;
        };
    };
    resultado.innerHTML = 'Soma dos valores são: ' + i;
}

/* Resp Questionario 6 
let resultado = document.querySelector('#r');

function btFuncao(){    
    let n = '';
    for(let i = 1; i <= 500; i++){
        if(i % 5 == 0){
            n = n + '<br>' + i;
        };
    }
    resultado.innerHTML = 'Os muliplos de 5 são: ' + n;
}
*/
/*Resp Questionario 7
var n1 = parseInt(prompt('Informe 1º valor: '));
var n2 = parseInt(prompt('Informe 2º valor: '));
let resultado = document.querySelector('#r');

function btFuncao(){    
    let n = '';
    for(let i = n1; i < n2; i++){
        if(i % 2 == 1){
            continue;
        }else{
            n = n + '<br>' + i;
        };
    };
    resultado.innerHTML = 'Os valores pares entre ' + n1 + ' e ' + n2 + ' são: ' + n;
}
*/