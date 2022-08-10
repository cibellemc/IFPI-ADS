import prompt from 'prompt-sync'
import { maior_e_menor, preencher_matriz_quadrada } from './funcoes_matriz.js'
const input = prompt()

function main(){

    const ordem = Number(input('Ordem da matriz: '))

    const matriz = preencher_matriz_quadrada(ordem)
    console.table(matriz)

    console.log(maior_e_menor(ordem,matriz))

}

main()