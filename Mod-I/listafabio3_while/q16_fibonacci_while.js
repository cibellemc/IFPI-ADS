import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const quantidade_termos = Number(input('Quantos termos a sequência terá: '))

    let cont = 1
    let ultimo_termo = 0
    let penultimo_termo = 1
    let termo = 0

    if (quantidade_termos<2){

        console.log('A sequência deve ter no mínimo 2 termos.')
    } else {

        console.log(ultimo_termo)

        while (cont<=quantidade_termos){
            termo = ultimo_termo+penultimo_termo
            penultimo_termo = ultimo_termo
            ultimo_termo = termo
            console.log(termo)
            cont++
        }

    }
}
main()
/*n = int(input("Que termo deseja encontrar: "))
ultimo=1
penultimo=1


if (n==1) or (n==2):
    print("1")
else:
    count=3
    while count <= n:
        termo = ultimo + penultimo
        penultimo = ultimo
        ultimo = termo
        count += 1
    print(termo)*/