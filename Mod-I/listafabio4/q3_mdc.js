
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let [num1,num2] = input('Números (1 2): ').split(' ').map(Number)

    console.log(euclides_r  (num1, num2))
    }

    /*pega da net
    se o numero2(denominador) for = 0, eu retorno o numerador, afinal, 0 é divisível por qualquer valor porem nao divide nenhum
    senao, eu retorno novamente a função, passando como numerador o denominador e o resto da divisão pelos dois numeros
    isso vai ser realizado varias vezes, ex testado = 4 6
     4 % 6 = 4 => 6 passa a ser 1° parametro e 4 o segundo
    cai novamente no 2° return, agr sendo euclides(4, 6 % 4)
     6 % 4 = 2 => 2 passa a ser 1° parametro e 4 o segundo
    cai novamente no 2° return, agr sendo euclides(2, 4 % 2)
    entra no se, (2, 0) e retorna 2*/

function euclides_r(num1, num2){
    if (num2==0){
        return num1
    }
  return euclides_r (num2, num1 % num2)
}


main()