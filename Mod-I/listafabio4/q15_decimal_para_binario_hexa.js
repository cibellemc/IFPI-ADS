import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    const num = Number(input('Número: '))
    //const num_binario = converter_para_binario(num)
    //console.log(num_binario)
    const numero_em_binario = converter_para_binario(num)
    console.log(ordenar(numero_em_binario))
    /*const numero_em_hexadecimal = converter_para_hexadecimal
    converter_para_binario(num)*/
}

function converter_para_binario(num){
    // 3/2=1 1/2=0 resto 
    let numero = num
    let novo_numero,resto
    let conversao = ''
    
    while(!(numero===0)){
        novo_numero = Math.trunc(numero / 2)
        resto = numero % 2
        conversao += resto  
        numero = novo_numero
        
    }
    return conversao
}

function converter_para_hexadecimal(num){
    // 3/2=1 1/2=0 resto 
    let numero = num
    let novo_numero,resto
    let conversao = ''
    
    while(!(numero===0)){
        novo_numero = Math.trunc(numero / 16)
        resto = numero % 2
        conversao += resto  
        numero = novo_numero
        
    }
    return conversao
}

function ordenar(numero_convertido){
    let num = numero_convertido
    let conversao_final = ''
  
    return conversao_final
}
main()