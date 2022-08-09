
import { print,input } from "../io_utils.js";

function main(){

    const primeiroponto = input('Informe o ponto x1,y1. (Ex:4.5,5): ')
    const [x1,y1] = primeiroponto.split(',').map(Number)

    const segundoponto = input('Informe o ponto x2,y2. (Ex: -2,6): ')
    const [x2,y2] = segundoponto.split(',').map(Number)

    print(`x1 = ${x1}, y1 = ${y1}, x2 = ${x2}, y2 = ${y2}`)
    print(`Área =`, area(x1,y1,x2,y2))

    function area(x1,y1,x2,y2){
        let altura,largura

        if(x1!=x2 && y1!=y2){

            if (x1>0 && x2<0 || x2>0 && x1<0){
                altura = Math.abs(y1)+Math.abs(y2) 
                largura = Math.abs(x1)+Math.abs(x2) 
                return altura*largura

            }else if(x1<0 && x2<0 || x1>0 && x2>0){
                altura = Math.abs(y1)-Math.abs(y2) 
                largura = Math.abs(x1)-Math.abs(x2) 
                return altura*largura
            }
            
        }else return ('Não é possível calcular a área.')
    }  
}
main()