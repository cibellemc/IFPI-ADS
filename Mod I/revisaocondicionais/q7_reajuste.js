import {input } from "../io_utils.js";

function main(){

    const salario = Number(input('Salário: R$'))

    if (salario>0&&salario<=280){
        console.log(calcularreajuste(salario,20))
    }else if(salario>280&&salario<=700){
        console.log(calcularreajuste(salario,15))
    }else if(salario>700&&salario<1500){
        console.log(calcularreajuste(salario,10))
    }else if(salario>=1500){
        console.log(calcularreajuste(salario,5))
    }else {
        console.log('Valor inválido.')
    }
}
main()

function calcularreajuste(sal,porcento){
    const aumento = (sal*porcento/100)
    const novosal = sal+(sal*porcento/100)
    return (`Salário antes do reajuste: R$${sal}\nPercentual de aumento: ${porcento}%\nValor do aumento: R$${aumento}\nNovo sálario: R$${novosal}`)
}
    /*if (salario>0&&salario<=280){
        console.log(reajuste20(salario))
    }else if(salario>280&&salario<=700){
        console.log(reajuste15(salario))
    }else if(salario>700&&salario<1500){
        console.log(reajuste10(salario))
    }else if(salario>=1500){
        console.log(reajuste5(salario))
    }else {
        console.log('Valor inválido.')
    }*/
/*
function reajuste20(sal){
    const porcento=20
    const aumento = (sal*porcento/100)
    const novosal = sal+(sal*porcento/100)
    return (`Salário antes do reajuste: R$${sal}\nPercentual de aumento: ${porcento}%\nValor do aumento: R$${aumento}\nNovo sálario: R$${novosal}`)
}

function reajuste15(sal){
    const porcento=15
    const aumento = (sal*porcento/100)
    const novosal = sal+(sal*porcento/100)
    return (`Salário antes do reajuste: R$${sal}\nPercentual de aumento: ${porcento}%\nValor do aumento: R$${aumento}\nNovo sálario: R$${novosal}`)
}

function reajuste10(sal){
    const porcento=10
    const aumento = (sal*porcento/100)
    const novosal = sal+(sal*porcento/100)
    return (`Salário antes do reajuste: R$${sal}\nPercentual de aumento: ${porcento}%\nValor do aumento: R$${aumento}\nNovo sálario: R$${novosal}`)
}

function reajuste5(sal){
    const porcento=5
    const aumento = (sal*porcento/100)
    const novosal = sal+(sal*porcento/100)
    return (`Salário antes do reajuste: R$${sal}\nPercentual de aumento: ${porcento}%\nValor do aumento: R$${aumento}\nNovo sálario: R$${novosal}`)
}

main()*/

