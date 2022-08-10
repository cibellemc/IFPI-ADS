var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
    const a = Number(lines[0])
    const b = Number(lines[1])
    const prod = a * b
    console.log(`PROD = ${prod}`)

}
main()