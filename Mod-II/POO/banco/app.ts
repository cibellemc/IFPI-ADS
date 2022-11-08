import prompt from "prompt-sync";
import {Person, Conta, Poupanca, Banco, ContaImposto} from "./banco"
import { AplicacaoErro } from "./excecoes";

const input = prompt();

let b: Banco = new Banco();
let opcao: String = '';

do {
    try{
console.log('\nBem vindo! Digite uma opção:');
console.log("1 - Cadastrar ");
console.log("2 - Consultar ");
console.log("3 - Sacar");
console.log("4 - Depositar");
console.log("5 - Excluir");
console.log("6 - Transferir");
console.log("7 - Totalizações");
console.log("8 - Render juros");
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
    case "8":
        renderJuros();  
        break
}

} catch (e:any){
    if (e instanceof AplicacaoErro){
        console.log(e.message);
    } else {
        console.log("Erro no sistema. Contate o administrador.")
    }
}
input("Operação finalizada. Digite <enter>");
} while (opcao != "0");

console.log("Aplicação encerrada");

function inserir(): void {
    console.log("Cadastrar conta:\n");
    let numero: string = input('Digite o número da conta: ');
    let cliente: string = input('Digite o nome do cliente: ');

    let tipoConta: string = input("Tipo da conta: P (poupança), I (imposto), C (conta comum): ")
    //let saldoInicial: number = Number(input('Digite o saldo inicial da conta: '));

    let conta!: Conta
    if (tipoConta == 'P'){
        let saldo: number = Number(input('Valor inicial da conta: R$'))
        let juros: number = Number(input('Valor da taxa de juros (em %): '))
        conta = new Poupanca(numero, saldo, new Person(cliente), juros);
        b.inserir(conta);

    } else if (tipoConta == 'C'){
        let saldo: number = Number(input('Valor inicial da conta: R$'))
        conta = new Conta(numero, saldo, new Person(cliente));
        b.inserir(conta);

    } else if (tipoConta == 'I'){
        let saldo: number = Number(input('Valor inicial da conta: R$'))
        let imposto: number = Number(input('Valor da taxa de juros (em %): '))
        conta = new ContaImposto(numero, saldo, new Person(cliente), imposto);
        b.inserir(conta);

    } else {
        console.log("Valor inválido.");
        inserir()
    }
}

function consultar(): void{
    console.log("Consultar conta:\n")
    let numero: string = input('Digite o número da conta: ');

    let conta = b.consultar(numero)
    conta != null? console.log(`Número: ${conta.numeroConta} - Saldo: ${conta.saldo}`) : console.log("Conta não cadastrada.\n")
}

function sacar(): void{
    console.log("Saque:\n")
    let Contasaque = input("Número da conta: ")
    let valorSaque = Number(input("Valor do saque: "))

    b.sacar(Contasaque, valorSaque)
    //exibirConta() //implementar
}

function depositar(): void{
    console.log("Depósito:\n")
    let contaDeposito = input("Número da conta: ")
    let valorDeposito = Number(input("Valor do depósito: "))

    if(!(b.depositar(contaDeposito, valorDeposito))){
        console.log("Conta não cadastrada.\n")
    }
    //exibirConta() //implementar
}

function excluir(): void{
    console.log("Excluir\n")
    let contaExclusao = input("Número da conta: ")

    let excluida = b.excluir(contaExclusao)
    excluida? console.log("Conta excluída com sucesso!") : console.log("Conta não cadastrada.\n")
}

function transferir(): void{
    console.log("Transferência:\n")
    let Contasaque = input("Número da conta de origem: ")
    let contaDeposito = input("Número da conta de destino: ")
    let valorDeposito = Number(input("Valor da transferência: "))

    b.transfeir(Contasaque, contaDeposito, valorDeposito)
        //console.log("Erro. Alguma das contas pode não estar cadastrada ou o saldo é insuficiente.\n")
}
    //exibirConta() //implementar


function totaliza(){
    console.log("Totalizações:\n")
    console.log(`O valor atual depositado no banco é de R$${b.dinheiroNoBanco().toFixed(2)}\n`) 
}

function renderJuros(){
    console.log("Render juros\n")
    let numero: string = input("Número da conta: ")
    b.renderJuros(numero)
    //exibirConta() //implementar
}