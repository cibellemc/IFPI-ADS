import * as fs from 'fs'

function main(){

    const mensagem = fs.readFileSync('teste1024.txt','utf-8').split('\r\n')
    const vezes_a_repetir = Number(mensagem[0])
    //console.log(mensagem)

    let cont = 1

    while (cont<=vezes_a_repetir){
        //console.log(frase_deslocada(mensagem[cont]))
        let frase_deslocada = deslocar_frase(mensagem[cont])
        let inverso_frase = (inverter_linha(frase_deslocada))
        //console.log(inverso_frase)
        let textofinal = deslocar_a_partir_da_metade(inverso_frase)
        console.log(textofinal)
        cont++
    }

    //console.log(frase_deslocada(cont,vezes_a_repetir,mensagem))
    //console.log(inverter_linha(frase_deslocada(cont,vezes_a_repetir,mensagem)))
}

function eh_maiuscula(letra){
    return (letra.charCodeAt()>=65 && letra.charCodeAt()<=90)
}

function eh_minuscula(letra){
    return (letra.charCodeAt()>=97 && letra.charCodeAt()<=122)
}

function deslocar_letra(letra,salto){
    let codigo = letra.charCodeAt()
    //String.fromCharCode => retorna a string que tem determinado codigo
    let novo_codigo = String.fromCharCode(codigo+salto)
    return novo_codigo
}

function deslocar_frase(frase){
    
    let deslocamento = ''
    //let linhas_desloc = []
        for (let letra of frase){
            if ((eh_maiuscula(letra)) || (eh_minuscula(letra))){
                deslocamento += deslocar_letra(letra,3)
            } else {
                deslocamento += letra
            }
        //linhas_desloc.push(deslocamento)
        //deslocamento = ''
        }
    return deslocamento
    //console.log(deslocamento)
}

function inverter_linha(frase_deslocada){
    let inverso = ''
    let cont = frase_deslocada.length - 1
        while (cont>=0){
        inverso += frase_deslocada[cont]
        cont--
    }
    return inverso
}

function deslocar_a_partir_da_metade(frase_invertida){
    let cont = 0
    let tamanho = frase_invertida.length - 1
    let metade = (tamanho)/2
    let textofinal = ''
    while (cont<=tamanho) {
        if (cont<metade){
            textofinal += frase_invertida[cont]
        } else {
            textofinal += deslocar_letra(frase_invertida[cont],-1)
    
        }
        cont++
    }
    return textofinal
}

main()