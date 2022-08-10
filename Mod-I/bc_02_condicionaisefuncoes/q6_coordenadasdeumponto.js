/*
A seguir, determine qual o quadrante ao qual pertence o ponto,
ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).
*/

/*
import { input,print } from "../io_utils.js";

function main(){

const [x,y] = (lines[0]).split(' ').map(Number)

const localizacao = function quadrante(abscissa,ordenada){
    if (abscissa===0&&ordenada===0){
        return ('Origem')
    } else if (abscissa===0){
        return ('Eixo Y')
    } else if (ordenada===0){
        return ('Eixo X')
    } else if (abscissa>0&&ordenada>0){
        return ('Q1')
    } else if (abscissa<0&&ordenada>0){
        return ('Q2')
    } else if (abscissa<0&&ordenada<0){
        return ('Q3')
    } else if (abscissa>0&&ordenada<0){
        return ('Q4')
    }

}
console.log(localizacao(x,y))
}
main()
*/

import { input,print } from "../io_utils.js";

function main(){

const [x,y] = (input('x,y: ')).split(',').map(Number)

const localizacao = function quadrante(abscissa,ordenada){
    if (abscissa==0&&ordenada==0){
        return ('Origem')
    } else if (abscissa==0){
        return ('Eixo Y')
    } else if (ordenada==0){
        return ('Eixo X')
    } else if (abscissa>0&&ordenada>0){
        return ('Q1')
    } else if (abscissa<0&&ordenada>0){
        return ('Q2')
    } else if (abscissa<0&&ordenada<0){
        return ('Q3')
    } else if (abscissa>0&&ordenada<0){
        return ('Q4')
    }

}
print(localizacao(x,y))
}
main()
