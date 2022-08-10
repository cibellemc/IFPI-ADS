//Leia quatro valores inteiros A, B, C e D. 
//A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

import {print,input} from '../io_utils.js'

function main(){

    const a = Number(input('A: '))
    const b = Number(input('B: '))
    const c = Number(input('C: '))
    const d = Number(input('D: '))

    const diferenca = (a*b) - (c*d)

    print(`DIFERENCA = ${diferenca}`)

}
main()