//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import {print, input} from '../io_utils.js'

function main(){
    
const binario = Number(input('Informe um número binário de 4 dígitos para conversão: '))

let bits = binario
    const fourbit = Math.trunc(bits/1000)*2**3
bits = bits%1000


const treebit = Math.trunc(bits/100)*2**2
bits = bits%100

const twobit = Math.trunc(bits/10)*2
bits = bits%10

const onebit = bits
const soma = fourbit+treebit+twobit+onebit

print(`O número em binário é: ${soma}`)
}
main()
