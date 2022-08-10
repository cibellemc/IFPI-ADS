import prompt from 'prompt-sync'
import { preencher_matriz_quadrada, transpor_matriz } from './funcoes_matriz.js'
const input = prompt()

function main(){

    const ordem = Number(input('Ordem da matriz: '))

    const matriz = preencher_matriz_quadrada(ordem)
    console.table(matriz)

    const matriz_transposta = transpor_matriz(ordem,matriz)
    console.table('\nTransposta:')
    console.table(matriz_transposta)

}

main()