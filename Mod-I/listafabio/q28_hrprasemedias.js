import{print,input}from '../io_utils.js'

function main(){

    const hr = Number(input('Informe quantas horas passaram: '))
    const semanas = hr/168

    //169h/168h= quociente 1 (1 semana completa = 168h) e tem resto 1 (1 hora sobrando)
    //se o resto fosse 24, dividindo por 24 daria 1 dia completo
    //como resto é 1, dividindo por 24 da resto = 0,041666666666667 dias, que multiplicados por 24h da 1h
    //de min pra h divide (60 min 1 h), de hr p min multiplica (1h 60min)
    const dias = (hr%168)/24
    const restoh = (dias-Math.trunc(dias))*24

    print(`${hr} horas correspondem a ${Math.trunc(semanas)} semanas, ${Math.trunc(dias)} dias e ${restoh} horas.`)



}
main()