//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
import {print,input} from '../io_utils.js'

function main(){

    const celsius = Number(input('Digite uma temperatura (°C): '))

    const fahe = (celsius*9+160)/5

    print(`A temperatura em Fahrenheit é ${fahe}`)

}
main()