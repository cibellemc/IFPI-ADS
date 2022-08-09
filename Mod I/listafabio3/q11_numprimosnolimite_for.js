import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const LimiteSuperior = Number(input('Limite superior: '))
    const LimiteInferior = Number(input('Limite inferior: '))

    let maior,menor

    if (LimiteSuperior> LimiteInferior){
        maior = LimiteSuperior
        menor = LimiteInferior

    } else {
        maior = LimiteInferior
        menor = LimiteSuperior
    }
    
    if (menor + 1 === maior){
        console.log('Não há primos entre esse intervalo.')

    }else {
        console.log(`\nNúmeros primos entre ${menor} e ${maior}:`)

        for (let i = menor+1; i < maior ; i++){
            if (isPrime(i)){
                console.log(i)
            } 
        }
}

function isPrime(num){

    for (let i = 2; i < num ; i++){
        if (num % i === 0){
            return false
        }
    } return num>2
}
}
main()