package questao2;

import java.util.ArrayList;
import java.util.List;

import questao2.funcoes.Divisao;
import questao2.funcoes.Multiplicacao;
import questao2.funcoes.Soma;
import questao2.funcoes.Subtracao;

public class Main {
    public static void main(String[] args) {
        double a = 10.0;
        double b = 5.0;
        
        Calculadora calculadora = new Calculadora(a, b);
        
        List<Operacao> operacoes = new ArrayList<>();
        operacoes.add(new Soma());
        operacoes.add(new Subtracao());
        operacoes.add(new Multiplicacao());
        operacoes.add(new Divisao());

        List<Double> resultados = calculadora.calcular(operacoes);

        for (Double resultado : resultados) {
            System.out.println("Resultado: " + resultado);
        }
    }    
}
