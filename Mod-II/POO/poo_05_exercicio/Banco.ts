export class Banco {
    contas: ContaBancaria[] = [];

    inserir(c: ContaBancaria): void {
        this.contas.push(c);
    }

    alterar(c: ContaBancaria): void {
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

    transfeir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        this.sacar(numeroOrigem, valor)
        this.depositar(numeroOrigem, valor)
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
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
}
