import { input } from "../io_utils.js";
function main(){
const [qdtmorango,qtdmaca]= input('Kg de morangos e maçãs respectivamente (4 8)').split(' ').map(Number)
console.log(desconto(qdtmorango,qtdmaca,valortotal(qdtmorango,qtdmaca)))
}
function valortotal(mor,mac){
    const valormor = 2.5*mor
    const valormac = 1.8*mac
    let valortotal = valormac+valormor
    return valortotal

}
function desconto(mor,mac,tot){
    let totalkg = mor+mac
    if (totalkg>8||tot>25){
        tot = tot - (tot*0.10) 
    }
    return (`Total a pagar: R$${tot}`)
}
main()