import {print,input} from '../io_utils.js'
function main(){
    print('------- 1° peça ------')
    const linha1 = (input('Código, quantidade, valor unitário: '))
    const dividelinha1 = linha1.split (' ')
    const codigopeca = Number(dividelinha1[0])
    const numeropecas = Number(dividelinha1[1])
    const valorpeca = Number(dividelinha1[2])

    print('------- 2° peça ------')
    const linha2 = (input('Código, quantidade, valor unitário: '))
    const dividelinha2 = linha2.split (' ')
    const codigopeca2 = Number(dividelinha2[0])
    const numeropecas2 = Number(dividelinha2[1])
    const valorpeca2 =  Number(dividelinha2[2])

    const soma = numeropecas*valorpeca + numeropecas2*valorpeca2

    print(`VALOR A PAGAR: R$${soma.toFixed(2)}`)


}
main()