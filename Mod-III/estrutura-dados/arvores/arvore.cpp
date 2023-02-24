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

NoArv* arv_cria(int c, NoArv* e, NoArv* d){
    NoArv* p = (NoArv*)malloc(sizeof(NoArv));
    if(p==NULL) exit(1);
    p->info = c;
    p->esq = e;
    p->dir = d;
    return p;
}

/*NoArv* arv_libera(NoArv* a){
    if(!arv_vazia(a)){
        arv_libera(a->esq);
        arv_libera(a->dir);
        free(a);
    }
    return NULL;
}*/

int arv_vazia(NoArv* a){
    return a == NULL;
}

//int arv_pertence(NoArv* a, char c);

void arv_imprime(NoArv* a){
    if (!arv_vazia(a)){
        cout<<"<" <<a->info;
        arv_imprime(a->esq);
        arv_imprime(a->dir);
        cout<<">";
    }
    else {
        cout<<"<VAZIO>";
    }
}

void percuso_largura(NoArv* a){
    if (!arv_vazia(a)){
        cout<<"<" <<a->info;
        cout<<a->esq->info;
        cout<<(a->dir->info);
        arv_imprime(a->esq);
        arv_imprime(a->dir);
    }
    else {
        cout<<"<VAZIO>";
    }
}


main(){
    NoArv *b = arv_cria(1,arv_cria(2,arv_cria(4,arv_criavazia(),arv_criavazia()),arv_cria(5,arv_criavazia(),arv_criavazia())),arv_cria(3,arv_criavazia(),arv_cria(6,NULL,NULL)));
    //arv_imprime(b);
    percuso_largura(b);
}
