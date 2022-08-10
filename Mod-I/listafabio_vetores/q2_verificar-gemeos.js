import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numeros = Number(input('Número de elementos no vetor: '))
    const vetorA = new Array(numeros)

    for (let i = 0; i < numeros; i++){
        vetorA[i] = Number(input(`${i+1}° elemento do vetor: `))
    }

    console.log(vetorA)

    if(verificar_iguais(vetorA)){
        console.log((`Há repetidos.`))
    } else {
        console.log(`Não há repetidos.`)
    }
}

function verificar_iguais(array){
    let count 
    let elemento

    for (let i = 0; i < array.length; i++ ){
        elemento = array[i]
        count = 0
        
        for (let j = 0; j < array.length; j++){
            if (elemento === array[j]){
                count++
            }
        }
        if (count > 1){
            return true
        }
    } return false
}


main()