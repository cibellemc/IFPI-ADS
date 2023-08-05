package AgenciaBancaria;

public class ContaCorrente extends Conta {
    
    private Double limiteChequeEspecial;

    public ContaCorrente(Pessoa pessoa, String tipoConta, Double limiteChequeEspecial) {
        super(pessoa, tipoConta); 
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    
    @Override
    public void sacar(Double valor) {
        if (valor <= getSaldo() + limiteChequeEspecial) {
            setSaldo(getSaldo() - valor);
            System.out.println("Saque de " + valor + " realizado com sucesso.");
        } else {
            System.out.println("Saldo insuficiente.");
        }
    }
}