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
        
    let option =  Number(input('novo calculo (1-sim 2-nao): '))

    while (option ===1){

        media = 0

        nota1 = Number(input('Num 1: '))

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
            
        option =  Number(input('novo calculo (1-sim 2-nao): '))
    
    }
}

function eh_nota_valida(nota){
    return (nota>=0 && nota<=10)
}

function calcular_media(nota1,nota2){
    return ((nota1+nota2))/2
}
main()