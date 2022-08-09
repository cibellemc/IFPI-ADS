//(t°C = (5 * t°F - 160) / 9).
import {print,input} from '../io_utils.js'

function main(){

    const fahe = Number(input('Digite uma temperatura (°F): '))

    const celsius = (fahe*5-160)/9

    print(`A temperatura em Celsius é ${celsius.toFixed(2)}`)

}
main()