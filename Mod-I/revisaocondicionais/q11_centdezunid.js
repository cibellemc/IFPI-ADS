import { input } from "../io_utils.js";
function main(){
const num = Number(input('Número: '))
if (num>=0&&num<1000){
    console.log(cdz(num))
} else {
    console.log('Digite um número inteiro menor que 1000.')
}
}

function cdz(n){
    let numero = n
    const centenas = Math.trunc(numero/100)
    numero = numero%100
    const dezenas = Math.trunc(numero/10)
    numero = numero%10
    const unidades = numero

    if (n<10){
        return(`${n} = ${unidades} unidade(s).`)
    } else if (n<100){
        return(`${n} = ${dezenas} dezena(s) e ${unidades} unidade(s).`)
    } else {
        return(`${n} = ${centenas} centena(s), ${dezenas} dezena(s) e ${unidades} unidade(s).`)
    }

}

main()