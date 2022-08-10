//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
//número = 9534 ; soma = 9+5+3+4 = 21.

import { print,input } from "../io_utils.js";

function main(){
const entrada = Number(input('Digite um número de 4 dígitos: '))

if (entrada>=1000 && entrada<10000) {
    const milhares = Math.trunc(entrada/1000)
    const resto = entrada%1000
    const centena=Math.trunc(resto/100)
    const resto1 = resto - centena*100
    const dezena= Math.trunc(resto1/10)
    const unid = resto1%10 
    const soma = unid+dezena+centena+milhares
    print(`A soma dos algarismos ${entrada} é ${soma}`)
} else {
    print('Por favor, informe número válido.')  
}




}
main()