function main(){
    let vetor = new Array(100)
    let count = 0
    
    
    while (count < 100){
        vetor[count] = Number(lines[count])
        
        if (vetor[count] <= 10){
            console.log(`A[${count}] = ${vetor[count].toFixed(1)}`)
        }
        count++
    }
}
main()