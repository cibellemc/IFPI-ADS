package AgenciaBancaria.models;

import AgenciaBancaria.interfaces.Cliente;

public class Pessoa implements Cliente {

    private static int contadorDeClientes = 0;

    private String nome;
    private String cpf;
    private String email;

    public Pessoa(String nome, String cpf, String email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        contadorDeClientes += 1;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public static int getcontadorDeClientes() {
        return contadorDeClientes;
    }

    public String toString(){
        return "\nNome: " + this.getNome() +
                 "\nCPF: " + this.getCpf() +
                 "\nE-mail: " + this.getEmail();
    }
}
