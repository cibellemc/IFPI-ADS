import {print,input} from '../io_utils.js'

function main(){
    
    const dias = Number(input('Informe a quantidade de dias: '))

    const semana = Math.trunc(dias/7)
    const restosemana = dias%7


    print(`${dias} dias correspondem a ${semana} semanas e ${restosemana} dias.`)

}
main()