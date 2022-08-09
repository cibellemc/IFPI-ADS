var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main (){

    const numero = Number(lines[0])
    const horastrabalhadas= Number(lines[1])
    const salarioporhora = Number(lines[2])
    const salario = horastrabalhadas*salarioporhora.toFixed(2)

    console.log(`NUMBER= ${numero}`)
    console.log(`SALARY = U$ ${numero}`)

}
main()