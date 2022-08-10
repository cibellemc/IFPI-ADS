import { input } from "../io_utils.js";
function main(){
    console.log('Carnes disponiveis\nFilé(F)    Alcatra(A)  Picanha(P)')
    
    const [qtdcarne,tipodacarne]= input('Kg e tipo de carne, respectivamente (4 F)').split(' ')
    const mododepagamento = input('Pagamento com cartão Tabajara? (S/N)')

    console.log(tipoeqtd(qtdcarne,tipodacarne))
    console.log(desconto(mododepagamento,valorapagar(qtdcarne,tipodacarne)))

}
function tipoeqtd(q,t){
    let tipo,quantidade
    if(t==='F'||t==='f'){
        tipo = 'File'
        quantidade = q
    } else if ((t==='A'||t==='a')){
        tipo = 'Alcatra'
        quantidade = q
    } else if ((t==='P'||t==='p')){
        tipo = 'Picanha'
        quantidade = q
    }
    return (`\n---CUPOM FISCAL---\nTipo de carne: ${tipo}\nQuantidade: ${quantidade}kg`)
}

function valorapagar(q,t){
    let valor
    if(t==='F'||t==='f'){
        if(q>0&&q<=5){
            valor = 4.9*q
        }
        else {
            valor = 5.8*q
        }
    } else if ((t==='A'||t==='a')){
        if(q>0&&q<=5){
            valor = 5.90*q
        }
        else {
            valor = 6.80*q
        }
    } else if ((t==='P'||t==='p')){
        if(q>0&&q<=5){
            valor = 6.90*q
        }
        else {
            valor = 7.8*q
        }
    }
    return (`${valor.toFixed(2)}`)
    
}
function desconto(modopag,tot){
    const total = tot
    let apagar,desconto
    if (modopag==='S'||modopag==='s'){
        desconto = (0.05*tot).toFixed(2)
        apagar = tot-(0.05*tot)
        return (`Total: R$${total}\nTipo de pagamento: Cartão Tabajara (S)\nDesconto: R$${desconto}\nTotal a pagar: R$${apagar}`)
    } else {
        return (`Total: R$${total}\nTipo de pagamento: Cartão Tabajara (N)\nTotal a pagar: R$${total}`)

    }
}

main()