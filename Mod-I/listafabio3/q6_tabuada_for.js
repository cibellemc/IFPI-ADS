//import prompt from 'prompt-sync'
//const input = prompt()

function main(){

    let multiplicacao = 1
    
    for (let n = 1; n <= 10; n++){
        console.log(`\nTabuada do ${n}`)
        
        for (let i = 1; i <= 10; i++){
            multiplicacao = n * i
    
            console.log(`${n} x ${i} = ${multiplicacao}`)
        }
    }


}

    
main()