import { Conta, Person } from "../poo_04_exercicio/codigo_aula_banco";

class Banco {
    contas: Conta[] = [];

    inserir(c: Conta): void {
        if (this.consultarIndice(c.numero) == -1){ //se não houver índice no array
            this.contas.push(c);
        }
    }

    alterar(c: Conta): void {
        let indice = this.consultarIndice(c.numero);

        if (indice != -1) {
            this.contas[indice] = c;
        }
    }

    excluir(numero: string): void{
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
        this.contas.pop();
        }
    }

    sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }

    transfeir(numeroCredito: string, numeroDebito: string, valor: number): void {
        if (this.consultar(numeroCredito)!= null && this.consultar(numeroDebito)!= null ){ //se ambas forem válidas
            this.sacar(numeroCredito, valor)
            this.depositar(numeroDebito, valor)
        }
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
            if (c.numero == numero) {
            contaProcurada = c;
            break;
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.quantidadeDeContas(); i++) {
            if (this.contas[i].numero == numero) {
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
            dinheiroTotal += c.consultarSaldo()
        }
        return dinheiroTotal;
    }

    mediaDeSaldos(): number{
        return this.dinheiroNoBanco() / this.quantidadeDeContas()
    }
}

function main(){
let c4: Conta = new Conta("4", 100, new Person("D"))
let c5: Conta = new Conta("5", 300, new Person("E"))
let c6: Conta = new Conta("6", 300, new Person("F"))
let c7: Conta = new Conta("7", 0, new Person("F"))

let b: Banco = new Banco()

b.inserir(c4)
b.inserir(c5)
b.inserir(c5)
b.inserir(c6)
b.inserir(c7)

b.transfeir("5", "60", 150)

console.log("Saldo da conta c4: R$" +c4.consultarSaldo().toFixed(2))
console.log("Saldo da conta c5: R$" + c5.consultarSaldo().toFixed(2))
console.log(`O valor total armazanado no banco é R$${b.dinheiroNoBanco().toFixed(2)}`)
console.log(`A média de saldos no banco é R$${b.mediaDeSaldos().toFixed(2)}`)

}

main()