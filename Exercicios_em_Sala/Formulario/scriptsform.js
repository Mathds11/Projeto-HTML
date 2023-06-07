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
    mens += '\nHobbiens: \n';
    hobbies.forEach(h => {
        mens += h.checked ? h.value + '\n' : '';
    });
    mensagem.value = mens;
};

uf.onchange = function(){
    // alert(this.value);
    switch(this.value){
            case 'AC' : natural.innerHTML = 'Acreano'; break;
            case 'AL' : natural.innerHTML = 'Alagoano'; break;
            case 'BA' : natural.innerHTML = 'Baiano'; break;
            case 'AM' : natural.innerHTML = 'Amazonese'; break;
            default : natural.innerHTML = 'Outros estados'
    }
};