package questao3;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Double> rendimentos = new ArrayList<>();
        rendimentos.add(5000.0); 
        rendimentos.add(3000.0);

        List<Double> despesas = new ArrayList<>();
        despesas.add(1000.0);
        despesas.add(800.0);

        ImpostoDeRenda imposto = new ImpostoDeRenda("12345678901", rendimentos, despesas);

        imposto.processar();
    }
}
