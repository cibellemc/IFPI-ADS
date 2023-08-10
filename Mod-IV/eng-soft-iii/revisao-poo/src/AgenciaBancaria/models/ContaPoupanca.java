package AgenciaBancaria.models;

public class ContaPoupanca extends Conta{

   private Double taxaRendimento;

    public ContaPoupanca (Pessoa pessoa, String tipoConta, Double rendimento){
        super(pessoa, tipoConta);
        this.taxaRendimento = rendimento;
    }

    // ver rendimento
    public void calcularRendimento(int mesesAplicacao){
        if (mesesAplicacao > 0 && getSaldo() > 0) {
            // juros compostos
            Double rendimento = getSaldo() * Math.pow(1 + taxaRendimento, mesesAplicacao);
            setSaldo(rendimento);
            System.out.println("\nNo período de " + mesesAplicacao + " meses seu dinheiro rendeu " + rendimento + "\nSaldo atual: " + getSaldo() );
        } else {
            System.out.println("Seu dinheiro não rendeu no período informado."); 
        }
    }

}
