import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    let [num1,num2] = input('Números (1 2): ').split(' ').map(Number)
    let contador = 1

    while (!(contador%num1===0&&contador%num2===0)){
        contador++
    }

    console.log(`MMC: ${contador}`)

}
main()