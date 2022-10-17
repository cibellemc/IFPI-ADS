export class Person {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}
/*
let p : Person = new Person("ely");
console.log(p.nome);
*/

export class Conta {
    numero: string;
    saldo: number;
    cliente: Person;

    constructor(numero: string, saldo: number, cliente: Person) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    get nomeCliente() {
        return this.cliente.nome;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero && 
                this.cliente.nome == conta.cliente.nome);
    }
}

/*class Banco {
    contas: ContaBancaria[] = [];

    inserir(conta: ContaBancaria): void {

    }
    alterar(conta: ContaBancaria): void {

    }
    excluir(numero: string): void{

    }
    //consultar(numero: string): Conta {}

    sacar(numero: string, valor: number): void {

    }
    depositar(numero: string, valor: number): void {

    }
    transfeir(numeroOrigem: string, numeroDestino: string, valor: number): void {

    }
}*/

function main(){
    let c1: Conta = new Conta("1",100, new Person("C")); // conta nº 1, de titular C inicializa com  r$100
    let c2: Conta = new Conta("2",100, new Person("M")); // conta nº 2, de titular M inicializa com  r$100
    let c3: Conta; // defino o  tipo de c3
    
    c1 = c2; // c1 aponta pra c2, no caso passa a assumir os valores que c2 assumir
    c3 = c1; // c3 aponta pra c1, no caso passa a assumir os valores que c1 assumir
    // c3 -> c1 -> c2 : só muda c2
    
    c1.sacar(10); // é retirado 10 dos 100
    c1.transferir(c2,50); // tira 50 de c1 e poe em c2, porem c1"é c2"
    
    console.log(c1.consultarSaldo());
    console.log(c2.consultarSaldo()); 
    console.log(c3.consultarSaldo()); 

}
