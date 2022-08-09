import {print,input} from '../io_utils.js'

function main(){
    
    //Entrada
    const sal = Number(input('Digite o seu salário: R$'))

    //Processamento
    const newsal = sal+(0.25*sal)

    //Saída
    print(`O novo salário é R$${newsal}.`)

}
main()