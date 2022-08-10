import prompt from 'prompt-sync'
const input = prompt()


export function pedir_elementos_do_vetor(tamanho, nome_vetor){

    let vetor = new Array(tamanho)
    for (let i = 0; i < tamanho; i++){
        vetor[i] = Number(input(`${i}º elemento de ${nome_vetor}: `))
    }
    return vetor
}


export function unirVetores(tamanho,vetorA,vetorB){

    let vetorC = new Array(tamanho*2)
    let index = 0

    for (let i = 0; i < vetorC.length; i++){
        if (i < vetorA.length){
            vetorC[i] = vetorA[i]
        } else {
            vetorC[i] = vetorB[index]
            index++
        }
    }
    return vetorC
}

//bubble

export function intersecao(tamanho,vetorA,vetorB){
    
    return vetorC

}

export function retornar_maior_ou_menor (vetor,maioroimenor){
    let maior = vetor[0]
    let posicaomaior = 0
    //let k = 1
    if (maioroimenor === 'maior'){
        for (let i = 1; i < vetor.length; i++){
    
            if (vetor[i] > maior){
                maior = vetor[i]
                posicaomaior = i
            } 
    
        }
        return (`Maior: ${maior} - ${posicaomaior}° posição`)

    } else if (maioroimenor === 'menor'){

        let menor = vetor[0]
        let posicaomenor = 0

        for (let i = 1; i < vetor.length; i++){

            if (vetor[i] < menor){
                menor = vetor[i]
                posicaomenor = i
            } 

        }
        return (`Menor: ${menor} - ${posicaomenor}° posição`)
    }
}

