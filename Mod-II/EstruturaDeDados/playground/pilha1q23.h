#include <stdio.h>
#include <stdlib.h>

typedef char  Itemp;

typedef struct pilha{ //ao invés de ter que definir uma variável do tipo pilha tendo que 
	int max;			//escrever struct pilha [nome da variavel]
	int topo;			//você só precisa escrever Pilha [nome da variável]
	Itemp *item;
} *Pilha;


Pilha pilha(int m){ //uma função
	Pilha p = (Pilha)malloc(sizeof(Pilha)); //malloc retorna um endereço de memória, portante um ponteiro deve recebê-lo
	p->max=m;    //struct sendo passada por refer?ncia deve ser acessada dessa forma ou (*p).max
	p->topo=-1;
	p->item=(Itemp*)malloc(m*sizeof(Itemp));
	return p;	
}


bool pilhaVazia(Pilha p){
	return (p->topo == -1);
}


bool pilhaCheia(Pilha p){
	return (p->topo == (p->max-1));
}


void push(Itemp n, Pilha p){
	if(pilhaCheia(p)){
		printf("Pilha cheia");
	} else {
		p->topo += 1;
		p->item[p->topo] = n;	
	}	
}


Itemp pop(Pilha p){ //retorna o item  removido
	if(pilhaVazia(p)){
		printf("Pilha vazia");
	} else {
		Itemp x = p->item[p->topo];
		p->topo-=1;
		return x;
	}
	
}


void destroi(Pilha *Q){
	free((*Q)->item);
	(*Q)->item = NULL;
	free(*Q);
	(*Q) = NULL;
}

Itemp getTopo(Pilha p){
	if(pilhaVazia(p)){
		printf("Pilha vazia");
	}
	return p->item[p->topo];
}
		
