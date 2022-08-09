import { input } from "../io_utils.js";

function main(){

    const numero = input('Digite um número com dois algarismos: ')
    const [dezena,unidade] = numero.split('').map(Number)
    //console.log(dezena)
    //console.log(unidade)

    function qualmaior(d,u){

        if (d==u){
            return ('Os algarismos são iguais.')
        } else if (d<u){
            return ('O maior algarismo é o das unidades: '+u)    
        } else if (d>u){
            return  (`O maior algarismo é o das dezenas: `+d)
        }
    } 
console.log(qualmaior(dezena,unidade))
}
main()