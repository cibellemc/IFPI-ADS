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
[x] 5. Demonstre com Classes os principais tipos de coesão presentes no artigo Acoplamento e Coesão.
<br>
[x] 6. Explique com suas palavras o que é o acoplamento entre classes.
<br>
[x] 7. Crie e exemplifique uma classe com alto acoplamento e refatore-a para ter o acoplamento reduzido.
<br>
[x] 8. Por que dizemos que o princípio "Tell, don't ask" mitiga problema de acoplamento.
<br>
[x] 9. É possível zerar o acoplamento em um software simples ou complexo? Justifique.
<br>
[x] 10. O encapsulamento também mitiga o acoplamento alto? Discuta o exemplo da página 7 do artigo Coesão e Acoplamento em Sistemas Orientados a Objetos.
<br>
[x] 11. Refatore a classe Usuario para reduzir o acoplamento em relação a Posts e Comentários.
<br>
[x] 12. Refatore a classe Usuario para reduzir o acoplamento em relação a amigos.
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
1. Coesão coincidental:  não têm uma relação lógica entre si e são agrupadas de maneira arbitrária ou aleatória
```
public class Utilitarios {
    public void calcularImposto() { // Cálculo de impostos }

    public void reproduzirMusica(String musica) { // Reprodução de música }
}
```
2. Coesão lógica: papel semelhante ou complementar dentro do contexto
```
public class Calculadora {
    public int somar(int a, int b) {
        return a + b;
    }

    public int subtrair(int a, int b) {
        return a - b;
    }
}
```
3. Coesão funcional: funcionalidades têm objetivo comum e compartilham um propósito claro
```
public class GerenciadorDeProdutos {
    public void adicionarProduto(Produto produto) {
        // Adicionar um novo produto ao catálogo
    }

    public void removerProduto(Produto produto) {
        // Remover um produto do catálogo
    }

    public Produto buscarProdutoPorID(int id) {
        // Buscar um produto por ID
    }
}
```
4. Coesão de Comunicação: compartilham informações ou dados em comum
```
public class MensagensChat {
    public void enviarMensagem(Mensagem mensagem) {
        // Enviar uma mensagem para o chat
    }

    public void receberMensagem(Mensagem mensagem) {
        // Receber uma mensagem do chat e exibi-la
    }

    public void excluirMensagem(Mensagem mensagem) {
        // Excluir uma mensagem do chat
    }
}
```
5. Coesão Temporal: executadas no mesmo período de tempo ou ciclo de execução
```
public class Agenda {
    public void adicionarEvento(Evento evento) {
        // Adicionar um evento à agenda
    }

    public void removerEvento(Evento evento) {
        // Remover um evento da agenda
    }

    public void notificarEventos() {
        // Notificar eventos que estão agendados para hoje
    }
}
```
6. Coesão Procedural: processo/tarefa específicos
```
public class ProcessamentoDePedidos {
    public void receberPedido(Pedido pedido) {
        // Receber um novo pedido
    }

    public void validarPedido(Pedido pedido) {
        // Validar o pedido (verificar estoque, pagamento, etc.)
    }

    public void processarPedido(Pedido pedido) {
        // Processar o pedido (gerar fatura, enviar confirmação, etc.)
    }
}
```
7. Coesão Sequencial: executadas em sequência específica
```
public class FluxoDeTrabalho {
    public void iniciar() {
        // Iniciar o fluxo de trabalho
    }

    public void passo1() {
        // Executar o passo 1 do fluxo de trabalho
    }

    public void passo2() {
        // Executar o passo 2 do fluxo de trabalho
    }

    public void finalizar() {
        // Finalizar o fluxo de trabalho
    }
}
```
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
1. Classe com Alto Acomplamento
```
public class Pedido {
    private String descricao;
    private Cozinha cozinha;

    public Pedido(String descricao, Cozinha cozinha) {
        this.descricao = descricao;
        this.cozinha = cozinha;
    }

    public void preparar() { // depende diretamente de Cozinha
        cozinha.prepararPedido(this);
    }
}

public class Cozinha { 
    public void prepararPedido(Pedido pedido) {
        /**/
        System.out.println("Preparando pedido: " + pedido.getDescricao());
    }
}
```
2. Classe Refatorada
```
public interface Cozinha { // introdução da interface, que será nova dependência de Pedido
    void prepararPedido(Pedido pedido);
}

public class Pedido {
    private String descricao;
    private Cozinha cozinha;

    public Pedido(String descricao, Cozinha cozinha) {
        this.descricao = descricao;
        this.cozinha = cozinha;
    }

    public void preparar() {
        cozinha.prepararPedido(this); // não é afetada se outras implementações de Cozinha forem criadas
    }
}

public class CozinhaDoRestaurante implements Cozinha {
    public void prepararPedido(Pedido pedido) {
        /**/
        System.out.println("Preparando pedido: " + pedido.getDescricao());
    }
}
```
</details>
<br>

<details>
<summary>
8. Por que dizemos que o princípio ”Tell, don’t ask” mitiga problema de acoplamento.
Demonstre.
</summary>

**Resposta:**
Porque promove a encapsulação e reduz a exposição de informações internas.
Ex:
```
// ask - pagamento precisa saber do estado de pedido
if (pedido.isProntoParaPagamento()) {
    pagamento.processar();
}

// tell - pedido sabe do seu estado e age com base nele
pedido.processarPagamento(pagamento);
```
</details>
<br>

<details>
<summary>
9. É possivel zerar o acoplamento em um software simples ou complexo? Justifique.
</summary>

**Resposta:**
Não, além de que isso não é desejável. Especialmente em softwares complexos, com muitas partes se comunicando e cooperando, o acoplamento é inevitável. Reduzir acoplamento e aumentar coezão é a prioridade, em detrimento do acoplamento zero.
</details>
<br>

<details>
<summary>
10. O encapsulamento também mitiga o acoplamento alto? Discuta o exemplo da
página 7 do artigo Coesão e Acoplamento em Sistemas Orientados a Objetos.
</summary>

**Resposta:**
Sim, porque não precisamos acessar diretamente estados fora da classe, isso é feito por métodos e interfaces. No segundo exemplo, ao invés de setar "on", 1 ou 2 para mudar a condição da lâmpada, usamos métodos que escondem a complexidade, melhoram a legibilidade e coesão. 
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
```
public interface Conteudo {}

public class Post implements Conteudo {
    private String conteudo;

    public Post(String conteudo) {
        this.conteudo = conteudo;
    }

    // métodos específicos de Post
}

public class Comentario implements Conteudo {
    private String conteudo;

    public Comentario(String conteudo) {
        this.conteudo = conteudo;
    }

    // métodos específicos de Comentario
}

public class Usuario {
    private List<Conteudo> conteudos;

    public void criarConteudo(Conteudo novoConteudo) {
        conteudos.add(novoConteudo);
    }
}
```

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
```
public enum TipoRelacionamento {
    AMIGO,
    SEGUIDOR
}

public class Relacionamento {
    private Usuario usuarioSolicitante;
    private Usuario usuarioAprovador;
    private TipoRelacionamento tipo;

    public Relacionamento(Usuario iniciador, Usuario receptor, TipoRelacionamento tipo) {
        this.usuarioSolicitante = iniciador;
        this.usuarioAprovador = receptor;
        this.tipo = tipo;
    }
}

public class Usuario {
    private List<Relacionamento> relacoes;

    public Usuario() {
        relacionamentos = new ArrayList<>();
    }

    public void adicionarRelacionamento(Relacionamento novoRelacionamento) {
        relacionamentos.add(novoRelacionamento);
    }
}
```
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