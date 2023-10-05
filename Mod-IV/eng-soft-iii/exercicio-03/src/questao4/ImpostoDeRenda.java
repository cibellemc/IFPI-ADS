package questao4;

import java.util.List;
import questao4.validacoes.Validacao;

public class ImpostoDeRenda {
    private String cpfContribuinte;
    private List<Double> rendimentos;
    private List<Double> despesas;
    private List<Validacao> validacoes;

    public ImpostoDeRenda(String cpfContribuinte, List<Double> rendimentos, List<Double> despesas, List<Validacao> validacoes) {

        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
        this.validacoes = validacoes;
    }

    public void processar() {
        for (Validacao validacao : validacoes) {
            if (!validacao.validar()) {
                System.out.println("Erro de validação: " + validacao.getClass().getSimpleName());
                return;
            }
        }

        CalculadoraImpostoDeRenda calculadora = new CalculadoraImpostoDeRenda();
        double impostoDevido = calculadora.calcularImposto(rendimentos, despesas);

        RelatorioImpostoDeRenda relatorio = new RelatorioImpostoDeRenda();
        relatorio.gerarRelatorio(this, impostoDevido);
    }

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
