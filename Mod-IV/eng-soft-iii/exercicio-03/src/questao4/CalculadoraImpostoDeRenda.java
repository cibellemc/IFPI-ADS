package questao4;

import java.util.List;

public class CalculadoraImpostoDeRenda {
    public double calcularImposto(List<Double> rendimentos, List<Double> despesas) {

        double rendaTotal = rendimentos.stream().mapToDouble(Double::doubleValue).sum();
        double despesaTotal = despesas.stream().mapToDouble(Double::doubleValue).sum();
        double baseCalculo = rendaTotal - despesaTotal;      
        
        // https://investnews.com.br/financas/deducao-imposto-de-renda-2023-confira-a-tabela-e-gastos/

        if (baseCalculo <= 2112.00) {
            return 0.0;
        }

        if (baseCalculo <= 2826.65) {
            return baseCalculo * 0.075 - 158.40;
        }

        if (baseCalculo <= 3751.05) {
            return baseCalculo * 0.15 - 370.40;
        }

        if (baseCalculo <= 4664.68) {
            return baseCalculo * 0.225 - 651.73;
        }

        return baseCalculo * 0.275 - 884.96; 
    }
}
