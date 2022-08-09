//Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
//fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
import { print,input } from "../io_utils.js";

function main(){
    const anosfumando = Number(input('A quantos anos você fuma? '))
    const cigarrodia = Number(input('Quantos cigarros você fuma por dia? '))
    const valorcarteira = Number(input('Quanto custa uma carteira de cigarro? R$'))
    const cigarrototal = cigarrodia*anosfumando*365
    const dinheirogasto = (Math.ceil(cigarrototal/20))*valorcarteira




    print(`Em ${anosfumando} anos fumando, você gastou R$${dinheirogasto} em carteiras de cigarro.`)
}
main()