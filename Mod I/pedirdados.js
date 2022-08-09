import prompt from 'prompt-sync'
const input = prompt()

export function pedirtxt(texto){
    const conteudo = input(texto)
    return conteudo
}

export function pedirnum(texto){
    const conteudo = Number(input(texto))
    return conteudo
}

export function pedir_varios_numeros(texto){
    const a = input(texto).split(' ').map(Number)
    return a
}

export function maior(num1,num2){
    if (num1>num2){
        return num1
    } return num2
} 

export function menor(num1,num2){
    if (num1>num2){
        return num2
    } return num1
}