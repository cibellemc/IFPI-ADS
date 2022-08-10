/*
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

O arquivo de entrada contém 100 números inteiros, positivos e distintos.
*/

import prompt from 'prompt-sync'
const receba = prompt()

function main(){

    let num = Number(receba('Num: '))
    let cont = 1
    let maior_num = num
    let posicao_maior_numero = 1

    while (cont<=99){
        num =  Number(receba('Num: '))
        if(num>maior_num){
            maior_num = num
            posicao_maior_numero = cont+1
        }
        cont++
    }
    console.log(maior_num)
    console.log(posicao_maior_numero)

}
main()

//--------------------- bee
function main(){

    let num = Number(lines[0])
    let cont = 1
    let maior_num = num
    let posicao_maior_numero = 1

    while (cont<=99){
        num =  Number(lines[cont])
        if(num>maior_num){
            maior_num = num
            posicao_maior_numero = cont+1
        }
        cont++
    }
    console.log(maior_num)
    console.log(posicao_maior_numero)
}
main()
    
//DEU CERTO
/*function main(){
    const texto = fs.readFileSync('numerosteste.txt','utf-8')
    const numeros = texto.split('\n').map(Number)

    let maior = numeros[1]

     for (let cont = 2; cont <= 100; cont++){
            if (numeros[cont] > maior){
                maior = numeros[cont]
            }
        }
        console.log(maior)
}*/

//VERSAO PROF
import fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n');

function main(){

    let contador = 1
    let valor
    // let maior = Number(input(`Valor ${contador}: `))
    let maior = Number(lines[0])
    let posicao_maior = 1

    while(contador < 100){
        contador += 1
        // valor = Number(input(`Valor ${contador}: `))
        valor = Number(lines[contador-1])
        
        if (valor > maior){
            maior = valor
            posicao_maior = contador
        }
    }

    console.log(maior)
    console.log(posicao_maior)

}

main()