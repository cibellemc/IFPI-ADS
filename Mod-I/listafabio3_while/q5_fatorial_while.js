import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const n = Number(input('Número: '))
    let i = n
    let fatorial = 1


    while (i >= 1){
        fatorial *= i
        i--
    }

    console.log(`${n}! = ${fatorial}`)

}

    
main()