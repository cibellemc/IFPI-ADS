import{print,input}from '../io_utils.js'

function main(){

    const seg = Number(input('Digite os segundos: '))

    const hr = seg/3600
    const min = (seg%3600)/60

    //3666s/3600s=66s 66s/60s=1,1min 1,1min-1min=0,1min*60=6s
    const restohmin = (min-Math.trunc(min))*60

    print(`${seg} segundos correspondem a ${Math.trunc(hr)} horas, ${Math.trunc(min)} minutos e ${Math.trunc(restohmin)} segundos`)



}
main()