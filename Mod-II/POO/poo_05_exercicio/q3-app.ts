import prompt from "prompt-sync";
import { Conta, Person } from "../poo_04_exercicio/codigo_aula_banco";
import { Banco } from "./q1-banco";


let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';

do {
console.log('\nBem vindo\nDigite uma opção:');
console.log("1 - Cadastrar ");
console.log("2 - Consultar ");
console.log("3 - Sacar");
console.log("4 - Depositar");
console.log("5 - Excluir");
console.log("6 - Transferir");
console.log("7 - Totalizações");
console.log("0 - Sair");


opcao = input("Opção:");
switch (opcao) {
case "1": 
    inserir();
break
case "2":
    consultar();
break
//...
}
input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let cliente: string = input('Digite o nome do cliente: ');
    let saldoInicial: number = Number(input('Digite o saldo inicial da conta: '));


    let conta: Conta;
    conta = new Conta(numero, saldoInicial, new Person(cliente));

    b.inserir(conta);
}

function consultar(): void{
    console.log("\Consultar conta\n")
    let numero: string = input('Digite o número da conta:');
    let posicao =  b.consultarIndice(numero)
    if(posicao!= -1){
        console.log(b.contas[posicao])
    } else {
        console.log("Conta não cadastrada")
    }

}
