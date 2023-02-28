#include<stdio.h>
#include<iostream>
#include<stdlib.h>
#include "fila.h"
#define fmt "d"

using namespace std;

typedef int Item;

typedef struct arv {
	int info;
    struct arv *esq;
	struct arv *dir;
} *Arv;

Arv arv(int x,Arv e,Arv d){
	Arv novo= (Arv)malloc(sizeof(Arv));
	novo->esq = e;
	novo->dir =d ;
	return novo;
}

void emnivel(Arv A) {
	if (A == NULL) return;
	Fila F = fila(100);
	enfileira(A,F);
	while (!vazia(F)){
		Arv A = desenfileira(F);
		printf(fmt, A->info);
		if (A->esq != NULL) enfileira(A->esq, F);
		if (A->dir != NULL) enfileira(A->dir, F);
	}
}

void emordem(Arv A){
	if (A == NULL) return;
	emordem(A->esq);
	cout<<(fmt, A->info);
	emordem(A->dir);
}

void preordem(Arv A){
	if (A == NULL) return;
	cout<<(fmt, A->info);
	preordem(A->esq);
	preordem(A->dir);
}

void posordem(Arv A){
	if (A == NULL) return;
	posordem(A->esq);
	posordem(A->dir);
	cout<<(fmt, A->info);
}

void destroi(Arv *A){
	if (*A == NULL) return;
	destroi(&(*A->esq);
	destroi(&(*A->dir);
	free(*A);
	*A = NULL;
}

void ins(Item x, Arv *A){
	if(*A == NULL) *A = arv(x,NULL,NULL);
	else if(x <= (*A)->info) ins(x,&(*A)->esq);
	else ins(x, &(*A)->dir);
}

int busca(Item x, Arv A){
	if (A == NULL) return 0;
	if (x == A->info) return 1;
	if (x <= A->info) return busca(x, A->esq);
}

main(){
	Arv R = arv(1,arv(2,(arv(4,NULL,NULL)),arv(5,NULL,NULL)),arv(3,NULL,arv(6,NULL,NULL)));
	emordem(R);	
}