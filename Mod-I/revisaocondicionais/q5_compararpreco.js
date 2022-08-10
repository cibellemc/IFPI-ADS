import {input} from '../io_utils.js'
function main(){
    const [preco1,preco2,preco3] = (input('Informe o valor de três produtos (6.50 7 9.99): ')).split(' ').map(Number)
    console.log(produtovantajoso(compararp1ep2(preco1,preco2,preco3),preco1,preco2))
}
function produtovantajoso(menor,p,q){
    let vantajoso
    if (menor===p){
        vantajoso = 'produto 1'
    }
    else if(menor===q){
        vantajoso = 'produto 2'
    }
    else {
        vantajoso = 'produto 3'
    }
return (`O menor preço é R$${menor.toFixed(2)}.Opte pelo ${vantajoso}`)
}

function compararp1ep2(p1,p2,p3){
    let menor 
    if (p1<=p2){
        menor = p1
        if (p3<=menor){
            menor = p3
        }
    } else {
        menor = p2
        if (p3<=menor){
            menor = p3
        }
    }
return menor
}

main()

