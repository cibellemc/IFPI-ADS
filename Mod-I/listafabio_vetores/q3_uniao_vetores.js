import { pedir_elementos_do_vetor, unirVetores } from '../funcoes_vetores.js'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const tamanho = Number(input('Tamanho do vetor: '))

    const vetorA = pedir_elementos_do_vetor(tamanho, 'A')
    //console.log(vetorA)

    const vetorB = pedir_elementos_do_vetor(tamanho, 'B')
    //console.log(vetorB)

    console.log(unirVetores(tamanho,vetorA,vetorB))
}

main()
