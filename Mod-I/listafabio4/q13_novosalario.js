import { pedirnum } from '../pedirdados.js'

function main(){
    let salario_atual = pedirnum(`Salário: R$`)
    let novo_salario = 0
    let soma_salarios_atuais = 0
    let soma_novos_salarios = 0
    let diferenca_entre_salarios

    while (salario_atual > 0){

        soma_salarios_atuais += salario_atual

        if (salario_atual >= 0 && salario_atual < 3000){
            novo_salario = salario_atual + (salario_atual * 0.25)

        }else if(salario_atual < 6000){
            novo_salario = salario_atual + (salario_atual * 0.20)

        }else if(salario_atual < 10000){
            novo_salario = salario_atual + (salario_atual * 0.15)

        }else{
            novo_salario = salario_atual + (salario_atual * 0.10)

        }

        console.log(`Novo salário: R$${novo_salario.toFixed(2)}\n`)

        soma_novos_salarios += novo_salario

        salario_atual = pedirnum(`Salário: R$`)

    }

    diferenca_entre_salarios = Math.abs(soma_novos_salarios - soma_salarios_atuais)

    console.log(`Soma dos salários atuais: R$${soma_salarios_atuais.toFixed(2)}`)
    console.log(`Soma dos novos salários: R$${soma_novos_salarios.toFixed(2)}`)
    console.log(`Diferença entre salários: R$${diferenca_entre_salarios.toFixed(2)}`)

}

main()