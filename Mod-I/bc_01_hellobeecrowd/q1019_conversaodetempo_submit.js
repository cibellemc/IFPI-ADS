var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){

    const segundos = (lines[0])

    let tempo = segundos 
    const horas = Math.trunc(tempo/3600)
    tempo = tempo%3600
    const minutos = Math.trunc(tempo/60)
    tempo = tempo%60
    const resto = tempo

    console.log(`${horas}:${minutos}:${resto}`)



}
main()