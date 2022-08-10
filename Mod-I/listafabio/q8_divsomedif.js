//copia do inicio da q7, mudando uma var e acrescentando saída
import {print,input} from '../io_utils.js'

function main (){
    //Entrada
    const v1 = Number(input('Digite o 1° valor: '))
    const v2 = Number(input('Digite o 2° valor: '))

    //Processamento
    const som = (v1 + v2)
    const dif = (v1 - v2)
    const div = som/dif


    //Saida
    //copia nao comedia, vai dar muito mais trabalho ir vendo cada var errado
    print(`A soma entre ${v1} e ${v2} é: ${som}.`)
    print(`A diferença entre ${v1} e ${v2} é: ${dif}.`)
    print(`A divisão da soma pela diferença é ${div}.`)

}
main()