// Escreva um programa que imprima os números inteiros entre dois valores lidos.

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const num1 = Number(input('1º número: '))
    const num2 = Math.trunc(Number(input('2º número: ')))

    let maior, menor = 0
    let sequencia = ''

    if (num1 > num2){
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }

    for (let i = Math.trunc(menor) + 1; i < Math.trunc(maior); i++){
        sequencia += (`${i} `)
    }

    console.log(`\nSequência de inteiros entre ${num1} e ${num2}:`)
    console.log(sequencia)

}

main()