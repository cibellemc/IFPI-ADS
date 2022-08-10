import { input } from '../io_utils.js'

function main(){
    let contador = 1
    let linha = ''
    const quantidade = Number(input('Quantidade de linhas: '))

    //o PUM é o 4° quarto numero da linha, se botar so 3 (quantidade de
    //numeros a exibir), fica linhas a menos
    while (contador<=quantidade*4){
        
        //colocando o if antes de acrescentar o cont, ele testa primeiro e
        //soma 1 ao contador
        
        //o contador quebra no 4
        if (contador%4===0){
            linha += 'PUM'
            console.log(linha)
            contador++
            linha = ''
        }
        
        linha += (`${contador} `)
        contador++
    }
    
}

main()

//------------ bee
function main(){
    
    let contador = 1
    let linha = ''
    const quantidade = Number(lines[0])

    while (contador<=quantidade*4){
        
        if (contador%4===0){
            linha += 'PUM'
            console.log(linha)
            contador++
            linha = ''
        }
        
        linha += (`${contador} `)
        contador++
    }
        
}
