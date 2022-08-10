/*Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. 
O valor deve ser apresentado com duas casas após o ponto decimal.
 */

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let nota1 = Number(input('Num 1: '))
    let nota2
    let media = 0

    while (!(eh_nota_valida(nota1))){
        console.log('nota invalida')
        nota1 = Number(input('Num 1: '))
    }
    
    nota2 = Number(input('Num 2: '))

    while (!(eh_nota_valida(nota2))){
        console.log('nota invalida')
        nota2 = Number(input('Num 2: '))
    }
    
    media += calcular_media(nota1,nota2)
    console.log(`media = ${media.toFixed(2)}`)
    
}

function eh_nota_valida(nota){
    return (nota>=0 && nota<=10)
}

function calcular_media(nota1,nota2){
    return ((nota1+nota2))/2
}
main()

//----------- bee
function main(){
    let nota2
    let count = 0
    let media = 0
    let nota1 = Number(lines[count++])

    while (!(eh_nota_valida(nota1))){
        console.log('nota invalida')
        nota1 = Number(lines[count++])
    }
    
    nota2 = Number(lines[count++])

    while (!(eh_nota_valida(nota2))){
        console.log('nota invalida')
        nota2 = Number(lines[count++])
    }
    
    media += calcular_media(nota1,nota2)
    console.log(`media = ${media.toFixed(2)}`)
    
}

function eh_nota_valida(nota){
    return (nota>=0 && nota<=10)
}

function calcular_media(nota1,nota2){
    return ((nota1+nota2))/2
}
main()