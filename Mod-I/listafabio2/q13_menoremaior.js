import { input } from "../io_utils.js";
function main(){
    const cinconumeros  = input('Informe 5 números. (Ex: 1 2 3 4 5): ')
    const [num1,num2,num3,num4,num5] = cinconumeros.split(' ').map(Number)
    let maior = 0
    let menor = 0

    function informar_menoremaior(n1,n2,n3,n4,n5){
        if (n1>n2){
            maior = n1
            menor = n2
        }   maior = n2
            menor = n1

        if (n3>maior){
            maior = n3
        }else if (n3<menor){
            menor=n3
        }

        if (n4>maior){
            maior = n4
        }else if (n4<menor){
            menor=n4
        }

        if (n5>maior){
            maior = n5
        }else if (n5<menor){
            menor=n5
        }
    return (`O maior é ${maior} e o menor é ${menor}`)
    }
console.log(informar_menoremaior(num1,num2,num3,num4,num5))
}
main()