//Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    
    const x = Number(lines[0])
    const y = Number(lines[1])
    const consumo = x/y
    
    console.log(`${consumo.toFixed(3)} km/l`)

}
main()