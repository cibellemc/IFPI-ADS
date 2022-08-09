import  prompt from "prompt-sync";
const input = prompt()

function main(){
    
    const N = Number(input('Qtd numeros: '))
    let vetorX = new Array(N)
    
    vetorX = (input(`Números: `)).split(' ').map(Number)
    console.log(vetorX)

    let menor = vetorX[0]
    let posicao = 0


    for (let i = 0; i < N; i++) {
        if (vetorX[i] < menor){
            menor = vetorX[i]
            posicao = i
        }
    
    }
    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${posicao}`)
}

main()

/* bee - se fosse pra receber em varias linhas
function main(){
    
    let index = 0
    const N = Number(lines[index++])
    const vetorX = new Array(N)
    let count = 0
    
    while(count < N){
        vetorX[count] = Number(lines[index++])
        count++
    }
    
    let menor = vetorX[0]
    let posicao = 1

    for (let i = 1; i < N; i++) {
        if (vetorX[i] < menor){
            menor = vetorX[i]
            posicao = i
        }
    
    }
    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${posicao}`)
}

main()*/