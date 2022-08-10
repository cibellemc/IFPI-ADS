import {print, input} from '../io_utils.js'

function main (){

    //Entrada
    //obs: Number tem que começar com N maiúsculo mesmo
    const h = Number(input('Digite um valor em horas: ')) 

    //Processamento   
    const m = h* 60
    //Saída 
    
    //obs: prestar atenção se é ' ou `
    print (`${h} hora(s) corresponde(m) a ${m} minutos.`)

}
main()
