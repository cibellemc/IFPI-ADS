import{print, input} from '../io_utils.js'

function main(){
    
    const x1y1 = (input('X1,Y1: '))
    const v1 = x1y1.split (' ')
    const x1 = (v1[0])
    const y1 = (v1[1])

    const x2y2 = (input('X2,Y2: '))
    const v2 = x2y2.split (' ')
    const x2 =(v2[0])
    const y2 = (v2[1])

    const distancia = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))

    print(`${distancia.toFixed(4)}`)

    


}
main()