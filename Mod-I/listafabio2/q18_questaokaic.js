import { input, print} from "../io_utils.js";
function main(){
    const doisnumeros = input('Digite dois números. (Ex: 1 2): ')
    const [num1,num2] = doisnumeros.split(' ').map(Number)
    print('--------- CALCULADORA ----------')
    print('1-ADIÇÃO')
    print('2-SUBTRAÇÃO')
    print('3-MULTIPLICAÇÃO')
    print('4-DIVISÃO')
    const opcoes = input('Que operação deseja realizar? ')


    function calculadora(n1,n2,o){
        let resultado 
        if (o==1){
            resultado = n1+n2
            return (`O resultado da operação é: ` +resultado)
        } else if (o==2){
            resultado = n1-n2
            return (`O resultado da operação é: ` +resultado)
        } else if (o==3){
            resultado = n1*n2
            return (`O resultado da operação é: ` +resultado)
        } else if (o==4) {
            resultado = n1/n2
            return (`O resultado da operação é: ` +resultado)
        } else resultado = ('Informe opção válida (1,2,3 ou 4)')
        return resultado
    
    }
    print(calculadora(num1,num2,opcoes))
}
main()