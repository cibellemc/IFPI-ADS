import { pedir_elementos_do_vetor } from '../funcoes_vetores.js'
//import prompt from 'prompt-sync'
//const input = prompt()

function main(){

    const vetorA = pedir_elementos_do_vetor(20, 'A')
    console.log('S =', soma_ao_contrario(vetorA))

}

function soma_ao_contrario(vetor){
    let S = 0
    let index = 19

    for(let i = 0; i < 11; i++){
        S += (vetor[i] - vetor[index])**2
        //console.log(S)
        index--
    }

    return S
}

main()