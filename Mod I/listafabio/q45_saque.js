import { print,input } from "../io_utils.js";

function main(){
    
    const valorsaque = Number(input(`Informe o valor do saque: R$`))
    let saque = valorsaque
    const notas200 = Math.trunc(saque/200)
    saque = saque%200
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
    const disponivel = notas100*100+notas200*200+notas50*50+notas5*5+notas10*10+notas20*20+notas2*2
    print(`Você poderá sacar R$${disponivel}.`)
    print(`${notas200} notas de R$200, ${notas100} notas de R$100, ${notas50} notas de R$50, ${notas20} notas de R$20, ${notas10} notas de R$10, ${notas5} notas de R$5 e ${notas2} notas de R$2.`)


}
main()