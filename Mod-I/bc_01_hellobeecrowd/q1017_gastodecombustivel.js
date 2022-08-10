import {print, input} from '../io_utils.js'

function main(){

    const tempo = Number(input('Tempo gasto (h): '))
    const velocidademedia = Number(input('Velocidade média (km/h): '))

    const litros = tempo*velocidademedia/12

    print(`${litros.toFixed(3)}`)
}
main()