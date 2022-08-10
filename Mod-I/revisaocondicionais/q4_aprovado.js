import {input} from '../io_utils.js'

function main(){
    const [nota1,nota2] = (input('Informe 2 notas (10 6): ')).split(' ').map(Number)
    console.log(aprovado(calcularmedia(nota1,nota2)))
}

function aprovado(media){
    if (media===10){
        return(`Média: ${media.toFixed(2)}\nAprovado com distinção`)
    } else if (media>=7){
        return(`Média: ${media.toFixed(2)}\nAprovado`)
    } return(`Média: ${media.toFixed(2)}\nReprovado`)
}

function calcularmedia(n1,n2){

    const media = (n1+n2)/2
    return media
}






main()