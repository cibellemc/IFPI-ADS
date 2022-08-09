import{print,input}from '../io_utils.js'

function main(){

    const min = Number(input('Informe quantos minutos passaram: '))

    const umdia = min/1440
    const horas = (min%1440)/60
    const restomin = (horas - Math.trunc(horas))*60

    print(`${min} minutos correspondem a ${Math.trunc(umdia)} dia(s), ${Math.trunc(horas)} horas e ${Math.round(restomin)} minutos .`)


}
main()