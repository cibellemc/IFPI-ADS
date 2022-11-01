export class Person {
    private _nome: string;
    constructor(nome: string) {
        this._nome = nome;
    }

    get nome(){
        return this._nome
    }
}

export class Conta {
    private _numero: string;
    private _saldo: number;
    private _cliente: Person;

    constructor(numero: string, saldo: number, cliente: Person) {
        this._numero = numero;
        this._cliente = cliente;

        if (saldo < 0){
            throw new Error("Impossível saldo negativo");
        }

        this._saldo = saldo
    }

    sacar(valor: number): void {
       if (this._saldo < valor){
            throw new Error("Saldo insuficiente");
        } this._saldo -= valor
        //this._saldo < valor? Error("Saldo insuficiente") : this._saldo -= valor
    }

    depositar(valor: number): void {
        this._saldo += valor;
    }

    get nomeCliente() {
        return this._cliente.nome;
    }

    get numeroConta() {
        return this._numero;
    }

    get saldo(): number{
        return this._saldo
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

export class Poupanca extends Conta{
    private _taxaJuros: number

    constructor(numero: string, saldo: number,cliente: Person, taxaJuros: number){
        super(numero,saldo, cliente)
        this._taxaJuros = taxaJuros
    }

    get taxaJuros(): number{
        return this._taxaJuros
    }

    renderJuros(): void{
        this.depositar(this.saldo * this.taxaJuros / 100)
    }
}

export class ContaImposto extends Conta{
    private _taxaImposto: number

    constructor(numero: string, saldo: number,cliente: Person, taxaImposto: number){
        super(numero,saldo, cliente)
        this._taxaImposto = taxaImposto
    }

    sacar(valor: number): void{
        this.sacar(valor + valor * this._taxaImposto / 100) 
    }

}

export class Banco {
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

    sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        } 
    }

    depositar(numero: string, valor: number): boolean {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
            return true
        } return false
    }

    transfeir(numeroCredito: string, numeroDebito: string, valor: number): void {
        let contaOrigem = this.consultar(numeroCredito)
        let contDestino = this.consultar(numeroDebito)

        if (contaOrigem!= null && contDestino!= null ){ //se ambas forem válidas
            contaOrigem.transferir(contDestino, valor)
        }
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

    renderJuros(numero: string): void{
        let conta = this.consultar(numero)
        if(conta != null && conta instanceof Poupanca){
            conta.renderJuros()
        } 
    }

    quantidadeDeContas(): number{
        return this.contas.length
    }

    dinheiroNoBanco(): number{
        let dinheiroTotal: number = 0
        for (let c of this.contas) {
            dinheiroTotal += c.saldo
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
