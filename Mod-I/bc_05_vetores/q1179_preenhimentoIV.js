import prompt from "prompt-sync";
const input = prompt()

function main(){
    let vetor_pares = new Array(5)
    const vetor_impares = new Array(5)
    let count = 0
    let count_par = 0
    let count_impar = 0

    
    while (count < 15){
        
        let numeros = Number(input('Valores: '))

        if (numeros % 2 === 0){

            vetor_pares[count_par] = numeros  
            count_par++

            
        } else {
            vetor_impares[count_impar] = numeros
            count_impar++
            
        }

        if (count_par === 5){
            for (let i = 0; i < 5; i++){
                console.log(`par[${i}] = ${vetor_pares[i]}`)
            }
            count_par = 0
        }
        
        if (count_impar === 5){
            for (let i = 0; i < 5; i++){
                console.log(`impar[${i}] = ${vetor_impares[i]}`)
            }
            count_impar = 0
        }
        count++
    }

    //depois de mostrar e limpar o contador,ele vai receber o restante dos numeros,para mostrar
    //tem que usar a quantidade que sobrou. isso acontece fora da repeticao

    for (let i = 0; i < count_impar; i++){
        console.log(`impar[${i}] = ${vetor_impares[i]}`)
    }

    for (let i = 0; i < count_par; i++){
        console.log(`par[${i}] = ${vetor_pares[i]}`)
    }
        
}
main()