#include <stdio.h>
#include <iostream>

using namespace std;

typedef int Item;

typedef struct No {
    Item item;
    struct No *prox;
} *Lista;

Lista no(Item item, No *prox) {
    Lista lista = (Lista)malloc(sizeof(struct No));

    lista->item = item;
    lista->prox = prox;

    return lista;
}

void exibir(Lista lista) {
    if (lista != NULL) {
        cout << lista->item << " ";
        exibir(lista->prox);
    }
}

void anexar(Lista *lista1, Lista lista2) {
    if(lista2 == NULL) return;
    while ( *lista1 != NULL) lista1 = &(*lista1)->prox;
    *lista1 = lista2;
}

void destruir(Lista *lista) {
    while (*lista != NULL){
        Lista elemento = *lista;
        *lista = elemento->prox;
        free(elemento);
    }
    
}

int pertence(Item item, Lista lista) {
    if(lista == NULL) return 0;
    if(item == lista->item) return 1;
    return pertence(item, lista->prox);
}

Lista clone(Lista lista) {
    if(lista == NULL) return NULL;
    return no(lista->item, clone(lista->prox));
}

void exibe_invertido(Lista lista) {
    if(lista == NULL) return;
    exibe_invertido(lista->prox);
    cout << lista->item << " ";
}
