import { Conta } from "../poo_04_exercicio/codigo_aula_banco";

// alguns métodos alterados para boolean, para facilitar a implementação no app.
// em caso falso retorno mensagem de erro. 

export class Banco {
    private contas: Conta[] = [];

    inserir(c: Conta): void {
        if (this.consultarIndice(c.numeroConta) == -1){ //se não houver índice no array
            this.contas.push(c);
        }
    }

    alterar(c: Conta): void {
        let indice = this.consultarIndice(c.numeroConta);

        if (indice != -1) {
            this.contas[indice] = c;
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
        return this.contas //consertar: ta mostrando as duas
    }

}

