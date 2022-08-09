import {input} from '../io_utils.js'
function main(){
const num = Number(input('Número: '))
console.log(quedia(num))
}
function quedia(n){
    if (ehdiadasemana(n)){
        if (n===1){
            return('Domingo.')
        } else if (n===2){
            return('Segunda.')
        } else if (n===3){
            return('Terça.')
        } else if (n===4){
            return('Quarta.')
        } else if (n===5){
            return('Quinta.')
        } else if (n===6){
            return('Sexta.')
        } else {
            return('Sábado.')
        }
    } else {
        return ('Número inválido.')
    }
}

function ehdiadasemana(n){
    if (n>=1&&n<=7){
        return true
    } else{
        return false
    }
}
main()