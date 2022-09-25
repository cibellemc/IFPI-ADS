/*Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os eventuais
resultados:
function soma(x: number, y?: any): number {
return x + y
}
a. console.log(soma(1, 2));
b. console.log(soma(1, "2"));
c. console.log(soma(1));*/

function soma(x: number, y?: any): number {
    return x + y
    }

console.log(soma(1, 2)); // 3 - realizou a soma de dois inteiros
console.log(soma(1, "2")); //12 - concatenou
console.log(soma(1)); //NaN