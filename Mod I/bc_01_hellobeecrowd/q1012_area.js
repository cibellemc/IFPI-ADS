import {print,input} from '../io_utils.js'
function main(){

    const abc = (input('Digite os valores A,B e C: '))
    const divideabc = abc.split (' ')

    const a = Number(divideabc[0])
    const b = Number(divideabc[1])
    const c = Number(divideabc[2])

    const areatri = a*c/2
    const areacir = c**2 *3.14159
    const areatra = (a+b)*c/2
    const areaqua = b**2
    const arearet = a*b

    print(`TRIANGULO: ${areatri.toFixed(3)}`)
    print(`CIRCULO:: ${areacir.toFixed(3)}`)
    print(`TRAPEZIO: ${areatra.toFixed(3)}`)
    print(`QUADRADO: ${areaqua.toFixed(3)}`)
    print(`RETANGULO: ${arearet.toFixed(3)}`)

}
main()





