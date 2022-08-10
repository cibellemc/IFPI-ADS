//Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
//imprima na tela a soma e a média aritmética e o desvio padrão destes números. Obs: o
//valor –1 é somente um terminador e não deve ser considerado nos cálculos.

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let num = Number(input('1º valor: '))

    let lista_numeros = new Array()
    lista_numeros.push(num)

    let soma = num
    let desvio = 0
    let qtd = 1

    while (num !== -1){
        
        num = Number(input(`${qtd + 1}º valor: `))

        if (num !== -1){
            qtd++
            soma += num
            lista_numeros.push(num)
        }
    }

    for (let i = 0; i < lista_numeros.length - 1; i++){
        desvio += lista_numeros[i]
    }

    console.log(lista_numeros)
    const media = soma/qtd

    console.log(`Média: ${media}`)
    console.log(`Quantidade de números digitados: ${qtd}`)

}


main()