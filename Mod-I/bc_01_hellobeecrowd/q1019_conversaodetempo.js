import { print,input } from "../io_utils.js";

function main(){

    const segundos = (input('Segundos: '))

    let tempo = segundos 
    const horas = Math.trunc(tempo/3600)
    tempo = tempo%3600
    const minutos = Math.trunc(tempo/60)
    tempo = tempo%60
    const resto = tempo

    print(`${horas}:${minutos}:${resto}`)



}
main()