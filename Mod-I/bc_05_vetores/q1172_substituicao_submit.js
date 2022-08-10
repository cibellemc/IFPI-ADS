
function main(){
    let vetor = new Array(10)
    let count = 0

    while (count < 10){
        vetor[count] = Number(lines[count])
        count++
    }

    for (let i in vetor){
        if (vetor[i] <= 0){
            vetor[i] = 1
        }
    
        console.log(`X[${i}] = ${vetor[i]}`)
    }
}
main()