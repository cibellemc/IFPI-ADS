//2)Crie uma função que recebe como parâmetro um número e retorna true se o número for primo e false caso contrário.
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let teste = Number(input("> "))
    console.log(ehPrimo(teste))

    /*while (teste !=0){
        teste = Number(input("> "))
        console.log(ehPrimo(teste))
    }*/
}

function ehPrimo (num: number): boolean{
    for (let i = 2; i  < num; i++){
        if(num % i == 0) {
            return false
        }
    } return num >= 2
}

main()