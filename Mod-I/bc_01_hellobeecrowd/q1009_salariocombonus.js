import {print,input} from '../io_utils.js'

function main (){

    const nome = (input('Nome: '))
    const salariofixo = Number(input('Salário fixo: R$'))
    const vendas = Number(input('Vendas realizadas: R$'))

    const novosalario = salariofixo + 0.15*vendas

    print(`TOTAL = R$ ${novosalario.toFixed(2)}`)


}
main()