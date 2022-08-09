import { input,print } from "../io_utils.js";
function main(){
    const numero = (input('Informe um número com  4 dígitos: '))
    const [milhar,centena,dezena,unidade] = numero.split('').map(Number)
        
    print(exibir(milhar,centena,dezena,unidade))

    function exibir(a,b,c,d){
        if (verificarquadrado(a,b,c,d)==true){
            return(`A raiz quadrada de ${numero} é igual a soma entre seus dois algarismos iniciais e os dois últimos.\nRaiz quadrada de ${numero} = ${Math.sqrt(numero)} = ` +(a*10+b)+ `+`+(c*10+d))

        } else {
            return('Não é perfeito.')
        }
    }
    
    function verificarquadrado(a,b,c,d){
    if (numero.length==4){
        return ((a*10+b)+(c*10+d)==Math.sqrt(Number(numero)))  
    } else{
        return(`Tente novamente com um número com 4 algorismos.`)
    }
    }
}
main()