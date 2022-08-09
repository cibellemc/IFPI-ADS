import {print,input} from '../io_utils.js'

function main(){
    
    const m = Number(input('Informe uma distância em m: '))

    const km = Math.trunc(m/1000)
    const restokm = m%1000

    print(`A ditância é de ${km} km e ${restokm} metros.`)

}
main()