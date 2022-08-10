//Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário.
//A seguir, mostre o número e o salário do funcionário, com duas casas decimais.
import {input, print} from '../io_utils.js'

function main (){

    const numero = Number(input('Número de identificação: '))
    const horastrabalhadas= Number(input('Horas trabalhadas: '))
    const salarioporhora = Number(input('Valor recebido por hora: U$ '))
    const salario = horastrabalhadas*salarioporhora.toFixed(2)
    
    print(`NUMBER= ${numero}`)
    print(`SALARY = U$ ${numero}`)
    
}
main()