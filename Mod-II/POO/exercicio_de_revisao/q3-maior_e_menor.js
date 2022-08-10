import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const num1 = Number(input('1º número: '))
    const num2 = Number(input('2º número: '))
    const num3 = Number(input('3º número: '))

    let maior,menor

    if (num1 > num2){
        maior = num1
        menor = num2

        if (maior < num3){
            maior = num3
        }
            
        if (menor > num3){
            menor = num3
        }
    } else {
        maior = num2
        menor = num1
        if (maior < num3){
            maior = num3
        }
        if (num3 < num1){
            menor = num3
        }
    }

console.log('O maior é', maior)
console.log('O menor é', menor)
    
}

main()