import { print,input } from "../io_utils.js";

function main(){
    
    const numer = Number(input(`Informe o numerador da 1° fração: `))
    const denom = Number(input(`Informe o denominador da 1° fração: `))
    const numer2 = Number(input(`Informe o numerador da 2° fração: `)) 
    const denom2 = Number(input(`Informe o denominador da 2° fração: `))
    const denomtot = denom*denom2
    const numertot = (numer*(denomtot/denom)) + (numer2*(denomtot/denom2))



    print(`A soma resulta em: ${numertot}/${denomtot}`)
        
    }
  


main()