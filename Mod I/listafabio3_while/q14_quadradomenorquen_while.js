import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const numero = Number(input('Número: '))
    let cont = numero

        while (!(ehraizquadrada(cont))){
        cont--
    }
    const raiz = Math.sqrt(cont)
    console.log(`Quadrado mais próximo de ${numero} = ${cont}`)
    console.log(`Raiz de ${cont} = ${raiz} `)
}

function ehraizquadrada(numero){
    return (numero%Math.sqrt(numero)===0)
}

main()