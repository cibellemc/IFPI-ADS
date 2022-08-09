import {input} from '../io_utils.js'

function main(){
    
    const num = input('Digite 3 números. Ex(2 300 55): ')
    const [num1,num2,num3] = num.split(' ').map(Number)
    const opcao = input('Que número deseja exibir? (1,2 ou 3): ')

    function escolha(opcao){
        if (opcao==0 || opcao>3){
         return ('Opção inválida')   
        } else 
            if (opcao==1){
                return num1
            }else if (opcao==2){
                return num2
            } return num3
    }
console.log(escolha(opcao))
}
main()