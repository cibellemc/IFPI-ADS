import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const a0 = Number(input('Número inicial: '))
    const r = Number(input('Número a ser somado: '))
    let limite = Number(input('Quantidade de somas: '))

    progressao(a0,r,limite)
}

function progressao(numero_inicial,soma,vezes_a_somar){
    
    let somatorio = numero_inicial+soma
    console.log(`1° soma: ${somatorio}`)

    for (let i = 2;i<vezes_a_somar;i++){
        somatorio+=soma
        console.log(`${i}° soma: ${somatorio}`)
    }
}
main()