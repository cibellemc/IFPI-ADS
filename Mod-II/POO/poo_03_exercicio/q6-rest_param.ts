/*Crie uma função exibir receba como parâmetro um “rest parameter” representando strings.
A função deve exibir no log cada um dos elementos do “rest parameter”. Chame a função
usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);*/

console.log(exibirElementos("a", "b"))
console.log(exibirElementos("a", "b", "c", "d"))
console.log(exibirElementos("a", "b", "c", "d", "e"))

function exibirElementos(...letras: string[]){
    letras.forEach((elemento) => console.log(elemento))
}