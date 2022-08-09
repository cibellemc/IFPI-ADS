import prompt from 'prompt-sync'
const input = prompt()

export function gerar_matriz_quadrada(ordem){

    const matriz = new Array(ordem)

    for (let i = 0; i < ordem; i++){
        matriz[i] = new Array(ordem)
    }
    return matriz
}

export function preencher_matriz_quadrada(ordem){

    const matriz = gerar_matriz_quadrada(ordem)

    for (let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){
            matriz[i][j] = Number(input(`(${i},${j}): `))
        }
    }

    return matriz

}

export function transpor_matriz(ordem,matriz){

    const matriz_transposta = gerar_matriz_quadrada(ordem)

    for (let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){

            if (i === j){
                matriz_transposta[i][j] = matriz[i][j]
            }  else {
                matriz_transposta[i][j] = matriz[j][i]
            }
        }
    }
    return matriz_transposta
    
}


export function soma_demais(ordem,matriz){
//primeiro passo: somar tudo
//segundo passo: subtrair principal e secundaria
    const diag_princ = soma_diagonal_principal(ordem,matriz)
    const diag_sec = soma_diagonal_secundaria(ordem,matriz)
    let soma_todos = 0
    let outros 

for (let i = 0; i < ordem; i++){
    for (let j = 0; j < ordem; j++){
        soma_todos += matriz[i][j]
    }
}
    outros = soma_todos - diag_princ - diag_sec
    return outros
}

export function soma_diagonal_principal(ordem,matriz){
    let soma_diag_princ = 0

    for (let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){

            if (i === j){
                soma_diag_princ += matriz[i][j]
            }
        }
    }
    return soma_diag_princ
}

export function soma_diagonal_secundaria(ordem,matriz){
    let soma_diag_sec = 0
    let j = ordem - 1

    for (let i = 0; i < ordem; i++){
            soma_diag_sec += matriz[i][j]
            //console.log(`${i} ${j}`)
            j--
        }
        return soma_diag_sec
}

export function maior_e_menor(ordem,matriz){
    //let posicao_maior = 0
    //let posicao_menor = 0
/**Precisa criar variavel para armazenar a linha e outra pra armazenar a coluna, 
 * diferentemente do vetor que só precisa de um dado(pois é linarr) */

let linha_maior = 0
let coluna_maior = 0
let linha_menor = 0
let coluna_menor = 0

    for (let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){
            if (matriz[i][j] > matriz[linha_maior][coluna_maior]){
                linha_maior = i
                coluna_maior = j
            }else if (matriz[i][j] < matriz[linha_menor][coluna_menor]){
                linha_menor = i
                coluna_menor = j
            }
        }
    }
    return(`Maior: ${matriz[linha_maior][coluna_maior]} (posição [${linha_maior},${coluna_maior}])\nMenor: ${matriz[linha_menor][coluna_menor]} (posição [${linha_menor},${coluna_menor})]`)
}

export function eh_simetrica(ordem,matriz){
    return (matriz === transpor_matriz(ordem,matriz))

}

export function geracao_matriz_identidade(ordem){
    let matriz_identidade = gerar_matriz_quadrada(ordem)
    for (let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            if (i === j){
                matriz_identidade[i][j] = 1
            } else {
                matriz_identidade[i][j] = 0
            }
        }
    }
    return matriz_identidade
}

export function somar_linhas(ordem,matriz){
    let soma_linha = 0
    let maior_linha = 0
    let menor_linha = 0

    for (let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){
            soma_linha += matriz[i][j]
        }

        if (maior_linha){
            maior_linha = i
        }else if (soma_linha < menor_linha){
            menor_linha = i
        }
        soma_linha = 0

    }
    return(`Linha com maior soma: ${maior_linha}`)
}

export function soma_positivos_e_negativos(ordem,matriz){
    let soma_positivos = 0
    let soma_negativos = 0

    for(let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){

            if(matriz[i][j] > 0){
                soma_positivos += matriz[i][j]
            } else {
                soma_negativos += matriz[i][j]
            }
        }
    }
    return (`Soma dos positivos: ${soma_positivos}\nSoma dos negativos: ${soma_negativos}`)
}

