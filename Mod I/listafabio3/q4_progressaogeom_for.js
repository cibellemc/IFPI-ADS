import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const a0 = Number(input('Número inicial: '))
    const r = Number(input('Número a ser multiplicado: '))
    const limite = Number(input('Quantidade de vezes a multiplicar: '))
    
    progressao(a0,r,limite)
}

function progressao(numero_inicial,multiplicacao,vezes_a_multiplicar){
        let multiplicatorio = numero_inicial*multiplicacao
        console.log(`1° multiplicacao: ${multiplicatorio}`)
        
        for(let i=2;i<vezes_a_multiplicar;i++){
            multiplicatorio*=multiplicacao
            console.log(`${i}° multiplicacao: ${multiplicatorio}`)
        }
    }
main()