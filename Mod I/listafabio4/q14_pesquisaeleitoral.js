import prompt from 'prompt-sync'
const input = prompt()

function main(){
    //let voto = Number(input('--- Voto 1: ---'))
    console.log('--- Voto 1: ---')
    
    let votos_serra = 0
    let votos_dilma = 0
    let votos_ciro = 0
    let votos_arvore = 0
    let indecisos = 0
    let outros = 0
    let qtd_entrevistas = 0
    
    show_opcoes()
    let voto = Number(input('Opcão: '))
    qtd_entrevistas = 1


    while (voto!=-1){
        
        if(eh_dilma(voto)){
            votos_dilma++
        } else if (eh_serra(voto)){
            votos_serra++
        }else if(eh_ciro(voto)){
            votos_ciro++
        }else if(nulo_ou_branco(voto)){
            votos_arvore++
        }else if (indeciso(voto)) {
            indecisos++
        }else if (outro(voto)){
            outros++
        }

        qtd_entrevistas++
        console.log(`\n--- Voto ${qtd_entrevistas} ---`)
        show_opcoes()
        voto = Number(input('Opcão: '))
    }

    console.log(`\n----- Quantidade de entevistas: ${qtd_entrevistas-1}`)
    show_votos(votos_serra,votos_dilma,votos_ciro,votos_arvore,indecisos,outros)
    mostrar_percentual(votos_serra,votos_dilma,votos_ciro,votos_arvore,indecisos,outros,qtd_entrevistas)
    vencedor(votos_serra,votos_dilma,votos_ciro)

}

function show_opcoes(){

        console.log('45 - Serra\n13 - Dilma\n23 - Ciro Gomes')
        console.log('98 - Outros\n99 - Indeciso')
        console.log('0 - Nulo/Branco')
}

function show_votos(votos_serra,votos_dilma,votos_ciro,votos_arvore,indecisos,outros){

    console.log(`Serra teve ${votos_serra} voto(s).`)
    console.log(`Dilma teve ${votos_dilma} voto(s).`)
    console.log(`Ciro teve ${votos_ciro} voto(s).`)
    console.log(`Outros candidatos tiveram ${outros} voto(s).`)
    console.log(`Houve(ram) ${votos_arvore} voto(s) nulo(s) ou em branco.`)
    console.log(`Houve(ram) ${indecisos} indeciso(s).`)
}
function mostrar_percentual(votos_serra,votos_dilma,votos_ciro,votos_arvore,indecisos,outros,qtd_entrevistas){
   
    const percentual_votos_dilma = porcentagem_de_votos(votos_dilma,qtd_entrevistas)
    const percentual_votos_ciro = porcentagem_de_votos(votos_ciro,qtd_entrevistas) 
    const percentual_votos_serra = porcentagem_de_votos(votos_serra,qtd_entrevistas) 
    const percentual_indecisos = porcentagem_de_votos(indecisos,qtd_entrevistas) 
    const percentual_outros = porcentagem_de_votos(outros,qtd_entrevistas) 
    const percentual_votos_arvore = porcentagem_de_votos(votos_arvore,qtd_entrevistas) 
    
    console.log(`\n----- Percentual de votos -----`)
    console.log(`Dilma: ${percentual_votos_dilma}%`)
    console.log(`Serra: ${percentual_votos_serra}%`)
    console.log(`Ciro: ${percentual_votos_ciro}%`)
    console.log(`Outros: ${percentual_outros}%`)
    console.log(`Indecisos: ${percentual_indecisos}%`)
    console.log(`Nulos ou brancos: ${percentual_votos_arvore}%`)
}

function vencedor(votos_serra,votos_dilma,votos_ciro){

    console.log('\n----- Resultado das eleições -----')

    if (votos_serra > votos_dilma && votos_serra > votos_ciro){
        console.log('Serra é o novo presidente!')
    } else if(votos_ciro > votos_dilma && votos_ciro > votos_serra){
        console.log('Ciro é o novo presidente!')
    } else if (votos_dilma > votos_serra && votos_dilma > votos_ciro) {
        console.log('Dilma é a nova presidente!')
    } else {
        console.log('Necessário realização de 2° turno.')
    }
}
function eh_serra(voto){
    return (voto===45)
}

function eh_dilma(voto){
    return (voto===13)
}

function eh_ciro(voto){
    return (voto===23)
}

function nulo_ou_branco(voto){
    return (voto===0)
}

function indeciso(voto){
    return (voto===99)
}

function outro(voto){
    return (voto===98)
}

function porcentagem_de_votos(qtd_votos, qtd_entrevistas){
    return ((qtd_votos/(qtd_entrevistas-1))*100).toFixed(2)

}
main()