import { pedirnum } from '../pedirdados.js'
function main(){

    let pontos_jogador1 = 0
    let pontos_jogador2 = 0
    
    let quem_marcou = pedirnum('Jogador pontuador: ')
    
    if (quem_marcou === 1){
        pontos_jogador1++
    } else if(quem_marcou === 2){
        pontos_jogador2++
    }
    
    //colocar a negacao envolvendo a expressao booleana
   while (!(fim_partida(pontos_jogador1,pontos_jogador2))) {
        
       quem_marcou = pedirnum('Jogador pontuador: ')
        if (quem_marcou === 1){
            pontos_jogador1 ++ 
        } else if(quem_marcou === 2){
            pontos_jogador2 ++ 
        }
    }

    console.log(`\nJogador 1: ${pontos_jogador1} pontos`)
    console.log(`Jogador 2: ${pontos_jogador2} pontos`)

    if (pontos_jogador1 > pontos_jogador2){
        console.log('Jogador 1 venceu')
    } else {
        console.log('Jogador 2 venceu')
    }
}

function fim_partida(pontos1,pontos2){
    let diferenca
    if (pontos1 >= 21 || pontos2 >= 21){
        diferenca = Math.abs(pontos1 - pontos2)
    }
    return (diferenca >= 2)
}
main()