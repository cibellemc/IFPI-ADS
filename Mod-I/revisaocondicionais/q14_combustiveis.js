import { input } from "../io_utils.js";
function main(){
    console.log('G - Gasolina   A-Álcool')
    const [litros,tipocomb]= input('Qtd de litros comprados e tipo do combustivel (4 G)').split(' ')
console.log(valorapagar(litros,tipocomb))
}

function valorapagar(l,t){
    let valor
    if(t==='g'||t==='G'){
        if(l<=20){
            valor = 2.5*l-(0.04*l)
        }
        else {
            valor = 2.5*l-(0.06*l)
        }
        return (`Valor a ser pago: R$${valor.toFixed(2)}`)
    } else if ((t==='a'||t==='A')){
        if(l<=20){
            valor = 1.9*l-(0.03*l)
        }
        else {
            valor = 1.9*l-(0.05*l)
        }
        return (`Valor a ser pago: R$${valor.toFixed(2)}`)
    } else {
        return('Informe o tipo. <G> para gasolina e <A> para álcool.')
    }
    
}
main()