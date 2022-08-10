import { input } from "../io_utils.js";
function main(){
const num = Number(input('Num: '))
if (num-Math.trunc(num)===0){
    console.log('Número inteiro')
} else {
    console.log('Número decimal.')
}
}
main()