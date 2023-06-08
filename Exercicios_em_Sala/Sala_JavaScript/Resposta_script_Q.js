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
/* Não finalizado
let n = document.querySelector('#valor');
let botao = document.querySelector('#bt')
let resultado = document.querySelector('#r');

function btFuncao(){
    while(parseFloat(n.value) > 0){
        i = n;
        alert(i.value)
        resultado.innerHTML = 'Soma dos valores são: ' + i.value;
        i++;
        n = 0;
    };
}
*/
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
let valor1 = document.querySelector('#valor');
let valor2 = document.querySelector('#valor2');
let resultado = document.querySelector('#r');

function btFuncao(){    
    let n = '';
    for(let i = 1; valor1.value > valor2.value; i++){
        if(i % 2 == 0){
            n = n + '<br>' + i;
        };
    }
    resultado.innerHTML = 'Os muliplos de 5 são: ' + n;
}