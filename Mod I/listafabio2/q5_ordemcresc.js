import{input} from '../io_utils.js'
function main(){
    const numeros = input('Digite 3 números (Ex: 1 2 3): ')
    const [n1,n2,n3] =numeros.split(' ').map(Number)
    let maior,menor,mediocre
    
    function ordenar(n1,n2,n3){
        if (n1>n2 && n1>n3){
            maior=n1
            if (n2>n3){
                menor=n3
                mediocre=n2
            } else {
                menor=n2
                mediocre=n3
            }
        } else if (n1<n2 && n1<n3){
            menor = n1
            if (n2>n3){
                maior=n2
                mediocre=n3
            }else {
                maior=n3
                mediocre=n2
            }
        } else {
            mediocre = n1
            if (n2>n3){
                maior=n2
                menor=n3
            } else {
                maior=n3
                menor=n2
            }
        }
        return [menor,mediocre,maior]
    }
console.log(ordenar(n1,n2,n3))
}
main()