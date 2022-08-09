import {print,input} from '../io_utils.js'

function main (){
    //Entrada
    const v1 = Number(input('Digite o 1° valor: '))
    const v2 = Number(input('Digite o 2° valor: '))
    const v3 = Number(input('Digite o 3° valor: '))

    //Processamento
    const som = v1 + v2
    const dif = v2 - v3

    //Saida
    print(`A soma entre ${v1} e ${v2} é: ${som}`)
    print(`A diferença entre ${v2} e ${v3} é: ${dif}`)

}
main()