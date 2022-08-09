import {input} from '../io_utils.js'
function main(){
    const numeros = input('Digite 2 números (Ex: 1 2): ')
    const [n1,n2] =numeros.split(' ').map(Number)

    function comparar (a,b,){
        let maior = 0
        let menor = 0

        if (a>b) {
            maior = a
            menor = b    
            return (`O maior é ${maior} e o menor, ${menor}`)
        } else if (b>a){
            maior = b
            menor = a
            return (`O maior é ${maior} e o menor, ${menor}`)
        } else {
            return (`Os números informados são iguais.`)
        }
    }
    console.log(comparar(n1,n2))

}
main()