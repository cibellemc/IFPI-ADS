import {input,print} from '../io_utils.js'
function main(){
    const altura = Number(input('Informe sua altura. (Em metros. Ex: 1.53): '))
    const peso = Number(input('Informe seu peso. (Em kg. Ex: 54.3): '))

    function calcularimc (a,b,){
        //math.pow(numero q quer elevar, por qt quer elevar)
        const imc = peso/(Math.pow(altura,2))
        if (imc<25){
            return (`IMC = ${imc.toFixed(2)} \nPeso normal.`)
        } else if (imc>=25 && imc<30){
            return (`IMC = ${imc.toFixed(2)} \nObesidade.`)
        } else
            return (`IMC = ${imc.toFixed(2)} \nObesidade mórbida.`)
        
            
        
    }
    print(calcularimc(altura,peso))
}
main()