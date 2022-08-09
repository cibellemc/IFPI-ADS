import {input} from '../io_utils.js'
function main(){
    const numeros = input('Digite 3 números (Ex: 1 2 3): ')
    const [n1,n2,n3] =numeros.split(' ').map(Number)

    function comparar (a,b,c){
        let maior = 0
        let menor = 0

        if (a>=b && b>=c){
            maior = a
            menor = c
        } else if (a>=c && c>=b) {
            maior = a
            menor = b    
        } else if (b>=a && a>=c) {
            maior = b
            menor = c
        } else if(b>=c && c>=a) {
            maior = b
            menor = a
        } else if (c>=a && a>=b){
            maior = c
            menor = b
        } else {
            maior = c
            menor = a
        }
        return (`O maior é ${maior}.`)
    }
    console.log(comparar(n1,n2,n3))

}
main()