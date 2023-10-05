package questao4;

import java.util.List;

public class ImpostoDeRenda {
    private String cpfContribuinte;
    private List<Double> rendimentos;
    private List<Double> despesas;

    public ImpostoDeRenda(String cpfContribuinte, List<Double> rendimentos, List<Double> despesas) {
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }

    public void processar() {
        // validações
        if (cpfContribuinte.isEmpty() || cpfContribuinte.length() != 11) {
            System.out.println("CPF inválido.");
            return;
        }

        for (Double valor : rendimentos) {
            if (valor < 0) {
                System.out.println("Rendimento negativo encontrado.");
                return;
            }
        }

        for (Double valor : despesas) {
            if (valor < 0) {
                System.out.println("Despesa negativa encontrada.");
                return;
            }
        }

        if (rendimentos.size() > 5) {
            System.out.println("Mais de 5 rendimentos encontrados.");
            return;
        }

        CalculadoraImpostoDeRenda calculadora = new CalculadoraImpostoDeRenda();
        double impostoDevido = calculadora.calcularImposto(rendimentos, despesas);

        RelatorioImpostoDeRenda relatorio = new RelatorioImpostoDeRenda();
        relatorio.gerarRelatorio(this, impostoDevido);
    }

    // Getters para os atributos
    public String getCpfContribuinte() {
        return cpfContribuinte;
    }

    public List<Double> getRendimentos() {
        return rendimentos;
    }

    public List<Double> getDespesas() {
        return despesas;
    }
}
