/*Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const valor_emprestimo = 3000
    let novo_valor_emprestimo = valor_emprestimo
    let contador = 0
    
    while (!(novo_valor_emprestimo<=0)){
        contador++
        let pagamento_do_dia = 200
        let resto_a_pagar = (novo_valor_emprestimo - pagamento_do_dia)
        let falta_pagar = resto_a_pagar + (0.85/100*resto_a_pagar)
        novo_valor_emprestimo = falta_pagar
        
    }

    console.log(contador)

}
main()