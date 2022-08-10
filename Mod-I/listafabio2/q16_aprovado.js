import {print, input} from '../io_utils.js'
function main(){
    const notas = input('Informe 2 notas. (Ex: 7 9): ')
    const [nota1,nota2] = notas.split(' ').map(Number)
    let nota3,mediafinal

    function media1(n1,n2,n3){

    const media = (n1+n2)/2
    if (media >= 7){
        return (`A média é: ${media}.\nAprovado`)

    } else{
        print(`A média é: ${media}`)
      nota3 = Number(input('Informe sua 3º nota: '))
      mediafinal = (media+nota3)/2

        if (mediafinal>=5) {
        return (`\nNova média: ${mediafinal}. \nAprovado`)   
        }return (`\nNova média: ${mediafinal}. \nReprovado`)
    } 
    }

print( media1(nota1,nota2,nota3))

}
main()