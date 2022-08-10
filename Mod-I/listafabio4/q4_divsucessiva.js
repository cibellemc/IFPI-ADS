
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let novonum = Number(input(''))

    while (novonum >= 1){
        novonum /= 2

    }

    console.log(`Resultado da última divisão: ${novonum}`)

}
main()