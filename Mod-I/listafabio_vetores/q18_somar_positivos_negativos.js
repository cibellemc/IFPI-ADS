import prompt from 'prompt-sync'
import { preencher_matriz_quadrada, soma_positivos_e_negativos } from './funcoes_matriz.js'
const input = prompt()

function main(){

    const ordem = Number(input('Ordem da matriz: '))

    const matriz = preencher_matriz_quadrada(ordem)
    console.table(matriz)

    console.log(soma_positivos_e_negativos(ordem,matriz))

}

main()