import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numeros = Number(input('Número de elementos no vetor: '))
    const vetorA = new Array(numeros)

    for (let i = 0; i < numeros; i++){
        vetorA[i] = Number(input(`${i+1}° elemento do vetor: `))
    }

    console.log(vetorA)
    console.log(inverter_array(vetorA))
}

function inverter_array(array){
    let index = 0
    let vetorB = new Array(array.length)
    for (let i = array.length - 1; i >= 0; i-- ){
        vetorB[index] = array[i]
        index++
    }
    return vetorB
}


main()