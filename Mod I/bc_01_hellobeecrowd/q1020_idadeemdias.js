//copia de uma questao da lista do fabio
import { print,input } from "../io_utils.js";

function main(){

    const idade = Number(input('Qual sua idade? (em dias): '))
    let diasvida = idade
    const anos = Math.trunc(diasvida/365)
    diasvida = diasvida % 365 
    const meses = Math.trunc(diasvida/30) 
    diasvida = diasvida % 30
    const dias = diasvida



    print(`${anos} ano(s)`)
    print(`${meses} mes(es)`)
    print(`${dias} dia(s)`)
}
main()