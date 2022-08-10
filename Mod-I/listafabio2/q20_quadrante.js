import {input,print} from '../io_utils.js'
function main(){
    const angulo = Number(input('Valor do ângulo. (Em graus. Ex: 352): '))

    function informarquadrante (a){
        if (a<=90){
            return ('Primeiro quadrante.')
        } else if (a<=180){
            return (`Segundo quadrante.`)
        } else if (a<=270){
            return (`Terceiro quadrante.`)
        } else if(a<=360){
            return ('Quarto quadrante.') 
        } else return ('Informe um ângulo entre 0 e 360°.')
        
    }
    print(informarquadrante(angulo))
}
main()