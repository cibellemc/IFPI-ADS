/*
function main (){
    const [N1,N2,N3,N4] = (lines[0]).split(' ').map(Number)
    const media = ((N1*2)+(N2*3)+(N3*4)+(N4*1))/10
    let novanota,mediafinal = 0
    
    const aprovado =  function verificaraprovação(n1,n2,n3,n4){
        if (media>=7){
            return (`Media: ${media.toFixed(1)}\vAluno aprovado.`)
        } else if (media<5){
            return (`Media: ${media.toFixed(1)}\vAluno reprovado.`)
        } else 
        console.log(`Media: ${media.toFixed(1)}\vAluno em exame.`)
        novanota = Number(lines[1])
        mediafinal = (media+novanota)/2
            if (mediafinal>=5){
                return (`Nota do exame: ${novanota.toFixed(1)}\vAluno aprovado.\vMedia final: ${mediafinal.toFixed(1)}`)
            }else return (`Nota do exame: ${novanota.toFixed(1)}\vAluno reprovado.\vMedia final: ${mediafinal.toFixed(1)}`)
        
    }
    
  
    console.log(aprovado(N1,N2,N3,N4))

}
main()

*/
import {input,print}from '../io_utils.js'
function main (){
    const [N1,N2,N3,N4] = (input('Informe 4 notas: ')).split(' ').map(Number)
    const media = ((N1*2)+(N2*3)+(N3*4)+(N4*1))/10
    let novanota,mediafinal = 0
    
    const aprovado =  function verificaraprovação(n1,n2,n3,n4){
        if (media>=7){
            return ('Aluno aprovado.')
        } else if (media<5){
            return ('Aluno reprovado')
        } else 
        print(`Média: ${media}\vAluno em exame.`)
        novanota = Number(input('Informe uma nova nota: '))
        mediafinal = (media+novanota)/2
            if (mediafinal>=5){
                return (`Nota do exame: ${novanota}\vAluno aprovado.\vMédia final: ${mediafinal}`)
            }else return (`Nota do exame: ${novanota}\vAluno reprovado.\vMédia final: ${mediafinal}`)
        
    }
    
  
    print(aprovado(N1,N2,N3,N4))

}
main()


