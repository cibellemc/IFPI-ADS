export function mapear_vetor(vetor,funcao){
    //let vetor_atualizado = new Array()
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = funcao(vetor[i]) 
    }
    return vetor
}