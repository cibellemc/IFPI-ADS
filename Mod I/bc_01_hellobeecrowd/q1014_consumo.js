import {print, input}from '../io_utils.js'


function main(){
    
    const x = Number(input('Digite a distância percorrida (km): '))
    const y = Number(input('Informe a quantidade de combustível usada (l):'))
    const consumo = x/y
    
    print(`${consumo.toFixed(3)} km/l`)

}
main()