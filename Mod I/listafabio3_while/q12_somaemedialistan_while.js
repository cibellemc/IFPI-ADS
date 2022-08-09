import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    const numrep = Number(input('Quantidade de repeticões: '))
    let soma = 0
    let i = 1

    while(i<=numrep){
        let num = Number(input(`${i}° numero: `))
        soma += num
        i++
    }
    
    const media = soma/numrep
    console.log(`Média: ${media.toFixed(2)}`)

}
main()