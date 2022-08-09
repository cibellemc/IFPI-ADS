import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const eleitores = Number(input('Quantidade de eleitores: '))
    
    let votos_lula = 0
    let votos_bozo = 0
    let votos_ciro = 0
    let votos_arvore = 0
    let votos_brancos = 0
    let i = 1
    
    while (i<=eleitores){
        
        console.log(`\n--- Voto ${i} ---`)
        console.log('1 - Lula\n2 - Bolsonaro\n3 - Ciro Gomes')
        console.log('9 - Nulo\n0 - Branco')
        let voto = Number(input('Opcão: '))

        if(eh_lula(voto)){
            votos_lula++
        } else if (eh_bolsonaro(voto)){
            votos_bozo++
        }else if(eh_ciro(voto)){
            votos_ciro++
        }else if(arvores_votam_nulo(voto)){
            votos_arvore++
        }else {
            votos_brancos++
        }
        i++
    }

    show_votos(votos_lula,votos_bozo,votos_ciro,votos_arvore,votos_brancos)
    vencedor(votos_lula,votos_bozo,votos_ciro)
}

function show_votos(votos_lula,votos_bozo_,votos_ciro,votos_arvore,votos_brancos){
    console.log(`\nLula teve ${votos_lula} voto(s).`)
    console.log(`Bolsonaro teve ${votos_bozo_} voto(s).`)
    console.log(`Ciro teve ${votos_ciro} voto(s).`)
    console.log(`Houve(ram) ${votos_arvore} voto(s) em branco.`)
    console.log(`Houve(ram) ${votos_brancos} voto(s) nulo(s).`)
}

function vencedor(votos_lula,votos_bozo_,votos_ciro){

    console.log('\n----- Resultado das eleições -----')

    if (votos_lula > votos_bozo_ && votos_lula > votos_ciro){
        console.log('Lula é o novo presidente!')
    } else if(votos_ciro > votos_bozo_ && votos_ciro > votos_lula){
        console.log('Ciro é o novo presidente!')
    } else if (votos_bozo_ > votos_lula && votos_bozo_ > votos_ciro) {
        console.log('Bolsonaro é o novo presidente!')
    } else {
        console.log('Necessário realização de 2° turno.')
    }
}
function eh_bolsonaro(voto){
    return (voto===2)
}

function eh_lula(voto){
    return (voto===1)
}

function eh_ciro(voto){
    return (voto===3)
}

function arvores_votam_nulo(voto){
    return (voto===9)
}

main()