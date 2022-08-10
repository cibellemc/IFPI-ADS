/*
Você deve fazer um programa que leia um valor qualquer
e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25],
(25,50], (50,75], (75,100]) este valor se encontra. 
Obviamente se o valor não estiver em nenhum destes intervalos, 
deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000
*/

/*function main(){
    const numeroqualquer = (lines[0])

    const intervalo = function verificarintervalo(num){
    if (num>100 || num<0){
        return ('Fora de intervalo ')
    } else {
        if (num>=0&&num<=25){
            return('Intervalo [0,25]')
        }
        if (num>25&&num<=50){
            return('Intervalo (25,50]')
        }
        if (num>50&&num<=75){
            return('Intervalo (50,75]')
        }
        if (num>75&&num<=100){
            return('Intervalo (75,100]')
        }
    }
    }

    console.log(intervalo(numeroqualquer))
    
}
main()*/

import {input,print}from '../io_utils.js'
function main(){
    const numeroqualquer = Number(input('Informe um número: '))

    const intervalo = function verificarintervalo(num){
    if (num>100 || num<0){
        return ('Fora de intervalo ')
    } else {
        if (num>=0&&num<=25){
            return('Intervalo [0,25]')
        }
        if (num>25&&num<=50){
            return('Intervalo (25,50]')
        }
        if (num>50&&num<=75){
            return('Intervalo (50,75]')
        }
        if (num>75&&num<=100){
            return('Intervalo (75,100]')
        }
    }
    }

    print(intervalo(numeroqualquer))

}
main()