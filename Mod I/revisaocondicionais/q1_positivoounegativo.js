import { input,print } from "../io_utils.js";

function main(){
    const dado = input('Número: ')

    if (verificarpositividade(dado)){
        print(`${dado} é positivo`)
    } else {
        print(`${dado} é negativo`)
    }
}

function verificarpositividade(n){
    if (n>=0){
        return true
    } return false

}
main()