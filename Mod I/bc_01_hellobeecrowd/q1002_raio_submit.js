
//area = π . raio2 //π = 3.14159
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
    const raio = Number(lines[0])
    const area = 3.14159 * raio**2
    console.log(`A = ${area.toFixed(4)}`)

}
main()