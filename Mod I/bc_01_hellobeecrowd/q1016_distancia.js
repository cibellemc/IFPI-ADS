import {print, input} from '../io_utils.js'

function main(){

    const quilometros = Number(input('Distância (km): '))

    const tempo = 2*quilometros

    print(`${tempo} minutos.`)
}
main()