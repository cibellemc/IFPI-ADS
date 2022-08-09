var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){

    const Raio = Number(lines[0])
    const R = 4/3 * 3.14159 * Raio**3
    
    console.log(`VOLUME = ${R.toFixed(3)}`)

}
main()