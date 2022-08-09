//Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
//O arquivo de entrada contém 2 valores com uma casa decimal cada um.
//Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main (){

const nota1 = Number(lines[0])
const nota2 = Number(lines[1])
const media = (nota1.toFixed(1) *3.5 + nota2.toFixed(1) *7.5)/11
console.log(`MEDIA = ${media.toFixed(5)}`)


}
main()