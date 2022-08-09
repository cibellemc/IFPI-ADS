/*Leia 4 valores inteiros A, B, C e D. Se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A
 e B e se C e D, ambos,forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão "Valores nao aceitos"*/


 /*function main (){
    const A = (lines[0])
    const B = (lines[1])
    const C = (lines[2])
    const D = (lines[3])

    
    const resposta = function verificar(n1,n2,n3,n4){
        if (n2>n3&&n4>n1){
            if (n3+n4>n1+n2){
                if(n3>0&n4>0){
                    if (n1%2==0){
                        return ('Valores aceitos')
                    }
                }
            }
        } else {
            return ('Valores nao aceitos')
        }
        
    }
    
    console.log(resposta(A,B,C,D))

}
main()*/

import {input,print}from '../io_utils.js'
function main (){
    const A = Number(input('A = '))
    const B = Number(input('B = '))
    const C = Number(input('C = '))
    const D = Number(input('D = '))

    
    const resposta = function verificar(n1,n2,n3,n4){
        if (n2>n3&&n4>n1){
            if (n3+n4>n1+n2){
                if(n3>0&&n4>0){
                    if (n1%2==0){
                        return ('Valores aceitos')
                    } else return ('Valores nao aceitos')
                } else return ('Valores nao aceitos')
            } else return ('Valores nao aceitos')
        } else return ('Valores nao aceitos')
    } 
    
    print(resposta(A,B,C,D))

}
main()



