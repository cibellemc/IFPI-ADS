import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const real = Number(input('Valor em reais: R$'))

    const bitcoins = conversao(real)
    console.log(`R$${real.toFixed(2)} - ฿${bitcoins.toFixed(8)}`)
}


function conversao(real){
    
    const bitcoins = 0.0000084 * real
    return bitcoins
}

main()