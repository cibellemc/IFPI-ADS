import  prompt from "prompt-sync";
const input = prompt()

//pesquisa da net
function main(){
    
    const T = Number(input('Número: '))
    const vetor = new Array(1000)

        for (let i = 0; i < 1000; i++){
            vetor[i]  = i%T
            console.log(`N[${i}] = ${vetor[i]}`)
        }
}

main()

/* nao deu certo
function main(){
    
    const T = Number(input('Número: '))
    let vetor = new Array(1000)
    let count = 0
    let j = 0
    if (T>=2 && T<=50){
    while(count < Math.trunc(vetor.length / T)){
        
        for (let i = 0; i < T; i++){
            vetor[count]  = i
            console.log(`N[${j}] = ${vetor[count]}`)
            j++
        }
        count++
    }
}
}
main()*/

