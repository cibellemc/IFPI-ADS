public class Reacao implements Publicavel {
    private String tipoReacao;
    private Postagem postagem;

    public Reacao(String tipoReacao, Postagem postagem) {
        this.tipoReacao = tipoReacao;
        this.postagem = postagem;
    }

    @Override
    public void exibir() {
        System.out.println("Reação [" + tipoReacao + "] de " +
                postagem.getAutor().getNomeUsuario() + " na postagem " + postagem.getId());
    }

    @Override
    public Perfil getAutor() {
        return postagem.getAutor();
    }

    // outros métodos
}
