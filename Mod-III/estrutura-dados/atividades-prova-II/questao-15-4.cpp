/*
Cibelle Maciel
Gabriel Oliver
Marcos Vinícius
*/


// Questão 15.4 - letra a
#include <iostream>
#include <vector>

using namespace std;

typedef struct No {
    int item;
    struct No* prox;
} *Lista;

Lista no(int item, No* prox) {
    Lista lista = new No;
    lista->item = item;
    lista->prox = prox;
    return lista;
}

void destruir(Lista lista) {
    if (lista != NULL) {
        destruir(lista->prox);
        delete lista;
    }
}

vector<Lista> Adj;     // Lista de adjacência
vector<bool> visited;  // Vetor de visitados

void dfs(int v) {
    visited[v] = true;
    cout << v << " ";

    for (Lista u = Adj[v]; u != NULL; u = u->prox) {
        if (!visited[u->item]) {
            dfs(u->item);
        }
    }
}

int main() {
    Adj = {
        no(1, no(2, no(3, NULL))),
        no(0, no(3, NULL)),
        no(0, no(3, no(4, NULL))),
        no(2, no(5, no(1, NULL))),
        NULL,
        no(3, no(4, NULL))
    };

    int numVertices = Adj.size();
    visited.resize(numVertices, false);

    int inicio;
    cout << "Digite o vertice de inicio da DFS: ";
    cin >> inicio;

    cout << "DFS a partir do vertice " << inicio << ": ";
    dfs(inicio);
    cout << endl;

    for (Lista lista : Adj) {
        destruir(lista);
    }

    return 0;
}