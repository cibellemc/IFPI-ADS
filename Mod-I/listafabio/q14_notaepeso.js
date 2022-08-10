
import {print,input} from '../io_utils.js'
function main(){
    //diria que pré definicões do processamento
    //np e totpeso nao era necessario mas vai que
    let cont = 1
    let np = 0
    let totpeso = 0

    while (cont<=5) {

        //Entrada
        let nota = Number(input(`Informe sua ${cont}° nota: `))  
        let peso = Number(input('Informe o peso dessa nota: '))

        //Processamento
        //+= recebe ela mais alguma coisa
        np+=(nota*peso)
        totpeso+=peso
        //++ evitar o infinito
        cont++
    }

    const media = (np/totpeso)

    //Saída
    print(`A média ponderada é ${media.toFixed(2)} `)

}
main()