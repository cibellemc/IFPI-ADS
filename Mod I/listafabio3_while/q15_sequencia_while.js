import prompt from 'prompt-sync'
const  input = prompt()

function main(){
    
    console.log('Mostrar sequência: 1,3,6,...\n')
    const N = Number(input('Quantidade de termos da sequência: '))
    sequencia(N)
}

function sequencia(n){

    let i = 2
    let soma = 1
    console.log(soma)
    
    while (i <= n){
        soma += i
        console.log(soma)
        i++
    }

}
main()