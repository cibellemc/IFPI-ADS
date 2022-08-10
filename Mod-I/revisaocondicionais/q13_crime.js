import { input } from "../io_utils.js";
function main(){
    let resposta = []
    let soma = 0

    resposta.push(input('Telefonou para a vítima? (S/N) '))
    resposta.push(input('Esteve no local do crime? (S/N) '))
    resposta.push(input('Mora perto da vítima? (S/N) '))
    resposta.push(input('Devia para a vítima? (S/N) '))
    resposta.push(input('Já trabalhou com a vítima? (S/N) '))
    //console.log(resposta)

    for (let r of resposta){
        if (r==='S'||r==='s'){
            soma += 1
        }
    } 

    if (soma===2){
        console.log('Suspeito.')
    } else if (soma===3||soma===4){
        console.log('Cúmplice.')
    } else if (soma===5){
        console.log('Assassino.')
    } else {
        console.log('Inocente.')

    }
    }


main()