import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const quantidade_termos = Number(input('Quantos termos a sequência terá: '))

    let ultimo_termo = 0
    let penultimo_termo = 1
    let termo = 0

    if (quantidade_termos<2){
        console.log('A sequência deve ter no mínimo 2 termos.')

    } else {
        console.log(ultimo_termo)

        for (let cont = 1 ; cont <= quantidade_termos ; cont++){
            termo = ultimo_termo + penultimo_termo
            penultimo_termo = ultimo_termo
            ultimo_termo = termo
            console.log(termo)
        }

    }
}
main()