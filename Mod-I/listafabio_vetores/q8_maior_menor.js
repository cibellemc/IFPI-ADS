import { pedir_elementos_do_vetor, retornar_maior_ou_menor } from '../funcoes_vetores.js';
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero_elementos = Number(input('Quantidade de elementos: '))
    const vetor = pedir_elementos_do_vetor(numero_elementos, 'A')

    const posicaomaior = retornar_maior_ou_menor(vetor,'maior')
    console.log(posicaomaior)
    
    const posicaomenor = retornar_maior_ou_menor(vetor,'menor')
    console.log(posicaomenor)


}
main()