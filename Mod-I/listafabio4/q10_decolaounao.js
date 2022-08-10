import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const containers = Number(input('Número de containers (3) :'))
    const pesocontainers = (input('Peso de cada container (10 20 30): ')).split(' ').map(Number)
    let bilhete =  Number(input('Número do bilhete (3) :'))
    let bagagem =  Number(input('Quantidade de bagagens (3) :'))

    let totpeso = 0
    let qtdpessoas = 0
    let pesopessoas = 0
    let pesocontot = 0
    let totbag = 0

    for (let p of pesocontainers){
        pesocontot += p
    }

    while (bilhete != 0){
        qtdpessoas += 1
        pesopessoas = qtdpessoas * 70
        totbag += bagagem * 10
        totpeso = totbag + pesopessoas + pesocontot

        bilhete =  Number(input('Número do bilhete (3) :'))
        bagagem =  Number(input('Quantidade de bagagens (3) :'))
    }

    let combdisponivel = 500000-totpeso

    console.log(`${qtdpessoas} passageiros.`)
    console.log(`Peso de passageiros: ${pesopessoas} kg`)
    console.log(`Peso em bagagens: ${totbag} kg.`)
    console.log(`Peso da carga: ${pesocontot} `)
    console.log(`Peso total: ${totpeso} kg.`)
    console.log(`\nQuantidade possível de combustível: ${combdisponivel} `)
    

    if(combdisponivel >= 15000 && totpeso <= 500000){
        console.log('Pode levantar voo')
    } else{
        console.log('Nao pode levantar voo')
        
    }


}
main()