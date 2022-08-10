var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){

    const idade = Number(lines[0])

    let diasvida = idade
    const anos = Math.trunc(diasvida/365)
    diasvida = diasvida % 365 
    const meses = Math.trunc(diasvida/30) 
    diasvida = diasvida % 30
    const dias = diasvida

    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)
}
main()