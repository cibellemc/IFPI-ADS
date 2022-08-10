// Escreva um programa que apresente o mês por extenso, a partir de um número digitado pelo usuário (entre 1 e 12) e a quantidade de dias do mês.

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const mes = Number(input('Informe um mês [1 - 12]: '))
    const meses = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] 

    if (mes >= 1 && mes <= 12){
        if (eh_inteiro(mes)){
            console.log(`Mês ${mes} - ${meses[mes]}`)
            console.log(tamanho_mes(mes))
        }
    } else {
        console.log("Mês inválido. Informe um número de 1 a 12.")
    }
}


function tamanho_mes(m){
    // Meses c/ 30 = Abr, Jun, Set, Nov
    // Mesex c/ 31 = Jan, Mar, Mai, Jul, Ago, Out, Dez
    if (m === 2){
        return ('Esse mês tem 28 ou 29 dias.')
    } else if (m === 4 || m === 6 || m === 9 || m === 11){
        return ('Esse mês tem 30 dias.')
    } else {
        return ('Esse mês tem 31 dias.')
    }
}


function eh_inteiro(n){
    //Método que determina se o valor passado é um inteiro.
    return (Number.isInteger(n))
}

main()