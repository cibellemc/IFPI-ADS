import prompt from 'prompt-sync'
import { gerar_matriz_quadrada } from './funcoes_matriz.js'
const input = prompt()

function main(){
    const matriz = gerar_matriz_quadrada(6)
    const matriz19 = preencher_com_um_dois_tres(6,matriz)
    console.log(matriz19)


    const matriz20 = gerar_matriz_quadrada(6)
    


}

function preencher_com_um_dois_tres(ordem,matriz1){
    for (let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){

            if(i === 0 || j === 0){
                matriz1[i][j] = 1
            } else if (i === 1 || j === 1){
                matriz1[i][j] = 2
            } else if (i === 2 || j === 2){
                matriz1[i][j] = 3
            }

        }
        
    }
    return matriz1
}

main()