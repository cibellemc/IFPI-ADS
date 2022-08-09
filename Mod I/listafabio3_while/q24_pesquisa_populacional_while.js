import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let soma_salario = 0 
    let soma_filhos = 0
    let porcentagem = 0
    let count = 1

    const N_habitantes = Number(input('Quantidade de habitantes: '))

    while(count<=N_habitantes){

        let salario = Number(input('Salário: R$'))
        let numero_de_filhos = Number(input('N° de filhos: '))

        soma_salario += salario
        soma_filhos += numero_de_filhos

        if (eh_maior_que_mil(salario)){
            porcentagem++
        }
        count++
    }

    const mediasalario = media(soma_salario,N_habitantes)
    console.log(`\nMédia de salário da população: R$${mediasalario.toFixed(2)}`)
    
    const mediafilhos = media(soma_filhos,N_habitantes)
    console.log(`Média de número de filhos: ${mediafilhos.toFixed(1)} por família`)
    
    const porcento = calcularporcentagem(porcentagem,N_habitantes)
    console.log(`Percentual de pessoas com salário de até R$ 1.000,00: ${porcento.toFixed(2)}%`) 
}

function calcularporcentagem(porcentagem,habitantes){
    return porcentagem/habitantes*100
}
function media(valor,qtd){
    let media = valor/qtd
    return media
}

function eh_maior_que_mil(sal){
    return (sal<=1000)
}
main()
