/* Questionario 1
var n1 = parseInt(prompt('Digite 1º valor:'));
var n2 = parseInt(prompt('Digite 2º valor:'));
var n3 = parseInt(prompt('Digite 3º valor:'));
var n4 = parseInt(prompt('Digite 4º valor:'));

var r = (n1+n2+n3+n4)/4;

alert('Resultado = ' + r);
*/

/* Questionario 2
var saldo = parseInt(prompt('Digite valor de Entrada:'));
var saida = parseInt(prompt('Digite valor de Saida:'));

var r = saldo - saida
var reajuste = r * 0.02

alert('Seu saldo é de: ' + r + ' e reajuste de 2% é: ' + reajuste)
*/

/* Questionario 3
var segundo = parseInt(prompt('Digite quantidade de segundo(s):'));

var converter = Math.trunc(segundo/60)
var sobra = segundo%60

alert(segundo + ' segundos equivalem a ' + converter + ' minutos ' + sobra + ' segundos')
*/

/* QuQuestionario 4
var min = parseInt(prompt('Digite quantidade de minutos(s):'));

var dias = Math.trunc(min/1440)
var hora = Math.trunc((min%1440)/60)
var sobra = min%60

//alert(hora)

document.write(min + ' minutos equivale a: ' + dias + ' dia(s) e ' + hora + ' hora(s) e ' + sobra + ' minuto(s)')
*/

/* Questionario 5
var h = parseInt(prompt('Digite quantidade de horas(s):'));
var min = parseInt(prompt('Digite quantidade de minutos(s):'));

var total = ((h*60)+min)

document.write(h + ' hora(s) e ' + min + ' minuto(s)' + ' equivale a: ' + total + ' minuto(s)')
*/

Questionario 6
var r = parseInt(prompt('Digite o raio da circuferencia em metros:'));

var total = Math.trunc(2*Math.PI*r)

document.write('Comprimento aproximado é de ' + total + ' metros')

Questionario 7
var p = parseInt(prompt('Digite comprimento em polegadas:'));

var total = ((p*25.4)/1)

document.write(p + ' Polegadas' + ' equivale a: ' + total + ' mm')