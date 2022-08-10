import { input } from "../io_utils.js";

function main(){

    const numero = Number(input('Informe um número entre 0 e 100: '))

    function isPrime(num){
        //para contador iniciando com 2 e indo ate antes de num
        //se dividir por algum é falso (nao eh primo)
        for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
        return num > 1
    }
    console.log(isPrime(numero))
}
main()