public class Comentario implements Publicavel {
    private Postagem postagemOriginal;
    private Postagem postagem; // A postagem à qual o comentário está associado

    public Comentario(Postagem postagemOriginal, Postagem postagem) {
        this.postagemOriginal = postagemOriginal;
        this.postagem = postagem;
    }

    @Override
    public void exibir() {
        System.out.println("Comentário de " + postagem.getAutor().getNomeUsuario() + " em resposta a postagem [" +
                postagemOriginal.getId() + "]: " + postagem.getConteudo());
    }

    @Override
    public Perfil getAutor() {
        return postagem.getAutor();
    }

    // outros métodos
}
