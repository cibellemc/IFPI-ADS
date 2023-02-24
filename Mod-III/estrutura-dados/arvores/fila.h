#include<stdio.h>
#include<stdlib.h>
#define avanca(i) (i = (i+1) % F->max)

typedef int Itemf;

typedef struct fila{
	int max;
	int total;
	int inicio;
	int final;
	Itemf *item;
} *Fila;

Fila fila(int m){
	Fila F = malloc(sizeof(struct fila));
	F->max = m;
	F->total = 0;
	F->inicio = 0;
	F->final = 0;
	F->item = malloc(m * sizeof(Itemf));
	return F;
}

int vazia(Fila F){
	return (F->total == 0);
}

int cheiaf(Fila F){
	return (F->total == F->max);
}

void enfileira(Itemf x, Fila F){
	if (cheiaf(F)) {
		puts("fila cheia!");
	}
	F->item[F->final] = x;
	avanca(F->final);
	F->total++;
}

int desenfileira(Itemf x, Fila F){
	if (vazia(F)) {
		puts("fila vazia!");
		abort();
	}
	F->item[F->inicio] = x;
	avanca(F->inicio);
	F->total--;
	return x;
}

void destroif(Fila *G){
	free((*G)->item);
	free(*G);
	*G = NULL;
}


