import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero = Number(input('Número: '))
    let soma = 0
    let i = 1

    while(i<=numero){
        soma += i
        i++
    }
console.log(`Soma: ${soma}`)
}

main()