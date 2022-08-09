//Cópia da q2, trocando horas por min
//Trocar  também multiplicação por divisão

import {print, input} from '../io_utils.js'

function main (){

    //Entrada
    const m = Number(input('Digite um valor em minutos: ')) 

    //Processamento   
    const h = Math.trunc(m/ 60)
    const restoh = m%60
    //Saída 
    //queria retornar em forma fracionária mas não sei como (1/4 de hora)
    print (`${m} minuto(s) corresponde a ${h} horas e ${restoh} minutos.`)

}
main()
