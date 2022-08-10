import { pedirtxt, pedir_varios_numeros } from '../pedirdados.js'

function main(){
    let num_matricula = pedirtxt('Matricula: ')
    let num_alunos = 0
    let num_aprovados = 0
    let num_reprovados = 0
    
    while (num_matricula!=0){
        num_alunos++
        let [nota1,nota2,nota3] = pedir_varios_numeros('Notas (10 4 7): ')
    
        let media = media_final(nota1,nota2,nota3)
        console.log(`Media: ${media}`)

        if (aprovado(media)){
            console.log('Aprovado\n')
            num_aprovados++
            
        } else {
            console.log('Reprovado\n')
            num_reprovados++
        }
        num_matricula = pedirtxt('Matricula: ')
    }
    console.log(`\nTotal de alunos: ${num_alunos}`)
    console.log(`Total de aprovados: ${num_aprovados}`)
    console.log(`Total de reprovados: ${num_reprovados}`)
}

function aprovado(media){
    return (media>=7)
}

function media_final(n1,n2,n3){
    const media = (2*n1+3*n2+5*n3)/10
    return media
}
main()