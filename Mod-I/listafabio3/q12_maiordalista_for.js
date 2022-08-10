import prompt from 'prompt-sync'
const input = prompt()
function main() {

    const numero = Number(input('Quantidade de repeticões: '))
    let maior = -99999

    for (let i = 1; i <= numero; i++) {
        let num = Number(input(`${i}° numero: `))
        if (num > maior) {
            maior = num
        }
    }
    console.log(`Maior: ${maior}`)

}
main()