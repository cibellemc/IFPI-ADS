/*Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.*/
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let quantidade_bois = input('Quantidade de animais a serem analisados: ')
    let nome_boi = input('Nome do boi: ')
    let peso_boi = Number(input('Massa (kg): '))

    controle_de_peso(quantidade_bois,nome_boi,peso_boi)
}

function controle_de_peso(qtd_bois,nome,peso){
    
    let mais_pesado = peso
    let mais_leve = peso
    let nome_mais_pesado = nome
    let nome_mais_leve = nome

    for (let i = 2; i <= qtd_bois; i++){
        nome = input('Nome do boi: ')
        peso = Number(input('Massa (kg): '))

        if(peso > mais_pesado){
            nome_mais_pesado = nome
            mais_pesado = peso
        } 

        if (peso < mais_leve){
            nome_mais_leve = nome
            mais_leve = peso
        }
    }
    console.log(`\nMais magro: ${nome_mais_leve} - ${mais_leve}kg`)
    console.log(`Mais pesado: ${nome_mais_pesado} - ${mais_pesado}kg`)
}
main()