### 📌 | Atividade 02 

### ✅ | Checklist 
[x] 1. Qual a relação que coesão possui com as responsabilidades de uma classe?
<br>
[x] 2. Contextualize o conceito de coesão de acordo com as fontes abaixo:
<br>
[x] 3. Refatore o código da classe Cliente para melhorar a coesão.
<br>
[x] 4. Refatore a classe Utilitarios criando classes coesas para funcionalidades específicas.
<br>
[ ] 5. Demonstre com Classes os principais tipos de coesão presentes no artigo Acoplamento e Coesão.
<br>
[x] 6. Explique com suas palavras o que é o acoplamento entre classes.
<br>
[ ] 7. Crie e exemplifique uma classe com alto acoplamento e refatore-a para ter o acoplamento reduzido.
<br>
[ ] 8. Por que dizemos que o princípio "Tell, don't ask" mitiga problema de acoplamento.
<br>
[ ] 9. É possível zerar o acoplamento em um software simples ou complexo? Justifique.
<br>
[ ] 10. O encapsulamento também mitiga o acoplamento alto? Discuta o exemplo da página 7 do artigo Coesão e Acoplamento em Sistemas Orientados a Objetos.
<br>
[ ] 11. Refatore a classe Usuario para reduzir o acoplamento em relação a Posts e Comentários.
<br>
[ ] 12. Refatore a classe Usuario para reduzir o acoplamento em relação a amigos.
<br>
[ ] 13. Verifique seus repositórios e identifique problemas de coesão e classifique-os.
<br>
[ ] 14. Verifique seus repositórios e identifique problemas de acoplamento e proponha melhorias.

### ✏️ | Resolução 
<details>
  <summary>1. Qual a relação que coesão possui com as responsabilidades de uma classe?</summary>

  **Resposta:** Quanto mais coesa é uma classe, menos responsabilidades ela terá e menor a chance de assumir responsabilidades que não são suas.
</details>
<br>

<details>
  <summary>2. Contextualize o conceito de coesão de acordo com as fontes abaixo:
    <ol>
    <li type="a">Livro Clean Code: páginas de 140 a 151;</li>
    <li type="a"> Artigo Coesão e Acoplamento em Sistemas Orientados a Objetos
    disponível em https://www.researchgate.net/publication261026207_Coesao_e_Acoplamento_em_Sistemas_OO;</li>
    <li type="a">Livro Orientação a Objetos e SOLID para Ninjas Projetando classes flexíveis - Casa do Codigo. Princípio da responsabilidade única. Página 5 em diante.</li>
    </ol>
</summary>

**Resposta:** Uma classe coesa é aquela que se apropria do princípio de responsabilidade única. Por exemplo, o método imprimeSoma() não <b>calcula e imprime</b>, mas apenas imprime.
</details>
<br>

<details>
<summary>
        3. A classe abaixo possui problemas de coesão:

```
public class Cliente {
    private int id;
    private String nome;
    private String endereco;
    private double valorCompra;
    private String numeroConta;
    private double saldo;

    public void exibirInformacoes() {
        // exibir informações do cliente
    }

    public void realizarCompra() {
        // lógica de compra
    }

    public void atualizarSaldo() {
        // atualizar saldo do cliente
    }
}
```

Refatore o código criando classes Conta, Compra e Cliente de forma que cada uma fique coesa.
</summary>

**Resposta:**
```
public class Cliente {
    private int id;
    private String nome;
    private String endereco;
    this.contas = new ArrayList<>();
    this.compras = new ArrayList<>();

    public void exibirInformacoes() {
        // exibir informações do cliente
    }
}

public class Conta {
    private String numeroConta;
    private double saldo;

    public double getSaldo() {
        return saldo;
    }

    public void debitarSaldo(double valor) {
        if (valor <= saldo) {
            saldo -= valor;
        } else {
            System.out.println("Saldo insuficiente para debitar o valor.");
        }
    }
}

public class Compra {
    private double valorCompra;

    public void realizarCompra(Conta conta) {
        if (valor <= conta.getSaldo()) {
            conta.debitarSaldo(valor);
            System.out.println("Compra realizada com sucesso!");
        } else {
            System.out.println("Saldo insuficiente para realizar a compra.");
        }
    }
}
```
</details>
<br>

<details>
<summary>
4. Classes utilitárias são muito comuns, pois elas agregam funcionalidades usadas por outras classes para centralizar códigos de utilidade geral. A classe abaixo entretanto possui problemas de coesão por ter diferentes aspectos de utilidades. Refatore-a criando classes necessárias de forma a deixar as classes resultantes coesas. Implemente os métodos e além disso, modifique os métodos para acessarem atributos e não usar os parâmetros passados.

```
public class Utilitarios {
    public void ordenar(int[] array) {
        // lógica de ordenação
    }

    public void embaralhar(int[] array) {
        // lógica de ordenação
    }

    public String removerEspacos(String texto) {
        // lógica de remoção de espaços
    }

    public String[] quebrarEmPalavras(String texto) {
        // lógica de remoção de espaços
    }

    public double calcularMedia(double[] numeros) {
        // lógica de cálculo de média
    }

    public double calcularDesvioPadrão(double[] numeros) {
        // lógica de cálculo de média
    }
}
```
</summary>

**Resposta:**
```
public class OrdenacaoUtils {
    public void ordenar(int[] array) {
        // lógica de ordenação
    }

    public void embaralhar(int[] array) {
        // lógica de embaralhamento
    }
}

public class TextoUtils {
    public String removerEspacos(String texto) {
        // lógica de remoção de espaços
    }

    public String[] quebrarEmPalavras(String texto) {
        // lógica de quebra em palavras
    }
}

public class CalculoUtil {
    public double calcularMedia(double[] numeros) {
        // lógica de cálculo de média
    }

    public double calcularDesvioPadrao(double[] numeros) {
        // lógica de cálculo de desvio padrão
    }
}
```
</details>
<br>

<details>
<summary>
5. Demonstre com Classes os principais tipos de coesão presentes no artigo
Acoplamento e Coesão, disponível em https://www.facom.ufu.br/~ronaldooliveira/PDS-
2019-1/Aula10-Complemento-AcoplamentoCoesao.pdf
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
6. Explique com suas palavras o que é o acoplamento entre classes.
</summary>

**Resposta:**
É a dependência que uma classe tem na outra para funcionar.
</details>
<br>

<details>
<summary>
7. Crie e exemplifique uma classse com alto acoplamento e refatore-a para ter o
acoplamento reduzido.
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
8. Por que dizemos que o princípio ”Tell, don’t ask” mitiga problema de acoplamento.
Demonstre.
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
9. É possivel zerar o acoplamento em um software simples ou complexo? Justifique.
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
10. O encapsulamento também mitiga o acoplamento alto? Discuta o exemplo da
página 7 do artigo Coesão e Acoplamento em Sistemas Orientados a Objetos.
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
11. A classe abaixo no contexto de uma rede social é fortemente acoplada a Posts e Comentários.

```
public class Usuario {
    private List<Post> posts;
    private List<Comentario> comentarios;

    public void criarPost(String conteudo) {
        Post novoPost = new Post(conteudo);
        posts.add(novoPost);
    }

    public void criarPost(String conteudo) {
        Comentario novoComentario = new Comentario(conteudo);
        comentarios.add(novoComentario);
    }
}
```
Crie uma interface interface ou classe abstrata chamada Conteudo que seja
implementada tanto por Post quanto por outras classes de conteúdo, como
Comentario. Dessa forma, a classe Usuario terá uma lista de Conteudo e pode
criar e gerenciar qualquer tipo de conteúdo sem conhecer as implementações
específicas.
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
12. A classe usuário abaixo está acoplada a si mesmo como uma lista de amigos. Só que nem todos são amigos, podem ser seguidores ou outro tipo de
relacionamento. Proponha uma classe intermediária, como Relacionamento, que
armazene o usuario que iniciou o relacionamento, o usuario que aceitou, bem
como o tipo de relacionamento (enum) entre dois usuários. Refatore a classe
usuário para em vez de uma lista de Usuarios, tenha uma lista de relacionamentos.

```
public class Usuario {
    private List<Usuario> amigos;

    public void adicionarAmigo(Usuario amigo) {
        amigos.add(amigo);
    }
}
```
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
13. Verifique seus repositórios e repositórios públicos e identifique pelo menos 1 problemas de coesão de cada categoria acima listada na questão 5, classifique-os e proponha melhorias.
</summary>

**Resposta:**
</details>
<br>

<details>
<summary>
14. Verifique seus repositórios e repositórios públicos e identifique problemas de acoplamento e proponha melhorias.
</summary>

**Resposta:**
</details>