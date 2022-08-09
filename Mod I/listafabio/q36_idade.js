import { print,input } from "../io_utils.js";
function main(){
const idade = Number(input('Quantos anos você tem? '))
const meses = Number(input('Quantos meses se passaram desde seu aniversário? '))
const dias = Number(input('E quantos dias? (Considere 1 mês = 30 dias) '))
const totaldias = idade*365+meses*30+dias

print(`Você já viveu ${totaldias} dias`)

}
main()