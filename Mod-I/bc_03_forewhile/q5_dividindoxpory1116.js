import { input } from '../io_utils.js'

function main(){
    
    const repeticoes = Number(input('Quantas divisoes quer fazer: '))
    let cont = 0
    let divisao 
    while (cont<repeticoes){
        let [numerador, denominador] = input('Numeros a dividir: ').split(' ').map(Number)
        
    if (denominador!=0){
        divisao = numerador/denominador
        console.log(divisao.toFixed(1))
        
    } else {
        console.log('divisao impossivel')
    }
    cont++
    }
}
main()

//----------- bee
function main(){
    
    let cont = 0
    let numero = 1
    let divisao 
    const repeticoes = Number(lines[cont])
    
    while (cont<repeticoes){
        let [numerador, denominador] = (lines[numero]).split(' ').map(Number)
        
    if (denominador!==0){
        divisao = numerador/denominador
        console.log(divisao.toFixed(1))
        
    } else {
        console.log('divisao impossivel')
    }
    numero++
    cont++
    }
    
}
main()