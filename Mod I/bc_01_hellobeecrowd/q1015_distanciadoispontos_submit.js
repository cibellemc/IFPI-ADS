var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    x1y1 = (lines[0])
    v1 = x1y1.split (' ')
    const x1 = (v1[0])
    const y1 = (v1[1])

    x2y2 = (lines[1])
    v2 = x2y2.split (' ')
    const x2 =(v2[0])
    const y2 = (v2[1])

    const distancia = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
    console.log(`${distancia.toFixed(4)}`)

    


}
main()