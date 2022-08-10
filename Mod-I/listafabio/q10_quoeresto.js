import {print,input} from '../io_utils.js'

function main(){

   //Entrada
    const n1 = Number(input('Digite um número inteiro: '))
    const n2 = Number(input('Digite outro número inteiro: '))

    //Processamento
    const quo = parseInt(n1/n2)
    const res = n1%n2

    //Saída
    print(`O quociente da divisão é: ${quo}`)
    print(`O resto da divisão é: ${res}`)

}
main()