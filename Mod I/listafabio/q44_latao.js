//Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
//quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
//pelo usuário.

import { print,input } from "../io_utils.js";

function main(){
    const peso_latao = Number(input('Quantidade de latão (kg): '))
    if (peso_latao<=1) {
        const cobre = (peso_latao*0.70)*1000
        const zinco = (peso_latao*0.30)*1000
        print(`Em ${peso_latao} kg de latão, há ${cobre}g de cobre e ${zinco}g de zinco`)
        
    } else {
        const cobre = peso_latao*0.70 
        const zinco = peso_latao*0.30
        print(`Em ${peso_latao} kg de latão, há ${cobre}kg de cobre e ${zinco}kg de zinco`)
        
    }


}
main()