/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes 
da equação de Bhaskara. Se não for possível calcular as raízes,
mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.
Saída: R1 = -0.29788
       R2 = -1.71212
*/

/*function main(){
    const [A,B,C] = (lines[0]).split(' ').map(Number)

    const delta = B*B-(4*A*C)

    const raizes = function bhaskara(x,y){
        if (delta>0 && x!=0){
            const x1 = ((-y + Math.sqrt(delta))/ (2*x)).toFixed(5)
            const x2 = ((-y - Math.sqrt(delta))/ (2*x)).toFixed(5)
            return (`R1 = ${x1}\nR2 = ${x2}`)
            
        } else {
            return ('Impossivel calcular')
        }
    }

console.log(raizes(A,B))
}
main()*/

import {input,print}from '../io_utils.js'
function main(){
    const A = Number(input('A = '))
    const B = Number(input('B = '))
    const C = Number(input('C = '))

    const delta = B*B-(4*A*C)
    print(delta)

    const raizes = function bhaskara(x,y){
        if (delta>0 && x!=0){
            const x1 = ((-y + Math.sqrt(delta))/ (2*x)).toFixed(5)
            const x2 = ((-y - Math.sqrt(delta))/ (2*x)).toFixed(5)
            return (`R1 = ${x1} \nR2 = ${x2}`)
            
        } else {
            return ('Impossivel calcular')
        }
    }

print(raizes(A,B))
}
main()