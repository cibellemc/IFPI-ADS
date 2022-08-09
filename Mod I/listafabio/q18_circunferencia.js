import{print,input}from '../io_utils.js'
function main (){
    
    //Entrada
    const raio = Number(input('Informe o raio da cincunferência (cm): '))

    //Processamento
    const comp = raio*2*3.14

    //Saída
    print(`O comprimento da circunferência é ${comp.toFixed(1)} cm.`)

}
main()