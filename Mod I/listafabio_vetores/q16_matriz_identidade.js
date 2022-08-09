import prompt from 'prompt-sync'
import {  geracao_matriz_identidade } from './funcoes_matriz.js'
const input = prompt()

function main(){

    const ordem = Number(input('Ordem da matriz: '))

    console.table(geracao_matriz_identidade(ordem))

}

main()