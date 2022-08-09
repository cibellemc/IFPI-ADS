//D=R+S/2; R=(A+B)^2 S=(B+C)^2
import { print,input } from "../io_utils.js";

function main(){
    
    const A = Number(input('Digite o valor de A: '))
    const B = Number(input('Digite o valor de B: '))
    const C = Number(input('Digite o valor de C: '))
    const D = ((A+B)**2 + (B+C)**2)/2

    print(`O resultado da expressão é ${D}`)

}
main()