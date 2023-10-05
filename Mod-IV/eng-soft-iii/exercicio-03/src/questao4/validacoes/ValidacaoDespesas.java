package questao4.validacoes;

import java.util.List;

public class ValidacaoDespesas implements Validacao {
    private List<Double> despesas;

    public ValidacaoDespesas(List<Double> despesas) {
        this.despesas = despesas;
    }

    @Override
    public boolean validar() {
        for (Double valor : despesas) {
            if (valor < 0) {
                return false;
            }
        }
        return true;
    }
}
