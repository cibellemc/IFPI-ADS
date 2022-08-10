/*
function main
    const [codigo,quantidade] = Number(lines[0]).split(' ').map(Number)

    console.log(`Total: R$`,total(codigo,quantidade))
    
    function total(c,q){
        let valorapagar = 0
        if (c===1){
            valorapagar = (4*q)
        }
        if (c===2){
            valorapagar = (4.5*q)
        }
        if (c===3){
            valorapagar = (5*q)
        }
        if (c===4){
            valorapagar = (2*q)
        }
        if (c===5){
            valorapagar = (1.5*q)
        }
        return valorapagar.toFixed(2)
    }
    
    
}
main()
*/
import {input,print}from '../io_utils.js'
function main(){
   
    // \n nova linha, \t tab \v tab vertical
    print('--------TABELA DE PREÇOS--------')
    const tabeladepreco = [
        {Codigo: '1', Produto:'Cachorro-quente', Valor:'R$ 4.00'},
        {Codigo: '2', Produto:'X-salada', Valor:'R$ 4.50'},
        {Codigo: '3', Produto:'X-bacon', Valor:'R$ 5.00'},
        {Codigo: '4', Produto:'Torrada simples', Valor:'R$ 2.00'},
        {Codigo: '5', Produto:'Refrigerante', Valor:'R$ 1.50'}
    ]
    console.table(tabeladepreco)
    
    const produto = input('Informe o código e a quantidade do item. (Ex: 3 2): ')
    const [codigo, quantidade] = produto.split(' ').map(Number)

    print(`Total: R$`,total(codigo,quantidade))
    
    function total(c,q){
        let valorapagar 
        if (c==1){
            valorapagar = (4*q)
        }
        if (c==2){
            valorapagar = (4.5*q)
        }
        if (c==3){
            valorapagar = (5*q)
        }
        if (c==4){
            valorapagar = (2*q)
        }
        if (c==5){
            valorapagar = (1.5*q)
        }
        return valorapagar.toFixed(2)
    }
    
    
}
main()

