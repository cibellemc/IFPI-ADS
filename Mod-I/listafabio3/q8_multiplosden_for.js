//Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero = Number(input('Número: '))
    const LimiteSuperior = Number(input('Limite superior: '))
    const LimiteInferior = Number(input('Limite inferior: '))

    multiplos(numero, LimiteInferior, LimiteSuperior)
}

function multiplos(n,limitesup,limiteinf){
    let maior,menor

    if (limitesup > limiteinf){
        maior = limitesup
        menor = limiteinf
        
    } else {
        maior = limiteinf
        menor = limitesup
    }
    
    for (let i = menor + 1; i < maior ; i++){
        multiplos = i * n
        console.log(`${n} x ${i} = ${multiplos}`)
    }
}
main()