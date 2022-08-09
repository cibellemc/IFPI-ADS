import { print,input } from "../io_utils.js";

function main(){

    let contador = 1
    let number = 0
    let numerador = 0
    while (contador<=3) {

        number = Number(input(`Digite o  ${contador}° valor: `))
        numerador += number
        contador++
    }
    print(`A média entre os 3 números é ${(numerador/3).toFixed(2)}`)

}
main()