import { ValorInvalidoError } from "./excecoes";
import { Person } from "./pessoa";

export class Conta {
    private _numero: string;
    private _saldo: number;
    private _cliente: Person;

    constructor(numero: string, saldo: number = 0, cliente: Person) {
        this._numero = numero;
        this._cliente = cliente;
        this.validarValor(saldo)
        this._saldo = saldo
    }

    sacar(valor: number): void {
        this.validarValor(valor)
        this._saldo -= valor
        //this._saldo < valor? Error("Saldo insuficiente") : this._saldo -= valor
    }

    depositar(valor: number): void {
        this.validarValor(valor)
        this._saldo += valor;
    }

    validarValor(valor: number) {
        if (valor <= 0) {
            throw new ValorInvalidoError("Valor inválido.")
        }
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