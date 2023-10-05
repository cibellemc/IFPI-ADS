package questao4.validacoes;

import java.util.List;

public class ValidacaoRendimentos implements Validacao {
    private List<Double> rendimentos;

    public ValidacaoRendimentos(List<Double> rendimentos) {
        this.rendimentos = rendimentos;
    }

    @Override
    public boolean validar() {
        if (rendimentos.size() > 5) {
            return false;
        }

        for (Double valor : rendimentos) {
            if (valor < 0) {
                return false;
            }
        }
        return true;
    }
}