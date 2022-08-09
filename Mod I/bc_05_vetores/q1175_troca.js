import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let count = 0
    let count1 = 0
    let vetor_N = new Array(20)
    let vetor_inversoN = new Array(20)

    while (count < 20){
        vetor_N[count] = Number(input('Num: '))
        count++
    }

    for (let i = vetor_N.length - 1 ; i >= 0; i--){
        vetor_inversoN[count1] = vetor_N[i]
        console.log(`N[${count1}] = ${vetor_inversoN[i]}`)
        count1++

    }
    


}
main()