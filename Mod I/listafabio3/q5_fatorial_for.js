import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const n = Number(input('Número: '))
    let fatorial = 1

    for (let i = n; i >= 1; i--){
        fatorial *= i
    }

    console.log(`${n}! = ${fatorial}`)

}

    
main()