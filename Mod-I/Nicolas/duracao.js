import { input } from "../io_utils.js";
function main(){
    const [hh1,mm1] = (input('Informe o momento inicial (hh/mm): ')).split('/').map(Number)
    const [hh2,mm2] = (input('Informe o momento final (hh/mm): ')).split('/').map(Number)
    let horas,minutos

if (hh1>hh2){
    horas = hh1-hh2
    if (mm1>mm2){
        minutos = mm1-mm2
    } else {
        minutos = mm2-mm1
        horas -=1
    }
} else {
    horas = hh2-hh1
    if (mm1>mm2){
        minutos = mm1-mm2
    } else {
        minutos = mm2-mm1
        horas -=1
    }
}

    console.log(`Duração: ${horas}/${minutos}`)
} 

main()