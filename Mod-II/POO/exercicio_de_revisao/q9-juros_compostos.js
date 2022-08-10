/*Escreva uma função que dados 2 valores reais v e t. Onde v é um valor em R$ e t é a
taxa de juros em %. Retorne um array de 12 posições meses representando a taxa
aplicada como juros compostos ao valor v mês a mês.
Ex: v = 1000,00 e t = 1%. Retornar: 1.010 – 1.020,10 - 1.030,30 - ... - 1.126,82
*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const valor_emp = Number(input('Valor do serviço: R$'))
    const taxa_juros = Number(input('Juros mensal (em %): '))

    const lista = calcular_juros(valor_emp,taxa_juros)
    let formatacao = ''

    for (let valor_mes in lista){
        if (valor_mes != 11){
            formatacao += (`${lista[valor_mes]} - `)
        } else{
            formatacao += lista[valor_mes]
        }
    }
    
    console.log(formatacao)

}

function calcular_juros(v, j){

    let valor_mensal
    let lista_valores = new Array()

    for (let i = 0; i < 12; i++){
        valor_mensal = v + (v * j / 100)
        lista_valores.push(valor_mensal.toFixed(2))
        v = valor_mensal
    }

    return lista_valores
}

main()
