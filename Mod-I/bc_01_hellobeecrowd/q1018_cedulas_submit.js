var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    
    const valor = Number(lines[0])

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

    console.log(valor)
    
    console.log(`${notas100} nota(s) de R$ 100,00`)
    console.log(`${notas50} nota(s) de R$ 50,00`)
    console.log(`${notas20} nota(s) de R$ 20,00`)
    console.log(`${notas10} nota(s) de R$ 10,00`)
    console.log(`${notas5} nota(s) de R$ 5,00`)
    console.log(`${notas2} nota(s) de R$ 2,00`)
    console.log(`${notas1} nota(s) de R$ 1,00`)


}
main()