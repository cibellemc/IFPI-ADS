import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numeros = Number(input('Exibir qauntos números: '))
    const vetorA = new Array(numeros)

    console.log(fibonacci(numeros))
  
}

function fibonacci(n){
    let vetor_fib = new Array (n)
    
    vetor_fib[0] = 0
    vetor_fib[1] = 1

    for (let i = 2; i < n; i++){
        vetor_fib[i] = vetor_fib[i-1] + vetor_fib[i-2]
    }
    return vetor_fib
}


main()