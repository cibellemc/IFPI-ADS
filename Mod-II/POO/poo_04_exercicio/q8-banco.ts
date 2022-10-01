class Cliente {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}
/*
let p : Cliente = new Cliente("ely");
console.log(p.nome);
*/

class ContaBancaria {
    numero: string;
    saldo: number;
    cliente: Cliente;

    constructor(numero: string, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor > 0){
            this.saldo -= valor
            return false

        } return false
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

    transferir(ContaBancariaDestino: ContaBancaria, valor: number): boolean {
        if(this.sacar(valor)){
            ContaBancariaDestino.depositar(valor);
            return true
        } return false
    
    }

    equals(ContaBancaria: ContaBancaria): boolean {
        return (this.numero == ContaBancaria.numero && 
                this.cliente.nome == ContaBancaria.cliente.nome);
    }
}

let c4: ContaBancaria = new ContaBancaria("1",100, new Cliente("C")); // ContaBancaria nº 1, de titular C inicializa com  r$100
let c5: ContaBancaria = new ContaBancaria("2",100, new Cliente("M")); // ContaBancaria nº 2, de titular M inicializa com  r$100

c4.sacar(10); 
c4.transferir(c5,100);

console.log(c4.consultarSaldo());
console.log(c5.consultarSaldo()); 
