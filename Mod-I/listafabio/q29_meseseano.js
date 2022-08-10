import {print,input} from '../io_utils.js'

function main(){

    const mes = Number(input('Informe os meses: '))
    const ano = mes / 12
    const restomes = mes%12

    
    print(`${mes} meses correspondem a ${Math.trunc(ano)} ano(s) e ${restomes} meses.`)


}
main()