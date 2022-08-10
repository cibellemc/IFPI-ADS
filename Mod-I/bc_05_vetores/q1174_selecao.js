import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let vetor = new Array(100)
    let count = 0
    
    
    while (count < 5){
        vetor[count] = Number(input(`${count+1}º número: `))
        
        if (vetor[count] <= 10){
            console.log(`A[${count}] = ${vetor[count]}`)
        }
        count++
    }
}
main()