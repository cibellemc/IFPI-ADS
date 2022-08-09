/*Leia 3 valores inteiros e ordene-os em ordem crescente. No final,
 mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.*/
 import { input,print } from "../io_utils.js";

function main(){
    const [v1,v2,v3] = (input('informe 3 valores inteiros: ')).split(' ').map(Number)
    
    const ordenado = function ordemcrescente(n1,n2,n3){
    let maior,menor,domeio
    if (v1>v2&&v1>v3){
        maior = v1
        if (v2>v3){
            menor = v3
            domeio = v2
        } else {
            menor = v2
            domeio = v3
        }
    } else if (v1<v2&&v1<v3) {
        menor = v1
        if (v2>v3){
            maior = v2
            domeio = v3
        } else {
        maior = v3
        domeio = v2
        }
    } else {
        domeio = v1
        if (v2>v3){
            maior = v2
            menor = v3
        } else {
        maior = v3
        menor = v2
        }
    }
    return(`${menor}\n${domeio}\n${maior}`)
}    
print(ordenado(v1,v2,v3))
print(`\n${v1}\n${v2}\n${v3}`)
}

main()

/*
function main(){
    const [v1,v2,v3] = (lines[0]).split(' ').map(Number)
    
    const ordenado = function ordemcrescente(n1,n2,n3){
    let maior,menor,domeio = 0
    if (v1>v2&&v1>v3){
        maior = v1
        if (v2>v3){
            menor = v3
            domeio = v2
        } else {
            menor = v2
            domeio = v3
        }
    } else if (v1<v2&&v1<v3) {
        menor = v1
        if (v2>v3){
            maior = v2
            domeio = v3
        } else {
        maior = v3
        domeio = v2
        }
    } else {
        domeio = v1
        if (v2>v3){
            maior = v2
            menor = v3
        } else {
        maior = v3
        menor = v2
        }
    }
    return(`${menor}\n${domeio}\n${maior}`)
}    
console.log(ordenado(v1,v2,v3))
console.log(`\n${v1}\n${v2}\n${v3}`)
}

main()
*/
