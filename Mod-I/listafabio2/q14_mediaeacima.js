import { input,print } from "../io_utils.js";
function main(){
    const cinconotas = input('Informe 5 números. (Ex: 1 3 5 7 9): ')
    const [nota1,nota2,nota3,nota4,nota5] = cinconotas.split(' ').map(Number)

    function media(n1,n2,n3,n4,n5){
    const media = (n1+n2+n3+n4+n5)/5
    let nota = []
        if (n1>media){
            nota.push(n1)
        }
        if (n2>media){
            nota.push(n2)
        } 
        if (n3>media){
            nota.push(n3)
        } 
        if (n4>media){
            nota.push(n4)
        } 
        if (n5>media){
            nota.push(n5)
        }
        return (`${media}. As notas acima da média são: ${nota}`)
    }
print(`Média da turma =`, media(nota1,nota2,nota3,nota4,nota5))

}
main()