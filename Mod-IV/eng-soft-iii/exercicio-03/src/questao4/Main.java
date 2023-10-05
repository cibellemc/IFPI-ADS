package questao4;

import java.util.ArrayList;
import java.util.List;

import questao4.validacoes.Validacao;
import questao4.validacoes.ValidacaoCPF;
import questao4.validacoes.ValidacaoDespesas;
import questao4.validacoes.ValidacaoRendimentos;

public class Main {
    public static void main(String[] args) {

        List<Double> rendimentos = new ArrayList<>();
        rendimentos.add(5000.0); 
        rendimentos.add(3000.0);

        List<Double> despesas = new ArrayList<>();
        despesas.add(1000.0);
        despesas.add(800.0);

        String cpf = "12345678901";

        List<Validacao> validacoes = new ArrayList<>();
        validacoes.add(new ValidacaoCPF(cpf)); 
        validacoes.add(new ValidacaoRendimentos(rendimentos)); 
        validacoes.add(new ValidacaoDespesas(despesas)); 
        
        ImpostoDeRenda imposto = new ImpostoDeRenda(cpf, rendimentos, despesas, validacoes);
        imposto.processar();
    }
}
