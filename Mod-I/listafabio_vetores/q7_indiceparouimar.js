import { pedir_elementos_do_vetor, unirVetores } from './funcoes_vetores.js'
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const tamanho = Number(input('Quantidade de números: '))

    const vetorA = pedir_elementos_do_vetor(tamanho, 'A')
    console.log(vetorA)
    console.log(trocar(vetorA))
}

function trocar(vetor){
    const vetorB = new Array(vetor.length)

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] % 2 === 0){
            vetorB[i] = 0
        } else {
            vetorB[i] = 1

        }
    }
    return vetorB

}




main()
