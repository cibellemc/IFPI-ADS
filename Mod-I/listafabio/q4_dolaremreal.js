//Lembrar de bostar .js depois de ioutils
import { print,input } from "../io_utils.js"

function main(){
    
    //Entrada
    const r = Number(input('Digite a quantia que você deseja converter: R$'))
    const dol = Number(input('Quanto o dólar está custando hoje? '))

   //Processamento
    const conv = r/dol

    //Saída
    //prestar atenção nas variáveis
    print (`R$${r} equivalem a $${conv} atualmente.`)
}
main()