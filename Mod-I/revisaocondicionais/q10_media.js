import { input } from "../io_utils.js";
function main(){
const [nota1,nota2] = (input('Notas (7 8): ')).split(' ').map(Number)
console.log(aprovado(nota1,nota2))
}

function aprovado(n1,n2){
    const media = (n1+n2)/2
    if (media>=0&&media<=4){
        return (`\nNotas: ${n1} e ${n2}\nMédia: ${media}\nConceito: E\nREPROVADO`)
    } else if (media>=4&&media<6){
        return (`\nNotas: ${n1} e ${n2}\nMédia: ${media}\nConceito: D\nREPROVADO`)
    } else if (media>=6&&media<7.5){
        return (`\nNotas: ${n1} e ${n2}\nMédia: ${media}\nConceito: C\nAPROVADO`)
    }  else if (media>=7.5&&media<9){
        return (`\nNotas: ${n1} e ${n2}\nMédia: ${media}\nConceito: B\nAPROVADO`)
    } else {
        return (`\nNotas: ${n1} e ${n2}\nMédia: ${media}\nConceito: A\nAPROVADO`)
    }
}

main()