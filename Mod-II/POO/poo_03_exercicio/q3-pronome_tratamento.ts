//3)Crie uma função que receba como parâmetros um nome e um pronome de tratamento
//opcional. Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final,
//imprima uma saudação semelhante a “Sra. Sávia”.


function main(){
    console.log(pronome("cibelle", "linda"))
    console.log(pronome("ed"))
    console.log(pronome("claudia.", "sra."))
    
}

function pronome(nome: string, pronome: string = "Sr.") : string{
    return `${pronome} ${nome}`
}

main()