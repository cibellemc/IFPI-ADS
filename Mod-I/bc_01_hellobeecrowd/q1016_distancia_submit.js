var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){

    const quilometros = (lines[0])

    const tempo = 2*quilometros

    console.log(`${tempo} minutos`)
}
main()