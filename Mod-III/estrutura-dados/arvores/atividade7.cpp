#include "atividade2.cpp"

NoArv* deleteNoArv(NoArv* raiz, int key) {
    // caso base
    if (arv_vazia(raiz)) return raiz;

    // se a chave for menor que o valor da raiz, vá para a subárvore esquerda
    if (key < raiz->info)
        raiz->esq = deleteNoArv(raiz->esq, key);

    // se a chave for maior que o valor da raiz, vá para a subárvore direita
    else if (key > raiz->info)
        raiz->dir = deleteNoArv(raiz->dir, key);

    // se a chave for igual ao valor da raiz, este é o nó a ser removido
    else {
        // caso 1: o nó não tem filhos ou apenas um filho
        if (arv_vazia(raiz->esq)) {
            NoArv* temp = raiz->dir;
            free(raiz);
            return temp;
        }
        else if (arv_vazia(raiz->dir)) {
            NoArv* temp = raiz->esq;
            free(raiz);
            return temp;
        }

        // caso 2: o nó tem dois filhos, encontre o sucessor in-order
        NoArv* temp = raiz->dir;
        while (temp && temp->esq != NULL)
            temp = temp->esq;

        // copie o valor do sucessor in-order para o nó atual
        raiz->info = temp->info;

        // exclua o sucessor in-order
        raiz->dir = deleteNoArv(raiz->dir, temp->info);
    }
    return raiz;
}

int main(){
    NoArv *b = arv_cria(1,arv_cria(2,arv_cria(4,arv_criavazia(),arv_criavazia()),arv_cria(5,arv_criavazia(),arv_criavazia())),arv_cria(3,arv_criavazia(),arv_cria(6,NULL,NULL)));
    arv_imprime(b);
    cout<<"\n";
    NoArv *c = deleteNoArv(b,4);
    arv_imprime(c);
}

