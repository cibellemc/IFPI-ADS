import { print,input } from "../io_utils.js";

function main(){
    const a = Number(input('a: '))
    const b = Number(input('b: '))
    const c = Number(input('c: '))
    const d = Number(input('d: '))
    const e = Number(input('e: '))
    const f = Number(input('f: '))
    const x = (c*e - b*f)/(a*e - b*d)
    const y= (a*f - c*d)/(a*e - b*d)
    print(`x= ${x} e y=${y}`)



}
main()