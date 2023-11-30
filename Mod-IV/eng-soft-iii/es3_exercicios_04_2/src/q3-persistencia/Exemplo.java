import java.io.IOException;

public class Exemplo {
    public static void main(String[] args) {
        Persistencia persistencia = new Persistencia();
        PersistenciaJSON persistenciaJSON = new PersistenciaJSON(persistencia);

        try {
            persistencia.salvar("Dados normais", "arquivo.txt");
            persistenciaJSON.salvar("{ \"chave\": \"valor\" }", "arquivo.json");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
