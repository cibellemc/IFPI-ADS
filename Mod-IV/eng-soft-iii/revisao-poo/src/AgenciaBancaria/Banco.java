package AgenciaBancaria;

import java.util.ArrayList;
import java.util.Scanner;

public class Banco {

    static Scanner input = new Scanner(System.in);
    static ArrayList<Conta> contas;

    public static void main(String[] args) {
        contas = new ArrayList<Conta>();
        operacoes();
    }

    public static void operacoes() {

        System.out.println("------------------------------------------------------");
        System.out.println("-------------Bem vindos a nossa Agência---------------");
        System.out.println("------------------------------------------------------");
        System.out.println("***** Selecione uma operação que deseja realizar *****");
        System.out.println("------------------------------------------------------");
        System.out.println("|   Opção 1 - Criar conta   |");
        System.out.println("|   Opção 2 - Depositar     |");
        System.out.println("|   Opção 3 - Sacar         |");
        System.out.println("|   Opção 4 - Transferir    |");
        System.out.println("|   Opção 5 - Listar        |");
        System.out.println("|   Opção 6 - Sair          |");

        int operacao = input.nextInt();

        switch (operacao) {
            case 1:
                criarConta();
                break;

            case 2:
                depositar();
                break;
        
            case 3:
                sacar();
                break;
            case 4:
                transferir();
                break;
            case 5:
                listarContas();
                break;
            case 6:
                System.out.println("Saindo...");
                System.exit(0); // para o sistema

            default:
                System.out.println("Opção inválida!");
                operacoes();
                break;
        }
    }

    private static void criarConta() {
        System.out.println("\nNome: ");
        String nome = input.next();

        System.out.println("\nCPF: ");
        String cpf = input.next();

        System.out.println("\nE-mail: ");
        String email = input.next();

        Pessoa pessoa = new Pessoa(nome, cpf, email);
        Conta conta = new Conta(pessoa);
        contas.add(conta);

        System.out.println("Conta criada com sucesso!");

        operacoes();
    }

    private static Conta encontrarConta(int numeroConta){
        Conta conta = null;

        if (contas.size() > 0) {
            for (Conta c: contas) {
                if (c.getNumeroConta() == numeroConta) {
                    conta = c;
                }
            } 
        }
        return conta;
    }

    private static void depositar() {
        System.out.println("Número da conta para depósito: ");
        int numeroConta = input.nextInt();

        Conta conta = encontrarConta(numeroConta);

        if (conta != null) {
            System.out.println("Valor do depósito (use vírgula): ");
            Double valorDeposito = input.nextDouble();
            conta.depositar(valorDeposito);
        } else {
            System.out.println("Conta não encontrada.");
        }

        operacoes();
    }

    private static void sacar() {
        System.out.println("Número da conta para saque: ");
        int numeroConta = input.nextInt();

        Conta conta = encontrarConta(numeroConta);

        if (conta != null) {
            System.out.println("Valor do saque: ");
            Double valorSaque = input.nextDouble();
            conta.sacar(valorSaque);
        } else {
            System.out.println("Conta não encontrada.");
        }

        operacoes();
    }

    private static void transferir() {
        System.out.println("Número da conta do remetente: ");
        int numeroContaRemetente = input.nextInt();

        Conta contaRemetente = encontrarConta(numeroContaRemetente);

        if (contaRemetente != null) {
            System.out.println("\nNúmero da conta do destinatário: ");
            int numeroContaDestino = input.nextInt();

            Conta contaDestino = encontrarConta(numeroContaDestino);

            if (contaDestino != null) {
                System.out.println("Valor da transferência: ");
                Double valorTransferencia = input.nextDouble();

                contaRemetente.transferir(contaDestino, valorTransferencia);
            }
        } else {
            System.out.println("Conta não encontrada.");
        }

        operacoes();
    }

    private static void listarContas() {
        if (contas.size() > 0) {
            for (Conta conta: contas) {
                System.out.println(conta);
            }
        } else {
            System.out.println("Não há contas cadastradas.");
        }

        operacoes();
    }
}
