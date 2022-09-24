//1) Crie uma função que recebe como parâmetro um número e retorna true se o número for par e false se for ímpar.

function parOuImpar (num: number): boolean{
    return num % 2 == 0
}

console.log(parOuImpar(4))