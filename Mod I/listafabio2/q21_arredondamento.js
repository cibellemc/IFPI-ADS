import {input,print} from '../io_utils.js'
function main(){
    const valor = Number(input('Valor que deseja arredondar. (Ex: 3.52): '))
    const numeroreduzido = valor.toFixed(2)
    //se nao botar .map(number) o i+1 é feito como string
    //ex: 3+1=31
    const [inteiro,decimal] = numeroreduzido.split('.').map(Number)

    function arredondar (i,d){
        
        if (d>=50){
            return i+1
        } return i
        
    }
    print(arredondar(inteiro,decimal))
}
main()