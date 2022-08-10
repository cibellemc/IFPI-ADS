var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main (){

    const nome = (lines[0])
    const salariofixo = Number(lines[1])
    const vendas = Number(lines[2])
    
    const novosalario = salariofixo + 0.15*vendas

    console.log(`TOTAL = R$ ${novosalario.toFixed(2)}`)


}
main()