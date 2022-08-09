import { input } from "../io_utils.js";

function main(){

    console.log('<M> para Matutino\t<V> para Vespertino\t<N> para Noturno\n')
    const opcao= input('Informe o turno em que você estuda: ')
    console.log(saudacoes(opcao))
}

function saudacoes(t){
    if (t==='M'||t==='m'){
        return('Bom dia!')
    } else if (t==='V'||t==='v'){
        return('Boa tarde!')
    } else if (t==='N'||t==='n'){
        return('Boa noite!')
    } return ('Digite uma opção válida(M/V/N)')
}
main()