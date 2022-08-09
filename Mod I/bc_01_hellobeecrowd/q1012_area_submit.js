var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


function main(){
    
linha0 = (lines[0])
separador = linha0.split (' ')
const A = Number(separador[0])
const B = Number(separador[1])
const C = Number(separador[2])

const areatri = A*C/2
const areacir = 3.14159*C**2
const areatra = ((A+B)*C)/2
const areaqua = B**2
const arearet = A*B

console.log(`TRIANGULO: ${areatri.toFixed(3)}`) 
console.log(`CIRCULO: ${areacir.toFixed(3)}`)
console.log(`TRAPEZIO: ${areatra.toFixed(3)}`)
console.log(`QUADRADO: ${areaqua.toFixed(3)}`)
console.log(`RETANGULO: ${arearet.toFixed(3)}`)

}
main()