import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let array = new Array(5)

    for (let i = 0; i < 5; i++){
        array[i] = Number(input(`${i+1}º número: `))
    }

    console.log(`Ordem crescente: ${bubble_crescente(array)}`)
    console.log(`Ordem crescente: ${bubble_decrescente(array)}`)

}

function bubble_crescente(array) {
    
    for (let i = 0; i < 5; i++) { 
        for (let j = 0; j < (5 - i - 1); j++) { 
            if(array[j] > array[j+1]) {
                let auxiliar = array[j]; 
                array[j] = array[j+1]; 
                array[j+1] = auxiliar; 
            }
        }        
    }
    return array
}

function bubble_decrescente(array) {
    
    for (let i = 0; i < 5; i++) { 
        for (let j = 0; j < (5 - i - 1); j++) { 
            if(array[j] < array[j+1]) {
                let auxiliar = array[j]; 
                array[j] = array[j+1]; 
                array[j+1] = auxiliar; 
            }
        }        
    }
    return array
}

main()