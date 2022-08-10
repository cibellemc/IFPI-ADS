import{input} from '../io_utils.js'

function main(){

    const numeros = input('Digite 3 ângulos (Ex: 60 60 60): ')
    const [l1,l2,l3] =numeros.split(' ').map(Number)
    let tipo

    function tipotriangulo (n1,n2,n3){
        
        if (n1+n2<n3 || n2+n3<n1 || n3+n1<n2){
            tipo= ('Não é triângulo.')
        } else if (n1==0 || n2==0 || n3==0){
            tipo = ('Não é triângulo')
        } else if (n1==n2 && n2==n3){
            tipo= ('Triângulo equilátero.')
        } else if (n1==n2|| n2==n3 || n3==n1) {
            tipo= ('Triângulo isósceles.')
        } else {
            tipo= ('Triângulo escaleno.')
        }
        return tipo
    }
console.log(tipotriangulo(l1,l2,l3))

}
main()