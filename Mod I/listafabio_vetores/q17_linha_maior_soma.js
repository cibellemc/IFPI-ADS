import prompt from 'prompt-sync'
import { preencher_matriz_quadrada, somar_linhas } from './funcoes_matriz.js'
const input = prompt()

function main(){

    const ordem = Number(input('Ordem da matriz: '))

    const matriz = preencher_matriz_quadrada(ordem)
    console.table(matriz)

    console.log(somar_linhas(ordem,matriz))

}

main()
//n ta funfando