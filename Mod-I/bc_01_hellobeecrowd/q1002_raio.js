//area = π . raio2 //π = 3.14159
//A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.
//Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). 
import {print,input} from '../io_utils.js'

function main (){

    const raio = Number(input('Raio: '))
    const area = 3.14159 * raio**2
    
    print (`A = ${area.toFixed(4)}`)

    
    


}
main()