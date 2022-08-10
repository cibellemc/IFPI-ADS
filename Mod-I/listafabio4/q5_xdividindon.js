
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let [x,n] = (input('X N: ')).split(' ').map(Number)
    let divisão

    while (n >= 2){
        divisão = x / n
        console.log(divisão)
        x = divisão
        n -= 1
    }

}
main()