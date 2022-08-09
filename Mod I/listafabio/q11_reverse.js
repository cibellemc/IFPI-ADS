import {print,input} from '../io_utils.js'

function main (){
    //Entrada
    const numero = Number(input('Digite um número de 3 dígitos: '))

    //processamento 
    //&& - e || ou 
     if (numero >= 100 && numero < 1000) {
        const centena=Math.trunc(numero/100)
        const dezena=Math.trunc((numero-100*centena)/10)
        const unid =numero-100*centena-10*dezena

        //saida
        //concatenar valores + " " +
        print(`O inverso dos algarismos ${numero} é ` +unid+dezena+centena)
    } else {
        print('Valor inválido. Digite um algarismo de 3 dígitos.')  
    }

}
main()
