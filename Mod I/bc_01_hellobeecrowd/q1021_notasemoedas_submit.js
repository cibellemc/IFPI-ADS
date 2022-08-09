var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    
    const valor = Number(lines[0])
    //nao consegui aproximar 11.14 pra 11.15
    let saque = Math.trunc(valor)
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
    saque = saque%2
    const moedas1 = Math.trunc(saque/1)
    saque = saque%1
    const moeda50 = Math.trunc(saque/0.5)
    saque = saque%0.5
    const moeda25= Math.trunc(saque/0.25)
    saque = saque%0.25
    const moeda10= Math.trunc(saque/0.10)
    saque = saque%0.10
    const moeda5= Math.trunc(saque/0.05)
    saque = saque%0.05
    const moeda1= Math.trunc(saque/0.01)


    console.log('NOTAS:')
    console.log(`${notas100} nota(s) de R$ 100.00`)
    console.log(`${notas50} nota(s) de R$ 50.00`)
    console.log(`${notas20} nota(s) de R$ 20.00`)
    console.log(`${notas10} nota(s) de R$ 10.00`)
    console.log(`${notas5} nota(s) de R$ 5.00`)
    console.log(`${notas2} nota(s) de R$ 2.00`)
    console.log('MOEDAS:')

    console.log(`${moedas1} moeda(s) de R$ 1.00`)
    console.log(`${moeda50} moeda(s) de R$ 0.50`)
    console.log(`${moeda25} moeda(s) de R$ 0.25`)
    console.log(`${moeda10} moeda(s) de R$ 0.10`)
    console.log(`${moeda5} moeda(s) de R$ 0.05`)
    console.log(`${moeda1} moeda(s) de R$ 0.01`)


}
main()