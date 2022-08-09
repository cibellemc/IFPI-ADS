//colocar ../ já que ioutils está fora de listafabio mas dentro de ifpiads
import {print,input} from '../io_utils.js'

function main (){
    //Entrada   
    const vel_ms = Number(input('Digite uma velocidade (m/s): '))

    //Processamento
    const vel_kmh = (vel_ms * 3.6)

    //Saída
    //não precisa botar espaço depois do } pra colocar o ponto
    print(`A velocidade em km/h é ${vel_kmh}.`)

}

main()
