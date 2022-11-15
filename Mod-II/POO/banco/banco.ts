import { Conta, Poupanca } from "./conta";
import { ContaNaoEncontrada, PoupancaInvalidaError} from "./excecoes";

export class Banco {
    // os métodos com retorno boolean facilitam a implementação no app     
    private contas: Conta[] = [];

    inserir(c: Conta): void {
        this.contas.push(c);
    }

    excluir(numero: string): void{
        let indice: number = this.consultarIndice(numero);
        for (let i: number = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        } 
        this.contas.pop();
    }

    sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        conta.sacar(valor);
    }

    depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);
        conta.depositar(valor);
    }

    transfeir(numeroCredito: string, numeroDebito: string, valor: number): void {
        let contaOrigem = this.consultar(numeroCredito)
        let contDestino = this.consultar(numeroDebito)

        contaOrigem.transferir(contDestino, valor)
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
            if (c.numeroConta == numero) {
            contaProcurada = c;
            break;
            }
        }
        if (contaProcurada == null) {
            throw new ContaNaoEncontrada("Conta não encontrada.")
        }
        return contaProcurada;
    }

    private consultarIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.quantidadeDeContas(); i++) {
            if (this.contas[i].numeroConta == numero) {
                indice = i;
                break
            }
        }
        return indice;

        if (indice == -1) {
            throw new ContaNaoEncontrada("Conta não encontrada.")
        }
    }

    renderJuros(numero: string): void{
        let conta = this.consultar(numero)
        if(!(conta instanceof Poupanca)){
            throw new PoupancaInvalidaError("A conta não é poupança.")
        } 
        conta.renderJuros()
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