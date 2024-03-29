package AgenciaBancaria.main;

import java.util.ArrayList;
import java.util.Scanner;

import AgenciaBancaria.models.Conta;
import AgenciaBancaria.models.ContaCorrente;
import AgenciaBancaria.models.ContaPoupanca;
import AgenciaBancaria.models.Pessoa;

public class Banco {

    static Scanner input = new Scanner(System.in);
    static ArrayList<Conta> contas;

    public static void main(String[] args) {
        contas = new ArrayList<Conta>();
        operacoes();
    }

    public static void operacoes() {

        System.out.println("\n------------------------------------------------------");
        System.out.println("-------------Bem vind@ à nossa agência---------------");
        System.out.println("------------------------------------------------------");
        System.out.println("***** Selecione uma operação que deseja realizar *****");
        System.out.println("------------------------------------------------------");
        System.out.println("|   Opção 1 - Criar conta    |");
        System.out.println("|   Opção 2 - Depositar      |");
        System.out.println("|   Opção 3 - Sacar          |");
        System.out.println("|   Opção 4 - Transferir     |");
        System.out.println("|   Opção 5 - Listar         |");
        System.out.println("|   Opção 6 - Ver rendimento |");
        System.out.println("|   Opção 7 - Deletar conta  |");
        System.out.println("|   Opção 8 - Sair           |");

        int operacao = input.nextInt();

        switch (operacao) {
            case 1 -> criarConta();
            case 2 -> depositar();
            case 3 -> sacar();
            case 4 -> transferir();
            case 5 -> listarContas();
            case 6 -> consultarRendimento();
            case 7 -> deletarConta();
            case 8 -> {
                System.out.println("Saindo...");
                System.exit(0); // para o sistema
            }
            default -> {
                System.out.println("Opção inválida!");
                operacoes();
            }
        }
    }

    private static void deletarConta() {
        System.out.println("Número da conta para exclusão: ");
        int numeroConta = input.nextInt();

        Conta conta = encontrarConta(numeroConta);

        if (conta != null) {
            contas.remove(conta);

            System.out.println("Conta excluída com sucesso.");
        } else {
            System.out.println("Conta não encontrada.");
        }

        operacoes();
    }

    private static void criarConta() {
        System.out.println("\nNome: ");
        String nome = input.next();

        System.out.println("\nCPF: ");
        String cpf = input.next();

        System.out.println("\nE-mail: ");
        String email = input.next();

        Pessoa pessoa = new Pessoa(nome, cpf, email);

        System.out.println("\nEscolha seu tipo de conta ideal:\n1 - Comum\n2 - Corrente\n3 - Poupança");
        int tipoConta = input.nextInt();


        switch (tipoConta) {
            case 1 -> {
                Conta conta = new Conta(pessoa, "comum");
                contas.add(conta);
            }
            case 2 -> {
                System.out.println("Informe o valor do limite do cheque especial:");
                Double limiteChequeEspecial = input.nextDouble();
                ContaCorrente contaCorrente = new ContaCorrente(pessoa, "corrente", limiteChequeEspecial);
                contas.add(contaCorrente);
            }
            case 3 -> {
                System.out.println("Informe a taxa de rendimento (em decimal):");
                Double taxaRendimento = input.nextDouble();
                ContaPoupanca contaPoupanca = new ContaPoupanca(pessoa, "poupança", taxaRendimento);
                contas.add(contaPoupanca);
            }
            default -> {
                System.out.println("Opção inválida!");
                operacoes();
            }
        }
            
        System.out.println("Conta criada com sucesso!");

        operacoes();
    }

    private static Conta encontrarConta(int numeroConta){
        Conta conta = null;

        if (!contas.isEmpty()) {
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

    private static void consultarRendimento() {
        System.out.println("Número da conta para consulta: ");
        int numeroConta = input.nextInt();

        Conta conta = encontrarConta(numeroConta);
                
        if (conta != null)  {

            if (conta instanceof ContaPoupanca contaPoupanca) {

                System.out.println("\nInforme quantos meses o dinheiro ficou parado:");
                int meses = input.nextInt();
        
                contaPoupanca.calcularRendimento(meses);
            } else {
                System.out.println("Conta não é do tipo poupança.");
            }
        } else {
            System.out.println("Conta não encontrada.");
        }

        operacoes();
    }

    private static void listarContas() {
        if (!contas.isEmpty()) {
            for (Conta conta: contas) {
                System.out.println(conta);
            }
        } else {
            System.out.println("Não há contas cadastradas.");
        }

        operacoes();
    }
}
