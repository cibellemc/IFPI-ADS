import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const n = Number(input('Número: '))

    if (n<=0){
        console.log('Informe um número positivo.')

    } else {
        
        for (let i=2; i<=n; i+=2){
            console.log(i)
        }
    }

}
main()