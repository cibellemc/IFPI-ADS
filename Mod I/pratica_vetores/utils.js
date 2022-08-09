import prompt from 'prompt-sync'
const input = prompt()

export function pedir_numero(mensagem){

    const numero = Number(input(mensagem))

    if (isNaN(numero)){
        console.log('Por favor, informe um número.')
        return pedir_numero(mensagem)

    } return numero
}

export function pedir_numero_positivo(mensagem){

    const numero = Number(input(mensagem))

    if (isNaN(numero)){
        console.log('Por favor, informe um número.')
        return pedir_numero(mensagem)

    } return numero
}


export function pedir_numero_na_faixa(min,max,mensagem){

    const numero = pedir_numero(mensagem)

    if (numero > max || numero < min){
        console.log(`Erro. Informe um valor entre a faixa (${min}-${max})\n`)
        return pedir_numero_na_faixa(min,max,mensagem)

    } return numero
}

export function pausa(){
    const valor = input('Press enter to continue...')
}