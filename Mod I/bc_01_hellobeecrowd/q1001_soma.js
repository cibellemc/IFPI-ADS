//Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X
import {print,input} from '../io_utils.js'

function main (){
    const a = Number(input('A:'))
    const b = Number(input('B:'))
    print (`X = ${a+b}`)

}
main()