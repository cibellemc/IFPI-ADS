import prompt from 'prompt-sync'
const input = prompt()

//questaodomarcos
//iador indo do numero ate 1, funcao no corpo
//implementacao do break - se é raiz quadrada, para
//o i precisa estar no "escopo global"

function main(){

    const numero = Number(input('Número: '))

    let i = 0
        for (i = numero; i >= 1; i--){
            if (ehraizquadrada(i)){
                break
            }
    }

    const raiz = Math.sqrt(i)

    console.log(`Quadrado mais próximo de ${numero} = ${i}`)
    console.log(`Raiz de ${i} = ${raiz} `)
}

function ehraizquadrada(numero){
    return numero % Math.sqrt(numero) === 0
}

main()