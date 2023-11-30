import java.util.ArrayList;
import java.util.List;

public class Postagem implements Publicavel {
private String id;
    private Perfil autor;
    private String conteudo;
    private List<Reacao> reacoes;
    private List<Comentario> comentarios;

    public Postagem(String id, Perfil autor, String conteudo) {
        this.id = id;
        this.autor = autor;
        this.conteudo = conteudo;
        this.reacoes = new ArrayList<>();
        this.comentarios = new ArrayList<>();
    }

    @Override
    public void exibir() {
        System.out.println("Postagem [" + id + "] de " + autor.getNomeUsuario() +
                ": " + conteudo);
        for (Reacao reacao : reacoes) {
            reacao.exibir();
        }
        for (Comentario comentario : comentarios) {
            comentario.exibir();
        }
    }

    public void adicionarReacao(Reacao reacao) {
        reacoes.add(reacao);
    }

    public void adicionarComentario(Comentario comentario) {
        comentarios.add(comentario);
    }

    public List<Reacao> getReacoes() {
        return reacoes;
    }

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    @Override
    public Perfil getAutor() {
        return autor;
    }

    // outros métodos
}
    
}
