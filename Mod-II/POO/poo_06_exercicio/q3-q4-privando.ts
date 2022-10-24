class Person {
    private nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }

    get name(){
        return this.nome
    }
}

class Conta {
    private numero: string;
    private saldo: number;
    private cliente: Person;

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

    private consultarSaldo(): number {
        return this.saldo;
    }

    get nomeCliente() {
        return this.cliente.name;
    }

    get numeroConta() {
        return this.numero;
    }

    get Saldo(){
        return this.consultarSaldo()
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco {
    // os métodos com retorno boolean facilitam a implementação no app 
    // https://github.com/cibellemc/IFPI-ADS/blob/main/Mod-II/POO/poo_05_exercicio/q3-app.ts
    
    private contas: Conta[] = [];

    inserir(c: Conta): void {
        if (this.consultarIndice(c.numeroConta) == -1){ //se não houver índice no array
            this.contas.push(c);
        }
    }

    excluir(numero: string): boolean{
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
        this.contas.pop();
        return true
        } return false
    }

    sacar(numero: string, valor: number): boolean {
        let conta: Conta = this.consultar(numero);
        if (conta != null && conta.Saldo - valor >= 0) {
            conta.sacar(valor);
            return true
        } return false
    }

    depositar(numero: string, valor: number): boolean {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
            return true
        } return false
    }

    transfeir(numeroCredito: string, numeroDebito: string, valor: number): boolean {
        if (this.consultar(numeroCredito)!= null && this.consultar(numeroDebito)!= null ){ //se ambas forem válidas
            if(this.sacar(numeroCredito, valor)) {
                this.depositar(numeroDebito, valor) 
                return true
            }
        }  return false
}

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
            if (c.numeroConta == numero) {
            contaProcurada = c;
            break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.quantidadeDeContas(); i++) {
            if (this.contas[i].numeroConta == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    quantidadeDeContas(): number{
        return this.contas.length
    }

    dinheiroNoBanco(): number{
        let dinheiroTotal: number = 0
        for (let c of this.contas) {
            dinheiroTotal += c.Saldo
        }
        return dinheiroTotal;
    }

    mediaDeSaldos(): number{
        return this.dinheiroNoBanco() / this.quantidadeDeContas()
    }

    get Contas(){
        return this.contas 
    }

}