#include "lista.hpp"

typedef struct {
    Lista inicio;
    Lista fim;
} Fila;

Fila fila(int capacidade) {
    Fila fila;
    fila.inicio = NULL;
    fila.fim = NULL;
    return fila;
}

bool vaziaf(Fila fila) {
    return (fila.inicio == NULL);
}

void enfileira(Lista novoItem, Fila& fila) {
    if (fila.inicio == NULL) {
        fila.inicio = novoItem;
        fila.fim = novoItem;
    } else {
        fila.fim->prox = novoItem;
        fila.fim = novoItem;
    }
}

Lista desenfileira(Fila& fila) {
    if (fila.inicio == NULL) {
        return NULL;
    } else {
        Lista removido = fila.inicio;
        fila.inicio = fila.inicio->prox;
        if (fila.inicio == NULL) {
            fila.fim = NULL;
        }
        return removido;
    }
}

void destroi(Fila& fila) {
    Lista atual = fila.inicio;
    while (atual != NULL) {
        Lista proximo = atual->prox;
        free(atual);
        atual = proximo;
    }
    fila.inicio = NULL;
    fila.fim = NULL;
}