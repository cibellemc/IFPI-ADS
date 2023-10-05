package questao1;

import java.util.Date;

public class RedeSocial {
    public static void main(String[] args) {
        /*Autor autor = new Autor(1, "Autor Teste", "autor@teste.com");
        Post post = new Post(1, "Texto do post de teste", autor, new Date());*/
        Autor autor2 = new Autor(2, "Autor2 Teste", "autor2@teste.com");
        
        /*Post post = new Post(1, "Texto do post de teste", autor, new Date());*/
        Post post2 = new Post(2, "Texto do post de teste 2", autor2, new Date());
            
        RepositorioDePosts repositorio = new RepositorioDePosts("src/questao1/repositorio-de-posts.txt");

        //repositorio.savePostToFile(post);
        repositorio.savePostToFile(post2);
    }
}
