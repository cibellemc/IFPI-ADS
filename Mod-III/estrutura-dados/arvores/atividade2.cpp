#include<stdio.h>
#include<iostream>
#include<stdlib.h>
#include "./atividade1.cpp"
using namespace std;

// Atividade 2 - Questão 13.2 (quantidade de nós)
int quantidade_nos(NoArv *raiz){
    if(raiz == NULL)
        return 0;
    else
        return 1 + quantidade_nos(raiz->esq) + quantidade_nos(raiz->dir);
}

// Atividade 2 -Questão 13.3 (quantidade de folhas)
int quantidade_folhas(NoArv *raiz){
    if(raiz == NULL)
        return 0;
    else if(raiz->esq == NULL && raiz->dir == NULL)
        return 1;
    else
        return quantidade_folhas(raiz->esq) + quantidade_folhas(raiz->dir);
}

// Atividade 2 -Questão 13.4 (altura)
int altura(NoArv *raiz){
    if(raiz == NULL){
        return -1;
    }
    else{
        int esq = altura(raiz->esq);
        int dir = altura(raiz->dir);
        if(esq > dir)
            return esq + 1;
        else
            return dir + 1;
    }
}

// Atividade 2 -Questão 13.5 (indica se o item x está na árvore)
NoArv* buscar(NoArv *raiz, int num){
    while(raiz){
        if(num < raiz->info)
            raiz = raiz->esq;
        else if(num > raiz->info)
            raiz = raiz->dir;
        else
            return raiz;
    }
    return NULL;
}


void inserir_ordenado(NoArv **raiz, int num){
    NoArv *aux = *raiz;
    while(aux){
        if(num < aux->info)
            raiz = &aux->esq;
        else
            raiz = &aux->dir;
        aux = *raiz;
    }
    aux = (NoArv*)malloc(sizeof(NoArv));
    aux->info = num;
    aux->esq = NULL;
    aux->dir = NULL;
    *raiz = aux;
}

/*int main(){

    NoArv *busca, *raiz = NULL;
    int opcao, info;

    do{
        printf("Operacoes em Arvores\n0 - Sair\n1 - Inserir ordenado\n2 - Imprimir\n3 - Buscar\n4 - Altura\n5 - Tamanho\n6 - Folhas\n> ");
        scanf("%d", &opcao);

        switch(opcao){
        case 1:
            printf("\nDigite um numero: ");
            scanf("%d", &info);
            inserir_ordenado(&raiz, info);
            break;
        case 2:
            printf("\nImpressao:\n");
            arv_imprime(raiz);
            printf("\n");
            break;
        case 3:
            printf("\nDigite o numero a ser procurado: ");
            scanf("%d", &info);
            //busca = buscar_versao_1(raiz, info);
            busca = buscar(raiz, info);
            if(busca)
                printf("\n\nNumero encontrado: %d\n", busca->info);
            else
                printf("\n\nNumero nao encontrado!\n");
            break;
        case 4:
            printf("\nAltura da arvore: %d\n\n", altura(raiz));
            break;
        case 5:
            printf("\nQuantidade de nos: %d\n", quantidade_nos(raiz));
            break;
        case 6:
            printf("\nQuantidade folhas: %d\n", quantidade_folhas(raiz));
            break;
        default:
            if(opcao != 0)
                printf("\nOpcao invalida!!!\n");
        }
    }while(opcao != 0);

    return 0;
}*/