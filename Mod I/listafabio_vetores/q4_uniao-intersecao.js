import { pedir_elementos_do_vetor, unirVetores, intersecao } from './funcoes_vetores.js'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const tamanho = Number(input('Tamanho de cada vetor: '))

    const vetorA = pedir_elementos_do_vetor(tamanho, 'A')
    //console.log(vetorA)

    const vetorB = pedir_elementos_do_vetor(tamanho, 'B')
    //console.log(vetorB)

    console.log(unirVetores(tamanho,vetorA,vetorB))

    console.log(intersecao(tamanho,vetorA,vetorB))
}
function intersecao(){
    //n ta funfandoo
}

main()
