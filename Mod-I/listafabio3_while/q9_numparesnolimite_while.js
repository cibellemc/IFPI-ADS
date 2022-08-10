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
    
    let i = menor+1
    
    if (menor+1===maior){
        console.log('Não há pares entre esse intervalo.')

    }else {
        console.log(`\nNúmeros pares entre ${menor} e ${maior}:`)
        
        while(i<maior){
            if(i%2===0){
                console.log(i)
        }
        i++
        }
    }
}
main()