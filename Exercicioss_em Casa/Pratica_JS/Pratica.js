let form = document.getElementById('form')
let km = document.getElementById('km');
let carro = document.getElementById('tpCarro');
let validar = document.getElementById('validar');
let consumo = document.getElementById('consumo');

function btCalculo(){
    if(carro.value == 'A'){
        if(validar.checked == true){
            consumo.value = (8 * km.value)*1.05;
        }else{
            consumo.value = 8 * km.value;
        };        
    }if(carro.value == 'B'){
        if(validar.checked == true){
            consumo.value = (9 * km.value)*1.05;
        }else{
            consumo.value = 9 * km.value;
        };        
    }if(carro.value == 'C'){
        if(validar.checked == true){
            consumo.value = (12 * km.value)*1.05;
        }else{
            consumo.value = 12 * km.value;
        };        
    };
    consumo.innerHTML = 'Quantidade consumida: <br>' + consumo.value.toFixed(2) + ' Litros';
}

function btResetar(){
    form.reset();
    consumo.innerHTML = 'Quantidade consumida:'
}