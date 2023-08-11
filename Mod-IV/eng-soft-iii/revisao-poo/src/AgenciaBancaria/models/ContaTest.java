package AgenciaBancaria.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ContaTest {
    private Conta conta;

    @BeforeEach
    public void setUp() {
        Pessoa pessoa = new Pessoa("Nome", "12345678901", "email@example.com");
        String tipo = "corrente"; // ou "poupança"
        conta = new Conta(pessoa, tipo);
    }

    @Test
    public void testDepositar() {
        conta.depositar(100.00);

        assertEquals(100.00, conta.getSaldo());
    }

    @Test
    public void testSacarComSaldoSuficiente() {
        conta.depositar(200.0);
        conta.sacar(50.00);

        assertEquals(150, conta.getSaldo());
    }
}