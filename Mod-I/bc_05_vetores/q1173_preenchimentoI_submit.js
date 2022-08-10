function main(){
    let vetor = new Array(10)

    let numero_inicial = Number(lines[0])
    let count = 1

    if (numero_inicial <= 50){

        vetor[0] = numero_inicial
        console.log(`N[0] = ${vetor[0]}`)

        
        while (count < 10){
            vetor[count] = vetor[count-1]*2
            
            console.log(`N[${count}] = ${vetor[count]}`)
            count++
        }
    }
}
main()