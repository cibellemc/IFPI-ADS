function main(){
    
    const N = Number(lines[0])
    let vetorX = new Array(N)
    
    vetorX = (lines[1]).split(' ').map(Number)

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