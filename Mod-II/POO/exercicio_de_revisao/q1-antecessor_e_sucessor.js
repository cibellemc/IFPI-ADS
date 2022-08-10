import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const num = Math.trunc(Number(input('Digite um número: ')))

    const antecessor = num - 1
    const sucessor = num + 1

    console.log(`Sucessor de ${num}: ${antecessor}`)
    console.log(`Sucessor de ${num}: ${sucessor}`)
}


main()