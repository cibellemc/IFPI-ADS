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
    
    let i = menor + 1

    if (menor + 1 === maior){
        console.log('Não há primos entre esse intervalo.')
        
    }else {
        console.log(`\nNúmeros primos entre ${menor} e ${maior}:`)

        while (i < maior){
            if (isPrime(i)){
                console.log(i)
            } 
            i++
        }
}

function isPrime(num){

    let i = 2
    while (i < num){
        if (num % i === 0){
            return false
        }
        i++
    } return num>2
}
}
main()