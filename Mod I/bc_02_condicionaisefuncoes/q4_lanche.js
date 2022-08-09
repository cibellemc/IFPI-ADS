import {input,print}from '../io_utils.js'
function main(){
   
    // \n nova linha, \t tab \v tab vertical
    print('--------TABELA DE PREÇOS--------')
    print('Codigo\tProduto \tValor\v1\tCachorro-quente\tR$ 4.00\v2\tX-salada\tR$ 4.50\v3\tX-bacon \tR$ 5.00\v4\tTorrada simples\tR$ 2.00\v5\tRefrigerante\tR$ 1.50\n')
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