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
        if (!ValidacaoImpostoDeRenda.cpfValido(cpfContribuinte)) {
            System.out.println("CPF inválido.");
            return;
        }

        if (!ValidacaoImpostoDeRenda.rendimentosValidos(rendimentos)) {
            System.out.println("Rendimento negativo encontrado.");
            return;
        }

        if (!ValidacaoImpostoDeRenda.despesasValidas(despesas)) {
            System.out.println("Despesa negativa encontrada.");
            return;
        }

        if (!ValidacaoImpostoDeRenda.menosDeCincoRendimentos(rendimentos)) {
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
