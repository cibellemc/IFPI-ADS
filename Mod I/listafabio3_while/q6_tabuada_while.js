//import prompt from 'prompt-sync'
//const input = prompt()

function main(){

    let multiplicacao = 1
    let n = 1
    let i = 1

    while (n<=10){
        console.log(`\nTabuada do ${n}`)

        while (i<=10){
            multiplicacao = n*i
            console.log(`${n} x ${i} = ${multiplicacao}`)
            i++
        }
        i = 1
        n++
    }


}

    
main()