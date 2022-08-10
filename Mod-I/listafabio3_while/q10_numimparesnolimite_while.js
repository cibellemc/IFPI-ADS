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
    
    if (menor+1===maior){
        console.log('Não há ímpares entre esse intervalo.')

    }else {
        console.log(`\nNúmeros ímpares entre ${menor} e ${maior}:`)

        for (let i=menor+1;i<maior;i++){
            if(i%2!=0){
                console.log(i)
            }
        }
    }
}
main()