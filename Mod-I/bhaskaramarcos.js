import {input,print}from './io_utils.js'
function main(){
    const a = Number(input('A = '))
    const b = Number(input('B = '))
    const c = Number(input('C = '))
    
    const raizes = bhaskara(a,b,c)
    
        if (raizes){
            print(`R1 = ${raizes[0]}\nR2 = ${raizes[1]}`)
        } else {
            print('Impossivel calcular.')
        }

    function bhaskara(a,b,c){
        if ((b**2-4*a*c)<0|| a==0){
            return false
            
        } else {
            const raiz_1 = ((-b + Math.sqrt(b*b-4*a*c))/ (2*a))
            const raiz_2 = ((-b - Math.sqrt(b*b-4*a*c))/ (2*a))
            return [raiz_1.toFixed(5), raiz_2.toFixed(5)]
        }
    
    }
}
main()