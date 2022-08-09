//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    const numero = Number(input('Quantidade de repeticões: '))
    let soma = 0
    
    for (let i = 1; i <= numero; i++){
        let num = Number(input(`${i}° numero: `))
        soma += num
    }
    const media = soma/numero
    console.log(`Média: ${media.toFixed(2)}`)

}
main()