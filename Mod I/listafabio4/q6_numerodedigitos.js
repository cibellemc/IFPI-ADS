import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let x = Number(input(''))
    let contalg = 0
    let divisão

    if (x === 0){
        console.log(contalg + 1)
        
    } else {
        while (x != 0){
            contalg += 1
            divisão = x / 10
            x = Math.trunc(divisão)
        }
        console.log(contalg)
    }

}
main()