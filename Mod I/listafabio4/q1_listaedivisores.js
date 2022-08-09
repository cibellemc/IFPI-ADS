
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let num = Number(input('Número: '))

    let divisores = []
    for (let cont=1; cont<=num;cont++){
        if (num%cont===0){
            divisores.push(cont)
        }
    }
    console.log(`Número: ${num}\nDivisores: ${divisores}`)

    while(num!=0){
        //enquanto houver itens ele apaga
        //pop apaga o  ultimo elemento do array
        while(divisores.length) {
            divisores.pop();
         }

        num = Number(input('Novo número: '))

        for (let cont=1; cont<=num;cont++){
            if (num%cont===0){
                divisores.push(cont)
            }
        }
        if (num!=0){
            console.log(`Número: ${num}\nDivisores: ${divisores}`)
        } else {
            console.log(`Número: ${num}\nDivisível por todos os números, exeto ele mesmo.`)

        }
    }

}
main()