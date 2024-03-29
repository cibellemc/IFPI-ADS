package AgenciaBancaria.models;

import utilitarios.Utils;

public class Conta {
    
    private static int contadorDeContas = 1;

    private int numeroConta;
    private Pessoa pessoa;
    private Double saldo = 0.0;
    private String tipoConta;

    public Conta(Pessoa pessoa, String tipo) {
        this.numeroConta = contadorDeContas;
        this.pessoa = pessoa;
        this.tipoConta = tipo;
        contadorDeContas += 1;
    }

    public int getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }
    
    public String getTipoConta() {
        return tipoConta;
    }

    public String toString(){
        return "\nCliente: " + this.pessoa.getNome() +
                 "\nConta ID: " + this.getNumeroConta() +
                 "\nTipo de conta: " + this.getTipoConta() +
                 "\nSaldo: " + Utils.doubleToString(this.getSaldo());
    }

    public void depositar(Double valor) {
        if (valor > 0) {
            setSaldo(getSaldo() + valor);
            System.out.println("Deposito realizado com sucesso!");
        } else {
            System.out.println("Não foi possível realizar o depósito");
        }
    }
    
    public void sacar(Double valor) {
        if (valor > 0 && getSaldo() >= valor) {
            setSaldo(getSaldo() - valor);
            System.out.println("Saque realizado com sucesso!");
        } else {
            System.out.println("Não foi possível realizar o saque");
        }
    }

    public void transferir(Conta contaParaDeposito, Double valor){
        if (valor > 0 && getSaldo() >= valor) {
            setSaldo(getSaldo() - valor);
            contaParaDeposito.saldo = contaParaDeposito.getSaldo() + valor;
            System.out.println("Transferência realizado com sucesso!");
        } else {
            System.out.println("Não foi possível realizar a transferência.");
        }
    }
    
}
