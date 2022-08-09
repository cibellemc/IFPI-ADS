var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main(){

    const a = Number(lines[0])
    const b = Number(lines[1])
    const c = Number(lines[2])
    const d = Number(lines[3])
    
    const diferenca = (a*b) - (c*d)

    console.log(`DIFERENCA = ${diferenca}`)
}
main()