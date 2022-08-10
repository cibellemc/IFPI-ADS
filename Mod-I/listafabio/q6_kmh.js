import {print,input} from '../io_utils.js'

function main (){

    //Entrada
    const vel_kmh = Number(input('Digite uma velocidade em km/h: '))

    //Processamento
    const vel_ms = vel_kmh / 3.6
    
    //Saida
    print (`A velocidade em m/s é ${vel_ms}. `)


}
main()