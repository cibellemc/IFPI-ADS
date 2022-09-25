/* Crie uma função que retorne os números de um array passados por parâmetro separados
por traço (-) no formato string. Para isso, use o método forEach dos arrays.*/

import prompt from 'prompt-sync'
const input = prompt()

let numeros: number[] = []
let string: string = ""

let qtd_numeros = Number(input("Quantidade de números no array: "))

for (let i = 0; i < qtd_numeros; i++){
    numeros[i] = Number(input(`${i}° número: `))
}

console.log(numeros)

numeros.forEach((num, index) => { 
    if (index != numeros.length - 1){
        string += `${String(num)} - ` 
    } else {
        string += String(num)
    }
})
   /* 
    }})*/

console.log(string)

