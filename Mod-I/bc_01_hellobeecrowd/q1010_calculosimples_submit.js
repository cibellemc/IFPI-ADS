var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    linha0 = (lines[0])
    separador = linha0.split (' ')
    const codigpeca = (separador[0])
    const numeropecas = (separador[1])
    const valorpeca = (separador[2])

    linha1 = (lines[1])
    separador2 = linha1.split (' ')
    const codigopeca2 = (separador2[0])
    const numeropecas2 = (separador2[1])
    const valorpeca2 = (separador2[2])

    const total = numeropecas*valorpeca + numeropecas2*valorpeca2

    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)

}
main()