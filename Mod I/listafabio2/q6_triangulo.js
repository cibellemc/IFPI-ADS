import{input} from '../io_utils.js'

function main(){

    const numeros = input('Digite 3 ângulos (Ex: 60 60 60): ')
    const [n1,n2,n3] =numeros.split(' ').map(Number)
    let tipo

    function tipotriangulo (n1,n2,n3){
        
        if (n1+n2+n3!=180){
            return ('Não é triângulo.')
        } else if (n1==0 || n2==0 || n3==0) {
            return ('Não existe.')
        } else {
            if (n1==90 || n2==90 || n3==90){
            tipo = ('Triângulo retângulo')
            } else if (n1<90 && n2<90&& n3<90){
            tipo = ('Triângulo acutângulo.')
            } else {
            tipo = ('Triângulo obtusângulo')
            }
            return tipo
        }
    }
console.log(tipotriangulo(n1,n2,n3))

}
main()