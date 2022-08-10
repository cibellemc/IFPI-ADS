import prompt from 'prompt-sync'
import { eh_simetrica, preencher_matriz_quadrada, transpor_matriz } from './funcoes_matriz.js'
const input = prompt()

function main(){

    const ordem = Number(input('Ordem da matriz: '))

    const matriz = preencher_matriz_quadrada(ordem)
    console.table(matriz)

    console.table(transpor_matriz(ordem,matriz))
    console.log(eh_simetrica(ordem,matriz))

}

main()
//n ta funfando