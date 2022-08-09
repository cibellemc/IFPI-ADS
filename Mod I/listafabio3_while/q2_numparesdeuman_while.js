import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const n = Number(input('Número: '))
    let cont = 2

    if (n<=0){
        console.log('Informe um número positivo.')

    } else {
        while (cont<=n){
            console.log(cont)
            cont+=2
        }
    }

}
main()