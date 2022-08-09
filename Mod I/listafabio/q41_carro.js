//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
//seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
//escreva o custo ao consumidor.

import { print,input } from "../io_utils.js";

function main(){
    const preco_carro = (Number(input("Qual o preço de fábrica seu carro? R$")))
    const acrescimos = preco_carro*0.28 + preco_carro*0.45
    const preco_final = preco_carro+acrescimos

    print(`O custo final do seu carro é R$${preco_final} `)
}
main()