import { input } from "../io_utils.js";

function main(){
    const num = Number(input('Informe um número: '))

    function parouimpar(n){
        if (n%2==0){
            return ('par')
        } return ("ímpar")
    }
    console.log(`O número ${num} é`, parouimpar(num))
    

}
main()