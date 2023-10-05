package questao4.validacoes;

public class ValidacaoCPF implements Validacao {
    private String cpf;

    public ValidacaoCPF(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public boolean validar() {
        return !cpf.isEmpty() && cpf.length() == 11;
    }
}
