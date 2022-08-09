import {print,input} from '../io_utils.js'

function main(){
    
    const kg = Number(input('Informe uma massa em kg: '))

    const g = kg*1000

    print(`A massa em g é ${g}`)

}
main()