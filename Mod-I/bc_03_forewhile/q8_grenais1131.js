import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let [gols_Inter, gols_Gremio] = (input('Gols (Inter Gremio): ')).split(' ').map(Number)
    let novo_grenal = Number(input('Novo grenal (1-sim 2-nao): '))
    
    let quantos_grenais = 1
    let vitorias_inter = 0
    let vitorias_gremio = 0
    let num_empates = 0
    let gols,vencedor
   
    if(gols_Inter>gols_Gremio){
        vitorias_inter++
    } else if (gols_Gremio>gols_Inter) {
        vitorias_gremio++
    } else {
        num_empates++
    }
    
    //5 4 ,7 6 ,5 6
    while (novo_grenal===1){
        quantos_grenais++
        gols = (input('Gols (Inter Gremio): ')).split(' ')
        gols_Inter = Number(gols[0])
        gols_Gremio = Number(gols[1])

        if(gols_Inter>gols_Gremio){
            vitorias_inter++
        } else if (gols_Gremio>gols_Inter) {
            vitorias_gremio++
        } else {
            num_empates++
        }
        
        novo_grenal = Number(input('Novo grenal (1-sim 2-nao): '))
    }

    
    if (vitorias_inter>vitorias_gremio) {
        vencedor = ('Inter venceu mais')
    } else if (vitorias_gremio>vitorias_inter){
        vencedor = ('Gremio venceu mais') 
    } else {
        vencedor = ('Nao houve vencedor')
    }

    console.log(`${quantos_grenais} grenais`)
    console.log(`Inter: ${vitorias_inter}`)
    console.log(`Gremio: ${vitorias_gremio}`)
    console.log(`Empates: ${num_empates}`)
    console.log(vencedor)
}

/*function verificar_ganhador(Inter,Gremio){

    if (Inter>Gremio){
        return ('Inter')
    } else {
        return ('Gremio')    
    }
}*/
main()

//------------ bee
function main(){
    let contador = 2
    let quantos_grenais = 1
    let vitorias_inter = 0
    let vitorias_gremio = 0
    let num_empates = 0
    let gols,vencedor
    
    let [gols_Inter, gols_Gremio] = (lines[0]).split(' ').map(Number)
    console.log('Novo grenal (1-sim 2-nao)')
    let novo_grenal = Number(lines[1])
   
    if(gols_Inter>gols_Gremio){
        vitorias_inter++
    } else if (gols_Gremio>gols_Inter) {
        vitorias_gremio++
    } else {
        num_empates++
    }
    
    while (novo_grenal===1){
        quantos_grenais++
        gols = (lines[contador]).split(' ')
        gols_Inter = Number(gols[0])
        gols_Gremio = Number(gols[1])

        if(gols_Inter>gols_Gremio){
            vitorias_inter++
        } else if (gols_Gremio>gols_Inter) {
            vitorias_gremio++
        } else {
            num_empates++
        }
        
        contador++
        console.log('Novo grenal (1-sim 2-nao)')
        novo_grenal = Number(lines[contador])
        contador++
    }

    
    if (vitorias_inter>vitorias_gremio) {
        vencedor = ('Inter venceu mais')
    } else if (vitorias_gremio>vitorias_inter){
        vencedor = ('Gremio venceu mais') 
    } else {
        vencedor = ('Nao houve vencedor')
    }

    console.log(`${quantos_grenais} grenais`)
    console.log(`Inter:${vitorias_inter}`)
    console.log(`Gremio:${vitorias_gremio}`)
    console.log(`Empates:${num_empates}`)
    console.log(vencedor)
}