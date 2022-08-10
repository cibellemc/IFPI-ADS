function main(){
    
    const T = Number(lines[0])
    const vetor = new Array(1000)

        for (let i = 0; i < 1000; i++){
            vetor[i]  = i%T
            console.log(`N[${i}] = ${vetor[i]}`)
        }
}

main()