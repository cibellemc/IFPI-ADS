
import { print,input } from "../io_utils.js";
function main(){
    const x1 = Number(input('Informe o ponto x1: '))
    const y1 = Number(input('Informe o ponto y1: '))
    const x2 = Number(input('Informe o ponto x2: '))
    const y2 = Number(input('Informe o ponto y2: '))

//math.pow faz potenciacao 
//math.sqrt faz raiz quadrada
    const d = Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2))
    print(`d = ${d}`)
}
main()