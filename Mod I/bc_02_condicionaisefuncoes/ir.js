/*
function main(){
    const salario = (lines[0])

    const imposto = function calcularfaixas(sal){
    let ir = 0
    if (salario <= 2000){
        return('Isento')
    }else if (salario <= 3000){
        ir = (salario-2000)*0.08
    }else if (salario <= 4500){
        ir = (1000*0.08)+((salario-3000)*0.18)
    }else{
        ir = (1000*0.08)+(1500*0.18)+((salario-4500)*0.28)

    }
    return (`R$ ${ir.toFixed(2)}`)
    }
console.log(imposto(salario))
}

main()
*/
import { input,print } from "../io_utils.js"
function main(){
    const salario=Number(input("Digite seu salário:"))

    const imposto = function calcularfaixas(sal){
    let ir = 0
    if (salario <= 2000){
        // isento
        return('Isento')
    }else if (salario <= 3000){
        // fazer diff entre salario e 2000
        // calcular IR 8% sobre isso
        ir = (salario-2000)*0.08
    }else if (salario <= 4500){
        // cacular IR 8% sobre 1000 (valo entre 2k e 3k)
        // calcular diff entre salario e 3000
        // calcular IR 18% sobre isso
        ir = (1000*0.08)+((salario-3000)*0.18)
    }else{
        // calcular IR 8% sobre 1000
        // calcular IR 18% sobre 1000
        // calcular diff entre salario e 4500
        // calcular IR 28% sobre isso
        ir = (1000*0.08)+(1500*0.18)+((salario-4500)*0.28)

    }
    return (`R$ ${ir.toFixed(2)}`)
    }
print(imposto(salario))
}

main()