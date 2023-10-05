package questao1;

import java.io.FileWriter;
import java.io.IOException;

public class RepositorioDePosts {
    private String filePath; // Caminho do arquivo - responsabilidade extra 

    public RepositorioDePosts (String filePath){
        this.filePath = filePath; 
    }

    public void savePostToFile(Post post) {
        try (FileWriter writer = new FileWriter(filePath, true)) {
            writer.write("ID: " + post.getId() + "\n");
            writer.write("Texto: " + post.getTexto() + "\n");
            writer.write("Autor: " + post.getAutor().getNome() + "\n");
            writer.write("Data: " + post.getData() + "\n");
            writer.write("Quantidade de Likes: " + post.getQuantidadeDeLikes() + "\n");
            writer.write("\n"); 
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
