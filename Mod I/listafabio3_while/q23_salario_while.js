/*Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de horas trabalhadas e o seu no de dependentes. Considerando que a 
empresa paga R$ 12,00 por hora e R$40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR. Escreva um algoritmo que leia o 
código, número de horas trabalhadas e número de dependentes de N funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o 
salário líquido do funcionário.*/
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    console.log('------- CALCULAR SALÁRIO -------')
    pedir_dados()

    console.log('\n1 - Calcular outro salário')
    console.log('0 - Sair')
    let continua = Number(input(''))
    
    while(continua===1){
            pedir_dados()
            console.log('\n1 - Calcular outro salário')
            console.log('0 - Sair')
            continua = Number(input(''))
    }
}

function pedir_dados(){

    const codigo_funcionario = Number(input('Código do funcionário: '))
    const horas_trabalhadas =  Number(input('Horas trabalhadas: '))
    const dependentes = Number(input('Número de dependentes: '))
    
    show(codigo_funcionario,horas_trabalhadas,dependentes)
}

function show(codigo,hrs_trabalhadas,dependentes){
    //console.log(`\nCódigo do funcionário: ${codigo}`)

    const salario_bruto = salario(hrs_trabalhadas,dependentes)
    console.log(`\nSalário bruto: R$${salario_bruto.toFixed(2)}`)

    const valor_ir = ir(salario_bruto)
    console.log(`Descontos IR = R$${valor_ir.toFixed(2)}`)

    const valor_inss = inss(salario_bruto)
    console.log(`Descontos INSS = R$${valor_inss.toFixed(2)}`)

    const valor_descontado = descontos(valor_ir,valor_inss)
    console.log(`Total descontado = R$${valor_descontado.toFixed(2)}`)

    const salario_liquido = salario_com_descontos(salario_bruto,valor_descontado)
    console.log(`Salário líquido: R$${salario_liquido.toFixed(2)}`)
}

function salario_com_descontos(sal,impostos){
    const sal_liq = sal-impostos
    return sal_liq
}

function ir(sal){
    const ir = (5/100*sal)
    return ir
}

function inss(sal){
    const inss = (8.5/100*sal)
    return inss
}

function descontos(ir,inss){
    const total_descontos = ir+inss
    return total_descontos
}

function salario(horas_de_trabalho,qtd_dependentes){
    const sal = horas_de_trabalho*12+40*qtd_dependentes
    return sal 
}
main()