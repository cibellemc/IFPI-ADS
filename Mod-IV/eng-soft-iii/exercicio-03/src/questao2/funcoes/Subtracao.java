package questao2.funcoes;

import questao2.Operacao;

public class Subtracao implements Operacao{

    @Override
    public double executar(double a, double b) {
        return a - b;
    }
}
