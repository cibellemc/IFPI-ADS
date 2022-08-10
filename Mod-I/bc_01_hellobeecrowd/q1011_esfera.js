import {print, input} from '../io_utils.js'

function main(){

    const Raio = Number(input('Raio: '))
    const area = 4/3 * 3.14159 * Raio**3

    print(`VOLUME = ${area.toFixed(3)}`)

}
main()