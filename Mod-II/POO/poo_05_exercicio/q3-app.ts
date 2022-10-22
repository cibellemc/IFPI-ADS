import prompt from "prompt-sync";
import { Conta, Person } from "../poo_04_exercicio/codigo_aula_banco";
import { Banco } from "./q1-banco";


let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';

do {
console.log('\nBem vindo! Digite uma opção:');
console.log("1 - Cadastrar ");
console.log("2 - Consultar ");
console.log("3 - Sacar");
console.log("4 - Depositar");
console.log("5 - Excluir");
console.log("6 - Transferir");
console.log("7 - Totalizações");
console.log("0 - Sair\n");


opcao = input("Opção: ");
switch (opcao) {
    case "1": 
        inserir();
        break
    case "2":
        consultar();
        break
    case "3":
        sacar();
        break
    case "4": 
        depositar();
        break
    case "5":
        excluir();
        break
    case "6":
        transferir();
        break
    case "7":
        totaliza();
        break       
}

input("Operação finalizada. Digite <enter>");

} while (opcao != "0");

console.log("Aplicação encerrada");

function inserir(): void {
    console.log("Cadastrar conta:\n");
    let numero: string = input('Digite o número da conta: ');
    let cliente: string = input('Digite o nome do cliente: ');
    let saldoInicial: number = Number(input('Digite o saldo inicial da conta: '));

    let conta: Conta;
    conta = new Conta(numero, saldoInicial, new Person(cliente));

    b.inserir(conta);
}

function consultar(): void{
    console.log("Consultar conta:\n")
    let numero: string = input('Digite o número da conta: ');

    let posicao =  b.consultarIndice(numero)

    if(posicao!= -1){
        console.log(b.contas[posicao])
    } else {
        console.log("Conta não cadastrada.\n")
    }
}

function sacar(): void{
    console.log("Saque:\n")
    let contaSaque = input("Número da conta: ")
    let valorSaque = Number(input("Valor do saque: "))

    let posicao =  b.consultarIndice(contaSaque)

    if(posicao != -1){
        b.contas[posicao].sacar(valorSaque)
    } else {
        console.log("Conta não cadastrada.\n")
    }
}

function depositar(): void{
    console.log("Depósito:\n")
    let contaDeposito = input("Número da conta: ")
    let valorDeposito = Number(input("Valor do depósito: "))

    let posicao =  b.consultarIndice(contaDeposito)

    if(posicao != -1){
        b.contas[posicao].depositar(valorDeposito)
    } else {
        console.log("Conta não cadastrada.\n")
    }
}


function excluir(): void{
    console.log("Excluir\n")
    let contaExclusao = input("Número da conta: ")

    let posicao =  b.consultarIndice(contaExclusao)

    if(posicao != -1){
        b.excluir(contaExclusao)
        console.log("Conta excluída com sucesso!")
    } else {
        console.log("Conta não cadastrada.\n")
    }
}

function transferir(): void{
    console.log("Transferência:\n")
    let contaSaque = input("Número da conta de origem: ")
    let contaDeposito = input("Número da conta de destino: ")
    let valorDeposito = Number(input("Valor da transferência: "))

    let posicaoS =  b.consultarIndice(contaSaque)
    let posicaoD =  b.consultarIndice(contaDeposito)

    if(posicaoS != -1 && posicaoD != -1){
        b.contas[posicaoS].sacar(valorDeposito)
        b.contas[posicaoD].depositar(valorDeposito)
    } else {
        console.log("Erro. Alguma das contas pode não estar cadastrada.\n")
    }
}

function totaliza(){
    console.log("Totalizações:\n")
    console.log(`O valor atual depositado no banco é de R$${b.dinheiroNoBanco().toFixed(2)}\n`) 
}