import { print,input } from "../io_utils.js";

function main(){

//prestaçoes inteiras
    const preco = Number(input('Informe o preço do produto: R$'))
    const prestacao = Math.trunc(preco/3)
    const entrada = prestacao + preco%3
    print(`O pagamento será com uma entrada de R$${entrada} e 2 prestações de R$${prestacao}. `)



}
main()