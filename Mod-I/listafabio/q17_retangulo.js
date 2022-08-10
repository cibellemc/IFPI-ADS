import{print,input}from '../io_utils.js'
function main (){
    
    //Entrada
    const base = Number(input('Informe a base do retângulo (cm): '))
    const alt = Number(input('Informe a altura do retângulo (cm): '))

    //Processamento
    const area = base*alt

    //Saída
    print(`A área do retângulo é ${area} cm^2.`)




}
main()