import prompt from 'prompt-sync'
const input = prompt()

import {pausa, pedir_numero, pedir_numero_na_faixa} from './utils.js'
import { criar_vetor, maior_e_menor, media_vetor, mostrar_negativos, mostrar_positivos, 
preencher_com_valor_padrao, quantidade_de_itens_no_vetor, 
soma_elementos_do_vetor, atualizar_vetor } from './vetor_funcionalidades.js'

function main(){

    mostrar_menu()

    let opcao = pedir_numero_na_faixa(0,10,'Escolha uma opção: ')

    let vetor, valor_padrao, tamanho_vetor
    console.clear()

    while(opcao !==0){
        if (opcao === 1){
            console.clear()
            vetor = criar_vetor()

        }else{
            if (vetor === undefined){
                console.log('\nVetor ainda não preenchido.')

            } else if(opcao === 2){
                console.log(vetor)

            }else if(opcao === 3){
                valor_padrao = pedir_numero('Informe número padrão: ')
                preencher_com_valor_padrao(valor_padrao,vetor)
            
            }else if(opcao === 4){
                tamanho_vetor = quantidade_de_itens_no_vetor(vetor)
                console.log(`O tamanho do vetor é ${tamanho_vetor}`)
            
            }else if(opcao === 5){
                console.log(`\n`+maior_e_menor(vetor))
            
            }else if(opcao === 6){
                console.log(`A média é: ${media_vetor(vetor)}`)
            
            }else if(opcao === 7){
                console.log(`A soma dos valores é: ${soma_elementos_do_vetor(vetor)}`)

            }else if(opcao === 8){
                console.log(mostrar_positivos(vetor))
            
            }else if(opcao === 9){
                console.log(mostrar_negativos(vetor))
            
            }else if(opcao ===10){
                console.clear()
                vetor = atualizar_vetor(vetor)
            }
        }
        pausa()
        console.clear()
        mostrar_menu()
        opcao = pedir_numero_na_faixa(0,10,'Escolha uma opção: ')
    }

}


function mostrar_menu(){
    console.log('1 - Inicialização de vetor')
    console.log('2 - Mostrar vetor')
    console.log('3 - Resetar vetor com valor padrão')
    console.log('4 - Ver quantidade de itens no vetor')
    console.log('5 - Maior, menor e suas posições')
    console.log('6 - Média dos valores')
    console.log('7 - Somatório dos valores')
    console.log('8 - Exibir valores positivos')
    console.log('9 - Exibir valores negativos')
    console.log('10 - Atualizar vetor')
    console.log('11 - Adicionar novos valores')
    console.log('12 - Remover por valor exato')
    console.log('13 - Remover por posição')
    console.log('14 - Editar valor em posição')
    console.log('15 - Salvar valores em arquivo')
    console.log('0 - Sair\n')
}


main()