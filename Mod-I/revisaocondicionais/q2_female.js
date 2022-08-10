import { input,print } from "../io_utils.js";
function main(){

    const sexo = pedirinfo('Sexo (F/M): ')
    verificarsexo(sexo)
}

function verificarsexo(s){
    if (s==='F'||s==='f'){
        print(`Mulher.`)
    } else if(s==='M'||s==='m') {
        print(`Homem.`)
    } else {
        print(`Sexo inválido.`)
    }
}

function pedirinfo(txt){
    const info = input(txt)
    return info
}

main()
