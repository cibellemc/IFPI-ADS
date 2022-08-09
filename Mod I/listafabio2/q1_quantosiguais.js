import {input} from '../io_utils.js'
function main(){
    const numeros = input('Digite 3 números (Ex: 1 2 3): ')
    const [n1,n2,n3] =numeros.split(' ').map(Number)

    function comparar (a,b,c){
        let iguais = 0
        if (a==b && b==c){
             iguais = 3
        }else if (a==b||a==c||b==c) {
            iguais = 2
        } else if(a!=b && b!=c) {
            iguais = 0  
        }
        return iguais
    }
    console.log(`Há`, comparar(n1,n2,n3), `numeros iguais`)

}
main()