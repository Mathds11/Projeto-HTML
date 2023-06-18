let form = document.getElementById('form')
let km = document.getElementById('km');
let carro = document.getElementById('tpCarro');
let validar = document.getElementById('validar');
let consumo = document.getElementById('consumo');

function btCalculo(){
    if(carro.value == 'A'){
        if(validar.checked == true){
            consumo.value = (km.value / 8)*1.05;
        }else{
            consumo.value = km.value / 8;
        };        
    }if(carro.value == 'B'){
        if(validar.checked == true){
            consumo.value = (km.value / 9)*1.05;
        }else{
            consumo.value = km.value / 9;
        };        
    }if(carro.value == 'C'){
        if(validar.checked == true){
            consumo.value = (km.value / 12)*1.05;
        }else{
            consumo.value = km.value / 12;
        };        
    };
    consumo.innerHTML = 'Quantidade consumida: <br>' + consumo.value.toFixed(2) + ' Litros';
}

function btResetar(){
    form.reset();
    consumo.innerHTML = 'Quantidade consumida:'
}