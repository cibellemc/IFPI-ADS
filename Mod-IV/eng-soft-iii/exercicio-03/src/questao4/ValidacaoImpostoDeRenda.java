package questao4;

import java.util.List;

public class ValidacaoImpostoDeRenda {
    public static boolean cpfValido(String cpf) {
        return !cpf.isEmpty() && cpf.length() == 11;
    }

    public static boolean rendimentosValidos(List<Double> rendimentos) {
        for (Double valor : rendimentos) {
            if (valor < 0) {
                return false;
            }
        }
        return true;
    }

    public static boolean despesasValidas(List<Double> despesas) {
        for (Double valor : despesas) {
            if (valor < 0) {
                return false;
            }
        }
        return true;
    }

    public static boolean menosDeCincoRendimentos(List<Double> rendimentos) {
        return rendimentos.size() <= 5;
    }
}
