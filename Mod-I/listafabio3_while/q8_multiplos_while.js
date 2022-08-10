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

    if (limitesup> limiteinf){
        maior = limitesup
        menor = limiteinf
    } else {
        maior = limiteinf
        menor = limitesup
    }
    
    let i = menor + 1
    while (i<maior){
        multiplos = i * n
        console.log(`${n} x ${i} = ${multiplos}`)   
        i++
    }
}
main()