//8 18 28
import {input} from './io_utils.js'
function main(){
const salario = Number(input('SALÁRIO: R$'))

//const faixa1 = salario-2000*0.08
//const faixa2 = (Math.trunc(salario/1000)*1000-3000)*0.18+faixa1
//const faixa3 = (salario-4500)*0.28+faixa2

if (salario<=2000){
    console.log('ISENTO')

}else if (salario<= 3000) {
    const faixa1=(salario-2000)*0.08 
    console.log(`R${faixa1}`)

//3002-2000=1002 faz math pra 1000 ficar na faixa dos 3000 e 2 ultrapassa ficando nos 4500
}else if (salario<=4500) {
    const faixa1 = Math.trunc((salario-2000)/1000)*1000*0.08
    const restofaixa1 = (salario-2000)%1000
    const faixa2 = restofaixa1*0.18
    const somafaixas = faixa1+faixa2
    console.log(`${somafaixas}`)

}else if (salario>4500) {
    
    const faixa1 = Math.trunc((salario-2000)/1000)*1000*0.08
    const restofaixa1 = ((salario-2000)%1000)
    const faixa2 = Math.trunc(restofaixa1/1500)*1500*0.18
    const faixa3 = (salario-4500)*0.28
    const somafaixas = faixa1+faixa2+faixa3
    console.log(`${somafaixas}`)

}
}

main()