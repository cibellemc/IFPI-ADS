import * as fs from 'fs'

function main(){

    const mensagem = fs.readFileSync('teste1024.txt','utf-8').split('\r\n')
    const vezes_a_repetir = Number(mensagem[0])
    console.log(mensagem)

    let cont = 1
    console.log(frase_deslocada(cont,vezes_a_repetir,mensagem))
    console.log(inverter_linha(frase_deslocada(cont,vezes_a_repetir,mensagem)))
}

function eh_maiuscula(letra){
    return (letra.charCodeAt()>=65 && letra.charCodeAt()<=90)
}

function eh_minuscula(letra){
    return (letra.charCodeAt()>=97 && letra.charCodeAt()<=122)
}

function deslocar_letra(letra){
    let codigo = letra.charCodeAt()
    //String.fromCharCode => retorna a string que tem determinado codigo
    let novo_codigo = String.fromCharCode(codigo+3)
    return novo_codigo
}

//esse retorno em vetor ta ferrando td
function frase_deslocada(cont,repeticao,frase){
    let deslocamento = ''
    let linhas_desloc = []

    while (cont<repeticao){
        for (let letra of frase[cont]){
            if ((eh_maiuscula(letra)) || (eh_minuscula(letra))){
                deslocamento += deslocar_letra(letra)
            } else {
                deslocamento += letra
            }
        }
        linhas_desloc.push(deslocamento)
        deslocamento = ''
        cont++
    }
    return linhas_desloc
}

/*function inverter_linha(frase_deslocada){
    let frase = (frase_deslocada).split('\r\n')
    let inverso = ''
    let tamanho = 0
    let cont = tamanho
    while (cont>=0){
        tamanho = frase[cont].length
        for (letra of frase[cont]){
            inverso += letra
        }
        cont--
    }
    return inverso
}*/
main()