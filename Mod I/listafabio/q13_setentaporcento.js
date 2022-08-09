
import {print,input} from '../io_utils.js'

function main(){
    
    //Entrada
    const val = Number(input('Digite um valor: R$'))

    //Processamento
    const newval = val-(0.30*val)

    //Saída
    print(`70% de R$${val} é R$${newval}.`)

}
main()