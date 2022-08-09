//Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero = Number(input('Número: '))
    let soma = 0

    for (let i = 0; i <= numero; i++){
        soma += i
    }
console.log(`Soma: ${soma}`)
}

    
main()