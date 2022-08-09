import { input } from "../io_utils.js";
function main(){
    const [hrstrabalhadas,valorhora] = input('Horas trabalhadas no mês e valor/hora (Ex: 5 220.00): ').split(' ').map(Number)
    const  salariobruto = hrstrabalhadas*valorhora
    console.log(`Salario bruto: (${hrstrabalhadas}*${valorhora}): R$${salariobruto}`)
    console.log(calculardescontos(salariobruto))
}

function calculardescontos(salbr){
    let ir,porcento,descontos,salarioliq
    const inss = salbr*0.10
    const fgts = salbr*0.11

    if (salbr<=900){
        ir = 'Isento'
        porcento = 0
        descontos = inss
        salarioliq = salbr-descontos   
        return (`(-)IR (${porcento}%): ${ir}\v(-)INSS (10%): R$${inss}\vFGTS (11%): R$${fgts}\vTotal de descontos: R$${descontos}\vSalario liquido: R$${salarioliq}`)

    } else {
        if (salbr>900 &&salbr<=1500){
        ir = salbr*0.05
        porcento = 5
        } else if (salbr>1500&&salbr<=2500){
        ir = salbr*0.10
        porcento = 10
        } else {
        ir = salbr*0.20
        porcento = 20
        }
    }
        descontos = ir+inss
        salarioliq = salbr-descontos
        return (`(-)IR(${porcento}%): R$${ir}\n(-)INSS(10%): R$${inss}\nFGTS(11%): R$${fgts}\nTotal de descontos: R$${descontos}\nSalario liquido: R$${salarioliq}`)

    


}

/*let calcularfgts = (salbr) => {
    return salbr*0.11
}

function calcularir(salbr){
    let ir = 0
    let porcento = 0
    if (salbr<=900){
        ir = 'Isento'
    } else if (salbr>900 &&salbr<=1500){
        ir = salbr*0.05
        porcento = 5
    } else if (salbr>1500&&salbr<=2500){
        ir = salbr*0.10
        porcento = 10
    } else {
        ir = salbr*0.20
        porcento = 20
    }
    return (`(-)IR(${porcento}%): R$${ir}`)
}*/


main()