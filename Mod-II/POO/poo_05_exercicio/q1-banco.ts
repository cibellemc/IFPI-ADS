import { Conta } from "../poo_04_exercicio/codigo_aula_banco";

export class Banco {
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

