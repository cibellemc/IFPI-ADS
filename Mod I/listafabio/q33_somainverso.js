import {print,input} from '../io_utils.js'

function main (){
    const numero = Number(input('Digite um número de 3 dígitos: '))

     if (numero >= 100 && numero < 1000) {
        const centena=Math.trunc(numero/100)
        const resto = numero%100
        const dezena= Math.trunc(resto/10)
        const unid = resto%10 
        const inverso = unid*100+dezena*10+centena
        const soma = numero + inverso 

        print(` A soma entre ${numero} e ${inverso} é ${soma} ` )
    } else {
        print('Valor inválido. Digite um algarismo de 3 dígitos.')  
    }

}
main()
