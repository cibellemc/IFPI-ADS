/*Dado método filter dos arrays, crie uma implementação usando arrow function que filtre todos os elementos pares do array abaixo:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


let ehPar = (numero: number) => numero % 2 == 0 //quando tem return precisa de chaves  ex: {return numero % 2 == 0}
console.log(array.filter(ehPar))
