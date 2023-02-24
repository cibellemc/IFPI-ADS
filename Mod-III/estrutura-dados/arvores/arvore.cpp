#include<stdio.h>
#include<iostream>
#include<stdlib.h>
using namespace std;

struct noArv {
    int info;
    struct noArv* esq;
    struct noArv* dir;
};

typedef struct noArv NoArv;

NoArv* arv_criavazia(void){
    return NULL;
}

NoArv* arv_cria(char c, NoArv* e, NoArv* d){
    NoArv* p = (NoArv*)malloc(sizeof(NoArv));
}

NoArv* arv_libera(NoArv* a){

}

int arv_vazia(NoArv* a){
    return a == NULL;
}

int arv_pertence(NoArv* a, char c);

void arv_imprime(NoArv* a){
        if (!arv_vazia(a)){
            cout<< a->info;
            arv_imprime(a->esq);
            arv_imprime(a->dir);
        }
}
