import prompt from "prompt-sync";
const input = prompt()

function main(){
    const repeticao = Number(input('N° de testes: '))
    let i = 0

    while (i<repeticao){
        let [num1,num2] = input('').split(' ').map(Number)
        let tamanho_num1= String(num1).length
        let tamanho_num2 = String(num2).length

        if (0<=tamanho_num1<=1000 && 0<=tamanho_num2<=1000){
           console.log(percorrer(num1,num2))
        }
        i++

    }
}
function percorrer(n1,n2){

    let n1_string = String(n1)
    let n2_string = String(n2)

    let tamanho_primero =  n1_string.length - 1
    let tamanho_segundo =  n2_string.length - 1

    for (let i = tamanho_segundo; i >= 0; i--){


        if (n1_string[tamanho_primero] === n2_string[i]){
            tamanho_primero--
            return true
        }
    } return false
    
}
main()