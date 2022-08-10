import { print,input } from "../io_utils.js";

function main(){
    
    const valor = Number(input(`Informe o valor do saque: R$`))
    let saque = valor
    const notas100 = Math.trunc(saque/100)
    saque = saque%100
    const notas50 = Math.trunc(saque/50)
    saque = saque%50
    const notas20 = Math.trunc(saque/20)
    saque = saque%20
    const notas10 = Math.trunc(saque/10)
    saque = saque%10
    const notas5 = Math.trunc(saque/5)
    saque = saque%5
    const notas2 = Math.trunc(saque/2)
    saque=saque%2
    const notas1 = Math.trunc(saque)
    print(valor)
    print(`${notas100} nota(s) de R$ 100,00`)
    print(`${notas50} nota(s) de R$ 50,00`)
    print(`${notas20} nota(s) de R$ 20,00`)
    print(`${notas10} nota(s) de R$ 10,00`)
    print(`${notas5} nota(s) de R$ 5,00`)
    print(`${notas2} nota(s) de R$ 2,00`)
    print(`${notas1} nota(s) de R$ 1,00`)


}
main()