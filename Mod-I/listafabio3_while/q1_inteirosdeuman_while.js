import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    const n = Number(input('Número: '))
    let cont = 1

    while(cont<=n){
        console.log(cont)
        cont++
    }

}
main()