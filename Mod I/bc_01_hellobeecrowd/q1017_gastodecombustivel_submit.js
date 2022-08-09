var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){

    const tempo = Number(lines[0])
    const velocidademedia = Number(lines[1])

    const litros = tempo*velocidademedia/12

    console.log(`${litros.toFixed(3)}`)
}
main()