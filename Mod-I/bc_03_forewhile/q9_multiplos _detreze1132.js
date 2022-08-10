import prompt from 'prompt-sync'
const input = prompt()
function main(){

    const num1 = Number(input('N° 1: '))
    const num2 = Number(input('N° 2: '))
    
    let maior,menor
    let soma = 0
    
    if(num1>num2){
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }
    while (menor<=maior){

        if (!(menor%13===0)) {
            soma+=menor
        }
        //console.log(menor)
        menor++
    }
    console.log(soma)

    

    //console.log(maior,menor)
    //console.log(menor,maior)

}
main()

//------------ bee
function main(){

    const num1 = Number(lines[0])
    const num2 = Number(lines[1])
    
    let maior,menor
    let soma = 0
    
    if(num1>num2){
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }
    while (menor<=maior){

        if (menor%13!==0) {
            soma+=menor
        }
        menor++
    }
    console.log(soma)
}
main()