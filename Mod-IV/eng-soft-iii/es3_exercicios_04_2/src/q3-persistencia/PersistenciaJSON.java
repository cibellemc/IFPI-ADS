import java.io.IOException;

public class PersistenciaJSON {
    public Persistencia persistencia;

    public PersistenciaJSON(Persistencia persistencia) {
        this.persistencia = persistencia;
    }

    public void salvar(String dados, String arquivo) throws IOException {
        if (!dados.startsWith("{")) {
            throw new IllegalArgumentException("Dados não estão em formato JSON.");
        }
        persistencia.salvar(dados, arquivo);

    }
}
