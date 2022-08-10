import{print,input}from '../io_utils.js'
function main (){
    
    //Entrada
    const raio = Number(input('Informe o raio da cincunferência (cm): '))

    //Processamento
    const vol= (4 * 3.14 * raio**3 ) / 3

    //Saída
    print(`O volume da esfera é ${vol.toFixed(1)} cm.`)

}
main()