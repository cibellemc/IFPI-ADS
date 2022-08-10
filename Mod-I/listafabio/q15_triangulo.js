import{print,input}from '../io_utils.js'
function main (){
    
    //Entrada
    const base = Number(input('Informe a base do triângulo (cm): '))
    const alt = Number(input('Informe a altura do triângulo (cm): '))

    //Processamento
    const area = base*alt/2

    //Saída
    print(`A área do triângulo é ${area} cm^2.`)




}
main()