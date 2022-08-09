/*import { input,print } from "../io_utils.js";
function main(){
    const numero = (input('Informe um número com  4 dígitos: '))
    const [milhar,centena,dezena,unidade] = numero.split('').map(Number)
    
    print(verificarquadrado(milhar,centena,dezena,unidade))

     function verificarquadrado(a,b,c,d){
        const verf = ((a*10+b)+(c*10+d)==Math.sqrt(Number(numero)))
        if (verf==true){
            return ('Quadrado perfeito.')
        } return('Não é perfeito.')
    }
}
main()*/

import { input,print } from "../io_utils.js";
function main(){
    const numero = (input('Informe um número com  4 dígitos: '))
    const [milhar,centena,dezena,unidade] = numero.split('').map(Number)
        
    print(verificarquadrado(milhar,centena,dezena,unidade))
    
    function verificarquadrado(a,b,c,d){
    if (numero.length==4){
        const verf = ((a*10+b)+(c*10+d)==Math.sqrt(Number(numero)))
        if (verf==true){
            return ('Quadrado perfeito.')
        } else {
            return('Não é perfeito.')
        }
    } else{
        return(`Tente novamente com um número com 4 algorismos.`)
    }
    }
}
main()
