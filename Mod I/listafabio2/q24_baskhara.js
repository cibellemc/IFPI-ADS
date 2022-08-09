import { input,print } from "../io_utils.js";
function main(){

const a = Number(input('Coeficiente a = '))
const b = Number(input('Coeficiente b = '))
const c = Number(input('Coeficiente c = '))

function delta(a,b,c){
    const resultadodelta = (b*b-4*a*c)
    return resultadodelta
}
print(`Delta =`, delta(a,b,c))

function calcularaizes (a,b){
    if (delta(a,b,c)>0){
        const x1 = (-b+Math.sqrt(delta(a,b,c)))/(2*a)
        const x2 = (-b-Math.sqrt(delta(a,b,c)))/(2*a)
        return (`X1 = ${x1.toFixed(2)} X2 = ${x2.toFixed(2)} `)
    } return (`Não é possível calcular raiz de número negativo.`)
}
print(calcularaizes(a,b,c))
}
main()