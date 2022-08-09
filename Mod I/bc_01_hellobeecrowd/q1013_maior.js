import {print,input} from '../io_utils.js'
function main(){
    const ABC = (input('A, B , C: '))
    const divideABC = ABC.split (' ')
    const A = Number(divideABC[0])
    const B = Number(divideABC[1])
    const C = Number(divideABC[2])

    let maior = 0
    const maiorAB=(A+B+Math.abs(A-B))/2
    if (A>B) {
        maior = A
    } else {
        maior = B
    }
    const maiorC=(maior+C+Math.abs(maior-C))/2
    print(`${maiorC} eh o maior`)
    


}
main()