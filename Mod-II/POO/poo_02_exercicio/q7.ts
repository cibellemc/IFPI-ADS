class Pessoa {
    nome: string = "";
    paymentTime: number = 0;
    linguagem: string  = "";
    
}


function main(){

    let ely: Pessoa = new Pessoa
    ely.nome = "Ely"
    ely.paymentTime = 120.56
    ely.linguagem = "TypeScript"

    console.log(`
    ${ely.nome}
    My payment time is ${ely.paymentTime}
    and
    my preffered language is ${ely.linguagem}
    `);

}

main()