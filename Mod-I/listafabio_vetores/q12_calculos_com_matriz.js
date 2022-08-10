/*Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos elementos da diagonal principal,
a soma dos elementos da diagonal secundária e a soma dos elementos que não estão na diagonal
principal nem na diagonal secundária
*/

import prompt from 'prompt-sync'
import { preencher_matriz_quadrada, soma_demais, soma_diagonal_principal, soma_diagonal_secundaria } from './funcoes_matriz.js'
const input = prompt()

function main(){

    const ordem = Number(input('Ordem da matriz: '))

    const matriz = preencher_matriz_quadrada(ordem)
    console.table(matriz)

    const soma_principal = soma_diagonal_principal(ordem,matriz)
    console.log(`Soma da diagonal principal = ${soma_principal}`)

    const soma_secundária = soma_diagonal_secundaria(ordem,matriz)
    console.log(`Soma da diagonal secundária = ${soma_secundária}`)

    const soma_outros = soma_demais(ordem,matriz)
    console.log(`Soma dos demais = ${soma_outros}`)
}

main()