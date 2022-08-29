/*Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().*/

import prompt from 'prompt-sync'
const input = prompt()

class SituacaoFinanceira{
    valorCreditos: number = 0
    valorDebitos: number = 0

    saldo(): number{
        return this.valorCreditos - this.valorDebitos
    }
}   

function main(){

    let financas: SituacaoFinanceira = new SituacaoFinanceira
    financas.valorCreditos = Number(input('Crédito disponível: '))
    financas.valorDebitos = Number(input('Valor de débitos: '))

    console.log('Seu saldo é de R$', financas.saldo())    


}
main()