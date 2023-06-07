telefone.onblur = function(){
    if(this.value.length < 11){
        erros1.innerHTML = '<p>Verifique o numero de telefone</p>'
        this.style.backgroundColor = 'red';
    }else{
        this.style.backgroundColor = 'white';
    }
};
aperitivo = document.getElementById('aperit');
aperitivo.onchange = function(){
    this.checked ? alert('OK, vou providenciar!') : alert('Até a proxima');
};

let sexo = document.getElementsByName('sexo');
let hobbies = document.getElementsByName('hobbies');

btSexo.onclick = function(){
    let mens = '';
    mens += 'Sexo:';
    sexo.forEach(s => {
        s.checked ? mens += s.value + '\n': undefined;
    });
    mens += '\n Hobbiens: \n';
    hobbies.forEach(h => {
        mens += h.checked ? h.value + '\n' : '';
    });
    mensagem.text = mens;
};