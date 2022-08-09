import prompt from 'prompt-sync'
const  input = prompt()

function main(){
    
    console.log('Mostrar sequência: 1,3,6,...\n')
    const N = Number(input('Quantidade de termos da sequência: '))
    sequencia(N)
}

function sequencia(n){

    let soma = 1
    console.log(soma)
    
    for (let i = 2; i <= n; i++){
        soma += i
        console.log(soma)
    }

}
main()