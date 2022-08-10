import prompt from 'prompt-sync'
const input = prompt()

import { pedir_numero, pedir_numero_na_faixa } from './utils.js'
import { mapear_vetor } from './vetor_utils.js'


export function criar_vetor(){
    console.log('Como gerar vetor:')
    console.log('1 - Informar valores manualmente\n2 - Geração automática\n3 - Importar de arquivo')

    const modo_criacao = pedir_numero_na_faixa(1,3,'> ')
    let vetor,tamanho,min,max

    if (modo_criacao === 1){

        console.log()
        tamanho = pedir_numero('Tamanho do vetor: ')
        min = pedir_numero('Valor mínimo: ')
        max = pedir_numero('Valor máximo: ')

        vetor = criar_vetor_manual(tamanho, min, max)
        return vetor

    }else if(modo_criacao === 2){

        console.log()
        tamanho = pedir_numero('Tamanho do vetor: ')
        min = pedir_numero('Valor mínimo: ')
        max = pedir_numero('Valor máximo: ')

        vetor = criar_vetor_automatico(tamanho, min, max)
        return vetor
    }

}

export function criar_vetor_manual(tamanho,min,max){

    const vetor = new Array(tamanho)

    for (let i = 0; i < tamanho; i++){
        vetor[i] = pedir_numero_na_faixa(min,max,`${i+1}º número: `)

        if (vetor[i] > max || vetor[i] < min){
            vetor[i] = pedir_numero_na_faixa(min,max,`${i+1}º número: `)
        }
    }
    return vetor
}

export function criar_vetor_automatico(tamanho,min,max){

    const vetor = new Array(tamanho)

    for (let i = 0; i < tamanho; i++){
        vetor[i] = obter_numero_aleatorio(min,max)
    }
    return vetor
}

function obter_numero_aleatorio(min, max) {
    //math.trunc tava retornando -0
    //math.floor retorna o maior número inteiro 
    return Math.floor(Math.random() * (max - min) + min)
}

export function preencher_com_valor_padrao(valor_padrao,vetor){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }

    return vetor
}

export function quantidade_de_itens_no_vetor(vetor){
    return vetor.length

}

export function maior_e_menor(vetor){
    let posicao_maior = 0
    let posicao_menor = 0

    for (let i = 1; i < vetor.length; i++){
        if (vetor[i] > vetor[posicao_maior]){
            posicao_maior = i
        } else if (vetor[i] < vetor[posicao_menor]){
            posicao_menor = i
        }
    }
    return (`Maior valor: ${vetor[posicao_maior]} (${posicao_maior+1}º posição)\nMenor valor: ${vetor[posicao_menor]} (${posicao_menor+1}º posição)\n`) 

}

export function media_vetor(vetor){
    let soma = soma_elementos_do_vetor(vetor)
    let media = soma/vetor.length

    return media
}

export function soma_elementos_do_vetor(vetor){
    let soma = 0

    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    return soma
}

export function mostrar_positivos(vetor){
    let positivos = new Array()
    let contador_de_positivos = 0

    for (let i = 0; i < vetor.length; i++){
        if (eh_positivo(vetor[i])){
            positivos[contador_de_positivos] = vetor[i]
            contador_de_positivos++

        }
    }
    return (`\n[${positivos}]\nHá ${contador_de_positivos} números positivos\n`)
}

export function mostrar_negativos(vetor){
    let negativos = new Array()
    let contador_de_negativos = 0
    
    for (let i = 0; i < vetor.length; i++){

        if (!(eh_positivo(vetor[i]))){
            negativos[contador_de_negativos] = vetor[i]
            contador_de_negativos++
        }
    }
    return (`\n[${negativos}]\nHá ${contador_de_negativos} números negativos\n`)
    }

function eh_positivo(numero){
    return numero >= 0
}


export function atualizar_vetor(vetor){
    console.log('Alterações possíveis:')
    console.log('1 - Multiplicar por um valor\n2 - Elevar a um valor\n3 - Reduzir a uma fração\n4 - Substituir negativos por aleatórios\n5 - Ordenar valores\n6 - Embaralhar vetor')

    const modo_atualizacao = pedir_numero_na_faixa(1,6,'> ')

    let vetor_atualizado,numero_multiplicacao, numero_elevacao
    console.log()

    if (modo_atualizacao === 1){
        numero_multiplicacao = pedir_numero('Multiplicar por quanto: ')
        vetor_atualizado = mapear_vetor(vetor, valor => valor*numero_multiplicacao)

        return vetor_atualizado

    }else if(modo_atualizacao === 2){
        numero_elevacao = pedir_numero('Elevar a quanto: ')
        vetor_atualizado = mapear_vetor(vetor, valor => valor**numero_elevacao)

        return vetor_atualizado

    }else if(modo_atualizacao === 3){

    }else if(modo_atualizacao === 4){
        let min = pedir_numero('Valor mínimo: ')
        let max = pedir_numero('Valor máximo: ')

        for (let i = 0; i < vetor.length; i++){
            if (!(eh_positivo(vetor[i]))){
                vetor[i] = obter_numero_aleatorio(min,max)
            }
        }
        return vetor
    }else if(modo_atualizacao === 5){
        let tipo_de_ordenamento = input('Ordenamento crescente? (S/N): ')

        if(tipo_de_ordenamento === 'S' || tipo_de_ordenamento === 's'){
            vetor_atualizado = ordenamento_crescente_por_metodo_bolha(vetor)

        } else {
            vetor_atualizado = ordenamento_decrescente_por_metodo_bolha(vetor)
        }
        return vetor_atualizado
    }

}

function ordenamento_crescente_por_metodo_bolha(vetor){
    let auxiliar
    for (let i = 0; i < vetor.length - 1; i++){
        for (let j = 0; j < vetor.length - 1; j++){
            if (vetor[j] > vetor[j+1]){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar 
            }
        }
    }
    return vetor
}

function ordenamento_decrescente_por_metodo_bolha(vetor){
    let auxiliar
    for (let i = 0; i < vetor.length - 1; i++){
        for (let j = 0; j < vetor.length - 1; j++){
            if (vetor[j] < vetor[j+1]){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar 
            }
        }
    }
    return vetor
}

